import redis from 'redis';
import { configs } from './configs'

const client = redis.createClient(configs.connection);

client.on('connect', connect);
client.on('error', error);
client.on('message', message);
configs.channels.forEach((channel) => {
    client.subscribe(channel.name)
})

function connect(){
    console.log('Connected to redis');
}

function error(e){
    console.log('Error occured', e);
}

function message(channel, message: any){
    
    const channelFunction = configs.channels.find((ch) => ch.name === channel);
    channelFunction.action(message) 

}
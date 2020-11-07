import redis from 'redis';
import { configs } from './configs'
import { Channels } from './interfaces';

const client = redis.createClient(configs.connection);

client.on('connect', connect);
client.on('error', error);

function connect(){
    console.log('Connected to redis');
}

function error(e){
    console.log('Error occured', e);
}

export default function(channel: Channels, data: string){
    client.publish(channel, data)
}
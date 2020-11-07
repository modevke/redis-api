import { demofunction } from ".";

export const configs = {
    connection: {
        host: '',
        password: '',
        port: 6379
    },
    channels: [
        { name: 'notify', action: demofunction }
    ]
}
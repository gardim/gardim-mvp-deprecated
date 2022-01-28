import { Client, Message } from 'react-native-paho-mqtt';
import { conversor } from './Validator';
//Set up an in-memory alternative to global localStorage
const myStorage = {
  setItem: (key, item) => {
    myStorage[key] = item;
  },
  getItem: (key) => myStorage[key],
  removeItem: (key) => {
    delete myStorage[key];
  },
};

const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const ClientMQTT = (topic, post) => {
  // Create a client instance

  const client = new Client({
    uri: 'ws://test.mosquitto.org:8080/',
    clientId: clientId,
    storage: myStorage,
  });

  // set event handlers
  client.on('connectionLost', (responseObject) => {
    if (responseObject.errorCode !== 0) {
      console.log(responseObject.errorMessage);
    }
  });
  client.on('messageReceived', (message) => {
    console.log(message.payloadString);
    post(parseInt(message.payloadString));
  });

  // connect the client
  client
    .connect({ useSSL: false })
    .then(() => {
      // Once a connection has been made, make a subscription and send a message.
      console.log('onConnect');
      console.log(topic);
      return client.subscribe(topic);
    })
    .catch((responseObject) => {
      if (responseObject.errorCode !== 0) {
        console.log('onConnectionLost:' + responseObject);
      }
    });
};

export default ClientMQTT;

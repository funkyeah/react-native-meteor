import Meteor from 'react-native-meteor';

export default function() {
    //const url = 'http://192.168.56.1:3000/websocket';
    //const url = 'http://localhost:3000/websocket';
    const url = 'http://192.168.1.117:3000/websocket';
    Meteor.connect(url);
}
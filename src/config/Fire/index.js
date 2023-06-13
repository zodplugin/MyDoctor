import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
require('firebase/auth');

firebase.initializeApp({
  apiKey: 'AIzaSyD8tAOaL5lqi-Ep8pM2newQxO0ArbqEXh8',
  authDomain: 'drkidv1.firebaseapp.com',
  databaseURL: 'https://drkidv1-default-rtdb.firebaseio.com',
  projectId: 'drkidv1',
  storageBucket: 'drkidv1.appspot.com',
  messagingSenderId: '71085137676',
  appId: '1:71085137676:web:01439464b2985868527329',
  measurementId: 'G-XCS5VRRK67',
});

const Fire = firebase;

export default Fire;

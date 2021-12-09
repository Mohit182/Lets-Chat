import firebase from "firebase/app";
import "firebase/auth";
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBioGGya4wfMwhaWXzxdIp0sJayW_TEoko",
    authDomain: "lets-chat-de15c.firebaseapp.com",
    projectId: "lets-chat-de15c",
    storageBucket: "lets-chat-de15c.appspot.com",
    messagingSenderId: "735852055932",
    appId: "1:735852055932:web:c6bb824152e021242868f9",
  })
  .auth();

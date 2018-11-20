import * as firebase from "firebase/app";
import "firebase/firebase-database";
import "firebase/firebase-auth";
import "firebase/firebase-storage";

const config = {
  apiKey: "AIzaSyC4FUuNYU6KU6TMMO5jlTVJhl8EQVKIkJE",
  authDomain: "nba-app-backend.firebaseapp.com",
  databaseURL: "https://nba-app-backend.firebaseio.com",
  projectId: "nba-app-backend",
  storageBucket: "nba-app-backend.appspot.com",
  messagingSenderId: "239409509082"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref("articles");
const firebaseTeams = firebaseDB.ref("teams");
const firebaseVideos = firebaseDB.ref("videos");

const firebaseLooper = snapshot => {
  const data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
};

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseTeams,
  firebaseVideos,
  firebaseLooper
};

const input = document.getElementById("file-input");

input.addEventListener("change", function(event) {
  const file = event.target.files[0];
  // store the file in a global variable for later use
  window.uploadedFile = file;
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMeJghJbE7VlV2S2Tp6pj1KUfB0WTHIHE",
  authDomain: "cruzhacks-app.firebaseapp.com",
  projectId: "cruzhacks-app",
  storageBucket: "cruzhacks-app.appspot.com",
  messagingSenderId: "828778435192",
  appId: "1:828778435192:web:574126d4531c04cdc1538d",
  measurementId: "G-DV68K5MRVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const inputFile = document.getElementById("input-file");
const driveButton = document.getElementById("drive-button");
const progressBar = document.getElementById("progress-bar");
const statusIcon = document.getElementById("status-icon");
const fileInfo = document.getElementById("file-info");

inputFile.addEventListener("change", handleFileUpload);
driveButton.addEventListener("click", handleDriveUpload);

const addProfileToFirestore = async (
  firstName,
  lastName,
  height,
  weight,
  lastSeenWearing,
  comments,
  selectedFile
) => {
  const db = firebase.firestore();
  const profilesRef = db.collection("mp_report");
  const newProfileRef = profilesRef.doc();
  const profileId = newProfileRef.id;
  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child(`${profileId}/${selectedFile.name}`);
  const uploadTask = fileRef.put(selectedFile);

  await uploadTask.then(() => {
    fileRef.getDownloadURL().then(async downloadURL => {
      await newProfileRef.set({
        firstName,
        lastName,
        height,
        weight,
        lastSeenWearing,
        comments,
        profileImageURL: downloadURL
      });
    });
  });
};

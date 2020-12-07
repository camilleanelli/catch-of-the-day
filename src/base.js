import Rebase from 're-base';
import firebase, { firestore } from 'firebase';

// on passe l'objet de config pour se connecter à firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDVmEZSoLzqf__4BUnSRyioxWq1AqN0IX0",
  authDomain: "catch-of-day-react-3ebd7.firebaseapp.com",
  databaseURL: "https://catch-of-day-react-3ebd7.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default dexport
export default base;

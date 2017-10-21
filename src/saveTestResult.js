import firebase from "./firebase";
import moment from "moment";

export default ({result}) => {
  const db = firebase.database();
  const timestamp = moment();
  const key = timestamp.format("YYYY/MM/DD/HH/mm");

  const ref = db.ref(`results/${key}`);
  return ref.set(result);
};

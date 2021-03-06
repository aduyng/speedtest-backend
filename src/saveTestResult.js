import firebase from "./firebase";
import moment from "moment";

export default ({result}) => {
  const db = firebase.database();
  const key = moment(result.timestamp).format("YYYY/MM/DD/HH/mm");

  const ref = db.ref(`speedtest/${key}`);
  return ref.set(result);
};

import Promise from "bluebird";
import runSpeedTest from "./runSpeedTest";
import saveDownErrors from "./saveDownErrors";
import setUp from "./setUp";

setUp()
.then(() => Promise.all([
  runSpeedTest(),
  saveDownErrors()
]))
.then(() => process.exit(0));
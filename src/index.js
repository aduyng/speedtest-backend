import Promise from "bluebird";
import runSpeedTest from "./runSpeedTest";
import saveDownErrors from "./saveDownErrors";

Promise.all([
  runSpeedTest(),
  saveDownErrors()
])
.then(() => process.exit(0));
import moment from "moment";
import saveTestResult from "./saveTestResult";
import runSpeedTest from "./runSpeedTest";

const startTime = moment();
console.log(`Started at ${startTime.format("YYYY-MM-DD HH:mm:ss A")}`);

runSpeedTest()
.then(result => saveTestResult({result}))
.then(() => {
  const endTime = moment();
  console.log(`Completed at ${endTime.format("YYYY-MM-DD HH:mm:ss A")} took ${endTime.valueOf() - startTime.valueOf()}ms`);
  process.exit(0);
})
.catch(error => {
  console.error(error);
  process.exit(error.code || 1);
});

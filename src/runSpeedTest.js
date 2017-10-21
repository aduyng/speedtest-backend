import moment from "moment";
import saveTestResult from "./saveTestResult";
import job from "./job";

export default () => {
  const startTime = moment();
  console.log(`Started at ${startTime.format("YYYY-MM-DD HH:mm:ss A")}`);

  return job()
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
};

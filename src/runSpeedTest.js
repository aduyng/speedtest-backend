import moment from "moment";
import {ensureFile, outputJson} from "fs-extra";
import Promise from "bluebird";
import path from "path";
import config from "./config";
import saveTestResult from "./saveTestResult";
import job from "./job";

export default () => {
  const startTime = moment();
  console.log(`Started at ${startTime.format("YYYY-MM-DD HH:mm:ss A")}`);

  return job()
  .then(result => {
    const entry = {result};
    const endTime = moment();
    entry.timestamp = endTime.valueOf();
    entry.took = endTime.valueOf() - startTime.valueOf();
    console.log(`Completed at ${endTime.format("YYYY-MM-DD HH:mm:ss A")} took ${entry.took}ms`);
    return saveTestResult({result: entry});
  })
  .catch(error => {
    const endTime = moment();

    const result = {
      timestamp: endTime.valueOf(),
      error,
      took: endTime.valueOf() - startTime.valueOf()
    };

    const filePath = path.join(config.logDir, `${endTime.format('YYYY-MM-DD-HH-mm')}.json`);

    return Promise.promisify(ensureFile)(filePath)
    .then(() => Promise.promisify(outputJson)(filePath, result));
  });
};


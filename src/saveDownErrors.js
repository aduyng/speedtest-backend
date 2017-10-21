import fs from "fs";
import path from "path";
import Promise from "bluebird";
import fsExtra from "fs-extra";
import config from "./config";
import saveTestResult from "./saveTestResult";

const readDir = Promise.promisify(fs.readdir);
const readJson = Promise.promisify(fsExtra.readJson);
const remove = Promise.promisify(fsExtra.remove);

export default () => readDir(config.logDir)
.then(entries => Promise.each(entries, (entry) => {
  const filePath = path.join(config.logDir, entry);
  return readJson(filePath)
  .then((result) => saveTestResult({result}))
  .then(() => remove(filePath));
}));

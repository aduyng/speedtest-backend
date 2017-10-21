import {ensureDir} from "fs-extra";
import Promise from "bluebird";
import config from "./config";

export default () => {
  return Promise.promisify(ensureDir)(config.logDir);
};


import speedtest from "speedtest-net";
import config from "./config";

export default () => new Promise((resolve, reject) => {
  const test = speedtest({
    maxTime: config.speedtest.maxTime
  });

  test.on('data', resolve);
  test.on('error', reject);
});

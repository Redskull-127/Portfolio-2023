import {
  getRemoteConfig,
  getValue,
  fetchAndActivate,
} from "firebase/remote-config";
import firebase_app from "./Config";

export async function remoteConfig() {
  const remoteConfig = getRemoteConfig(firebase_app);
  return remoteConfig;
}

export async function getRemoteConfigValue({key}) {
  const remote = remoteConfig();
    const Data = remote.then(async(remote) => {
    remote.settings.minimumFetchIntervalMillis = 1;
    const getData= fetchAndActivate(remote).then(() => {
      const blog = getValue(remote, `${key}`).asString();
      const blogData = JSON.parse(blog);
      return blogData;
    });
    return await getData;
});
    return await Data;
}

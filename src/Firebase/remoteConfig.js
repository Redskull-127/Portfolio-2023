import { getRemoteConfig, getValue, fetchAndActivate } from "firebase/remote-config";
import firebase_app from "./Config";

export default async function remoteConfig() {
    const remoteConfig = getRemoteConfig(firebase_app);
    return remoteConfig
}
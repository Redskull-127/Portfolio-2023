import firebase_app from "./Config";
import { getAnalytics, logEvent } from "firebase/analytics";

// const analytics = getAnalytics(firebase_app);
export default async function logEvents(event_name, event_params) {
    logEvent(getAnalytics(firebase_app), event_name, event_params);
    return console.log("Event logged");
}
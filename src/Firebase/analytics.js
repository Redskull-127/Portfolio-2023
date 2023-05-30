import { getAnalytics, isSupported, logEvent } from "firebase/analytics";
import firebase_app from "./Config";
const analytics = isSupported().then(yes => yes ? getAnalytics(firebase_app) : null);

export default async function getAnalyticsInstance() {
    return logEvent(await analytics, "404", {
        page: window.location.href
    })
}
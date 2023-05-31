import { getAnalytics, isSupported, logEvent } from "firebase/analytics";
import firebase_app from "./Config";
const analytics = isSupported().then(yes => yes ? getAnalytics(firebase_app) : null);

export async function getAnalyticsPageNotFound() {
    return logEvent(await analytics, "page_not_found")
}

export async function getAnalyticsPageView() {
    return logEvent(await analytics, "page_view",);
}

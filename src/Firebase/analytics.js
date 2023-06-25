import { getAnalytics, isSupported, logEvent } from "firebase/analytics";
import firebase_app from "./Config";

const analytics = isSupported().then((yes) =>
  yes ? getAnalytics(firebase_app) : null
);
async function getUser() {
  const fetchData = await fetch(
    process.env.NEXT_PUBLIC_HOMEPAGE + "/api/getUser/getUser"
  )
    .then((res) => res.json())
    .then((data) => data.message);
    return fetchData;
}
export async function getAnalyticsPageNotFound() {
  return logEvent(await analytics, "page_not_found", {
    page_location: window.location.href,
    user: await getUser(),
  });
}

export async function getAnalyticsPageView() {
  return logEvent(await analytics, "page_view");
}

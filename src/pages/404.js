import Link from "next/link";
import Head from "next/head";
import { getAnalyticsPageNotFound } from "@/Firebase/analytics";
import { ShowToast, ShowErrorToast } from "@/utils/Toast";
export default function NotFoundPage() {
  return (
    <main className="min-w-screen h-screen flex flex-col gap-8 justify-center items-center">
      <Head>
        <title>404 | Page not found</title>
      </Head>
      <h1 className="text-3xl flex gap-3">
        404 <span> | </span> Page not found
      </h1>
      <div className="flex gap-3">
        <Link
          href="/"
          className="cursor-pointer select-none hover:text-slate-300 hover:rounded-lg transition-all duration-300"
        >
          Go home
        </Link>
        <p>or</p>
        <p
          onClick={async (e) => {
            if (process.env.NODE_ENV === "production") {
              getAnalyticsPageNotFound()
                .then(
                  ShowToast({
                    text: "Thank you for reporting this to the admin! We will fix this as soon as possible!",
                  })
                )
                .catch((err) => {
                  ShowErrorToast({
                    text: "Something went wrong while reporting this to the admin!",
                  });
                });
            }
          }}
          className="cursor-pointer select-none hover:text-slate-300 hover:rounded-lg transition-all duration-300"
        >
          Report this to the admin!
        </p>
      </div>
    </main>
  );
}

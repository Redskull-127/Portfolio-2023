export default async function TwitterAPI(req, res) {
    const data = await fetch(
      process.env.NEXT_PUBLIC_TWITTER_API
    ).then((res) => res.json());
    res.status(200).json({ data: data });
  }
  
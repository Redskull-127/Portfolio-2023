export default async function TwitterAPI(req, res) {
    try{
      const data = await fetch(
        process.env.NEXT_PUBLIC_TWITTER_API
      ).then((res) => res.json());
      res.status(200).json({ data: data });
    } catch(err) {
      console.log(err);
      res.status(500).send({ error: err.message });
    }
  }
  
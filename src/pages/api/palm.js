export default async function PalmAPI(req, res) {
    const { prompt } = req.query;
    console.log(prompt);
    if(prompt === undefined || prompt === null) return res.status(400).send({ err: "prompt is required" });
    try{
      const data = await fetch(
        process.env.NEXT_PUBLIC_PALM_AI_API, {
            body: `{ \"prompt\": { \"text\": \"${prompt}\"} }`,
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        }
      ).then((res) => res.json())
      res.status(200).json({ response: data.candidates[0].output });
    } catch(err) {
      console.log(err);
      res.status(500).send({ err: err.message });
    }
}

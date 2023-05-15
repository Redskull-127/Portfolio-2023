export default async function GithubAPI(req, res) {
  try{
    const data = await fetch(
      "https://api.github.com/users/redskull-127/repos?sort=created"
    ).then((res) => res.json());
    res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
}

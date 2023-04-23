export default async function GithubAPI(req, res) {
  const data = await fetch(
    "https://api.github.com/users/redskull-127/repos?sort=created"
  ).then((res) => res.json());
  res.status(200).json({ data: data });
  // res.status(200).json({ name: 'John Doe' })
}

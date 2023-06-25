import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

export default async function GetUser(req, res) {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    res.send({message: session.user.email})
  } else {
    res.json({message: "Anonymous user"})
  }
  res.end()
}
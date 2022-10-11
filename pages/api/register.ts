// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../model/User";

interface ResponseData {
  error?: string;
  msg?: string;
}

const validateForm = async (
  publicKey: string
) => {
  // if (publicKey.length !== 42) {
  //   return { error: "Public key must have exactly 42 characters" };
  // }
  await dbConnect();
  const user = await User.findOne({ publicKey: publicKey });

  if (user) {
    return { error: "User already exists" };
  }

  return null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  // validate if it is a POST
  if (req.method !== "POST") {
    return res
      .status(200)
      .json({ error: "This API call only accepts POST methods" });
  }

  // get and validate body variables
  const { publicKey } = req.body;

  const errorMessage = await validateForm(publicKey);
  if (errorMessage) {
    return res.status(400).json(errorMessage as ResponseData);
  }


  // create new User on MongoDB
  const newUser = new User({
    publicKey: publicKey
  });

  newUser
    .save()
    .then(() =>
      res.status(200).json({ msg: "Successfuly created new User: " + newUser })
    )
    .catch((err: string) =>
      res.status(400).json({ error: "Error on '/api/register': " + err })
    );
}
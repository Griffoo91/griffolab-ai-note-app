import prisma from "@/lib/db/prisma";
import { createNoteSchema } from "@/lib/validation/note";
import { auth } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next"

export default async function postNoteHandler(req: NextApiRequest, res: NextApiResponse) {

  
  try {
    const body = await req.body;

    const parseResult = createNoteSchema.safeParse(body);

    if (!parseResult.success) {
      console.error(parseResult.error);
      return res.status(400).json({Error: "Invalid input"})
    }

    const { title, content } = parseResult.data;
    const { userId } = auth();

    if (!userId) {
      return res.status(401).json({Error: "Unauthorised"})
    }

    const note = await prisma.note.create({
      data: {
        title,
        content,
        userId,
      },
    });

    return res.status(201).json({ note })
  } catch (error) {
    console.error(error);
    return res.status(500).json({ Error: "Internal server error"})
  }
}



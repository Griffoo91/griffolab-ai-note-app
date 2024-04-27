import { Note as NoteModel } from "@prisma/client";
import { Card, CardHeader, CardTitle } from "./ui/card";

interface noteProps{
    note: NoteModel
}

export default function Note({note}: noteProps) {

    const wasUpdated = note.updateAt > note.createdAt;

    const createdUpdatedAtTimestamp = (
        wasUpdated ? note.updateAt : note.createdAt
    ).toDateString()

    return(
        <Card>
            <CardHeader>
                <CardTitle>{note.title}</CardTitle>
            </CardHeader>
        </Card>
    )
}
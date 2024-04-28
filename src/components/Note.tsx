import { Note as NoteModel } from "@prisma/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

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
                <CardDescription>
                    {createdUpdatedAtTimestamp}
                    {wasUpdated && " (updated)"}
                    </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="whitespace-pre-line">{note.content}</p>
            </CardContent>
        </Card>
    )
}
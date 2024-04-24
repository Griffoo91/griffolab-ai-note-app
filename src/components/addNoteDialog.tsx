import { CreateNoteSchema, createNoteSchema } from "@/lib/validation/note";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface AddNoteDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
export default function AddNoteDialog({ open, setOpen }: AddNoteDialogProps) {
  const form = useForm<CreateNoteSchema>({
    resolver: zodResolver(createNoteSchema),
  });
  async function onSubmit(input: CreateNoteSchema) {
    alert(input);
  }
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Notes</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

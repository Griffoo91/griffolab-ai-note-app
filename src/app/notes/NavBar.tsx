"use client"

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Griffobg0.png";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddNoteDialog from "@/components/addNoteDialog";

export default function NavBar() {
    const [showAddNoteDialog, setShowAddNoteDialog] = useState(false);
  return (
    <>
    <div className="p-4 shadow">
      <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        <Link href="/notes" className="flex items-center gap-1">
          <Image src={Logo} alt="GriffoLab logo" width={40} height={40} />
          <span className="font-bold">GriffoLabAi</span>
        </Link>
        <div className="flex items-center gap-2">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
            }}
          />
          <Button>
            <Plus size={20} className="mr-2"/>
            Add Note
          </Button>
        </div>
      </div>
    </div>
    {showAddNoteDialog && <AddNoteDialog open={showAddNoteDialog} setOpen={setShowAddNoteDialog} />}
    </>
  );
}

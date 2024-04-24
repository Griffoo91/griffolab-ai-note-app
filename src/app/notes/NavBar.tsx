import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Griffobg0.png"

export default function NavBar() {
  return <div className="p-4 shadow">
    <div className="m-auto max-w-7xl flex flex-wrap gap-3 items-center justify-between">
        <Link href="/notes" className="flex items-center gap-1" >
            <Image src={Logo} alt="GriffoLab logo" width={40} height={40} />
            <span className="font-bold">GriffoLabAi</span>
        </Link>
        <span>Element 2</span>
    </div>
    </div>;
}

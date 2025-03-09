import { Calendar1, ContactRound, FileText, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profile from "@/assets/images/profile.png";

export function Sidebar() {
  return (
    <aside className="w-[20%] min-h-screen hidden lg:flex flex-col border-r-2 border-custom-gray-50">
      <div className="flex mt-5 items-center px-4 gap-2">
        <Image
          width={20}
          height={20}
          src={profile}
          alt="foto de perfil"
          className="rounded-full"
        />
        <span className="text-custom-gray-500 font-semibold">
          Marcelo Timóteo
        </span>
      </div>

      <ul className="space-y-4 px-4 mt-10 text-custom-gray-500 font-semibold">
        <li className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <House className="w-5 h-5" />
            Pagina Inicial
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Link href="#" className="flex items-center gap-2">
            <ContactRound className="w-5 h-5" />
            Clientes
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Link href="#" className="flex items-center gap-2">
            <Calendar1 className="w-5 h-5" />
            Agenda
          </Link>
        </li>

        <li className="pt-[6rem]">
          <button className="flex items-center w-full gap-2">
            <FileText className="w-5 h-5" />
            <span>Cadastros</span>
          </button>
          <ul className="pl-10 mt-1 space-y-1">
            <li className="flex items-center p-2 text-custom-red-500">
              <Link href="#">Ordem de Serviço</Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

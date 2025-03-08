import { Calendar1, ContactRound, FileText, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Importando o Link do Next.js

export function Sidebar() {
  return (
    <aside className="w-[20%] flex flex-col border-2 border-r-custom-gray-50">
      <div className="flex mt-5 items-center">
        <Image
          width={20}
          height={20}
          src="../../assets/images/profile.svg"
          alt="foto de perfil"
          className="rounded-full"
        />
        <span>Marcelo Timóteo</span>
      </div>

      <ul className="space-y-4 px-4 mt-10">
        <li className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <House className="w-5 h-5" />
            Pagina Inicial
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Link href="/clientes" className="flex items-center gap-2">
            <ContactRound className="w-5 h-5" />
            Clientes
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Link href="/agenda" className="flex items-center gap-2">
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
            <li className="flex items-center p-2 text-red-600">
              <Link href="/cadastros/ordem-de-servico">Ordem de Serviço</Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

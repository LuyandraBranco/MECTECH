import { Breadcrumb } from "./Breadcrumb";
import Image from "next/image";
import mectech from "@/assets/images/MECTECH.png";
import { Inbox, Info, ListChecks, Settings } from "lucide-react";

export function Header() {
  return (
    <header className="w-full h-[5rem] flex justify-between">
      <Breadcrumb label="Cadastros" href="Ordem de Serviço" />
      <div className="flex gap-4 items-center cursor-pointer">
        <Image width={83.23} height={18.9} src={mectech} alt="logo mectech" />
        <button
          type="button"
          className="w-[4.875rem] h-[1.3125] bg-custom-red-500 text-white flex items-center justify-center text-sm rounded-md"
        >
          <ListChecks className="w-5 h-15" /> Tarefas
        </button>
        <div className="relative">
          <Inbox size={22} color="#FF0000" />
          <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-600 rounded-full"></span>
        </div>
        <Info size={22} color="#FF0000" />
        <Settings size={22} color="#FF0000" />
      </div>
    </header>
  );
}

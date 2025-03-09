import { Breadcrumb } from "./Breadcrumb";

export function Header(){
    return (
        <header className="w-full h-[5rem] flex justify-between">
            <Breadcrumb label="Cadastros" href="Ordem de Serviço"/>
        </header>
    )
}
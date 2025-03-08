import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <main className="w-[80%] h-auto flex justify-between p-10">
        <section className="w-[40%] h-auto flex flex-col">
          <h1 className="text-2xl font-semibold">Nova Ordem de Serviço</h1>
          <form>
            <div className="flex flex-col mt-5">
              <label htmlFor="name">Nome da Ordem do Serviço</label>
              <input
                type="text"
                name="name"
                className="w-[95%] border-2 border-gray-100 rounded-md p-1 mt-2"
              />
            </div>

            <div className="flex flex-col mt-5">
              <label htmlFor="name">Descrição do Serviço</label>
              <textarea className="w-[95%] border-2 border-gray-100 rounded-md pl-1 pb-8 mt-2" />
            </div>

            <div className="flex flex-col mt-5">
              <h2 className="text-md text-red-500 font-semibold">
                Itens Adicionais
              </h2>
              <div className="w-full flex justify-between mt-2">
                <div className="w-[75%] flex flex-col">
                  <label htmlFor="name">Item</label>
                  <input
                    type="text"
                    name="name"
                    className="w-[95%] border-2 border-gray-100 rounded-md p-1 mt-2"
                  />
                </div>
                <div className="w-[25%] flex flex-col">
                  <label htmlFor="name">Quantidade</label>
                  <input
                    type="text"
                    name="name"
                    className="w-[85%] border-2 border-gray-100 rounded-md p-1 mt-2"
                  />
                </div>
              </div>
              <div className="w-full flex justify-between mt-5">
                <button
                  type="button"
                  className="btn w-[63%] bg-red-500 p-1 rounded-md text-white "
                >
                  Adicionar Item
                </button>
                <button
                  type="button"
                  className="btn w-[35%] bg-red-500 p-1 rounded-md text-white "
                >
                  Texto Livre
                </button>
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <h2 className="text-md text-green-500 font-semibold">
                Materias Complementares
              </h2>
              <div className="w-full flex justify-between mt-2">
                <div className="w-[75%] flex flex-col">
                  <label htmlFor="name">Item</label>
                  <input
                    type="text"
                    name="name"
                    className="w-[95%] border-2 border-gray-100 rounded-md p-1 mt-2"
                  />
                </div>
                <div className="w-[25%] flex flex-col">
                  <label htmlFor="name">Quantidade</label>
                  <input
                    type="text"
                    name="name"
                    className="w-[85%] border-2 border-gray-100 rounded-md p-1 mt-2"
                  />
                </div>
              </div>
              <div className="w-full flex justify-between mt-5">
                <button
                  type="button"
                  className="btn w-[63%] bg-green-500 p-1 rounded-md text-white "
                >
                  Adicionar Material
                </button>
                <button
                  type="button"
                  className="btn w-[35%] bg-green-500 p-1 rounded-md text-white "
                >
                  Texto Livre
                </button>
              </div>

              <div className="w-full flex flex-col mt-8">
                <label htmlFor="name">
                  Observações ou Instruções Adicionais
                </label>
                <textarea className="w-[100%] border-2 border-gray-100 rounded-md p-1 pb-8 mt-2" />
              </div>

              <div className="flex justify-between mt-5">
                <button
                  type="button"
                  className="btn w-[30%] border-2 border-gray-100 p-1.5 rounded-md"
                >
                  Imprimir
                </button>

                <div className="w-[65%] flex gap-3 justify-end">
                  <button
                    type="button"
                    className="btn w-[30%] border-2 border-gray-100 p-1.5 rounded-md"
                  >
                    Cancelar
                  </button>

                  <button
                    type="button"
                    className="btn w-[30%] bg-red-500 p-1.5 rounded-md text-white"
                  >
                    Salvar
                  </button>
                </div>
              </div>

              <div className="flex justify-end gap-1 mt-6 mb-8">
                <input type="checkbox" />
                Enviar por e-mail ao salvar
              </div>
            </div>
          </form>
        </section>

        <section className="w-[55%] h-auto bg-custom-gray-50 p-10 rounded-md">
          teste
        </section>
      </main>
    </div>
  );
}

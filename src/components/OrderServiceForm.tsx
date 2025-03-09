import { useState } from "react";

interface Item {
  name: string;
  quantity: number;
}

interface FormData {
  name: string;
  description: string;
  additionalItems: Item[];
  complementaryMaterials: Item[];
  observations: string;
}

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export function OrderServiceForm({ formData, setFormData }: Props) {
  const [newAdditionalItem, setNewAdditionalItem] = useState<Item>({
    name: "",
    quantity: 0,
  });

  const [newComplementaryMaterial, setNewComplementaryMaterial] =
    useState<Item>({
      name: "",
      quantity: 0,
    });

  const addAdditionalItem = () => {
    if (!newAdditionalItem.name) return;
    setFormData((prev) => ({
      ...prev,
      additionalItems: [...prev.additionalItems, newAdditionalItem],
    }));
    setNewAdditionalItem({ name: "", quantity: 1 });
  };

  const addComplementaryMaterial = () => {
    if (!newComplementaryMaterial.name) return;
    setFormData((prev) => ({
      ...prev,
      complementaryMaterials: [
        ...prev.complementaryMaterials,
        newComplementaryMaterial,
      ],
    }));
    setNewComplementaryMaterial({ name: "", quantity: 1 });
  };
  return (
    <form className="flex flex-col">
      <div className="flex flex-col mt-5">
        <label htmlFor="name">Nome da Ordem do Serviço</label>
        <input
          type="text"
          name="name"
          className="w-[95%] border-2 border-gray-100 rounded-md p-1 mt-2"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="name">Descrição do Serviço</label>
        <textarea
          className="w-[95%] border-2 border-gray-100 rounded-md pl-1 pb-8 mt-2"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col mt-5">
        <h2 className="text-md text-red-500 font-semibold">Itens Adicionais</h2>
        <div className="w-full flex justify-between mt-2">
          <div className="w-[75%] flex flex-col">
            <label htmlFor="name">Item</label>
            <input
              type="text"
              name="name"
              className="w-[95%] border-2 border-gray-100 rounded-md p-1 mt-2"
              value={newAdditionalItem.name}
              onChange={(e) =>
                setNewAdditionalItem({
                  ...newAdditionalItem,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="w-[25%] flex flex-col">
            <label htmlFor="name">Quantidade</label>
            <input
              type="text"
              name="name"
              className="w-[85%] border-2 border-gray-100 rounded-md p-1 mt-2"
              value={newAdditionalItem.quantity}
              onChange={(e) =>
                setNewAdditionalItem({
                  ...newAdditionalItem,
                  quantity: Number(e.target.value),
                })
              }
            />
          </div>
        </div>
        <div className="mt-5">
          <ul>
            {formData.additionalItems.map((item, index) => (
              <li key={index}>
                {item.name}...................................................
                {item.quantity}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex justify-between mt-5">
          <button
            type="button"
            className="btn w-[63%] bg-red-500 p-1 rounded-md text-white"
            onClick={addAdditionalItem}
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
              value={newComplementaryMaterial.name}
              onChange={(e) =>
                setNewComplementaryMaterial({
                  ...newComplementaryMaterial,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="w-[25%] flex flex-col">
            <label htmlFor="name">Quantidade</label>
            <input
              type="text"
              name="name"
              className="w-[85%] border-2 border-gray-100 rounded-md p-1 mt-2"
              value={newComplementaryMaterial.quantity}
              onChange={(e) =>
                setNewComplementaryMaterial({
                  ...newComplementaryMaterial,
                  quantity: Number(e.target.value),
                })
              }
            />
          </div>
        </div>

        <div className="mt-5">
          <ul>
            {formData.complementaryMaterials.map((material, index) => (
              <li key={index}>
                {material.name} - {material.quantity}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex justify-between mt-5">
          <button
            type="button"
            className="btn w-[63%] bg-green-500 p-1 rounded-md text-white"
            onClick={addComplementaryMaterial}
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
          <label htmlFor="name">Observações ou Instruções Adicionais</label>
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
  );
}

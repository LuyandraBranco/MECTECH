import { useState } from "react";

interface Item {
  name: string;
  quantity: string;
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
    quantity: "",
  });

  const [newComplementaryMaterial, setNewComplementaryMaterial] =
    useState<Item>({
      name: "",
      quantity: "",
    });

  const addAdditionalItem = () => {
    if (!newAdditionalItem.name) return;
    setFormData((prev) => ({
      ...prev,
      additionalItems: [...prev.additionalItems, newAdditionalItem],
    }));
    setNewAdditionalItem({ name: "", quantity: "" });
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
    setNewComplementaryMaterial({ name: "", quantity: "" });
  };
  return (
    <form className="flex flex-col">
      <div className="flex flex-col mt-5">
        <label htmlFor="name" className="text-sm">
          Nome da Ordem do Serviço
        </label>
        <input
          type="text"
          name="name"
          className="w-[95%] border-2 border-custom-gray-100 rounded-md p-1 mt-2"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="name" className="text-sm">
          Descrição do Serviço
        </label>
        <textarea
          className="w-[95%] h-[5.1875rem] border-2 border-custom-gray-100 rounded-md pl-1 pb-8 mt-2 resize-none"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col mt-5">
        <h2 className="text-md text-red-500 font-semibold text-base">
          Itens Adicionais
        </h2>
        <div className="w-full flex justify-between mt-2">
          <div className="w-[75%] flex flex-col">
            <label htmlFor="name" className="text-sm">
              Item
            </label>
            <input
              type="text"
              name="name"
              className="w-[95%] border-2 border-custom-gray-100 rounded-md p-1 mt-2"
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
            <label htmlFor="name" className="text-sm">
              Quantidade
            </label>
            <input
              type="text"
              name="name"
              className="w-[85%] border-2 border-custom-gray-100 rounded-md p-1 mt-2"
              value={newAdditionalItem.quantity}
              onChange={(e) =>
                setNewAdditionalItem({
                  ...newAdditionalItem,
                  quantity: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="mt-5">
          <ul>
            {formData.additionalItems.map((item, index) => (
              <li key={index} className="text-sm">
                {item.name}...................................................
                {item.quantity}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex justify-between mt-5">
          <button
            type="button"
            className="btn w-[63%] bg-red-500 p-1 rounded-md text-white text-sm font-semibold"
            onClick={addAdditionalItem}
          >
            Adicionar Item
          </button>
          <button
            type="button"
            className="btn w-[35%] bg-red-500 p-1 rounded-md text-white text-sm font-semibold"
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
            <label htmlFor="name" className="text-sm">
              Item
            </label>
            <input
              type="text"
              name="name"
              className="w-[95%] border-2 border-custom-gray-100 rounded-md p-1 mt-2"
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
            <label htmlFor="name" className="text-sm">
              Quantidade
            </label>
            <input
              type="text"
              name="name"
              className="w-[85%] border-2 border-custom-gray-100 rounded-md p-1 mt-2"
              value={newComplementaryMaterial.quantity}
              onChange={(e) =>
                setNewComplementaryMaterial({
                  ...newComplementaryMaterial,
                  quantity: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="w-full mt-5">
          <ul className="w-full">
            {formData.complementaryMaterials.map((material, index) => (
              <li key={index} className="text-sm">
                {material.name} - {material.quantity}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex justify-between mt-5">
          <button
            type="button"
            className="btn w-[63%] bg-green-500 p-1 rounded-md text-white text-sm font-semibold"
            onClick={addComplementaryMaterial}
          >
            Adicionar Material
          </button>
          <button
            type="button"
            className="btn w-[35%] bg-green-500 p-1 rounded-md text-white text-sm font-semibold"
          >
            Texto Livre
          </button>
        </div>

        <div className="w-full flex flex-col mt-8">
          <label htmlFor="name" className="text-sm">
            Observações ou Instruções Adicionais
          </label>
          <textarea
            className="w-[100%] h-[9.025rem] border-2 border-custom-gray-100 rounded-md p-1 pb-8 mt-2 resize-none"
            onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
          />
        </div>

        <div className="flex justify-between mt-5">
          <button
            type="button"
            className="btn w-[30%] border-2 border-custom-gray-100 p-1.5 rounded-md text-sm font-semibold"
          >
            Imprimir
          </button>

          <div className="w-[65%] flex gap-3 justify-end">
            <button
              type="button"
              className="btn w-[30%] border-2 border-custom-gray-100 p-1.5 rounded-md text-sm font-semibold"
            >
              Cancelar
            </button>

            <button
              type="button"
              className="btn w-[30%] bg-red-500 p-1.5 rounded-md text-white text-sm font-semibold"
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

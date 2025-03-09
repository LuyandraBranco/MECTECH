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
        <label htmlFor="name" className="text-sm font-medium">
          Nome da Ordem do Serviço
        </label>
        <input
          type="text"
          name="name"
          className="w-[100%] border-2 border-custom-gray-100 rounded-md p-1 mt-2 pl-2"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="name" className="text-sm font-medium">
          Descrição do Serviço
        </label>
        <textarea
          className="w-[100%] h-[5.1875rem] border-2 border-custom-gray-100 rounded-md pl-1 pb-8 mt-2 pl-2 resize-none"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col mt-5">
        <h2 className="text-md text-custom-red-500 font-semibold text-base">
          Itens Adicionais
        </h2>
        <div className="w-full flex justify-between mt-2">
          <div className="w-[80%] flex flex-col">
            <label htmlFor="name" className="text-sm font-medium">
              Item
            </label>
            <input
              type="text"
              name="name"
              className="w-[95%] border-2 border-custom-gray-100 rounded-md p-1 mt-2 pl-2"
              value={newAdditionalItem.name}
              onChange={(e) =>
                setNewAdditionalItem({
                  ...newAdditionalItem,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="w-[19.5%] flex flex-col justify-en">
            <label htmlFor="name" className="text-sm font-medium">
              Quantidade
            </label>
            <input
              type="text"
              name="name"
              className="w-[100%] border-2 border-custom-gray-100 rounded-md p-1 mt-2 pl-2"
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
            className="btn w-[63%] bg-custom-red-500 p-1 rounded-md text-white text-sm font-semibold"
            onClick={addAdditionalItem}
          >
            Adicionar Item
          </button>
          <button
            type="button"
            className="btn w-[35%] bg-custom-red-500 p-1 rounded-md text-white text-sm font-semibold"
            onClick={() => {
              setFormData((prev) => ({
                ...prev,
                additionalItems: [],
              }));
            }}
          >
            Texto Livre
          </button>
        </div>
      </div>

      <div className="flex flex-col mt-5">
        <h2 className="text-md text-custom-green-300 font-semibold">
          Materias Complementares
        </h2>
        <div className="w-full flex justify-between mt-2">
          <div className="w-[80%] flex flex-col">
            <label htmlFor="name" className="text-sm font-medium">
              Item
            </label>
            <input
              type="text"
              name="name"
              className="w-[95%] border-2 border-custom-gray-100 rounded-md p-1 mt-2 pl-2"
              value={newComplementaryMaterial.name}
              onChange={(e) =>
                setNewComplementaryMaterial({
                  ...newComplementaryMaterial,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="w-[19.5%] flex flex-col justify-end">
            <label htmlFor="name" className="text-sm font-medium">
              Quantidade
            </label>
            <input
              type="text"
              name="name"
              className="w-[100%] border-2 border-custom-gray-100 rounded-md p-1 mt-2 pl-2"
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
                {material.name} ............................................
                {material.quantity}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex justify-between mt-5">
          <button
            type="button"
            className="btn w-[63%] bg-custom-green-300 p-1 rounded-md text-white text-sm font-semibold"
            onClick={addComplementaryMaterial}
          >
            Adicionar Material
          </button>
          <button
            type="button"
            className="btn w-[35%] bg-custom-green-300 p-1 rounded-md text-white text-sm font-semibold"
            onClick={() => {
              setFormData((prev) => ({
                ...prev,
                complementaryMaterials: [],
              }));
            }}
          >
            Texto Livre
          </button>
        </div>

        <div className="w-full flex flex-col mt-8">
          <label htmlFor="name" className="text-sm font-medium">
            Observações ou Instruções Adicionais
          </label>
          <textarea
            className="w-[100%] h-[9.025rem] border-2 border-custom-gray-100 rounded-md p-1 pb-8 mt-2 pl-2 resize-none"
            onChange={(e) =>
              setFormData({ ...formData, observations: e.target.value })
            }
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
              className="btn w-[30%] bg-custom-red-500 p-1.5 rounded-md text-white text-sm font-semibold"
            >
              Salvar
            </button>
          </div>
        </div>

        <div className="flex items-center justify-end gap-1 mt-6 mb-8">
          <input
            type="checkbox"
            className="w-5 h-5 border-2 border-red-500 rounded-sm checked:bg-red-500 checked:border-transparent focus:ring-0"
          />
          Enviar por e-mail ao salvar
        </div>
      </div>
    </form>
  );
}

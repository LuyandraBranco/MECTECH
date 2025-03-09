export interface Item {
  name: string;
  quantity: string;
}

export interface FormData {
  name: string;
  description: string;
  additionalItems: Item[];
  complementaryMaterials: Item[];
  observations: string;
}

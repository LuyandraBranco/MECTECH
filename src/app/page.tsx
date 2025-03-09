"use client";

import { OrderServiceForm } from "@/components/OrderServiceForm";
import OrderServicePDF from "@/components/OrderServicePDF";
import { Sidebar } from "@/components/Sidebar";
import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";

export interface Item {
  name: string;
  quantity: number;
}

export interface FormData {
  name: string;
  description: string;
  additionalItems: Item[];
  complementaryMaterials: Item[];
  observations: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    additionalItems: [],
    complementaryMaterials: [],
    observations: "",
  });
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <main className="w-[80%] h-auto flex justify-between p-10">
        <section className="w-[40%] h-auto flex flex-col">
          <h1 className="text-2xl font-semibold">Nova Ordem de Serviço</h1>
          <OrderServiceForm formData={formData} setFormData={setFormData} />
        </section>

        <section className="w-[55%] h-auto bg-custom-gray-50 p-10 rounded-md">
          <PDFViewer width="100%" height="500px" showToolbar={false}>
            <OrderServicePDF formData={formData} />
          </PDFViewer>
        </section>
      </main>
    </div>
  );
}

"use client";

import { Header } from "@/components/Header";
import { OrderServiceForm } from "@/components/OrderServiceForm";
import OrderServicePDF from "@/components/OrderServicePDF/OrderServicePDF";
import { Sidebar } from "@/components/Sidebar";
import dynamic from "next/dynamic";
import { useState } from "react";

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

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    additionalItems: [],
    complementaryMaterials: [],
    observations: "",
  });

  const PDFViewer = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
    {
      ssr: false,
    }
  );
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="w-full h-auto flex flex-col p-10">
        <Header />
        <main className="w-[100%] h-auto flex justify-between mt-[3%]">
          <section className="w-[35%] h-auto flex flex-col text-custom-gray-500">
            <h1 className="text-[1.75rem] font-bold">Nova Ordem de Serviço</h1>
            <OrderServiceForm formData={formData} setFormData={setFormData} />
          </section>

          <section className="w-[63%] h-auto bg-custom-gray-50 p-10 rounded-md">
            <PDFViewer width="100%" height="1000px" showToolbar={false}>
              <OrderServicePDF formData={formData} />
            </PDFViewer>
          </section>
        </main>
      </div>
    </div>
  );
}

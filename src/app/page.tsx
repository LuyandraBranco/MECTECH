"use client";

import { Header } from "@/components/Header";
import { OrderServiceForm } from "@/components/OrderServiceForm";
import OrderServicePDF from "@/components/OrderServicePDF/OrderServicePDF";
import { Sidebar } from "@/components/Sidebar";
import dynamic from "next/dynamic";
import { useState, useEffect, useMemo } from "react";
import { FormData } from "@/@types/FormData";

const PDFViewer = dynamic(() => import("@react-pdf/renderer").then((mod) => mod.PDFViewer), {
  ssr: false,
});

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    additionalItems: [],
    complementaryMaterials: [],
    observations: "",
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pdfDocument = useMemo(() => <OrderServicePDF formData={formData} />, [formData]);

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
            {isClient && (
              <PDFViewer width="100%" height="1000px" showToolbar={false}>
                {pdfDocument}
              </PDFViewer>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

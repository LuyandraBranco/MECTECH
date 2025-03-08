import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <main className="w-[80%] h-screen flex flex-col">
      </main>
    </div>
  );
}

import TopNavBar from "~/component/common/topNavBar";

import { Outlet } from "react-router";
import Footer from "~/component/common/footer";
import type { Route } from "../+types/root";



export function meta({ }: Route.MetaArgs) {
  return [
    { title: "EPIXELAB | JAVIR" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function MainLayOut() {
  return (
   <>
      <TopNavBar />
      <main className="flex-1 pt-20 flex flex-col min-h-100vh w-full max-w-7xl mx-auto px-6">
        <Outlet />
      </main>

      <Footer />
   </>
  );
}

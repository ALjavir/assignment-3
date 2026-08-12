import TopNavBar from "~/component/common/TopNavBar/topNavBar";
import "./layout.css"
import { Outlet } from "react-router";
import Footer from "~/component/common/footer/footer";
import type { Route } from "./+types/layout";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "EPIXELAB | JAVIR" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function MainLayOut() {
  return (
        <div className="main-layout-container">
             <div className="layout-background" />
           <TopNavBar/>
            <main className="main-layout-section">
                <Outlet />
            </main>
         
            <Footer />
        </div>
    );
}

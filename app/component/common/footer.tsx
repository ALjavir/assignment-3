import { NavLink } from "react-router";
import logoImg from "~/assets/image/logo.png"

export default function Footer() {
    const navItems = [
        { name: "portfolio", path: "/portfolio" },
        { name: "How It Works", path: "/About-US" },
        { name: "Pricing", path: "/Our-App" },
        { name: "About", path: "/Contacts" },
        { name: "Login", path: "/Contacts" },
    ];
    return (
        <footer id="footer" className="w-full bg-white px-8 py-10 md:px-20 lg:px-8">
         
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 mb-8">

           
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16 w-full md:w-auto text-center md:text-left">
                    <img
                        className="h-8 md:h-10 w-auto object-contain"
                        src={logoImg}
                        alt="Pixelab"
                    />
                    <p className="text-sm font-medium text-gray-600 md:text-base">
                        © 2026 Pixelab. All rights reserved.
                    </p>
                </div>

            
                <nav className="flex flex-wrap items-center justify-center md:justify-end gap-5 md:gap-8 w-full md:w-auto">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-sm md:text-base font-medium transition-colors ${isActive
                                    ? "text-o font-bold"
                                    : "text-gray-600 hover:text-black"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </div>

        
            <div className="pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-400 text-center md:text-left max-w-4xl">
                    Startup Framework contains components and complex blocks
                    which can easily be integrated into almost any design.
                </p>
            </div>
        </footer>
    )
}
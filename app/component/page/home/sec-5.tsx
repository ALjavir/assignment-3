import imgT1 from "~/assets/image/team (1).jpg"
import imgT2 from "~/assets/image/team (2).jpg"
import imgT3 from "~/assets/image/team (3).jpg"
import ic1 from "~/assets/image/fa-twitter.svg"
import ic2 from "~/assets/image/fa-facebook-square.svg"
import ic3 from "~/assets/image/fa-dribbble.svg"

export default function Sec5() {
    const sec5Data = [
        {
            img: imgT1,
            name: "Vanessa Laird",
            role: "UI Designer",
            social: [
                {
                    icon: ic1,
                    link: "https://twitter.com/rayhancurran",
                },
                {
                    icon: ic2,
                    link: "https://www.facebook.com/rayhancurran",
                },
                {
                    icon: ic3,
                    link: "https://www.instagram.com/rayhancurran",
                },
            ],
        },
        {
            img: imgT2,
            name: "Mason Campbel",
            role: "UI Designer",
            social: [
                {
                    icon: ic1,
                    link: "https://twitter.com/rayhancurran",
                },
                {
                    icon: ic2,
                    link: "https://www.facebook.com/rayhancurran",
                },
                {
                    icon: ic3,
                    link: "https://www.instagram.com/rayhancurran",
                },
            ],
        }, {
            img: imgT3,
            name: "Irea Evans",
            role: "Client Manager",
            social: [
                {
                    icon: ic1,
                    link: "https://twitter.com/rayhancurran",
                },
                {
                    icon: ic2,
                    link: "https://www.facebook.com/rayhancurran",
                },
                {
                    icon: ic3,
                    link: "https://www.instagram.com/rayhancurran",
                },
            ],
        },
    ]
    return (
        <section id="section-5" className=" py-16 ">
    
    {/* --- Section Header --- */}
    <div className="text-center mb-16 md:mb-20">
        <p className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-3">
            OUR TEAM
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold">
            Meet The Team
        </h2>
    </div>

 
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 w-full">
        {sec5Data.map((item, index) => (
            <div 
                key={index} 
                className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-lg"
            >
                
            
                <div className="flex flex-col items-center pt-12 pb-8 px-6 text-center">
                    <img
                        src={item.img}
                        alt={item.name}
                        className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full mb-6 shadow-sm"
                    />
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg md:text-xl text-[#1E0E62] font-semibold">
                            {item.name}
                        </h3>
                        <p className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">
                            {item.role}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 border-t border-gray-200 divide-x divide-gray-200 mt-auto bg-white">
                    {item.social.map((social, i) => (
                        <a
                            key={i}
                            href={social.link}
                            target="_blank"
                            rel="noreferrer"
                            className="flex justify-center items-center py-5 hover:bg-gray-50 transition-colors group"
                        >
                            <img
                                src={social.icon}
                                alt={social.link}
                                className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity object-contain"
                            />
                        </a>
                    ))}
                </div>
                
            </div>
        ))}
    </div>
    
</section>
)}
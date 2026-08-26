
import image1 from "~/assets/image/testo (1).jpg"
import image2 from "~/assets/image/testo (2).jpg"
import image3 from "~/assets/image/testo (3).jpg"
import image4 from "~/assets/image/testo (4).jpg"


export default function Sec4() {
    const sec4Data = [
        {
            img: image1,
            name: "Rayhan Curran",
            text: "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support"
        },
        {
            img: image2,
            name: "Kayley Frame",

            text: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website"
        },
        {
            img: image3,
            name: "Gene Whitfield",

            text: "The most important part of the Startup Framework is the samples"
        },
        {
            img: image4,
            name: "Allan Kim",

            text: "I’ve built my website with Startup just in one day, and it was ready-to-go."
        },
    ]
    return (
        <section id="section-4" className="py-16">

       
            <div className="text-center mb-16 md:mb-24">
                <p className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-3">
                    TESTIMONIALS
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold">
                    What Clients say about us
                </h2>
            </div>

          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 w-full">
                {sec4Data.map((item, index) => (
                    <div key={index} className="flex flex-row items-start gap-6">

                     
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-xl shrink-0"
                        />

                     
                        <div className="flex flex-col gap-6 md:gap-6 mt-1">
                            <p className="text-[15px] md:text-base text-[#162032] leading-relaxed font-medium">
                                {item.text}
                            </p>
                            <h3 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">
                                {item.name}
                            </h3>
                        </div>

                    </div>
                ))}
            </div>

        </section>)
}
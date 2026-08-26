import image from "~/assets/image/exploreSec.jpg"
import playv from "~/assets/image/playV.svg";

export default function Sec3() {
    return (
        <section id="section-3" className= "py-30">

            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 w-full">

                <div className="w-full max-w-80  flex flex-col items-start   text-left gap-5">
                    <h2 className="text-[2rem] font-bold  leading-tight mb-6">
                        Many Blocks and Components
                    </h2>
                    <p className="text-[15px] text-gray-400 leading-relaxed mb-8">
                        Startup Framework contains components and complex blocks which can easily be integrated into almost any design.
                    </p>
                    <a
                        href="#"
                        className="px-8 py-2.5 rounded-full border border-gray-200  font-semibold text-sm hover:bg-gray-200 transition-colors inline-block"
                    >
                        Explore
                    </a>

                </div>


                <div className="w-full relative ">



                    <img
                        src={image}
                        alt="Explore components"
                        className=" w-full h-full rounded-xl aspect-4/3 md:aspect-video object-cover object-center overflow-hidden"
                    />



                    <button
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center" 
                        aria-label="Play video"
                    >
                        <img src={playv} alt="Play video" className="w-15 h-15 cursor-pointer ttansition-scale hover:scale-110" />
                    </button>

                </div>

            </div>

        </section>
    )
}
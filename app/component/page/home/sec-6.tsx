import image from "~/assets/image/Frame.svg"
export default

    function Sec6() {
    return (
      <section id="section-6" className="py-20">
    

    <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-center  mb-14 md:mb-20">
        Subscribe Our Newsletter
    </h2>

   
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 w-full">
        
  
        <div className="w-full md:w-[45%] flex justify-center md:justify-end">
            <img
                src={image}
                alt="Newsletter Envelope"
                className="w-full max-w-70 md:max-w-sm h-auto object-contain"
            />
        </div>

      
        <div className="w-full md:w-[55%] flex flex-col gap-6 md:pr-8">
            <p className="text-[15px] md:text-base text-[#162032] font-medium leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>

            <div className="flex flex-col gap-5 mt-2 w-full">
      
                <input 
                    type="email" 
                    placeholder="Your E-mail here..." 
                    className="w-full px-6 py-4 rounded-full border border-gray-300 bg-white shadow-lg text-gray-800 placeholder:text-gray-800 text-sm md:text-base focus:outline-none focus:border-[#FF6600] transition-all"
                />
                
              
                <button className="w-full bg-o hover:bg-oh text-white text-sm md:text-base font-medium py-4 px-6 rounded-full shadow-md transition-colors">
                    Subscribe Our Newsletter
                </button>
            </div>
        </div>
        
    </div>
    
</section>
)}
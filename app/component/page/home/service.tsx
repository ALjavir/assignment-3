import icon1Img from "~/assets/image/gd.svg"
import icon2img from "~/assets/image/vd.svg"
import icon3img from "~/assets/image/dm.svg"
import Buttonorengage from "~/component/common/button";

export default function ServiceSec() {
    const serdata = [
        {
            img: icon1Img,
            title: 'Graphic Design',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.'
        },
     {
            img: icon2img,
            title: 'Video Editing',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.'
        },
          {
            img: icon3img,
            title: 'Digital Marketing',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.'
      },

    ]
  return (
<section id="service" className="py-10">
    

    <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-3">
            SERVICE
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#162032]">
            Our Vison & Our Goal
        </h2>
    </div>

  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
        {serdata.map((card, index) => (
            <div 
                key={index} 
                className="bg-white rounded-4xl p-8 md:p-10 flex flex-col items-center text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1"
            >
             
                <div className="mb-6 h-15 w-15 flex items-center justify-center">
                    <img 
                        src={card.img} 
                        alt={card.title} 
                        className="w-full h-full object-contain" 
                    />
                </div>
                
          
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-62.5">
                    {card.subtitle}
                </p>
                
             
                <Buttonorengage text="Learn More" path="#" />
            </div>
        ))}
    </div>
    
</section>
  );
}
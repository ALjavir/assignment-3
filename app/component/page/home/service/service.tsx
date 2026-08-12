import icon1Img from "~/assets/image/ic-1.png"
import icon2img from "~/assets/image/ic-2.png"
import icon3img from "~/assets/image/ic-3.png"
import "./service.css"
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
        }
    ]
  return (
    <section id="secvice-sec">
      <div className="ser-sec-header">
        <p>SERVICE</p>
        <h1>Our Vison & Our Goal</h1>
      </div>

      <div className="ser-card-grid">
        {serdata.map((card, index) => (
          <div className="ser-card" key={index}>
            <div className="ser-card-icon">
              <img src={card.img} alt={card.title} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
            <button className="ser-card-btn">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
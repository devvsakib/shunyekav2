import { data } from '../../data/data';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./style.css"

const Testimonials = () => {
    const options = {
        loop: true,
        center: true,
        items: 2,
        margin: 30,
        autoplay: true,
        dots: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            }
        }
    };
    return (
        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
            {
                data?.testimonials?.map((item, idx) => (
                    <div key={idx} className="item  mx-auto grid gap-5 w-auto md:w-[500px] bg-white p-6 px-10 rounded-2xl shadow-lg duration-300 ease-linear pb-10">
                        <img className="w-[50px]" src="/img/icons/quotation-mark.svg" alt="quote" />
                        <p className='font-circularItalic'>
                            {item?.testimonial}
                        </p>
                        <div>
                            <h4 className='font-semibold text-lg'>{item?.author}</h4>
                            <span className='text-gray'>{item?.role}</span>
                        </div>
                    </div>
                ))
            }
        </OwlCarousel>
    )
}

export default Testimonials;
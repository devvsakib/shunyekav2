import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const clientList = [
    "/img/clients/zinios.png",
    "/img/clients/wonderla.png",
    "/img/clients/karnataka.svg",
    "/img/clients/locuz.png",
    "/img/clients/vodafone.svg",
    "/img/clients/nissan.png",
    "/img/clients/arisglobal.svg",
    "/img/clients/atlanticus.png",
    "/img/clients/cboi.png",
    "/img/clients/datamellon-logo.png",
    "/img/clients/federalbank.svg",
    "/img/clients/grenerobotics.png",
    "/img/clients/inloop.png",
]
import "./style.css"

const Client = () => {
    const options = {
        loop: true,
        autoplay: true,
        nav: false,
        dots: false,
        items: 9,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 9,
            },
        }
    };

    const blackBg = ["inloop", "grenerobotics", "zinios"]

    return (
        <OwlCarousel {...options} >
            {
                clientList.map((item, index) => (
                    <div className='item flex items-center'>
                        <img className='min-w-[100px] max-w-[100px]'
                            style={{
                                backgroundColor: blackBg.includes(item.split("/")[3].split(".")[0]) ? "#000" : "transparent"
                            }}
                            src={item} />
                    </div>
                ))
            }
        </OwlCarousel>
    )
}

export default Client
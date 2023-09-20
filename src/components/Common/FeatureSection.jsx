import { Link } from "react-router-dom"
import SEButton from "./SEButton"

const FeatureSection = ({ list, button }) => {
    return (
        <section>
            <div className='mb-10 mt-16'>
                <div className='w-full pb-10'>
                    <div className='grid md:grid-cols-3 justify-center '>
                        <div className='col-span-2 md:col-span-1 mx-auto md:mx-0 w-1/2 mb-5 '>
                            <img src='/img/icons/shunyeka-color.svg' alt='about us' className='w-full' />
                        </div>
                        <div className='col-span-2'>
                            <div className=' mb-5'>
                                <h4 className='text-4xl font-circularBol mb-3'> Cracking the Code of Digital Evolution </h4>
                                <p className='text-gray'> At ShunyEka, we are invested in enabling businesses to seamlessly combine operations and development environments, thereby automating core processes so that you can focus on what matters the most – innovation and expansion. </p>
                            </div>
                            <div>
                                <ul className='grid gap-5'>
                                    {
                                        list.map(item => (
                                            <li className='flex gap-5 items-start'>
                                                <img src="/img/icons/arrow-correct.svg" alt="" />
                                                <p>
                                                    {item}
                                                </p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            {
                                button &&
                                <SEButton text="Read More" path="/services" />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection
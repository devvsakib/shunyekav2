import React from 'react'
import HeroSection from '../components/Common/HeroSection'
import Layout from '../components/Layout'
import ContactFrom from '../components/Form/ContactForm'
import { Toaster } from 'react-hot-toast'
import HeadingSubheading from '../components/Common/HeadingSubheading'

const Contact = () => {
    return (
        <>
            <HeroSection from={"/"} />
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
            />
            <Layout>
                <HeadingSubheading heading={"Contact Us"} subheading={"For support or any questions related to your business needs submit your requests and queries here."} />
                <section className='grid md:grid-cols-2 mb-20 gap-12'>
                    <div>
                        <ContactFrom />
                    </div>
                    <div className="">
                        <div className="p-5 md:p-10 rounded-3xl bg-primary text-white mx-xl-4">
                            <div className="flex items-start pb-4">
                                <img src="/img/icons/address.svg" alt="img" className="mr-3" />
                                <div>
                                    <h6>Address</h6>
                                    <p>
                                        #951, First Floor No.VOS-6, 24 th Main Road, RK Colony, 2nd Phase JP Nagar, Bangalore 560078, Karnataka, India
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start pb-4">
                                <img src="/img/icons/email-green.svg" alt="img" className="mr-3 mt-1" />
                                <div>
                                    <h6>Email</h6>
                                    <a href="mailto:hello@shunyeka.com" className="text-success">hello@shunyeka.com</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <img src="/img/icons/phone-green.svg" alt="img" className="mr-3 mt-1" />
                                <div>
                                    <h6>Phone Number</h6>
                                    <a href="tel:+919276809744" className="text-white more">+91-927-680-9744</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
            {/* map */}
            <section className="-mb-20">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70718547903!2d72.43965856479679!3d23.020497766276254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sbd!4v1619121952515!5m2!1sen!2sbd"
                    width="100%" height="505" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </section>
        </>
    )
}

export default Contact
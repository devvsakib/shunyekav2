import { useState } from 'react';
import axios from 'axios';
import "./style.css"
import toast from "react-hot-toast";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
        if (!formData.name) {
            toast.error('Name is required')
            return;
        }

        if (!formData.phone) {
            toast.error('Phone is required')
            return;
        }

        if (!formData.email.match(emailRegex)) {
            toast.error('Please enter a valid email')
            return;
        }

        if (!formData.email) {
            toast.error('Email is required')
            return;
        }
        if (!formData.message) {
            toast.error('Your message is empty')
            return;
        }
        try {
            setIsSending(true);
            const response = await axios.post('https://api.autobot.live/contactus/send', formData);
            if (response.data.success) {
                toast.success('Thank you for contacting us. We will get back to you ASAP.');
            } else {
                toast.error('Something went wrong.');
            }
            setIsSending(false);
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to send. Please try again.');
            setIsSending(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='grid gap-5 w-full'>
            <div className='grid sm:grid-cols-2 gap-5'>
                <div className="form-group">
                    <input
                        className='border border-gray/20 w-full rounded-md p-2 outline-1 outline-secondary'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                    />
                </div>
                <div className="form-group">
                    <input
                        className='border border-gray/20 w-full rounded-md p-2 outline-1 outline-secondary'
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                    />
                </div>
            </div>
            <div className="form-group">
                <input
                    className='border border-gray/20 w-full rounded-md p-2 outline-1 outline-secondary'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                />
                {formErrors.email && <div className="validation">{formErrors.email}</div>}
            </div>
            <div className="form-group">
                <textarea
                    className='resize-none border border-gray/20 w-full rounded-md p-2 outline-1 outline-secondary'
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                />
            </div>
            <button className="bg-primary text-center text-white rounded-md px-10 py-3" type="submit"
                disabled={isSending}
            >{

                    isSending ?
                        <svg className='mx-auto' width="20" height="24" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                            <g fill="none" fillRule="evenodd">
                                <g transform="translate(1 1)" strokeWidth="2">
                                    <circle cx="5" cy="50" r="5">
                                        <animate attributeName="cy"
                                            begin="0s" dur="2.2s"
                                            values="50;5;50;50"
                                            calcMode="linear"
                                            repeatCount="indefinite" />
                                        <animate attributeName="cx"
                                            begin="0s" dur="2.2s"
                                            values="5;27;49;5"
                                            calcMode="linear"
                                            repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="27" cy="5" r="5">
                                        <animate attributeName="cy"
                                            begin="0s" dur="2.2s"
                                            from="5" to="5"
                                            values="5;50;50;5"
                                            calcMode="linear"
                                            repeatCount="indefinite" />
                                        <animate attributeName="cx"
                                            begin="0s" dur="2.2s"
                                            from="27" to="27"
                                            values="27;49;5;27"
                                            calcMode="linear"
                                            repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="49" cy="50" r="5">
                                        <animate attributeName="cy"
                                            begin="0s" dur="2.2s"
                                            values="50;50;5;50"
                                            calcMode="linear"
                                            repeatCount="indefinite" />
                                        <animate attributeName="cx"
                                            from="49" to="49"
                                            begin="0s" dur="2.2s"
                                            values="49;5;27;49"
                                            calcMode="linear"
                                            repeatCount="indefinite" />
                                    </circle>
                                </g>
                            </g>
                        </svg> : 'Submit'
                }</button>
        </form>
    );
};

export default ContactForm;

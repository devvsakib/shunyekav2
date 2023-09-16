import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        // Add your validation rules here
        const errors = {};
        // Example validation rule
        if (!formData.email) {
            errors.email = 'Email is required';
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length !== 0) {
            setFormErrors(errors);
            return;
        }

        try {
            const response = await axios.post('https://api.autobot.live/contactus/send', formData);
            if (response.data.success) {
                alert('Thank you for contacting us. We will get back to you ASAP.');
            } else {
                alert('Failed to contact. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                />
            </div>
            <div className="form-group">
                <input
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;

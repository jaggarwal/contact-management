import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const ContactModal = ({ isOpen, onClose, onAdded }) => {
    const [contact, setContact] = useState({ firstName: '', lastName: '', email: '', phone: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('<YOUR_API_GATEWAY_URL>/contacts', { ...contact, id: Date.now().toString() });
        onAdded();
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <h2>Add Contact</h2>
            <form onSubmit={handleSubmit}>
                <input name="firstName" placeholder="First Name" onChange={handleChange} required />
                <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
                <button type="submit">Save</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </Modal>
    );
};

export default ContactModal;
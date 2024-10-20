import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal'; // You will create this modal

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        const response = await axios.get('<YOUR_API_GATEWAY_URL>/contacts');
        setContacts(response.data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`<YOUR_API_GATEWAY_URL>/contacts/${id}`);
        fetchContacts();
    };

    return (
        <div>
            <h1>Contact List</h1>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => setModalOpen(true)}>Add New Contact</button>
            <ul>
                {contacts.filter(contact => contact.firstName.includes(searchTerm) || contact.lastName.includes(searchTerm)).map(contact => (
                    <li key={contact.id}>
                        <Link to={`/contact/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
                        <button onClick={() => handleDelete(contact.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onAdded={fetchContacts} />
        </div>
    );
};

export default ContactList;
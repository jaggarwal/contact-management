import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ContactDetails = () => {
    const { id } = useParams();
    const [contact, setContact] = useState(null);

    useEffect(() => {
        const fetchContact = async () => {
            const response = await axios.get(`<YOUR_API_GATEWAY_URL>/contacts/${id}`);
            setContact(response.data);
        };
        fetchContact();
    }, [id]);

    if (!contact) return <div>Loading...</div>;

    return (
        <div>
            <h2>Contact Details</h2>
            <p>First Name: {contact.firstName}</p>
            <p>Last Name: {contact.lastName}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
        </div>
    );
};

export default ContactDetails;
import React, { useState } from 'react';
import axios from 'axios'

import '../Styles/FormularioPopUp.css';

const FormulariPopUp = () => {
    const [successful, setSuccessful] = useState(0);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/subscribe', newUser);
            console.log('Respuesta de la API:', response.data);
            setSuccessful(1)
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
    };

    return (
        <div className="formularioPopUp">

            {
                successful === 1 ?
                    <form>
                        <label className='label-Successful'>Successful suscripción</label>
                    </form>
                    :
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" value={newUser.name} onChange={handleChange} placeholder="Name" required />
                        <input type="email" name="email" value={newUser.email} onChange={handleChange} placeholder="Password" required />
                        <label>The challenge begins now</label>
                        <button type="submit">Subscribe</button>
                    </form>
            }
        </div>
    );
}

export default FormulariPopUp;
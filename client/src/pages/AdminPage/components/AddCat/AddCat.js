import React, {useState} from 'react';
import axios from 'axios';
import './AddCat.scss'
const _ENDPOINT = "http://localhost:3000/cats";
const AddCat = () => {

    const initialState = {
        name: '',
        image: '',
        description: '',
        chipped: ''
    };

    const [formData, setFormData] = useState(initialState);

    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post(_ENDPOINT, formData)
            .then(response => {
                setFormStatus('success');
                setFormData(initialState);
            })
            .catch(err => {
                setFormStatus('error');
                console.error(err);
            });
    };
    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };



    return (
        <div>
            <form onSubmit={handleSubmit} className='formAdding'>
                <h2 className='formAdding__title'>Добавити кота</h2>
                <div className='formAdding__wrapper'>
                    <label>Ім'я</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

                    <label>Фото</label>
                    <input type="text" value={formData.image} name="image" onChange={handleInputChange} required />

                    <label>Опис</label>
                    <input type="text" name="description" value={formData.description} onChange={handleInputChange} required />

                    <label htmlFor="Name">Наявність чіпу</label>
                    <input type="text" name="chipped" value={formData.chipped} onChange={handleInputChange} required />

                    <button type="submit">Добавити</button>
                </div>
            </form>
        </div>

    );
};

export default AddCat;
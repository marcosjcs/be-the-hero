import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function EditIncident(){
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const incident = history.location.state;
    const ongToken = localStorage.getItem('ongToken');
    
    useEffect(() => {
        setTitle(incident.title);
        setDescription(incident.description);
        setValue(incident.value);
    }, [incident.description, incident.id, incident.title, incident.value]);
   

    async function handleEditIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };
        try {
            await api.put(`incidents/${incident.id}`, data, {
                headers: {
                    Authorization: ongId,
                    Token: ongToken,
                }
            });
            
            history.push('/profile');
        } catch (err){
            alert('Erro ao atualizar caso, tente novamente.');
        }
    }

    return (
        <div className="edit-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Editar caso</h1>
                    <p>Altere as informações do caso para encontrar um herói que resolva isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para o perfil
                    </Link>
                </section>

                <form onSubmit={handleEditIncident}>
                    <input 
                        placeholder="Título do caso" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        />
                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        />
                    <input 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        />

                    <button className="button" type="submit">Atualizar</button>
                </form>
            </div>
        </div>
    )
}
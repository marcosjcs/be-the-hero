import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiTrash2, FiEdit } from 'react-icons/fi';

import api from '../../services/api'

import Header from '../../components/Header';
import './styles.css';


export default function Profile(props) {
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const ongToken = localStorage.getItem('ongToken');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
                Token: ongToken,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId, ongToken]);

    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                    Token: ongToken,
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (error) {
            alert('Erro ao deletar caso, tente novamente.');
        }
    }

    function handleEditIncident(incident){
        console.log(incident);
        history.push("/incidents", { ...incident });
    }

    function handleLogout(){
        localStorage.removeItem('ongId');
        localStorage.removeItem('ongName');
        localStorage.removeItem('ongToken');
        history.push('/');
    }

    return (
        <div className="profile-container">
            <Header toggleTheme={props.toggleTheme} 
                    ongName={ongName} 
                    handleLogout={handleLogout} 
            />

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>
                        
                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                        <button onClick={() => handleEditIncident(incident)} type="button">
                            <FiEdit size="20" color="a8a8b3"/>
                        </button>
                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size="20" color="a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
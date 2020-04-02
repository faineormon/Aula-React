import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    
    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrem os casos da sua ONG.</p>
                    <Link className="back-link" to="/"><FiArrowLeft size={16} color="#E02041"/> Voltar para Logon</Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input value="name" onChange={e => setName(e.target.value)} placeholder="Nome da ong"/>
                    <input type="email" value="email" onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
                    <input value="whatsapp" onChange={e => setWhatsapp(e.target.value)} placeholder="WhatsApp" />
                    <div className="input-group">
                        <input value="city" onChange={e => setCity(e.target.value)} placeholder="Cidade"/>
                        <input value="uf" onChange={e => setUf(e.target.value)} placeholder="UF" style={{ width: 80 }}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
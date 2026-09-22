// FILE: src/pages/Login/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Factory, Mail, Lock } from 'lucide-react';
import { useAuthStore } from '../../contexts/authStore';
import api from '../../services/api';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');

    const navigate = useNavigate();
    const { setUsuario } = useAuthStore();

    const lidarComLogin = async (e) => {
        e.preventDefault();
        setCarregando(true);
        setErro('');

        try {
            // Consulta a lista de utilizadores no Back-end
            const resposta = await api.get('/usuarios');
            const lista = resposta.data.dados || [];

            // Procura o utilizador correspondente pelo e-mail
            const usuarioEncontrado = lista.find(
                u => u.email.toLowerCase() === email.trim().toLowerCase()
            );

            if (usuarioEncontrado) {
                setUsuario({
                    id: usuarioEncontrado.id,
                    nome: usuarioEncontrado.nome,
                    email: usuarioEncontrado.email,
                    nivel_acesso: usuarioEncontrado.nivel_acesso,
                    area_id: usuarioEncontrado.area_id,
                    nome_area: usuarioEncontrado.areas?.nome || 'Área Padrão'
                });

                navigate('/aprovacoes');
            } else {
                setErro('E-mail não encontrado. Teste com: admin.orcamento@nexus.com');
            }
        } catch (error) {
            console.error(error);
            setErro('Erro ao conectar ao servidor. Certifique-se de que o Back-end está a correr na porta 3000.');
        } finally {
            setCarregando(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="login-logo">
                        <Factory size={40} />
                    </div>
                    <h2>NexusFactory</h2>
                    <p>Aceda ao painel da fábrica com o seu e-mail corporativo</p>
                </div>

                {erro && <div className="login-error">{erro}</div>}

                <form className="login-form" onSubmit={lidarComLogin}>
                    <div className="input-group">
                        <label>E-mail Corporativo</label>
                        <div className="input-wrapper">
                            <Mail size={18} className="input-icon" />
                            <input
                                type="email"
                                placeholder="admin.orcamento@nexus.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Palavra-passe</label>
                        <div className="input-wrapper">
                            <Lock size={18} className="input-icon" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                required
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-login" disabled={carregando}>
                        {carregando ? 'A Autenticar...' : 'Entrar no Sistema'}
                    </button>
                </form>
            </div>
        </div>
    );
}
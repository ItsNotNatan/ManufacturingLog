// ==========================================
// FILE: src/pages/Login/Login.jsx
// ==========================================
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Factory, Mail, Lock } from 'lucide-react';
import { useAuthStore } from '../../contexts/authStore';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');

    const navigate = useNavigate();
    const { setUsuario } = useAuthStore(); // Função para salvar o utilizador logado no Zustand

    const lidarComLogin = async (e) => {
        e.preventDefault();
        setCarregando(true);
        setErro('');

        try {
            // SIMULAÇÃO: Como o Back-end ainda não tem a rota /login, simulamos uma espera de 1 segundo.
            // Futuramente será: const resposta = await api.post('/login', { email, senha });
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Simulação de regras básicas
            if (email === 'admin@nexus.com' || email.includes('@nexus.com')) {
                // 1. Atualizamos o estado global (Zustand) com o utilizador
                setUsuario({
                    id: 'USR-AUTH',
                    nome: email.split('@')[0], // Pega o primeiro nome do email
                    email: email,
                    cargo: email === 'admin@nexus.com' ? 'admin_area' : 'normal'
                });

                // 2. Redirecionamos para a área restrita
                navigate('/aprovacoes');
            } else {
                setErro('Credenciais inválidas. Utilize um e-mail @nexus.com.');
            }
        } catch (error) {
            setErro('Ocorreu um erro ao conectar ao servidor.');
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
                    <p>Faça login para aceder ao painel de logística</p>
                </div>

                {erro && <div className="login-error">{erro}</div>}

                <form className="login-form" onSubmit={lidarComLogin}>
                    <div className="input-group">
                        <label>E-mail Corporativo</label>
                        <div className="input-wrapper">
                            <Mail size={18} className="input-icon" />
                            <input
                                type="email"
                                placeholder="exemplo@nexus.com"
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
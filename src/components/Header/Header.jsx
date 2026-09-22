// =================================================================
// ARQUIVO: src/components/Header/Header.jsx
// DESCRIÇÃO: Cabeçalho superior com informações do login e cargo
// =================================================================
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { useAuthStore } from '../../contexts/authStore';
import './Header.css';

export default function Header({ titulo = 'Painel Logística' }) {
    const navigate = useNavigate();
    // Puxa o estado global do utilizador e a função de atualizar o estado
    const { usuario, setUsuario } = useAuthStore();

    const lidarComLogout = () => {
        if (window.confirm("Deseja realmente sair do sistema?")) {
            setUsuario(null); // Limpa a sessão
            navigate('/login'); // Redireciona para a página de entrada
        }
    };

    // Formata o nome do cargo para uma leitura mais amigável
    const formatarCargo = (nivel) => {
        return nivel === 'admin_area' ? 'Administrador' : 'Operador';
    };

    return (
        <header className="app-header-top">
            <div className="header-left">
                <h2 className="header-title">{titulo}</h2>
            </div>

            <div className="header-user-info">
                {usuario ? (
                    <>
                        <div className="user-badge">
                            <div className="user-avatar">
                                <User size={18} />
                            </div>
                            <div className="user-details">
                                <p className="user-name">{usuario.nome}</p>
                                <p className="user-role">
                                    {usuario.nome_area} • {formatarCargo(usuario.nivel_acesso)}
                                </p>
                            </div>
                        </div>
                        <button onClick={lidarComLogout} className="btn-logout-header" type="button">
                            <LogOut size={16} /> Sair
                        </button>
                    </>
                ) : (
                    <div className="user-badge">
                        <p className="user-name" style={{ color: '#ef4444' }}>Sessão Expirada</p>
                    </div>
                )}
            </div>
        </header>
    );
}
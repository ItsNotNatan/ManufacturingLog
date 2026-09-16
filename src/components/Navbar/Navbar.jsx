// src/components/NavBar/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
// Ícones específicos para engenharia e gestão de chão de fábrica
import { Factory, FilePlus, ListTree, ClipboardCheck, LogOut } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
    // 1. Função de simulação de saída (Logout)
    const lidarComLogout = () => {
        if (window.confirm("Desejas realmente sair do sistema?")) {
            console.log("Utilizador fez logout.");
            // No futuro, o Zustand limpará a sessão aqui e o React Router enviará para '/login'
        }
    };

    // 2. Renderização do Cabeçalho
    return (
        <header className="app-header">
            {/* LOGOTIPO E NOME DO SISTEMA */}
            <div className="logo-container">
                <Factory className="text-primary" size={28} />
                <span>Nexus<span className="text-primary">Factory</span></span>
                <span className="badge-role">Engenharia</span>
            </div>

            {/* MENUS DE NAVEGAÇÃO CENTRAL */}
            <nav className="nav-links">
                {/* NavLink injeta 'active' se o URL bater certo com o 'to' */}
                <NavLink
                    to="/formulario"
                    className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                >
                    <FilePlus size={18} /> Nova Solicitação
                </NavLink>

                <NavLink
                    to="/acompanhamento"
                    className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                >
                    <ListTree size={18} /> Acompanhamento
                </NavLink>

                <NavLink
                    to="/aprovacoes"
                    className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                >
                    <ClipboardCheck size={18} /> Aprovações
                </NavLink>
            </nav>

            {/* DADOS DO UTILIZADOR (À direita) */}
            <div className="user-profile">
                <div className="user-info">
                    <span>Eng. Solicitante</span>
                    <button className="btn-logout" onClick={lidarComLogout}>
                        <LogOut size={14} /> Sair do Sistema
                    </button>
                </div>
                <div className="avatar">
                    EN
                </div>
            </div>
        </header>
    );
}
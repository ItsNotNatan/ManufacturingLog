// src/components/Layout/Layout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header'; // Importa o novo cabeçalho
import './Layout.css';

export default function Layout() {
    const location = useLocation();

    // Altera o título do cabeçalho dinamicamente com base na rota atual
    let tituloAtual = "Painel Logística";
    if (location.pathname.includes('configuracoes')) tituloAtual = "Configurações do Sistema";
    if (location.pathname.includes('acompanhamento')) tituloAtual = "Acompanhamento de Projetos";

    return (
        <div className="app-layout">
            <Sidebar />

            <div className="main-wrapper">
                {/* Injeta o Header no topo da área direita */}
                <Header titulo={tituloAtual} />

                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
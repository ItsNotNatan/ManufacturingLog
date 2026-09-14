// src/components/Layout/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

// Importamos a Navbar que criaste anteriormente. 
// Nota: Verifica se a tua pasta se chama 'NavBar' ou 'Navbar' e ajusta o caminho se necessário.
import Navbar from '../NavBar/Navbar';

// Importamos o ficheiro de estilos que acabámos de criar
import './Layout.css';

export default function Layout() {
    return (
        <div className="app-layout">
            {/* 1. O topo do nosso site: A Navbar fica renderizada de forma fixa */}
            <Navbar />

            {/* 2. O corpo do nosso site: A área dinâmica */}
            <main className="main-content">
                {/* 
                  O <Outlet /> é a peça-chave do React Router.
                  Quando a URL for "/formulario", o React vai injetar o componente <Formulario /> exatamente aqui.
                  Quando a URL for "/acompanhamento", ele injeta o componente <Acompanhamento /> aqui.
                */}
                <Outlet />
            </main>
        </div>
    );
}
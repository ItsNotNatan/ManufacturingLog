// src/routes/routes.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';

// 1. Importação dos nossos componentes estruturais e páginas
import Layout from '../components/Layout/Layout';
import Formulario from '../pages/Formulario/Formulario';
import Acompanhamento from '../pages/Acompanhamento/Acompanhamento';
import Aprovacoes from '../pages/Aprovacoes/Aprovacoes';

// 2. Criação do mapa de navegação (roteador)
export const rotas = createBrowserRouter([
    {
        // ROTA ISOLADA: Login (Não tem o Layout da Navbar)
        path: '/login',
        element: (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Página de Login</h1>
                <p>Em breve configuraremos esta tela.</p>
            </div>
        )
    },
    {
        // ROTA MÃE: Todas as páginas que precisam da Navbar ficam aqui dentro
        path: '/',
        element: <Layout />,

        // ROTAS FILHAS: São injetadas no <Outlet /> do Layout
        children: [
            {
                // Quando o utilizador acede à raiz ('/'), é redirecionado para o formulário
                index: true,
                element: <Navigate to="/formulario" replace />
            },
            {
                path: 'formulario',
                element: <Formulario />
            },
            {
                path: 'acompanhamento',
                element: <Acompanhamento />
            },
            {
                path: 'aprovacoes',
                element: <Aprovacoes />
            }
        ]
    }
]);
// ==========================================
// FILE: src/routes/routes.jsx
// ==========================================
import { createBrowserRouter, Navigate } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import Login from '../pages/Login/Login'; // 1. Importamos a página de Login
import Acompanhamento from '../pages/Acompanhamento/Acompanhamento';
import Aprovacoes from '../pages/Aprovacoes/Aprovacoes';
import Configuracoes from '../pages/Configuracoes/Configuracoes';

import Fase1 from '../pages/Fases/Fase1/Fase1';
import Fase2 from '../pages/Fases/Fase2/Fase2';
import Fase3 from '../pages/Fases/Fase3/Fase3';

export const rotas = createBrowserRouter([
    // ROTA PÚBLICA: Fica de fora do Layout para não exibir a Sidebar
    {
        path: '/login',
        element: <Login />
    },
    // ROTAS PRIVADAS: Englobadas pelo Layout (Sidebar + Main Content)
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to="/aprovacoes" replace />
            },
            {
                path: 'acompanhamento',
                element: <Acompanhamento />
            },
            {
                path: 'aprovacoes',
                element: <Aprovacoes />
            },
            {
                path: 'configuracoes',
                element: <Configuracoes />
            },
            {
                path: 'fase1',
                element: <Fase1 />
            },
            {
                path: 'fase2',
                element: <Fase2 />
            },
            {
                path: 'fase3',
                element: <Fase3 />
            }
        ]
    }
]);
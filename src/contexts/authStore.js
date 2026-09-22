// FILE: src/contexts/authStore.js
import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    // Estado inicial alinhado com as 3 Áreas e Níveis de Acesso
    usuario: {
        id: 'USR-001',
        nome: 'Gestor de Orçamento',
        email: 'admin.orcamento@nexus.com',
        nivel_acesso: 'admin_area',
        area_id: 1,
        nome_area: 'Orçamento'
    },

    setUsuario: (novoUsuario) => set({ usuario: novoUsuario }),

    alterarPerfil: (perfil) => set({ usuario: perfil })
}));
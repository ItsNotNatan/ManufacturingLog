// FILE: src/contexts/authStore.js
import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    // Simulamos um login do Admin da Área para poderes ver e testar tudo
    usuario: {
        id: 'USR-001',
        nome: 'Administrador Master',
        email: 'admin@nexus.com',
        cargo: 'admin_area',
    },

    setUsuario: (novoUsuario) => set({ usuario: novoUsuario }),

    // Função para simular a mudança de cargo em tempo real
    alterarCargo: (novoCargo) => set((state) => ({
        usuario: { ...state.usuario, cargo: novoCargo }
    }))
}));
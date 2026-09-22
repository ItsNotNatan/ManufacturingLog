// FILE: src/store/contadorStore.js

// 1. Importamos a função 'create' do zustand
import { create } from 'zustand';

// 2. Criamos e exportamos a nossa memória global (chamada hook)
export const useContadorStore = create((set) => ({
    // A nossa variável (o dado que queremos guardar)
    numero: 0,

    // Uma função para alterar essa variável
    aumentar: () => set((estadoAtual) => ({
        numero: estadoAtual.numero + 1
    })),

    // Outra função para limpar a variável
    zerar: () => set({ numero: 0 })
}));
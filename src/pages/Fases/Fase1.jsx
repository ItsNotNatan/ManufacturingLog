// src/pages/Fases/Fase1.jsx
import React, { useState } from 'react';

export default function Fase1() {
    // Controlam a visibilidade dos blocos de ação
    const [mostrarTL, setMostrarTL] = useState(true);
    const [mostrarSCL, setMostrarSCL] = useState(true);

    const handleTLSubmit = (e) => {
        e.preventDefault();
        alert('Informações de engenharia enviadas. O time de Manufatura irá realizar o orçamento.');
        setMostrarTL(false); // Esconde o bloco após envio
    };

    return (
        <div className="tab-content fade-in max-w-6xl mx-auto">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Fase 1: Orçamento</h1>
                    <p className="text-sm text-slate-500 mt-1">Solicitação, Informações de Engenharia e Avaliação.</p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Bloco Ação TL Engenharia */}
                {mostrarTL && (
                    <div className="action-block bg-white shadow-sm rounded-2xl border border-slate-200 overflow-hidden">
                        <div className="border-l-4 border-amber-500 p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2 py-0.5 rounded border border-slate-200">REQ-2023-112</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Estrutura Metálica Suporte Principal</h3>
                                    <p className="text-sm text-slate-500 mt-1">SCL: João (Normal)</p>
                                </div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                                    Ação Requerida (TL Eng)
                                </span>
                            </div>

                            <form onSubmit={handleTLSubmit} className="space-y-6 border-t border-slate-100 pt-6 mt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Tipo de Orçamento Direcionado</label>
                                        <select className="w-full sm:text-sm border-slate-300 rounded-lg p-2.5 border bg-slate-50">
                                            <option value="">Selecione conforme fluxograma...</option>
                                            <option value="construtivos">Orçar Construtivos (Materiais)</option>
                                            <option value="servicos">Orçar Serviços de Manufatura</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-3 pt-2">
                                    <button type="submit" className="py-2.5 px-6 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700">
                                        Enviar para Manufatura
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Bloco Ação SCL/PM/Planner */}
                {mostrarSCL && (
                    <div className="action-block bg-white shadow-sm rounded-2xl border border-slate-200 overflow-hidden">
                        <div className="border-l-4 border-amber-500 p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2 py-0.5 rounded border border-slate-200">REQ-2023-095</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Usinagem de Precisão Bloco Motor</h3>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 bg-blue-50 p-5 rounded-xl border border-blue-100">
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold mb-1">Custo Total</p>
                                    <p className="text-xl font-black text-blue-700">R$ 16.700,00</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold mb-1">Prazo Manufatura</p>
                                    <p className="text-lg font-bold text-slate-900">25 dias úteis</p>
                                </div>
                            </div>

                            <div className="border-t border-slate-200 pt-6">
                                <p className="text-sm font-bold text-slate-700 mb-4">Qual a sua decisão como PM/Planner/SCL?</p>
                                <div className="flex flex-wrap gap-4">
                                    <button onClick={() => { alert('Aprovado!'); setMostrarSCL(false); }} className="flex-1 px-4 py-3 text-sm font-bold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700">
                                        APROVAR
                                    </button>
                                    <button onClick={() => { alert('Reprovado!'); setMostrarSCL(false); }} className="flex-1 px-4 py-3 text-sm font-bold rounded-lg text-rose-700 bg-rose-100 hover:bg-rose-200">
                                        REPROVAR
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
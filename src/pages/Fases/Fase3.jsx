// src/pages/Fases/Fase3.jsx
import React from 'react';

export default function Fase3() {
    return (
        <div className="tab-content fade-in max-w-6xl mx-auto">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Fase 3: Manufatura</h1>
                <p className="text-sm text-slate-500 mt-1">Acompanhamento apenas de leitura. A execução é realizada pelos times de Manufatura.</p>
            </div>

            <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">REQ-2023-040 - Módulo Hidráulico Beta</h3>
                            <p className="text-sm text-slate-500">Iniciado em 01/Out/2026</p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                            Em Execução (Fábrica)
                        </span>
                    </div>

                    <div className="mt-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <div className="relative pt-1 mb-8">
                            <div className="overflow-hidden h-2.5 flex rounded-full bg-slate-200 shadow-inner">
                                <div style={{ width: '45%' }} className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
// src/pages/Fases/Fase3.jsx
import React from 'react';
import { Check, Settings, Ruler, Search, RotateCcw, Info } from 'lucide-react';

export default function Fase3() {
    return (
        <div className="tab-content fade-in max-w-6xl mx-auto">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Fase 3: Manufatura</h1>
                <p className="text-sm text-slate-500 mt-1">Acompanhamento da produção e controle de qualidade.</p>
            </div>

            <div className="space-y-6">

                {/* Em Produção */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">Transmissão REQ-2023-040 - Módulo Hidráulico Beta</h3>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-sm">
                            <span className="w-2 h-2 mr-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Em Execução (Fábrica)
                        </span>
                    </div>

                    <div className="mt-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <div className="relative pt-1 mb-8">
                            <div className="overflow-hidden h-2.5 flex rounded-full bg-slate-200 shadow-inner">
                                <div style={{ width: '45%' }} className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 rounded-full"></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div className="relative">
                                <div className="mx-auto w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2 border border-emerald-200 shadow-sm z-10 relative">
                                    <Check size={16} />
                                </div>
                                <p className="text-xs font-bold text-slate-700">Construção</p>
                            </div>
                            <div className="relative">
                                <div className="hidden md:block absolute top-5 -left-1/2 w-full h-0.5 bg-emerald-200 -z-0"></div>
                                <div className="mx-auto w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mb-2 shadow-md ring-4 ring-blue-100 z-10 relative animate-pulse">
                                    <Settings size={16} />
                                </div>
                                <p className="text-xs font-bold text-blue-700">Montagem (Atual)</p>
                            </div>
                            <div className="relative">
                                <div className="hidden md:block absolute top-5 -left-1/2 w-full h-0.5 bg-slate-200 -z-0"></div>
                                <div className="mx-auto w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-2 border border-slate-200 z-10 relative">
                                    <Ruler size={16} />
                                </div>
                                <p className="text-xs font-bold text-slate-500">Ajustes</p>
                            </div>
                            <div className="relative">
                                <div className="hidden md:block absolute top-5 -left-1/2 w-full h-0.5 bg-slate-200 -z-0"></div>
                                <div className="mx-auto w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-2 border border-slate-200 z-10 relative">
                                    <Search size={16} />
                                </div>
                                <p className="text-xs font-bold text-slate-500">Qualidade</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Retrabalho */}
                <div className="bg-white rounded-2xl shadow-sm border border-rose-200 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-full -z-0"></div>
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                        <h3 className="text-lg font-bold text-slate-900">Eventual 2005 - Suporte Sensor V2</h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200 shadow-sm">
                            <RotateCcw size={14} className="mr-1.5" /> Retrabalho (Qualidade)
                        </span>
                    </div>
                    <div className="relative z-10 p-4 bg-rose-50 rounded-lg border border-rose-100 text-sm">
                        <p className="font-bold text-rose-900 mb-1"><Info size={16} className="inline mr-1" /> Status:</p>
                        <p className="text-rose-700">A etapa "Avaliar qualidade" gerou uma Reprovação. Retornou para "Retrabalhar".</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
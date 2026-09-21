// src/pages/Fases/Fase1.jsx
import React, { useState } from 'react';
import { Clock, AlertCircle, Check, FileText, UploadCloud, ArrowRight, Calculator, Send, CheckCircle, MessageCircle, XCircle, Hourglass } from 'lucide-react';

export default function Fase1() {
    const [mostrarTL, setMostrarTL] = useState(true);
    const [mostrarOrcamento, setMostrarOrcamento] = useState(true);
    const [mostrarSCL, setMostrarSCL] = useState(true);

    const lidarComAcao = (setEstado, mensagem) => {
        alert(mensagem);
        setEstado(false);
    };

    return (
        <div className="tab-content fade-in max-w-6xl mx-auto">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Fase 1: Orçamento</h1>
                    <p className="text-sm text-slate-500 mt-1">Solicitação, Engenharia (JZEP) e Gestão de Custos.</p>
                </div>
            </div>

            <div className="space-y-6">

                {/* 1. AÇÃO: TL Engenharia */}
                {mostrarTL && (
                    <div className="bg-white shadow-sm rounded-2xl border border-slate-200 overflow-hidden">
                        <div className="border-l-4 border-amber-500 p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded border border-blue-200">Transmissão REQ-2023-112</span>
                                        <span className="text-xs font-medium text-slate-500 flex items-center"><Clock size={12} className="mr-1 text-slate-400" /> Há 2 horas</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Estrutura Metálica Suporte Principal</h3>
                                    <p className="text-sm text-slate-500 mt-1">SCL Solicitante: João (Normal)</p>
                                </div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                                    <AlertCircle size={14} className="mr-1.5" /> Ação Requerida (TL Eng)
                                </span>
                            </div>

                            <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="flex items-center justify-between max-w-2xl text-sm">
                                    <div className="flex flex-col items-center opacity-50">
                                        <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-white mb-1"><Check size={12} /></div>
                                        <span className="text-xs font-medium text-slate-500 text-center">Solicitar<br />Transmissão</span>
                                    </div>
                                    <div className="h-0.5 flex-1 bg-slate-300 mx-2"></div>
                                    <div className="flex flex-col items-center relative">
                                        <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white mb-1 shadow-md ring-4 ring-amber-100">
                                            <FileText size={12} />
                                        </div>
                                        <span className="text-xs font-bold text-amber-700 text-center absolute top-10 w-32 left-1/2 -translate-x-1/2">Fornecer Infos. (2D/3D)</span>
                                    </div>
                                    <div className="h-0.5 flex-1 bg-slate-200 mx-2 border-t border-dashed border-slate-300"></div>
                                    <div className="flex flex-col items-center opacity-50">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 mb-1 border border-slate-300"></div>
                                        <span class="text-xs font-medium text-slate-500 text-center mt-1">Orçar<br />(Manufatura)</span>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={(e) => { e.preventDefault(); lidarComAcao(setMostrarTL, 'Informações JZEP enviadas para o setor de Orçamento.'); }} className="space-y-6 border-t border-slate-100 pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Tipo de Orçamento Direcionado</label>
                                        <select className="w-full sm:text-sm border-slate-300 rounded-lg p-2.5 border bg-slate-50" required>
                                            <option value="">Selecione conforme fluxograma...</option>
                                            <option value="construtivos">Orçar Construtivos (Materiais)</option>
                                            <option value="servicos">Orçar Serviços de Manufatura</option>
                                            <option value="ambos">Ambos</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Anexar Desenhos 2D/3D (JZEP)</label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-lg bg-slate-50 hover:bg-slate-100">
                                            <div className="space-y-1 text-center">
                                                <UploadCloud size={32} className="mx-auto text-slate-400" />
                                                <div className="flex text-sm text-slate-600 justify-center">
                                                    <label className="cursor-pointer font-medium text-blue-600 hover:text-blue-500">
                                                        <span>Fazer upload de arquivos</span>
                                                        <input type="file" className="sr-only" multiple />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end pt-2">
                                    <button type="submit" className="inline-flex items-center py-2.5 px-6 rounded-lg text-white bg-blue-600 hover:bg-blue-700 text-sm font-bold">
                                        Enviar para Setor de Orçamento <ArrowRight size={14} className="ml-2" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* 2. AÇÃO: Equipe de Orçamento */}
                {mostrarOrcamento && (
                    <div className="bg-white shadow-sm rounded-2xl border border-slate-200 overflow-hidden">
                        <div className="border-l-4 border-amber-500 p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded border border-blue-200">Transmissão REQ-2023-112</span>
                                        <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2 py-0.5 rounded border border-slate-200">Engenharia Concluída</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Estrutura Metálica Suporte Principal</h3>
                                </div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                                    <Calculator size={14} className="mr-1.5" /> Ação Requerida (Orçamento)
                                </span>
                            </div>

                            <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <h4 className="text-sm font-bold text-slate-700 mb-2">Gestão de Orçamentos</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                                        <h5 className="text-xs font-bold text-slate-500 uppercase mb-3 border-b pb-2">Custos Fixos Obrigatórios</h5>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <label className="text-sm text-slate-700">Databook / Controle Qualidade</label>
                                                <input type="number" defaultValue="500" className="w-32 text-sm border-slate-300 rounded-md border p-1.5 bg-slate-50" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                                        <h5 className="text-xs font-bold text-slate-500 uppercase mb-3 border-b pb-2">Cotação Fornecedores</h5>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <label className="text-sm text-slate-700">Fornecedor WR</label>
                                                <input type="number" defaultValue="800" className="w-32 text-sm border-slate-300 rounded-md border p-1.5 bg-slate-50" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center pt-2">
                                <div className="text-lg font-bold text-slate-800">Total Calculado: <span className="text-blue-700">R$ 1.300,00</span></div>
                                <button onClick={() => lidarComAcao(setMostrarOrcamento, 'Orçamento enviado para aprovação do cliente.')} className="inline-flex items-center py-2.5 px-6 rounded-lg text-white bg-blue-600 hover:bg-blue-700 text-sm font-bold">
                                    Enviar para Avaliação (SCL) <Send size={14} className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. AÇÃO: Avaliar Orçamento */}
                {mostrarSCL && (
                    <div className="bg-white shadow-sm rounded-2xl border border-slate-200 overflow-hidden">
                        <div className="border-l-4 border-amber-500 p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-0.5 rounded border border-amber-200">Eventual 2001</span>
                                    <h3 className="text-xl font-bold text-slate-900 mt-2">Substituição de Válvula Setor B</h3>
                                </div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                                    <AlertCircle size={14} className="mr-1.5" /> Ação Requerida (PM/SCL)
                                </span>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                                <div><p className="text-xs text-slate-500 uppercase font-bold">Custo Total</p><p className="text-xl font-black text-blue-700">R$ 5.500,00</p></div>
                                <div><p className="text-xs text-slate-500 uppercase font-bold">Decisão</p><p className="text-sm font-bold mt-1"><span className="bg-slate-200 px-2 py-1 rounded">Make/Buy</span></p></div>
                            </div>

                            <div className="border-t border-slate-200 pt-6">
                                <p className="text-sm font-bold text-slate-700 mb-4">Qual a sua decisão como PM/SCL sobre este orçamento?</p>
                                <div className="flex flex-wrap gap-4">
                                    <button onClick={() => lidarComAcao(setMostrarSCL, 'Aprovado! Fluxo avança para a Fase 2.')} className="flex-1 inline-flex justify-center items-center py-3 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 text-sm font-bold">
                                        <CheckCircle size={18} className="mr-2" /> APROVAR
                                    </button>
                                    <button onClick={() => alert('Negociação iniciada com a manufatura.')} className="flex-1 inline-flex justify-center items-center py-3 border border-slate-300 rounded-lg text-slate-700 bg-white hover:bg-slate-50 text-sm font-bold">
                                        <MessageCircle size={18} className="mr-2 text-blue-500" /> NEGOCIAR
                                    </button>
                                    <button onClick={() => lidarComAcao(setMostrarSCL, 'Reprovado. Fluxo encerrado.')} className="flex-1 inline-flex justify-center items-center py-3 rounded-lg text-rose-700 bg-rose-100 hover:bg-rose-200 text-sm font-bold">
                                        <XCircle size={18} className="mr-2" /> REPROVAR
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
// src/pages/Fases/Fase2.jsx
import React, { useState } from 'react';
import { List, Trash2, Plus, Calendar, MailOpen, Package, Truck, ClipboardCheck } from 'lucide-react';

export default function Fase2() {
    const [mostrarPCP1, setMostrarPCP1] = useState(true);
    const [mostrarCliente, setMostrarCliente] = useState(true);
    const [mostrarPCP2, setMostrarPCP2] = useState(true);

    const lidarComAcao = (setEstado, mensagem) => {
        alert(mensagem);
        setEstado(false);
    };

    return (
        <div className="tab-content fade-in max-w-6xl mx-auto">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Fase 2: Planejamento</h1>
                <p className="text-sm text-slate-500 mt-1">Listagem de recursos pelo PCP e definição de prazos pelo Cliente.</p>
            </div>

            <div className="space-y-6">
                {/* AÇÃO: PCP Listar Recursos */}
                {mostrarPCP1 && (
                    <div className="bg-white shadow-sm rounded-2xl border border-slate-200 overflow-hidden">
                        <div className="border-l-4 border-amber-500 p-6 md:p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded border border-blue-200">REQ-2023-080</span>
                                    <h3 className="text-xl font-bold text-slate-900 mt-2">Montagem Subconjunto Y</h3>
                                </div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                                    <List size={14} className="mr-1.5" /> Ação Requerida (PCP)
                                </span>
                            </div>

                            <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
                                <table className="min-w-full divide-y divide-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase">Recurso Requerido</th>
                                            <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase">Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-slate-200">
                                        <tr>
                                            <td className="px-4 py-3"><input type="text" defaultValue="Kit Peças Cód 8899" className="w-full text-sm border-slate-300 rounded-md border p-1.5" /></td>
                                            <td className="px-4 py-3 text-center"><button className="text-rose-500"><Trash2 size={16} /></button></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3"><input type="text" placeholder="Ex: Desenho Final" className="w-full text-sm border-slate-300 rounded-md border p-1.5" /></td>
                                            <td className="px-4 py-3 text-center"><button className="text-blue-500"><Plus size={16} /></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex justify-end">
                                <button onClick={() => lidarComAcao(setMostrarPCP1, 'Recursos listados! Enviado para o Cliente.')} className="px-6 py-2.5 rounded-lg text-white bg-blue-600 hover:bg-blue-700 text-sm font-bold">
                                    Enviar para Cliente definir prazos
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* AÇÃO: Cliente Definir Prazos */}
                {mostrarCliente && (
                    <div className="bg-white shadow-sm rounded-2xl border border-slate-200 overflow-hidden">
                        <div className="border-l-4 border-amber-500 p-6 md:p-8">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-bold text-slate-900">Montagem Subconjunto Y</h3>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                                    <Calendar size={14} className="mr-1.5" /> Ação Requerida (SCL/TL)
                                </span>
                            </div>

                            <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100 flex gap-4">
                                <MailOpen size={24} className="text-blue-500" />
                                <div>
                                    <h4 className="text-sm font-bold text-slate-700">Reconfirmação Automática Ativa</h4>
                                    <p className="text-xs text-slate-600">E-mails automáticos Segundas e Quintas às 8h para reconfirmar prazo.</p>
                                </div>
                            </div>

                            <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
                                <table className="min-w-full divide-y divide-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase">Recurso Requerido</th>
                                            <th className="px-4 py-3 text-left text-xs font-bold text-blue-700 uppercase bg-blue-50">Seu Prazo</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-slate-200">
                                        <tr>
                                            <td className="px-4 py-3 text-sm font-medium text-slate-900"><Package size={16} className="inline mr-2 text-slate-400" />Kit Peças Cód 8899</td>
                                            <td className="px-4 py-3 text-sm bg-blue-50/30">
                                                <input type="date" defaultValue="2026-10-15" className="w-full text-sm border-slate-300 rounded-md border p-1.5 bg-white" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex justify-end gap-3">
                                <button className="inline-flex items-center px-4 py-2.5 border border-slate-300 text-sm font-bold rounded-lg text-slate-700 bg-white">
                                    <Truck size={16} className="mr-2 text-emerald-600" /> Realizar Entrega Agora
                                </button>
                                <button onClick={() => lidarComAcao(setMostrarCliente, 'Prazos definidos!')} className="px-6 py-2.5 rounded-lg text-white bg-blue-600 hover:bg-blue-700 text-sm font-bold">
                                    Confirmar Prazos
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
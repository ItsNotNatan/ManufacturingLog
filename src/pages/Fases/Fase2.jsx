// src/pages/Fases/Fase2.jsx
import React, { useState } from 'react';

export default function Fase2() {
    const [mostrarPrazos, setMostrarPrazos] = useState(true);

    const handleConfirmarPrazos = () => {
        alert('Datas enviadas. O PCP irá Atualizar o Plano de Produção.');
        setMostrarPrazos(false);
    };

    return (
        <div className="tab-content fade-in max-w-6xl mx-auto">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Fase 2: Planejamento</h1>
                    <p className="text-sm text-slate-500 mt-1">Interação entre SCL/TL Eng e PCP para definição de prazos e entrega de recursos.</p>
                </div>
            </div>

            <div className="space-y-6">
                {mostrarPrazos && (
                    <div className="action-block bg-white shadow-sm rounded-2xl border border-slate-200 overflow-hidden">
                        <div className="border-l-4 border-amber-500 p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Montagem Subconjunto Y</h3>
                                </div>
                            </div>

                            <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
                                <table className="min-w-full divide-y divide-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase">Recurso</th>
                                            <th className="px-4 py-3 text-left text-xs font-bold text-blue-700 uppercase bg-blue-50">Definir Prazo</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-slate-200">
                                        <tr>
                                            <td className="px-4 py-3 text-sm font-medium text-slate-900">Kit Peças Cód 8899</td>
                                            <td className="px-4 py-3 text-sm bg-blue-50/30">
                                                <input type="date" defaultValue="2026-10-15" className="w-full text-sm border-slate-300 rounded-md border p-1.5" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex justify-end">
                                <button onClick={handleConfirmarPrazos} className="px-6 py-2.5 text-sm font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700">
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
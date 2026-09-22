// FILE: src/pages/Fases/Fase2/Fase2.jsx
import React, { useState } from 'react';
import { Calendar, Save, Truck, Package, Lock, Plus, Trash2 } from 'lucide-react';
import { useAuthStore } from '../../../contexts/authStore';
import './Fase2.css';

export default function Fase2() {
    const { usuario } = useAuthStore();

    // Regra de Permissão: Apenas área_id === 2 (Planejamento) pode editar
    const podeEditar = usuario?.area_id === 2;

    const [mostrarPrazos, setMostrarPrazos] = useState(true);

    const lidarComAcao = (mensagem) => {
        if (!podeEditar) {
            alert("Ação não permitida: Apenas a equipa de Planejamento pode alterar esta fase.");
            return;
        }
        alert(mensagem);
        setMostrarPrazos(false);
    };

    return (
        <div className="fase-container fade-in">
            <div className="fase-header">
                <h1 className="fase-title">Fase 2: Planejamento</h1>
                <p className="fase-subtitle">Defina os prazos para os recursos solicitados pela Logística (PCP).</p>
            </div>

            {/* AVISO DE MODO DE LEITURA (Caso não pertença à Área 2) */}
            {!podeEditar && (
                <div style={{
                    backgroundColor: '#fffbe3',
                    border: '1px solid #fde68a',
                    color: '#92400e',
                    padding: '0.8rem 1.2rem',
                    borderRadius: '0.5rem',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                }}>
                    <Lock size={18} />
                    <span>Modo de Leitura: Apenas colaboradores da área de <strong>Planejamento</strong> podem gerir recursos e prazos nesta fase.</span>
                </div>
            )}

            {mostrarPrazos && (
                <div className="fase-card">
                    <div className="fase-flex-between">
                        <div>
                            <span className="badge-blue">REQ-2023-080</span>
                            <h3 className="fase-item-title">Montagem Subconjunto Y</h3>
                        </div>
                        <span className="badge-amber"><Calendar size={16} /> Ação: PCP</span>
                    </div>

                    <table className="fase2-table">
                        <thead>
                            <tr>
                                <th>Recurso Solicitado</th>
                                <th style={{ width: '250px' }}>Prazo Estimado de Entrega</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Package size={18} style={{ display: 'inline', marginRight: '8px', color: '#64748b' }} />
                                    Kit Peças Cód 8899
                                </td>
                                <td style={{ background: '#eff6ff' }}>
                                    <input
                                        type="date"
                                        defaultValue="2026-10-15"
                                        disabled={!podeEditar}
                                        className="fase2-input-date"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {podeEditar && (
                        <div className="btn-group" style={{ justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                            <button onClick={() => lidarComAcao('Prazos confirmados ao PCP!')} className="btn btn-success" style={{ background: '#2563eb', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '0.4rem', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                                <Save size={18} /> Confirmar Prazos de Planejamento
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
// src/pages/Fases/Fase2.jsx
import React, { useState } from 'react';
import { List, Trash2, Plus, Calendar, MailOpen, Package, Truck } from 'lucide-react';
import './Fase2.css'; // Carrega o CSS limpo e definitivo

export default function Fase2() {
    const [mostrarPCP1, setMostrarPCP1] = useState(true);
    const [mostrarCliente, setMostrarCliente] = useState(true);

    const lidarComAcao = (setEstado, mensagem) => {
        alert(mensagem);
        setEstado(false);
    };

    return (
        <div className="fase2-container fade-in">
            <div className="fase2-header">
                <h1 className="fase2-title">Fase 2: Planejamento</h1>
                <p className="fase2-subtitle">Listagem de recursos pelo PCP e definição de prazos pelo Cliente.</p>
            </div>

            <div className="space-y-6">
                {/* AÇÃO: PCP Listar Recursos */}
                {mostrarPCP1 && (
                    <div className="fase2-action-block">
                        <div className="fase2-card-body">
                            <div className="fase2-flex-between">
                                <div>
                                    <span className="fase2-badge-blue">REQ-2023-080</span>
                                    <h3 className="fase2-item-title">Montagem Subconjunto Y</h3>
                                </div>
                                <span className="fase2-badge-amber">
                                    <List size={14} /> Ação Requerida (PCP)
                                </span>
                            </div>

                            <div className="fase2-table-wrapper">
                                <table className="fase2-table">
                                    <thead>
                                        <tr>
                                            <th>Recurso Requerido</th>
                                            <th style={{ width: '80px', textAlign: 'center' }}>Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="text" defaultValue="Kit Peças Cód 8899" className="fase2-input" />
                                            </td>
                                            <td>
                                                <button className="fase2-btn-icon-danger"><Trash2 size={18} /></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="text" placeholder="Ex: Desenho Final" className="fase2-input" />
                                            </td>
                                            <td>
                                                <button className="fase2-btn-icon-primary"><Plus size={18} /></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="fase2-actions">
                                <button onClick={() => lidarComAcao(setMostrarPCP1, 'Recursos listados! Enviado para o Cliente.')} className="fase2-btn fase2-btn-primary">
                                    Enviar para Cliente definir prazos
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* AÇÃO: Cliente Definir Prazos */}
                {mostrarCliente && (
                    <div className="fase2-action-block">
                        <div className="fase2-card-body">
                            <div className="fase2-flex-between">
                                <h3 className="fase2-item-title">Montagem Subconjunto Y</h3>
                                <span className="fase2-badge-amber">
                                    <Calendar size={14} /> Ação Requerida (SCL/TL)
                                </span>
                            </div>

                            <div className="fase2-info-box">
                                <div className="fase2-info-icon">
                                    <MailOpen size={24} />
                                </div>
                                <div>
                                    <h4 className="fase2-info-title">Reconfirmação Automática Ativa</h4>
                                    <p className="fase2-info-desc">E-mails automáticos Segundas e Quintas às 8h para reconfirmar prazo.</p>
                                </div>
                            </div>

                            <div className="fase2-table-wrapper">
                                <table className="fase2-table">
                                    <thead>
                                        <tr>
                                            <th>Recurso Requerido</th>
                                            <th className="highlight" style={{ width: '200px' }}>Seu Prazo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Package size={16} className="fase2-table-icon" />
                                                Kit Peças Cód 8899
                                            </td>
                                            <td className="highlight-cell">
                                                <input type="date" defaultValue="2026-10-15" className="fase2-input" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="fase2-actions">
                                <button className="fase2-btn fase2-btn-outline">
                                    <Truck size={16} /> Realizar Entrega Agora
                                </button>
                                <button onClick={() => lidarComAcao(setMostrarCliente, 'Prazos definidos!')} className="fase2-btn fase2-btn-primary">
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
// src/pages/Fases/Fase1.jsx
import React, { useState } from 'react';
import { Clock, AlertCircle, Check, FileText, UploadCloud, ArrowRight, Calculator, Send, CheckCircle, MessageCircle, XCircle } from 'lucide-react';
import './Fase1.css'; // Carrega o nosso CSS limpo e definitivo

export default function Fase1() {
    const [mostrarTL, setMostrarTL] = useState(true);
    const [mostrarOrcamento, setMostrarOrcamento] = useState(true);
    const [mostrarSCL, setMostrarSCL] = useState(true);

    const lidarComAcao = (setEstado, mensagem) => {
        alert(mensagem);
        setEstado(false);
    };

    return (
        <div className="fase1-container fade-in">
            <div className="fase1-header">
                <h1 className="fase1-title">Fase 1: Orçamento</h1>
                <p className="fase1-subtitle">Solicitação, Engenharia (JZEP) e Gestão de Custos.</p>
            </div>

            {/* 1. AÇÃO: TL Engenharia */}
            {mostrarTL && (
                <div className="fase1-action-block">
                    <div className="fase1-card-body">
                        <div className="fase1-flex-between">
                            <div>
                                <div className="fase1-badges-row">
                                    <span className="fase1-badge-blue">Transmissão REQ-2023-112</span>
                                    <span className="fase1-time"><Clock size={12} /> Há 2 horas</span>
                                </div>
                                <h3 className="fase1-item-title">Estrutura Metálica Suporte Principal</h3>
                                <p className="fase1-item-desc">SCL Solicitante: João (Normal)</p>
                            </div>
                            <span className="fase1-badge-amber">
                                <AlertCircle size={14} /> Ação Requerida (TL Eng)
                            </span>
                        </div>

                        {/* Indicador de Fluxo */}
                        <div className="fase1-flow-indicator">
                            <div className="fase1-flow-step muted">
                                <div className="fase1-circle-icon fase1-circle-slate"><Check size={12} /></div>
                                <span className="fase1-step-text">Solicitar<br />Transmissão</span>
                            </div>
                            <div className="fase1-line"></div>
                            <div className="fase1-flow-step">
                                <div className="fase1-circle-icon fase1-circle-amber"><FileText size={12} /></div>
                                <span className="fase1-step-text active">Fornecer Infos. (2D/3D)</span>
                            </div>
                            <div className="fase1-line fase1-line-dashed"></div>
                            <div className="fase1-flow-step muted">
                                <div className="fase1-circle-icon fase1-circle-slate"></div>
                                <span className="fase1-step-text">Orçar<br />(Manufatura)</span>
                            </div>
                        </div>

                        {/* Formulário */}
                        <form onSubmit={(e) => { e.preventDefault(); lidarComAcao(setMostrarTL, 'Informações JZEP enviadas.'); }} className="fase1-form">
                            <div className="fase1-grid-2">
                                <div>
                                    <label className="fase1-label">Tipo de Orçamento Direcionado</label>
                                    <select className="fase1-select" required>
                                        <option value="">Selecione conforme fluxograma...</option>
                                        <option value="construtivos">Orçar Construtivos (Materiais)</option>
                                        <option value="servicos">Orçar Serviços de Manufatura</option>
                                        <option value="ambos">Ambos</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="fase1-label">Anexar Desenhos 2D/3D (JZEP)</label>
                                    <label className="fase1-upload-box">
                                        <UploadCloud size={32} color="#94a3b8" style={{ margin: '0 auto' }} />
                                        <div className="fase1-upload-text">Fazer upload de arquivos</div>
                                        <input type="file" style={{ display: 'none' }} multiple />
                                    </label>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                                <button type="submit" className="fase1-btn fase1-btn-primary">
                                    Enviar para Setor de Orçamento <ArrowRight size={14} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* 2. AÇÃO: Equipe de Orçamento */}
            {mostrarOrcamento && (
                <div className="fase1-action-block">
                    <div className="fase1-card-body">
                        <div className="fase1-flex-between">
                            <div>
                                <div className="fase1-badges-row">
                                    <span className="fase1-badge-blue">Transmissão REQ-2023-112</span>
                                    <span className="fase1-badge-slate">Engenharia Concluída</span>
                                </div>
                                <h3 className="fase1-item-title">Estrutura Metálica Suporte Principal</h3>
                            </div>
                            <span className="fase1-badge-amber">
                                <Calculator size={14} /> Ação Requerida (Orçamento)
                            </span>
                        </div>

                        <div className="fase1-budget-wrapper">
                            <h4 className="fase1-label">Gestão de Orçamentos</h4>
                            <div className="fase1-budget-inputs">
                                <div className="fase1-budget-card">
                                    <h5>Custos Fixos Obrigatórios</h5>
                                    <div className="fase1-input-row">
                                        <label>Databook / Qualidade</label>
                                        <div className="fase1-input-group">
                                            <span>R$</span><input type="number" defaultValue="500" />
                                        </div>
                                    </div>
                                </div>
                                <div className="fase1-budget-card">
                                    <h5>Cotação Fornecedores</h5>
                                    <div className="fase1-input-row">
                                        <label>Fornecedor WR</label>
                                        <div className="fase1-input-group">
                                            <span>R$</span><input type="number" defaultValue="800" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fase1-total-row">
                            <div className="fase1-total-text">Total Calculado: <span>R$ 1.300,00</span></div>
                            <button onClick={() => lidarComAcao(setMostrarOrcamento, 'Enviado para SCL.')} className="fase1-btn fase1-btn-primary">
                                Enviar para Avaliação (SCL) <Send size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* 3. AÇÃO: Avaliar Orçamento */}
            {mostrarSCL && (
                <div className="fase1-action-block">
                    <div className="fase1-card-body">
                        <div className="fase1-flex-between">
                            <div>
                                <span className="fase1-badge-amber">Eventual 2001</span>
                                <h3 className="fase1-item-title">Substituição de Válvula Setor B</h3>
                            </div>
                            <span className="fase1-badge-amber"><AlertCircle size={14} /> Ação Requerida (PM/SCL)</span>
                        </div>

                        <div className="fase1-budget-grid">
                            <div><div className="fase1-budget-label">Custo Total</div><div className="fase1-budget-total">R$ 5.500,00</div></div>
                            <div><div className="fase1-budget-label">Decisão Manufatura</div><div className="fase1-item-title" style={{ fontSize: '1rem' }}>Make/Buy</div></div>
                        </div>

                        <div className="fase1-form">
                            <label className="fase1-label">Qual a sua decisão como PM/SCL?</label>
                            <div className="fase1-btn-group">
                                <button onClick={() => lidarComAcao(setMostrarSCL, 'Aprovado!')} className="fase1-btn fase1-btn-success">
                                    <CheckCircle size={18} /> APROVAR
                                </button>
                                <button onClick={() => alert('Negociação iniciada.')} className="fase1-btn fase1-btn-outline">
                                    <MessageCircle size={18} color="#3b82f6" /> NEGOCIAR
                                </button>
                                <button onClick={() => lidarComAcao(setMostrarSCL, 'Reprovado.')} className="fase1-btn fase1-btn-danger">
                                    <XCircle size={18} /> REPROVAR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
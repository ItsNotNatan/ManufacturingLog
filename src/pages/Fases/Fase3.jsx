// src/pages/Fases/Fase3.jsx
import React from 'react';
import { Check, Settings, Ruler, Search, RotateCcw, Info } from 'lucide-react';
import './Fase3.css'; // Carrega o nosso CSS limpo e definitivo

export default function Fase3() {
    return (
        <div className="fase3-container fade-in">
            <div className="fase3-header">
                <h1 className="fase3-title">Fase 3: Manufatura</h1>
                <p className="fase3-subtitle">Acompanhamento da produção e controle de qualidade.</p>
            </div>

            <div>
                {/* Em Produção */}
                <div className="fase3-card">
                    <div className="fase3-flex-between">
                        <div>
                            <h3 className="fase3-item-title">Transmissão REQ-2023-040 - Módulo Hidráulico Beta</h3>
                        </div>
                        <span className="fase3-badge-emerald">
                            <span className="fase3-pulse-dot"></span> Em Execução (Fábrica)
                        </span>
                    </div>

                    <div className="fase3-progress-container">
                        <div className="fase3-progress-bar-bg">
                            <div className="fase3-progress-bar-fill"></div>
                        </div>

                        <div className="fase3-timeline">
                            <div className="fase3-step">
                                <div className="fase3-step-icon icon-done"><Check size={16} /></div>
                                <div className="fase3-step-title">Construção</div>
                                <div className="fase3-step-desc">Separar & Construir</div>
                            </div>
                            <div className="fase3-step">
                                <div className="fase3-step-connector connector-emerald"></div>
                                <div className="fase3-step-icon icon-current"><Settings size={16} /></div>
                                <div className="fase3-step-title title-blue">Montagem</div>
                                <div className="fase3-step-desc desc-blue">Pré-montar & Montar</div>
                            </div>
                            <div className="fase3-step">
                                <div className="fase3-step-connector connector-slate"></div>
                                <div className="fase3-step-icon icon-pending"><Ruler size={16} /></div>
                                <div className="fase3-step-title">Ajustes & Checklists</div>
                                <div className="fase3-step-desc">Medição 3D</div>
                            </div>
                            <div className="fase3-step">
                                <div className="fase3-step-connector connector-slate"></div>
                                <div className="fase3-step-icon icon-pending"><Search size={16} /></div>
                                <div className="fase3-step-title">Qualidade & Fim</div>
                                <div className="fase3-step-desc">Avaliação Final</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Retrabalho */}
                <div className="fase3-card fase3-rework-card">
                    <div className="fase3-rework-bg"></div>
                    <div className="fase3-rework-content">
                        <div className="fase3-flex-between" style={{ marginBottom: '1rem' }}>
                            <h3 className="fase3-item-title">Eventual 2005 - Suporte Sensor V2</h3>
                            <span className="fase3-badge-rose">
                                <RotateCcw size={14} style={{ marginRight: '0.375rem' }} /> Retrabalho (Qualidade)
                            </span>
                        </div>
                        <div className="fase3-rework-alert">
                            <p style={{ fontWeight: 'bold' }}>
                                <Info size={16} style={{ display: 'inline', marginRight: '0.25rem', verticalAlign: 'text-bottom' }} /> Status:
                            </p>
                            <p>A etapa "Avaliar qualidade" gerou uma <strong>Reprovação</strong>. Retornou para "Retrabalhar".</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
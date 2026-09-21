// src/pages/Fases/Fase3.jsx
import React from 'react';
import { Check, Settings, Ruler, Search } from 'lucide-react';
import './Fase3.css';

export default function Fase3() {
    return (
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '1.5rem' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Fase 3: Manufatura</h1>

            <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Módulo Hidráulico Beta</h3>

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
                        </div>
                        <div className="fase3-step">
                            <div className="fase3-step-connector connector-slate"></div>
                            <div className="fase3-step-icon icon-pending"><Search size={16} /></div>
                            <div className="fase3-step-title">Qualidade & Fim</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fase3-rework-card" style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #fecdd3' }}>
                <div className="fase3-rework-bg"></div>
                <div className="fase3-rework-content">
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Suporte Sensor V2 - Retrabalho</h3>
                    <div className="fase3-rework-alert">
                        <strong>Status do Fluxograma:</strong> A etapa "Avaliar qualidade" gerou uma Reprovação. O item retornou para "Retrabalhar".
                    </div>
                </div>
            </div>
        </div>
    );
}
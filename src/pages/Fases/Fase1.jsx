// src/pages/Fases/Fase1.jsx
import React, { useState } from 'react';
import { UploadCloud, Check, FileText, HelpCircle } from 'lucide-react';
import './Fase1.css'; // Importação mágica do teu estilo!

export default function Fase1() {
    const [mostrarTL, setMostrarTL] = useState(true);
    const [mostrarSCL, setMostrarSCL] = useState(true);

    const handleTLSubmit = (e) => {
        e.preventDefault();
        alert('Informações de engenharia enviadas!');
        setMostrarTL(false);
    };

    return (
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '1.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a' }}>Fase 1: Orçamento</h1>
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Solicitação, Informações de Engenharia e Avaliação.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {mostrarTL && (
                    <div className="fase1-action-card" style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Estrutura Metálica Suporte Principal</h3>

                        {/* Fluxograma */}
                        <div className="fase1-flow-indicator" style={{ marginTop: '1.5rem' }}>
                            <div className="fase1-flow-step muted">
                                <div className="fase1-circle-icon fase1-circle-slate"><Check size={16} /></div>
                                <span className="fase1-step-text">Solicitar<br />Orçamento</span>
                            </div>
                            <div className="fase1-line"></div>
                            <div className="fase1-flow-step">
                                <div className="fase1-circle-icon fase1-circle-amber"><FileText size={16} /></div>
                                <span className="fase1-step-text active">Fornecer Infos Engenharia</span>
                            </div>
                            <div className="fase1-line fase1-line-dashed"></div>
                            <div className="fase1-flow-step muted">
                                <div className="fase1-circle-icon fase1-circle-slate"></div>
                                <span className="fase1-step-text">Orçar<br />(Manufatura)</span>
                            </div>
                        </div>

                        <form onSubmit={handleTLSubmit} style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f1f5f9' }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Anexar Desenhos / BOM</label>
                                <div className="fase1-upload-box">
                                    <UploadCloud size={32} color="#94a3b8" style={{ margin: '0 auto' }} />
                                    <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#2563eb', fontWeight: '500' }}>Fazer upload</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button type="submit" style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                                    Enviar para Manufatura
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {mostrarSCL && (
                    <div className="fase1-action-card" style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Usinagem de Precisão Bloco Motor</h3>

                        <div className="fase1-flow-indicator" style={{ marginTop: '1.5rem' }}>
                            <div className="fase1-flow-step muted">
                                <span className="fase1-step-text" style={{ marginBottom: '0.5rem' }}>Orçar (Manufatura)</span>
                                <div className="fase1-circle-icon fase1-circle-slate"><Check size={16} /></div>
                            </div>
                            <div className="fase1-line"></div>
                            <div className="fase1-flow-step">
                                <span className="fase1-step-text active" style={{ top: '-1.5rem' }}>Avaliar Orçamento</span>
                                <div className="fase1-diamond-icon"><i>?</i></div>
                            </div>
                            <div className="fase1-line fase1-line-dashed"></div>
                            <div className="fase1-flow-step muted">
                                <span className="fase1-step-text">Aprovar / Reprovar</span>
                            </div>
                        </div>

                        <div className="fase1-budget-grid">
                            <div><div className="fase1-budget-label">Construtivos</div><div className="fase1-budget-value">R$ 12.500,00</div></div>
                            <div><div className="fase1-budget-label">Serviços</div><div className="fase1-budget-value">R$ 4.200,00</div></div>
                            <div><div className="fase1-budget-label">Custo Total</div><div className="fase1-budget-total">R$ 16.700,00</div></div>
                            <div><div className="fase1-budget-label">Prazo Manufatura</div><div className="fase1-budget-value">25 dias úteis</div></div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button onClick={() => { alert('Aprovado!'); setMostrarSCL(false); }} style={{ flex: 1, backgroundColor: '#059669', color: 'white', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>APROVAR</button>
                            <button onClick={() => { alert('Reprovado!'); setMostrarSCL(false); }} style={{ flex: 1, backgroundColor: '#ffe4e6', color: '#e11d48', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>REPROVAR</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
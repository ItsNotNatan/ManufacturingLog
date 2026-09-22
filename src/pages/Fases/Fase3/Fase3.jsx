// FILE: src/pages/Fases/Fase3/Fase3.jsx
import React from 'react';
import { Check, Settings, Ruler, Search, RotateCcw, Info, Lock } from 'lucide-react';
import { useAuthStore } from '../../../contexts/authStore';
import './Fase3.css';

export default function Fase3() {
    const { usuario } = useAuthStore();

    // Regra de Permissão: Apenas área_id === 3 (Manufatura) pode editar
    const podeEditar = usuario?.area_id === 3;

    return (
        <div className="fase3-container fade-in">
            <div className="fase3-header">
                <h1 className="fase3-title">Fase 3: Manufatura</h1>
                <p className="fase3-subtitle">Acompanhamento da produção e controlo de qualidade em tempo real.</p>
            </div>

            {/* AVISO DE MODO DE LEITURA (Caso não pertença à Área 3) */}
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
                    <span>Modo de Leitura: Apenas colaboradores da área de <strong>Manufatura</strong> podem atualizar o progresso de fábrica e os checklists de qualidade.</span>
                </div>
            )}

            {/* Cartão 1: Item Em Produção */}
            <div className="fase3-card">
                <div className="fase3-flex-between">
                    <div>
                        <h3 className="fase3-item-title">Transmissão REQ-2023-040 - Módulo Hidráulico Beta</h3>
                        <p className="fase3-item-meta">Iniciado em 01/Out/2026</p>
                    </div>
                    <span className="fase3-badge-emerald">
                        <span className="fase3-pulse-dot"></span> Em Execução (Fábrica)
                    </span>
                </div>

                <div className="fase3-progress-container">
                    <div className="fase3-progress-bar-bg">
                        <div className="fase3-progress-bar-fill" style={{ width: '45%' }}></div>
                    </div>

                    <div className="fase3-timeline">
                        <div className="fase3-step">
                            <div className="fase3-step-icon icon-done"><Check size={18} /></div>
                            <div className="fase3-step-title">Construção</div>
                            <div className="fase3-step-desc">Separar & Construir</div>
                        </div>

                        <div className="fase3-step">
                            <div className="fase3-step-connector connector-emerald"></div>
                            <div className="fase3-step-icon icon-current"><Settings size={18} /></div>
                            <div className="fase3-step-title title-blue">Montagem</div>
                            <div className="fase3-step-desc desc-blue">Pré-montar & Montar</div>
                        </div>

                        <div className="fase3-step">
                            <div className="fase3-step-connector connector-slate"></div>
                            <div className="fase3-step-icon icon-pending"><Ruler size={18} /></div>
                            <div className="fase3-step-title">Ajustes & Checklists</div>
                            <div className="fase3-step-desc">Medição 3D</div>
                        </div>

                        <div className="fase3-step">
                            <div className="fase3-step-connector connector-slate"></div>
                            <div className="fase3-step-icon icon-pending"><Search size={18} /></div>
                            <div className="fase3-step-title">Qualidade & Fim</div>
                            <div className="fase3-step-desc">Avaliação Final</div>
                        </div>
                    </div>
                </div>

                {podeEditar && (
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                        <button onClick={() => alert('Avançando etapa de fabricação...')} className="btn" style={{ background: '#059669', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '0.4rem', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                            Avançar Etapa de Produção
                        </button>
                    </div>
                )}
            </div>

            {/* Cartão 2: Retrabalho */}
            <div className="fase3-card fase3-rework-card">
                <div className="fase3-rework-bg"></div>
                <div className="fase3-rework-content">
                    <div className="fase3-flex-between" style={{ marginBottom: '1rem' }}>
                        <h3 className="fase3-item-title">Eventual 2005 - Suporte Sensor V2</h3>
                        <span className="fase3-badge-rose">
                            <RotateCcw size={14} style={{ marginRight: '0.4rem' }} /> Retrabalho (Qualidade)
                        </span>
                    </div>
                    <div className="fase3-rework-alert">
                        <Info size={24} style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                        <div>
                            <p style={{ fontWeight: 'bold', marginBottom: '0.2rem' }}>Status de Controlo:</p>
                            <p>A etapa "Avaliar qualidade" gerou uma <strong>Reprovação</strong>. A peça retornou para a fase de "Retrabalhar" na manufatura.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
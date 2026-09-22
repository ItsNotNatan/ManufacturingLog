// FILE: src/pages/Fases/Fase1/Fase1.jsx
import React, { useState } from 'react';
import { Clock, AlertCircle, Check, FileText, UploadCloud, ArrowRight, Calculator, Send, CheckCircle, MessageCircle, XCircle, Lock } from 'lucide-react';
import { useAuthStore } from '../../../contexts/authStore';
import './Fase1.css';

export default function Fase1() {
    const { usuario } = useAuthStore();

    // Regra de Permissão: Apenas área_id === 1 (Orçamento) pode editar
    const podeEditar = usuario?.area_id === 1;

    const [mostrarTL, setMostrarTL] = useState(true);
    const [mostrarOrcamento, setMostrarOrcamento] = useState(true);
    const [mostrarSCL, setMostrarSCL] = useState(true);

    const lidarComAcao = (setEstado, mensagem) => {
        if (!podeEditar) {
            alert("Ação não permitida: Apenas a equipa de Orçamento pode alterar esta fase.");
            return;
        }
        alert(mensagem);
        setEstado(false);
    };

    return (
        <div className="fase-container fade-in">
            <div className="fase-header">
                <h1 className="fase-title">Fase 1: Orçamento</h1>
                <p className="fase-subtitle">Solicitação, Engenharia (JZEP) e Gestão de Custos.</p>
            </div>

            {/* AVISO DE MODO DE LEITURA (Caso não pertença à Área 1) */}
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
                    <span>Modo de Leitura: Apenas colaboradores da área de <strong>Orçamento</strong> podem preencher e aprovar esta fase.</span>
                </div>
            )}

            {/* 1. AÇÃO: TL Engenharia */}
            {mostrarTL && (
                <div className="fase-card">
                    <div className="fase-flex-between">
                        <div>
                            <span className="badge-blue">Transmissão REQ-2023-112</span>
                            <h3 className="fase-item-title">Estrutura Metálica Suporte Principal</h3>
                        </div>
                        <span className="badge-amber">
                            <AlertCircle size={14} /> Ação Requerida (TL Eng)
                        </span>
                    </div>

                    <form onSubmit={(e) => { e.preventDefault(); lidarComAcao(setMostrarTL, 'Informações JZEP enviadas.'); }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>Tipo de Orçamento</label>
                                <select className="fase1-select" disabled={!podeEditar} required>
                                    <option value="">Selecione...</option>
                                    <option value="construtivos">Orçar Construtivos (Materiais)</option>
                                    <option value="servicos">Orçar Serviços de Manufatura</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>Anexar Desenhos (JZEP)</label>
                                <label className="upload-box" style={{ opacity: podeEditar ? 1 : 0.6, cursor: podeEditar ? 'pointer' : 'not-allowed' }}>
                                    <UploadCloud size={24} color="#94a3b8" />
                                    <span style={{ fontSize: '0.85rem', display: 'block' }}>Fazer upload de arquivos</span>
                                    <input type="file" style={{ display: 'none' }} disabled={!podeEditar} multiple />
                                </label>
                            </div>
                        </div>
                        {podeEditar && (
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                                <button type="submit" className="btn btn-primary" style={{ background: '#2563eb', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '0.4rem', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                                    Enviar para Setor de Orçamento <ArrowRight size={14} />
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            )}

            {/* 2. AÇÃO: Gestão de Orçamentos */}
            {mostrarOrcamento && (
                <div className="fase-card">
                    <div className="fase-flex-between">
                        <div>
                            <span className="badge-blue">Financeiro</span>
                            <h3 className="fase-item-title">Orçamento da Manufatura</h3>
                        </div>
                        <span className="badge-amber">
                            <Calculator size={14} /> Ação Requerida (Orçamento)
                        </span>
                    </div>

                    <div className="budget-grid">
                        <div>
                            <div className="budget-label">Databook / Qualidade</div>
                            <div className="input-group">
                                <input type="number" defaultValue="500" disabled={!podeEditar} style={{ padding: '0.4rem', borderRadius: '0.3rem', border: '1px solid #cbd5e1' }} />
                            </div>
                        </div>
                        <div>
                            <div className="budget-label">Cotação Fornecedores</div>
                            <div className="input-group">
                                <input type="number" defaultValue="800" disabled={!podeEditar} style={{ padding: '0.4rem', borderRadius: '0.3rem', border: '1px solid #cbd5e1' }} />
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Total Calculado: <span style={{ color: '#1d4ed8' }}>R$ 1.300,00</span></div>
                        {podeEditar && (
                            <button onClick={() => lidarComAcao(setMostrarOrcamento, 'Enviado para SCL.')} className="btn btn-success" style={{ background: '#2563eb', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '0.4rem', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                                Enviar para Avaliação (SCL) <Send size={14} />
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* 3. AÇÃO: Decisão Final */}
            {mostrarSCL && (
                <div className="fase-card">
                    <div className="fase-flex-between">
                        <h3 className="fase-item-title">Aprovação do Valor Final (PM/SCL)</h3>
                        <span className="badge-amber"><AlertCircle size={14} /> Avaliação</span>
                    </div>

                    <div className="btn-group">
                        <button onClick={() => lidarComAcao(setMostrarSCL, 'Aprovado!')} disabled={!podeEditar} className="btn btn-success" style={{ opacity: podeEditar ? 1 : 0.5, cursor: podeEditar ? 'pointer' : 'not-allowed' }}>
                            <CheckCircle size={18} /> APROVAR
                        </button>
                        <button onClick={() => lidarComAcao(setMostrarSCL, 'Reprovado.')} disabled={!podeEditar} className="btn btn-danger" style={{ opacity: podeEditar ? 1 : 0.5, cursor: podeEditar ? 'pointer' : 'not-allowed' }}>
                            <XCircle size={18} /> REPROVAR
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
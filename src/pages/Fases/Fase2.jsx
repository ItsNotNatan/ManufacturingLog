// src/pages/Fases/Fase2.jsx
import React, { useState } from 'react';
import { MailOpen } from 'lucide-react';
import './Fase2.css';

export default function Fase2() {
    const [mostrarPrazos, setMostrarPrazos] = useState(true);

    const handleConfirmarPrazos = () => {
        alert('Datas enviadas para o PCP.');
        setMostrarPrazos(false);
    };

    return (
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '1.5rem' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Fase 2: Planejamento</h1>

            {mostrarPrazos && (
                <div className="fase2-action-card" style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Montagem Subconjunto Y</h3>

                    <div className="fase2-context-box">
                        <p style={{ fontSize: '0.875rem' }}><strong>Contexto:</strong> O PCP listou os recursos necessários. Defina as datas de entrega.</p>
                    </div>

                    <div className="fase2-table-wrapper">
                        <table className="fase2-table">
                            <thead>
                                <tr>
                                    <th>Recurso Requerido</th>
                                    <th>Qtd</th>
                                    <th>Necessidade PCP</th>
                                    <th className="highlight">Definir seu Prazo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Kit Peças Cód 8899</td>
                                    <td>1 un</td>
                                    <td>15/Out/2026</td>
                                    <td className="highlight-cell"><input type="date" defaultValue="2026-10-15" style={{ padding: '0.25rem', borderRadius: '0.25rem', border: '1px solid #cbd5e1' }} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button onClick={handleConfirmarPrazos} style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', float: 'right' }}>Confirmar Prazos</button>
                    <div style={{ clear: 'both' }}></div>
                </div>
            )}

            <div className="fase2-info-box" style={{ marginTop: '1.5rem' }}>
                <div className="fase2-info-icon"><MailOpen size={24} /></div>
                <div>
                    <h4 style={{ fontWeight: 'bold' }}>Processo Automatizado: Reconfirmar Prazos</h4>
                    <p style={{ fontSize: '0.875rem', color: '#64748b' }}>O sistema envia e-mails automáticos Segundas e Quintas às 8h para reconfirmar prazos.</p>
                </div>
            </div>
        </div>
    );
}
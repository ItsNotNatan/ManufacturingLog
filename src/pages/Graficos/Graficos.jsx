import React from 'react';
import { BarChart3, TrendingUp, Package, Clock } from 'lucide-react';
import './Graficos.css';

export default function Graficos() {
    return (
        <div className="graficos-container">
            <div className="graficos-header">
                <h2 className="graficos-title">
                    <BarChart3 size={28} color="#2563eb" />
                    Dashboard e Indicadores
                </h2>
                <p>Visão geral do desempenho e volume de solicitações logísticas.</p>
            </div>

            {/* CARTÕES DE RESUMO (KPIs) */}
            <div className="kpi-grid">
                <div className="kpi-card">
                    <div className="kpi-icon blue"><Package size={24} /></div>
                    <div className="kpi-info">
                        <span>Total de Solicitações</span>
                        <strong>142</strong>
                    </div>
                </div>
                <div className="kpi-card">
                    <div className="kpi-icon green"><TrendingUp size={24} /></div>
                    <div className="kpi-info">
                        <span>Taxa de Aprovação</span>
                        <strong>87%</strong>
                    </div>
                </div>
                <div className="kpi-card">
                    <div className="kpi-icon orange"><Clock size={24} /></div>
                    <div className="kpi-info">
                        <span>Tempo Médio (SLA)</span>
                        <strong>2.4 dias</strong>
                    </div>
                </div>
            </div>

            {/* ÁREA DOS GRÁFICOS */}
            <div className="graficos-grid">
                <div className="grafico-card main-chart">
                    <h3>Volume de Solicitações (Últimos 6 meses)</h3>
                    <div className="chart-placeholder">
                        <div className="chart-bars">
                            {/* Barras simuladas com CSS */}
                            <div className="bar" style={{ height: '40%' }}><span>Jan</span></div>
                            <div className="bar" style={{ height: '60%' }}><span>Fev</span></div>
                            <div className="bar" style={{ height: '35%' }}><span>Mar</span></div>
                            <div className="bar" style={{ height: '80%' }}><span>Abr</span></div>
                            <div className="bar" style={{ height: '50%' }}><span>Mai</span></div>
                            <div className="bar" style={{ height: '90%' }}><span>Jun</span></div>
                        </div>
                    </div>
                </div>

                <div className="grafico-card side-chart">
                    <h3>Por Tipo de Dispositivo</h3>
                    <div className="chart-placeholder flex-center">
                        <p style={{ color: '#9ca3af' }}>O gráfico de pizza será renderizado aqui.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
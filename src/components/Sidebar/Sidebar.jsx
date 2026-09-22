// FILE: src/components/Sidebar/Sidebar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Factory, ListTree, ClipboardCheck, LogOut, FileText, CalendarCheck, Settings, User } from 'lucide-react';
import { useAuthStore } from '../../contexts/authStore';
import './Sidebar.css';

export default function Sidebar() {
    const navigate = useNavigate();
    const { usuario } = useAuthStore();

    const lidarComLogout = () => {
        if (window.confirm("Deseja sair do sistema?")) {
            navigate('/login');
        }
    };

    return (
        <aside className="sidebar-container">
            <div className="sidebar-logo">
                <div className="logo-icone">
                    <Factory size={24} />
                </div>
                <h2>NexusFactory</h2>
            </div>

            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <NavLink to="/acompanhamento" className={({ isActive }) => `nav-item ${isActive ? "ativo" : ""}`}>
                            <div className="nav-item-content">
                                <span className="nav-icone"><ListTree size={20} /></span>
                                <span className="nav-texto">Acompanhamento</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/aprovacoes" className={({ isActive }) => `nav-item ${isActive ? "ativo" : ""}`}>
                            <div className="nav-item-content">
                                <span className="nav-icone"><ClipboardCheck size={20} /></span>
                                <span className="nav-texto">Aprovações</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/configuracoes" className={({ isActive }) => `nav-item ${isActive ? "ativo" : ""}`}>
                            <div className="nav-item-content">
                                <span className="nav-icone"><Settings size={20} /></span>
                                <span className="nav-texto">Configurações</span>
                            </div>
                        </NavLink>
                    </li>
                </ul>

                <div className="sidebar-section">
                    <div className="sidebar-section-title">
                        <span>Fases do Processo</span>
                        <span className="badge-fluxo">Fluxo</span>
                    </div>

                    <ul>
                        <li>
                            <NavLink to="/fase1" className={({ isActive }) => `nav-item ${isActive ? "ativo" : ""}`}>
                                <div className="nav-item-content">
                                    <span className="nav-icone"><FileText size={20} /></span>
                                    <span className="nav-texto">Fase 1: Orçamento</span>
                                </div>
                                <span className="badge-notification">1</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/fase2" className={({ isActive }) => `nav-item ${isActive ? "ativo" : ""}`}>
                                <div className="nav-item-content">
                                    <span className="nav-icone"><CalendarCheck size={20} /></span>
                                    <span className="nav-texto">Fase 2: Planejamento</span>
                                </div>
                                <span className="badge-notification">2</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/fase3" className={({ isActive }) => `nav-item ${isActive ? "ativo" : ""}`}>
                                <div className="nav-item-content">
                                    <span className="nav-icone"><Factory size={20} /></span>
                                    <span className="nav-texto">Fase 3: Manufatura</span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="sidebar-footer">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 8px 16px 8px', marginBottom: '8px', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ backgroundColor: '#eff6ff', color: '#2563eb', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                        {usuario?.nome?.charAt(0) || <User size={16} />}
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1e293b', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            {usuario?.nome || "Utilizador"}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: '600' }}>
                            {usuario?.nome_area || `Área ${usuario?.area_id}`} ({usuario?.nivel_acesso === 'admin_area' ? 'Admin' : 'Normal'})
                        </div>
                    </div>
                </div>

                <button className="btn-voltar-sidebar" onClick={lidarComLogout}>
                    <LogOut size={18} color="#ef4444" />
                    <span style={{ color: '#ef4444' }}>Sair do Sistema</span>
                </button>
            </div>
        </aside>
    );
}
// =================================================================
// ARQUIVO: src/components/Sidebar/Sidebar.jsx
// DESCRIÇÃO: Menu de navegação lateral (Apenas Links e Fases)
// =================================================================
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Factory, ListTree, ClipboardCheck, FileText, CalendarCheck, Settings } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar() {
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
        </aside>
    );
}
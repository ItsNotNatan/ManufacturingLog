// FILE: src/pages/Configuracoes/Configuracoes.jsx
import React, { useState, useEffect } from 'react';
import { Settings, User, ShieldAlert, Users, Plus, CheckCircle } from 'lucide-react';
import { useAuthStore } from '../../contexts/authStore';
import api from '../../services/api';
import './Configuracoes.css';

export default function Configuracoes() {
    const { usuario, alterarPerfil } = useAuthStore();
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [enviando, setEnviando] = useState(false);

    // Estado do formulário atualizado conforme o Zod do Back-end
    const [novoUsuario, setNovoUsuario] = useState({
        nome: '',
        email: '',
        nivel_acesso: 'normal',
        area_id: 1
    });

    const mapaNivel = {
        admin_area: "Administrador da Área",
        normal: "Operador / Normal"
    };

    useEffect(() => {
        if (usuario.nivel_acesso === 'admin_area') {
            buscarUsuarios();
        }
    }, [usuario.nivel_acesso]);

    const buscarUsuarios = async () => {
        try {
            setCarregando(true);
            const resposta = await api.get('/usuarios');
            setListaUsuarios(resposta.data.dados || []);
        } catch (erro) {
            console.error("Erro ao buscar utilizadores:", erro);
        } finally {
            setCarregando(false);
        }
    };

    const lidarComNovoUsuario = async (e) => {
        e.preventDefault();
        try {
            setEnviando(true);
            await api.post('/usuarios', {
                ...novoUsuario,
                area_id: Number(novoUsuario.area_id)
            });
            alert('Utilizador criado com sucesso!');
            setNovoUsuario({ nome: '', email: '', nivel_acesso: 'normal', area_id: 1 });
            buscarUsuarios();
        } catch (erro) {
            alert(erro.response?.data?.erro || "Erro ao criar utilizador.");
        } finally {
            setEnviando(false);
        }
    };

    return (
        <div className="config-container">
            <div className="config-header">
                <h2 className="config-title"><Settings size={28} color="#2563eb" /> Configurações do Sistema</h2>
                <p className="config-subtitle">Gestão de perfil e utilizadores por área e nível de acesso.</p>
            </div>

            {/* MEU PERFIL */}
            <div className="config-card">
                <h3 className="config-card-title"><User size={20} /> Meu Perfil</h3>
                <div className="perfil-grid">
                    <div className="perfil-item">
                        <label>Nome do Colaborador</label>
                        <div>{usuario.nome}</div>
                    </div>
                    <div className="perfil-item">
                        <label>Email Corporativo</label>
                        <div>{usuario.email}</div>
                    </div>
                    <div className="perfil-item">
                        <label>Área de Atuação</label>
                        <div style={{ color: '#059669', fontWeight: 'bold' }}>
                            {usuario.nome_area || `Área ${usuario.area_id}`}
                        </div>
                    </div>
                    <div className="perfil-item">
                        <label>Nível de Acesso</label>
                        <div style={{ color: '#2563eb', fontWeight: 'bold' }}>
                            {mapaNivel[usuario.nivel_acesso] || usuario.nivel_acesso}
                        </div>
                    </div>
                </div>
            </div>

            {/* GESTÃO DE UTILIZADORES (APENAS PARA ADMINS DA ÁREA) */}
            {usuario.nivel_acesso === 'admin_area' && (
                <div className="config-card area-restrita">
                    <h3 className="config-card-title"><Users size={20} color="#8b5cf6" /> Gestão de Acessos</h3>

                    <form onSubmit={lidarComNovoUsuario} style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', margin: '1.5rem 0' }}>
                        <h4 style={{ margin: '0 0 1rem 0', color: '#334155' }}>Registar Novo Membro na Equipa</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr auto', gap: '1rem', alignItems: 'end' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.3rem', color: '#64748b' }}>Nome Completo</label>
                                <input type="text" required value={novoUsuario.nome} onChange={e => setNovoUsuario({ ...novoUsuario, nome: e.target.value })} style={{ width: '100%', padding: '0.6rem', borderRadius: '0.4rem', border: '1px solid #cbd5e1' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.3rem', color: '#64748b' }}>E-mail</label>
                                <input type="email" required value={novoUsuario.email} onChange={e => setNovoUsuario({ ...novoUsuario, email: e.target.value })} style={{ width: '100%', padding: '0.6rem', borderRadius: '0.4rem', border: '1px solid #cbd5e1' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.3rem', color: '#64748b' }}>Área</label>
                                <select value={novoUsuario.area_id} onChange={e => setNovoUsuario({ ...novoUsuario, area_id: Number(e.target.value) })} style={{ width: '100%', padding: '0.6rem', borderRadius: '0.4rem', border: '1px solid #cbd5e1', background: 'white' }}>
                                    <option value={1}>1 - Orçamento</option>
                                    <option value={2}>2 - Planejamento</option>
                                    <option value={3}>3 - Manufatura</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.3rem', color: '#64748b' }}>Nível de Acesso</label>
                                <select value={novoUsuario.nivel_acesso} onChange={e => setNovoUsuario({ ...novoUsuario, nivel_acesso: e.target.value })} style={{ width: '100%', padding: '0.6rem', borderRadius: '0.4rem', border: '1px solid #cbd5e1', background: 'white' }}>
                                    <option value="normal">Operador / Normal</option>
                                    <option value="admin_area">Admin da Área</option>
                                </select>
                            </div>
                            <button type="submit" disabled={enviando} className="btn-adicionar-utilizador" style={{ height: '40px' }}>
                                <Plus size={18} /> {enviando ? 'A salvar...' : 'Adicionar'}
                            </button>
                        </div>
                    </form>

                    {carregando ? (
                        <p style={{ textAlign: 'center', color: '#64748b' }}>A carregar equipa do servidor...</p>
                    ) : (
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f1f5f9', borderBottom: '2px solid #e2e8f0' }}>
                                    <th style={{ padding: '1rem', fontSize: '0.85rem', color: '#475569' }}>Nome</th>
                                    <th style={{ padding: '1rem', fontSize: '0.85rem', color: '#475569' }}>E-mail</th>
                                    <th style={{ padding: '1rem', fontSize: '0.85rem', color: '#475569' }}>Área</th>
                                    <th style={{ padding: '1rem', fontSize: '0.85rem', color: '#475569' }}>Nível de Acesso</th>
                                    <th style={{ padding: '1rem', fontSize: '0.85rem', color: '#475569', textAlign: 'center' }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaUsuarios.map(user => (
                                    <tr key={user.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                        <td style={{ padding: '1rem', fontWeight: '600', color: '#1e293b' }}>{user.nome}</td>
                                        <td style={{ padding: '1rem', color: '#64748b' }}>{user.email}</td>
                                        <td style={{ padding: '1rem', fontWeight: 'bold', color: '#059669' }}>
                                            {user.areas?.nome || `Área ${user.area_id}`}
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', padding: '0.2rem 0.6rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
                                                {mapaNivel[user.nivel_acesso] || user.nivel_acesso}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                                            <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                                <CheckCircle size={14} /> {user.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </div>
    );
}
// FILE: src/pages/Configuracoes/Configuracoes.jsx
import React, { useState, useEffect } from 'react';
import { Settings, User, ShieldAlert, Users, Plus, CheckCircle } from 'lucide-react';
import { useAuthStore } from '../../contexts/authStore';
import api from '../../services/api'; // Faz as chamadas ao Back-end (localhost:3000/api)
import './Configuracoes.css';

export default function Configuracoes() {
    const { usuario, alterarCargo } = useAuthStore();
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [enviando, setEnviando] = useState(false);

    // Estado do formulário
    const [novoUsuario, setNovoUsuario] = useState({ nome: '', email: '', cargo: 'normal' });

    const nomeDoCargo = {
        admin_area: "Administrador da Área",
        orcamento: "Analista de Orçamento",
        normal: "Utilizador Padrão"
    };

    // Traz os utilizadores do Back-end sempre que a página carrega ou o cargo muda para Admin
    useEffect(() => {
        if (usuario.cargo === 'admin_area') {
            buscarUsuarios();
        }
    }, [usuario.cargo]);

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
            await api.post('/usuarios', novoUsuario);
            alert('Utilizador criado com sucesso!');
            setNovoUsuario({ nome: '', email: '', cargo: 'normal' }); // Limpa os campos
            buscarUsuarios(); // Atualiza a tabela na hora
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
                <p className="config-subtitle">Gestão do perfil e controlo de acessos à plataforma.</p>
            </div>

            {/* SIMULADOR DE CARGOS */}
            <div className="simulador-cargo">
                <ShieldAlert size={24} color="#d97706" />
                <div>
                    <label style={{ fontWeight: 'bold', display: 'block', color: '#92400e' }}>Simulador de Cargo (Apenas Dev)</label>
                    <span style={{ fontSize: '0.85rem', color: '#b45309' }}>Muda o cargo para ver a secção de Admin desaparecer:</span>
                </div>
                <select
                    value={usuario.cargo}
                    onChange={(e) => alterarCargo(e.target.value)}
                    style={{ marginLeft: 'auto' }}
                >
                    <option value="admin_area">Admin da Área</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="normal">Normal</option>
                </select>
            </div>

            {/* MEU PERFIL */}
            <div className="config-card">
                <h3 className="config-card-title"><User size={20} /> Meu Perfil</h3>
                <div className="perfil-grid">
                    <div className="perfil-item">
                        <label>Nome de Utilizador</label>
                        <div>{usuario.nome}</div>
                    </div>
                    <div className="perfil-item">
                        <label>Email Corporativo</label>
                        <div>{usuario.email}</div>
                    </div>
                    <div className="perfil-item">
                        <label>Nível de Acesso</label>
                        <div style={{ color: '#2563eb', fontWeight: 'bold' }}>
                            {nomeDoCargo[usuario.cargo] || usuario.cargo}
                        </div>
                    </div>
                </div>
            </div>

            {/* GESTÃO DE UTILIZADORES (APENAS PARA ADMINS) */}
            {usuario.cargo === 'admin_area' && (
                <div className="config-card area-restrita">
                    <h3 className="config-card-title"><Users size={20} color="#8b5cf6" /> Gestão de Acessos</h3>

                    <form onSubmit={lidarComNovoUsuario} style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', margin: '1.5rem 0' }}>
                        <h4 style={{ margin: '0 0 1rem 0', color: '#334155' }}>Adicionar Novo Utilizador</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: '1rem', alignItems: 'end' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.3rem', color: '#64748b' }}>Nome Completo</label>
                                <input type="text" required value={novoUsuario.nome} onChange={e => setNovoUsuario({ ...novoUsuario, nome: e.target.value })} style={{ width: '100%', padding: '0.6rem', borderRadius: '0.4rem', border: '1px solid #cbd5e1' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.3rem', color: '#64748b' }}>E-mail corporativo</label>
                                <input type="email" required value={novoUsuario.email} onChange={e => setNovoUsuario({ ...novoUsuario, email: e.target.value })} style={{ width: '100%', padding: '0.6rem', borderRadius: '0.4rem', border: '1px solid #cbd5e1' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.3rem', color: '#64748b' }}>Cargo Inicial</label>
                                <select required value={novoUsuario.cargo} onChange={e => setNovoUsuario({ ...novoUsuario, cargo: e.target.value })} style={{ width: '100%', padding: '0.6rem', borderRadius: '0.4rem', border: '1px solid #cbd5e1', background: 'white' }}>
                                    <option value="normal">Normal</option>
                                    <option value="orcamento">Orçamento</option>
                                    <option value="admin_area">Admin da Área</option>
                                </select>
                            </div>
                            <button type="submit" disabled={enviando} className="btn-adicionar-utilizador" style={{ height: '40px' }}>
                                <Plus size={18} /> {enviando ? 'A salvar...' : 'Adicionar'}
                            </button>
                        </div>
                    </form>

                    {carregando ? (
                        <p style={{ textAlign: 'center', color: '#64748b' }}>A sincronizar com a base de dados...</p>
                    ) : (
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f1f5f9', borderBottom: '2px solid #e2e8f0' }}>
                                    <th style={{ padding: '1rem', fontSize: '0.85rem', color: '#475569' }}>Colaborador</th>
                                    <th style={{ padding: '1rem', fontSize: '0.85rem', color: '#475569' }}>E-mail</th>
                                    <th style={{ padding: '1rem', fontSize: '0.85rem', color: '#475569' }}>Acesso</th>
                                    <th style={{ padding: '1rem', fontSize: '0.85rem', color: '#475569', textAlign: 'center' }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaUsuarios.map(user => (
                                    <tr key={user.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                        <td style={{ padding: '1rem', fontWeight: '600', color: '#1e293b' }}>{user.nome}</td>
                                        <td style={{ padding: '1rem', color: '#64748b' }}>{user.email}</td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', padding: '0.2rem 0.6rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
                                                {nomeDoCargo[user.cargo] || user.cargo}
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
// ==========================================
// FILE: src/pages/Acompanhamento/Acompanhamento.jsx (FRONT-END)
// ==========================================
import React, { useState, useEffect } from 'react';
import { Search, Filter, Eye, Truck, Loader2 } from 'lucide-react';
import api from '../../services/api';
import './Acompanhamento.css';

export default function Acompanhamento() {
    const [pesquisa, setPesquisa] = useState('');
    const [solicitacoes, setSolicitacoes] = useState([]); // Começa como um array vazio
    const [carregando, setCarregando] = useState(true);   // Estado de carregamento
    const [erro, setErro] = useState(null);

    // O useEffect corre automaticamente quando a página é aberta
    useEffect(() => {
        buscarDados();
    }, []);

    const buscarDados = async () => {
        try {
            setCarregando(true);
            setErro(null);
            // Faz o pedido à rota GET que acabámos de criar no Back-end
            const resposta = await api.get('/dispositivos');

            // Guarda os dados reais no estado do React
            setSolicitacoes(resposta.data.dados);
        } catch (err) {
            console.error("Erro ao procurar logs:", err);
            setErro("Não foi possível carregar os dados. Verifique a conexão.");
        } finally {
            setCarregando(false);
        }
    };

    const getStatusClass = (status) => {
        switch (status?.toLowerCase()) {
            case 'pendente': return 'status-pendente';
            case 'transito': return 'status-transito';
            case 'concluido': return 'status-concluido';
            default: return 'status-pendente';
        }
    };

    const formatarStatus = (status) => {
        if (!status) return 'Pendente';
        if (status.toLowerCase() === 'transito') return 'Em Trânsito';
        return status.charAt(0).toUpperCase() + status.slice(1);
    };

    // Filtra pelos dados reais (ex: projeto, pm ou linha)
    const solicitacoesFiltradas = solicitacoes.filter(item => {
        const termo = pesquisa.toLowerCase();
        return (
            (item.projeto && item.projeto.toLowerCase().includes(termo)) ||
            (item.pm && item.pm.toLowerCase().includes(termo)) ||
            (item.linha && item.linha.toLowerCase().includes(termo))
        );
    });

    return (
        <div className="acompanhamento-container">
            <div className="acompanhamento-header">
                <h2 className="acompanhamento-title">Log de Dispositivos Registados</h2>
            </div>

            <div className="acompanhamento-actions">
                <div className="search-box">
                    <Search size={18} />
                    <input
                        type="text"
                        placeholder="Pesquisar por Projeto, Linha ou PM..."
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                    />
                </div>
                <button className="btn btn-outline" onClick={buscarDados}>
                    <Filter size={18} /> Atualizar
                </button>
            </div>

            <div className="table-container">
                <table className="tracking-table">
                    <thead>
                        <tr>
                            <th>Projeto</th>
                            <th>Linha</th>
                            <th>Dispositivo</th>
                            <th>Responsável (PM)</th>
                            <th>Status</th>
                            <th style={{ textAlign: 'center' }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* 1. Verifica se está a carregar */}
                        {carregando ? (
                            <tr>
                                <td colSpan="6" style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
                                    <Loader2 className="spin" size={24} style={{ animation: 'spin 1s linear infinite', margin: '0 auto' }} />
                                    <p style={{ marginTop: '10px' }}>A carregar dados do servidor...</p>
                                </td>
                            </tr>
                        ) : erro ? (
                            /* 2. Verifica se houve erro */
                            <tr>
                                <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#ef4444' }}>
                                    {erro}
                                </td>
                            </tr>
                        ) : solicitacoesFiltradas.length > 0 ? (
                            /* 3. Mostra os dados reais */
                            solicitacoesFiltradas.map((item) => (
                                <tr key={item.id}>
                                    <td style={{ fontWeight: '600' }}>{item.projeto}</td>
                                    <td>{item.linha}</td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <Truck size={14} color="#6b7280" /> {item.tipo_dispositivo || 'N/A'}
                                        </div>
                                    </td>
                                    <td>{item.pm}</td>
                                    <td>
                                        <span className={`status-badge ${getStatusClass(item.status)}`}>
                                            {formatarStatus(item.status)}
                                        </span>
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        <button className="btn-icon" title="Ver Detalhes">
                                            <Eye size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            /* 4. Tabela vazia */
                            <tr>
                                <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
                                    Nenhum dispositivo encontrado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
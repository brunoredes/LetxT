import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/vxtel.png';
import './styles.css';

export default function Ligacao() {
  const [ligacao, setLigacao] = useState([]);

  useEffect(() => {
    api.get('ligacao').then((res) => {
      setLigacao(res.data);
    });
  }, []);

  return (
    <div className="call-container">
      <header>
        <img src={logoImg} alt="VxTel logo" />
        <span>
          Bem vindo ao simulador do plano FaleMais.
        </span>
        <Link className="button" style={{ width: 140 }} to="/new">Calcular plano</Link>
        {' '}
        <Link className="button" style={{ width: 150 }} to="/price">Preço sem plano</Link>
        {' '}
        <Link className="button" style={{ width: 140 }} to="/plan">Verificar planos</Link>
      </header>

      <h1>Planos Calculados</h1>

      <ul>
        {ligacao.map((call) => (
          <li key={call.id_ligacao}>
            <strong>PLANO FALEMAIS </strong>
            <p>{call.plano.nome_plano}</p>

            <strong>DDD ORIGEM</strong>
            <p>{call.preco.origem_local.codigo_local}</p>

            <strong>DDD DESTINO</strong>
            <p>{call.preco.destino_local.codigo_local}</p>

            <strong>TEMPO </strong>
            <p>
              {call.duracao}
              {' '}
              minutos
            </p>

            <strong>COM PLANO FALEMAIS </strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(call.valorFinalComPlano)}
            </p>

            <strong>SEM PLANO FALEMAIS </strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(call.precoFinal)}

            </p>

          </li>
        ))}

      </ul>
    </div>
  );
}

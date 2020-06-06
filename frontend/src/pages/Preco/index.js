import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/vxtel.png';
import './styles.css';

export default function Preco() {
  const [preco, setPreco] = useState([]);

  useEffect(() => {
    api.get('preco').then((res) => {
      setPreco(res.data);
    });
  }, []);

  return (
    <div className="price-container">
      <header>
        <img src={logoImg} alt="VxTel logo" />
        <span>
          Custo de ligações sem o plano FaleMais
        </span>
        <Link className="button" style={{ width: 140 }} to="/new">Calcular plano</Link>
        {' '}
        <Link className="button" style={{ width: 150 }} to="/">Planos calculados</Link>
        {' '}
        <Link className="button" style={{ width: 140 }} to="/plan">Verificar planos</Link>
      </header>

      <h1>Preços pré-definidos por código de DDD de origem e destino</h1>

      <ul>
        {preco.map((price) => (
          <li key={price.id_ligacao}>
            <strong>DDD ORIGEM</strong>
            <p>{price.origem_local.codigo_local}</p>

            <strong>DDD DESTINO</strong>
            <p>{price.destino_local.codigo_local}</p>

            <strong>VALOR POR MINUTO</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(price.valor)}
            </p>

          </li>
        ))}

      </ul>
    </div>
  );
}

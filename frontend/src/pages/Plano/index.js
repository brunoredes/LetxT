import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/vxtel.png';
import './styles.css';

export default function Plano() {
  return (
    <div className="plan-container">
      <header>
        <img src={logoImg} alt="VxTel logo" />
        <span>
          Planos FaleMais
        </span>
        <Link className="button" style={{ width: 140 }} to="/new">Calcular plano</Link>
        {' '}
        <Link className="button" style={{ width: 170 }} to="/">Planos calculados</Link>
        {' '}
        <Link className="button" style={{ width: 160 }} to="/price">Preço sem plano</Link>
      </header>

      <h1>Nome dos planos e quantidade de minutos gratuítos</h1>

      <ul>
        <li>
          <strong>Nome do Plano</strong>
          <p>FaleMais 30</p>

          <strong>Quantidade de minutos gratuítos com o plano</strong>
          <p>30 minutos</p>
        </li>
        <li>
          <strong>Nome do Plano</strong>
          <p>FaleMais 60</p>

          <strong>Quantidade de minutos gratuítos com o plano</strong>
          <p>60 minutos</p>
        </li>
        <li>
          <strong>Nome do Plano</strong>
          <p>FaleMais 120</p>

          <strong>Quantidade de minutos gratuítos com o plano</strong>
          <p>120 minutos</p>
        </li>

      </ul>
    </div>
  );
}

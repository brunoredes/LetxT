/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/vxtel.png';
import './styles.css';

export default function NovoPlano() {
  const [id_plano, setPlano] = useState('');
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [duracao, setDuracao] = useState('');

  const history = useHistory();

  async function handleNewLigacao(e) {
    e.preventDefault();

    const data = {
      id_plano,
      origem,
      destino,
      duracao,
    };

    try {
      await api.post('/ligacao', data);

      history.push('/');
    } catch (err) {
      alert('Erro ao cadastrar simulação de ligação, por favor tente novamente.');
    }
  }

  return (
    <div className="new-plan-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="vxtel Logo" />

          <h1>Simule o novo plano da VxTel, o FaleMais</h1>
          <p>
            Com o novo produto FaleMais da VxTel, o cliente adquire um plano
            e pode falar de graça até um determinado tempo (em minutos),
            e só paga os minutos excedentes.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para planos calculados
          </Link>
        </section>

        <form onSubmit={handleNewLigacao}>
          <input
            placeholder="Escolha um plano"
            value={id_plano}
            onChange={(e) => setPlano(e.target.value)}
          />
          <input
            placeholder="Escolha a Origem"
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
          />
          <input
            placeholder="Escolha o destino"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
          <input
            placeholder="Digite a duração da ligação"
            value={duracao}
            onChange={(e) => setDuracao(e.target.value)}
          />

          <button className="button" type="submit">Simular</button>
        </form>
      </div>
    </div>
  );
}

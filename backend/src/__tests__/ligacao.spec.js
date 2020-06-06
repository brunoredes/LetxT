import request from 'supertest';
import app from '../app';
// import connection from '../database/index';
// import LigacaoController from '../app/controllers/LigacaoController';
// import connection from '../database/index';

describe('Ligacao', () => {
  it('Deve criar uma nova ligação', async () => {
    const response = await request(app).post('/ligacao').send({
      id_plano: 1,
      origem: 1,
      destino: 2,
      duracao: 20,
    });
    console.log(response);
    expect(response.status).toEqual(500);
    expect(response.body).toHaveProperty([
      { id_ligacao: response.body.id_ligacao },
    ]);
    expect(response.body).toMatchObject({
      id_ligacao: response.body.id_ligacao, // undefined
      id_plano: 1,
      id_preco: 1,
      duracao: 20,
      precoFinal: 38,
      valorFinalComPlano: 0,
      preco: {
        id_preco: 1,
        valor: 1.9,
        id_origem_local: 1,
        id_destino_local: 2,
      },
    });
  });
  // it('Deve listar todas as ligações', async () => {
  //   const ligacao = await request(app).post('/ligacao').send({
  //     id_plano: 1,
  //     origem: 1,
  //     destino: 2,
  //     duracao: 30,
  //   });

  //   const response = await request(app).get('/ligacao');

  //   expect(response.body).toEqual(
  //     expect.arrayContaining({
  //       id_ligacao: ligacao.body.id_ligacao,
  //       id_plano: 1,
  //       id_preco: 1,
  //       duracao: 30,
  //       precoFinal: 57,
  //       valorFinalComPlano: 0,
  //       preco: null,
  //     })
  //   );
  // });
});

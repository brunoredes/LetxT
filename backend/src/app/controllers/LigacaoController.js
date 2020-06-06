import * as Yup from 'yup';
import Ligacao from '../models/Ligacao';
import Plano from '../models/Plano';
import Preco from '../models/Preco';
import Local from '../models/Local';

class LigacaoController {
  async index(request, response) {
    const ligacoes = await Ligacao.findAll({
      include: [
        {
          model: Plano,
          as: 'plano',
        },
        {
          model: Preco,
          as: 'preco',
          include: [
            {
              model: Local,
              as: 'origem_local',
            },
            {
              model: Local,
              as: 'destino_local',
            },
          ],
        },
      ],
    });

    return response.json(ligacoes);
  }

  async store(request, response) {
    const schema = Yup.object({
      id_plano: Yup.number().required(),
      origem: Yup.string().required(),
      destino: Yup.string().required(),
      duracao: Yup.number().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: 'Validação Falhou, tente novamente' });
    }

    let plano;

    if (request.body.id_plano) {
      plano = await Plano.findByPk(request.body.id_plano);

      if (!plano) {
        return response.status(404).json({ error: 'Plano não encontrado' });
      }
    }

    const preco = await Preco.findOne({
      where: {
        id_origem_local: request.body.origem,
        id_destino_local: request.body.destino,
      },
      include: [
        {
          model: Local,
          as: 'origem_local',
        },
        {
          model: Local,
          as: 'destino_local',
        },
      ],
    });

    if (!preco) {
      return response.status(400).json({ error: 'Preço não encontrado' });
    }

    const valorFinal = preco.valor * request.body.duracao;
    let valorFinalComPlano = 0;

    if (plano) {
      let minutos = request.body.duracao - plano.custo_minuto;
      minutos = minutos < 0 ? 0 : minutos;

      valorFinalComPlano = preco.valor * 1.1 * minutos;
    }

    const ligacao = await Ligacao.create({
      ...request.body,
      precoFinal: valorFinal,
      valorFinalComPlano,
      id_preco: preco.id_preco,
      plano,
    });

    return response.json(ligacao);
  }
}

export default new LigacaoController();

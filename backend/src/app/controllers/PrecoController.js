// import Local from '../models/Local';
import Preco from '../models/Preco';
import Local from '../models/Local';

class PrecoController {
  async index(request, response) {
    const precos = await Preco.findAll({
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
    return response.json(precos);
  }
}

export default new PrecoController();

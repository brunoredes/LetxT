import Plano from '../models/Plano';

class PlanoController {
  async index(request, response) {
    const plano = Plano.findAll();

    return response.json(plano);
  }
}
export default new PlanoController();

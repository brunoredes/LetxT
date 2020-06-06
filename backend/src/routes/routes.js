import { Router } from 'express';
// import PlanController from '../app/controllers/PlanController';
import PrecoController from '../app/controllers/PrecoController';
import LigacaoController from '../app/controllers/LigacaoController';
import PlanoController from '../app/controllers/PlanoController';

const routes = new Router();

routes.get('/ligacao', LigacaoController.index);
routes.post('/ligacao', LigacaoController.store);
routes.get('/preco', PrecoController.index);
routes.get('/plano', PlanoController.index);

export default routes;

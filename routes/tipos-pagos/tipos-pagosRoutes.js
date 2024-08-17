import { Router } from 'express';

import {

  listarTodosTiposPagos
} from '../../controllers/tipos-pagos/tipos-pagosController.js';

const TiposPagosRouter = Router();

TiposPagosRouter.get('/', listarTodosTiposPagos);


export default TiposPagosRouter;
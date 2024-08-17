import { Router } from 'express';

import {
  listarTodosPagos
} from '../../controllers/pagos/pagosController.js';

const pagosRouter = Router();

pagosRouter.get('/', listarTodosPagos);


export default pagosRouter;
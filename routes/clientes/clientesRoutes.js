import { Router } from 'express';

import {
  listarTodosClientes
} from '../../controllers/clientes/clientesController.js';

const clientesRouter = Router();

clientesRouter.get('/', listarTodosClientes);


export default clientesRouter;
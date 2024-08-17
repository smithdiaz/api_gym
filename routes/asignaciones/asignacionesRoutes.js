import { Router } from 'express';

import {
    listarTodasAsignaciones,
  
} from '../../controllers/asignaciones/asignacionesController.js';

const asignacionesRouter = Router();

asignacionesRouter.get('/', listarTodasAsignaciones);


export default asignacionesRouter;
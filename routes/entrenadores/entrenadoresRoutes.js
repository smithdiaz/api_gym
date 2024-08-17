import { Router } from 'express';

import {
 listarTodoEntrenadores
} from '../../controllers/entrenadores/entrenadoresController.js';

const entrenadoresRouter = Router();

entrenadoresRouter.get('/', listarTodoEntrenadores);


export default entrenadoresRouter;
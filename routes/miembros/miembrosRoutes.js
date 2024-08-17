import { Router } from 'express';

import {
  listarTodosMiembros
} from '../../controllers/miembros/miembrosControllers.js'

const miembrosRouter = Router();

miembrosRouter.get('/', listarTodosMiembros);


export default miembrosRouter;
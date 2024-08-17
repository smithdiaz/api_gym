import { Router } from 'express';

import {
  listarTodosRutinas
} from '../../controllers/rutina/rutinaController.js';

const rutinaRouter = Router();

rutinaRouter.get('/', listarTodosRutinas);


export default rutinaRouter;
import { Router } from 'express';

import {
    listarTodosClases
} from '../../controllers/clases/clasesController.js';

const clasesRouter = Router();

clasesRouter.get('/', listarTodosClases);


export default clasesRouter;
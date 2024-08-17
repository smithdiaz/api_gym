import { Router } from 'express';

import {
    listarTodosLosMembresias
} from '../../controllers/membresias/membresiasControllers.js';

const membresiasRoutes = Router();

membresiasRoutes.get('/', listarTodosLosMembresias);


export default membresiasRoutes;
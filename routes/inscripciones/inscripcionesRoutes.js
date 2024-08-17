import { Router } from 'express';

import {
    listartodoInscripciones
} from '../../controllers/inscripciones/inscripcionesControllers.js';


const inscripcionesRouter = Router();

inscripcionesRouter.get('/',  listartodoInscripciones);


export default  inscripcionesRouter;
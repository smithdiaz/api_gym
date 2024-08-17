//Crear la instancia de express
import express from 'express';
import cors from 'cors'

// Importar las rutas
import clientesRouter from './routes/clientes/clientesRoutes.js';
import asignacionesRoutes from './routes/asignaciones/asignacionesRoutes.js';
import clasesroutes from './routes/clases/clasesRoutes.js'; 
import entrenadoresRouter from './routes/entrenadores/entrenadoresRoutes.js';
import inscripcionesRouter from './routes/inscripciones/inscripcionesRoutes.js';
import membresiasRoutes from './routes/membresias/membresiaRoutes.js';
import miembrosRouter from './routes/miembros/miembrosRoutes.js';
import pagosRouter from './routes/pagos/pagosRoutes.js';
import rutinaRouter from './routes/rutina/rutinaRoutes.js';
import TiposPagosRouter from './routes/tipos-pagos/tipos-pagosRoutes.js';



//Crear la app de express
const app = express();

//Habilitar la captura de datos mediante post / formularios
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Habilitar CORS para permitir las llamadas de otro servidor
// distinto a este (localhost:3000).
app.use(cors())

//Configurar el puerto
const port = 3000;

//Usar las rutas
app.use('/clientes', clientesRouter); 
app.use('/asignaciones',asignacionesRoutes);
app.use('/clases',clasesroutes);
app.use('/entrenadores', entrenadoresRouter);
app.use('/inscripciones',inscripcionesRouter);
app.use('/membresias',membresiasRoutes);
app.use('/miembros', miembrosRouter);
app.use('/pagos',pagosRouter);
app.use('/rutina',rutinaRouter);
app.use('/tipos-pagos',TiposPagosRouter);


// PRODUCTOS

//Levantar el servidor en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
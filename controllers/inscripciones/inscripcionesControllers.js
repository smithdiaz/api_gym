import {

    listartodoInscripcionesQuery,
   
   } from "../../db/inscripciones/inscripcionesQueries.js";
   
   /**
    * Obtener todos los cliente de la base de datos
    */
   const listartodoInscripciones = async (req, res) => {
     // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
     // Try -> intentar
     // Catch -> capturar el error
     try {
       //  Ejecutar la consulta en la base de datos
       const inscripciones = await listartodoInscripcionesQuery();
       res.json(inscripciones);
     } catch (error) {
       res.status(500).send(error);
     }
   };
   export{
    listartodoInscripciones,
   }
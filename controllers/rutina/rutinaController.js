import {
    listarTodosRutinasQuery,
   
   } from "../../db/rutina/rutinaQueries.js";
   
   /**
    * Obtener todos los cliente de la base de datos
    */
   const listarTodosRutinas = async (req, res) => {
     // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
     // Try -> intentar
     // Catch -> capturar el error
     try {
       //  Ejecutar la consulta en la base de datos
       const rutina = await listarTodosRutinasQuery();
       res.json(rutina);
     } catch (error) {
       res.status(500).send(error);
     }
   };
   export{
     listarTodosRutinas,
   }
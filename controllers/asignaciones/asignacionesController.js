import {
   
    listarTodosAsignacionesQuery,
   
   } from "../../db/asignaciones/asignacionesQueries.js";
   
   
   /**
    * Obtener todos los cliente de la base de datos
    */
   const listarTodasAsignaciones = async (req, res) => {
     // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
     // Try -> intentar
     // Catch -> capturar el error
     try {
       //  Ejecutar la consulta en la base de datos
       const asignaciones = await listarTodosAsignacionesQuery();
       res.json(asignaciones);
     } catch (error) {
       res.status(500).send(error);
     }
   };
   export{
     listarTodasAsignaciones,
   }
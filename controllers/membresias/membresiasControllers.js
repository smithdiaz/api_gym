import {
    listarTodosLosMembresiasQuery,
   
   } from "../../db/membresias/membresiasQueries.js";
   
   /**
    * Obtener todos los cliente de la base de datos
    */
   const listarTodosLosMembresias = async (req, res) => {
     // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
     // Try -> intentar
     // Catch -> capturar el error
     try {
       //  Ejecutar la consulta en la base de datos
       const membresias = await listarTodosLosMembresiasQuery();
       res.json(membresias);
     } catch (error) {
       res.status(500).send(error);
     }
   };
   export{
    listarTodosLosMembresias,
   }
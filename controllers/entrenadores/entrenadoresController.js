import {
    listarTodoEntrenadoresQuery,
   
   } from "../../db/entrenadores/entrenadoresQueries.js";
   
   /**
    * Obtener todos los cliente de la base de datos
    */
   const listarTodoEntrenadores = async (req, res) => {
     // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
     // Try -> intentar
     // Catch -> capturar el error
     try {
       //  Ejecutar la consulta en la base de datos
       const entrenadores = await listarTodoEntrenadoresQuery();
       res.json(entrenadores);
     } catch (error) {
       res.status(500).send(error);
     }
   };
   export{
     listarTodoEntrenadores,
   }
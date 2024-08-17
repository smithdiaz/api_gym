import {
  
   listarTodosClasesQuery,
   
   } from "../../db/clases/clasesQueries.js";
   
   /**
    * Obtener todos los cliente de la base de datos
    */
   const listarTodosClases = async (req, res) => {
     // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
     // Try -> intentar
     // Catch -> capturar el error
     try {
       //  Ejecutar la consulta en la base de datos
       const clases= await listarTodosClasesQuery();
       res.json(clases);
     } catch (error) {
       res.status(500).send(error);
     }
   };
   export{
     listarTodosClases,
   }
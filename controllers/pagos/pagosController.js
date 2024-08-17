import {
    listarTodosPagosQuery,
   
   } from "../../db/pagos/pagosQueries.js";
   
   /**
    * Obtener todos los cliente de la base de datos
    */
   const listarTodosPagos = async (req, res) => {
     // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
     // Try -> intentar
     // Catch -> capturar el error
     try {
       //  Ejecutar la consulta en la base de datos
       const pago = await listarTodosPagosQuery();
       res.json(pago);
     } catch (error) {
       res.status(500).send(error);
     }
   };
   export{
     listarTodosPagos,
   }
import {
    listarTodosTiposPagosQuery,
   
   } from "../../db/tipos-pagos/tipos-pagosQueries.js";
   
   /**
    * Obtener todos los cliente de la base de datos
    */
   const listarTodosTiposPagos = async (req, res) => {
     // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
     // Try -> intentar
     // Catch -> capturar el error
     try {
       //  Ejecutar la consulta en la base de datos
       const tipos_pago= await listarTodosTiposPagosQuery();
       res.json(tipos_pago);
     } catch (error) {
       res.status(500).send(error);
     }
   };
   export{
     listarTodosTiposPagos,
   }
import {
  listarTodosMiembrosQuery,
 
 } from "../../db/miembros/miembrosQueries.js";
 
 /**
  * Obtener todos los cliente de la base de datos
  */
 const listarTodosMiembros = async (req, res) => {
   // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
   // Try -> intentar
   // Catch -> capturar el error
   try {
     //  Ejecutar la consulta en la base de datos
     const miembro = await listarTodosMiembrosQuery();
     res.json(miembro);
   } catch (error) {
     res.status(500).send(error);
   }
 };
 export{
   listarTodosMiembros,
 }
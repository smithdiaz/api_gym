import {
   listarTodosClientesQuery,
  
  } from "../../db/clientes/clientesQueries.js";
  
  /**
   * Obtener todos los cliente de la base de datos
   */
  const listarTodosClientes = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const cliente = await listarTodosClientesQuery();
      res.json(cliente);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  export{
    listarTodosClientes,
  }
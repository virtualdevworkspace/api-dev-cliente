const validateCliente = (data) => {
    // Aquí podrías agregar validaciones según sea necesario
    if (!data.nombre || !data.apellido_paterno || !data.fecha_nacimiento) {
      return 'Nombre, apellido paterno y fecha de nacimiento son obligatorios';
    }
    // Validar más campos según sea necesario
    return null;
  };
  
  module.exports = {
    validateCliente
  };
  
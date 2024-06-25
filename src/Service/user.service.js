import UserManager from "../DaoS/Managers/user.manager.js";

class userService {
  async findAll() {
    try {
      const user = await UserManager.findAll();
      if (!user) {
        return { success: false, error: "No se pudo traer los usuarios" };
      }
      return {
        success: true,
        message: "Usuarios traidos con exito",
         user
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async findOne(query) {
    try {
      const user = await UserManager.findOne(query);
      if (!user) {
        return { success: false, error: "Usuario no encontrado" };
      }
      return {
        success: true,
        message: "Usuario Traido con exito",
         user,
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async findById(id) {
    try {
      const user = await UserManager.findById(id);
      if (!user) {
        return { success: false, error: "Usuario no encontrado" };
      }
      return {
        success: true,
        message: "Usuario Traido con exito",
         user,
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async createOne(data) {
    try {
      const user = await UserManager.createOne(data);
      if (!user) {
        return { success: false, error: "Error al crear el usuario" };
      }
      return {
        success: true,
        message: "Usuario creado con exito",
         user,
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async updateOne(id, data) {
    try {
      const user = await UserManager.updateOne(id, data);
      if (!user) {
        return { success: false, error: "No se pudo actualizar el usuario" };
      }
      return {
        success: true,
        message: "Usuario Actualizado con exito",
         user,
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async deleteOne(id) {
    try {
      const user = await UserManager.deleteOne(id);
      if (!user) {
        return { success: false, error: "Error al eliminar el usuario" };
      }
      return {
        success: true,
        message: "Usuario Eliminado con exito",
         user,
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

const UserService = new userService()
export default UserService;
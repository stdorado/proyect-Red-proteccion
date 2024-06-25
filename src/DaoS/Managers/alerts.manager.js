import AlertSchema from "../Models/alert.model.js";

class alertManager{
//Get
  async findAll(){
    try {
        return AlertSchema.find()
    } catch (error) {
        throw error;
    }
  }

//Get
  async findOne(query){
    try {
        return AlertSchema.findOne(query)
    } catch (error) {
        throw error;
    }
  }
//Get
  async findById(id){
    try {
        return AlertSchema.findById(id)
    } catch (error) {
        throw error
    }
  }
//Post
  async createOne(data){
    try {
        return AlertSchema.create(data)
    } catch (error) {
        throw error
    }
  }
//Put
  async updateOne(id,data){
    try {
        return AlertSchema.findByIdAndUpdate(id,data,{next : true})
    } catch (error) {
        throw error
    }
  }
//Delete
  async deleteOne(id){
    try {
        return AlertSchema.findByIdAndDelete(id)
    } catch (error) {
        throw error;
    }
  }
//Get
  async findByUserId(userId){
    try {
        return AlertSchema.find({usuario : userId})
    } catch (error) {
        
    }
  }
}

const AlertManager = new alertManager()
export default AlertManager;
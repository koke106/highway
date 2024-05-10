import { carModel } from "../models/car.model.js";

const getAllCars = async (_,res) => {
    try {
        const response = await carModel.findAllCars();
        res.json(response);
    } catch (error) {
        console.error(error);
    }
}

const getCar = async (req,res) => {
    try {
        const idCar = req.params.id;
        const response = await carModel.findCar(idCar);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

const addCar = async (req,res) => {
    try {
        console.log('req body -> ', req.body);
        const {name,team,traction,brand,model} = req.body;
        const response = await carModel.insertCar(name,team,traction,brand,model);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const carController = {
    getAllCars,
    getCar,
    addCar,
}
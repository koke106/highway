import { Router } from "express";
import { carController } from "../controllers/car.controller.js";

const router = Router();

router.get('/', carController.getAllCars);
router.get('/:id', carController.getCar);
router.post('/add', carController.addCar);

export default router;
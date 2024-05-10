import { pool } from "../database/connection.js"

const findAllCars = async () => {
    console.log('findAllcars xx1');
    const {rows} = await pool.query('SELECT * FROM car');
    return rows;
}

const findCar = async (idCar) => {
    const result = await pool.query('SELECT * FROM car WHERE id = $1 ', [idCar])
    return result.rows;
}
// id |    name     | team | traction | brand | model 
const insertCar = async (name,team,traction,brand,model) => {
    const query = 'INSERT INTO car (name,team,traction,brand,model) VALUES ($1,$2,$3,$4,$5) RETURNING *';
    const {rows} = await pool.query(query, [name,team,traction,brand,model]);
    return rows[0];
}

export const carModel = {
    findAllCars,
    findCar,
    insertCar,
    // editCar,
    // removeCar
}
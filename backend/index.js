import 'dotenv/config'
import express from "express";
import carsRoute from './routes/car.route.js'

const app = express();

app.use(express.json());

// Registrar el router de noticias
app.use('/api/car', carsRoute);

// Registrar el router de noticias
// app.use('/api/news', newsRouter);

// Registrar el router de equipos
// app.use('/api/teams', teamsRouter);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log('Server listening on port 5001')
})
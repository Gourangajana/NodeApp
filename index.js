import express from 'express';
import UserRoutes from './routes/user.route.js'; 
import TheatreRoutes from './routes/theatre.route.js';
import connectToDB from './database/mongoDb.js';
import { createTheatre, renderTheatres } from './controllers/theatre.controller.js';

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use('/api/user', UserRoutes);


app.use('/api/theatre', TheatreRoutes);



app.all('*', (req, res) => {
    res.status(404).send("Page Not Found!");
})

const PORT = process.env.PORT || 5060;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
    connectToDB();
})

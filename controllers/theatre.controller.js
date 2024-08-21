
import Treatre from "../model/theatre.model.js" ;

export const getAllTheatre = async (req, res) => {
    try {
        const allTheatresData = await Theatre.find({});
        res.status(200).send(allTheatresData);
    } catch(e) {
        res.status(500).send(e.message);
    } 
}

export const getTheatreById = async (req, res) => {
    try {
        const theatreId = req.params.theatreId;
        const theatreData = await Theatre.findById(theatreId);
        res.status(200).send(theatreData);
    } catch(e) {
        res.status(500).send(e.message);
    } 
}

export const deleteTheatreById = async (req, res) => {
    try {
        const theatreId = req.params.theatreId;
        const data = await Theatre.findByIdAndDelete(theatreId);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e.message);
    } 
}

export const createTheatre = async (req, res) => {
    try {
        const newTheatreData = req.body;
        const data = await Theatre.create(newTheatreData);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e.message);
    }
} 

export const updateTheatreById = async (req, res) => {
    try {
        const newTheatreData = req.body;
        const theatreId = req.params.theatreId;
        const data = await Theatre.updateOne({ _id: theatreId }, {$set: newTheatreData})
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e.message);
    }
}

export const renderTheatres = async (req, res) => {
    const theatres = await Theatre.find({});
    res.render('theatreList', { theatres });
}
export const renderTheatreById = async (req, res) => {
    const theatreId = req.params.theatreId;
    const theatre = await Theatre.findById(theatreId);
    res.render('theatreDetail', { theatre });
}
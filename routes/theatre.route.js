import express from 'express';
import {createTheatre,  deleteTheatreById, getAllTheatre, getTheatreById,  updateTheatreById } from '../controllers/theatre.controller.js';

const router = express.Router();

router.get('/:theatreId', getTheatreById);

router.get('/', getAllTheatre);

router.post('/', createTheatre);

router.put('/:theatreId', updateTheatreById);

router.delete('/:theatreId', deleteTheatreById);

export default router;
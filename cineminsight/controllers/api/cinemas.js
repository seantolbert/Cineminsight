
const Cinema = require("../../models/cinema");

const index = async (req, res) => {
    try {
      const allCinemas = await Cinema.find({});
      res.json(allCinemas);
    } catch {
      res.status(400);
    }
  };
  
  const show = async (req, res) => {
    try {
      const cinema = await Cinema.findById(req.params.id);
      res.json(cinema);
    } catch {
      res.status(400);
    }
  };
  
  const create = async (req, res) => {
    try {
      const newCinema = await Cinema.create(req.body);
      res.status(201).json(newCinema);
    } catch (err) {
      console.log(err);
      res.status(400);
    }
  };
  
  const update = async (req, res) => {
    try {
      const updatedCinema = await Cinema.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(updatedCinema);
    } catch {
      res.status(400);
    }
  };
  
  const deleteOne = async (req, res) => {
    try {
      const deletedCinema = await Cinema.findByIdAndRemove(req.params.id);
      res.status(200).json(deletedCinema);
    } catch {
      res.status(400);
    }
  }
  
  module.exports = {
    create,
    index,
    show,
    update,
    delete: deleteOne
  };
const Insight = require("../../models/insight");

const index = async (req, res) => {
  try {
    const allInsights = await Insight.find({});
    res.json(allInsights);
  } catch {
    res.status(400);
  }
};

const show = async (req, res) => {
  try {
    const insight = await Insight.findById(req.params.insightId);
    res.json(insight);
  } catch {
    res.status(400);
  }
};

const create = async (req, res) => {
  try {
    const newInsight = await Insight.create(req.body);
    res.status(201).json(newInsight);
  } catch {
    res.status(400);
  }
};

const update = async (req, res) => {
  try {
    const updatedInsight = await Insight.findByIdAndUpdate(req.params.insightId, req.body, {
      new: true,
    });
    res.status(200).json(updatedInsight);
  } catch {
    res.status(400);
  }
};

const deleteOne = async (req, res) => {
  try {
     const deletedInsight = await Insight.findByIdAndRemove(req.params.insightId);
    res.status(200).json(deletedInsight);
  } catch {
    res.status(400);
  }
};

module.exports = {
  create,
  index,
  show,
  update,
  delete: deleteOne,
};
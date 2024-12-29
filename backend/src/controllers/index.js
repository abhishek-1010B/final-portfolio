const Portfolio = require('../models'); // Assuming the model is exported from models/index.js

// Get all portfolio items
exports.getPortfolio = async (req, res) => {
    try {
        const portfolios = await Portfolio.find();
        res.status(200).json(portfolios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new portfolio item
exports.createPortfolio = async (req, res) => {
    const portfolio = new Portfolio(req.body);
    try {
        const savedPortfolio = await portfolio.save();
        res.status(201).json(savedPortfolio);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing portfolio item
exports.updatePortfolio = async (req, res) => {
    try {
        const updatedPortfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedPortfolio);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
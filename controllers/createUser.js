const { User } = require('../sequelize/models');
const tokenGenerate = require('../helpers/tokenGenerate');

module.exports = async (req, res, next) => {
    try {
        const { displayName, email, password, image } = req.body;

        await User.create({
            displayName,
            email,
            password,
            image,
        });

        const tokenCreated = tokenGenerate({ displayName, email, image });

        return res.status(201).json({ token: tokenCreated });
    } catch (err) {
        next(err);
    }
};
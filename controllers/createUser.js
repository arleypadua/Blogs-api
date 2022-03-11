const { User } = require('../sequelize/models');
const tokenGenerate = require('../helpers/tokenGenerate');

module.exports = async (req, res, next) => {
    try {
        const { displayName, email, password, image } = req.body;

        const findEmail = await User.findOne({ where: { email } });

        if (findEmail) return res.status(409).json({ message: 'User already registered' });

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
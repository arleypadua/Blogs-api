const { User } = require('../sequelize/models');
const tokenGenerate = require('../helpers/tokenGenerate');

module.exports = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const findEmail = await User.findOne({ where: { email } });

        if (!findEmail) return res.status(400).json({ message: 'Invalid fields' });

        const tokenCreated = tokenGenerate({ email, password });

        return res.status(200).json({ token: tokenCreated });
    } catch (err) {
        next(err);
    }
};
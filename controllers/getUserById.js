const { User } = require('../sequelize/models');

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        const [user] = await await User.findAll({ where: { id } });

        if (!user) return res.status(404).json({ message: 'User does not exist' });

        return res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};
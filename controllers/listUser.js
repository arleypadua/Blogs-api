const { User } = require('../sequelize/models');

module.exports = async (req, res, next) => {
    try {
        const listUser = await User.findAll();
        return res.status(200).json(listUser);
    } catch (err) {
        next(err);
    }
};
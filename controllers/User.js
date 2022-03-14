const { User } = require('../sequelize/models');
const tokenGenerate = require('../helpers/tokenGenerate');

const createUser = async (req, res, next) => {
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

const listUser = async (req, res, next) => {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const [user] = await await User.findAll({ where: { id } });

        if (!user) return res.status(404).json({ message: 'User does not exist' });

        return res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getUserById,
    createUser,
    listUser,
};
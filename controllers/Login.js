const tokenGenerate = require('../helpers/tokenGenerate');

module.exports = async (req, res, next) => {
    try {
        const { email } = req.body;
        const { id } = req.body.user;

        const tokenCreated = tokenGenerate({ email, id });

        return res.status(200).json({ token: tokenCreated });
    } catch (err) {
        next(err);
    }
};
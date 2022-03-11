const { User } = require('../sequelize/models');

module.exports = async (req, res, next) => {
    const { email } = req.body;
    if (!email || email === '') {
      return res.status(400).json({ message: '"email" is required' });
    }

    const findEmail = await User.findOne({ where: { email } });

    if (findEmail) return res.status(409).json({ message: 'User already registered' });
    
    const emailValidRegex = /\S+@\S+\.\S+/;
    const isEmailValid = emailValidRegex.test(email);
  
    if (!isEmailValid) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    }
    return next();
};
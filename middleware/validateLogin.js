const { User } = require('../sequelize/models');

module.exports = async (req, res, next) => {
  const { email } = req.body;

  if (email === '') return res.status(400).json({ message: '"email" is not allowed to be empty' });

  if (!email) return res.status(400).json({ message: '"email" is required' });

  const findUser = await User.findOne({ where: { email } });

  if (!findUser) return res.status(400).json({ message: 'Invalid fields' });

  req.body.user = findUser;
  next();
};
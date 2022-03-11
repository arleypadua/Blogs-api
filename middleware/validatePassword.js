module.exports = (req, res, next) => {
    const { password } = req.body;
    const MIN_LENGTH = 6;
    if (password === '') {
      return res.status(400).json({ message: '"password" is not allowed to be empty' });
    }

    if (!password) return res.status(400).json({ message: '"password" is required' });

    if (password.length < MIN_LENGTH) {
      return res.status(400).json({
        message: '"password" length must be 6 characters long',
      });
    }
    return next();
};
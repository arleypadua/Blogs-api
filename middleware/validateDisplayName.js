module.exports = (req, res, next) => {
    const { displayName } = req.body;
    const MIN_LENGTH = 8;
    if (!displayName || displayName === '') {
      return res.status(400).json({ message: '"password" is required' });
    }
    if (displayName.length < MIN_LENGTH) {
      return res.status(400).json({
        message: '"displayName" length must be at least 8 characters long',
      });
    }
    return next();
};
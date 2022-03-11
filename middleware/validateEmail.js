module.exports = async (req, res, next) => {
    const { email } = req.body;
    if (email === '') {
      return res.status(400).json({ message: '"email" is not allowed to be empty' });
    }
    if (!email) return res.status(400).json({ message: '"email" is required' });
    
    const emailValidRegex = /\S+@\S+\.\S+/;
    const isEmailValid = emailValidRegex.test(email);
  
    if (!isEmailValid) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    }
    return next();
};
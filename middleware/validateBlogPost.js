module.exports = async (req, res, next) => {
  const { title, categoryIds, content } = req.body;

  if (!title) {
      return res.status(400).json({ message: '"title" is required' });
  }
  if (!content) {
      return res.status(400).json({ message: '"content" is required' });
  }

  // pela documentação no README, não dá pra ver se o campo categoryIds é obrigatório ou não.
  // talvez seja melhor setar o campo categoryIds na requisição para array vazio, quando não for passado nada
  // dessa forma, quem estiver usando a API tem uma boa experiência no uso da API, e o seu código tem a garantia de sempre ter um valor válido
  if (!categoryIds) { 
      req.categoryIds = []
  }
  
  next();
}; 
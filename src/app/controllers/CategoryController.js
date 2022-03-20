const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const category = await CategoryRepository.findAll();

    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required!' });
    }

    // const categoryExists = await ContactRepository.findByEmail(email);
    // if (categoryExists) {
    //   return response.status(400).json({ error: 'This e-mail is already in use' });
    // }

    const category = await CategoryRepository.create({
      name,
    });

    response.json(category);
  }
}

module.exports = new CategoryController();

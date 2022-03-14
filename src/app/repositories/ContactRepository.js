const { v4 } = require('uuid');

let contacts = [{
  id: v4(),
  name: 'Vinicius',
  email: 'vini.bonetto10@gmail.com',
  phone: '12412412',
  category_id: v4(),
},
{
  id: v4(),
  name: 'Guiniver',
  email: 'guiniver.bonetto10@gmail.com',
  phone: '97789089',
  category_id: v4(),
}];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();

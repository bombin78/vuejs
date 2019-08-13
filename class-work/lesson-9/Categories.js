const categories = [
  { id: 1, title: "Frontend", primary: true, },
  { id: 2, title: "Программирование", primary: false, },
  { id: 3, title: "Backend", primary: true, },
  { id: 4, title: "Верстка", primary: false, },
  { id: 5, title: "Дизайн", primary: false, },
];

export default {
  async all() {
    return [...categories];
  },
  async count() {
    return categories.length;
  },
  async get(id) {
      return categories.find(c => c.id === id);
  },
  async add({title, primary}) {
    const id = await this.count() + 1;
    const category = {
        id,
        title,
        primary,
    };
    categories.push(category);
    return category;
  }
};

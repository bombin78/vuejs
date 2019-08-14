const categories = [
  { id: 1, title: "Frontend", },
  { id: 2, title: "Программирование", },
  { id: 3, title: "Backend", },
  { id: 4, title: "Верстка", },
  { id: 5, title: "Дизайн", },
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
  }
};

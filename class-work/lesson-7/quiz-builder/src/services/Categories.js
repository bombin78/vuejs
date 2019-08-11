const categories = [
  { id: 1, title: 'Frontend' },
  { id: 2, title: 'Программирование' },
  { id: 3, title: 'Backend' },
];

export default {
  all() {
    return categories;
  },
  count() {
    return categories.length;
  },
  get(id) {
    return categories.find(c => c.id === id);
  },
};

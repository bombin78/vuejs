const tests = [
  {
    id: 1,
    title: "Тест по JavaScript",
    category: 1,
    brief: "Для новичков",
  },
  {
    id: 2,
    title: "Тест по CSS",
    category: 1,
    brief: "Базовый уровень",
  },
  {
    id: 3,
    title: "Тест по HTML",
    category: 1,
    brief: "Для новичков",
  },
  {
    id: 4,
    title: "Тест по PHP",
    category: 3,
    brief: "Базовый уровень",
  },
  {
    id: 5,
    title: "Тест по PHP",
    category: 3,
    brief: "Продвинутый уровень",
  },
  {
    id: 6,
    title: "Тест по MySQL",
    category: 3,
    brief: "Базовый уровень",
  },
];

export default {
  all() {
    return tests;
  },
  count() {
    return tests.length;
  },
  get(id) {
    return tests.find(t => t.id === id);
  },
};

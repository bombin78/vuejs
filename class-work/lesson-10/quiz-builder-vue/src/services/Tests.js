const tests = [
  {
    id: 1,
    title: "Тест по JavaScript",
    category: 1,
    brief: "Для новичков",
    questions: [],
  },
  {
    id: 2,
    title: "Тест по CSS",
    category: 1,
    brief: "Базовый уровень",
    questions: [],
  },
  {
    id: 3,
    title: "Тест по HTML",
    category: 1,
    brief: "Для новичков",
    questions: [],
  },
  {
    id: 4,
    title: "Тест по PHP",
    category: 3,
    brief: "Базовый уровень",
    questions: [],
  },
  {
    id: 5,
    title: "Тест по PHP",
    category: 3,
    brief: "Продвинутый уровень",
    questions: [],
  },
  {
    id: 6,
    title: "Тест по MySQL",
    category: 3,
    brief: "Базовый уровень",
    questions: [],
  },
];

export default {
  async all() {
    return [...tests];
  },
  async count() {
    return tests.length;
  },
  async get(id) {
    return tests.find(t => t.id === id);
  },
  async add({
    title, category, brief, questions,
  }) {
    const id = await this.count() + 1;
    const test = {
      id,
      title,
      category,
      brief,
      questions,
    };
    tests.push(test);
    return test;
  },
};

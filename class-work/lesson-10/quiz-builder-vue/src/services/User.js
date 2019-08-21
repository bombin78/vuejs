import { auth } from "../plugins/firebase";

export default {
  async createUser(email, password) {
    const result = await auth.createUserWithEmailAndPassword(email, password);
    return result.user;
  },
  async getUserByCredentials(email, password) {
    const result = await auth.signInWithEmailAndPassword(email, password);
    return result.user;
  },
  async logout() {
    return auth.signOut();
  },
};

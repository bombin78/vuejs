import { db } from "../plugins/firebase";

export default {
  async all() {
    const snapshot = await db.collection("categories").get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
};

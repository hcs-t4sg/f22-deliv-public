import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import { DatabaseEntry } from "./interfaces";

// Functions for database mutations

export const emptyEntry = {
  name: "",
  link: "",
  description: "",
  user: "",
  category: 0,
  userid: null,
};

export async function addEntry(entry: DatabaseEntry) {
  await addDoc(collection(db, "entries"), {
    name: entry.name,
    link: entry.link,
    description: entry.description,
    user: entry.user,
    category: entry.category,
    // The ID of the current user is logged with the new entry for database user-access functionality.
    // You should not remove this userid property, otherwise your logged entries will not display.
    userid: entry.userid,
  });
}

export async function updateEntry(entry: DatabaseEntry) {
  // TODO: Create Mutation to Edit Entry
}

export async function deleteEntry(entry: DatabaseEntry) {
  // TODO: Create Mutation to Delete Entry
}

import { client } from "./app.js";

async function updateBooksById(id, updatedBook) {
  return await client
    .db("node-july")
    .collection("books")
    .updateOne({ id: id }, { $set: updatedBook });
}

async function deleteBooksById(id) {
  return await client.db("node-july").collection("books").deleteOne({ id: id });
}

async function addBooks(newBook) {
  return await client.db("node-july").collection("books").insertMany(newBook);
}

async function getBooksById(id) {
  return await client.db("node-july").collection("books").findOne({ id: id });
}

async function getAllBooks() {
  return await client.db("node-july").collection("books").find({}).toArray();
}

export {
  getAllBooks,
  getBooksById,
  addBooks,
  deleteBooksById,
  updateBooksById,
};

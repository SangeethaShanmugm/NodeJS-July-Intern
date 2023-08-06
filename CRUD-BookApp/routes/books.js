import express from "express";
import{ getAllBooks,
    getBooksById,
    addBooks,
    deleteBooksById,
    updateBooksById} from "../helper.js"
const router = express.Router();

//get all books
router.get("/", async (req, res) => {
  const result = await getAllBooks();
  res.send(result);
});

//get books by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await getBooksById(id);
  res.send(result);
});

//add books
router.post("/add", async (req, res) => {
  const newBook = req.body;
  console.log(newBook);
  const result = await addBooks(newBook);
  res.send(result);
});
//delete book by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await deleteBooksById(id);
  res.send(result);
});
//update books => add + delete
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body;
  const result = await updateBooksById(id, updatedBook);
  res.send(result);
});

export const booksRouter = router;

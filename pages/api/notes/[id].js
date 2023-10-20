import nc from "next-connect";
import notes from "../../../src/data/data";

const getIndexById = (id) =>
  notes.findIndex((note) => note.id === parseInt(id));

const handler = nc()
  .get((req, res) => {
    const { id } = req.query;

    const index = getIndexById(id);

    console.log("note => ", index);

    res.json({ data: notes[index] });
  })
  .patch((req, res) => {
    const { id } = req.query;

    console.log("id => ", id);

    const index = getIndexById(id);

    console.log("index => ", index);

    const updated = {
      ...notes[index],
      ...req.body,
    };

    console.log("updated => ", updated);

    notes[index] = updated;

    res.json({ data: updated });
  })
  .delete((req, res) => {
    const { id } = req.query;

    const index = getIndexById(id);

    if (index === -1) {
      res.json({ message: "not found data" });
      return;
    }

    notes.splice(index, 1);

    res.json({ data: id });
  });

export default handler;

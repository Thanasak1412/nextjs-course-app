import nc from "next-connect";

const handler = nc()
  .get((_, res) => {
    res.send("Hello, world");
  })
  .post((req, res) => {
    const { firstName, lastName } = req.body;

    res.json({ message: `Hello, ${firstName} ${lastName}` });
  });

export default handler;

import Express from "express";

const app = Express();

app.get("/", (req, res) => {
  res.send("Working...");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});

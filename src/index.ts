import Express from "express";
import cors from "cors";
import * as commitHandler from "./handlers/commit";

const app = Express();
app.use(cors());

app.get("/commits", commitHandler.getCommits);

app.listen(3000, () => {
  console.log("App running on port 3000");
});

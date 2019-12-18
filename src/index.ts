import Express, {Request, Response} from "express";
import * as commitHandler from "./handlers/commit";

const app = Express();

app.get("/commits", commitHandler.getCommits);

app.listen(3000, () => {
  console.log("App running on port 3000");
});

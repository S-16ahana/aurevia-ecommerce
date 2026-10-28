import app from "./src/app/app.js";
import { connectToDb } from "./src/config/db.js";
await connectToDb();
app.listen(3000, () => {
  console.log("Server is running at port number 3000");
});

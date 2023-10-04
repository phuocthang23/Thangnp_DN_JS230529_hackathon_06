const categoriesRouter = require("./categoryRouter");
const questRouter = require("./questionsRouter");
function Router(app) {
  app.use("/api/v1/categories", categoriesRouter);
  app.use("/api/v1/questions", questRouter);
  // app.use("/api/v1/category", taskRouter);
}
module.exports = Router;

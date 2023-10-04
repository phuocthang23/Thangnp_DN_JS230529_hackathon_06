const taskRouter = require("./taskRouter");
function Router(app) {
  app.use("/api/v1/task", taskRouter);
}
module.exports = Router;

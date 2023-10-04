const conn = require("../../config/db.config.js");
const AppError = require("../utils/appError");
exports.createQuest = (req, res, next) => {
  if (!req.body) return next(new AppError("No form data found", 404));
  const values = [req.body.task, req.body.status];
  conn.query(
    `insert into todoList ( task , status)
    values (?,?)`,
    values,
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "todo created!",
      });
    }
  );
};

//* get all
exports.getAllQuest = (req, res, next) => {
  conn.query("SELECT * FROM quest.category;", function (err, data, fields) {
    if (err) return next(new AppError(err));
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};

//* get answer
exports.getOneQuestAndALLAnswer = (req, res, next) => {
  conn.query(
    `SELECT 
        question.question_id, question.content AS question_content,
        answer.content AS answer_content,
        answer.is_answer
        FROM question
        JOIN answer ON question.question_id = answer.question_id
        WHERE question.question_id = ?`,
    [req.params.id],
    function (err, result) {
      if (err) return next(new AppError(err));

      if (result.length === 0) {
        res.status(404).json({
          status: "fail",
          message: "No table found",
        });
      } else {
        res.status(200).json({
          status: "success",
          length: result.length,
          data: result,
        });
      }
    }
  );
};

//* get one
exports.getOneQuest = (req, res, next) => {
  conn.query(
    "SELECT * FROM question where question_id = ?",
    [req.params.id],
    function (err, data, result) {
      if (err) return next(new AppError(err));

      if (result.affectedRows === 0) {
        res.status(404).json({
          status: "fail",
          message: "No todo data",
        });
      }
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    }
  );
};

//* get quest theo category và lvl và giới hạn
exports.getOneQuestAndALLAnswerLimit = (req, res, next) => {
  const { category_id, level, LIMIT } = req.query; //* lấy từ query
  conn.query(
    `SELECT category.name, question.content, question.level
    FROM category
    JOIN question ON category.category_id = question.category_id
    WHERE question.level = ? and category.category_id = ?
    LIMIT ?;
    `,
    [category_id, level, LIMIT],
    function (err, result) {
      if (err) return next(new AppError(err));

      if (result.length === 0) {
        res.status(404).json({
          status: "fail",
          message: "No table found",
        });
      } else {
        res.status(200).json({
          status: "success",
          length: result.length,
          data: result,
        });
      }
    }
  );
};

//* detele
exports.deleteQuest = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No todo id found", 404));
  }
  conn.query(
    "DELETE FROM todoList WHERE id=?",
    [req.params.id],
    function (err, result) {
      if (err) return next(new AppError(err, 500));

      // Kiểm tra số lượng bản ghi bị ảnh hưởng bởi câu truy vấn DELETE
      if (result.affectedRows === 0) {
        res.status(404).json({
          status: "id not found",
        });
      }

      res.status(200).json({
        status: "success",
        message: "Todo deleted!",
      });
    }
  );
};

//* update
exports.updateQuest = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No employment id found", 404));
  }
  const values = [req.body.task, req.body.status];
  conn.query(
    `UPDATE todoList SET task=?,status=? WHERE id=?`,
    values,
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "todo updated!",
      });
    }
  );
};

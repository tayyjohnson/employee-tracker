const express = require("express");
const router = express.Router();
const db = require("../../db/connection");
const inputCheck = require("../../utils/inputCheck");

router.get("/roles", (req, res) => {
  const sql = `SELECT * FROM role`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// This function creates a role
router.post("/roles", ({ body }, res) => {
  const errors = inputCheck(
    body,
    "title",
    "salary",
    "department_id"
  );
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
  const params = [
    body.title,
    body.salary,
    body.department_id,
  ];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
      changes: result.affectedRows,
    });
  });
});

module.exports = router;
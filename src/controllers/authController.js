// controllers/authController.js
const authService = require('../services/authService');

function login(req, res) {
  const { email, password } = req.body;

  // 仮：ダミーユーザー
  const user = { id: 1, email };

  const token = authService.login(user);

  res.json({ token });
}

module.exports = { login };

// services/authService.js
const jwt = require('jsonwebtoken');

function login(user) {
  // 本来はID/PWチェックする
  // 今回は「確認済みユーザーが来た」前提

  const payload = {
    userId: user.id,
    email: user.email,
  };

  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return token;
}

module.exports = { login };

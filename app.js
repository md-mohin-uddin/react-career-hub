const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
const secret = "SECRET";

function verifyAccessToken(token) {
  try {
    const decoded = jwt.verify(token, secret);
    return { success: true, data: decoded };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function generateAccessToken(user) {
  const payload = {
    email: user.email,
    password: user.password,
  };

  const options = { expiresIn: "24h" };

  return jwt.sign(payload, secret, options);
}

app.get("/", (req, res) => {
  res.send("Hello, codedamn!");
});

app.post("/login", async (req, res) => {
  const payload = generateAccessToken(req.body);
  console.log({ payload });
  res.json({ message: "Welcome to the protected route!", user: req.user });
});

app.listen(3001, () => {
  console.log("Server started on http://localhost:3001");
});

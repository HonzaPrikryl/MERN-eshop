import jwt from "jsonwebtoken";

const generateJwtToken = (res, id) => {
  const token = jwt.sign({ id }, process.env.JWT_TOKEN, {
    expiresIn: "1d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000,
  });
};

export default generateJwtToken;

import jwt from "jsonwebtoken";
export const generateJWT = (email, password) => {
  return jwt.sign({ email, password }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

import jwt from "jsonwebtoken";
export const adminMiddleware = async (req, res, next) => {
  try {
    const aToken = req.header("aToken");

    if (!aToken) {
      return res
        .status(400)
        .json({ success: false, message: "Not Authorized Login Again" });
    }
    const jwToken = jwt.verify(aToken, process.env.JWT_SECRET);

    if (!jwToken) {
      return res
        .status(400)
        .json({ success: false, message: "Not Authorized Login Again" });
    }

    const { email, password } = jwToken;
    if (
      process.env.ADMIN_EMAIL != email &&
      process.env.ADMIN_PASSWORD != password
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Not Authorized Login Again" });
    }
    next();
  } catch (error) {
    console.log("admin middleware error", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

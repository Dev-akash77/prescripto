import { generateJWT } from "../Utils/Function/generateJWT_Token.js";

// ! admin login
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ! if user can not fill email and password
    if (!email && !password) {
      return res.status(400).json({ success: false, message: "Required fields are missing" });
    }

    // ! if email and passowrd not matched
    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
      return res.status(400).json({ success: false, message: "invalid cradentials" });
    }

    // ! get json web token
    const token = generateJWT(process.env.ADMIN_EMAIL,process.env.ADMIN_PASSWORD);

    // ! if token are not available
    if (!token) {
        return res.status(400).json({ success: false, message: "Token generation faield" });
    }

    // ! all the tthings are perfect send response to admin
    res.status(200).json({ success: true, message: "Login Successfully", token });
    
  } catch (error) {
    console.log("admin login controller error", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

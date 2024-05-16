import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	// Generates a JWT(token) using the jsonwebtoken library's sign method
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});

	// Sets the JWT(token) as a cookie in the HTTP response using the res.cookie method.
	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS   expires in 15days
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
	});
};

export default generateTokenAndSetCookie;

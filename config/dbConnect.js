const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_SECRET);
  } catch (error) {
    return sendStatus(401).json({
      message: "Invalid credentials for DB",
      error,
    });
  }
};

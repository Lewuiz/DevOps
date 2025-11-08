import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://reduvia_8_user:eCPDx6wBaiAMaK0g@cluster0.ji1njb0.mongodb.net/"
    )
    .then(() =>console.log("DB Connected"));
};

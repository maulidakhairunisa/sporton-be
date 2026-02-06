import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import categoryRoutes from "./routes/category.routes";
import productRoutes from "./routes/product.routes";
import { authenticate } from "./middlewares/auth.middleware";
import path from "node:path";

const app = express();
app.use(cors());
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({limit: "10mb", extended:true}));
app.use("/uploads", express.static(path.join(__dirname,"../uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/prodcuts", productRoutes);

app.get("/",(req,res) => {
    res.send("Sporton Backkend API is Running");
});

app.get("/test-middleware",authenticate,(req,res) => {
    res.send("Selamat kamu bisa mengakses ini dengan token");
});
export default app;
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { saveContactMessage, subscribeNewsletter } from "./db";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API endpoints
  app.post("/api/contatti", async (req, res) => {
    try {
      const { nome, email, oggetto, messaggio } = req.body;
      
      if (!nome || !email || !oggetto || !messaggio) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      
      await saveContactMessage(nome, email, oggetto, messaggio);
      res.json({ success: true });
    } catch (error) {
      console.error("Error saving contact message:", error);
      res.status(500).json({ error: "Failed to save message" });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }
      
      await subscribeNewsletter(email);
      res.json({ success: true });
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      res.status(500).json({ error: "Failed to subscribe" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);

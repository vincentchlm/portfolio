import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: "/portfolio/",
});

// Testing
=======
  base: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
});
>>>>>>> react-porto

import app from "./app";

const PORT = 2000;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

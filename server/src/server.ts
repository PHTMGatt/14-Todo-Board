import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;
const clientDistPath = path.resolve('../client/dist');

app.use(express.static(clientDistPath));

// The Kanban demo persists ticket changes in browser localStorage,
// so the production server only needs to serve the React application.
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

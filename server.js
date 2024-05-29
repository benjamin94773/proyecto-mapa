import express from 'express';
import { resolve } from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos desde el directorio dist
app.use(express.static('dist'));

// Ruta básica
app.get('*', (req, res) => {
  res.sendFile(resolve('dist', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
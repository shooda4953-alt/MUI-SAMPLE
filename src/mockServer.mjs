import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/products', async (req, res) => {
  try {
    const productsData = await fs.readFile(new URL('./json/products.json', import.meta.url), 'utf-8');
    const products = JSON.parse(productsData);
    res.json(products);
  } catch (error) {
    console.error('Error reading products data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Mock API server listening at http://localhost:${port}`);
});

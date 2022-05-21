import express from 'express';
import routes from './routes/imageRoutes';

const app = express();
app.use('/api', routes);

app.listen(1000, (): void => {
  console.log(`your server running on the port :1000`);
});

export default app;
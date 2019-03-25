import express from 'express';
import bodyParser from 'body-parser';
import router from './routers';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Dev app listening on port ${port}!`);
});

export default app;

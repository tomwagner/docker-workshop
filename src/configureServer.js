import bodyParser from 'body-parser';
import cors from 'cors';
import { successResponse, notFoundResponse } from './modules/Responses';
const handleNotFound = (request, response) =>
  notFoundResponse(response, { message: 'Sorry, path not found.' });
const handleServerError = error => console.log('API Error: ', error.message);

const configureServer = (server, controllers) => {
  // Security
  server.disable('x-powered-by');
  server.on('error', handleServerError);

  // configure app to use bodyParser()
  // this will let us get the data from a POST
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(cors());

  // Reviews API paths
  server.get('/review/list', controllers.review.list);
  server.post('/review/create', controllers.review.create);
  server.put('/review/update/:id', controllers.review.update);

  // notfound paths
  server.get('*', handleNotFound);
  server.post('*', handleNotFound);
  server.put('*', handleNotFound);

  // Start API
  const listener = server.listen(parseInt(process.env.API_PORT, 10) || 8000, () => {
    console.log('API is listening at %s', `${listener.address().port}`);
  });

  // Hello message
  server.get('/', (request, response) =>
    successResponse(response, {
      message: 'Hello BlueBerry workshopers! Welcome to our NodeJS - Mongo API',
      paths: {
        GET: '/review/list',
        POST: '/review/create',
        PUT: '/review/update/:id'
      }
    })
  );
};

export default configureServer;

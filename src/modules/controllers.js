import * as review from './Review/Review';
import { redirectResponse, successResponse, errorResponse } from './Responses';

// rewrap mongoose with restify and export
const controllers = {};
const importedControllers = {
  review
};

Object.keys(importedControllers).forEach((module) => {
  controllers[module] = {};
  Object.keys(importedControllers[module]).forEach((method) => {
    controllers[module][method] = (request, response) => {
      importedControllers[module][method](request)
        .then((data) => {
          if (data && data.redirect) {
            redirectResponse(response, data.redirect);
          } else if (data) {
            successResponse(response, data);
          } else {
            errorResponse(response, data);
          }
        })
        .catch(error => errorResponse(response, error));
    };
  });
});

export default controllers;

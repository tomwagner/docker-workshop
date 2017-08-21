/**
 * API responses
 */

export const successResponse = (response, data) => {
  response.status(200).send({
    status: true,
    data
  });
};

export const redirectResponse = (response, to) => {
  response.header('Location', to);
  response.sendStatus(302);
};

export const errorResponse = (response, data) => {
  response.status(500).send({
    status: false,
    data: data.errmsg || data.message
  });
};

export const notFoundResponse = (response, data) => {
  response.status(404).send({
    status: false,
    data: data.errmsg || data.message
  });
};

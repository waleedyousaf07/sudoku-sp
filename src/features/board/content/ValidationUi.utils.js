const getValidationPayload = (payload) => JSON.stringify(
  payload.map((row) => row.map((col) => col[Object.keys(col)[0]] || 0)),
);

export default getValidationPayload;

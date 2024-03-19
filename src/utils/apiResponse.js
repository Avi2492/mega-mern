class apiResponse {
  constructor(statusCode, data, message = "SUccess") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { apiResponse };

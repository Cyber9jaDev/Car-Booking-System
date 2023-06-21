export default function ErrorHandlingMiddleware(err, req, res, next){
  // const defaultError = {
    const message = err.message ?? 'Something went wrong.'
    const statusCode = err.statusCode || 500
  // }

  return res.status(statusCode).json({
    code: statusCode,
    message
  });

}
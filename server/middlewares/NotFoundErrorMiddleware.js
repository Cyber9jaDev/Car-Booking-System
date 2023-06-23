export default async function(req, res, next){
  return res.status(404).json({
    statusCode: 404,
    message: 'Not Found'
  });
}
const AppError = require('../utils/AppError');
const authConfig = require('../configs/auth');
const { verify }  = request('jsonwebtoken');

function ensureAuthenticated(request, response, next){
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError('JWT inválido', 401)
    }

    const [] = authHeader.split(" ")
}
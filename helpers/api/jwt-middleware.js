const expressJwt = require('express-jwt');
const util = require('util');
import nextConfig from '@/next.config.mjs';


const { serverRuntimeConfig } = nextConfig;

export { jwtMiddleware };

function jwtMiddleware(req, res) {

    const middleware = expressJwt({ secret: serverRuntimeConfig.secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/auth/login'
        ]
    });
    console.log("middleware", middleware);

    return util.promisify(middleware)(req, res);
}

const jwt = require('jsonwebtoken');
function ver(req,res,next){
    const token = req.cookie.token;
    if(!token){
        return res.json({"msg":"token not found"})
    }
    try{
        const d =jwt.verify(token,process.env.JWTKEY)
        console.table(d);
        req.user=d;
        next();

    }
    catch(error){
        return res.json({"msg":"Invalid token"})
    }
}

module.exports = ver;
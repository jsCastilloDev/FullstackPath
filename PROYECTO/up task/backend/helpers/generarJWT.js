import jwt from 'jsonwebtoken';

const generarJWT = () => {
    return jwt.sign({nombre: "juan"}, process.env.SECRET_JWT,{
        expiresIn: '30d',
    })
}
export default generarJWT;

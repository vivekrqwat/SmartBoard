import jwt from 'jsonwebtoken'

const generateToken = (userId, res) =>{

    const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY,
        {expiresIn: '1d'});
        
        res.cookie('jwt', token,
            {httpOnly: true}
        
    )
}

export default generateToken;
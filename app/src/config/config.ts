import dotenv from 'dotenv';
dotenv.config();

const env: { Mongourl: string, SecretKey: string } = {
    Mongourl: process.env.MONGO_URI || '',
    SecretKey: process.env.SECRET_KEY || ''
}

export default env;
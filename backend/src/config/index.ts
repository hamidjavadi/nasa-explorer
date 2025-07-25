import dotenv from 'dotenv';

import { IConfig, NodeENV } from '../types/config.type';

dotenv.config();

const config: IConfig = {
  port: Number(process.env.PORT),
  nodeEnv: process.env.NODE_ENV as NodeENV,
  mongodbConnectionString: process.env.MONGO_DB_CONNECTION_STRING,
  nasaAPIKey: process.env.NASA_API_KEY,
  apis: {
    POD: 'https://api.nasa.gov/planetary/apod',
  },
};

export default config;

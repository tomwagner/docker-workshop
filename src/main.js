import express from 'express';
import configureServer from './configureServer';
import configureMongoose from './configureMongoose';
import controllers from './modules/controllers';

configureMongoose('docker-workshop');

const httpServer = express();

configureServer(httpServer, controllers);

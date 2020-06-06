import { createServer as createHttpServer } from 'http';
import { createServer as createHttpsServer } from 'https';
import httpsConfig from './config/https';
import app from './app';

const { options } = httpsConfig;

const httpServer = createHttpServer(app);
const httpsServer = createHttpsServer(options, app);

httpServer.listen(process.env.HTTP, () => {
  console.log(`Servidor HTTP escutando na porta ${process.env.HTTP}`);
});
httpsServer.listen(process.env.HTTPS, () => {
  console.log(`Servidor HTTPS escutando na porta ${process.env.HTTPS}`);
});

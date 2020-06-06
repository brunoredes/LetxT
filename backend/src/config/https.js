import { readFileSync } from 'fs';
import { resolve } from 'path';

export default {
  options: {
    key: readFileSync(resolve(__dirname, '..', 'security', 'key', 'key.pem')),
    cert: readFileSync(
      resolve(__dirname, '..', 'security', 'certificate', 'cert.pem')
    ),
  },
};

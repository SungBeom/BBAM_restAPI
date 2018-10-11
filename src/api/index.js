import { Router } from 'express';
import { version } from '../../package.json';
import facets from './facets';
import auth from './auth';

export default ({ config, db }) => {
  const api = Router();

  // mount the facets resource
  api.use('/auth', auth({ config, db }));
  api.use('/facets', facets({ config, db }));

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version });
  });

  return api;
};

import db from './models';

export default (callback) => {
  // connect to a database if needed, then pass it to `callback`:

  callback(db);
};

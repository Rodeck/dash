import admin from 'firebase-admin';

const serviceAccount = process.env.SERVICE_ACCOUNT_CONFIG;

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(serviceAccount)),
});

export default admin;

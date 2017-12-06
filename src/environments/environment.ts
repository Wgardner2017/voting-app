// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA0K0DsSJuVZs1wqLLOkJm_RyH2iDT8QHk',
    authDomain: 'voting-app-warrengardner.firebaseapp.com',
    databaseURL: 'https://voting-app-warrengardner.firebaseio.com',
    projectId: 'voting-app-warrengardner',
    storageBucket: 'voting-app-warrengardner.appspot.com',
    messagingSenderId: '963198494990'
  }
};

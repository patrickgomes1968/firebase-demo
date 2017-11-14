// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCAwmXLFvPwI0sw9u3HHyDf_mVQf5v5k2I',
    authDomain: 'fir-demo-b144a.firebaseapp.com',
    databaseURL: 'https://fir-demo-b144a.firebaseio.com',
    projectId: 'fir-demo-b144a',
    storageBucket: 'fir-demo-b144a.appspot.com',
    messagingSenderId: '371001556362'
  }
};

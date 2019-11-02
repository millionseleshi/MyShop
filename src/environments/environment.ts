// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    baseLoginURL: 'http://localhost:8000/api/login',
    baseSignUpURL: 'http://localhost:8000/api/signup',
    baseLogoutURL: 'http://localhost:8000/api/logout',
    baseUSERURL: 'http://localhost:8000/api/user',
    baseProductURL: 'http://localhost:8000/api/product'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

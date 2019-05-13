// import axios from 'axios';
// // import cookies from 'js-cookie';
// // import store from 'store';
//
// /* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// // import { buildEnvironment } from 'Environment';
// // import { hasValidSession } from 'Utilities';
// /* eslint-enable */
//
// let session = {};
// let latestAuthTokens = {};
//
// class Request {
//   // getSession = () => (session);
//
//   // rememberSession = (newSession) => {
//   //   // save to local module memory
//   //   session = newSession;
//   //   // save longer term
//   //   cookies.set('session', newSession);
//   //   store.set('session', newSession);
//   // };
//
//   // forgetSession = () => {
//   //   cookies.set('session', {});
//   //   store.set('session', {});
//   //   session = {};
//   // };
//
//   post = ({ url, data, omitSession }) => this.request({
//     type: 'post',
//     url,
//     data,
//     omitSession
//   });
//
//   put = ({ url, data, omitSession }) => this.request({
//     type: 'put',
//     url,
//     data,
//     omitSession
//   });
//
//   get = ({
//     url, params, omitSession, omitHeaders
//   }) => this.request({
//     type: 'get',
//     url,
//     params,
//     omitSession,
//     omitHeaders
//   });
//
//   delete = ({ url, omitSession, omitHeaders }) => this.request({
//     type: 'delete',
//     url,
//     omitSession,
//     omitHeaders
//   });
//
//   request = ({
//     type,
//     url,
//     params,
//     data,
//     omitSession,
//     omitHeaders
//   }) => {
//     if (!hasValidSession(session) && !omitSession) {
//       return Promise.reject(new Error(`Can not make API request without a valid auth token and id - ${url}`));
//     }
//
//
//     // const originalHeaders = {
//     //   'X-User-Auth-Id': session && session.userAuthId,
//     //   'Auth-Token': session && session.authToken,
//     //   'Auth-Login-Token': session && session.authLoginToken
//     // };
//
//     // const authHeaders = {
//     //   ...latestAuthTokens,
//     //   ...originalHeaders
//     // };
//     //
//     // const headers = omitSession
//     //   ? buildEnvironment.commonHeaders : { ...buildEnvironment.commonHeaders, ...authHeaders };
//
//     // const postAndPutArgs = [url, data, { headers }];
//     const postAndPutArgs = [url, data, {}];
//     // const getArgs = [url, { params, headers }];
//     const getArgs = [url, { params }];
//     const args = type === 'post' || type === 'put' ? postAndPutArgs : getArgs;
//
//     if (omitHeaders) return axios[type](url);
//     return new Promise((resolve, reject) => {
//       axios[type].apply(null, args)
//         .then((response) => {
//           // save latest requests tokens
//           // TODO: will probably need to add last request assurances
//           // we need to make sure the order that requests come back in does not
//           // negatively the saving of the tokens, we should avoid old tokens
//           // latestAuthTokens = {
//           //   'Auth-Token': response.headers['auth-token'],
//           //   'Auth-Login-Token': response.headers['auth-login-token']
//           // };
//           resolve(response);
//         })
//         .catch(reject);
//     });
//   }
// }
//
// const requestInstance = new Request();
//
// export default requestInstance;

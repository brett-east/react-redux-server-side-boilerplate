// /* eslint import/prefer-default-export:0 */
// /* eslint camelcase:0 */
//
// // takes in app thrown error object or API error response
// // and converts it to a standad object that for UI display
// export const createAPIErrorObject = (err) => {
//   // no error object
//   if (!err) return { app: { message: 'NO ERROR OBJECT!' } };
//
//   // app JS error
//   if (!err.response) {
//     const message = err.message || err.description;
//     // eslint-disable-next-line no-console
//     console.error(message);
//
//     return { app: { message } };
//   }
//
//   // standard API supplied error respose object
//   if (err.response.data && err.response.data.error) {
//     const {
//       message, error_code, details, errors
//     } = err.response.data.error;
//
//     return {
//       network: {
//         message: err.message,
//         status: {
//           code: err.response.status,
//           text: err.response.statusText
//         }
//       },
//       api: {
//         topic: message,
//         code: error_code,
//         details,
//         errors
//       }
//     };
//   }
//
//   return { app: { message: 'INVALID ERROR OBJECT!' } };
// };

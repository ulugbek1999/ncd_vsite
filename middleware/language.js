/* This middleware checks whether requested url contains list of allowed languages */

// list of allowed languages
const languages = ['ru', 'en', 'kz', 'uz'];

// eslint-disable-next-line require-jsdoc
export default function({route, error}) {
  if (languages.indexOf(route.params.lang) == -1) {
    error({statusCode: 404, message: 'Page not found'});
  }
}

/* This middleware checks whether requested
url contains list of allowed languages */

// list of allowed languages
const languages = ["ru", "en", "kz", "uz"];

// eslint-disable-next-line require-jsdoc
export default function({ route, redirect }) {
  if (languages.indexOf(route.params.lang) == -1) {
    return redirect("/ru");
  }
}

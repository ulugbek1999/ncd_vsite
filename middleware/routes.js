// eslint-disable-next-line require-jsdoc
export default function({route, redirect}) {
  if (route.path == '/') {
    return redirect('/ru');
  }
};

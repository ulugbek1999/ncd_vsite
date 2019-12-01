export default function({ store, redirect, params }) {
  if (!store.state.credentials.isAuthenticated) {
    return redirect("/" + params.lang);
  }
}

export default class NotFound extends React.Component {
  render() {
    return (
      <article className="page not-found">
        <h1>404 Error</h1>

        <p>
          Page not found :(
        </p>

        <p>
          <a href="/">Sorry you have lost your way!</a>
        </p>
      </article>
    );
  }
}
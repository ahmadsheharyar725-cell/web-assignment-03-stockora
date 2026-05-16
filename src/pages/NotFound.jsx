export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">

      <h1 className="display-1 fw-bold text-danger">404</h1>

      <h3>Page Not Found</h3>

      <p className="text-muted">
        The page you are looking for doesn’t exist.
      </p>

      <a href="/" className="btn btn-primary mt-3">
        Go Home
      </a>

    </div>
  );
}
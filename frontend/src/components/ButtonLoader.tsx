import { Spinner } from "react-bootstrap";

export const ButtonLoader = () => (
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);

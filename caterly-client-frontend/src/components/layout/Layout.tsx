import { Container, Stack } from "react-bootstrap";
import Navigation from "./Navigation";
import { Navigate, useOutlet } from "react-router-dom";

export default function Layout() {
  const outlet = useOutlet();

  return (
    <Container fluid="lg">
      <Stack>
        <Navigation />
        {outlet ?? <Navigate to="dashboard" />}
      </Stack>
    </Container>
  );
}

import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <p>Error 404: Page not found</p>
      </Container>
    </MainTemplate>
  );
}

import {
  BrowserRouter,
  Routes as Content,
  Navigate as Redirect,
  Route as Channel,
} from "react-router-dom";
import { Error, Home, Checkout } from "../pages";
import { Container, Header, Footer } from "../shared/components";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Content>
          <Channel path="/" element={<Home />} />
          <Channel path="/checkout" element={<Checkout />} />
          <Channel path="/404-not-found" element={<Error />} />
          <Channel path="*" element={<Redirect to="/404-not-found" />} />
        </Content>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

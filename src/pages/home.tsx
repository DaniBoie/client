import React from "react";
import { Container } from 'reactstrap'
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import IPageProps from "./pages";

const HomePage: React.FunctionComponent<IPageProps> = props => {
  return (
    <Container fluid className="p-0">
      <Navigation />
      <Header 
        title="TS + React Blogsite!!!"
        headline="Check out what i've been able to do!"
      />
      <Container className="mt-5">
        Blog post here...
      </Container>
    </Container>
  )
}

export default HomePage
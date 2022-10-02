import React from 'react';
import { Container, Row, Col } from 'reactstrap'

export interface IHeaderProps {
  height?: string;
  image?: string;
  children?: any;
  title: string;
  headline: string;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { children, height, image, headline, title } = props;

  const headerStyle = {
    background: 'linear-gradient(rgba(36, 20, 38, 0.5), rgba(36, 39, 38, 0.5)), url(' + image + ') no-repeat center center',
    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: height
  };

  return (
    <>
    <header style={headerStyle}>
      <Container>
        <Row>
          <Col>
            <h1 className="display-4 text-white mt-5 mb-2">{title}</h1>
            <h3 className="mb-5 text-white">{headline}</h3>
            {children}
          </Col>
        </Row>
      </Container>
    </header>
    </>
  );
};

Header.defaultProps = {
    height: '100%',
    image: 'https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/home-bg.jpg'
};

export default Header;

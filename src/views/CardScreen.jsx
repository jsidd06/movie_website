import React from "react";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import data from "../Data/Movielist";
function CardScreen() {
  return (
    <Container>
      <Row>
        {data.map((movie) => {
          return (
            <Col md="4">
              <Card key={movie.id}>
                <CardImg
                  top
                  width="100%"
                  src={movie.img}
                  alt="Card image cap"
                />
                <CardTitle>{movie.title}</CardTitle>
                <CardSubtitle>{movie.year}</CardSubtitle>
                <CardText>{movie.description}</CardText>
                <Button>More</Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default CardScreen;

//  <Row>
//    <Col md="4">
//      <Card>
//        <CardImg
//          top
//          width="100%"
//          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
//          alt="Card image cap"
//        />
//        <CardBody>
//          <CardTitle>Card title</CardTitle>
//          <CardSubtitle>Card subtitle</CardSubtitle>
//          <CardText>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </CardText>
//          <Button>Button</Button>
//        </CardBody>
//      </Card>
//    </Col>
//    <Col md="4">
//      <Card>
//        <CardImg
//          top
//          width="100%"
//          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
//          alt="Card image cap"
//        />
//        <CardBody>
//          <CardTitle>Card title</CardTitle>
//          <CardSubtitle>Card subtitle</CardSubtitle>
//          <CardText>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </CardText>
//          <Button>Button</Button>
//        </CardBody>
//      </Card>
//    </Col>
//    <Col md="4">
//      <Card>
//        <CardImg
//          top
//          width="100%"
//          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
//          alt="Card image cap"
//        />
//        <CardBody>
//          <CardTitle>Card title</CardTitle>
//          <CardSubtitle>Card subtitle</CardSubtitle>
//          <CardText>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </CardText>
//          <Button>Button</Button>
//        </CardBody>
//      </Card>
//    </Col>
//    <Col md="4">
//      <Card>
//        <CardImg
//          top
//          width="100%"
//          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
//          alt="Card image cap"
//        />
//        <CardBody>
//          <CardTitle>Card title</CardTitle>
//          <CardSubtitle>Card subtitle</CardSubtitle>
//          <CardText>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </CardText>
//          <Button>Button</Button>
//        </CardBody>
//      </Card>
//    </Col>
//    <Col md="4">
//      <Card>
//        <CardImg
//          top
//          width="100%"
//          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
//          alt="Card image cap"
//        />
//        <CardBody>
//          <CardTitle>Card title</CardTitle>
//          <CardSubtitle>Card subtitle</CardSubtitle>
//          <CardText>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </CardText>
//          <Button>Button</Button>
//        </CardBody>
//      </Card>
//    </Col>
//  </Row>;

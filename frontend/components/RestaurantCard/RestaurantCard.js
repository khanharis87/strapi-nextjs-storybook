import {
  Button,
  Card,
  CardBody,
  CardColumns,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle
} from "reactstrap";
import Link from "next/link";
import React from "react";

const RestaurantCard = ({
  id,
  imageURL,
  description,
  name,
  width,
  storybook,
  color
}) => {
  return (
    <Card
      style={{ width: `${width}%`, margin: "10px" }}
      className="h-100"
      key={id}
    >
      <CardImg
        top={true}
        style={{ height: 250 }}
        src={storybook ? imageURL : `http://localhost:1337${imageURL}`}
      />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <div className="card-footer">
        <Link as={`/restaurants/${id}`} href={`/restaurants?id=${id}`}>
          <a className="btn btn-primary">View</a>
        </Link>
      </div>
    </Card>
  );
};

export default RestaurantCard;

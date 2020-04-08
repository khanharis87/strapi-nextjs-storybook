import React from "react";
import { RenderFunction, storiesOf } from "@storybook/react";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";
import {
  withKnobs,
  boolean,
  select,
  text,
  number
} from "@storybook/addon-knobs";
import "bootstrap/dist/css/bootstrap.min.css";

const knobs = {
  name: () => text("Title", "Las Tapas"),
  description: () =>
    text(
      "Description",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "
    ),
  width: () => text("Width %", "50")
};

storiesOf("Components|RestaurantCard", module)
  .addDecorator(withKnobs)
  .addDecorator(render => <div style={{ width: "500px" }}>{render()}</div>)
  .add("Defaut", () => (
    <RestaurantCard
      id="1"
      name={knobs.name()}
      description={knobs.description()}
      width={knobs.width()}
      storybook={true}
      imageURL="https://i.picsum.photos/id/163/2000/1333.jpg"
    ></RestaurantCard>
  ));

import React from "react";
import { RenderFunction, storiesOf } from "@storybook/react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
  Input
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  withKnobs,
  boolean,
  select,
  text,
  number
} from "@storybook/addon-knobs";
import "bootstrap/dist/css/bootstrap.min.css";

// const parameters = {
//   docs: {
//     page: README
//   }
// };
const colorVariantOptions = {
  none: "",
  primary: "primary",
  secondary: "secondary",
  danger: "danger",
  warning: "warning",
  info: "info"
};

const addonVariantOptions = ["append", "prepend"];

const sizeVariantOptions = {
  small: "sm",
  large: "lg",
  normal: ""
};

const knobs = {
  size: () => select("size", sizeVariantOptions),
  addonType: () => select("addonType", addonVariantOptions, "prepend"),
  size: () => select("size", sizeVariantOptions),
  disabled: () => boolean("disabled", true),
  outline: () => boolean("outline", false),
  block: () => boolean("block", false)
};

storiesOf("Components|InputGroup/Text", module)
  .addDecorator(withKnobs)
  .addDecorator(render => (
    <div style={{ width: "500px", margin: "100px auto" }}>{render()}</div>
  ))
  .add("Defaut", () => {
    return (
      <InputGroup size={knobs.size()}>
        <InputGroupAddon addonType={knobs.addonType()}>@</InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
    );
  });

storiesOf("Components|InputGroup/Checkbox", module)
  .addDecorator(withKnobs)
  .addDecorator(render => (
    <div style={{ width: "500px", margin: "100px auto" }}>{render()}</div>
  ))
  .add("Defaut", () => {
    return (
      <InputGroup size={knobs.size()}>
        <InputGroupAddon addonType={knobs.addonType()}>
          <InputGroupText>
            <Input
              addon
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Check it out" />
      </InputGroup>
    );
  });

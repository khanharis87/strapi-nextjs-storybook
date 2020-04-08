import React from "react";
import { RenderFunction, storiesOf } from "@storybook/react";
import { Button } from "reactstrap";
import README from "./README.md";

import {
  withKnobs,
  boolean,
  select,
  text,
  number
} from "@storybook/addon-knobs";
import "bootstrap/dist/css/bootstrap.min.css";

const colorVariantOptions = {
  none: "",
  primary: "primary",
  secondary: "secondary",
  danger: "danger",
  warning: "warning",
  info: "info"
};

const sizeVariantOptions = {
  small: "sm",
  large: "lg"
};

const knobs = {
  color: () => select("Color", colorVariantOptions),
  size: () => select("size", sizeVariantOptions),
  disabled: () => boolean("disabled", true),
  outline: () => boolean("outline", false),
  block: () => boolean("block", false)
};

storiesOf("Components|Button", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea",
      sidebar: README
    }
  })
  .addDecorator(withKnobs)
  .addDecorator(render => (
    <div style={{ width: "500px", margin: "100px auto" }}>{render()}</div>
  ))
  .add("Defaut", () => (
    <Button
      size={knobs.size()}
      color={knobs.color()}
      disabled={knobs.disabled()}
      outline={knobs.outline()}
      block={knobs.block()}
    >
      Button
    </Button>
  ));

/* eslint-env jest */
import React from "react";
import { mount, render } from "enzyme";
import serializer from 'jest-glamor-react'
import Button from "./glamorous-button";
expect.addSnapshotSerializer(serializer)

test("renders default", () => {
  const component = render(<Button>A Button</Button>);
  expect(component).toMatchSnapshot("default.button");
});

test('ignores custom no-html prop', () => {
  const component = mount(<Button primary>A button</Button>)
  const props = component.find('button').props()
  expect(props).not.toEqual(expect.objectContaining({
    primary: expect.anything()
  }))
})

test("renders with custom prop", () => {
  const component = render(
    <Button primary>
      A button
    </Button>
  );
  expect(component).toMatchSnapshot("custom.button");
});

test('ignores custom html prop', () => {
  const component = mount(<Button content width="100px">A button</Button>)
  const props = component.find('button').props()
  expect(props).not.toEqual(expect.objectContaining({
    content: expect.anything(),
    width: expect.anything()
  }))
})

test('renders with html prop', () => {
  const component = render(
    <Button content width="100px">A button</Button>
  )
  expect(component).toMatchSnapshot("html.button");
})
# Buttons⭐

Buttons allow users to take actions, and make choices, with a single tap. Supports all default HTML Button properties. See Material Design Button for UI/UX information.

## Props

| Prop     | Description                     | Type                                  | Default |
| -------- | ------------------------------- | ------------------------------------- | ------- |
| color    | Choose color type               | primary/secondary/warning/info/danger |         |
| outline  | Show outline and not fill color | boolean                               | false   |
| size     | Defines the size this component | small /normal / large                 |         |
| disabled | disabled all the children       | boolean                               | false   |
| block    | full width of container         | boolean                               | false   |

```jsx
 <Button
      size="large"
      color="primary"
      disabled={false}
      outline={false)}
      block={false}
    >

    </Button>
```

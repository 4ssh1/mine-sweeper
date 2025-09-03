import Button from "../components/Button";
import type { ButtonProps } from "../interfaces";

export const Playground = (args: ButtonProps) => <Button {...args} />;

// Playground.args = {
//   label: 'Click Me',
//   variant: 'primary',
//   disabled: false,
//   onClick: () => alert('Hello from Ladle!'),
// }


Playground.argTypes = {
  variant: {
    control: { type: 'radio' },
    options: ['primary', 'secondary'],
    description: 'Choose the button style'
  },
  disabled: {
    control: { type: 'boolean' },
    description: 'Disable the button'
  },
  onClick: {
    table: { disable: true }
  }
}

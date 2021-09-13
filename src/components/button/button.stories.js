import './button';
import { html } from 'lit-html';

export default {
  title: 'Components/Button',
  component: 'iver-button',
  argTypes: {
    
  },
  parameters: {
    zeplinLink: "https://app.zeplin.io/styleguide/611cf5e13ad24932dcc0d73a/components?coid=6139ce7556138e2bd23f4c72"
  },
  decorators: [(story) => html`${story()}`]
};

const Template = ({text}) => 
    html`
      <iver-button text=${text}></iver-button>
    `;


export const Default = Template.bind({});
Default.args = {text:'Button'};

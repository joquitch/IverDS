import './button';
import { html } from 'lit-html';

export default {
  title: 'Components/Button',
  component: 'iver-button',
  argTypes: {
    
  },
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/5f7dc838b9bccb2b9e68b87b/styleguide/components?coid=61431cd04518bf516720673f"
  },
  decorators: [(story) => html`${story()}`]
};

const Template = ({text}) => 
    html`
      <iver-button text=${text}></iver-button>
    `;


export const Default = Template.bind({});
Default.args = {text:'Button'};

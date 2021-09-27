import './icon-button';
import { html } from 'lit-html';

export default {
  title: 'Components/icon-button',
  component: 'iver-icon-button',
  argTypes: {
    variant: {
      options: ['default', 'primary', 'floating', 'floating-primary'],
      control: { type: 'radio' }
    } ,
    icon: {
      description: "Any icon from <a target='_blank' href='https://fonts.google.com/icons?selected=Material+Icons'>Material Icons</a>"
    } 
  },
  parameters: {
    zeplinLink:[
      {
        name: 'default/default',
        link: "https://app.zeplin.io/styleguide/611cf5e13ad24932dcc0d73a/components?coid=614c2d639e55e63e7ebc8aa6"
      },
      {
        name: 'default/hover',
        link: 'https://app.zeplin.io/styleguide/611cf5e13ad24932dcc0d73a/components?coid=614c2d65ea486a3b56d83c71'
      },
      {
        name: 'default/disabled',
        link: 'https://app.zeplin.io/styleguide/611cf5e13ad24932dcc0d73a/components?coid=614c2d651c618d3fada2d791'
      },
      {
        name: 'primary/default',
        link: 'https://app.zeplin.io/styleguide/611cf5e13ad24932dcc0d73a/components?coid=614c2d65ffb055b782c9e1fa'
      },
      {
        name: 'primary/hover',
        link: 'https://app.zeplin.io/styleguide/611cf5e13ad24932dcc0d73a/components?coid=614c2d65d099733bd54de5dc'
      },
      {
        name: 'primary/disabled',
        link: 'https://app.zeplin.io/styleguide/611cf5e13ad24932dcc0d73a/components?coid=614c2d641a8f8b05a339e0f9'
      },
      {
        name: 'floating/default',
        link: 'https://app.zeplin.io/styleguide/611cf5e13ad24932dcc0d73a/components?coid=614c2d64ae685bbf111ca4b5'
      },
      {
        name: 'floating/hover',
        link: 'https://app.zeplin.io/styleguide/611cf5e13ad24932dcc0d73a/components?coid=614c2d641d87d00439500c1b'
      },
      {
        name: 'floating-primary/default',
        link: 'https://app.zeplin.io/styleguide/611cf5e13ad24932dcc0d73a/components?coid=614c2d6421d43b3b6bb1aa69'
      },
      {
        name: 'floating-primary/hover',
        link: 'https://app.zeplin.io/styleguide/611cf5e13ad24932dcc0d73a/components?coid=614c2d6413b531b393745a4f'
      }
    ] 
  },
  decorators: [(story) => html`${story()}`]
};

const Template = ({icon, variant}) => 
    html`
      <iver-icon-button .variant=${variant}>${icon}</iver-icon-button>
    `;


export const Default = Template.bind({});
Default.args = {icon:'image', variant:'default'};

export const Primary = Template.bind({});
Primary.args = {icon:'image', variant:'primary'};

export const Floating = Template.bind({});
Floating.args = {icon:'image', variant:'floating'};

export const FloatingPrimary = Template.bind({});
FloatingPrimary.args = {icon:'image', variant:'floating-primary'};

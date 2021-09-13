import './tooltip';
import { html } from 'lit-html';

export default {
  title: 'Components/Tooltip',
  component: 'iver-tooltip',
  argTypes: {
    direction: {
      options: ['north', 'east', 'south', 'west'],
      control: { type: 'radio' }
    }
  },
  parameters: {
    zeplinLink: "https://app.zeplin.io/styleguide/611cf5e13ad24932dcc0d73a/components?coid=611d0363260c7b1848147865"
  },
  decorators: [(story) => html`${story()}`]
};

const Template = ({text, target, direction}) => 
    html`
      <div class="target" style="position: fixed; top: 200px; left: 200px">Hover me!</div>
      <iver-tooltip text=${text} target=${target} direction=${direction}></iver-tooltip>
    `;


export const SingleLine = Template.bind({});
SingleLine.args = {text:'Lorem ipsum', target: '.target'};

export const MultiLine = Template.bind({});
MultiLine.args = {text: 'dasa da da sdsa das dadasdada sdsdfdsdas da da', target: '.target'};

export const DirectionNorth = Template.bind({});
DirectionNorth.args = {text: 'This is a tooltip', target: '.target', direction: 'north'};

export const DirectionEast = Template.bind({});
DirectionEast.args = {text: 'This is a tooltip', target: '.target', direction: 'east'};

export const DirectionSouth = Template.bind({});
DirectionSouth.args = {text: 'This is a tooltip', target: '.target', direction: 'south'};

export const DirectionWest = Template.bind({});
DirectionWest.args = {text: 'This is a tooltip', target: '.target', direction: 'west'};

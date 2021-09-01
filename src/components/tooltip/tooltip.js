import {html, css, LitElement} from 'lit';
import {baseStyle} from '../../baseStyle'

/**
 *  Tooltip is used to show messages to users when they hover over buttons and other elements.
 */

export class Tooltip extends LitElement {
  static get styles() {
    return [
      baseStyle,
      css`
        :host {          
            background: var(--iver-tooltip--background , var(--color-content-background-inverted));
            color: var(--iver-tooltip--color, var(--color-shade-4-inverted));
            padding: var(--iver-tooltip--padding, var(--spacing-4));
            border-radius: var(--iver-tooltip--border-radius, var(--border-radius-small));
            box-shadow: var(--iver-tooltip--box-shadow, var(--box-shadow-1));
            opacity: 0;
            visibility: hidden;
            transition: 0.5s opacity;
            position: fixed;
            max-width: var(--spacing-56);
        }

        :host(.visible){
          visibility: visible;
          opacity: 1;
        }

        .text{
          color: var(--iver-tooltip--color, var(--color-shade-4-inverted));
        }
        
        `];
  }

  static get properties() {
    return {
      text: {type: String},
      target: {type: String},
      direction: {type: String}
    }
  }

  constructor() {
    super();
    this.text = '';
    this.direction = 'east'
  }

  render() {
    return html`<span class="text subtitle">${this.text}</span>`;
  }

  connectedCallback() {
    super.connectedCallback();
    this._target = document.querySelector(this.target);
    if(this._target){
      this._target.addEventListener('mouseover', this._handleMouseoverOnTarget.bind(this));
      this._target.addEventListener('mouseout', this._handleMouseoutOnTarget.bind(this));
    }    
  }

  disconnectedCallback() { 
    if(this._target){
      this._target.removeEventListener('mouseover', this._handleMouseoverOnTarget.bind(this));
    }
    super.disconnectedCallback();
  }

  _handleMouseoverOnTarget() {
    const spacing = 8;
    let targetRect = this._target.getBoundingClientRect();
    let tooltipRect = this.getBoundingClientRect();
    
    let top, left;
    switch(this.direction) {
      case 'north':
        top = targetRect.top - tooltipRect.height - spacing;
        left = targetRect.left + targetRect.width/2 - tooltipRect.width/2;
        break;
      case 'east':
        top = targetRect.top + targetRect.height/2 - tooltipRect.height/2;
        left = targetRect.left + targetRect.width + spacing;
        break;
      case 'south':
        top = targetRect.top + targetRect.height + spacing;
        left = targetRect.left + targetRect.width/2 - tooltipRect.width/2;
        break;
      case 'west':
        top = targetRect.top + targetRect.height/2 - tooltipRect.height/2;
        left = targetRect.left - tooltipRect.width - spacing;
        break;
      default:
        top = targetRect.top + targetRect.height/2 - tooltipRect.height/2;
        left = targetRect.left + targetRect.width + spacing;
    }

    this.style.top = `${top}px`;
    this.style.left = `${left}px`;
    this.classList.add('visible')
  }

  _handleMouseoutOnTarget() {
    this.classList.remove('visible')
  }
}

import {css} from 'lit';



export const baseStyle = css`

   :host {
      --color-content-background-inverted: rgba(50, 50, 50, 1);
      --color-page-background: #f0f0f0;
      --color-primary: #fcde06;
      --color-secondary: #ffa81c;
      --color-warning: #ff6e0d;
      --color-success: #149c61;
      --color-alert: #f30;
      --color-shade-4-inverted: rgba(255, 255, 255, 0.9);
      --color-shade-3-inverted: rgba(255, 255, 255, 0.49);
      --color-shade-2-inverted: rgba(255, 255, 255, 0.24);
      --color-shade-1-inverted: rgba(255, 255, 255, 0.07);
      --color-information: #338bc7;
      --color-shade-1: rgba(0, 0, 0, 0.08);
      --color-shade-2: rgba(0, 0, 0, 0.25);
      --color-shade-3: rgba(0, 0, 0, 0.5);
      --color-shade-4: rgba(0, 0, 0, 0.9);
      --color-content-background: #fff;
      --transparent: rgba(255, 255, 255, 0);
      --color-primary-shade: rgba(252, 222, 6, 0.1);
      --color-alert-shade: rgba(255, 51, 0, 0.1);

      --spacing-1: 4px;
      --spacing-2: 8px;
      --spacing-3: 12px;
      --spacing-4: 16px;
      --spacing-5: 20px;
      --spacing-6: 24px;
      --spacing-7: 28px;
      --spacing-8: 32px;
      --spacing-9: 36px;
      --spacing-10: 40px;
      --spacing-11: 44px;
      --spacing-12: 48px;
      --spacing-13: 52px;
      --spacing-14: 56px;
      --spacing-15: 60px;
      --spacing-16: 64px;
      --spacing-17: 68px;
      --spacing-18: 72px;
      --spacing-19: 76px;
      --spacing-20: 80px;
      --spacing-21: 84px;
      --spacing-22: 88px;
      --spacing-23: 92px;
      --spacing-24: 96px;
      --spacing-25: 100px;
      --spacing-26: 104px;
      --spacing-27: 108px;
      --spacing-28: 112px;
      --spacing-29: 116px;
      --spacing-30: 120px;
      --spacing-31: 124px;
      --spacing-32: 128px;
      --spacing-33: 132px;
      --spacing-34: 136px;
      --spacing-35: 140px;
      --spacing-36: 144px;
      --spacing-37: 148px;
      --spacing-38: 152px;
      --spacing-39: 156px;
      --spacing-40: 160px;
      --spacing-41: 164px;
      --spacing-42: 168px;
      --spacing-43: 172px;
      --spacing-44: 176px;
      --spacing-45: 180px;
      --spacing-46: 184px;
      --spacing-47: 188px;
      --spacing-48: 192px;
      --spacing-49: 196px;
      --spacing-50: 200px;
      --spacing-51: 204px;
      --spacing-52: 208px;
      --spacing-53: 212px;
      --spacing-54: 216px;
      --spacing-55: 220px;
      --spacing-56: 224px;
      
      --border-radius-small: 4px;
      --border-radius-max: 1024px;

      --box-shadow-1: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      --box-shadow-2: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);


   }
   
   @font-face {
      font-family: Graphik;
      src: local(Graphik-Regular),
         url(/path/to/Graphik-Regular.woff2) format("woff2"),
         url(/path/to/Graphik-Regular.woff) format("woff"),
         url(/path/to/Graphik-Regular.ttf) format("truetype");
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
   }

   @font-face {
      font-family: Graphik;
      src: local(Graphik-Medium),
         url(/path/to/Graphik-Medium.woff2) format("woff2"),
         url(/path/to/Graphik-Medium.woff) format("woff"),
         url(/path/to/Graphik-Medium.ttf) format("truetype");
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
   }

   @font-face {
      font-family: MaterialIconsOutlined;
      src: local(MaterialIconsOutlined-Regular),
         url(/path/to/MaterialIconsOutlined-Regular.woff2) format("woff2"),
         url(/path/to/MaterialIconsOutlined-Regular.woff) format("woff"),
         url(/path/to/MaterialIconsOutlined-Regular.ttf) format("truetype");
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
   }

   .icon {
      font-family: MaterialIconsOutlined;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      color: var(--color-shade-4);
   }

   .typography-title {
      font-family: Graphik;
      font-size: 20px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: var(--color-shade-4);
   }

   .subtitle {
      font-family: Graphik;
      font-size: 14px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: var(--color-shade-4);
   }

   .body {
      font-family: Graphik;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.29;
      letter-spacing: normal;
      color: var(--color-shade-4);
   }

 `;

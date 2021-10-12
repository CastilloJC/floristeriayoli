import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 785px) {
      ${props}
    }
  `;
};

// export const mobileSlider = (props) => {
//   return css`
//     @media only screen and (min-width: 540px), screen and (max-width: 784px) {
//       ${props}
//     }
//   `;
// };


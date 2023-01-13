import { css } from '@linaria/core'
import { reset } from './reset'

export const globals = css`
  :global() {
    ${reset};

    * {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    
    body {
      background: #f0f5f5;
      height: 100vh;
      width: 100vw;
      overflow-x: hidden; 
    }

    .root {
      height: 100%;
      width: 100%;
      background: 
      url("../images/Ellipse1.png") top left/auto auto round, 
      url("../images/Ellipse2.png") top right/auto auto round, 
      url("../images/Ellipse3.png") bottom left/auto auto round,
      url("../images/Ellipse4.png") bottom right/auto auto round;
      animation: chaos 40s linear infinite;
      background-size:80%;
      background-repeat: no-repeat;
    }

    @media (max-width: 769px) {
      .root {
        background-size:120%;
      }
    }
    @media (max-width: 481px) {
      .root {
        background-size:150%;
      }
    }

    @keyframes chaos {
      0% {
        background-position: -50% -50%, 100% -50%, -50% 150%, 100% 150%;
      }
      10% {
        background-position: -46% -24%, 54% 23%, 93% 140%, 87% 69%;
      }
      20% {
        background-position: -94% -12%, -11% 100%, -50% 20%, 120% 40%;
      }
      30% {
        background-position: -36% -89%, 43% 64%, 52% 12%, 120% 140%;
      }
      40% {
        background-position: -14% 49%, -34% 25%, -10% -120%, 30% 140%;
      }
      50% {
        background-position: 85% 120%, 120% 76%, 70% -120%, -100% 10%;
      }
      60% {
        background-position: 0% 85%, 87% -54%, -32% 32%, 23% -49%;
      }
      70% {
        background-position: 53% 1%, 12% 34%, 50% 50%, 100% 92%;
      }
      80% {
        background-position: 39% 15%, 95% 54%, -100% 30%, -100% 39%;
      }
      90% {
        background-position: 84% -15%, -23% 100%, 2% 42%, -40% 120%;
      }
      100% {
        background-position: -50% -50%, 100% -50%, -50% 150%, 100% 150%;
      }
    }

    @font-face {
      font-family: "Gilroy";
      src: url("../fonts/Gilroy-Regular.ttf") format("truetype");
      font-style: normal;
      font-weight: 400;
    }
    @font-face {
      font-family: "Gilroy";
      src: url("../fonts/Gilroy-Medium.ttf") format("truetype");
      font-style: normal;
      font-weight: 500;
    }
    @font-face {
      font-family: "Gilroy";
      src: url("../fonts/Gilroy-Semibold.ttf") format("truetype");
      font-style: normal;
      font-weight: 600;
    }
  }
`

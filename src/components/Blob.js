/* 
Original code by Matti Astorino, modified by me to work in React

Copyright (c) 2020 by Mattia Astorino (https://codepen.io/equinusocio/pen/jezBdZ)

Permission is hereby granted, free of charge, to any person obtaining a copy of this 
software and associated documentation files (the "Software"), to deal in the Software 
without restriction, including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
permit persons to whom the Software is furnished to do so, subject to the following 
conditions:

The above copyright notice and this permission notice shall be included in all copies 
or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from "react"
import styled, { keyframes } from "styled-components"
import rainbow from "../images/rainbow-square.jpg"

const styles = {
  blob: "#ff5978",
  shades:
    "inset 3rem 0 6rem #ae5ae0, inset -1rem 0 6rem #ffcb00, inset -4rem 1rem 10rem #ff5500",
}

const transform = keyframes`
    0%,
  100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; } 
   14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; } 
   28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; } 
   42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; } 
   56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; } 
   70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; } 
   84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; } 

`

const movement = keyframes`
0%,
  100% { transform: none; }
   50% { transform: translateY(20%) rotateY(10deg); }
`

const Morph = styled.div`

position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 1; 

&::before {
    content: '';
    display: block;
  min-height: 200px;
  min-width: 200px;
  width: 50vh;
  height: 50vh;
  background-color: ${styles.blob};
  box-shadow: ${styles.shades};
  background-size: cover;

  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  perspective: 1000px;
  animation: ${transform} 50s ease-in-out infinite both alternate,
    ${movement} 40s ease-in-out infinite both;
}
  
`

export default function Blob() {
  return <Morph />
}

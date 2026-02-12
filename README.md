# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
 - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](https://github.com/psdesignro/testimonial-grid/blob/main/design/Testimonial.jpg)


### Links

- Solution URL: [Solution URL](https://github.com/psdesignro/testimonial-grid)
- Live Site URL: [Live site URL](https://psdesignro.github.io/testimonial-grid/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS
- Flexbox
- CSS Grid
- Mobile-first workflow




### What I learned

I haven't used CSS grid for a while, but I'm glad I managed to do it correct from start. Of course, I have chosen the most basic approach, but I will refine my CSS grid skills for the next projects. 
I also start to understand better the use of SASS and how it can keep my code clean.

I learnt how to use @mixin for media queries:

```css
@mixin responsive-960 {
  @media (min-width: 960px) {
    @content;
  }
}

.container{
  display:grid;
  grid-template-columns: 1fr;
  gap:24px;
  

  @include responsive-960 {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}

```



### Continued development

I will practice more the CSS Grid to create fully responsive designs and also SASS, to get an optimized version of CSS.




## Author

- Website - [Eugen](https://github.com/psdesignro)
- Frontend Mentor - [@psdesignro](https://www.frontendmentor.io/profile/psdesignro)




---
layout: post
title: (My) Code on Mars
<!--permalink: -->
<!-- tags: astronomy, code,  -->
category: astronomy
date: 2021-06-07 21:41:01 -0400
---

Recently I [found out][gh-badge] that I contributed to code that was a part of [NASA’s Ingenuity Helicopter][ingenuity], the first object with powered flight on Mars.

insert screen shot.

First off, my contribution was minor. It was [14 lines][pr] that documented a limitation of a particular numerical method. Since these are lines for developers, I don't even know if they were sent to Mars. In addition, I don't even know if JPL used this [specific method][quad]! 

That being stated, this whole thing is cool and shows how tight knit and interdependent science is. I was using a function. An edge case was not documented, so I wrote a few sentences describing the behavior. Since this package is so popular, that people flying a drone on Mars also used this software. And, *voilà*, my work is no "on Mars!"


[ingenuity]: https://mars.nasa.gov/technology/helicopter/
[gh-badge]:https://github.com/readme/nasa-ingenuity-helicopter
[pr]: https://github.com/scipy/scipy/pull/8011
[quad]: https://docs.scipy.org/doc/scipy-1.6.3/reference/generated/scipy.integrate.quad.html#scipy.integrate.quad

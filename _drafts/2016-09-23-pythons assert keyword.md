---
layout: post
title: Python's assert keyword
<!--permalink: -->
tags: python
category: 

date: 2017-02-27 15:10:48 -0400

summary: 
---

I just learned about python's [`assert`](assert) keyword. This keyword needs to be used in every scientific code base. The `assert` command is essentially a short hand of:

[assert]: https://docs.python.org/3.6/reference/simple_stmts.html#the-assert-statement

```python
if not expression: 
    raise AssertionError
```

Science is all about slowly building experimental knowledge on the past through new tests and ideas. As a result, our code should test itself against what we already know[^1]. When solving problems as a student, teachers always instruct you to check how realistic your answer is when you are done. Like you would never get a plane flying at [11 km/s][escape velocity], nor would a rocket ship go faster then [3 x 10<sup>8</sup> km/s][light]. To do well in physics, you just memorize basic sanity checks like these. Sanity checks should be apart of your code as well!

[escape velocity]: http://www.wolframalpha.com/input/?i=escape+velocity+of+the+earth
[light]: http://www.wolframalpha.com/input/?i=speed+of+light

I have spent a lot of time checking my code, using extensive printing statements[^2], verifying numbers. Some of my late stage debugging would not have been needed if I had known about and used `assert` statements. 

A practical example is testing that you only changed what you wanted to. I needed to change the pixel scale on an image but keep the built in coordinate system correct. Even thought I went form roughly a 2120x2072 pixel image to a 265x259 pixel image, it still needed to coved the same area on the sky. I needed to `assert` that my [World Coordinate System (WCS)](wcs) was the same in both images in each corner as well as the center. Here is a section of code showing what I did.

```python
import numpy as np
import astropy.WCS as w

#get wcs for original data
wOrig = wcs.WCS(header1)
#define pixels to test, not perfect corners, but is divisible by 8!
pixOrig = np.array([[0, 0], [0, 2072], [1060, 1036], [2120, 0], 
                    [2120, 2072]], np.float_)
pix = pixOrig/8
#get world values
worldOrig = wOrig.wcs_pix2world(pixOrig, 1)
world = w.wcs_pix2world(pix, 1)
#throw error if ra or dec of any is off by more then 1e-7, note 1arcsec==2.7e-4deg
assert np.max(np.abs(worldOrig - world)) < 1e-7
```

Note that `header1` is a pre defined/imported `astropy.io.fits.header` object & `pixOrig` . . . , and `w`. In 


[wcs]:

[^1]: Lets not get started on how bad science is on building or using software tests.
[^2]: Though I am starting to experiment with [logging]().

---
layout: post
title: TypeError from numpy, pandas, and linear algebra
tag:
    - python
    - numpy
    - pandas
    - seaborn
    - TypeError
category: code

date: 2018-01-03 10:36:48 -0500
---

I was working with some data. I put it into a [`pandas`](https://pandas.pydata.org) [`DataFrame`](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.html#pandas.DataFrame) like many data scientists. I built the `DataFrame` up row by row because sometimes data is not packaged nicely.

I then tried to plot the resulting data with [`seaborn`’s](https://seaborn.pydata.org) [`regplot`](https://seaborn.pydata.org/generated/seaborn.regplot.html#seaborn.regplot)[^1] and got an nasty `TypeError`:
```python
TypeError: No loop matching the specified signature and casting was found for ufunc svd_n_s
```
In the trace back this is coming from some deep level in `numpy`’s linear algebra modules. I tried both the default and `robust=True` so the issue was not the specific `numpy` routine since `statsmodels` also had an issue.

Finally after many attempts at searching for a solution I found [this](https://stackoverflow.com/questions/47838306/getting-no-loop-matching-the-specified-signature-and-casting-error) stackoverflow question with a helpful comment[^2].  It looks like `numpy`’s linear algebra fails like this if they type is not a float and it prefers a float64.

I knew my DataFrame only contained numbers but I looked at it more closely. I initialed it like this:
```python
>>> pd.DataFrame(columns=['hr', 'age'])
```
And after it was filled I looked at one column and noticed that it defaulted to an generic object type. 
```python
>>> plot['age']
0      11.2113
1      4.35541
...
119    3.59919
Name: age, Length: 120, dtype: object
```

The issue was found!

All I needed to do was change my initiation to  
``` python
>>> pd.DataFrame(columns=['hr', 'age'], dtype=np.float64)
```
and everything worked as expected.


[^1]:   Note that other plots did work, just nothing with a fit.

[^2]:   I am not sure why this is not an answer. But whatever.
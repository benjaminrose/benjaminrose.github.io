---
Title: Expand first column values
tag: HowTo
---

Say you want to subtract the first column from every column of an array using [python] and [numpy]. Mathematically it would be:

```python
[[1, 2, 3],    -     [[1, 1, 1],
 [4, 5, 6]]           [4, 4, 4]]
```
This would be useful if you were working with something like [astronomical colors][colors] or .

We could just loop through and build up the new array, but that does not seem the most Python. Its simple enough to say (even generalized), expand the first column of a given axis to fill that whole axis, that there should be a simple python method or two. 

Here is how I was able to accomplish this task with [numpy's][numpy] ['tile'][tile] method. 

```python
>>> a = np.array([[1, 2, 3], [4, 5, 6]])
>>> a
array([[1, 2, 3],
          [4, 5, 6]])
>>> c = a[:,0].shape
>>> c[-1] = 1
>>>  # b = np.tile(np.array([a[:,0]]).T, 3) s 
>>>  b = np.tile(a[:,0].reshape(c), 3)
>>>  b
array([[1, 1, 1],
          [4, 4, 4]])
>>> a - b 
array([[0, 1, 2],
          [0, 1, 2]])
```

This creation of b is done in three major parts
Select the first column `a[:,0]`, but this removes a dimension! Add back that dimension and correctly format it (as a vertical array in this case), `np.array(x).T`[^footnote]. Now extend this the needed 3 columns, `np.title(x, 3)`.

Other  similar but which I found successful alternative methods are [`np.repeat`][repeat] or  [`np.take(b, [1,-1+1], mode='wrap')`][take] but 

Also a failed attempt of part two: 


[^footnote]: This seams to not work correctly in higher dimensions. It will inverse the dimensions. So if you had `a.shape` = `(6, 9, 8, 7, 5)`, then the result of this would produce `b.shape` = `(7, 8, 9, 6, 5)`.

[python]: 
[numpy]: 
[colors]:
[tile]: 
[repeat] :
[takte]:
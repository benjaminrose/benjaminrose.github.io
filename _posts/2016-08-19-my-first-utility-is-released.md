---
layout: post
title: csv2deluxetable 
<!--permalink: -->
tags: python latex aastex deluxtable csv
category: 

date: 2016-08-19 11:20:00 -0400

summary: I have written and released my first utility! It takes a <code class="highlighter-rouge">csv</code> file and converts it to a <code class="highlighter-rouge">deluxetable</code> used by AAS.
---

I have written and released my first [utility][code]! It takes a `csv` file and converts it to a `deluxetable` used by AAS. This is only useful for astronomers, and mostly American astronomers, but each paper published in the AAS suite of journals could use this utility. It's simple enough that I thought there would be a dozen online, but I could not find any. So I took a day and wrote it. It written in Python 3 and uses [numpy] and [astropy]. These dependencies should be common place among the target audience. It is available on over on [github][code] and I'll go through it here as well.

[code]: https://github.com/benjaminrose/csv2deluxetable
[numpy]: http://www.numpy.org
[astropy]: http://www.astropy.org

The script parses a csv file of the form

``` 
# x, y, z
# degree, minute, second
1, 2, 3
4, 5, 6
7, 8, 9
10, 11, 12
# This is the title of the csv file
```

The data rows (lines 3-6 above) are straight forward enough. All non-data rows start with `#`. Row one is the data column name. Row two is the units. Both of these will end up in the deluxetable `\tablehead{}` tag. The final row is the table title or caption, and will end up in the deluxetable `\tablecaption{}` tag.

Once you make the script executable[^1], you can use the script by either run it with `csv2deluxetable data.csv` to send the resulting table to standard out, or with `csv2deluxetable data.csv -o data.tex` to specify the output file. This repository comes with several `csv` file that used as working examples.

[^1]: details in the [readme][code] file

I am more then happy to take suggestions or contributions. Please report [issues], [fork the repo], or submit a [pull request]. I am sure this can be better, and I am happy to consider input. 

[issues]: https://github.com/benjaminrose/csv2deluxetable/issues
[fork the repo]: https://github.com/benjaminrose/csv2deluxetable#fork-destination-box
[pull request]: https://github.com/benjaminrose/csv2deluxetable/pulls
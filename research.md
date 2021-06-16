---
layout: page
title: Research
---

<!-- [ [About my Research](#about) · [Research Projects](#projects) · [CV](#cv) · [Portfolio](#portfolio) ] -->

<!-- [[About my Research](#about)] · [[Research Projects](#projects)] · [[CV](#cv)] · [[Portfolio](#portfolio)] -->

<!-- * [About my Research](#about)
* [Research Projects](#projects)
* [CV](#cv)
* [Portfolio](#portfolio) -->

<div style="text-align: center; font-size: 18px;">
<a href="#about">About my Research</a> · <a href="#projects">Research Projects</a> · <a href="#cv">CV</a> · <a href="#portfoliot">Portfolio</a>
</div>

<!-- <div style="border:2px; border-style:solid; border-color:#000000; padding: 3px; display: inline-block; border-radius: 10px;">example</div> -->
<!-- <div style="border:2px; border-style:solid; border-color:#000000; padding: 3px; display: inline-block; border-radius: 10px;"><a href="#about">About my Research</a></div> 
<div style="border:2px; border-style:solid; border-color:#000000; padding: 3px; display: inline-block; border-radius: 10px;"><a href="#projects">Research Projects</a></div> 
<div style="border:2px; border-style:solid; border-color:#000000; padding: 3px; display: inline-block; border-radius: 10px;"><a href="#cv">CV</a></div> 
<div style="border:2px; border-style:solid; border-color:#000000; padding: 3px; display: inline-block; border-radius: 10px;"><a href="#portfolio">Portfolio</a></div> -->


<a id="about"></a>
## About my Research 

I received my Ph.D. in Astrophysics at the [University of Notre Dame][nd-phys] under my advisor [Peter Garnavich][peter]. Currently, I work at [Duke University][duke] as a research scientist. Previously I worked at [Space Telescope Science Institute][stsci].

[nd-phys]: https://www.physics.nd.edu
[duke]: https://phy.duke.edu
[stsci]: https://www.stsci.edu
[peter]: https://physics.nd.edu/people/faculty/peter-garnavich/


<a id="projects"></a>
## Research Projects

My research improves our understanding of a specific type of exploding star, [Type Ia supernovae][sn] (SNe Ia). We use SNe Ia to understand the [dynamics and size of the universe][obs-cosmology]. SNe Ia allow us to measure distances across the Universe, a difficult task when all you have are pictures of the night sky.
I bring my knowledge of statistics and cross-discipline interests to each project.
Currently, I investigate the level of accuracy and certainty in our present methods.

[sn]: https://en.wikipedia.org/wiki/Type_Ia_supernova
[obs-cosmology]: https://en.wikipedia.org/wiki/Observational_cosmology

Below is a description of several research questions I have investigated.

<div class="flex-container">
{% for project in site.projects %}
  <div class="column">
  <h3> {{ project.name }} </h3>
  <p>{{ project.content | markdownify }}</p>
  </div>
{% endfor %}
</div>


<a id="cv"></a>
## Curriculum Vitae

Download a copy of my <a href="https://github.com/benjaminrose/CV/raw/master-pdf/Rose_CV.pdf">CV</a> or read it below.

<!-- one of these answers, by Lukasz Korzybiski, shows how to use docs.google's embed for any pdf. http://stackoverflow.com/questions/291813/recommended-way-to-embed-pdf-in-html#291823 -->
<div class="auto-resizable-iframe">
    <div>
            <iframe src="https://docs.google.com/gview?url=https://github.com/benjaminrose/CV/raw/master-pdf/Rose_CV.pdf&amp;embedded=true" width="100%" height="1000"></iframe>
    </div>
</div>
<p></p>


<a id="portfolio"></a>
## Presentations & Scientific Posters

<!-- My projects of interest are listed above with a few example papers.  -->

The [astrophysics data system][ads] has a [full list] of every [refereed] paper (as well as other types of [articles]) I contributed to. 

[ads]: https://ui.adsabs.harvard.edu
[full list]: https://ui.adsabs.harvard.edu/search/p_=0&q=orcid%3A0000-0002-1873-8973&sort=date%20desc%2C%20bibcode%20desc
[refereed]: https://ui.adsabs.harvard.edu/search/filter_property_fq_property=AND&filter_property_fq_property=property%3A%22refereed%22&fq=%7B!type%3Daqp%20v%3D%24fq_property%7D&fq_property=(property%3A%22refereed%22)&q=orcid%3A0000-0002-1873-8973&sort=date%20desc%2C%20bibcode%20desc&p_=0
[articles]: https://ui.adsabs.harvard.edu/search/filter_property_fq_property=AND&filter_property_fq_property=property%3A%22notrefereed%22&fq=%7B!type%3Daqp%20v%3D%24fq_property%7D&fq_property=(property%3A%22notrefereed%22)&q=orcid%3A0000-0002-1873-8973&sort=date%20desc%2C%20bibcode%20desc&p_=0


Here is a reverse chronological list of non-papers: posters, talks, and other unpublished content.

<ul>
{% for pres in site.presentations reversed %}
<!-- Just link to the file rather than visually naming it. -->
  <!-- <li> {{ pres.title }} ({{ pres.date_ }}) - {{ pres.file }}</li> -->
  <li> {{ pres.title }} ({{ pres.date_ }})</li>
    <ul>
      <li>{{ pres.content | markdownify }}</li>
      </ul>
{% endfor %}
</ul> 
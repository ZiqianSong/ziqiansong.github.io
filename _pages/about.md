---
layout: academic-home
title: About
permalink: /
---

I am a **PhD Candidate** in the **Department of Economics at Sciences Po**. My research focuses on technical change, macro-development, spatial economics, and political economy.

<section id="interests" aria-labelledby="interests-heading">
  <h2 id="interests-heading">Interests</h2>
  <ul>
    <li>Technical Change</li>
    <li>Macro-development</li>
    <li>Spatial Economics</li>
    <li>Political Economy</li>
  </ul>
</section>

<section id="education" aria-labelledby="education-heading">
  <h2 id="education-heading">Education</h2>
  <ul class="academic-education">
    {% for entry in site.data.cv.cv.sections.Education %}
      <li>
        <strong>{{ entry.degree }}</strong>, {{ entry.date }}<br>
        {{ entry.institution }}<br>
        <span class="academic-location">{{ entry.location }}</span>
      </li>
    {% endfor %}
  </ul>
</section>

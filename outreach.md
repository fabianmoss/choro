---
layout: page
title: Outreach
permalink: /outreach/
menu_order: 4
---

## Publications

<div class="publication-list" markdown="1">
{% assign current_year = "" %}
{% for pub in site.data.publications %}
{% if pub.year != current_year %}
{% assign current_year = pub.year %}
<div class="publication-item year-start">
<span class="pub-year">{{ pub.year }}</span>
<span class="pub-citation">{{ pub.authors }} ({{ pub.year }}). <em class="pub-title">{{ pub.title }}</em>.{% if pub.editor %} In {{ pub.editor }} (Ed.), <em class="pub-journal">{{ pub.journal }}</em>{% if pub.volume %}, <em class="pub-volume">{{ pub.volume }}</em>{% endif %}{% if pub.number %}({{ pub.number }}){% endif %}{% if pub.pages %}, pp. {{ pub.pages }}{% endif %}{% if pub.publisher %}. {{ pub.publisher }}.{% endif %}{% else %} <em class="pub-journal">{{ pub.journal }}</em>{% if pub.volume %}, <em class="pub-volume">{{ pub.volume }}</em>{% endif %}{% if pub.number %}({{ pub.number }}){% endif %}{% if pub.pages %}, {{ pub.pages }}{% endif %}{% if pub.publisher %}. {{ pub.publisher }}{% endif %}{% unless pub.publisher or pub.link %}.{% endunless %}{% if pub.link %}. <a href="{{ pub.link }}" target="_blank">{{ pub.link }}</a>{% endif %}{% endif %}</span>
</div>
{% else %}
<div class="publication-item">
<span class="pub-year"></span>
<span class="pub-citation">{{ pub.authors }} ({{ pub.year }}). <em class="pub-title">{{ pub.title }}</em>.{% if pub.editor %} In {{ pub.editor }} (Ed.), <em class="pub-journal">{{ pub.journal }}</em>{% if pub.volume %}, <em class="pub-volume">{{ pub.volume }}</em>{% endif %}{% if pub.number %}({{ pub.number }}){% endif %}{% if pub.pages %}, pp. {{ pub.pages }}{% endif %}{% if pub.publisher %}. {{ pub.publisher }}.{% endif %}{% else %} <em class="pub-journal">{{ pub.journal }}</em>{% if pub.volume %}, <em class="pub-volume">{{ pub.volume }}</em>{% endif %}{% if pub.number %}({{ pub.number }}){% endif %}{% if pub.pages %}, {{ pub.pages }}{% endif %}{% if pub.publisher %}. {{ pub.publisher }}{% endif %}{% unless pub.publisher or pub.link %}.{% endunless %}{% if pub.link %}. <a href="{{ pub.link }}" target="_blank">{{ pub.link }}</a>{% endif %}{% endif %}</span>
</div>
{% endif %}
{% endfor %}
</div>

## Events

<div class="event-list" markdown="1">
{% assign current_year = "" %}
{% for event in site.data.events %}
{% if event.date != current_year %}
{% assign current_year = event.date %}
<div class="event-item year-start">
<span class="event-date">{{ event.date }}</span>
<span class="event-text">{{ event.title }}{% if event.location %}, {{ event.location }}{% endif %}</span>
</div>
{% else %}
<div class="event-item">
<span class="event-date"></span>
<span class="event-text">{{ event.title }}{% if event.location %}, {{ event.location }}{% endif %}</span>
</div>
{% endif %}
{% endfor %}
</div>

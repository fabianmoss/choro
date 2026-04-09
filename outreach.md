---
layout: page
title: Outreach
permalink: /outreach/
menu_order: 4
---

<div class="outreach-section">
  <h2>Publications</h2>
  
  <div class="publication-list">
    {% for pub in site.data.publications %}
    <div class="publication-item">
      <p class="pub-authors">{{ pub.authors }}</p>
      <p class="pub-title">{{ pub.title }}</p>
      <p class="pub-details">{{ pub.journal }}{% if pub.year %}, {{ pub.year }}{% endif %}</p>
      {% if pub.link %}<p class="pub-link"><a href="{{ pub.link }}" target="_blank">Link</a></p>{% endif %}
    </div>
    {% endfor %}
  </div>
</div>

<div class="outreach-section">
  <h2>Events</h2>
  
  <div class="event-list">
    {% for event in site.data.events %}
    <div class="event-item">
      <span class="event-date">{{ event.date }}</span>
      <div class="event-content">
        <p class="event-title">{{ event.title }}</p>
        <p class="event-location">{{ event.location }}</p>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

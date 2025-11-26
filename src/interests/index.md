---
permalink: /interests.html
layout: layouts/main.njk
title: interests
---
<script src="assets/js/tabs.js"></script>
<div class="flex">
    <aside class="border thin left-side fit-content">
        <h3>interests</h3>
        <div class="side-nav">
        <ul class="no-bullets">
        <p>writing</p>
        <ul class="no-bullets">
        <li><a onclick="openTab(event, `articles`)">articles</a></li>
        <li><a onclick="openTab(event, `poetry`)">poetry</a></li>
        </ul>
        </ul>
        <ul>
        <p>photo</p>
        <ul class="no-bullets">
        <li><a onclick="openTab(event, `filmphoto`)">film</a></li>
        <li><a onclick="openTab(event, `digiphoto`)">digital</a></li>
        </ul>
        </ul>
        <ul class="no-bullets">
        <p>art</p>
        <ul class="no-bullets">
        <li><a onclick="openTab(event, `digiart`)">digital</a></li>
        <li><a onclick="openTab(event, `tradart`)">traditional</a></li>
        </ul>
        </ul>
        <ul class="no-bullets">
        <p>misc</p>
        <ul class="no-bullets">
        <li><a onclick="openTab(event, `tech`)"><del>tech</del></a></li>
        <li><a onclick="openTab(event, `tea`)"><del>tea</del></a></li>
        </ul>
        </ul>
        </div>
    </aside>
    <main class="tabcontent border" id="articles">
        {% include "src/interests/drafts/articles.md" %}
    </main>
    <main class="tabcontent border" id="poetry">
        {% include "src/interests/drafts/poetry.md" %}
    </main>
    <main class="tabcontent border" id="filmphoto">
        {% include "src/interests/drafts/filmphoto.md" %}
    </main>
    <main class="tabcontent border" id="digiphoto">
        {% include "src/interests/drafts/digiphoto.md" %}
    </main>
    <main class="tabcontent border" id="digiart">
        {% include "src/interests/drafts/digiart.md" %}
    </main>
    <main class="tabcontent border" id="tradart">
        {% include "src/interests/drafts/tradart.md" %}
    </main>
    <main class="tabcontent border" id="tech">
        {% include "src/interests/drafts/tech.md" %}
    </main>
    <main class="tabcontent border" id="tea">
        {% include "src/interests/drafts/tea.md" %}
    </main>
</div>
<script src="assets/js/lightbox.js"></script>
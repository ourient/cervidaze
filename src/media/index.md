---
permalink: /media.html
layout: layouts/main.njk
title: media log
---
<script src="assets/js/tabs.js"></script>
<div class="flex">
    <aside class="border thin left-side fit-content">
        <h4>media log</h4>
        <div class="side-nav">
        <ul class="no-bullets"><a onclick="openTab(event, `music`)" id="defaultOpen">music</a></ul>
        <ul class="no-bullets"><a onclick="openTab(event, `filmtv`)"><del>film/tv</del></a></ul>
        <ul class="no-bullets"><a onclick="openTab(event, `games`)">games</a></ul>
        <ul class="no-bullets"><a onclick="openTab(event, `books`)">books</a></ul>
        </div>
    </aside>
    <main class="tabcontent border short short-mobile scrollbar" id="music">
        {% include "src/media/drafts/music.md" %}
    </main>
    <main class="tabcontent border short short-mobile scrollbar" id="filmtv">
        {% include "src/media/drafts/filmtv.md" %}
    </main>
    <main class="tabcontent border short short-mobile scrollbar" id="games">
        {% include "src/media/drafts/games.md" %}
    </main>
    <main class="tabcontent border short short-mobile scrollbar" id="books">
        {% include "src/media/drafts/books.md" %}
    </main>
</div>
---
permalink: /media.html
layout: layouts/home.njk
title: media log
---
<script>
    function openTab(evt, interestName) {
        // Declare all variables
        var i, tabcontent, tablinks;
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        // Show the current tab
        document.getElementById(interestName).style.display = "block";
    }
</script>
<div class="flex">
    <aside class="border thin left-side fit-content">
        <h4>media log</h4>
        <div class="side-nav">
        <ul class="no-bullets"><a onclick="openTab(event, `music`)">music</a></ul>
        <ul class="no-bullets"><a onclick="openTab(event, `filmtv`)"><del>film/tv</del></a></ul>
        <ul class="no-bullets"><a onclick="openTab(event, `games`)">games</a></ul>
        <ul class="no-bullets"><a onclick="openTab(event, `books`)">books</a></ul>
        </div>
    </aside>
    <main class="tabcontent border fixed-height scrollbar" id="music">
        {% include "src/media/drafts/music.md" %}
    </main>
    <main class="tabcontent border fixed-height scrollbar" id="filmtv">
        {% include "src/media/drafts/filmtv.md" %}
    </main>
    <main class="tabcontent border fixed-height scrollbar" id="games">
        {% include "src/media/drafts/games.md" %}
    </main>
    <main class="tabcontent border fixed-height scrollbar" id="books">
        {% include "src/media/drafts/books.md" %}
    </main>
</div>
<script>
    const galleryImages = Array.from(document.querySelectorAll('.gallery img'));
    const lightbox = document.createElement('div');
    const lightboxImg = document.createElement('img');
    lightbox.classList.add('lightbox');
    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);
    function handleImage(img) {
        console.log("bweh")
        img.addEventListener('click', () => {
            const imgSrc = img.getAttribute('src');
            lightboxImg.setAttribute('src', imgSrc);
            lightbox.style.display = 'flex';
        });
        lightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    };
    galleryImages.forEach(handleImage);
</script>
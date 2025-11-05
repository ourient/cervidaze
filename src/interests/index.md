---
permalink: /interests.html
layout: layouts/home.njk
title: interests |
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
        <h4>interests</h4>
        <div class="side-nav">
        <ul class="no-bullets">
        <p>writing</p>
        <ul class="no-bullets">
        <li><a onclick="openTab(event, `essays`)">essays</a></li>
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
    <main class="tabcontent border" id="essays">
        {% include "src/interests/drafts/essays.md" %}
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
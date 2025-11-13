---
title: links |
permalink: /links.html
---

<!DOCTYPE html>
<html lang="en" dir="auto">

<head>
  <title>{{ title }} cervidaze ☘</title>

  <meta name="description" content="stay deer">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="UTF-8">

  <link rel="preload" href="/assets/js/styleswitcher.js" as="script">
  <link rel="icon" href="/assets/images/style/gingko.png" type="image/x-icon">

  <link href="/assets/css/light.css{{ nocache }}" rel="stylesheet" type="text/css" media="all">
  <link href="/assets/css/global.css{{ nocache }}" rel="stylesheet" type="text/css" media="all">

  <script src="/assets/js/styleswitcher.js{{ nocache }}">
  </script>
  <script data-goatcounter="https://cervidaze.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
</head>

<body>
  <noscript>hey uh you kinda need javascript for this</noscript>
  <div class="container">
      <header>
          {% include "partials/header.njk" %}
      </header>
    <div class="flex">
      <main class="border">
        {% include "src/links/drafts/links.html" %}
      </main>
      <aside class="border right-side order-one short short-mobile scrollbar">
        {% include "src/links/drafts/neighborhood.html" %}
      </aside>
    </div>
  </div>
  <footer id="footer">
      {% include "partials/footer.njk" %}
  </footer>
</body>
</html>
---
title: links
permalink: /links.html
---

<!DOCTYPE html>
<html lang="en" dir="auto">

<head>
  <title>{{ title }} | cervidaze ☘</title>

  <meta name="description" content="stay deer">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="UTF-8">

  <link rel="preload" href="/assets/js/styleswitcher.js" as="script">
  <link rel="icon" href="/assets/images/style/gingko.png" type="image/x-icon">

  <link href="/assets/css/light.css{{ nocache }}" rel="stylesheet" type="text/css" media="all">
  <link href="/assets/css/global.css{{ nocache }}" rel="stylesheet" type="text/css" media="all">

  <script src="/assets/js/styleswitcher.js{{ nocache }}"></script>
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
    <script src="https://unpkg.com/popper.js@1"></script>
    <script src="https://unpkg.com/tippy.js@4"></script>
    <script>
        tippy('[data-tippy-content]', {
            placement: 'top',
            offset: '[0, 0]',
            maxWidth: 180,
        });
    </script>
</body>
</html>
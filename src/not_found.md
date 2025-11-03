---
permalink: /not_found.html
---
<!DOCTYPE html>
<html lang="en" dir="auto">

<head>
	<title>not found!</title>
	<meta name="description" content="stay deer">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="UTF-8">
	<meta lang="en">
	<link rel="icon" href="/assets/images/style/gingko.png" type="image/x-icon" />
	<link href="/assets/css/main.css" rel="stylesheet" title="lightmode" type="text/css" media="all">
	<link href="/assets/css/darkmode.css" rel="alternate stylesheet" title="darkmode" type="text/css" media="all">
	<script>
	  const tabTitle = document.title;
	  if (tabTitle !== "cervidaze ☘") {
		document.title = tabTitle + " | cervidaze ☘";
	  }
	</script>
	<script type="text/javascript" src="/assets/js/styleswitcher.js"></script>
</head>
<body>
	<noscript>hey uh you kinda need javascript for this</noscript>
	<div id="container">
		<header id="header">
			{% include "partials/header.njk" %}
		</header>
		<div class="flex" style="align-content: center; justify-content: center;">
			<main class="border">
				<h2>ah fuck</h2>
				<img src="assets/images/photos/emdash.jpg" style="max-width: 40%;">
				<p>i don't think this page exists. sorry :/</p>
			</main>
		</div>
	</div>
    <footer>
        {% include "partials/footer.njk" %}
    </footer>
</body>
</html>
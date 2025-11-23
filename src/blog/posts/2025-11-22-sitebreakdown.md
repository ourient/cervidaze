---
title: breaking down (my website)
description: i was inspired by seeing aid's recent post where she breaks down the layout of her website and thought i should write one of my own—both to document my code and also to offer troubleshooting to those who may have the same extremely specific coding issues as me.
date: 2025-11-22
permalink: blog/posts/2025-11-22-sitebreakdown.html
---

i was inspired by seeing <a href="https://zhongvie.neocities.org/articles/website" target="_blank">aid's recent post</a> where she breaks down the layout of her website and thought i should write one of my own—both to document my code and also to offer troubleshooting to those who may have the same extremely specific coding issues as me.

my site began as a very basic folder structure with loose html files and stylesheets that i would update individually. then i learned about code optimization and my neuroses kicked in, and now it's gotten to the point where i learned actual coding practices to automate everything and i've fallen too deep now. my girlfriend says this is called "software engineering."

<br>

## set up
i use visual studio code as my editor and set up github for better folder management and versioning control. (that's how you know it got bad.) my repository is available for viewing publicly.

i'm a full-time video editor, which probably influences the way i organize my files. i prefer to have as few nested branches as possible, but as many subfolders as necessary. this is because i hate digging down a deep as fuck branch for a file, going back up the root folder, and then digging down another deep as fuck branch for another file.

here's a brief overview of my directory:

```
public/
src/
	_includes/
		layouts/
		partials/
	assets/
		css/
		js/
		media/
			audio/
			fonts/
			images/
			misc/
	blog/
	interests/
	media/
	wip/
	about.md
	commissions.md
	credits.md
	guestbook.md
	index.md
	not_found.md
	rss.njk
	sitemap.md
.eleventy.js
```

my site is primarily for my written works, so i quickly got sick of penning my posts in html. i decided to take the harder way around and forced myself to learn 11ty so the only thing i had to worry about from that point forward was writing my posts in markdown.

i did not, in fact, end up only worrying about writing my posts in markdown.

<br>

## writing templates in nunjucks
it turns out that 11ty requires tedious amounts of set up to reach a simple state of automation. this seems to be a common occurrence with coding.

i used nunjucks as my templating language. it seems to be the most popular language for this, and i'm too tired to look further into my options.

<br>


### layouts
i first created this base template:

```
<!DOCTYPE html>
<html lang="en" dir="auto">
<head>
    <title>{ title } | cervidaze ☘</title>
    
    <meta name="description" content="stay deer">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">

    <link rel="preload" href="/assets/js/styleswitcher.js" as="script">
    <link rel="icon" href="/assets/media/images/style/gingko.png" type="image/x-icon">
    <link href="/assets/css/light.css{{ nocache }}" rel="stylesheet" type="text/css" media="all">
    <link href="/assets/css/global.css{{ nocache }}" rel="stylesheet" type="text/css" media="all">

    <script src="/assets/js/styleswitcher.js{{ nocache }}"></script>
    <script data-goatcounter="https://cervidaze.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
</head>

<body>
    { block content }{ endblock }
</body>
</html>
```

this standardizes the `<head>` sitewide, so now i can edit my site's title, javascript, and stylesheets for all pages in one place. i can then extend `base.njk` with <a href="https://www.11ty.dev/docs/shortcodes/" target="_blank_">shortcodes</a> that nest the layout template i want into `<body>`.

this is `main.njk`, used for my primary, media, and interest pages:

```
{ block content }
	<noscript>hey uh you kinda need javascript for this</noscript>
	<div class="container">
		<header>
			{ include "partials/header.njk" }
		</header>
		
		{ content | safe }
	</div>
	<footer id="footer">
		{ include "partials/footer.njk" }
	</footer>
{ endcontent }
```

this is `blogpost.njk`:

```
{ block content }
    <noscript>hey uh you kinda need javascript for this</noscript>
    <div class="container">
        <header>
			{ include "partials/blogheader.njk" }
        </header>
        <main class="border main--padding">
            <h1>{{title}}</h1>
            <time id="post-date">{{ date | topDate }}</time>
            <ul id="post-tags" class="flex-list"></ul>
			
			{ content | safe }
        </main>
        <div id="c_widget"></div>
        <script src="/assets/js/comment-widget.js"></script>
        <div id="post-nav"></div>
    </div>
    <footer>
        { include "partials/footer.njk" }
    </footer>
    <script src="/assets/js/blog.js"></script>
{ endcontent }
```


### partials
i store my headers, footers, and snippets in partials in the same way one might store scripts in .js files. it works just like automating headers and footers in js but far more lightweight, since 11ty renders the partials into html locally as opposed to js scripts rendering html upon site load.

here's the main header:

```
<a href="https://cervidaze.me">
    <img id="gingko" alt="home page" src="/assets/media/images/style/cervidaze_lightbanner_v2.png">
</a>
<a href="https://cervidaze.me">
    <img id="antlers" alt="home page" src="/assets/media/images/style/cervidaze_darkbanner_v2.png">
</a>
<nav class="border main-background nav-link">
    <ul>
        <li><a href="/">home</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/blog">blog</a></li>
        <li><a href="/interests">interests</a></li>
        <li><a href="/commissions">commissions</a></li>
        <li><a href="/media">media</a></li>
        <li><a href="/links">links</a></li>
        <li>
            <form aria-label="styleswitcher">
                <select class="rounded" name="styleswitcher" onchange="setStyle(this.value)">
                    <option value="1" selected="true" disabled="disabled">theme</option>
                    <option value="/assets/css/light">light</option>
                    <option value="/assets/css/dark">dark</option>
                </select>
            </form>
        </li>
    </ul>
</nav>
```

and the footer:

```
<nav class="border main-background nav-link">
	<ul>
		<li><a href="/sitemap">sitemap</a></li>
		<li>|</li>
		<li><a href="/about#connect">contact</a></li>
		<li>|</li>
		<li><a href="/guestbook">guestbook</a></li>
		<li>|</li>
		<li><a href="/credits">credits</a></li>
	</ul>
</nav>
<div class="display-none return card-background">
	<a href="#top" rel="return">return to top</a>
</div>
```


## styling
like many others who were just beginning with html/css, i used sadgrl's layout generator for my base. (you can tell because of the container `<div>` wrapping the site and the `<header>` that spans the entire width of the container.) i have since refactored the base code a great deal, replacing as many `<div>` elements with semantic elements as possible (for screen reader accessibility) and opting for class attributes instead of id attributes whenever i can (for scalability).

<br>


### html
my layout is currently a simple system of one main container with one or two sidebars for supplementary content or navigation if needed. i try to keep my layout as uncluttered as i can while still maintaining some level of intuition—this to me means:

<ul class="circle-bullets">
<li>keeping primary information in <code>&lt;main&gt;</code> and secondary information in <code>&lt;article&gt;</code> and <code>&lt;section&gt;</code></li>
<li>having <code>&lt;nav&gt;</code> clearly display links to my main pages without having to toggle dropdowns</li>
<li>reducing as many nested links as possible to reach a specific page</li>
<li>scrollboxing or collapsing secondary content that would otherwise take up significant amounts of space if displayed by default</li>
</ul>

i don't have much (if any) experience with UX/UI design however, and so trying to find the most accessible, intuitive way to organize my site is a constantly evolving process. this stresses me out a normal amount.

<br>


## css
you may have noticed that my html markup (specifically my class attributes) is much longer than what's typical.

after much trial and error with various ways of organizing css, i decided to use OOCSS as my main guideline. the core philosophy of separating structure from style and container from content speaks to my desire for modularity, and object oriented coding seems to be the most intuitive way for me to visualize things.

i won't explain be explaining much about it here, but basically, it's a lot easier in the long run to think of html elements as blocks and css classes as reusable skins that you attach whenever you want a block to have a specific property.

```
/* without OOCSS */


/* LAYOUT */

main {
	height: 30rem;
	width: auto;
	padding: 2.8rem;
	border-radius: 0.4rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: rgba(220, 226, 230, 0.25);
}

aside {
	height: auto;
	width: 24rem;
	padding: 1.8rem;
	font-size: smaller;
	border-radius: 0.4rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: rgba(220, 226, 230, 0.25);
}
```

because then, you design utility css classes for the properties you use the most and then just customize your html elements with them so you don't need to design an entirely new element with redundant lines of css each time you have a specific exception.

```
/* with OOCSS */


/* UTILITIES */

.border {
	border-radius: 0.4rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: rgba(220, 226, 230, 0.25);
}


/* LAYOUT */

main {
	height: 30rem;
	width: auto;
	padding: 2.8rem;
}

aside {
	height: auto;
	width: 24rem;
	padding: 1.8rem;
	font-size: smaller;
}
```

my style switcher (a combination of <a href="https://kalechips.net/projects/snippets/styleswitcher" target="_blank">kalechip's</a> and <a href="https://alphacentauri.neocities.org/tutorials/javascript-tidbits#theme" target="_blank">alpha centauri's</a> js snippets) would swap out my light mode and dark mode stylesheets in `<head>` depending on what was toggled in the navigation—but every time i edited one stylesheet, i had to copy the exact changes to the other, regardless if the edit affected the actual "skin" of the site or not.

so i split my css into three stylesheets: `light.css` for light mode skinning, `dark.css` for dark mode skinning, and `global.css` for universal styling that's applied to all elements. so now, edits to the site's structure are only made once in `global.css` without affecting the dark and light mode. the styleswitcher now swaps out `light.css` and `dark.css` when toggled, and `global.css` remains in `<head>` untouched.

<br>

## troubleshooting
this is probably the part of the post that will be the most useful to you. i'm sorry for burying it so far down.

<br>

### FOUCing off
for how much webdevs online talk about combatting flash of unstyled content (FOUC) specifically when applying a dark mode stylesheet retrieved from `localStorage`, they sure don't have a fucking solution that works. even after trying js scripts in `<head>`, js scripts in `<body>`, inline js, js scripts after stylesheets, js scripts before stylesheets, event listeners, DOM content loaders, loading divs, fucking praying, nothing worked for me and my incredibly eager to load firefox browser.

until during one fateful properly keyworded search query, i found <a href="https://www.reddit.com/r/css/comments/13hpszu/how_do_i_avoid_the_delayed_css_when_loading_pages/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="_blank">this reddit post</a>.

<img class="wide rounded center" src="/blog/images/preload_screenshot.png">

thank you, u/mcmillhj. after one whole year of manic searching, you have finally saved me from a world of pain.

preloading your styleswitcher js worked. it FULLY forces the html to retrieve and run the script (and therefore your cached dark mode stylesheet, if saved) ABSOLUTELY before all else.

god is real.

<br>

### 11ty + zonelots/zonelets (getting around 11ty's file renaming for date-sensitive blogging frameworks)
i know 11ty already has its own robust tagging system and organizing blog posts by tags is a fairly straightforward process, but i had already gone through the effort of installing zonelots (an offshoot of zonelets) and configuring my precious code to embrace it.

to make your url look cleaner, 11ty has a default setting that renames your rendered html file as an `index.html` inside a folder. this, of course, causes issues for those who have code dependent on retrieving file paths, like that of the very popular neocities blogging framework, zonelets.

the best thing you can do is edit your `.eleventy.js` to turn off this feature. petrapixels includes this function in <a href="https://petrapixel.neocities.org/coding/eleventy-tutorial#configuration" target="_target">her 11ty tutorial</a>:

```
module.exports = function (eleventyConfig) {

  // This will stop the default behaviour of foo.html being turned into foo/index.html
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
};
```

but then, even after accounting for that, **11ty still removes the YYYY-MM-DD portion of your file name**, the very portion that the entire js logic of zonelets is built off of!!!!

so what now? 

you add a permalink variable to the front matter of your blog post. that's it.

```
---
title:
description:
date:
permalink: blog/posts/YYYY-MM-DD-11ty-i-swear-to-god-dont-fucking-touch-this.html
---
```

i have tried to find more elegant solutions to get 11ty to stop altering my file names upon rendering. i have tried. it is just easier to take the extra step of adding the permalink to your front matter from now on.

god will take it from here.
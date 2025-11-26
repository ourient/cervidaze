---
title: breaking down (my website)
description: i was inspired by seeing aid's recent post where she breaks down the layout of her website and thought i should write one of my own—both to document my code and also to offer troubleshooting to those who may have the same extremely specific coding issues as me.
date: 2025-11-22
permalink: blog/posts/2025-11-22-sitebreakdown.html
---

i was inspired by seeing <a href="https://zhongvie.neocities.org/articles/website" target="_blank">aid's recent post</a> where she breaks down the layout of her website and thought i should write one of my own—both to document my code and also to offer troubleshooting to those who may have the same extremely specific coding issues as me.

my site began as a very basic folder structure with loose html files and stylesheets that i would update individually. then i learned about code optimization and my neuroses kicked in, and now it's gotten to the point where i learned actual coding practices to automate everything and i've fallen too deep now. my girlfriend says this is called "software engineering."

<hr>

## set up
i use visual studio code as my editor and set up github for better folder management and versioning control. (that's how you know it got bad.) <a href="https://github.com/ourient/cervidaze" target="_blank">my repository</a> is available for viewing publicly.

i'm a full-time video editor, which probably influences the way i organize my files. i prefer to have as few nested branches as possible, but as many subfolders as necessary. this is because i hate digging down a deep as fuck branch for a file, going back up the root folder, and then digging down another deep as fuck branch for another file.

here's a brief overview of my directory:

<pre class="rounded card-background card-background-light card-background card-background-light-light"><code>
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
</code></pre>

my site is primarily for my written works, so i quickly got sick of penning my posts in html. i decided to take the harder way around and forced myself to learn 11ty so the only thing i had to worry about from that point forward was writing my posts in markdown.

i did not, in fact, end up only worrying about writing my posts in markdown.

<br>

## writing templates in nunjucks
it turns out that 11ty requires tedious amounts of set up to reach a simple state of automation. this seems to be a common occurrence with coding.

i used nunjucks as my templating language. it seems to be the most popular language for this, and i'm too tired to look further into my options.

<br>


### layouts
i first created this base template:

<pre class="rounded card-background card-background-light"><code>&lt;!DOCTYPE html>
&lt;html lang="en" dir="auto">
&lt;head>
    &lt;title>{ title } | cervidaze ☘</title>
    
    &lt;meta name="description" content="stay deer">
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
    &lt;meta charset="UTF-8">

    &lt;link rel="preload" href="/assets/js/styleswitcher.js" as="script">
    &lt;link rel="icon" href="/assets/media/images/style/gingko.png" type="image/x-icon">
    &lt;link href="/assets/css/light.css{{ nocache }}" rel="stylesheet" type="text/css" media="all">
    &lt;link href="/assets/css/global.css{{ nocache }}" rel="stylesheet" type="text/css" media="all">

    &lt;script src="/assets/js/styleswitcher.js{{ nocache }}"></script>
    &lt;script data-goatcounter="https://cervidaze.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
&lt;/head>

&lt;body>
    { block content }{ endblock }
&lt;/body>
&lt;/html>
</code></pre>

this standardizes the `<head>` sitewide, so now i can edit my site's title, javascript, and stylesheets for all pages in one place. i can then extend `base.njk` with <a href="https://www.11ty.dev/docs/shortcodes/" target="_blank_">shortcodes</a> that nest the layout template i want into `<body>`.

this is `main.njk`, used for my primary, media, and interest pages:

<pre class="rounded card-background card-background-light"><code>{ block content }
    &lt;noscript>hey uh you kinda need javascript for this</noscript>
    &lt;div class="container">
        &lt;header>
	{ include "partials/header.njk" }
        &lt;/header>
		
	{ content | safe }
    &lt;/div>
    &lt;footer id="footer">
	{ include "partials/footer.njk" }
    &lt;/footer>
{ endcontent }
</code></pre>

this is `blogpost.njk`:

<pre class="rounded card-background card-background-light"><code>
{ block content }
    &lt;noscript>hey uh you kinda need javascript for this</noscript>
    &lt;div class="container">
        &lt;header>
	{ include "partials/blogheader.njk" }
        &lt;/header>
        &lt;main class="border main--padding">
	&lt;h1>{{title}}&lt;/h1>
	&lt;time id="post-date">{{ date | topDate }}&lt;/time>
	&lt;ul id="post-tags" class="flex-list">&lt;/ul>
			
	{ content | safe }
        &lt;/main>
        &lt;div id="c_widget">&lt;/div>
        &lt;script src="/assets/js/comment-widget.js">&lt;/script>
        &lt;div id="post-nav">&lt;/div>
    &lt;/div>
    &lt;footer>
        { include "partials/footer.njk" }
    &lt;/footer>
    &lt;script src="/assets/js/blog.js"></script>
{ endcontent }
</code></pre>


### partials
i store my headers, footers, and snippets in partials in the same way one might store scripts in .js files. it works just like automating headers and footers in js but far more lightweight, since 11ty renders the partials into html locally as opposed to js scripts rendering html upon site load.

here's the main header:

<pre class="rounded card-background card-background-light"><code>&lt;a href="https://cervidaze.me">
    &lt;img id="gingko" alt="home page" src="/assets/media/images/style/cervidaze_lightbanner_v2.png">
&lt;/a>
&lt;a href="https://cervidaze.me">
    &lt;img id="antlers" alt="home page" src="/assets/media/images/style/cervidaze_darkbanner_v2.png">
&lt;/a>
&lt;nav class="border main-background nav-link">
    &lt;ul>
        &lt;li>&lt;a href="/">home&lt;/a>&lt;/li>
        &lt;li>&lt;a href="/about">about&lt;/a>&lt;/li>
        &lt;li>&lt;a href="/blog">blog&lt;/a>&lt;/li>
        &lt;li>&lt;a href="/interests">interests&lt;/a>&lt;/li>
        &lt;li>&lt;a href="/commissions">commissions&lt;/a>&lt;/li>
        &lt;li>&lt;a href="/media">media&lt;/a>&lt;/li>
        &lt;li>&lt;a href="/links">links&lt;/a>&lt;/li>
        &lt;li>
            &lt;form aria-label="styleswitcher">
                &lt;select class="rounded" name="styleswitcher" onchange="setStyle(this.value)">
                    &lt;option value="1" selected="true" disabled="disabled">theme&lt;/option>
                    &lt;option value="/assets/css/light">light&lt;/option>
                    &lt;option value="/assets/css/dark">dark&lt;/option>
                &lt;/select>
            &lt;/form>
        &lt;/li>
    &lt;/ul>
&lt;/nav>
</code></pre>

and the footer:

<pre class="rounded card-background card-background-light"><code>&lt;nav class="border main-background nav-link">
	&lt;ul>
		&lt;li>&lt;a href="/sitemap">sitemap&lt;/a>&lt;/li>
		&lt;li>|&lt;/li>
		&lt;li>&lt;a href="/about#connect">contact&lt;/a>&lt;/li>
		&lt;li>|&lt;/li>
		&lt;li>&lt;a href="/guestbook">guestbook&lt;/a>&lt;/li>
		&lt;li>|&lt;/li>
		&lt;li>&lt;a href="/credits">credits&lt;/a>&lt;/li>
	&lt;/ul>
&lt;/nav>
&lt;div class="display-none return card-background card-background-light">
	&lt;a href="#top" rel="return">return to top&lt;/a>
&lt;/div>
</code></pre>


## styling
like many others who were just beginning with html/css, i used <a href="https://codepen.io/sadness97/full/XJbLxNj" target="_blank">sadgrl's layout generator</a> for my base. (you can tell because of the container `<div>` wrapping the site and the `<header>` that spans the entire width of the container.) i have since refactored the base code a great deal, replacing as many `<div>` elements with semantic elements as possible (for screen reader accessibility) and opting for class attributes instead of id attributes whenever i can (for scalability).

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


### css
you may have noticed that my html markup (specifically my class attributes) is much longer than what's typical.

after much trial and error with various ways of organizing css, i decided to use <a href="https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/" target="_blank">OOCSS</a> as my main guideline. the core philosophy of separating structure from style and container from content speaks to my desire for modularity, and object oriented coding seems to be the most intuitive way for me to visualize things.

i won't explain be explaining much about it here, but basically, it's a lot easier in the long run to think of html elements as blocks and css classes as reusable skins that you attach whenever you want a block to have a specific property.

<pre class="rounded card-background card-background-light"><code>without OOCSS:


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
</code></pre>

because then, you design utility css classes for the properties you use the most and then just customize your html elements with them so you don't need to design an entirely new element with redundant lines of css each time you have a specific exception.

<pre class="rounded card-background card-background-light"><code>with OOCSS:


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
</code></pre>

my style switcher (a combination of <a href="https://kalechips.net/projects/snippets/styleswitcher" target="_blank">kalechip's</a> and <a href="https://alphacentauri.neocities.org/tutorials/javascript-tidbits#theme" target="_blank">alpha centauri's</a> js snippets) would swap out my light mode and dark mode stylesheets in `<head>` depending on what was toggled in the navigation—but every time i edited one stylesheet, i had to copy the exact changes to the other, regardless if the edit affected the actual "skin" of the site or not.

so i split my css into three stylesheets: `light.css` for light mode skinning, `dark.css` for dark mode skinning, and `global.css` for universal styling that's applied to all elements. so now, edits to the site's structure are only made once in `global.css` without affecting the dark and light mode. the styleswitcher now swaps out `light.css` and `dark.css` when toggled, and `global.css` remains in `<head>` untouched.

<br>

## troubleshooting
this is probably the part of the post that will be the most useful to you. i'm sorry for burying it so far down.

<br>

### FOUCing off
for how much webdevs online talk about combatting flash of unstyled content (FOUC) specifically when applying a dark mode stylesheet retrieved from `localStorage`, they sure don't have a fucking solution that works. even after trying js scripts in `<head>`, js scripts in `<body>`, inline js, js scripts after stylesheets, js scripts before stylesheets, event listeners, DOM content loaders, loading divs, crying, nothing worked for me and my incredibly eager to load firefox browser.

until during one fateful, properly keyworded search query, i found <a href="https://www.reddit.com/r/css/comments/13hpszu/how_do_i_avoid_the_delayed_css_when_loading_pages/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="_blank">this reddit post</a>.

<img class="wide rounded center" src="/blog/images/preload_screenshot.png">

preloading my styleswitcher js worked. it FULLY forces the html to retrieve the script (and therefore your cached dark mode stylesheet, if saved) before all else.

thank you, u/mcmillhj. after one whole year of manic searching, you have finally saved me from a world of pain.

<br>

### 11ty + zonelots/zonelets (getting around 11ty's file renaming for date-sensitive blogging frameworks)
i know 11ty already has its own robust tagging system and organizing blog posts by tags is a fairly straightforward process, but i had already gone through the effort of installing <a href="https://codeberg.org/cdvr/Zonelots" target="_blank">zonelots</a> (an offshoot of the very popular neocities blogging framework, <a href="https://zonelets.net/" target="_blank">zonelets</a>) and configuring my precious code to embrace it.

to make your url look cleaner, 11ty has a default setting that renames your rendered html file as an `index.html` inside a folder. this, of course, causes issues for codes dependent on retrieving file paths, like that of zonelets.

the best thing you can do is edit your `.eleventy.js` to turn off this feature. petrapixels includes this function in <a href="https://petrapixel.neocities.org/coding/eleventy-tutorial#configuration" target="_target">her 11ty tutorial</a>:

<pre class="rounded card-background card-background-light"><code>module.exports = function (eleventyConfig) {

  // This will stop the default behaviour of foo.html being turned into foo/index.html
  eleventyConfig.addGlobalData("permalink", "{ page.filePathStem }.html");
};
</code></pre>

but then, even after accounting for that, **11ty still removes the YYYY-MM-DD portion of your file name**, the very portion that the entire js logic of zonelets is built off of!!!!

so what now? 

you add a permalink variable to the front matter of your blog post. that's it.

<pre class="rounded card-background card-background-light"><code>---
title:
description:
date:
permalink: blog/posts/YYYY-MM-DD-11ty-i-swear-to-god-dont-fucking-touch-this.html
---
</code></pre>

i have tried to find more elegant solutions to get 11ty to stop altering my file names upon rendering. i have tried. it is just easier to take the extra step of adding the permalink to your front matter from now on.

god will take it from here.
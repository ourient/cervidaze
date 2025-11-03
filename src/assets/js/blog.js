/*
ZONELOTS cliff notes

Adding posts:
1) Copy the post template file.
2) Write the post content in the file.
3) Add a new object to the "posts" array, containing the post's title (this can include HTML), filename (not including the ".html" extension), and tag list (optional). Sample:
	{
		"title": `{{ POST TITLE }}`,
		"filename": `{{ YYYY-MM-DD-post-title }}`,
		"tags": [`tag 1`, `tag 2`, `tag 3`],
	},

Safe characters to use in tags:
	letters (upper- or lowercase)
	numbers
	? / : @ - . _ ~ ! $ & ' ( ) * + , ; = (question mark, slash, colon, at sign, hyphen-minus, period, underscore, tilde, exclamation mark, dollar, ampersand, apostrophe, left parenthesis, right parenthesis, asterisk, plus, comma, semicolon, equals)
	spaces (will be replaced by hyphens in tag urls)

Adding messages:
Add a new item in the "messages" array, containing the message content (this can include HTML, but should be inline content only)
*/



/* =============
	SETTINGS
============= */

const latestPostsCutoff = 5; // number of blog posts displayed on home page
const messagesOn = false; // whether or not to show a random message in the header

// links listed in header (nav) and footer (contact)
const navLinks = [
	{ "name": `blog`, "filename": `index`, },
	{ "name": `about`, "filename": `about`, },
	{ "name": `tags`, "filename": `tags`, },
	{ "name": `archive`, "filename": `archive`, },
];
const contactLinks = [
	{ "name": `Neocities`, "url": `https://example.com/`, },
	{ "name": `Twitter`, "url": `https://example.com/`, },
	{ "name": `Codeberg`, "url": `https://example.com/`, },
	{ "name": `Itch`, "url": `https://example.com/`, },
	{ "name": `email`, "url": `contact@example.com`, },
];



/* ===============
	BLOG POSTS
=============== */

const posts = [
	{
		"title": `i know when fall is here`,
		"filename": `2025-09-28-iknowwhenfallishere`,
		"tags": [`update`],
	},

	{
		"title": `digital minimalism and death machines`,
		"filename": `2025-08-30-digitalminimalism`,
		"tags": [`update`],
	},

	{
		"title": `on hiatus, change, and grief again`,
		"filename": `2025-07-25-hiatuschangegriefagain`,
		"tags": [`update`],
	},

	{
		"title": `nothing ever happens`,
		"filename": `2025-04-30-nothing-ever-happens`,
		"tags": [`update`],
	},

	{
		"title": `boycotts and degoogling`,
		"filename": `2025-03-21-boycotts-and-degoogling`,
		"tags": [`reference`],
	},

	{
		"title": `mid-twenties`,
		"filename": `2025-02-25-mid-twenties`,
		"tags": [`update`],
	},

	{
		"title": `hello again`,
		"filename": `2024-12-26-hello-again`,
		"tags": [`update`],
	},

	{
		"title": `her hair had just grown back`,
		"filename": `2024-06-25-herhair`,
		"tags": [`our stillness`],
	},

	{
		"title": `don't forget the l-theanine`,
		"filename": `2024-06-02-dontforget`,
		"tags": [`our stillness`],
	},

	{
		"title": `the difference between rot and decay`,
		"filename": `2024-04-09-rotanddecay`,
		"tags": [`our stillness`],
	},

	{
		"title": `100 miligrams, $10 copay`,
		"filename": `2024-01-26-100milligrams`,
		"tags": [`our stillness`],
	},

	{
		"title": `it's a 57 minute drive to the city of hope`,
		"filename": `2023-12-19-57minutes`,
		"tags": [`our stillness`],
	},

	{
		"title": `unrelated but it's the anniversary of my dog's death`,
		"filename": `2023-11-14-unrelated`,
		"tags": [`our stillness`],
	},

	{
		"title": `stage four ovarian/complex ptsd`,
		"filename": `2023-10-09-stagefour`,
		"tags": [`our stillness`],
	},

	{
		"title": `they found a three centimeter tumor in her pancreas`,
		"filename": `2023-09-21-threecentimetertumor`,
		"tags": [`our stillness`],
	},

	{
		"title": `on hiatus, change, grief`,
		"filename": `2023-09-10-hiatuschangegrief`,
		"tags": [`our stillness`],
	},

	{
		"title": `the smoke stays for a bit`,
		"filename": `2023-07-24-smokestays`,
		"tags": [`our stillness`],
	},

	{
		"title": `post grad sad`,
		"filename": `2023-05-28-postgradsad`,
		"tags": [`our stillness`],
	},

	{
		"title": `another start`,
		"filename": `2023-05-28-another-start`,
		"tags": [`our stillness`],
	},
];



/* =============
	MESSAGES
============= */

const messages = [
	`test message 1`,
	`test message b`,
	`this message includes <em>inline <abbr>HTML</abbr></em>`,
	`this message includes <a href="https://zombo.com/" rel="external">a link</a>`,
];



/* ======================
	PAGE CONSTRUCTION
====================== */

// get current filepath and the relative paths to the posts folder and the index folder
const path = location.pathname.split("/");

// For whatever reason, when we're in the archive, the path is relative
// When we're not, the path is absolute.
const notInBlog = path.at(-1) !== 'blog'

// If in archive, use a relative path (./<post_path>)
// Else, use absolute path (will include /blog/ in there)
const rootPath = notInBlog ? '.' : location.pathname

// take a post in posts array and return a formatted link to that post
function formatPostLink(post) {
	return `<li><time>${post.filename.slice(0, 10)}</time>: <a href="${rootPath}/posts/${post.filename}">${post.title}</a></li>`;
}

// convert tag to HTML id/link hash
function formatTagHash(tag) {
	return `--${tag.replaceAll(/\s+/g, `-`)}`;
}

/* ------------------
	HEADER/FOOTER
------------------ */



/* ----------
	LISTS
---------- */

// build list of latest X blog posts for the home page
const latestPosts = document.getElementById(`latest-posts`);
if (latestPosts) latestPosts.innerHTML = posts.slice(0, latestPostsCutoff).map(formatPostLink).join(``);

// build list of all blog posts for the main blog page
const allPosts = document.getElementById(`all-posts`);
if (allPosts) allPosts.innerHTML = posts.map(formatPostLink).join(``);

// build tag list and list posts by tag on tags page
const tagsList = document.getElementById(`tag-index`);
if (tagsList) {
	const postsByTag = {};

	// for each tag, make a set of indices of posts with that tag
	posts.forEach((post, i) => post.tags.forEach(tag => {
		postsByTag[tag] ??= new Set();
		postsByTag[tag].add(i);
	}));

	tagsList.innerHTML = Object.entries(postsByTag).map(([tag, postIndices]) => `
	<li id="${formatTagHash(tag)}">
		<details>
			<summary>${tag}</summary>
			<ol class="post-list" reversed>${[...postIndices].map(i => formatPostLink(posts[i])).join(``)}</ol>
		</details>
	</li>
	`).join(``);

	// if URL includes hash with tag name, open its post list
	if (location.hash.length > 0) {
		const selectedTag = document.getElementById(location.hash.slice(1));
		if (selectedTag) selectedTag.querySelector(`details`).open = true;
	}
}

/* --------------
	BLOG POST
-------------- */

// If we are currently inside a post, then generate links for pagination (relative paths).
if (path.at(-2) === `posts`) {
	// get index of post matching path (cut off file extension so if webhost cuts off extension the script still works)
	const i = posts.findIndex(post => post.filename === path.at(-1).split(`.html`)[0]);

	const postDate = document.getElementById(`post-date`);
	const pathDate = posts[i].filename.substring(0, 10);
	postDate.dateTime = pathDate;

	if (posts[i].tags) document.getElementById(`post-tags`).innerHTML = posts[i].tags.map(tag => `<li><a href="../tags.html#${formatTagHash(tag)}">${tag}</a></li>`).join(``);

	// link to previous and next posts (if this post is first/latest, link to index instead of previous/next post)
	let postNav = ``;

	postNav += `<li>${i < posts.length - 1
		? `<a href="./${posts[i + 1].filename}.html" rel="prev"><- ${posts[i + 1].title}</a>`
		: `<a href="../" rel="index">back to blog</a>`}</li>`;
	postNav += `<li>${i > 0
		? `<a href="./${posts[i - 1].filename}.html" rel="next">${posts[i - 1].title} -></a>`
		: `<a href="../" rel="index">back to blog</a>`}</li>`;

	document.getElementById(`post-nav`).innerHTML = `<ul>${postNav}</ul>`;
}


/* GALLERY LIGHTBOX */

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
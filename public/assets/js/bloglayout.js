document.getElementById('header').innerHTML = `
        <div id="header-image">
                <a href="https://cervidaze.me">
                    <img id="gingko" src="/assets/images/style/cervidaze_lightbanner.png">
                </a>
				<a href="https://cervidaze.me">
				<img id="antlers" alt="a pair of antlers linking to the home page" src="/assets/images/style/cervidaze_darkbanner.png">
			</a>
        </div>
		<nav id="navbar">
			<ul>
				<li><a href="/index.html">return home</a></li>
				<li><a href="/blog/index.html">blog</a></li>
				<li><a href="/blog/tags.html">tags</a></li>
				<li><a href="/blog/archive.html">archive</a></li>
				<li>
					<div aria-label="styleswitcher">
					<select name="styleswitcher" onchange="changeStyle(this.value)">
						<option value="1" selected="true" disabled="disabled">theme</option>
						<option value="/assets/css/main">light</option>
						<option value="/assets/css/darkmode">dark</option>
					</select>
					</div>
				</li>
			</ul>
		</nav>
                `;
document.getElementById('footer').innerHTML = `
		<div id="footerbar">
			<ul>
				<li><a href="/credits.html">credits</a></li>
				<li>|</li>
				<li><a href="https://cervidaze.me/rss.xml" target="_blank">rss</a></li>
				<li>|</li>
				<li><a href="https://tally.so/r/mZZgqA" target="_blank">newsletter</a></li>
				<li>|</li>
				<li><a href="/guestbook">guestbook</a></li>
			</ul>
			</div>
	
			<div id="return">
				<a href="#header" rel="return">return to top</a>
			</div>
	
	
	`;
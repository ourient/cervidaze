---
layout: layouts/main.njk
permalink: /index.html
---

<div class="flex">
    <main class="border">
        <h1>welcome!</h1>
        <p>this DIY site is the revival of <b>our stillness</b>, a
            blogging project i started several years ago.</p>
        <p>my early teenage years were spent exploring what the web had to offer, before it started to only
            offer
            monetization. joining the indie web revival is my attempt at rekindling the mortifying creativity
            and curiosity i once
            had as a kid with unrestricted access to the internet.</p>
        <p>if you are a returning user, thank you so much for your continued support. if you are new, thank you
            for giving my work your time. regardless of who you are, please enjoy your stay ♡</p>
        <p>- reyn</p>
        <br>
        <hr>
        <p><small><b>please note:</b> this site is responsive and mobile-friendly, but is best viewed on a
                browser that supports javascript</small></p>
    </main>
    <aside class="fixed-height border right-side narrow scrollbar order-last">
        <h4>status</h4>
        <div class="rounded card-background" id="statuscafe">
            <div id="statuscafe-username"></div>
            <div id="statuscafe-content"></div>
        </div>
        <script src="https://status.cafe/current-status.js?name=ourient" defer></script>
        <br>
        <h4>site buttons</h4>
        <div class="site-button">
            <img src="assets/images/graphics/buttons/sites/cervidaze_v2.png" title="cervidaze light"
                alt="cervidaze light">
            <img src="assets/images/graphics/buttons/sites/cervidaze_v2_dark.png" title="cervidaze dark"
                alt="cervidaze dark">
        </div>
        <textarea class="rounded card-background"><a href="https://cervidaze.me/" target="_blank"><img src="your local link here" alt="cervidaze"></a></textarea>
        <br>
        <h4>playlist</h4>
        {% include "./_includes/partials/musicplayer.njk" %}
        <br>
        <h4>changelog</h4>
        <div class="changelog rounded scrollbar card-background">
            <ul class="no-bullets">
                <li>11/10/25<br>removed FOUC;<br>added loading div hotfix;<br>added cachebuster<br>(please refresh your page!)</li>
                <li>11/7/25<br>updated links page;<br>code optimization</li>
                <li>11/4/25<br>dark mode styling tweaks</li>
                <li>11/3/25<br>added git integration</li>
                <li>10/20/25<br>updated media page;<br>updated music playlist</li>
                <li>9/28/25<br>new blog post;<br>implemented OOCSS;<br>added neighbors</li>
                <li>9/17/25<br>new media page;<br>updated nav and footer;<br>added neighbors</li>
                <li>8/29/25<br>new blog post</li>
                <li>8/11/25<br>added internal guestbook page</li>
                <li>8/9/25<br>updated interests page;<br>added lightbox features</li>
                <li>8/5/25<br>new essay;<br>updated about page</li>
                <li>8/3/25<br>new site buttons!</li>
                <li>8/1/25<br>updated<br>interests page;<br>added mutuals buttons;<br>added 11ty integration</li>
                <li>7/25/25<br>new blog post;<br>light layout reformatting</li>
                <li>4/30/25<br>new blog post</li>
                <li>3/30/25<br>new fonts;<br>updated dark theme;<br>new interests layout;<br>new site banners
                </li>
                <li>3/21/25<br>new blog post</li>
                <li>3/2/25<br>uploaded all posts from previous blog;<br>updated links page;<br>code housekeeping
                </li>
                <li>2/25/25<br>new blog post;<br>added newsletter form;<br>moved contact info to about page</li>
                <li>2/24/25<br>attempted to reduce FOUC</li>
                <li>2/22/25<br>code optimization</li>
                <li>2/21/25<br>actually made a dark mode toggle. incredible.<br>i can fight god</li>
                <li>2/19/25<br>added status.cafe widget;<br>added credits page;<br>added footer</li>
                <li>2/17/25<br>moved neighborhood</li>
                <li>2/15/25<br>added essays page;<br>improved accessibility;<br>more housekeeping</li>
                <li>2/13/25<br>created temporary gallery;<br>general housekeeping</li>
                <li>2/12/25<br>created site buttons;<br>added basic accessibility</li>
                <li>2/10/25<br>added neighborhood;<br>added rss feed. we'll see if it works</li>
                <li>2/4/25<br>made site responsive;<br>added music player</li>
                <li>2/2/25<br>completed about and sitemap pages</li>
                <li>1/20/25<br>added comments section to blog posts</li>
                <li>1/12/25<br>updated links page</li>
                <li>12/26/24<br>first blog post!</li>
                <li>12/25/24<br>installed zonelots merry fucking christmas</li>
                <li>12/24/24<br>made the fucking thing</li>
            </ul>
        </div>
    </aside>
</div>
</div>

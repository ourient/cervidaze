// Tells Eleventy to look for Luxon
const { DateTime } = require('luxon');

// Tells Eleventy to look for the RSS plugin
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  // This makes the eleventy command quieter (with less detail)
  eleventyConfig.setQuietMode(true);

  // This will make Eleventy not use your .gitignore file to ignore files
  eleventyConfig.setUseGitIgnore(false);

  // This will copy this folder to the output without modifying it at all
  eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/blog/images");

  // Load the RSS plugin
  eleventyConfig.addPlugin(pluginRss);

  // Add the filter "topDate" to simplify the way blog dates are presented at the top of blog posts
  eleventyConfig.addFilter('topDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      'L/dd/yy'
    );
  });

  return {
    // This defines the input and output directories
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
    markdownTemplateEngine: 'njk',
	  dataTemplateEngine: 'njk',
	  htmlTemplateEngine: 'njk',
  };
};
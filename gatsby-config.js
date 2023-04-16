/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: process.env.GATSBY_TITLE_DESCRIPTION,
		description: process.env.GATSBY_DESCRIPTION,
		author: process.env.GATSBY_AUTHOR,
		siteUrl: process.env.GATSBY_SITEURL,
	},

	pathPrefix: process.env.GATSBY_PATH_PREFIX,

	plugins: [
		"gatsby-plugin-image",
		"gatsby-transformer-sharp",
		"gatsby-transformer-json",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "common",
				path: `${__dirname}/src/common/assets/`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/common/assets/images/`,
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "gatsby-starter-default",
				short_name: "starter",
				start_url: "/",
				background_color: "#663399",
				theme_color: "#663399",
				display: "minimal-ui",
				icon: process.env.GATSBY_FAVICON,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "data",
				path: `${__dirname}/src/common/data/`,
			},
		},
		{
			resolve: "gatsby-plugin-sharp",
			options: {
				publicURL: true,
			},
		},
	]
};

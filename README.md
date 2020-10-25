# Gatsby MaximumMDX Starter

A Gatsby starter kit for leveraging some of the more advanced MDXjs features with a base of content building helpers to get your next blog/documentation site launched.

<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
    ❤️
	<img alt="MaximumCrash" src="https://rejontaylor.com/Images/crash_contact.svg" width="80" />
	❤️
    <img alt="MDXjs" src="https://mdx-logo.now.sh" width="60"/>
  </a>
</p>

---

### 🤔 Motivations

This starter is the skeleton base of [MakerDAO's Community Portal](https://github.com/makerdao/community) that aimed to solve **that** communities' issues with strict content directories, crunchy localization support, and the lack of advanced component support (ie. things like Buttons or Videos in CMS services like gitbooks can be an uphill battle to learn/implement __[no shade intended]__). 

TLDR: You should be able to write your content in any form or fashion without constraint. Site code and Content are segmented into seperate top level folders to avoid merge conflicts and make it easy to migrate your MDX/MD content to another project.

This starter also forks [Hasura's Gitbook Starter's](https://github.com/hasura/gatsby-gitbook-starter) execution of the sidenav, with improvents to their algorithm for more frontmatter dependent ordering and labeling.

### Live Example

You can see it live [here](https://gatsby-maximum-mdx.netlify.app). 

### Features

- Editable here on Github
- Automatically generated Sidebar and Breadcrumbs navigation
- Page data dependent header link generation
- Frontmatter controls for showing/hiding elements. 
- Pre-built components to help you ease into interweaving components with Markdown.
- Helper components for images and text alignment.
- Content and Site Code architecture seperated for ease of content migrations.
- Completely customisable
- Seo features backed in frontmatter controls
- Easy deployment with Github Pages, Netlify, Now.sh, ect.

### What Doesn't it Do

- No seperate route localization support 
- No direct dark/light mode integration. Though if wanted it is possible to build in [theme-ui supports this feature](https://theme-ui.com/guides/color-mode-toggles/)
- No built in search 

### Live Examples in the Wild

- [MakerDao's Comm Dev Portal](https://community-development.makerdao.com/)
- [Black Game Developers](https://www.blackgamedevs.com/)

and more to come! (Contact me if you'd like to be on this list)

### Hotstart

This project uses Gatsby, so I assume you're up to spec on [Node.js](https://nodejs.org/en/download/), and have npm (comes with Nodejs) or [yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable) installed. 

```
$ git clone https://github.com/MaximumCrash/gatsby-maximum-mdx.git
$ cd gatsby-maximum-mdx
$ yarn 
$ yarn start
```

In your browser go to `http://localhost:8000` to view the app and it's documentation.

### Now What?

All your pages will go into the `content` folder, so you can delete everything in there. You may see a few errors regarding graphql frontmatter variables, so it's important that you leave at least one file that uses these variables. Each file is a page, and the way you construct your directory is **exactly** how the route will be placed. For example if you do this:

```
├── content
│   ├── index.mdx
│   ├── about
│   │   ├── index.mdx
│   │   └── project_name.mdx
```

Your route to `project_name` in browser will be `http://website.com/about/project_name` or if your running locally `http://localhost:8000/about/project_name`

The base project here has a good amount of documentation written into the site itself so go crazy and show the world what you can do! 

--- 

### Future of this Project

I won't be heavily maintaining this, but I'll leave to it to the communities whims on where this goes next.

I def think there's places for improvement and if you've got an idea, please fork and throw in your spin. 

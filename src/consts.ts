import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "HowToPython.dev",
  DESCRIPTION: "How to Python?",
  EMAIL: "hello@howtopython.dev",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "How To Python Home",
  DESCRIPTION: "Tutorials for Python programming language.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "About me page."
}

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Tutorials for Python programming language.",
};


export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/jszafran",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/jakub-szafran/",
  },
];

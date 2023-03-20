export type Frontmatter = {
  title: string;
  thumbnail: string;
  problem: string;
  solution: string;
  siteUrl: string;
  codeUrl: string;
  technologies: string[];
  toc: string[];
};

export type Project = {
  slug: string;
  frontmatter: Frontmatter
};

export type ProjectsProps = {
  projects: Project[];
};
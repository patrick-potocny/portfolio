import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { useContext, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import ReactMarkdown from "react-markdown";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import styles from "@/styles/pages/CaseStudy.module.scss";
import { Frontmatter } from "@/lib/types";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import gitHub from "@/public/images/gitHub.svg";
import gitHubHover from "@/public/images/gitHubHover.svg";
import link from "@/public/images/link.svg";
import linkHover from "@/public/images/linkHover.svg";
import Head from "next/head";

type Props = {
  frontmatter: Frontmatter;
  content: string;
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticPaths() {
  const files = fs.readdirSync("projects");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: Params) {
  const fileName = fs.readFileSync(`projects/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(
    fileName
  ) as GrayMatterFile<string>;
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function CaseStudy({ frontmatter, content }: Props) {
  const { setSeenWelcomePage } = useContext(SeenWelcomeScreenCtx);
  const [gitHubIcon, setGitHubIcon] = useState(gitHub);
  const [linkIcon, setLinkIcon] = useState(link);

  // Set seenWelcomePage to true so that the welcome screen is not shown
  // when user redirects to home page.
  useEffect(() => {
    setSeenWelcomePage(true);
  }, []);

  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <article className={styles.project}>
        <div className={styles.leftCorners} />
        <div className={styles.rightCorners} />
        <header className={styles.header}>
          <h1 className={styles.name}>{frontmatter.title}</h1>
          <Image
            priority
            width={1000}
            height={700}
            className={styles.thumbnail}
            src={`/${frontmatter.thumbnail}`}
            alt={frontmatter.title}
          />
          <ul className={styles.technologies}>
            {frontmatter.technologies.map((tech) => (
              <li key={tech} className={styles.technology}>
                {tech}
              </li>
            ))}
          </ul>
          <div className={styles.links}>
            <a
              className={styles.link}
              href={frontmatter.siteUrl}
              target="_blank"
              onMouseEnter={() => setLinkIcon(linkHover)}
              onMouseLeave={() => setLinkIcon(link)}
            >
              <Image className={styles.icon} src={linkIcon} alt="Link icon" />
              SITE
            </a>
            <a
              className={styles.link}
              href={frontmatter.codeUrl}
              target="_blank"
              onMouseEnter={() => setGitHubIcon(gitHubHover)}
              onMouseLeave={() => setGitHubIcon(gitHub)}
            >
              <Image
                className={styles.icon}
                src={gitHubIcon}
                alt="Github logo"
              />
              CODE
            </a>
          </div>
          <TableOfContents headings={frontmatter.toc} />
        </header>
        <main className={styles.main}>
          <ReactMarkdown
            components={{
              // Add an ID to every `h2` tag
              h2: ({ children }) => (
                <h2 id={children.toString().toLowerCase()}>{children}</h2>
              ),
              // Add `target="_blank"` to all anchor tags
              a: ({ node, ...props }) => <a {...props} target="_blank" />,
            }}
          >
            {content}
          </ReactMarkdown>
        </main>
        <footer>
        <div className={styles.links}>
            <a
              className={styles.link}
              href={frontmatter.siteUrl}
              target="_blank"
              onMouseEnter={() => setLinkIcon(linkHover)}
              onMouseLeave={() => setLinkIcon(link)}
            >
              <Image className={styles.icon} src={linkIcon} alt="Link icon" />
              SITE
            </a>
            <a
              className={styles.link}
              href={frontmatter.codeUrl}
              target="_blank"
              onMouseEnter={() => setGitHubIcon(gitHubHover)}
              onMouseLeave={() => setGitHubIcon(gitHub)}
            >
              <Image
                className={styles.icon}
                src={gitHubIcon}
                alt="Github logo"
              />
              CODE
            </a>
          </div>
        </footer>
      </article>
    </Layout>
  );
}

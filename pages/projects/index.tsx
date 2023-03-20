import Layout from "@/components/Layout";
import React, { useContext, useEffect } from "react";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import fs from "fs";
import matter from "gray-matter";
import ProjectWrapper from "@/components/ProjectWrapper";
import Head from "next/head";
import { ProjectsProps } from "@/lib/types";

export async function getStaticProps() {
  // Get all projects
  const files = fs.readdirSync("projects");
  const projects = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`projects/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }: ProjectsProps) {
  const { setSeenWelcomePage } = useContext(SeenWelcomeScreenCtx);

  // Set seenWelcomePage to true so that the welcome screen is not shown
  // when user redirects to home page.
  useEffect(() => {
    setSeenWelcomePage(true);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      {projects.map(({ slug, frontmatter }) => (
        <ProjectWrapper key={slug} slug={slug} frontmatter={frontmatter}/>
      ))}
    </Layout>
  );
}

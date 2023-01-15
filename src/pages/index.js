import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function HomepageMain() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <main className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          {siteConfig.tagline} <span aria-hidden="true">🦮</span>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Layout
      title="Screen reader driver for test automation"
      description="Screen reader driver for test automation"
    >
      <HomepageMain />
    </Layout>
  );
}

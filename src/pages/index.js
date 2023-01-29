import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHero({ title, tagline }) {
  return (
    <section className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">
          {tagline} <span aria-hidden="true">🦮</span>
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
    </section>
  );
}

function HomepageTagline() {
  return (
    <section className={clsx("hero", styles.tagline)}>
      <div
        className={clsx(
          "container col col--8 col--offset-2 margin-vert--md",
          styles.taglineContainer
        )}
      >
        <h2 className="text--center">
          <b>Reliable</b> Automation For Your{" "}
          <b>Screen Reader A11y Workflows</b> Through JavaScript
        </h2>
        <p className="text--center">
          A11y static analysis tools only cover around 25% of WCAG and don't assure on
          the quality of the user experience for screen reader users. This means
          teams need to perform lots of manual tests with multiple screen
          readers to ensure great UX which can take a lot of time...{" "}
          <b>not anymore!</b>
        </p>
        <p className="text--center">
          With Guidepup you can automate your screen reader test workflows the
          same you as would for mouse or keyboard based scenarios, no sweat!
        </p>
      </div>
    </section>
  );
}

function HomepageMain() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <main className={styles.main}>
      <HomepageHero {...siteConfig} />
      <HomepageTagline />
      <HomepageFeatures />
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

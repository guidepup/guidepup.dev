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
          <span>Reliable</span> automation for your{" "}
          <span>screen reader a11y workflows</span> through JavaScript
        </h2>
        <p className="text--center">
          With Guidepup you can automate your screen reader test workflows the
          same you as would for mouse or keyboard based scenarios, no sweat!
        </p>
      </div>
    </section>
  );
}

function HomepageBottom() {
  return (
    <section className={clsx("hero")}>
      <div className="container">
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg margin-horiz--md"
            to="/docs/intro"
          >
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg margin-horiz--md"
            to="https://github.com/guidepup/guidepup"
          >
            GitHub
          </Link>
        </div>
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
      <HomepageBottom />
    </main>
  );
}

export default function Home() {
  return (
    <Layout
      title="Screen reader driver for test automation"
      description="Reliable automation for your screen reader accessibility test workflows with Guidepup. Drive VoiceOver and NVDA a11y tests with ease"
    >
      <HomepageMain />
    </Layout>
  );
}

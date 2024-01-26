import React from "react";
import styles from "./index.module.css";

const FeatureList = [
  {
    title: "Full control",
    description: (
      <>
        If VoiceOver or NVDA have a keyboard command, then Guidepup supports it.
      </>
    ),
  },
  {
    title: "Mirrors real user experience",
    description: (
      <>Assert on what users really do and hear when using screen readers.</>
    ),
  },
  {
    title: "Framework agnostic",
    description: (
      <>
        Run with Jest, with Playwright, as an independent script, no vendor
        lock-in.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={"col col--4 margin-vert--md"}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

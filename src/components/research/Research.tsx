import React, { useState } from "react";
import cx from "classnames";
import { InView } from "react-intersection-observer";
import Main from "../common/Main";
import PageHeader from "../common/PageHeader";
import { projects, topics } from "../../data/research";
import { publications } from "../../data/publication";
import styles from "./Research.module.css";

type Props = {
  lang?: "en" | "ja";
};

const selectedPapers = publications
  .map((p) => p.contents)
  .map((c) => c[0].items)
  .flat()
  .filter((item) => item.selected === true);

const Research = ({ lang = "ja" }: Props) => {
  const [currentSection, setCurrentSection] = useState("project");

  const onChangeIntersection = (inView: boolean, sectionName: string) => {
    if (inView && currentSection !== sectionName) {
      setCurrentSection(sectionName);
    }
  };

  return (
    <Main>
      <PageHeader>Research</PageHeader>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <InView
            as="section"
            onChange={(inView) => onChangeIntersection(inView, "project")}
            className={styles.section}
            id="project"
            threshold={0.5}
          >
            <h2 className={styles.sectionTitle}>Main Projects</h2>
            <div className={styles.sectionContents}>
              {projects.map((p) => {
                return (
                  <a className={styles.content} href={p.url} key={p.title}>
                    <figure className={styles.contentImg}>
                      <img src={`/assets/${p.imgUrl}`} alt="" />
                    </figure>
                    <div className={styles.contentRight}>
                      <h3 className={styles.contentTitle}>{p.title}</h3>
                      <p className={styles.description}>{p.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </InView>
          <InView
            as="section"
            onChange={(inView) => onChangeIntersection(inView, "papers")}
            className={styles.section}
            id="papers"
            threshold={0.5}
          >
            <h2 className={styles.sectionTitle}>Selected Papers</h2>
            <ul className={styles.papers}>
              {selectedPapers.map((p) => (
                <li className={styles.paper}>
                  {p.url ? <a href={p.url}>{p.text}</a> : <>{p.text}</>}
                </li>
              ))}
            </ul>
          </InView>
          <InView
            as="section"
            onChange={(inView) => onChangeIntersection(inView, "topics")}
            className={styles.section}
            id="topics"
            threshold={0.5}
          >
            <h2 className={styles.sectionTitle}>Research Topics</h2>
            <ul className={styles.topics}>
              {topics.map((t) => (
                <li className={styles.topic}>
                  <a className={styles.topicLink} href={t.url}>
                    <figure className={styles.topicImg}><img src={'/assets/' + t.imgUrl} alt="" /></figure>
                    <p className={styles.topicTitle}>{t.title}</p>
                  </a>
                </li>
              ))}
            </ul>
          </InView>
        </div>
        <aside className={styles.side}>
          <a
            className={cx(
              styles.menu,
              currentSection === "project" && styles.active
            )}
            href="#project"
          >
            Main Projects
          </a>
          <a
            className={cx(
              styles.menu,
              currentSection === "equipments" && styles.active
            )}
            href="#equipments"
          >
            Equipments
          </a>
          <a
            className={cx(
              styles.menu,
              currentSection === "papers" && styles.active
            )}
            href="#papers"
          >
            Selected Papers
          </a>
          <a
            className={cx(
              styles.menu,
              currentSection === "topics" && styles.active
            )}
            href="#topics"
          >
            Research Topics
          </a>
        </aside>
      </div>
    </Main>
  );
};

export default Research;

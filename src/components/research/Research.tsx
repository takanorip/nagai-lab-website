import React, { useState, useCallback, ChangeEventHandler } from "react";
import cx from "classnames";
import { InView } from "react-intersection-observer";
import Main from "../common/Main";
import PageHeader from "../common/PageHeader";
import Select from "../common/Select";
import Button from "../common/Button";
import { projects, equipments } from "../../data/research";
import { publications } from "../../data/publication";
import styles from "./Research.module.css";
import { useBudouX } from "../../utils/useBudoux";
import { Robot } from "../common/icons/Robot";
import { Computer } from "../common/icons/Computer";
import { Room } from "../common/icons/Room";

type Props = {
  topics: any;
  lang?: "en" | "ja";
};

const THRESHOLD = 0;
const ROOT_MARGIN = "-50% 0px";

const selectedPapers = publications
  .map((p) => p.contents)
  .map((c) => c[0].items)
  .flat()
  .filter((item) => item.selected === true);

const Research = ({ lang = "ja", topics }: Props) => {
  const [currentSection, setCurrentSection] = useState("project");
  const [selectedValue, setSelectedValue] = useState("");
  const [filteredTopics, setFilteredTopics] = useState(topics);

  const filter = (type: "" | "previous" | "current") => {
    if (type === "") {
      return topics;
    }
    if (type === "previous") {
      return topics.filter((t) => !t.current);
    }
    if (type === "current") {
      return topics.filter((t) => t.current);
    }
    return topics;
  };

  const onChangeIntersection = (inView: boolean, sectionName: string) => {
    if (inView && currentSection !== sectionName) {
      setCurrentSection(sectionName);
    }
  };

  const onChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (event) => {
      const value = event.target.value;
      setSelectedValue(value);
      setFilteredTopics(filter(value as "" | "previous" | "current"));
    },
    []
  );

  return (
    <Main>
      <PageHeader>Research</PageHeader>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <InView
            as="section"
            onChange={(inView) => onChangeIntersection(inView, "project")}
            className={styles.section}
            threshold={THRESHOLD}
            rootMargin={ROOT_MARGIN}
          >
            <span id="project" className={styles.anchor}></span>
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
            onChange={(inView) => onChangeIntersection(inView, "equipments")}
            className={styles.section}
            threshold={THRESHOLD}
            rootMargin={ROOT_MARGIN}
          >
            <span id="equipments" className={styles.anchor}></span>
            <h2 className={styles.sectionTitle}>Equipments</h2>
            <div className={styles.equipmentCategories}>
              {equipments.map((category) => {
                return (
                  <div className={styles.equipment} key={category.category}>
                    <h3 className={styles.equipmentCategory}>
                      {category.category === 'Facilities' && <Room />}
                      {category.category === 'Robots' && <Robot />}
                      {category.category === 'Computers' && <Computer />}
                      {category.category}
                    </h3>
                    <div className={styles.equipmentContents}>
                      {category.contents.map((content) => {
                        return (
                          <div className={styles.equipmentContent}>
                            <figure className={styles.equipmentImg}>
                              <img
                                loading="lazy"
                                src={`/assets/equipments/${content.imgUrl}`}
                                alt=""
                              />
                            </figure>
                            <div className={styles.equipmentDetail}>
                              <h4 className={styles.contentTitle}>
                                {content.title}
                              </h4>
                              <p className={styles.description}>
                                {content.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </InView>
          <InView
            as="section"
            onChange={(inView) => onChangeIntersection(inView, "papers")}
            className={styles.section}
            threshold={THRESHOLD}
            rootMargin={ROOT_MARGIN}
          >
            <span id="papers" className={styles.anchor}></span>
            <h2 className={styles.sectionTitle}>Selected Papers</h2>
            <ul className={styles.papers}>
              {selectedPapers.map((p) => (
                <li className={styles.paper}>
                  {p.url ? <a href={p.url}>{p.text}</a> : <>{p.text}</>}
                </li>
              ))}
            </ul>
            <Button href="/publication/">View All Publications</Button>
          </InView>
          <InView
            as="section"
            onChange={(inView) => onChangeIntersection(inView, "topics")}
            className={styles.section}
            threshold={THRESHOLD}
            rootMargin={ROOT_MARGIN}
          >
            <span id="topics" className={styles.anchor}></span>
            <h2 className={styles.sectionTitle}>Research Topics</h2>
            <Select label="" value={selectedValue} onChange={onChange}>
              <option value="">All</option>
              <option value="current">Current Topics</option>
              <option value="previous">Previous Topics</option>
            </Select>
            <ul className={styles.topics}>
              {filteredTopics.map((t) => (
                <li className={styles.topic}>
                  <a className={styles.topicLink} href={t.url}>
                    <figure className={styles.topicImg}>
                      <picture>
                        <source
                          srcSet={
                            "/assets/thumbnails/" +
                            t.thumbnail.split(".")[0] +
                            ".webp"
                          }
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          src={"/assets/thumbnails/" + t.thumbnail}
                          alt=""
                        />
                      </picture>
                    </figure>
                    <p className={styles.topicTitle}>{useBudouX(t.title)}</p>
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

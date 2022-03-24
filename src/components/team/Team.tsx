import React, { useState } from "react";
import cx from "classnames";
import { InView } from "react-intersection-observer";
import Main from "../common/Main";
import PageHeader from "../common/PageHeader";
import { Email } from "../common/Email";
import {
  researchStaffs,
  visitingResearchers,
  administrativeStaffs,
  phdStudents,
  masterStudents,
  undergraduateStudents,
  alumni,
} from "../../data/team";
import styles from "./Team.module.css";

type Props = {
  lang?: "en" | "ja";
};

const Team = ({ lang = "ja" }: Props) => {
  const [currentSection, setCurrentSection] = useState("researchStaffs");

  const onChangeIntersection = (inView: boolean, sectionName: string) => {
    if (inView && currentSection !== sectionName) {
      setCurrentSection(sectionName);
    }
  };

  return (
    <Main>
      <PageHeader>Team</PageHeader>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <InView
            as="section"
            onChange={(inView) =>
              onChangeIntersection(inView, "researchStaffs")
            }
            className={styles.section}
            id="researchStaffs"
            threshold={0.5}
          >
            <h2 className={styles.sectionTitle}>Research Staffs</h2>
            <div className={styles.sectionContents}>
              <div className={styles.professors}>
                {researchStaffs.slice(0, 2).map((member) => (
                  <div>
                    <figure className={styles.img}>
                      <img src={member.imgUrl} alt="" />
                    </figure>
                    <p className={styles.professorTitle}>{member.title}</p>
                    <h3 className={styles.professorName}>{member.name}</h3>
                    <p className={styles.email}>
                      <Email email={member.email} />
                    </p>
                    <p className={styles.professorDescription}>
                      {member.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className={styles.members}>
                {researchStaffs.slice(2).map((member) => {
                  return (
                    <div className={styles.content} key={member.name}>
                      <figure className={styles.img}>
                        <img src={member.imgUrl} alt="" />
                      </figure>
                      <p className={styles.title}>{member.title}</p>
                      <h3 className={styles.name}>{member.name}</h3>
                      <p className={styles.email}>
                        <Email email={member.email} />
                      </p>
                      <p className={styles.description}>{member.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </InView>
          <InView
            as="section"
            onChange={(inView) =>
              onChangeIntersection(inView, "visitingResearchers")
            }
            className={styles.section}
            id="visitingResearchers"
            threshold={0.5}
          >
            <h2 className={styles.sectionTitle}>Visiting Researchers</h2>
            <div className={styles.sectionContents}>
              <div className={styles.members}>
                {visitingResearchers.map((member) => {
                  return (
                    <div className={styles.content} key={member.name}>
                      <figure className={styles.img}>
                        <img src={member.imgUrl} alt="" />
                      </figure>
                      <p className={styles.title}>{member.title}</p>
                      <h3 className={styles.name}>{member.name}</h3>
                      <p className={styles.email}>
                        <Email email={member.email} />
                      </p>
                      <p className={styles.description}>{member.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </InView>
          <InView
            as="section"
            onChange={(inView) =>
              onChangeIntersection(inView, "administrativeStaffs")
            }
            className={styles.section}
            id="administrativeStaffs"
            threshold={0.5}
          >
            <h2 className={styles.sectionTitle}>Administrative Staffs</h2>
            <div className={styles.sectionContents}>
              <div className={styles.members}>
                {administrativeStaffs.map((member) => {
                  return (
                    <div className={styles.content} key={member.name}>
                      <figure className={styles.img}>
                        <img src={member.imgUrl} alt="" />
                      </figure>
                      <p className={styles.title}>{member.title}</p>
                      <h3 className={styles.name}>{member.name}</h3>
                      <p className={styles.email}>
                        <Email email={member.email} />
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </InView>
          <InView
            as="section"
            onChange={(inView) => onChangeIntersection(inView, "phdStudents")}
            className={styles.section}
            id="phdStudents"
            threshold={0.5}
          >
            <h2 className={styles.sectionTitle}>Ph.D Students</h2>
            <div className={styles.sectionContents}>
              <div className={styles.members}>
                {phdStudents.map((member) => {
                  return (
                    <div className={styles.content} key={member.name}>
                      <figure className={styles.img}>
                        <img src={member.imgUrl} alt="" />
                      </figure>
                      <p className={styles.title}>{member.title}</p>
                      <h3 className={styles.name}>{member.name}</h3>
                      <p className={styles.email}>
                        <Email email={member.email} />
                      </p>
                      <p className={styles.studentDescription}>
                        {member.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </InView>
          <InView
            as="section"
            onChange={(inView) =>
              onChangeIntersection(inView, "masterStudents")
            }
            className={styles.section}
            id="masterStudents"
            threshold={0.5}
          >
            <h2 className={styles.sectionTitle}>Master Students</h2>
            <div className={styles.sectionContents}>
              <div className={styles.members}>
                {masterStudents.map((member) => {
                  return (
                    <div className={styles.content} key={member.name}>
                      <figure className={styles.img}>
                        <img src={member.imgUrl} alt="" />
                      </figure>
                      <p className={styles.title}>{member.title}</p>
                      <h3 className={styles.name}>{member.name}</h3>
                      <p className={styles.studentDescription}>
                        {member.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </InView>
          <InView
            as="section"
            onChange={(inView) =>
              onChangeIntersection(inView, "undergraduateStudents")
            }
            className={styles.section}
            id="undergraduateStudents"
            threshold={0.5}
          >
            <h2 className={styles.sectionTitle}>Undergraduate Students</h2>
            <div className={styles.sectionContents}>
              <div className={styles.members}>
                {undergraduateStudents.map((member) => {
                  return (
                    <div className={styles.content} key={member.name}>
                      <figure className={styles.img}>
                        <img src={member.imgUrl} alt="" />
                      </figure>
                      <p className={styles.title}>{member.title}</p>
                      <h3 className={styles.name}>{member.name}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </InView>
          <InView
            as="section"
            onChange={(inView) => onChangeIntersection(inView, "alumni")}
            className={styles.section}
            id="alumni"
            threshold={0.5}
          >
            <h2 className={styles.sectionTitle}>Alumni</h2>
            <div className={styles.alumni}>
              {alumni.map((item) => {
                return (
                  <section className={styles.yearSection} key={item.year}>
                    <h3 className={styles.alumniYear}>{item.year}</h3>
                    <div className={styles.degreeSectionWrapper}>
                      {item.members.map((m) => (
                        <section className={styles.degreeSection}>
                          <h4 className={styles.alumniDegree}>{m.degree}</h4>
                          <ul className={styles.alumniList}>
                            {m.list.map((l) => (
                              <li className={styles.alumniName}>{l}</li>
                            ))}
                          </ul>
                        </section>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </InView>
        </div>
        <aside className={styles.side}>
          <a
            className={cx(
              styles.menu,
              currentSection === "researchStaffs" && styles.active
            )}
            href="#researchStaffs"
          >
            Research Staffs
          </a>
          <a
            className={cx(
              styles.menu,
              currentSection === "visitingResearchers" && styles.active
            )}
            href="#visitingResearchers"
          >
            Visiting Researchers
          </a>
          <a
            className={cx(
              styles.menu,
              currentSection === "administrativeStaffs" && styles.active
            )}
            href="#administrativeStaffs"
          >
            Administrative Staffs
          </a>
          <a
            className={cx(
              styles.menu,
              currentSection === "phdStudents" && styles.active
            )}
            href="#phdStudents"
          >
            Ph.D Students
          </a>
          <a
            className={cx(
              styles.menu,
              currentSection === "masterStudents" && styles.active
            )}
            href="#masterStudents"
          >
            Master Students
          </a>
          <a
            className={cx(
              styles.menu,
              currentSection === "undergraduateStudents" && styles.active
            )}
            href="#undergraduateStudents"
          >
            Undergraduate Students
          </a>
          <a
            className={cx(
              styles.menu,
              currentSection === "alumni" && styles.active
            )}
            href="#alumni"
          >
            Alumni
          </a>
        </aside>
      </div>
    </Main>
  );
};

export default Team;

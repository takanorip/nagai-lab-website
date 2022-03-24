import React, { FC } from "react";
import Main from "../common/Main";
import styles from "./Project.module.css";

type Props = {
  title: string;
  mainVisualUrl?: string;
  author: string;
  mainPublications?: string[];
}

const Project: FC<Props> = ({ children, title, mainVisualUrl, author, mainPublications }) => {
  return (
    <Main>
      <div className={styles.project}>
        <h1 className={styles.title}>{title}</h1>
        {mainVisualUrl && <figure className={styles.mainVisual}><img src={mainVisualUrl} alt="" /></figure>}
        <div className={styles.content}>
          {children}
        </div>
        <div className={styles.box}>
          <p className={styles.author}>
            <span>Author</span>
            {author}
          </p>
          <div className={styles.mainPublications}>
            <p className={styles.mainPublicationsTitle}>Main Publications</p>
            {mainPublications && (
              <ul className={styles.mainPublicationsList}>
                {mainPublications.map(item => <li>{item}</li>)}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Project;

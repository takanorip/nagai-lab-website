import React from "react";
import Main from "../common/Main";
import { dictionary } from "../../i18n/access";
import styles from "./Access.module.css";

type Props = {
  lang?: "en" | "ja";
};

const Access = ({ lang = "ja" }: Props) => {
  return (
    <Main>
      <div className={styles.wrapper}>
        <div className={styles.mapWrapper}>
          <div className={styles.addressBox}>
            <h2 className={styles.name}>
              <span>{dictionary.osakaName1[lang]}</span>
              <span>{dictionary.osakaName2[lang]}</span>
            </h2>
            <p className={styles.address}>
              <span>〒560-8531</span>
              <span>{dictionary.osakaAddress[lang]}</span>
            </p>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.072167570087!2d135.45322531620323!3d34.804126180407984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000fa8710d95fa1%3A0x73ba84fb4c2418b1!2z5aSn6Ziq5aSn5a2mIOWfuuekjuW3peWtpumDqOODu-Wkp-WtpumZouWfuuekjuW3peWtpueglOeptuenkQ!5e0!3m2!1sja!2sjp!4v1647921998402!5m2!1sja!2sjp"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className={styles.mapWrapper}>
          <div className={styles.addressBox}>
            <h2 className={styles.name}>
              <span>{dictionary.uecName1[lang]}</span>
              <span>{dictionary.uecName2[lang]}</span>
            </h2>
            <p className={styles.address}>
              <span>〒182-8585</span>
              <span>{dictionary.uecAddress[lang]}</span>
            </p>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2214.1805787698963!2d139.5431528621115!3d35.658535397334845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f0141c587615%3A0xe510b22e7670f20b!2z6Zu75rCX6YCa5L-h5aSn5a2m!5e0!3m2!1sja!2sjp!4v1648007823505!5m2!1sja!2sjp"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Access;

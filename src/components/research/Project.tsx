import React, { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "/node_modules/swiper/swiper.min.css";
import Main from "../common/Main";
import Button from "../common/Button";
import styles from "./Project.module.css";
import "./Slide.css";
import { useBudouX } from "../../utils/useBudoux";

type Props = {
  title: string;
  subTitle: string;
  mainVisualUrl?: string;
  author: string;
  mainPublications?: string[];
  slideImages?: string[];
};

const Project: FC<Props> = ({
  children,
  title,
  subTitle,
  mainVisualUrl,
  author,
  mainPublications,
  slideImages,
}) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const slidePrev = () => {
    swiperRef.slidePrev();
  };
  const slideNext = () => {
    swiperRef.slideNext();
  };

  return (
    <Main>
      <div className={styles.project}>
        <h1 className={styles.title}>
          {useBudouX(title)}
          {subTitle ? (
            <span className={styles.subTitle}>{useBudouX(subTitle)}</span>
          ) : null}
        </h1>
        {mainVisualUrl && (
          <figure className={styles.mainVisual}>
            <img loading="lazy" src={mainVisualUrl} alt="" />
          </figure>
        )}
        <div className={styles.content}>{children}</div>
        {slideImages && slideImages.length > 0 && (
          <div className={styles.slideWrapper}>
            <Swiper
              onSwiper={(swiper) => {
                setSwiperRef(swiper);
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              pagination={{
                type: "progressbar",
              }}
              modules={[Pagination]}
              className="slide"
            >
              {slideImages.map((image, index) => (
                <SwiperSlide key={image}>
                  <figure className={styles.slideImageWrapper}>
                    <img
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className={styles.slideImage}
                      src={image}
                      alt=""
                    />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.control}>
              <button
                onClick={() => slidePrev()}
                disabled={isBeginning}
                className={styles.controlButton}
                type="button"
                ariaLabel="Got to Prev"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 30L15 20L25 10"
                    stroke="currentColor"
                    strokeWidth="3.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => slideNext()}
                disabled={isEnd}
                className={styles.controlButton}
                type="button"
                ariaLabel="Got to Next"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 30L25 20L15 10"
                    stroke="currentColor"
                    strokeWidth="3.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        <div className={styles.box}>
          <p className={styles.author}>
            <span>Author</span>
            {author}
          </p>
          {mainPublications && (
            <div className={styles.mainPublications}>
              <p className={styles.mainPublicationsTitle}>Main Publications</p>
              <ul className={styles.mainPublicationsList}>
                {mainPublications.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={styles.backToList}>
          <Button type={"outlined"} href="/research#topics">
            Back to list
          </Button>
        </div>
      </div>
    </Main>
  );
};

export default Project;

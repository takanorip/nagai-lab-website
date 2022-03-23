import React, { useState, useCallback, ChangeEventHandler } from "react";
import Main from "../common/Main";
import PageHeader from "../common/PageHeader";
import Select from "../common/Select";
import NewsCard from "./NewsCard";
import styles from "./News.module.css";
import { news } from '../../data/news';
import { range } from '../../utils/number'

type Props = {
  lang?: "en" | "ja";
};

const filter = (year: string) => {
  if (year === '') {
    return news
  }
  return news.filter(n => n.date.includes(year))
}

const News = ({ lang = 'ja' }: Props) => {
  const thisYear = new Date().getFullYear();
  const years = [...range(2016, thisYear)];

  const [filteredNews, setFilteredNews] = useState(news);
  const [selectedValue, setSelectedValue] = useState(years[0]);
  const onChange: ChangeEventHandler<HTMLSelectElement> = useCallback((event) => {
    const value = event.target.value;
    setSelectedValue(value);
    setFilteredNews(filter(value));
  }, []);

  return (
    <Main>
      <PageHeader>News</PageHeader>
      <div className={styles.section}>
        <div className={styles.select}>
          <Select value={selectedValue} onChange={onChange}>
            <option value="">All</option>
            {years.map(y => (
              <option value={y}>{y}</option>
            ))}
          </Select>
        </div>
        <div className={styles.list}>
          {filteredNews.map(({ date, title, url }) => (
            <NewsCard
              date={date}
              title={title}
              url={url}
            />
          ))}
        </div>
      </div>
    </Main>
  );
};

export default News;

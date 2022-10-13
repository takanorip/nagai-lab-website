import React, {
  useState,
  useCallback,
  useMemo,
  ChangeEventHandler,
} from "react";
import Main from "../common/Main";
import PageHeader from "../common/PageHeader";
import Select from "../common/Select";
import NewsCard from "./NewsCard";
import styles from "./News.module.css";
import { news } from "../../data/news";
import { range } from "../../utils/number";

type Props = {
  lang?: "en" | "ja";
};

const filter = (year: string) => {
  if (year === "") {
    return news;
  }
  return news.filter((n) => n.date.includes(year));
};

const News = ({ lang = "ja" }: Props) => {
  const thisYear = useMemo(() => new Date().getFullYear(), []);
  const years = useMemo(() => [...range(2016, thisYear)].reverse(), []);

  const [filteredNews, setFilteredNews] = useState(news);
  const [selectedValue, setSelectedValue] = useState("");
  const onChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (event) => {
      const value = event.target.value;
      setSelectedValue(value);
      setFilteredNews(filter(value));
    },
    []
  );

  return (
    <Main>
      <PageHeader>News</PageHeader>
      <div className={styles.section}>
        <div className={styles.select}>
          <Select value={selectedValue} onChange={onChange}>
            <option value="">All</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </Select>
        </div>
        <div className={styles.list}>
          {filteredNews.map(({ date, title, url }) => (
            <NewsCard key={title} date={date} title={title} url={url} />
          ))}
        </div>
      </div>
    </Main>
  );
};

export default News;

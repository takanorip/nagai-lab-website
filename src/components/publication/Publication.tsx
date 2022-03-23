import React, {
  useState,
  useCallback,
  useMemo,
  ChangeEventHandler,
} from "react";
import Main from "../common/Main";
import PageHeader from "../common/PageHeader";
import Select from "../common/Select";
import { publications } from "../../data/publication";
import { range } from "../../utils/number";
import styles from "./Publication.module.css";

const filter = (year: string) => {
  if (year === "") {
    return publications;
  }
  return publications.filter((n) => n.year === Number(year));
};

const Publication = () => {
  const [filteredData, setFilteredData] = useState(publications);
  const [selectedValue, setSelectedValue] = useState("");
  const onChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (event) => {
      const value = event.target.value;
      setSelectedValue(value);
      setFilteredData(filter(value));
    },
    []
  );

  return (
    <Main>
      <PageHeader>Publication</PageHeader>
      <div className={styles.section}>
        <div className={styles.select}>
          <Select value={selectedValue} onChange={onChange}>
            <option value="">All</option>
            {publications
              .filter((p) => p.contents.length > 0)
              .map(({ year }) => (
                <option key={year} value={year}>{year}</option>
              ))}
          </Select>
        </div>
        <div className={styles.publications}>
          {filteredData.map(({ year, contents }) => {
            if (contents.length === 0) return null;
            return (
              <div key={year} className={styles.contents}>
                <p className={styles.year}>{year}</p>
                <div className={styles.listWrapper}>
                  {contents.map((c) => {
                    if (c.items.length === 0) return null;
                    return (
                      <div key={year + c.title} className={styles.category}>
                        <p className={styles.title}>{c.title}</p>
                        <ul className={styles.list}>
                          {c.items.map((item) => {
                            if (item.url !== "")
                              return (
                                <li key={item.text} className={styles.item}>
                                  <a href={item.url}>{item.text}</a>
                                </li>
                              );
                            return <li key={item.text} className={styles.item}>{item.text}</li>;
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Main>
  );
};

export default Publication;

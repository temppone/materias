import React from "react";
import styles from "./MateriasText.module.css";

const MateriasText = () => {
  const [materias, setMaterias] = React.useState(null);

  React.useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=0ffcfec384c045b3abcf61819db38d9d"
    ).then((r) => r.json().then((json) => setMaterias(json)));
  }, []);

  if (materias === null) return null;

  return (
    <div>
      {materias.articles.map((materia) => (
        <section key={materia.url} className={styles.materia}>
          <h1>{materia.title}</h1>
          <p>{materia.content}</p>
          <div className={styles.authorBox}>
            <div className={styles.authorBar}></div>
            {/* <div className={styles.author}>{materia.author}</div> */}
            <a href={materia.url}>Link</a>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MateriasText;

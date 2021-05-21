import React from "react";
import styles from "./MateriasText.module.css";

const MateriasText = () => {
  const [materias, setMaterias] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchMateria(url) {
      try {
        setLoading(true);
        const r = await fetch(url);
        const json = await r.json();
        setMaterias(json);
      } catch (erro) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }
    fetchMateria(
      "https://newsapi.org/v2/top-headlines?country=br&apiKey=0ffcfec384c045b3abcf61819db38d9d"
    );
  }, []);

  if(loading) return <div className="growUp"></div>
  if(error) return <p>{error}</p>
  if (materias === null) return null;

  return (
    <div>
      {materias.articles.map((materia) => (
        <section key={materia.url} className={`${styles.materia} animeDown`}>
          <a href={materia.url} target="_blank">
            <h1>{materia.title}</h1>
          </a>
          <p>{materia.content}</p>
          <div className={styles.linkBox}>
            <div className={styles.linkBar}></div>
            <a href={materia.url} target="_blank">
              Leia mais
            </a>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MateriasText;

import TecnologieType from "@/types/Technologies";

const technologieData: TecnologieType[] = [
  {
    index: 1,
    technologie: "Javascript",
    typeSkill: "Programming",
    iconTec: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  }, {
    index: 2,
    technologie: "HTML",
    typeSkill: "Programming",
    iconTec: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  }, {
    index: 3,
    technologie: "CSS",
    typeSkill: "Programming",
    iconTec: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  }, {
    index: 4,
    technologie: "Java",
    typeSkill: "Programming",
    iconTec: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
  }, {
    index: 5,
    technologie: "Typescript",
    typeSkill: "Programming",
    iconTec: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  }, {
    index: 6,
    technologie: "React",
    typeSkill: "Framework",
    iconTec: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  }, {
    index: 7,
    technologie: "React Native",
    typeSkill: "Framework",
    iconTec: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  }, {
    index: 8,
    technologie: "Mysql",
    typeSkill: "Database",
    iconTec: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg"
  }, {
    index: 9,
    technologie: "PostgreSQL",
    typeSkill: "Database",
    iconTec: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  }, {
    index: 10,
    technologie: "Sqlite",
    typeSkill: "Database",
    iconTec: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
  }, {
    index: 11,
    technologie: "PHP",
    typeSkill: "Programming",
    iconTec: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
  }, {
    index: 12,
    technologie: "NodeJs",
    typeSkill: "Framework",
    iconTec: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  }
]

const Technologie = () => {
  return (
    <div className="container__tecnologie__title" id="Technologie">
      <h2>Tecnologias</h2>
      <section className="container__technologie">
        <main className="container__technologie__content">
          {technologieData.map(({ index, iconTec, technologie }) => {
            return (
              <figure key={index} className="figure__technologie">
                <img src={iconTec} alt={technologie} width={100} height={100} />
                <label key={index}>{technologie}</label>
              </figure>
            );
          })}
        </main>
      </section>
    </div>
  );
}

export default Technologie;
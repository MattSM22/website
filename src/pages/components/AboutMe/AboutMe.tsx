import Academy from "@/types/Academy";

const AcademyData: Academy[] = [
  {
    index: 1,
    iconFinishedOrNot: "https://icon-library.com/images/graduation-icon-vector/graduation-icon-vector-23.jpg",
    typeCourse: "Técnico de Informática",
    institute: "ETEC de Heliópolis",
    degree: "Técnico",
    concluded: true,
    startsAt: "02/2016",
    endAt: "12/2018"
  },{
    index: 2,
    iconFinishedOrNot: "https://icon-library.com/images/graduation-icon-vector/graduation-icon-vector-23.jpg",
    typeCourse: "Ciência da Computação",
    institute: "Universidade Nove de Julho",
    degree: "Bacharelado",
    concluded: true,
    startsAt: "02/2019",
    endAt: "12/2022"
  }
]

const AboutMe = () => {
  return (  
    <section className="container__about" id="About">
      <h2>Um pouco sobre mim</h2>
      <article className="container__about__text">
        <p>
          Tenho como foco a área de programação, tentando 
          sempre me manter atualizado sobre as novas tecnologias, 
          busco por experiências em que eu possa aprender e também poder 
          agregar ao grupo. Tenho algumas experiências como programador 
          dando suporte a projetos que já estavam no mercado 
          e no desenvolvimento de novos softwares.
        </p>
      </article>
      <h2>Cursos e Graduções</h2>
      <main className="container__about__academy">
        {AcademyData.map(({ index, iconFinishedOrNot , typeCourse, institute, degree, concluded, startsAt, endAt }) => {
          return (
              <section key={index} className="container__about__academy__banner">
                { concluded ? <figure><img src={iconFinishedOrNot} alt="Formado" width={100} height={100} /></figure> : <figure><img src={iconFinishedOrNot} alt="Estudadando" width={100} height={100} /></figure> }
                <span>{typeCourse}</span>
                <span>{institute}</span>
                <span>{degree}</span>
                <div className="container__about__academy__banner-row">
                  <span>{startsAt}</span>
                  <p>~</p>
                  { concluded ? <span>{endAt}</span> : <span>Cursando</span> }
                </div>
              </section>
          );
        })}
      </main>
    </section>
  );
}

export default AboutMe;
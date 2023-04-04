import Midia from "@/types/Midias";

const MidiaData: Midia[] = [
  {
    index: 1,
    nameMidia: "LinkedIn",
    iconMidia: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    nameUser: "Matheus Silva Magalhães",
    link: "https://www.linkedin.com/in/mattsm-dev/",
  },
  {
    index: 2,
    nameMidia: "Instagram",
    iconMidia: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
    nameUser: "@mathh.mag",
    link: "https://www.instagram.com/mathh.mag/"
  },
  {
    index: 3,
    nameMidia: "Github",
    iconMidia: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    nameUser: "MattSM22",
    link: "https://github.com/MattSM22"
  },
]

const Midias = () => {
  return (
    <main className="container__midias" id="Midias">
      <h2>Midias Sociais</h2>
      <section className="container__midias__data">
        {MidiaData.map(({ index, nameMidia, iconMidia, nameUser , link }) => {
          return (
            <article key={index} className="container__midias__data__content">
              <figure className="container__midias__data__figure" >
                <img src={iconMidia} alt={nameMidia} width={50} height={50} />
              </figure>
              <p>{nameUser}</p>
              <a href={link}>Entre em contato pelo {nameMidia}</a>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Midias;
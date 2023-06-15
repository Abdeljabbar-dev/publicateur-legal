import React from "react";
import Link from "next/link";

export default function Annonces(props) {
  const announcementsTypes = [
    {
      title: "Annonce Constitution  Société A Responsabilité Limitée (SARL)",
      description: "Création d'entreprise",
      link: "creation-sarl",
    },
    {
      title:
        "Annonce Constitution Société A Responsabilité Limitée à associés Unique (SARL AU)",
      description: "Création d'entreprise",
      link: "creation-sarl-au",
    },
    {
      title: "Annonce légale changement de la dénomination sociale",
      description: "Création d'entreprise",
      link: "change-denomination-sociale",
    },
    {
      title: "Annonce légale modification du capital social",
      description: "Création d'entreprise",
      link: "modification-capital-social",
    },
    {
      title: "Annonce légale modification Transfert siège",
      description: "Création d'entreprise",
      link: "modification-transfert-siege",
    },
    {
      title: "Annonce légale modification changement d’objet social",
      description: "Création d'entreprise",
      link: "change-objet-social",
    },
    {
      title:
        "Formulaire de modification – Poursuite des activités sociales malgré les pertes",
      description: "Création d'entreprise",
      link: "poursuite-activites-sociales-malgre-pertes",
    },
    {
      title: "Formulaire de modification – Prorogation de durée",
      description: "Création d'entreprise",
      link: "prorogation-duree",
    },
    {
      title: "Formulaire d’annonce légale plusieurs modifications",
      description: "Création d'entreprise",
      link: "plusieurs-modifications",
    },
    {
      title: "Annonce légale de modification – Ajout ou changement de Gérant",
      description: "Création d'entreprise",
      link: "ajout-changement-gerant",
    },
    {
      title: "Annonce Légale Clôture de Liquidation",
      description: "Création d'entreprise",
      link: "cloture-de-liquidation",
    },
    {
      title: "Annonce Légale de Dissolution d’une SARL",
      description: "Création d'entreprise",
      link: "dissolution-sarl",
    },
  ];

  return (
    <React.Fragment>
      <div className="container text-center my-7">
        <h1 className="font-weight-bold">Publier votre annonce</h1>
        <p className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="container">
        <div className="row px-3">
          <h4>Annonces Professionnels</h4>
          <div className="line"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {announcementsTypes.map((ann) => (
            <div className="col-md-6 col-lg-4 col-12 mb-5">
              <Link href={"annonces/" + ann.link}>
                <div className="annonce-card">
                  <img src="/images/doc-icon.svg" style={{ width: 70 }} />
                  <h6 className="font-weight-bold mt-3 mb-1">{ann.title}</h6>
                  <div className="desc">{ann.description}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="py-4 my-4" />
      <div className="container">
        <div className="row px-3">
          <h4>Annonces Particulier</h4>
          <div className="line"></div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 col-12 mb-5">
            <Link href="annonces/creation-sarl">
              <div className="annonce-card annonce-partculier">
                <div className="icon">🚗</div>
                <h5 className="mt-1">Vehicules</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-6 col-lg-4 col-12 mb-5">
            <Link href="annonces/creation-sarl">
              <div className="annonce-card annonce-partculier">
                <div className="icon">⚽️</div>
                <h5 className="mt-1">Sport</h5>
              </div>
            </Link>
          </div>
          <div className="col-md-6 col-lg-4 col-12 mb-5">
            <Link href="annonces/creation-sarl">
              <div className="annonce-card annonce-partculier">
                <div className="icon">💻</div>
                <h5 className="mt-1">Informatique</h5>
              </div>
            </Link>
          </div>
        </div>

        <div className="py-4 my-4" />
      </div>

      <style jsx>{`
        .annonce-card {
          background-color: #eeeef0;
          border-radius: 20px;
          padding: 30px 30px;
          cursor: pointer;
          height: 230px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: var(--main-color);
        }

        .annonce-card img {
          position: absolute;
          top: 30px;
          left: 40px;
        }

        .annonce-partculier {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .annonce-partculier .icon {
          font-size: 60px;
        }

        .annonce-partculier h5 {
          text-transform: uppercase;
          font-weight: bold;
        }
      `}</style>
    </React.Fragment>
  );
}

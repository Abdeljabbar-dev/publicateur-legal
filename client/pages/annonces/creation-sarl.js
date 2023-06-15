import { useState, useEffect } from "react";

import Select from "src/components/Select";
import Input from "src/components/Input";
import TextArea from "src/components/TextArea";

import { Formik } from "formik";
import * as Yup from "yup";
import { useAuth } from "src/utils/auth";

const TYPE_ANNONCE = "CREATION_SARL";

export default function creationAnnonce() {
  const auth = useAuth();

  const onSubmit = function (values) {
    if (auth.isAuthenticated) createAnnonce(values);
    else toggleModal(true);
  };

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  const createAnnonce = async function (values) {
    console.log();
  };

  const onAuthSuccess = function () {
    toggleModal(false);
    createAnnonce();
  };

  const validationSchema = Yup.object().shape({
    année_sociale: Yup.string().required(),
    associé: Yup.string().required(),
    associé_1_nom: Yup.string().required(),
    associé_1_prenom: Yup.string().required(),
    associé_2_nom: Yup.string().required(),
    associé_2_prenom: Yup.string().required(),
    capital: Yup.string().required(),
    date: Yup.string().required(),
    durée: Yup.string().required(),
    dénomination: Yup.string().required(),
    nom_societé: Yup.string().required(),
    dépôt_légal_date: Yup.string().required(),
    dépôt_légal_lieu: Yup.string().required(),
    dépôt_légal_numero: Yup.string().required(),
    email: Yup.string().required(),
    forme_juridique: Yup.string().required(),
    gérant_nom: Yup.string().required(),
    gérant_prénom: Yup.string().required(),
    gérant_titre: Yup.string().required(),
    nom_complet: Yup.string().required(),
    objet: Yup.string().required(),
    parts_sociales: Yup.string().required(),
    parts_sociales_1: Yup.string().required(),
    rc: Yup.string().required(),
    tel: Yup.string().required(),
    termes: Yup.string().required(),
    titre: Yup.string().required(),
    type_société: Yup.string().required(),
  });

  const initialValues = {
    année_sociale: "",
    associé: "",
    associé_1_nom: "",
    associé_1_prenom: "",
    associé_2_nom: "",
    associé_2_prenom: "",
    capital: "",
    date: "",
    durée: "",
    dénomination: "",
    nom_societé: "",
    dépôt_légal_date: "",
    dépôt_légal_lieu: "",
    dépôt_légal_numero: "",
    email: "",
    forme_juridique: "",
    gérant_nom: "",
    gérant_prénom: "",
    gérant_titre: "",
    nom_complet: "",
    objet: "",
    parts_sociales: "",
    parts_sociales_1: "",
    rc: "",
    tel: "",
    termes: "",
    titre: "",
    type_société: "",
  };

  return (
    <>
      <div className="left-bar pb-4">
        <div className="py-4"></div>
        <div className="container mt-4">
          <div className="row">
            <div className="form col-md-7 col-12">
              <h5 className="mb-4">Veulliez Remplir la formulaire</h5>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(props) => (
                  <>
                    <div>
                      <span>Personne à contacter</span>

                      <Select
                        name="titre"
                        width={60}
                        placeholder="Titre"
                        options={["Mr", "Mme"]}
                      />
                      <Input
                        name="nom_complet"
                        style={{ width: 140 }}
                        placeholder="Nom Complet"
                      />
                    </div>

                    <div>
                      <span>Email</span>{" "}
                      <Input name="email" placeholder="exemple@mail.com" />
                    </div>

                    <div>
                      <span>Téléphone</span>{" "}
                      <Input name="tel" placeholder="0 612 345 678" />
                    </div>

                    <h6 className="mt-4 mb-0">Société</h6>

                    <div>
                      <span>Registre de commerce</span>{" "}
                      <Input name="rc" placeholder="1234567" />
                    </div>

                    <div>
                      <span>Aux termes d’un </span>
                      <Select
                        name="termes"
                        width={300}
                        options={[
                          "Société A Responsabilité Limitée",
                          "Société à Responsabilité Limitée à Associé Unique",
                        ]}
                      />
                      <span>en date de </span>
                      <Input name="date" width={80} placeholder="dd/mm/yyyy" />
                      <span>
                        il a été établi les statuts d’une société à
                        Responsabilité limitée
                      </span>
                      <Select
                        name="associé"
                        width={140}
                        options={["associe unique"]}
                      />
                      <Select
                        name="type_société"
                        width={70}
                        options={["SARL", "SARL AU"]}
                      />
                      <span>
                        dont les caractéristiques sont les suivantes :
                      </span>
                    </div>

                    <div className="mt-3">
                      <span>Forme juridique:</span>
                      <Select
                        name="forme_juridique"
                        width={300}
                        options={[
                          "Societé a responsabilité limité",
                          "Societé a responsabilité limité à associe unique",
                        ]}
                      />
                    </div>

                    <div>
                      <span>Dénomination:</span>
                      <Input
                        name="dénomination"
                        width={300}
                        placeholder="Nom de la societé"
                      />
                    </div>

                    <div>
                      <span>Objet: la société a pour objet</span>
                      <TextArea name="objet" />
                    </div>

                    <div>
                      <span>Adresse du siège social:</span>
                      <Input
                        width={300}
                        name="nom_societé"
                        placeholder="Nom de la societé"
                      />
                    </div>

                    <div>
                      <span>
                        Capital: le capital social est fixé à la somme de
                      </span>
                      <Input width={80} name="capital" />
                      <span>dirhams. Il est divisé en</span>
                      <Input width={80} name="parts_sociales" />
                      <span> PARTS SOCIALES de </span>
                      <Input width={80} name="parts_sociales_1" />
                      <span>
                        chacune, entièrement souscrites et libérées, et
                        attribuées aux associés:
                      </span>
                    </div>

                    <h6 className="mt-3">Les associés:</h6>
                    <div>
                      <Input
                        placeholder="Nom"
                        width={120}
                        name="associé_1_nom"
                      />
                      <Input
                        placeholder="Prénom"
                        width={120}
                        name="associé_1_prenom"
                      />
                      <span>parts</span>
                    </div>

                    <div>
                      <Input
                        placeholder="Nom"
                        width={120}
                        name="associé_2_nom"
                      />
                      <Input
                        placeholder="Prénom"
                        width={120}
                        name="associé_2_prenom"
                      />
                      <span>parts</span>
                    </div>

                    <div>
                      <span>Année sociale :</span>
                      <Input
                        width={120}
                        name="année_sociale"
                        placeholder="Commence le 1er Janvier et termine le 31 décembre de chaque année."
                      />
                    </div>

                    <div>
                      <span>Gérance:</span>
                      <Select
                        width={120}
                        name="gérant_titre"
                        options={["Mr", "Mme"]}
                      />
                      <Input placeholder="Nom" width={120} name="gérant_nom" />
                      <Input
                        placeholder="Prénom"
                        width={120}
                        name="gérant_prénom"
                      />
                      <span>pour une durée illilitée.</span>
                    </div>

                    <div>
                      <span>Durée:</span>
                      <Input width={120} name="durée" placeholder="99" />
                      <span>ans</span>
                    </div>

                    <div>
                      <span>Le dépôt légal a été effectué au</span>
                      <Select
                        width={200}
                        name="dépôt_légal_lieu"
                        options={[
                          "greffe du tribunal de commerce",
                          "Tribunal d'Instance",
                          "Centre Régional d'Investissement",
                        ]}
                      />
                      <span>de</span>
                      <Input
                        name="dépôt_légal_lieu"
                        placeholder="dépôt_légal_avatar"
                      />
                      <span>le</span>
                      <Input
                        name="dépôt_légal_date"
                        width={80}
                        placeholder="dd/mm/yyyy"
                      />
                      <span>sous le N°</span>
                      <Input name="dépôt_légal_numero" width={80} />
                      <span>.</span>
                    </div>

                    <div>
                      Pour extrait et mention LE GERANT En envoyant ce
                      formulaire, vous acceptez notre politique de
                      confidentialité.
                    </div>

                    {props.isValid && (
                      <button
                        type="submit"
                        onClick={props.handleSubmit}
                        className="btn btn-main mt-4 mb-4"
                      >
                        <span>Publier votre annonce</span>
                        <img
                          src="/images/arrow-light.svg"
                          width="24"
                          className="ml-2"
                        />
                      </button>
                    )}
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-info d-none d-md-block">
        <div className="sidebar-container">
          <div className="card">
            <div className="mr-4">
              <img src="/images/alert-dark.svg" width="40" />
            </div>
            <div>
              <h6>Annonce Constitution Société A Responsabilité Limitée</h6>
              <div>
                Création d’entreprise, modification de statuts, changement de
                gérance, de siège ou encore de durée, dissolution ou
                liquidation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

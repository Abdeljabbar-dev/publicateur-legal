import { useState, useEffect } from "react";

import Select from "src/components/Select";
import Input from "src/components/Input";
import TextArea from "src/components/TextArea";

import { Formik } from "formik";
import * as Yup from "yup";

export default function creationAnnonce() {
  const onSubmit = function (values) {};

  const createAnnonce = async function () {};

  const onAuthSuccess = function () {
    createAnnonce();
  };

  const validationSchema = Yup.object().shape({
    adresse_siege: Yup.string().required(),
    adresse_compl: Yup.string().required(),
    capital: Yup.string().required(),
    capitale_variable: Yup.string().required(),
    change_admin: Yup.string().required(),
    change_capital: Yup.string().required(),
    change_commissaire: Yup.string().required(),
    change_dénomination: Yup.string().required(),
    change_gerant: Yup.string().required(),
    change_objet: Yup.string().required(),
    code_postal: Yup.string().required(),
    date_assemblée: Yup.string().required(),
    date_effet: Yup.string().required(),
    date_nouvelle: Yup.string().required(),
    dénomination: Yup.string().required(),
    departement_siege: Yup.string().required(),
    forme: Yup.string().required(),
    ville_greffe: Yup.string().required(),
    nom_complet: Yup.string().required(),
    nmbr_annee: Yup.string().required(),
    par_decision: Yup.string().required(),
    rcs: Yup.string().required(),
    sigle: Yup.string().required(),
    tel: Yup.string().required(),
    texte: Yup.string().required(),
    titre: Yup.string().required(),
    type_société: Yup.string().required(),
    ville: Yup.string().required(),
  });

  const initialValues = {
    adresse_compl: "",
    adresse_siege: "",
    capital: "",
    capitale_variable: "",
    change_admin: "",
    change_capital: "",
    change_commissaire: "",
    change_dénomination: "",
    change_gerant: "",
    change_objet: "",
    code_postal: "",
    date_assemblée: "",
    date_effet: "",
    date_nouvelle: "",
    dénomination: "",
    departement_siege: "",
    forme: "",
    ville_greffe: "",
    nom_complet: "",
    nmbr_annee: "",
    par_decision: "",
    rcs: "",
    sigle: "",
    tel: "",
    texte: "",
    titre: "",
    type_société: "",
    ville: "",
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
                      <span>Téléphone</span>{" "}
                      <Input name="tel" placeholder="0 612 345 678" />
                    </div>

                    <h6 className="mt-4 mb-0">Société</h6>

                    <div>
                      <span>Dénomination:</span>{" "}
                      <Input
                        name="dénomination"
                        placeholder="Nom de la societé"
                      />
                    </div>

                    <div>
                      <span>Sigle:</span>{" "}
                      <Input name="sigle" placeholder="Sigle" />
                    </div>

                    <div>
                      <span>Forme</span>
                      <Select
                        name="forme"
                        width={200}
                        placeholder="SARL"
                        options={[
                          "SARL",
                          "SARL à capitale variable",
                          "EURL",
                          "SCI",
                          "SCI à capitale variable",
                          "SNC",
                          "SA",
                          "SAS",
                          "SAS à capitale variable",
                          "SASU",
                          "SELARL",
                          "Société Civile",
                          "Société Civile de moyens",
                        ]}
                      />
                      <Input type="checkbox" name="capitale_variable" />
                      <label htmlFor="capitale_variable">
                        À capital variable
                      </label>
                    </div>

                    <div className="mt-3">
                      <span>Capital:</span>
                      <Input name="capital" width={300} placeholder="" />
                      <span>DHS</span>
                    </div>

                    <h6 className="mt-4 mb-0">Siège social et AG</h6>

                    <div>
                      <span>Adresse:</span>
                      <Input name="adresse_siege" placeholder="" />
                    </div>

                    <div>
                      <span>Adresse compl.:</span>
                      <Input name="adresse_compl" placeholder="" />
                    </div>

                    <div>
                      <span>Code postal:</span>
                      <Input name="code_postal" placeholder="123456" />
                    </div>

                    <div>
                      <span>Ville:</span>
                      <Input name="ville" placeholder="" />
                    </div>

                    <div>
                      <span>N° RCS:</span>
                      <Input name="rcs" placeholder="123456" />
                    </div>

                    <div>
                      <span>Département siège social:</span>
                      <Input name="departement_siege" placeholder="" />
                    </div>

                    <div>
                      <span>Ville du greffe:</span>
                      <Input name="ville_greffe" placeholder="" />
                    </div>

                    <div>
                      <span>Par décision</span>
                      <Select
                        name="par_decision"
                        width={200}
                        placeholder="AG Extraordinaire"
                        options={[
                          "AG Extraordinaire",
                          "AG Ordinaire",
                          "AG Mixte",
                          "Le Gérant",
                          "Le Président",
                          "Conseil d'administration",
                          "L'associé unique",
                        ]}
                      />
                    </div>

                    <div>
                      <span>Date de l'assemblée</span>
                      <Input
                        name="date_assemblée"
                        width={80}
                        placeholder="dd/mm/yyyy"
                      />
                    </div>

                    <div>
                      <span>Date effet</span>
                      <Input
                        name="date_effet"
                        width={80}
                        placeholder="dd/mm/yyyy"
                      />
                    </div>

                    <h6 className="mt-4 mb-0">
                      Date d'expiration de la société
                    </h6>

                    <div>
                      <span>Nouvelle date</span>
                      <Input
                        name="date_nouvelle"
                        width={80}
                        placeholder="dd/mm/yyyy"
                      />
                    </div>

                    <div>
                      <span>Extension en nombre d'années</span>
                      <Input name="nmbr_annee" width={80} placeholder="" />
                    </div>

                    <h6 className="mt-4 mb-0">
                      Autres modifications éventuelles
                    </h6>

                    <div>
                      <Input type="checkbox" name="change_gerant" />
                      <label htmlFor="change_gerant">
                        Changement de gérant / président
                      </label>
                    </div>

                    <div>
                      <span>Changement d'objet social</span>
                      <TextArea name="change_objet" />
                    </div>

                    <div>
                      <Input type="checkbox" name="change_dénomination" />
                      <label htmlFor="change_dénomination">
                        Changement de dénomination
                      </label>
                    </div>

                    <div>
                      <Input type="checkbox" name="change_admin" />
                      <label htmlFor="change_admin">
                        Changement d'administrateur
                      </label>
                    </div>

                    <div>
                      <Input type="checkbox" name="change_commissaire" />
                      <label htmlFor="change_commissaire">
                        Changement de commissaire aux comptes
                      </label>
                    </div>

                    <div>
                      <Input type="checkbox" name="change_capital" />
                      <label htmlFor="change_capital">
                        Changement de capital
                      </label>
                    </div>

                    <div>
                      <span>Texte en rédaction libre</span>
                      <TextArea name="texte" />
                    </div>

                    <div>
                      Pour extrait et mention LE GERANT En envoyant ce
                      formulaire, vous acceptez notre politique de
                      confidentialité.
                    </div>

                    {props.isValid && (
                      <button
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

import { useState, useEffect } from "react";

import Select from "src/components/Select";
import Input from "src/components/Input";
import TextArea from "src/components/TextArea";

import { Formik } from "formik";
import * as Yup from "yup";
import { useAuth } from "src/utils/auth";

export default function creationAnnonce() {
  const onSubmit = function (values) {};

  const createAnnonce = async function () {};

  const onAuthSuccess = function () {
    toggleModal(false);
    createAnnonce();
  };

  const validationSchema = Yup.object().shape({
    adresse_siege: Yup.string().required(),
    capital: Yup.string().required(),
    décision_date: Yup.string().required(),
    délibération_date: Yup.string().required(),
    dénomination: Yup.string().required(),
    dépôt_légal_date: Yup.string().required(),
    dépôt_légal_lieu: Yup.string().required(),
    dépôt_légal_numero: Yup.string().required(),
    dépôt_légal_ville: Yup.string().required(),
    dissolution_date: Yup.string().required(),
    email: Yup.string().required(),
    forme: Yup.string().required(),
    lieu_siège_liquidation: Yup.string().required(),
    liquidateur: Yup.string().required(),
    liquidateur_adresse: Yup.string().required(),
    nom_complet: Yup.string().required(),
    rc_num: Yup.string().required(),
    rc_ville: Yup.string().required(),
    tel: Yup.string().required(),
    titre: Yup.string().required(),
  });

  const initialValues = {
    adresse_siege: "",
    capital: "",
    décision_date: "",
    délibération_date: "",
    dénomination: "",
    dépôt_légal_date: "",
    dépôt_légal_lieu: "",
    dépôt_légal_numero: "",
    dépôt_légal_ville: "",
    dissolution_date: "",
    email: "",
    forme: "",
    lieu_siège_liquidation: "",
    liquidateur: "",
    liquidateur_adresse: "",
    nom_complet: "",
    rc_num: "",
    rc_ville: "",
    tel: "",
    titre: "",
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

                    <h6 className="mt-4 mb-0">
                      Annonce Légale de Dissolution d'une SARL
                    </h6>

                    <div>
                      <span>Dénomination Sociale :</span>{" "}
                      <Input
                        name="dénomination"
                        placeholder="dénomination de la SARL"
                      />
                      <Input name="forme" placeholder="SARL" />
                    </div>

                    <div>
                      <span>Adresse du siège social</span>
                      <Input name="adresse_siege" placeholder="" />
                    </div>

                    <div className="mt-3">
                      <span>Capital:</span>
                      <Input name="capital" width={300} placeholder="" />
                      <span>DHS</span>
                    </div>

                    <div>
                      <span>Numéro R.C :</span>
                      <Input name="rc_num" placeholder="123456" />
                    </div>

                    <div>
                      <span>R.C:</span>
                      <Input name="rc_ville" placeholder="ville" />
                    </div>

                    <div>
                      <span>I- Par décision en date du :</span>
                      <Input
                        name="décision_date"
                        width={80}
                        placeholder="dd/mm/yyyy"
                      />
                      <span>
                        , l’associé unique a décidé la dissolution anticipée de
                        la société à compter du :
                      </span>
                      <Input
                        name="dissolution_date"
                        width={80}
                        placeholder="dd/mm/yyyy"
                      />
                      <span>et sa mise en liquidation amiable.</span>
                    </div>

                    <div>
                      <Input
                        name="liquidateur"
                        placeholder="nom et prénom du liquidateur"
                      />
                      <span>demeurant</span>
                      <Input
                        name="liquidateur_adresse"
                        placeholder="adresse du liquidateur"
                      />
                      <span>
                        a été nommé en qualité de liquidateur. Les pouvoirs les
                        plus étendus pour terminer les opérations sociales en
                        cours, réaliser l’actif, acquitter le passif lui ont été
                        confiées. Le siège de liquidation est fixé au
                      </span>
                      <Input
                        name="lieu_siège_liquidation"
                        placeholder="lieu du siège de la liquidation"
                      />
                      <span>
                        , au même titre que l’adresse de correspondance.
                      </span>
                    </div>

                    <div>
                      <span>II- Le dépôt légal a été effectué au</span>
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
                      <Input name="dépôt_légal_ville" placeholder="la ville" />
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

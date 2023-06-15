import { useState, useEffect } from "react";

import Select from "src/components/Select";
import Input from "src/components/Input";
import TextArea from "src/components/TextArea";

import { Formik } from "formik";
import * as Yup from "yup";
import { useAuth } from "src/utils/auth";

import axios from "src/utils/axiosBackend";

export default function creationAnnonce() {
  const [isModalVisible, toggleModal] = useState(false);
  const auth = useAuth();

  const onSubmit = function (values) {
    toggleModal(true);
  };

  const createAnnonce = async function () {};

  const onAuthSuccess = function () {
    toggleModal(false);
    createAnnonce();
  };

  const validationSchema = Yup.object().shape({
    adresse_siege: Yup.string().required(),
    ajouter: Yup.string().required(),
    capital: Yup.string().required(),
    compter_du: Yup.string().required(),
    décision: Yup.string().required(),
    décision_date: Yup.string().required(),
    dénomination: Yup.string().required(),
    dépôt_légal_date: Yup.string().required(),
    dépôt_légal_lieu: Yup.string().required(),
    dépôt_légal_numero: Yup.string().required(),
    dépôt_légal_ville: Yup.string().required(),
    email: Yup.string().required(),
    forme: Yup.string().required(),
    nomination: Yup.string().required(),
    nom_complet: Yup.string().required(),
    num_article: Yup.string().required(),
    remplacement_de: Yup.string().required(),
    rc: Yup.string().required(),
    tel: Yup.string().required(),
    titre: Yup.string().required(),
  });

  const initialValues = {
    adresse_siege: "",
    ajouter: "",
    capital: "",
    compter_du: "",
    décision: "",
    décision_date: "",
    dénomination: "",
    dépôt_légal_date: "",
    dépôt_légal_lieu: "",
    dépôt_légal_numero: "",
    dépôt_légal_ville: "",
    email: "",
    forme: "",
    nomination: "",
    nom_complet: "",
    num_article: "",
    remplacement_de: "",
    rc: "",
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

                    <h6 className="mt-4 mb-0">Avis de changement de gérant</h6>

                    <div>
                      <span>Dénomination:</span>{" "}
                      <Input
                        name="dénomination"
                        placeholder="Nom de la societé"
                      />
                      <Select
                        name="forme"
                        width={200}
                        placeholder="SARL"
                        options={["SARL", "SARL AU"]}
                      />
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
                      <span>Registre de commerce:</span>
                      <Input name="rc" placeholder="123456" />
                    </div>

                    <div>
                      <span>I- Par décision </span>
                      <Select
                        name="décision"
                        width={200}
                        options={[
                          "de l'assemblée Générale Extraordinaire(AGE)",
                          "de l'assemblée Générale Ordinaire(AGO)",
                          "de l'assemblée Générale Mixte",
                          "de l'associé Unique",
                          "du conseil d'administration",
                          "les associés",
                          "par décision unanime",
                          "du gérant",
                          "du Président",
                        ]}
                      />
                      <span>, en date du</span>
                      <Input
                        name="décision_date"
                        width={80}
                        placeholder="dd/mm/yyyy"
                      />
                      <span>il a été décidé ce qui suit :</span>
                    </div>

                    <h6 className="mt-4 mb-0">Changement de gérance</h6>

                    <div>
                      <span>
                        La nomination d'un nouveau gérant de la société soit:
                      </span>
                      <Input name="nomination" placeholder="" />
                      <span>.</span>
                    </div>

                    <div>
                      <span>En remplacement de:</span>
                      <Input name="remplacement_de" placeholder="" />
                      <span>partant.</span>
                    </div>

                    <div>
                      <span>Modification des articles n°:</span>
                      <Input name="num_article" placeholder="" />
                      <span>des statuts.</span>
                    </div>

                    <div>
                      <span>Modifications à compter du :</span>
                      <Input name="compter_du" placeholder="dd/mm/yyyy" />
                      <span>.</span>
                    </div>

                    <div>
                      <span>Espace si vous avez autres choses à ajouter:</span>
                      <TextArea name="ajouter" />
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

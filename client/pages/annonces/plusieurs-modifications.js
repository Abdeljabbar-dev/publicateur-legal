import Select from "src/components/Select";
import Input from "src/components/Input";

import { Formik } from "formik";
import * as Yup from "yup";

export default function creationAnnonce() {
  const onSubmit = function (values) {};

  const createAnnonce = async function () {};

  const onAuthSuccess = function () {
    createAnnonce();
  };

  const validationSchema = Yup.object().shape({
    adresse_nouvelle: Yup.string().required(),
    adresse_siege: Yup.string().required(),
    capital: Yup.string().required(),
    capital_initial: Yup.string().required(),
    capital_nouveau: Yup.string().required(),
    change_capital: Yup.string().required(),
    change_dénomination: Yup.string().required(),
    change_gérance: Yup.string().required(),
    change_objet: Yup.string().required(),
    compter_du: Yup.string().required(),
    décision: Yup.string().required(),
    décision_date: Yup.string().required(),
    dénomination: Yup.string().required(),
    dénomination_par: Yup.string().required(),
    dépôt_légal_date: Yup.string().required(),
    dépôt_légal_lieu: Yup.string().required(),
    dépôt_légal_numero: Yup.string().required(),
    dépôt_légal_ville: Yup.string().required(),
    email: Yup.string().required(),
    extension_objet_par: Yup.string().required(),
    forme: Yup.string().required(),
    maj_statuts: Yup.string().required(),
    nom_complet: Yup.string().required(),
    nomination: Yup.string().required(),
    num_article: Yup.string().required(),
    par_decision: Yup.string().required(),
    remplacement_de: Yup.string().required(),
    rc: Yup.string().required(),
    tel: Yup.string().required(),
    texte: Yup.string().required(),
    titre: Yup.string().required(),
    transfert_siège: Yup.string().required(),
  });

  const initialValues = {
    adresse_nouvelle: "",
    adresse_siege: "",
    capital: "",
    capital_initial: "",
    capital_nouveau: "",
    change_capital: "",
    change_dénomination: "",
    change_gérance: "",
    change_objet: "",
    compter_du: "",
    décision: "",
    décision_date: "",
    dénomination: "",
    dénomination_par: "",
    dépôt_légal_date: "",
    dépôt_légal_lieu: "",
    dépôt_légal_numero: "",
    dépôt_légal_ville: "",
    email: "",
    extension_objet_par: "",
    forme: "",
    maj_statuts: "",
    nom_complet: "",
    nomination: "",
    num_article: "",
    par_decision: "",
    remplacement_de: "",
    rc: "",
    tel: "",
    titre: "",
    transfert_siège: "",
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
                      <Input name="email" placeholder="exemple@gmail.com" />
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

                    <div>
                      <Input type="checkbox" name="change_dénomination" />
                      <label htmlFor="change_dénomination">
                        Changement de dénomination
                      </label>
                    </div>

                    <div>
                      <Input type="checkbox" name="change_gérance" />
                      <label htmlFor="change_gérance">
                        Changement de gérance
                      </label>
                    </div>

                    <div>
                      <Input type="checkbox" name="transfert_siège" />
                      <label htmlFor="transfert_siège">
                        Transfert de siège
                      </label>
                    </div>

                    <div>
                      <Input type="checkbox" name="change_capital" />
                      <label htmlFor="change_capital">
                        Modofication de capital
                      </label>
                    </div>

                    <div>
                      <Input type="checkbox" name="change_objet" />
                      <label htmlFor="change_objet">
                        Changement de l'objet social
                      </label>
                    </div>

                    <h6 className="mt-4 mb-0">Changement de dénomination</h6>

                    <div>
                      <span>Le changement de la dénomination sociale par:</span>
                      <Input name="dénomination_par" placeholder="" />
                    </div>

                    <h6 className="mt-4 mb-0">Changement de l'objet social</h6>

                    <div>
                      <span>L'extension de l'objet social par:</span>
                      <Input name="extension_objet_par" placeholder="" />
                    </div>

                    <h6 className="mt-4 mb-0">Changement de gérance</h6>

                    <div>
                      <span>
                        La nomination d'un nouveau gérant de la société soit:
                      </span>
                      <Input name="nomination" placeholder="" />
                    </div>

                    <div>
                      <span>En remplacement de:</span>
                      <Input name="remplacement_de" placeholder="" />
                      <span>partant.</span>
                    </div>

                    <h6 className="mt-4 mb-0">Modification de capital</h6>

                    <div>
                      <span>
                        L'augmentation du capital social de la société afin de
                        le porter de :
                      </span>
                      <Input name="capital_initial" placeholder="" />
                      <span>dirhams à :</span>
                      <Input name="capital_nouveau" placeholder="" />
                      <span>dirhams.</span>
                    </div>

                    <h6 className="mt-4 mb-0">Transfert de siège</h6>

                    <div>
                      <span>
                        Le transfert du siège social de la société à l'adresse:
                      </span>
                      <Input name="adresse_nouvelle" placeholder="" />
                    </div>

                    <div>
                      <span>Modification des articles n°:</span>
                      <Input name="num_article" placeholder="" />
                      <span>des statuts.</span>
                    </div>

                    <div>
                      <span>Mise à jour des statuts:</span>
                      <Select
                        name="maj_statuts"
                        width={200}
                        options={["Mise à jours des statuts"]}
                      />
                    </div>

                    <div>
                      <span>Modifications à compter du :</span>
                      <Input name="compter_du" placeholder="dd/mm/yyyy" />
                      <span>.</span>
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

      <style jsx>{`
        .form {
          line-height: 50px;
        }

        .sidebar-info {
          min-height: calc(100vh - 100px);
          background: #efeff1;
          width: 40vw;
          position: absolute;
          right: 0;
          bottom: 0;
          z-index: -99;
          padding: 40px 30px;
        }

        .sidebar-info .card {
          background-color: white;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
          display: flex;
          opacity: 0.6;
          flex-direction: row;
        }

        .sidebar-container {
          max-width: 500px;
        }

        .sidebar-info .card:hover {
          opacity: 1;
        }
        .left-bar {
          max-height: calc(100vh - 100px);
          overflow-y: scroll;
        }
      `}</style>
    </>
  );
}

import Select from "src/components/Select";
import Input from "src/components/Input";

import { Formik } from "formik";
import * as Yup from "yup";
import { useAuth } from "src/utils/auth";

export default function creationAnnonce() {
  const auth = useAuth();

  const onSubmit = function (values) {};

  const createAnnonce = async function () {};

  const onAuthSuccess = function () {
    toggleModal(false);
    createAnnonce();
  };

  const validationSchema = Yup.object().shape({
    adresse_siege: Yup.string().required(),
    capital: Yup.string().required(),
    délibération_date: Yup.string().required(),
    dénomination: Yup.string().required(),
    dépôt_légal_date: Yup.string().required(),
    dépôt_légal_lieu: Yup.string().required(),
    dépôt_légal_numero: Yup.string().required(),
    dépôt_légal_ville: Yup.string().required(),
    email: Yup.string().required(),
    forme: Yup.string().required(),
    liquidateur: Yup.string().required(),
    nom_complet: Yup.string().required(),
    radiation: Yup.string().required(),
    rc: Yup.string().required(),
    rc_ville: Yup.string().required(),
    tel: Yup.string().required(),
    titre: Yup.string().required(),
  });

  const initialValues = {
    adresse_siege: "",
    capital: "",
    délibération_date: "",
    dénomination: "",
    dépôt_légal_date: "",
    dépôt_légal_lieu: "",
    dépôt_légal_numero: "",
    dépôt_légal_ville: "",
    email: "",
    forme: "",
    liquidateur: "",
    nom_complet: "",
    radiation: "",
    rc: "",
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
                      Annonce Légale Clôture de Liquidation
                    </h6>

                    <div>
                      <span>Dénomination Sociale :</span>{" "}
                      <Input
                        name="dénomination"
                        placeholder="Nom de la societé"
                      />
                    </div>

                    <div>
                      <span>Forme :</span>{" "}
                      <Input
                        name="forme"
                        width={500}
                        placeholder="forme juridique de la société suivie de la mention en liquidation"
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
                      <span>Numéro R.C :</span>
                      <Input name="rc" placeholder="123456" />
                    </div>

                    <div>
                      <span>R.C :</span>
                      <Input name="rc_ville" placeholder="ville" />
                    </div>

                    <div>
                      <span>
                        I- Aux termes d’une délibération de l’assemblée générale
                        ordinaire en date du :
                      </span>
                      <Input
                        name="délibération_date"
                        width={80}
                        placeholder="dd/mm/yyyy"
                      />
                      <span>, la collectivité des associés a:</span>
                    </div>

                    <div>
                      <span>
                        approuvé les comptes définitifs de la liquidation, donné
                        qui tus au Liquidateur, Monsieur
                      </span>
                      <Input
                        name="liquidateur"
                        placeholder="nom, prénom et adresse"
                      />
                      <span>
                        pour sa gestion et le décharge de son mandat, prononcé
                        la clôture des opérations de liquidation à compter du
                        jour de ladite Assemblée.
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
                      <span>Radiation au R.C de :</span>
                      <Input name="radiation" placeholder="ville" />
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

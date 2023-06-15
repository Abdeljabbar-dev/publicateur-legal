export default function Home() {
  return (
    <>
      {/* begin::hero section */}
      <div className="hero-image">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 col-md-8">
              <h1 className="title">Les annonces légales à portée de main</h1>
              <p className="desc">
                Nous offrons une plateforme conviviale et intuitive qui permet
                de publier rapidement et facilement toutes sortes d'annonces
                légale
              </p>
              <a href="#" className="btn btn-main mt-2">
                Publier votre annonce
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end::hero section */}

      {/* begin::About company */}
      <div id="about" className="bg-main pt-4 pb-5">
        <div className="container my-4">
          <h2 className="title text-center">Nos Services</h2>
          <p className="text-center desc mt-3">
            Facilitez vos annonces légales avec nous.
          </p>
          <div className="row mt-7">
            <div className="col-12 col-md-4 mb-4">
              <div className="card">
                <div className="icon">
                  <img src="/images/icon1.svg" />
                </div>
                <div className="flex-fill">
                  <h5 className="title">Publication Légale</h5>
                  <div className="desc mt-2">
                    Publiez des avis légaux en ligne de manière rapide et
                    économique dans des journaux habilités.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-4">
              <div className="card">
                <div className="icon">
                  <img src="/images/icon2.svg" />
                </div>
                <div className="flex-fill">
                  <h5 className="title">Traduction Juridique</h5>
                  <div className="desc mt-2">
                    Offrez des traductions précises et professionnelles de
                    documents juridiques dans plusieurs langues.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-4">
              <div className="card">
                <div className="icon">
                  <img src="/images/icon3.svg" />
                </div>
                <div className="flex-fill">
                  <h5 className="title">Veille Réglementaire</h5>
                  <div className="desc mt-2">
                    Obtenez des mises à jour régulières sur les nouvelles
                    réglementations et lois pour éviter les pénalités.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end::end about company */}

      {/* begin:: announcements */}
      <div id="announcements" className="pt-4 pb-5">
        <div className="container my-5">
          <div className="row px-2 flex-md-row flex-column">
            <div className="col-md-9 text-center text-md-left">
              <h3 className="title">Nos Dernières Annonces</h3>
              <div className="desc mt-1">Découvrez nos dernières annonces</div>
            </div>
            <div className="col-md-3 d-flex mt-4 mt-md-0 flex-md-row flex-column align-items-center justify-content-end">
              <a href="#" className="btn btn-main">
                Publier votre annonce
              </a>
            </div>
          </div>

          <div className="row mt-7">
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="d-flex align-items-center">
                  <h1 className="title mb-3 mr-3">23</h1>
                  <div>
                    <div>Septembre</div>
                    <div className="title">2020</div>
                  </div>
                </div>
                <div>Pour la période entre</div>
                <div>
                  <span className="title">23/09/2020 et 31/09/2020</span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="d-flex align-items-center">
                  <h1 className="title mb-3 mr-3 display-6">23</h1>
                  <div>
                    <div>Septembre</div>
                    <div className="title">2020</div>
                  </div>
                </div>
                <div>Pour la période entre</div>
                <div>
                  <span className="title">23/09/2020 et 31/09/2020</span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="d-flex align-items-center">
                  <h1 className="title mb-3 mr-3">23</h1>
                  <div>
                    <div>Septembre</div>
                    <div className="title">2020</div>
                  </div>
                </div>
                <div>Pour la période entre</div>
                <div>
                  <span className="title">23/09/2020 et 31/09/2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end::announcements */}

      {/* begin::contact us */}

      <div id="contact" className="bg-main pt-4 pb-5">
        <div className="container my-4">
          <h2 className="title text-center">Contactez Nous</h2>
          <p className="text-center desc mt-3">
            Lorem Ipsum is simply dummy text of the printing
          </p>
          <form>
            <div className="row mt-7">
              <div className="col-md-6 col-12 mb-4">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Nom complet"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group m-0">
                  <input
                    className="form-control"
                    type="text"
                    id="objet"
                    name="objet"
                    placeholder="Objet"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 mb-4">
                <div className="form-group h-100">
                  <textarea
                    type="text"
                    className="form-control h-100"
                    id="msg"
                    cols={10}
                    name="msg"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* <div className="row px-3 mt-4 justify-content-end">
              <button href="#" className="btn btn-secondary bg-white">
                <span className="px-4">Envoyer</span>
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { showLoginModal } from "src/store/loginModalSlice";
import Logo from "../Logo/Logo";

export default function Header(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  function handleNavigateToProfile() {
    dispatch(showLoginModal());
  }

  return (
    <>
      <div className="header">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-10 col-lg-4">
              <div className="logo">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
            </div>
            <div className="col-2 col-lg-8 d-flex align-items-center justify-content-end">
              <nav className="d-none d-lg-block">
                <ul>
                  <li>
                    <Link href="/">Acceuil</Link>
                  </li>
                  <li>
                    <Link href="#">Formalité</Link>
                  </li>
                  <li>
                    <Link href="/annonces">Annonces</Link>
                  </li>
                </ul>
              </nav>
              <button onClick={handleNavigateToProfile} className="profile">
                <div className="profile-avatar">
                  <img src="/images/profile.svg" />
                </div>
                <div className="d-none d-lg-block ml-2 mr-4">Espace client</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 80 }} />
    </>
  );
}

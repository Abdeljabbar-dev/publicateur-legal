import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "src/store/authSlice";
import { hideLoginModal } from "src/store/loginModalSlice";
import { showVerifyEmailModal } from "src/store/verifyEmailModalSlice";
import { showRegisterModal } from "src/store/registerModalSlice";

export default function LoginModal(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.loginModal);

  const handleCancel = function () {
    dispatch(hideLoginModal());
  };

  const handleLogin = async function (values, { setErrors }) {
    dispatch(login(values)).then(({ payload }) => {
      switch (payload.message) {
        case "USER_LOGIN_SUCCESS":
          // handle login success
          dispatch(hideLoginModal());
          break;
        case "USER_NOT_FOUND":
          setErrors({ email: "Il n'y a pas de compte associé à cet e-mail" });
          break;

        case "UNAUTHORIZED":
          setErrors({ password: "Mot de passe erroné" });
          break;

        case "USER_EMAIL_NOT_VERIVIED":
          dispatch(hideLoginModal());
          dispatch(showVerifyEmailModal({ email: values.email }));
          break;

        default:
          setErrors({ email: "Erreur de serveur" });
      }
    });
  };

  function handleSelectRegister() {
    dispatch(hideLoginModal());
    dispatch(showRegisterModal());
  }

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("email invalid").required("obligatoire"),
    password: Yup.string()
      .matches(
        /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        {
          message: "mot de passe invalid",
        }
      )
      .required("obligatoire"),
  });

  const loginInitialValues = {
    email: state.email || "",
    password: "",
  };

  return (
    <div className="overlay">
      <div className="m-content mx-4">
        <div className="m-head">
          <img
            onClick={handleCancel}
            className="exit"
            src="/images/back-icon-dark.svg"
            width="30px"
          />
          <h5 className="m-0">Se connecter à votre compte</h5>
        </div>

        <Formik
          validationSchema={loginValidationSchema}
          initialValues={loginInitialValues}
          onSubmit={handleLogin}
        >
          {(props) => (
            <>
              <div className="m-body mt-2">
                {/* <h6 className="ml-1 mb-3 uppercase">Se connecter à votre compte</h6> */}
                <div className="form-group">
                  <div className="m-input">
                    <input
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.email}
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Email"
                    />
                    <img src="/images/img-icon-dark.svg" />
                  </div>

                  {props.touched.email && props.errors.email && (
                    <div className="error">{props.errors.email}</div>
                  )}
                </div>

                <div className="form-group">
                  <div className="m-input">
                    <input
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.password}
                      name="password"
                      type="password"
                      id="password"
                      placeholder="Mot de passe"
                    />
                    <img src="/images/lock-icon-dark.svg" />
                  </div>
                  {props.touched.password && props.errors.password && (
                    <div className="error">{props.errors.password}</div>
                  )}
                </div>
              </div>

              <div className="row m-footer">
                <div className="col-6 d-flex align-items-center">
                  <button
                    onClick={handleSelectRegister}
                    className="btn btn-clear"
                  >
                    je n'ai pas un compte
                  </button>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <button
                    disabled={!props.isValid}
                    onClick={props.handleSubmit}
                    type="submit"
                    className="btn btn-main"
                  >
                    <span>Continuer</span>
                    <img
                      src="/images/arrow-light.svg"
                      width="24"
                      className="ml-2"
                    />
                  </button>
                </div>
              </div>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
}

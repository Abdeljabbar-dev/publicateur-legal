import {  Formik,  } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup'
import {verifyEmail}  from 'src/store/authSlice';
import { hideVerifyEmailModal } from 'src/store/verifyEmailModalSlice';
import { showLoginModal } from 'src/store/loginModalSlice';

export default function VerifyEmailModal(props) {

    const dispatch = useDispatch()
    const state = useSelector(state => state.verifyEmailModal);

    const verifyEmailValidationSchema = Yup.object().shape({
        code: Yup.string().length(6, "le code n'est pas valid").required("le code n'est pas valid")
    })

    const handleVerifiyEmail = async function (values, { setErrors }) {
        const {email} = state;
        const {code} = values;
        dispatch(verifyEmail({email, code}))
            .then(action => {
                switch(action.payload.message){
                    //email successfully verified
                    case "USER_SUCCUSSFULLY_VERIFIED":
                    case "USER_EMAIL_ALREADY_VERIFIED":
                        dispatch(hideVerifyEmailModal());
                        dispatch(showLoginModal({email}))
                        break;

                    case "INVALID_CODE":
                        setErrors({code: "Le code n'est pas valide"})
                        break;

                    // server error
                    default:

                }
            })
    }

    const handleCancel = function (params) {
        dispatch(hideVerifyEmailModal());
    }

    return (
        <div className="overlay">
            <div className="m-content">
                <div className="m-head">
                    <img onClick={handleCancel} className="exit" src="/images/back-icon-dark.svg" width='30px' />
                    <h5 className="m-0">Valider votre compte</h5>
                </div>

                <Formik validationSchema={verifyEmailValidationSchema} initialValues={{ code: "" }} onSubmit={handleVerifiyEmail}>
                    {props => (
                        <>
                            <div className="m-body mt-2">
                                <div className="display-6 ml-1 mb-3">
                                    Un e-mail a été envoyé à <strong>{state.email}</strong><br/>
                                    Consultez votre boîte de réception pour les instructions
                                </div>
                                <div className="form-group">
                                    <div className="m-input">
                                        <input onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.code} name="code" type="number" id="code" placeholder="Code de verification" />
                                        <img src="/images/verify-icon.svg" />
                                    </div>

                                    {props.touched.code && props.errors.code && <div className="error">{props.errors.code}</div>}
                                </div>

                            </div>

                            <div className="row m-footer">
                                <div className="col-6 d-flex align-items-center">
                                    <button className="btn btn-clear">
                                        Renvoyer L'email
                                        </button>
                                </div>

                                <div className="col-6 d-flex justify-content-end">
                                    <button disabled={!props.isValid} onClick={props.handleSubmit} type="submit" className="btn btn-main">
                                        <span>Continuer</span>
                                        <img src="/images/arrow-light.svg" width="24" className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </Formik>

            </div>
        </div>
    )
}
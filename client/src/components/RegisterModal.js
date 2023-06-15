import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { hideRegisterModal } from 'src/store/registerModalSlice';
import { showLoginModal } from 'src/store/loginModalSlice';

export default function registerModal() {
    const dispatch = useDispatch();

    const handleRegister = async function (values, { setErrors }) {
        // try {
        //     const res = await register(values);
        //     if (res.status == "REGISTER_SUCCESS") onSuccess(values);
        // } catch (err) {
        //     switch (err.code) {
        //         case "USER_EXISTS":
        //             setErrors({ email: "email already exits" })
        //             break;
        //         default:
        //             setErrors({ email: "server error" })
        //             break;
        //     }
        // }
    }

    const registerValidationSchema = Yup.object().shape({
        email: Yup.string().email('email invalid').required('obligatoire'),
        password: Yup.string()
            .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
                message: "mot de passe invalid"
            })
            .required('obligatoire'),
    });


    const registerInitialValues = {
        email: "",
        password: ""
    }


    function handleCancel() {
        dispatch(hideRegisterModal());
    }

    function onSelectLogin(){
        dispatch(hideRegisterModal());
        dispatch(showLoginModal());
    }

    return (
        <div className="overlay">
            <div className="m-content">
                <div className="m-head">
                    <img onClick={handleCancel} className="exit" src="/images/back-icon-dark.svg" width='30px' />
                    <h5 className="m-0">Créer votre comptee</h5>
                </div>

                <Formik validationSchema={registerValidationSchema} initialValues={registerInitialValues} onSubmit={handleRegister}>
                    {props => (
                        <>
                            <div className="m-body mt-2">
                                {/* <h6 className="ml-1 mb-3 uppercase">Créer votre compte</h6> */}
                                <div className="form-group">
                                    <div className="m-input">
                                        <input onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.email} name="email" type="email" id="email" placeholder="Email" />
                                        <img src="/images/img-icon-dark.svg" />
                                    </div>

                                    {props.touched.email && props.errors.email && <div className="error">{props.errors.email}</div>}
                                </div>

                                <div className="form-group">
                                    <div className="m-input">
                                        <input onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.password} name="password" type="password" id="password" placeholder="Mot de passe" />
                                        <img src="/images/lock-icon-dark.svg" />
                                    </div>
                                    {props.touched.password && props.errors.password && <div className="error">{props.errors.password}</div>}
                                </div>
                            </div>

                            <div className="row m-footer">
                                <div className="col-6 d-flex align-items-center">
                                    <button onClick={onSelectLogin} className="btn btn-clear">
                                        j’ai déja un compte
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
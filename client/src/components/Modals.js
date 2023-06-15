import { useSelector } from 'react-redux'
import LoginModal from './LoginModal';
import VerifyEmailModal from './VerifyEmailModal';
import RegisterModal from './RegisterModal';

export default function Modals (){
    const loginModalState = useSelector(state => state.loginModal);
    const verifyEmailModalState = useSelector(state => state.verifyEmailModal);
    const registerModalState = useSelector(state => state.registerModal);
    return (
        <>
            {
            loginModalState.isVisible ? <LoginModal/> :
            verifyEmailModalState.isVisible ? <VerifyEmailModal/> :
            registerModalState.isVisible ? <RegisterModal/> :
            null
            }
        </>
    )
}
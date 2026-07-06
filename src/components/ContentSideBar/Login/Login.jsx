import InputCommon from '@components/InputCommon/inputCommon';
import styles from './styles.module.scss';
import { AiTwotoneContainer } from 'react-icons/ai';
import Button from '@components/Button/Button';

function Login() {
    const { container, title, boxRememberme, lostPw, boxBtn } = styles;
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <InputCommon label='Email' type='text' isRequired />
            <InputCommon label='Password' type='password' isRequired />
            <div className={boxRememberme}>
                <input type='checkbox' />
                <span>Remember me</span>
            </div>
            <div className={boxBtn}>
                <Button content={'LOGIN'} />
            </div>

            <div className={lostPw}>Lost your password?</div>
        </div>
    );
}

export default Login;

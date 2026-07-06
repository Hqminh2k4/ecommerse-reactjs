import styles from './styles.module.scss';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';
function InputCommon({ label, type, isRequired = false }) {
    const { labelInput, boxInput, container, boxIcon } = styles;

    const isPassword = type === 'password';

    const [showPassword, setShowPassword] = useState(false);

    const isShowTextPassword =
        type === 'password' && showPassword ? 'text' : type;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={container}>
            <div className={labelInput}>
                {label}
                {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input type={isShowTextPassword} />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? (
                            <FaRegEyeSlash />
                        ) : (
                            <MdOutlineRemoveRedEye />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputCommon;

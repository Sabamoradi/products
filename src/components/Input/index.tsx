'use client'
import './style.scss';

interface Props {
    value?: string | number;
    inputClassName?: string;
    placeholder: string;
    type: string;
    onClick?: () => void;
};

function Input(props: Props) {
    const {
        type,
        value,
        placeholder,
        inputClassName,
        onClick,
    } = props;

    return (
        <div className={'container_input'}>
            
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    className={inputClassName}
                    onClick={onClick}
                />
        </div>
    );
};

export default Input;

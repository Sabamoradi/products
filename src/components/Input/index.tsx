'use client'
import './style.scss';

interface Props {
    value?: string | number;
    inputClassName?: string;
    placeholder: string;
    type: string;
    onClick?: () => void;
    onChange: any;
};

function Input(props: Props) {
    const {
        type,
        value,
        placeholder,
        inputClassName,
        onClick,
        onChange
    } = props;

    return (
        <div className={'container_input'}>
            
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    className={inputClassName}
                    onClick={onClick}
                    onChange={(e)=> onChange(e.target.value)}
                />
        </div>
    );
};

export default Input;

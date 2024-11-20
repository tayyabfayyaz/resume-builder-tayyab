import { FC, ReactNode } from "react";

interface btnProps{
    text?: string;
    icon?: ReactNode;
    className?: string;
}

let Button: FC<btnProps> = ( {text, icon, className} ) => {
    return(
        <button className={`${className} || "" `}>
            {text}
            {icon}
        </button>
    );
};

export default Button;
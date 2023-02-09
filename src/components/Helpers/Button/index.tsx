import Translation from '@localization/Translation';
import { ReactComponentElement } from 'react';
interface IButton {
    OnClick?: any;
    Name: string;
    ClassName?: string;
    Children?: JSX.Element;
    RowID?: string;
    Type?: any;
}
const Button = ({ OnClick, Name, ClassName, RowID, Type, Children = <></> }: IButton) => {
    const { lang } = Translation();
    if (!Type) {
        Type = "button";
    }
    return (
        <button className={ClassName} onClick={OnClick} type={Type} title={lang(Name)} tabIndex={-1} data-id={RowID} >{lang(Name)}
            {Children}
        </button>
    )
}
export default Button;
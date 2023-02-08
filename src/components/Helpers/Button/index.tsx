import Translation from '@localization/Translation';
import { ReactComponentElement } from 'react';
interface IButton {
    OnClick: any;
    Name: string;
    ClassName: string;
    Children?: JSX.Element;
    RowID?: string;
}
const Button = ({ OnClick, Name, ClassName, RowID, Children = <></> }: IButton) => {
    const { lang } = Translation();
    return (
        <button className={ClassName} onClick={OnClick} title={lang(Name)} tabIndex={-1} data-id={RowID} >{lang(Name)}
            {Children}
        </button>
    )
}
export default Button;
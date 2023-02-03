interface IProps {
    Message:string;
}

export const FieldValidationMessage = ({ Message }:IProps) => {
    return (
        <div>
            <p className="text-sm text-red-600 dark:text-red-500">{Message}</p>
        </div>
    )
}
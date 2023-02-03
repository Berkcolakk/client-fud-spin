export const FieldValidationMessage = ({ message }) => {
    return (
        <div>
            <p className="text-sm text-red-600 dark:text-red-500">{message}</p>
        </div>
    )
}
/** Author: @Berkcolakk
 * Returns true if there is an authorized user, otherwise false.
 * @returns true or false
 */
export const getUser = () => {
    const authUser = localStorage.getObjectHash("auth")
    let isValid = false;
    if (authUser != null) {
        isValid = true;
    }
    return { isValid }
}
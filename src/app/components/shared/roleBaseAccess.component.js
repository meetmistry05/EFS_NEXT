function RoleBaseAccess({ children, moduleName = '', isSubmit = false }) {

    const userData = JSON.parse(localStorage.getItem('user'));

    const renderData = () => {
        if (moduleName) {
            let permission = userData?.operativePermissions?.find(x => x?.moduleId?.name.toLowerCase().includes(moduleName.toLowerCase()));

            if (permission?.edit) {
                return true;
            }
            else if (permission?.view && !isSubmit) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    const hasUserPermission = renderData();

    return (
        <>
            {hasUserPermission && children}
        </>
    );
}
export default RoleBaseAccess

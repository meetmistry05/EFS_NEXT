function RoleBaseAccess({ children, moduleName = '', isSubmit = false }) {
    const permissions = JSON.parse(localStorage.getItem('permissions'));

    const renderData = () => {
        if (moduleName) {
            let permission = permissions?.find(x => x?.moduleDetails?.moduleKey === moduleName);

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

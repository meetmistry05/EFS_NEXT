import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { Dialog } from 'primereact/dialog';
import React from 'react';

function RoleBasedRouting() {

    const permissions = JSON.parse(localStorage.getItem('permissions'))?.data;

    const [showDialog, setShowDialog] = React.useState(false);

    const pathname = usePathname();

    const history = useRouter();

    const renderData = () => {
        if (pathname === '/' || pathname === '/dashboard') {
            return true;
        }

        const moduleName = pathname.includes('/administration/jobs') ? 'job' : pathname.includes('reports') ? 'report' : pathname.split('/')[1]

        if (moduleName) {
            let permission = permissions?.find(x => x?.moduleDetails?.name.toLowerCase().includes(moduleName));

            if (!permission?.edit && (pathname.includes('edit') || pathname.includes('add'))) {
                setShowDialog(true);
            }
            else if (permission?.view) {
                return setShowDialog(false);
            }
            else {
                return setShowDialog(true);
            }
        }
    }

    React.useEffect(() => {
        renderData();
    }, []);

    React.useEffect(() => {
        renderData();
    }, [pathname])

    return (
        <>
            <Dialog header="Access Denied" visible={showDialog} onHide={() => {
                setShowDialog(false);
                history.push('/')
            }} style={{ width: '30vw' }}
            >
                <div className='d-flex'>
                    <i className='pi h3 pi-exclamation-triangle me-3'></i> <span>You do not have access to this module.</span>
                </div>
                <div className='d-flex justify-content-center mt-7'>
                    <button type='button' className='btn btn-primary' onClick={() => {
                        setShowDialog(false);
                        history.push('/')
                    }}>
                        Ok
                    </button>
                </div>
            </Dialog>
        </>
    );
}
export default RoleBasedRouting

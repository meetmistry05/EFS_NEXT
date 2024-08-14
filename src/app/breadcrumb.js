"use client"

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { routeConstants } from './utilities/constants/combine.constant';

const Breadcrunb = () => {

    const vault = useSelector((state) => state.vault);
    const job = useSelector((state) => state.job);

    const [breadCrumbs, setBreadCrumbs] = useState([]);

    const pathname = usePathname();

    useEffect(() => {
        renderBreadCrunbs();
    }, [pathname, job]);

    const renderBreadCrunbs = () => {
        if (pathname === '/' || pathname === '/dashboard') {
            setBreadCrumbs([
                { isActive: false, isSeparator: false, path: '', title: "Dashboard" },
            ]);
        }
        else if (pathname?.includes(routeConstants.ADMINISTRATION_JOBS_CREATE) || pathname?.includes(routeConstants.ADMINISTRATION_JOBS_EDIT)) {
            let isEdit = pathname?.includes(routeConstants.ADMINISTRATION_JOBS_CREATE) ? false : true;
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.JOBS, title: "Jobs" },
                { isActive: false, isSeparator: false, path: '', title: `${isEdit ? "Edit" : 'Create'} Job` },
            ]);
        }
        else if (pathname?.includes(routeConstants.JOBS)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: false, isSeparator: false, path: '', title: "Jobs" },
            ]);
        }
        else if (pathname?.includes(routeConstants.VAULT_HOME)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: false, isSeparator: false, path: '', title: "Vault" },
            ]);
        }
        else if (pathname?.includes(routeConstants.VAULT_DETAIL)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.VAULT_HOME, title: "Vault" },
                { isActive: false, isSeparator: false, path: '', title: "Vault Details" },
            ]);
        }
        else if (pathname?.includes(routeConstants.ASSETS_ARCHIVE)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.VAULT_HOME, title: "Vault" },
                { isActive: true, isSeparator: true, path: `${routeConstants.VAULT_DETAIL}${job?.buildingId}`, title: "Vault Details" },
                { isActive: false, isSeparator: false, path: '', title: "Archived Assets" },
            ]);
        }
        else if (pathname?.includes(routeConstants.ASSETS_DETAIL)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.VAULT_HOME, title: "Vault" },
                { isActive: true, isSeparator: true, path: `${routeConstants.VAULT_DETAIL}${vault?.AssetInfo?.building}`, title: "Vault Details" },
                { isActive: false, isSeparator: false, path: '', title: "Asset Details" },
            ]);
        }
        else if (pathname?.includes(routeConstants.CLIENT_LIST)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: false, isSeparator: false, path: '', title: "Profiles" },
            ]);
        }
        else if (pathname?.includes(routeConstants.CLIENT_ADD)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.CLIENT_LIST, title: "Profiles" },
                { isActive: false, isSeparator: false, path: "", title: "Add" },
            ]);
        }
        else if (pathname?.includes(routeConstants.CLIENT_EDIT)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.CLIENT_LIST, title: "Profiles" },
                { isActive: false, isSeparator: false, path: "", title: "Edit" },
            ]);
        }
        else if (pathname?.includes(routeConstants.ARCHIVE_CLIENT)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.CLIENT_LIST, title: "Profiles" },
                { isActive: false, isSeparator: false, path: '', title: "Archived Profiles" },
            ]);
        }
        else if (pathname?.includes(routeConstants.FACILITY_MANAGER)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: false, isSeparator: false, path: '', title: "FM Register" },
            ]);
        }
        else if (pathname?.includes(routeConstants.FACILITY_MANAGER_ARCHIVE)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.FACILITY_MANAGER, title: "FM Register" },
                { isActive: false, isSeparator: false, path: '', title: "Archived FM" },
            ]);
        }
        else if (pathname?.includes(routeConstants.BUILDING_LIST)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: false, isSeparator: false, path: '', title: "Buildings" },
            ]);
        }
        else if (pathname?.includes(routeConstants.BUILDING_ARCHIVE)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.BUILDING_LIST, title: "Buildings" },
                { isActive: false, isSeparator: false, path: '', title: "Archived Buildings" },
            ]);
        }
        else if (pathname?.includes(routeConstants.OPERATIVE_LIST)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: false, isSeparator: false, path: '', title: "Operatives" },
            ]);
        }
        else if (pathname?.includes(routeConstants.OPERATIVE_ADD)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.OPERATIVE_LIST, title: "Operatives" },
                { isActive: false, isSeparator: false, path: '', title: "Add" },
            ]);
        }
        else if (pathname?.includes(routeConstants.OPERATIVE_EDIT)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.OPERATIVE_LIST, title: "Operatives" },
                { isActive: false, isSeparator: false, path: '', title: "Edit" },
            ]);
        }
        else if (pathname?.includes(routeConstants.OPERATIVE_ARCHIVE)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.OPERATIVE_LIST, title: "Operatives" },
                { isActive: false, isSeparator: false, path: '', title: "Archived Operatives" },
            ]);
        }
        else if (pathname?.includes(routeConstants.OPERATIVE_OVERVIEW)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.OPERATIVE_LIST, title: "Operatives" },
                { isActive: false, isSeparator: false, path: '', title: "Operative Overview" },
            ]);
        }
        else if (pathname?.includes(routeConstants.NEWS_LIST)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: false, isSeparator: false, path: '', title: "News" },
            ]);
        }
        else if (pathname?.includes(routeConstants.NEWS_ARCHIVE)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.NEWS_LIST, title: "News" },
                { isActive: false, isSeparator: false, path: '', title: "Archived News" },
            ]);
        }
        else if (pathname?.includes(routeConstants.FORUM_LIST)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: false, isSeparator: false, path: '', title: "Forum" },
            ]);
        }
        else if (pathname?.includes(routeConstants.REPORT_LISTING)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: false, isSeparator: false, path: '', title: "Reports" },
            ]);
        }
        else if (pathname?.includes(routeConstants.ARCHIVED_REPORTS)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.REPORT_LISTING, title: "Reports" },
                { isActive: false, isSeparator: false, path: '', title: "Archived Reports" },
            ]);
        }
        else if (pathname?.includes(routeConstants.SETTINGS_LIST)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: false, isSeparator: false, path: '', title: "Settings" },
            ]);
        }
        else if (pathname?.includes(routeConstants.ACCESIBILTY)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.SETTINGS_LIST, title: "Settings" },
                { isActive: false, isSeparator: false, path: '', title: "Accessibility" },
            ]);
        }
        else if (pathname?.includes(routeConstants.FIREBARRIROR)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.SETTINGS_LIST, title: "Settings" },
                { isActive: false, isSeparator: false, path: '', title: "Fire Barrier" },
            ]);
        }
        else if (pathname?.includes(routeConstants.INSTALLATION)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.SETTINGS_LIST, title: "Settings" },
                { isActive: false, isSeparator: false, path: '', title: "Installation" },
            ]);
        }
        else if (pathname?.includes(routeConstants.DAMPTER)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.SETTINGS_LIST, title: "Settings" },
                { isActive: false, isSeparator: false, path: '', title: "Damper Types" },
            ]);
        }
        else if (pathname?.includes(routeConstants.DUCT)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.SETTINGS_LIST, title: "Settings" },
                { isActive: false, isSeparator: false, path: '', title: "Duct Types" },
            ]);
        }
        else if (pathname?.includes(routeConstants.DEFECT_SETTINGS)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.SETTINGS_LIST, title: "Settings" },
                { isActive: false, isSeparator: false, path: '', title: "Defect Categories" },
            ]);
        }
        else if (pathname?.includes(routeConstants.PPM_MOBILE_GUIDANCE)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.SETTINGS_LIST, title: "Settings" },
                { isActive: false, isSeparator: false, path: '', title: "PPM Mobile Guidance" },
            ]);
        }
        else if (pathname?.includes(routeConstants.REPORT_GUIDANCE)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.SETTINGS_LIST, title: "Settings" },
                { isActive: false, isSeparator: false, path: '', title: "Report Guidance" },
            ]);
        }
        else if (pathname?.includes(routeConstants.REPORT_SERVICE)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.SETTINGS_LIST, title: "Settings" },
                { isActive: false, isSeparator: false, path: '', title: "Report Service" },
            ]);
        }
        else if (pathname?.includes(routeConstants.REPORT_DISCLAIMER)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.SETTINGS_LIST, title: "Settings" },
                { isActive: false, isSeparator: false, path: '', title: "Report Disclaimer" },
            ]);
        }
        else if (pathname?.includes(routeConstants.USER_ACCESS_PERMISSIONS)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.SETTINGS_LIST, title: "Settings" },
                { isActive: false, isSeparator: false, path: '', title: "User Access Permissions" },
            ]);
        }
        else if (pathname?.includes(routeConstants.ASSOCIATIONS)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.SETTINGS_LIST, title: "Settings" },
                { isActive: false, isSeparator: false, path: '', title: "Associations" },
            ]);
        }
        else if (pathname?.includes(routeConstants.COMPETENCIES)) {
            setBreadCrumbs([
                { isActive: true, isSeparator: true, path: routeConstants.DASHBOARD, title: "Dashboard" },
                { isActive: true, isSeparator: true, path: routeConstants.SETTINGS_LIST, title: "Settings" },
                { isActive: false, isSeparator: false, path: '', title: "Competencies" },
            ]);
        }
    };

    return (
        <>
            <ul className='breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1'>
                {Array.from(breadCrumbs).map((item, index) => (
                    <li
                        className={clsx('', {
                            'text-dark': !item.isSeparator && item.isActive,
                            'text-muted': !item.isSeparator && !item.isActive,
                        })}
                        key={`${item.path}${index}`}
                    >
                        {item.isSeparator ? (
                            <>
                                <Link className='text-primary text-hover-primary' href={item.path}>
                                    {item.title}
                                </Link>
                                <span className='text-muted px-3'><i className='pi pi-angle-right'></i></span>
                            </>
                        ) : (
                            <span className='text-muted'>{item.title}</span>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Breadcrunb;


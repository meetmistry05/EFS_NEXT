"use client"
import { faBriefcase, faBuilding, faBuildingUser, faEnvelope, faFile, faGears, faMessage, faShieldHalved, faUser, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RoleBaseAccess from './components/access/roleBaseAccess.component';
import { routeConstants } from './utilities/constants/combine.constant';
const Container = styled.div`
  display: flex;
  height: 95vh;
  z-index: 9999;
`;

const SideBarCustom = styled.div`
width: ${(props) => (props.isopen ? '200px' : !props.issidebarfocuslost && window.innerWidth >= 768 ? '200px' : '70px')};
  transition: width 0.3s;
    overflow: hidden;
    background-image: linear-gradient(195deg, #42424a, #191919);
    display: flex;
    flex-direction: column;
    position: ${(props) => ((props.isopen || props.issidebarfocuslost) && window.innerWidth >= 768 ? 'relative' : 'absolute')};
    height:${(props) => (props.isopen ? '100vh' : window.innerWidth >= 768 ? '100vh' : '10.9vh')};
    box-shadow:0 0 28px 0 rgb(82 63 105);
`

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const SidebarContent = styled.div`
  padding: 1rem;
`;

export const SideBar = () => {
    const [isopen, setIsOpen] = useState(true);
    const [issidebarfocuslost, setSideBarFocusLost] = useState(false);
    const router = useRouter();

    const toggleSidebar = () => {
        setIsOpen(!isopen);
        setSideBarFocusLost(!issidebarfocuslost);
    };

    const handleMouseEnter = () => {
        setSideBarFocusLost(false);
    };

    const handleMouseLeave = () => {
        setSideBarFocusLost(true);
    };

    const pathname = window.location.pathname;

    const permissionsList = [
        { key: 'job', link: routeConstants.JOBS, moduleName: 'Job', htmlItem: <FontAwesomeIcon icon={faBriefcase} style={{ height: !isopen && issidebarfocuslost ? '2rem' : '14px' }} className={`${pathname.includes("administration") && 'active'}`} /> },
        { key: 'vault', link: '/vault/home', moduleName: 'Vault', htmlItem: <FontAwesomeIcon icon={faShieldHalved} style={{ height: !isopen && issidebarfocuslost ? '2rem' : '14px' }} className={`${pathname.includes("vault") && 'active'}`} /> },
        { key: 'profiles', link: '/profile/listing', moduleName: 'Profiles', htmlItem: <FontAwesomeIcon icon={faUser} style={{ height: !isopen && issidebarfocuslost ? '2rem' : '14px' }} className={`${pathname.includes("profile") && 'active'}`} /> },
        { key: 'fmregister', link: '/fm/listing', moduleName: 'FM Register', htmlItem: <FontAwesomeIcon icon={faBuildingUser} style={{ height: !isopen && issidebarfocuslost ? '2rem' : '14px' }} className={`${pathname.includes("fm") && 'active'}`} /> },
        { key: 'buildingsregister', link: '/buildings/list', moduleName: 'Buildings Register', htmlItem: <FontAwesomeIcon icon={faBuilding} style={{ height: !isopen && issidebarfocuslost ? '2rem' : '14px' }} className={`${pathname.includes("buildings") && 'active'}`} /> },
        { key: 'operatives', link: '/operative/list', moduleName: 'Operatives', htmlItem: <FontAwesomeIcon icon={faUserGear} style={{ height: !isopen && issidebarfocuslost ? '2rem' : '14px' }} className={`${pathname.includes("operative") && 'active'}`} /> },
        { key: 'news', link: '/news/list', moduleName: 'News', htmlItem: <FontAwesomeIcon icon={faEnvelope} style={{ height: !isopen && issidebarfocuslost ? '2rem' : '14px' }} className={`${pathname.includes("news") && 'active'}`} /> },
        { key: 'forum', link: '/forum/listing', moduleName: 'Forum', htmlItem: <FontAwesomeIcon icon={faMessage} style={{ height: !isopen && issidebarfocuslost ? '2rem' : '14px' }} className={`${pathname.includes("forum") && 'active'}`} /> },
        { key: 'reportlibrary', link: '/reports/listing', moduleName: 'Report Library', htmlItem: <FontAwesomeIcon icon={faFile} style={{ height: !isopen && issidebarfocuslost ? '2rem' : '14px' }} className={`${pathname.includes("reports") && 'active'}`} /> },
        { key: 'settings', link: '/settings/list', moduleName: 'Settings', htmlItem: <FontAwesomeIcon icon={faGears} style={{ height: !isopen && issidebarfocuslost ? '2rem' : '14px' }} className={`${pathname.includes("settings") && 'active'}`} /> },
    ];

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNavigation = (link) => {
        router.push(link)
    }

    const renderHtml = () => {

        return (
            <>
                <Container>
                    <SideBarCustom
                        isopen={isopen}
                        issidebarfocuslost={issidebarfocuslost}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <SidebarHeader>
                            <div className='d-flex align-items-center text-secondary'>
                                {(isopen || !issidebarfocuslost) && <Image
                                    alt='Logo'
                                    src={require("./assets/img/logo.png")}
                                    height={60}
                                />}
                                <i className={`pi pi-angle-double-right ms-2 ${isopen ? 'rotated' : 'anti-rotated'}`}
                                    onClick={toggleSidebar} />
                            </div>
                        </SidebarHeader>
                        {
                            (window.innerWidth >= 768 || isopen) && (
                                <SidebarContent>
                                    <Link className={`menu-item py-3 ${pathname === routeConstants.DASHBOARD ? 'text-link' : ''}`} href={routeConstants.DASHBOARD}>
                                        {(isopen || !issidebarfocuslost) && 'Dashboard'}
                                    </Link>
                                    <div className='py-3 text-muted ls-1' style={{ fontSize: "0.85rem" }}>
                                        {(isopen || !issidebarfocuslost) && 'APPLICATION'}
                                    </div>

                                    {permissionsList.map((module, index) => {
                                        return (
                                            (
                                                <RoleBaseAccess key={module.key} moduleName={module.key}>
                                                    {!isopen && issidebarfocuslost ? (
                                                        <div className='ps-7 pt-1'>{module.htmlItem}</div>
                                                    )
                                                        :
                                                        <>
                                                            <div className={`sidebar-card item ${pathname === module.link ? 'active' : ''}`} onClick={() => handleNavigation(module.link)}>
                                                                <div className='d-flex'>
                                                                    <div className='ps-7 me-2 text-white'>{module.htmlItem}</div>
                                                                    <div className='text-white' href={module.link}>
                                                                        {module?.moduleName}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>

                                                    }
                                                </RoleBaseAccess>

                                            )
                                        );
                                    })}
                                </SidebarContent>
                            )
                        }
                    </SideBarCustom>


                </Container>
            </>
        )
    }

    return renderHtml();
}
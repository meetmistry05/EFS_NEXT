"use client"
import { userLogout } from '@/redux/slices/auth/auth.slice';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import FormButton from './components/shared/sharedUI/FormButton';
import { routeConstants } from './utilities/constants/combine.constant';
//import { userLogout } from '../redux/slices/auth/auth.slice';


export const TopNav = () => {

    const user = localStorage.getItem('user');
    const userData = user ? JSON.parse(user) : null
    const { image } = JSON.parse(user ?? '{}');
    const dispatch = useDispatch();

    const router = useRouter();

    const op = useRef(null);

    const onLogout = async () => {
        localStorage.clear();
        dispatch(userLogout());
        Cookies.remove('token');
        router.push(routeConstants.LOGIN)
    }

    return (
        <>
            <div className='card'>
                <div className='card-body p-0'>
                    <div className='topNav bg-white d-flex justify-content-end'>
                        <div className='p-3 text-end'>
                            <div className="profile-pic-container d-flex align-items-center" onClick={(e) => op.current.toggle(e)} style={{ cursor: 'pointer' }}>
                                <Image
                                    className="profile-pic"
                                    src={require('./assets/img/default-profile-pic.jpg')}
                                    alt='ProfilePic'
                                    height={50}
                                    width={50}
                                />
                                <div className='ms-2 fw-bolder fs-8'>Hi, {userData?.name ?? ""}</div>
                                <i className='ms-1 pi pi-angle-down' />
                            </div>
                            <OverlayPanel ref={op} className='login-overlay'>
                                <FormButton
                                    className='fw-bold w-100'
                                    text method={onLogout}
                                    label='Sign Out'
                                    severity="warning"
                                />
                            </OverlayPanel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


} 
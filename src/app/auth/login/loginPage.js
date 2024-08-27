"use client";
import { userLogin } from '@/redux/slices/auth/auth.slice';
import clsx from 'clsx';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from "primereact/button";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import TextBox from "../../components/shared/sharedUI/textBox.component";
import { ToastComman } from "../../components/shared/toast.component";
import { labelConstants, messageConstants, routeConstants } from "../../utilities/constants/combine.constant";

export const LoginPage = () => {
    const navigate = useRouter();
    const dispatch = useDispatch();
    const reduxState = useSelector((state) => state?.auth);
    const toastRef = useRef(null);

    useEffect(() => {
        if (reduxState?.error) {
            showToastMessage(messageConstants.ErrorToastSeverity, messageConstants.ErrorMessageTitle, reduxState?.error);
        }

        if (reduxState?.isSuccess && reduxState?.authenticatedUser) {
            localStorage.setItem('token', JSON.stringify(reduxState?.authenticatedUser.data.token));
            localStorage.setItem('user', JSON.stringify(reduxState?.authenticatedUser.data.user));
            localStorage.setItem('permissions', JSON.stringify(reduxState?.authenticatedUser.data.permissions));
            Cookies.set('token', JSON.stringify(reduxState?.authenticatedUser.data.token), { path: '/' });

            navigate.push('/dashboard');
        }
    }, [reduxState?.error, reduxState?.isSuccess]);

    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Wrong email format').min(3).max(50).required('Email is required'),
        password: Yup.string().min(3).max(50).required('Password is required'),
    });

    const formik = useFormik({
        initialValues: { email: 'test1@gmail.com', password: '123456' },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            dispatch(userLogin({ email: values.email, password: values.password }));
        },
    });

    const showToastMessage = (toastSeverity, messageTitle, message) => {
        toastRef.current && toastRef.current.showToast(toastSeverity, messageTitle, message);
    };

    return (
        <>
            <ToastComman ref={toastRef} />
            <Image src={require('../../assets/img/logo.png')} alt='logo' height={75} className='mb-5' />
            <div className="text-center mb-5">
                <h3 className="">Welcome Back!</h3>
            </div>
            <form className='form w-100 mt-5' onSubmit={formik.handleSubmit} noValidate>
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <TextBox
                            value={formik.values.email}
                            onChange={(e) => formik.setFieldValue('email', e.target.value)}
                            className={clsx('form-control form-control-lg form-control-solid', {
                                'is-invalid': formik.touched.email && formik.errors.email,
                                'is-valid': formik.touched.email && !formik.errors.email,
                            })}
                            type='email'
                            name='email'
                            autoComplete='off'
                            style={{ background: '#eef3f7', border: 'none' }}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-danger text-sm">{formik.errors.email}</div>
                        )}
                    </div>
                    <div className="col-lg-12 mb-4">
                        <TextBox
                            type="password"
                            onChange={(e) => formik.setFieldValue('password', e.target.value)}
                            value={formik.values.password}
                            className={clsx('form-control form-control-lg form-control-solid', {
                                'is-invalid': formik.touched.password && formik.errors.password,
                                'is-valid': formik.touched.password && !formik.errors.password,
                            })}
                            placeholder="Password"
                            name='password'
                            autoComplete='off'
                            style={{ background: '#eef3f7', border: 'none' }}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <div className="text-danger text-sm">{formik.errors.password}</div>
                        )}
                    </div>
                    <div className="col-lg-12">
                        <Button
                            label={
                                reduxState?.loading ? (
                                    <>
                                        <span>{labelConstants.PLEASE_WAIT} <i className="pi pi-spinner pi-spin"></i></span>
                                    </>
                                ) :
                                    labelConstants.SIGN_IN
                            }
                            type="submit"
                            disabled={reduxState?.loading}
                            className="btn btn-lg btn-primary w-100"
                        />
                    </div>
                    <div className="text-center mt-4">
                        <Link href={routeConstants.FORGOT_PASSWORD}>
                            <h5 className="">Forgot Password? or Sign Up</h5>
                        </Link>
                    </div>
                </div>
            </form>
        </>
    );
}

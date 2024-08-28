'use client';

import { setAuthenticatedUser } from '@/redux/slices/auth/auth.slice';
import { ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Cookies from 'js-cookie';
import { Poppins } from 'next/font/google';
import { useEffect, useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import ReduxProvider from '../provider';
import client from "./components/graphql/apolloClient";
import Footer from './footer';
import "./globals.css";
import { SideBar } from "./sideBar";
import { SubLayout } from "./subLayout";

const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <AppLayout>{children}</AppLayout>
    </ReduxProvider>
  );
}

function AppLayout({ children }) {
  const reduxState = useSelector((state) => state?.auth);
  const userData = localStorage.getItem('user');
  const [user, setUser] = useState(null);
  const [isRender, setRender] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    let cookie = Cookies.get('token');
    let data = userData ? JSON.parse(userData) : null;

    if (!reduxState.authenticatedUser) {
      if (!cookie && data) {
        localStorage.clear();
        setUser(null);  // Clear the user state when there's no token
        return;
      }
      dispatch(setAuthenticatedUser(data));
      setUser(data);
    } else {
      setUser(reduxState.authenticatedUser);
    }

    setRender(true);
  }, [reduxState.authenticatedUser, userData]);

  const renderHtml = (children) => {
    return user ? (
      <>
        <SideBar />
        <SubLayout>
          {children}
        </SubLayout>
      </>
    ) : (
      <div className={`container-fluid w-50 ${user ? '' : 'text-center'}`}>{children}</div>
    );
  };

  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={poppins.className} style={{ background: user ? '' : "#f1f4f7 !important" }}>
        <div className={user
          ? "align-items-stretch justify-content-between"
          : 'd-flex align-items-center justify-content-center h-100'}>
          <div className={user ? 'd-flex flex-row flex-column-fluid' : ''}>
            <ApolloProvider client={client}>
              {isRender && renderHtml(children)}
            </ApolloProvider>
          </div>
        </div>
        {user ?
          <footer className="footer">
            <div className='toolbar d-flex justify-content-center px-4'>
              <Footer />
            </div>
          </footer>
          : <></>
        }
      </body>
    </html>
  );
}

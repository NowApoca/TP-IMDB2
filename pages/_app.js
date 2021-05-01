import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import i18n from '../i18n';
import hit from '../api/hit'
import APIEndpoints from '../api/endpoints'
import '../styles/globals.scss'
import { withNamespaces } from 'react-i18next';
import { ToastProvider } from 'react-toast-notifications'
import Head from 'next/head'

function MyApp({ Component, t }) {
  const [loading, setLoading] = useState(true)
  const notIdentifiedUser = {
    identified: false,
    role: 'NOT_USER',
    isDark: false,
  }
  const [user, setUser] = useState(notIdentifiedUser);
  const router = useRouter()
  
  useEffect(() => {
    if (process.browser) {
      //hit(APIEndpoints.USERS.GET.SESSION()).then( result => {
      //  if(result.status == 200){
      //    setUser(result.data);
      //  }else{
      //    localStorage.removeItem('ortAccessToken')
      //    setUser(notIdentifiedUser);
      //  }
      //  setLoading(false)
      //})
      setLoading(false)
    }
  }, []);

  return (
    <>
      <Head>
        <title>CRITICAR</title>
        <link rel="shortcut icon" href="./logo.png" />
      </Head>
      {
        loading ? <h5>...</h5> :(
          <ToastProvider autoDismissTimeout={4000} autoDismiss={true}>
            <div className={`${user.isDark? 'dark-app': 'light-app'}`}>
              <Component t={t} user={user} />
            </div>
          </ToastProvider>
        )  
      }
    </>
  );
}

export default withNamespaces()(MyApp);

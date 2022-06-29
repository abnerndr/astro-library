import Router from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { createContext, useEffect, useState } from 'react';

import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '@/services/firebase';

type AuthContextType = {
  user: any;
  signIn: () => Promise<void>;
  signUp: () => Promise<void>;
  signInFromGoogle: any;
  signOut: any;
};

export const AuthContext = createContext({});
export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<string>();
  const [token, setToken] = useState<string>();
  const [providerId, setProviderId] = useState<string>();

  useEffect(() => {
    async function loadUserFromCookies() {
      const { ['astro.token']: token, ['astro.user']: user, ['astro.provider_id']: providerId } = parseCookies();
      if (typeof window !== 'undefined') {
        setToken(token);
        setUser(user);
        setProviderId(providerId);
      }
    }
    loadUserFromCookies();
  }, []);

  async function signIn({ email, password }: any) {
    const authentication = auth;
    signInWithEmailAndPassword(authentication, email, password)
      .then((response: any) => {
        Router.push('/private/home');
        setCookie(null, 'astro.token', response._tokenResponse.refreshToken, {
          maxAge: 60 * 60 * 1 * 24 * 30, //30 days
          path: '/'
        });

        setCookie(null, 'astro.user', JSON.stringify(response.user), {
          maxAge: 60 * 60 * 1 * 24 * 30, //30 days
          path: '/'
        });

        setCookie(null, 'astro.provider_id', response.providerId, {
          maxAge: 60 * 60 * 1 * 24 * 30, //30 days
          path: '/'
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function signInFromGoogle() {
    const authentication = auth;
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result: any) => {
        setCookie(null, 'astro.token', result._tokenResponse.refreshToken, {
          maxAge: 60 * 60 * 1 * 24 * 30, //30 days
          path: '/'
        });

        setCookie(null, 'astro.user', JSON.stringify(result.user), {
          maxAge: 60 * 60 * 1 * 24 * 30, //30 days
          path: '/'
        });

        setCookie(null, 'astro.provider_id', result.providerId, {
          maxAge: 60 * 60 * 1 * 24 * 30, //30 days
          path: '/'
        });
        Router.push('/private/home');
      })
      .catch((error) => {});
  }

  async function signUp({ email, password }: any) {
    const authentication = auth;
    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        Router.push('/public/authentication/login');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function signOut() {
    const authentication = auth;
    authentication
      .signOut()
      .then(() => {
        destroyCookie({}, 'astro.token');
        destroyCookie({}, 'astro.user');
        destroyCookie({}, 'astro.provider_id');
        Router.push('/public/authentication/login');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return <AuthContext.Provider value={{ user, signIn, signUp, signOut, signInFromGoogle }}>{children}</AuthContext.Provider>;
}

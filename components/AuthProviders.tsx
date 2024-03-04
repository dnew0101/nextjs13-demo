"use client";

import { getProviders, signIn } from 'next-auth/react';
import { useState, useEffect, Fragment } from 'react';

import Button from './Button';

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
};

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    fetchProviders();
  }, []);

  return (
    <Fragment>
      {providers ? (
        <div>
          {Object.values(providers).map((provider: Provider, i) => (
            <Button key={i} title="Sign In" handleClick={() => signIn(provider?.id)} />
          ))}
        </div>
      ) : (
        <p>Loading providers...</p> // Or any desired loading state indicator
      )}
    </Fragment>
  );
};


export default AuthProviders;
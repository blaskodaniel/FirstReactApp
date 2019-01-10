import { LoginState } from '@sensenet/client-core';
export interface AppProps {
    login: Function;
    userName: string;
    loginState: LoginState;
    store: any;
    repository: any;
    getItem: Function;
  }
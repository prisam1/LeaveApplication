import axios from 'axios';
import { Alert } from 'react-native';
import { logout } from '../../utils/logout';
import { useDispatch } from 'react-redux';
import { setAppReload } from '../../store/reducer/ui-controller';
import { setUser } from '../../store/reducer/user';
import { add, getByKey } from '../../utils/storage-setup';
import { BASE_URL } from '../../utils/constants';
import { createContext, useContext, useEffect, useState } from 'react';
import { useAppSelector } from '../../store/store';
// import { setEmpID } from '../../store/reducer/user';
interface AuthProps {
  onLogin?: (
    email: string | null,
    EmpID: string | null,
    Username: string | null,
    Password: string | null,
  ) => Promise<any>;
  onLoginUser?: (email: string | null, password: string | null) => Promise<any>;
  authState?: { token: string | null; authenticated: boolean | null };
  onLogout?: () => Promise<any>;
}

const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const dispatch = useDispatch();
  const { reload } = useAppSelector((state: { uiController: any; }) => state.uiController);
  const { user } = useAppSelector(state => state.user)
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: null,
  });
  
  useEffect(() => {
    const loadToken = async () => {
      let token: any = await getByKey('user');
      token = JSON.parse(token);
      if (token) {
        dispatch(setUser(JSON.parse(JSON.stringify(token))));
        setAuthState({
          token: token.jwtToken,
          authenticated: true,
        });

        dispatch(setAppReload(false));
      }
    };
    if (reload) {
      loadToken();
    }
  }, [reload]);

  const login = async (
    email: string,
    EmpID: string,
    Username: string,
    Password: string,
    CreatedBy: string,
  ) => {
    try {
      let payload = {
        "LoginID": "",
        "EmpID": "",
        "Username": email,
        "Password": Password,
        "CreatedBy": "",
        "IsActive": 1
      }
      const userData: any = await axios.post(`${BASE_URL}/LoginData`, payload);
      if (userData.Table && userData.data.Table) {
        dispatch(setUser({ ...userData.data.Table }));
        await add('user', JSON.stringify(userData.data.Table));
        if (userData.data.Table.newUser) {
          return true;
        } else {
          setAuthState({
            token: userData.data.Table.jwtToken,
            authenticated: true,
          });
        }
      }
    } catch (error) {
      Alert.prompt('User not found');
    }
  };

  const userLoginWithPassword = async (email: string, Password: string) => {
    try {
      let payload = {
        "LoginID": "",
        "EmpID": "",
        "Username": email,
        "Password": Password,
        "CreatedBy": "",
        "IsActive": 1
      }
      const userData: any = await axios.post(
        `${BASE_URL}/LoginData`,
        payload,
      );
      if (userData.data && userData.data.Table) {
        const { Table } = userData.data
        const data = Table[0];
        dispatch(setUser({ ...data }));
        await add('user', JSON.stringify(data));
        setAuthState({
          token: data.jwtToken,
          authenticated: true,
        });
        console.log("user", user)
        // console.log("user-id-", data.EmpID)
      }
    } catch (error) {
      Alert.prompt('User not found');
    }
  };
  const handleLogout = () => {
    logout();
    setAuthState({
      token: null,
      authenticated: null,
    });
  };

  const value = {
    onLogin: login,
    onLoginUser: userLoginWithPassword,
    onLogout: handleLogout,
    authState,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

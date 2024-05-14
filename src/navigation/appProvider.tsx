import { NavigationContainer } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';

type Props = {
    children: ReactNode;
};
export const navigationRef: any = React.createRef();

const AppProvider = ({ children }: Props) => {

    return (
        <Provider store={store}>
            <NavigationContainer ref={navigationRef}>
                {children}
            </NavigationContainer>
        </Provider>
    );
};

export default AppProvider;

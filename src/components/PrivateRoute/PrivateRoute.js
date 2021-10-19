import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { allAuth } = useAuth();
    const { user, isLoading } = allAuth;
    if (isLoading) {
        return <Spinner animation="border" variant="success"></Spinner>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.displayName ? (children) : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                />
            }
        >

        </Route>
    );
};

export default PrivateRoute;
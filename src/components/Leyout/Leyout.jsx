import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MenuNavLink, Header, Navigation, MainContent } from './Leyput.styled';
// import styled from 'styled-components';

const Leyout = () => {
    return (
        <>
            <Header>
                <Navigation>
                    <MenuNavLink to={'/'}>Home</MenuNavLink>
                    <MenuNavLink to={'/movies'}>Movies</MenuNavLink>
                </Navigation>
            </Header>
            <MainContent>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </MainContent>
        </>
    );
};

export default Leyout;

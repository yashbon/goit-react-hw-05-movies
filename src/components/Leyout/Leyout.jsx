import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MenuNavLink, Header } from './Leyput.styled';
// import styled from 'styled-components';

const Leyout = () => {
    return (
        <>
            <Header>
                <nav>
                    <MenuNavLink to={'/'}>Home</MenuNavLink>
                    <MenuNavLink to={'/movies'}>Movies</MenuNavLink>
                </nav>
            </Header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};

export default Leyout;

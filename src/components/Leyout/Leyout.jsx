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
                <Outlet />
            </main>
        </>
    );
};

export default Leyout;

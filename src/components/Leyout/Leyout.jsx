import { NavLink, Outlet } from 'react-router-dom';

const Leyout = () => {
    return (
        <div>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/movies'}>Movies</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Leyout;

// import { Children } from 'react';
// import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const GoBack = props => {
    // console.log('props: ', props);
    const {
        // pathBack,
        children,
    } = props;
    // console.log('pathBack: ', pathBack);

    return (
        <Link to={props.to}>
            {/* <HiArrowLeft size="18" /> */}
            {/* <span>back</span> */}
            {children}
        </Link>
    );
};

export default GoBack;

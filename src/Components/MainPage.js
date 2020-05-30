import React from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const MainPage = () => {
    // const {loading : authloading, user} = useAuth0();
    
    // if (authloading || !user) {
    //     return <div>Loading...</div>;
    //   }
    return (
        <>
            <Button as={Link} primary to="/Home">Home</Button>
        </>
    )
}
export default MainPage;
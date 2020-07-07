import {Container, Image, Col} from 'react-bootstrap'
import { useState } from 'react';
import {connect} from 'react-redux'
import {getCovidData} from '../store/actions/index';
const Home = ( {getCovidData}) => {
const [zoom, setZoom] = useState(50)
return(
    <Container >
       

    </Container>
)
}

const mapStateToProps = state =>({

})
export default connect(mapStateToProps,{getCovidData})(Home);
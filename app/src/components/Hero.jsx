import Restaurante from '../assets/R ESTAURANTE.png'

const Hero = () => {
    return ( 
        <div className="container-fuid d-flex">
            <div className="col-6 min-vh-100 d-flex justify-content-center align-items-center">
                <div className='col-8 d-flex flex-column align-items-center'>
                    <img className='col-8' src={Restaurante} alt="Restaurante" />
                    <p className='col-12 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <a href='#' className='px-5 py-3 text-white bg-danger rounded-pill'><b>DINE WITH US</b></a>
                </div>
            </div>
            <div className="col-6 bg-danger min-vh-100 rounded-circle" id="heroRight"></div>
        </div>
     );
}
 
export default Hero;
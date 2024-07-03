import PropTypes from 'prop-types';
import '../../Styles/Style.css'
const Coversection = () => {
    return (
        <section className='style mx-10 w-auto my-10 p-5'>

            <div className='text-center text-white mx-16 lg:pt-20 p-10 space-y-8'>
                <h1 className=' font-bold text-5xl mx-5 space-y-2'>Discover an exceptional cooking class tailored for you!</h1>
                <p >Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
              
                    <button className='bg-green-400 w-52 font-semibold text-black p-4 rounded-3xl text-xl'>Explore Now</button>
                    <button className=" font-semibold text-xl btn-outline border-2 p-3 w-52 rounded-3xl ml-9">Our Feedback</button>
     </div>
        </section>

    );
};
Coversection.propTypes = {
    Coversection: PropTypes.object.isRequired,
}

export default Coversection;
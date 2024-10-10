import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Start = () => {
    const {startQuiz, showStart} = useContext(DataContext);
    return (
        <section className='text-white text-center bg-dark' style={{ display: `${showStart ? 'block' : 'none'}` }}>
           
            <div className="container">
            <img src="https://swiftrut.com/wp-content/uploads/2024/06/Light.png" className="imgbtn" alt="" width="200" height="50"></img>
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4 start'>Start Your Quiz Exam</h1>
                        <button onClick={startQuiz} type="button" class="btn btn-danger">Start Quiz</button>
                    </div>
          
                </div>
            </div>
            
        </section>
    );
};

export default Start;
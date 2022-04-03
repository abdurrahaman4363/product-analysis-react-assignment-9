import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div>
                    <h1>TOP TEN CRICKET BATS</h1>
                    <p>A cricket bat is a specialised piece of equipment used by batters in the sport of cricket to hit the ball, typically consisting of a cane handle attached to a flat fronted willow wood blade. It may also be used by a batter who is making ground to avoid a run out, by holding the bat and touching the ground with it.</p>
                    <button style={{padding:'10px',width:'200px',margin:'30px',borderRadius:'10px'}}>Live Demo</button>
                </div>
                <div>
                    <img src='https://cdn.wisden.com/wp-content/uploads/2020/03/cricket-bats-980x530.jpg' alt=''></img>
                </div>

            </div>
            <div>
                <h1>Customer Reviews(3)</h1>
                <button style={{padding:"10px",borderRadius:'10px',border:'1px solid white', width:'300px' , background:'blue',color:"white"}}>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;
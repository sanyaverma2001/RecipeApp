import React from 'react'


const Myrecipe = (props) => {
    return (
        <>   
            <div class="card" style={{width:'20rem'}}>
            
                <img src={props.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}😃</h5>
                   
                    <a href={props.link} class="btn btn-warning" placeholder='_blank'>Get Recipe🥫</a>
                </div>
            </div>




        </>
    );
}
export default Myrecipe;
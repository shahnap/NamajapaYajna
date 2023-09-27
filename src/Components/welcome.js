import React from "react";
import "./welcome.css"
function Welcome ({onStartClick}){
    return(
        <div className="welcome"><h1>welcome</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae et ducimus quaerat quasi alias modi earum laudantium accusantium a eos. Adipisci ea deleniti itaque dolore expedita soluta reiciendis maiores quis, vel iure laborum facere aperiam, accusamus earum aspernatur! Perferendis eius sunt, nesciunt quasi saepe aut aperiam in sit sapiente eaque temporibus assumenda. Voluptas voluptatem nulla sit explicabo? Minima, delectus! Quod esse eos quidem id quasi! Ut incidunt ullam neque ex ab ipsa esse eum atque.</p>
        <button onClick={onStartClick}>Start</button>
        </div>
    )
}
export default Welcome;
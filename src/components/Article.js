import React from 'react';

export const Article = (props) => (
    <section className="article">  
            {props.items.map(item => ( 
            <p><img src={item.img} widht="50" height="70" ></img>{item.text}</p> 
            ))}
    </section>
);


import React from 'react';

export const Article = (props) => (
    <section className="article">  
            {props.items.map(item => ( 
            <p><img src={item.img} widht="100" height="100" ></img>{item.text}</p> 
            ))}
    </section>
);


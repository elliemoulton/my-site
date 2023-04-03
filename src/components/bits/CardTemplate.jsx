import React from 'react';
import { Link } from 'react-router-dom';

function CardTemplate(props) {
    // console.log('props.img', props.img)
    return (
        <>
            <div className='card'>
                <Link to={props.link}>
                    <img
                        src={props.img}
                        // src={require('./imgs/coffee-card.png')}
                        className='card-img'
                        alt={props.imgAlt}
                    />
                    <h3 className='title'>{props.title}</h3>
                    <p className='content'>{props.content}</p>
                </Link>
            </div>
        </>
    );
}

export default CardTemplate;

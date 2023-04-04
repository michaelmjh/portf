import React from 'react';
import '../Styles/MenuStyle.css';

// COMPONENTS

function MenuButton({menuOption}) {

    if (menuOption['Link'] == window.location.pathname) {
        return (
            <>
                <div className='menuButton'>
                    <a>
                        <img className='buttonImage' src={menuOption['ImageSelected']} />
                        <p className='buttonTextSelected'>{menuOption['Text']}</p>
                    </a>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='menuButton'>
                    <a>
                        <img className='buttonImage' src={menuOption['Image']} />
                        <p className='buttonText'>{menuOption['Text']}</p>
                    </a>
                </div>
            </>
        )
    }
 
};

export default MenuButton;
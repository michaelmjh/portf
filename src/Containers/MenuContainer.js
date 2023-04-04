import React from 'react';
import MenuButton from '../Components/MenuButton';
import '../Styles/MenuStyle.css';

import HomeImage from '../Media/MenuIcons/Home.png';
import HomeSelectedImage from '../Media/MenuIcons/HomeSelected.png';
import AboutImage from '../Media/MenuIcons/About.png';
import AboutSelectedImage from '../Media/MenuIcons/AboutSelected.png';
import ProjectsImage from '../Media/MenuIcons/Projects.png';
import ProjectsSelectedImage from '../Media/MenuIcons/ProjectsSelected.png';
import ContactImage from '../Media/MenuIcons/Contact.png';
import ContactSelectedImage from '../Media/MenuIcons/ContactSelected.png';

// COMPONENTS

function MenuContainer() {

    const menuOptions = [
        {
            'Text': 'Home',
            'Image': HomeImage,
            'ImageSelected': HomeSelectedImage,
            'Link': '/'
        },
        {
            'Text': 'About',
            'Image': AboutImage,
            'ImageSelected': AboutSelectedImage,
            'Link': '/about'
        },
        {
            'Text': 'Projects',
            'Image': ProjectsImage,
            'ImageSelected': ProjectsSelectedImage,
            'Link': '/projects'
        },
        {
            'Text': 'Contact',
            'Image': ContactImage,
            'ImageSelected': ContactSelectedImage,
            'Link': '/contact'
        },
    ];

    const menuMapper = menuOptions.map((menuOption, index) => {
        return (
            <MenuButton key={index} menuOption={menuOption}/>
        )
    })

    return (
        <>
            <div className='menuBar'>
                {menuMapper}
            </div>
        </>
  )
};

export default MenuContainer;
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navbar = () => {

    // METHODS TO OPEN/CLOSE NAVBAR
    var isOpen = false;
    const openMenu = () => {
        if (!isOpen) {
            document.querySelector('.nav-links').style.display = 'flex'
            setTimeout(() => {
                document.querySelector('.nav-links').classList.add('show')
                document.querySelector('.dropdown-icon').classList.add('show')
                document.querySelectorAll('.navlink').forEach(link => {
                    link.classList.add('show')
                })
            }, 100)
            setTimeout(() => {
                document.querySelectorAll('.navlink').forEach(link => {
                    link.classList.add('showText')
                })
            }, 300)
        }
        else {
            document.querySelector('.dropdown-icon').classList.remove('show')
            document.querySelectorAll('.navlink').forEach(link => {
                link.classList.remove('showText')
            })
            setTimeout(() => {
                document.querySelector('.nav-links').style.display = 'none'
            }, 1000)
            setTimeout(() => {
                document.querySelector('.nav-links').classList.remove('show')
                document.querySelectorAll('.navlink').forEach(link => {
                    link.classList.remove('show')
                })
            }, 300)
        }
        isOpen = !isOpen;
    }
    const closeMenu = () => {
        if (isOpen) {
            document.querySelector('.nav-links').classList.remove('show')
            document.querySelector('.dropdown-icon').classList.remove('show')
            document.querySelectorAll('.navlink').forEach(link => {
                link.classList.remove('showText')
            })
            setTimeout(() => {
                document.querySelectorAll('.navlink').forEach(link => {
                    link.classList.remove('show')
                })
                document.querySelector('.nav-links').style.display = 'none'
            }, 300)
            isOpen = !isOpen;
        }
    }

    return (
        <div className='navbar' onMouseLeave={closeMenu}>
                <div className='nav-main'>
                    <div className='flex-center'>
                        <h1 className=''>Recipes</h1>
                    </div>
                    <div className='flex-center'>
                        <div className='nav-status flex-center-col'>
                            <div>
                                Home
                            </div>
                            <div>
                                Not signed in
                            </div>
                        </div>
                        <FontAwesomeIcon className='dropdown-icon' onClick={openMenu} icon='chevron-circle-down'/>
                    </div>
                </div>
                <div className='nav-links'>
                    <Link className='navlink flex-center' to='/' onClick={closeMenu}>
                        <FontAwesomeIcon className='nav-icon' icon='home' />
                        <h3>Home</h3>
                    </Link>
                    <div className='navlink flex-center' onClick={closeMenu}>
                        <FontAwesomeIcon className='nav-icon' icon='binoculars' />
                        <h3>Explore</h3>
                    </div>
                    <Link className='navlink flex-center' to='/auth' onClick={closeMenu}>
                        <FontAwesomeIcon className='nav-icon' icon='user' />
                        <h3>Login</h3>
                    </Link>
                </div>

            </div>
    )
}

export default Navbar

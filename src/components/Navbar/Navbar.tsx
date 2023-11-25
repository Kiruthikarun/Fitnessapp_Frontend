"use client"
import React from 'react'
import logo from '@/assets/logo.png'
import { IoIosBody, IoMdPerson } from 'react-icons/io'
import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthPopup from '../AuthPopup/AuthPopup'
import { FaDoorOpen } from 'react-icons/fa';
import { IoMdExit } from 'react-icons/io';

const Navbar = () => {
    const [isloggedin, setIsloggedin] = React.useState<boolean>(false)

    const [showpopup, setShowpopup] = React.useState<boolean>(false)
    const checklogin = async () => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/checklogin', {
            method: 'POST',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.ok) {
                    setIsloggedin(true)
                }
                else{
                    setIsloggedin(false)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleLogout = async () => {
        try {
            await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/logout', {
                method: 'POST',
                credentials: 'include',
            });

            // After successful logout, update the state
            setIsloggedin(false);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };


    React.useEffect(() => {
        checklogin()
    }, [showpopup])

    return (
        <nav className='navbar-container'>
            <div className="leftsection">
            <Image src={logo} alt="Logo" />
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            {/* <Link href='/profile'><IoMdPerson /></Link> */}
            </div>
            <div className="right-section">
                {isloggedin ? (
                    <button onClick={handleLogout}>Logout<IoMdExit 
                    style={{
                        marginLeft:'5px',
                        fontSize: '1.2rem',
                    }}/></button>
                ) : (
                    <button onClick={() => setShowpopup(true)}><FaDoorOpen 
                    style={{
                        marginRight:'5px',
                        fontSize:'1.2rem'
                    }} />Login</button>
                )}
                {showpopup && <AuthPopup setShowpopup={setShowpopup} />}
            </div>
        </nav>
    )
}

export default Navbar
import './header.css'

const Header = () => {
    return (
        <>
            <nav className='navbar'>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header;
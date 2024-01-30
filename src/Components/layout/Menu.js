import Link from 'next/link'

const Menu = (props) => {
    return (
        <div className='text-white'>
            <ul tabIndex={props.tabIndex ?? 1} className={props.className}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about us">About Us</Link>
                </li>
                <li>
                    <Link href="/features">Features</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                <Link href="/how it works">How it works</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/faq">FAQ</Link>
                </li>
                <li>
                    <Link href="/help">Help</Link>
                </li>

                {props.device == 'mobile' && <li className="sm:hidden"><a>Login / Register</a></li>}
            </ul>
        </div>
    )
};

export default Menu;


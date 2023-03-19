import Link from 'next/link';
import styles from '../src/styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link href="/">
                        <button>Home</button>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <button>About Us</button>
                    </Link>
                </li>
                <li>
                    <Link href="/product">
                        <button>Product</button>
                    </Link>
                </li>
                <li>
                    <Link href="/blogs">
                        <button>Blogs</button>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <button>Contact Us</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

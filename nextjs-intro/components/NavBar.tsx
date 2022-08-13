import Link from 'next/link';
import { useRouter } from 'next/router';


export default function NavBar() {
    const router = useRouter();

    return <nav>
        <Link href='/'>
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href='/about'>
            <a className={router.pathname === "/about" ? "active" : ""}>none
                <span>About</span>
            </a>
        </Link>
    </nav>
}
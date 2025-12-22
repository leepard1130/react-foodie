import logoImage from '@/public/images/logo.png';
import Link from 'next/link';

export default function MainHeader() {
    return(
        <>
            <Link href="/">
                <img src={logoImage.src} alt="Foodie Logo"/>
                Next Level Food
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/meals">Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Community</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
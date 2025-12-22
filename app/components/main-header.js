import logoImage from '@/public/images/logo.png';
import Link from 'next/link';
import classes from './main-header.module.css'

export default function MainHeader() {
    return(
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <img src={logoImage.src} alt="Foodie Logo"/>
                Next Level Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
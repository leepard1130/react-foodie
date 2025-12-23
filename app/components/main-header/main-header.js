'use client';
import Link from 'next/link';
import Image from 'next/image';

import classes from './main-header.module.css'
import logoImage from '@/assets/logo.png';
import MainHeaderBackground from './main-header-background';
import { usePathname } from 'next/navigation';


export default function MainHeader() {
    const path = usePathname();
    return(
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImage} alt="Foodie Logo"/>
                    Next Level Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link 
                                className={path.startsWith('/meals') ? classes.active : undefined}
                                href="/meals"
                            >
                                Meals
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className={path === '/community' ? classes.active : undefined}
                                href="/community"
                            >
                                Community
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
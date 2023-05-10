import { useContext } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

import { FiLogOut } from 'react-icons/fi';

import { AuthContext } from '../../contexts/AuthContext';

export function Header() {

    const { user } = useContext(AuthContext);
    const { signOut } = useContext(AuthContext);

    return (
        <header className={styles.headerComponent}>
            <div className={styles.headerContent}>

                <Link href="/dashboard">
                    <img src="/logo.svg" width={190} height={60} />
                </Link>

                {/* <h1>{user?.name}</h1> */}

                <nav className={styles.menuNav}>
                    <Link href="/category" className={styles.text}>Categoria</Link>

                    <Link href="/product" className={styles.text}>Cardápio</Link>

                    <Link href="/user" className={styles.text}>{user?.name}</Link>

                    <button onClick={signOut}>
                        <FiLogOut color="#FFF" size={24} />
                    </button>
                </nav>

            </div>
        </header>
    )
}
import { Link } from 'react-router'
import styles from './Header.module.css'

export function Header() {
    return (
        <header>
            <h1>
                Challenge ForIt - Ramiro Zarate
            </h1>
            <div className={styles.navLinks}>
                <Link className={styles.actionLink} to="/">Inicio</Link>
                <Link className={styles.actionLink} to="/add">Agregar tarea</Link>
            </div>
        </header>
    )
}
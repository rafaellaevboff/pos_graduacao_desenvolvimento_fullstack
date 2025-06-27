import styles from './Home.module.scss'
import { FaCoffee } from "react-icons/fa"
import Navbar from '../../components/Navbar';

const CoffeeIcon = FaCoffee as unknown as React.FC;

export default function App(){
    return(
        <>
        <Navbar/>
            <h1 className={styles.title}>Minha App</h1>
            <h2 style={{
                color: 'blue',
                backgroundColor: 'yellow',
            }}>
                <CoffeeIcon/>
                Meu exemplo
            </h2>
        </>
        
    )
}
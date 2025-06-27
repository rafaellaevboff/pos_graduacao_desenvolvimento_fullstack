import styles from './Home.module.scss'

export default function Home(){
    return(
        <>
            <h1 className={styles.title}>Minha App</h1>
            <h2 style={{
                color: 'blue',
                backgroundColor: 'yellow',
            }}>
                Meu exemplo
            </h2>
        </>
        
    )
}
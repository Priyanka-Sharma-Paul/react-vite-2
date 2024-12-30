import styles from "./Navbar.module.css"

const MyNavbar = () => {
    return (
        <>
        <nav className={styles.navContainer}>
            <div>
                
                <a href="/" className={styles.navLogo}>
                    <img src="https://flowbite.com/docs/images/logo.svg"></img>
                    <span>GeekFoods</span>
                </a>
                
            </div>
            <div className={styles.navLinkContainer}>
                <a className={styles.active} href="/home">Home</a>
                <a href="/quote">Quote</a>
                <a href="/resturants">Resturants</a>
                <a href="/foods">Foods</a>
                <a href="/contact">Contact</a>

            </div>
            <div >
                <button className={styles.navButton}>Get started</button>
            </div>
        </nav>
        </>
    )
}
export default  MyNavbar;

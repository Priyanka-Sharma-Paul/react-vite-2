 import styles from "./Hero.module.css";
  
  
  
  const HeroScetion = () =>{
    return (
        <>
            <div className={styles.heroBanner}>
                <div className={styles.heroBannerConatainer}>
                    <h1 className={styles.heroBannerText1}>Let us find your</h1>
                    <h1 className={styles.heroBannerText2}>Forever Food.</h1>
                    <p className={styles.heroBannerText3}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                    <div className={styles.heroButtonsContainer}>
                        <button className={styles.heroBannerbutton1}>Search Now</button>
                        <button className={styles.heroBannerbutton2}>Know more</button>
                    </div>
                </div>
            </div>
        </>
    )

};
export default HeroScetion ;
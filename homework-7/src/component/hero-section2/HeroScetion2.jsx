import Styles from "./HeroScetion2.module.css"


const HeroScetion2 = () => {
    return (
        <>
            <div className={Styles.HeroScetion2Container}>
                <div className={Styles.HeroScetion2Background}></div>
                <div className={Styles.HeroScetion2ImgContainer}>
                    <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80 " alt="House" width="100%"></img>
                </div>
                <div className={Styles.HeroScetion2TextContainer}>
                    <h1 className={Styles.HeroScetion2Text1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
                    <p className={Styles.HeroScetion2Text2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                    <button className={Styles.HeroScetion2button} >Get in Touch</button>
                </div>
            </div>

        </>
    )

};
export default HeroScetion2;
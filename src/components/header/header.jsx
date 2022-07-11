import React from "react";
import styles from "../header/header.module.scss";
import {Link} from "react-router-dom";
let p = 0;
const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.headerTxt}>
                <Link to ='/' className={styles.titleHeader}>shopairminsk.by</Link>
                <p className={styles.bodyHeader}>наушники гаджеты и аксессуары минск</p>
            </div>
            
            <div className={styles.headerBtn}>
                <div id="mb2" className={styles.mainBurger} onClick={()=>{
                    // let elem2 = document.querySelector('.mainBurger');
                    let elem2 = document.getElementById('mb2');
                    elem2.style.position = "fixed";
                    elem2.style.width = "50%";
                    elem2.style.height = "200px";

                    let elem = document.getElementById('mb1');
                    p += 1;
                    if(p==1){
                        elem.style.display = "flex";
                        elem2.style.position = "fixed";
                        elem2.style.width = "50%";
                        elem2.style.height = "200px";
                        elem2.innerHTML = "<p className={styles.btnOnBurger}>ЗАКРЫТЬ</p>";
                    }
                    else if(elem.style.display == "none"){
                        elem.style.display = "flex";
                        elem2.style.position = "fixed";
                        elem2.style.width = "50%";
                        elem2.style.height = "200px";
                        elem2.innerHTML = "<p className={styles.btnOnBurger}>ЗАКРЫТЬ</p>";
                    }
                    else{
                        elem.style.display = "none";
                        elem2.style.position = "static";
                        elem2.style.width = "100%";
                        elem2.style.height = "100%";
                        elem2.innerHTML = "<p className={styles.btnOnBurger}>МЕНЮ</p>";
                    }
                    // 
                    
                }}><p className={styles.btnOnBurger}>МЕНЮ</p></div>
                <ul className={styles.menuBurger} id="mb1">
                    <li id="nm1" className={styles.notMainBurger}><Link to="/order" className={styles.btnCatalog}><p>корзина</p></Link></li>
                    <li id="nm2" className={styles.notMainBurger}><Link to = '/about' className={styles.btnAbout}><p>о нас</p></Link></li>
                    <li id="nm3" className={styles.notMainBurger}><Link to = '/contacts' className={styles.btnContascts}><p>контакты</p></Link></li>
                </ul>
                
                
                
            </div>
        </header>
    )
}

export default Header;
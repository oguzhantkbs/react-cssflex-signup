import React from 'react'
import FacebokIcon from './Icons/FacebokIcon'
import GithubIcon from './Icons/GithubIcon'
import LinkedinIcon from './Icons/LinkedinIcon'
import styles from './signup.module.css'

function SignUp() {
    return (
        <div className={styles.upper}>
            <div className={styles.container}>
                <div className={styles.leftside}>
                    <div className={styles.leftsidecontent}>
                        <h1 className={styles.leftsidetitle}>Hoşgeldiniz</h1>
                        <p className={styles.leftsidep}>Bizimle bağlantıda kalmak için lütfen personel bilgilerinizi giriniz</p>
                        <a href='' className={styles.leftsidebutton}>Giriş</a>
                    </div>
                </div>
                <div className={styles.rightside}>
                    <div className={styles.rightsidecontent}>
                        <h1 className={styles.rightsidetitle}>Hesap Oluştur</h1>
                        <div className={styles.links}><LinkedinIcon /><FacebokIcon /><GithubIcon /></div>
                        <p className={styles.socialtext}>veya kayıt için E-Mailini kullan</p>
                        <form className={styles.form}>
                            <input className={styles.inputs} type="text" placeholder='Ad' autocomplete="new-password" />
                            <input className={styles.inputs} type="email" placeholder='E-Posta'  autocomplete="new-password"/>
                            <input className={styles.inputs} type="password" placeholder='Şifre' autocomplete="new-password" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
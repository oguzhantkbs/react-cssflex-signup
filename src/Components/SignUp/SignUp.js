import React from 'react'
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
                        <div className={styles.links}>Links</div>
                        <p className={styles.socialtext}>veya kayıt içi n e-mailini kullan</p>
                        <form className={styles.form}>
                            Form
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
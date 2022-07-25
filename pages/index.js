import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Comps/Navbar'
import Footer from '../Comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    
    
    <div >
    
      <h1 className={styles.title}>homepage</h1>
      <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eum hic, cum optio voluptatem ipsum magnam modi ullam deserunt voluptas illo labore magni! Libero culpa, laboriosam sunt magni delectus excepturi.</p>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda suscipit sunt magnam sequi expedita necessitatibus voluptate, temporibus ullam. Illum animi repellat vero eius laudantium voluptate praesentium ipsam assumenda perspiciatis dolores?</p>
      <Link  href='/Net'>
        <a className={styles.btn}> see NetDesign list</a> 
      </Link>
    </div>
      
      
  )
}

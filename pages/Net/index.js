import React from 'react'
import styles from '../../styles/Net.module.css'
import Link  from 'next/link'



export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {nets:data}
  }
}

function Index({nets}) {
  return (
    <div>
      <h1>All Netdesignr</h1>
      {nets.map(net => (
        <Link href={`/Net/' ${net.id}`} key={net.id}>
          <a className={styles.single}>
            <h3>{net.name}</h3>

          </a>
        </Link>
        
      ))}
    </div>
  )
}

export default Index

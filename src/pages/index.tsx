import React from 'react'
import { PageProps } from 'gatsby'
import * as styles from './index.module.scss'

export default function IndexRoute(props: PageProps) {
  return (
    <>
      <h1>Ciffelia</h1>
      <div className={styles.main}>
        <p>Hello world!</p>
        <p>Path: {props.path}</p>
      </div>
    </>
  )
}
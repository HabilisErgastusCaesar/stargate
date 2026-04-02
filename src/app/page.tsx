'use client'

import styles from "./page.module.css";
import { useState } from "react";

import { Header } from "../../layouts/header/header";
import { StargateSmallerLayoutContainer } from "../../layouts/stargateSmallerLayoutContainer";
import { StargateBiggerLayoutContainer } from "../../layouts/stargateBiggerLayoutContainer";
import { setjustWindowSize } from "../../sharedFunc/adjustWindowSize";

export default function Home() {
  const [ windowSize, setWindowSize ] = useState({
    smallerOrBigger : true,
  })

  if (typeof window === undefined) {
    return <h1></h1>
  }
  
  const windowSizeSelect = windowSize.smallerOrBigger
  
  setjustWindowSize({setWindowSize, windowSizeSelect});
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header class_select="container_sgOne" />
        {windowSize.smallerOrBigger ? (
          <StargateSmallerLayoutContainer select_serie={"sgOne"} />
        ):(
          <StargateBiggerLayoutContainer select_serie={"sgOne"} />
        )}
      </main>
    </div>
  );
}

'use client'

import styles from "./../page.module.css";
import { useEffect, useState } from "react";

import { StargateSmallerLayoutContainer } from "../../../layouts/stargateSmallerLayoutContainer";
import { StargateBiggerLayoutContainer } from "../../../layouts/stargateBiggerLayoutContainer";
import { Header } from "../../../layouts/header/header";

export default function Home() {
  const [ windowSize, setWindowSize ] = useState({
    smallerOrBigger : true,
  })

  const adjustWindowSize = () => {

  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", adjustWindowSize)
    }
  }, [])

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header class_select="container_sgOne" />
        {windowSize.smallerOrBigger ? (
          <StargateSmallerLayoutContainer select_serie={"sgOne"} />
        ):(
          <StargateBiggerLayoutContainer />
        )}
      </main>
    </div>
  );
}
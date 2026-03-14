'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

import { DropDownMenu } from "../../layouts/dropDownMenu/dropDownMenu";
import { SearchFilter } from "../../layouts/searchFilter/searchFilter";
import { StargateSmallerLayoutContainer } from "../../layouts/stargateSmallerLayoutContainer";
import { StargateBiggerLayoutContainer } from "../../layouts/stargateBiggerLayoutContainer";

export default function Home() {
  const [ windowSize, setWindowSize ] = useState({
    smallerOrBigger : true,
  })

  const adjustWindowSize = () => {

  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", adjustWindowSize);
    }

    return () => {
      window.removeEventListener("resize", adjustWindowSize);
    }
  }, [])

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <DropDownMenu />
        <SearchFilter selection={"container_sgOne"}/>
        {windowSize.smallerOrBigger ? (
          <StargateSmallerLayoutContainer selection={"sgOne"} />
        ):(
          <StargateBiggerLayoutContainer />
        )}
      </main>
    </div>
  );
}

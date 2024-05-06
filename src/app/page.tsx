import Image from "next/image";

import classes from "./page.module.css";

export default function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.textContainer}>
        <h1>Creative Thoughts Agency.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          eaque, eos praesentium sapiente similique voluptate?
        </p>
        <div className={classes.buttons}>
          <button className={classes.button}>Learn more</button>
          <button className={classes.button}>Contact</button>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <Image src="/hero.gif" fill alt="" />
      </div>
    </main>
  );
}

import classes from "./footer.module.css";

type Props = {};
export default function Footer({}: Props) {
  return (
    <div className={classes.footer}>
      <div className={classes.logo}>Sadykov</div>
      <div className={classes.text}>
        Sadykov creative thoughts agency &#169; All rights reserved.
      </div>
    </div>
  );
}

import Image from "next/image";
import classes from "./contact.module.css";

type Props = {};
export default function ContactPage({}: Props) {
  return (
    <div className={classes.contact}>
      <div className={classes.imgContainer}>
        {/*<Image src="contact.webp" alt="" fill className={classes.img} />*/}
      </div>
      <div className={classes.formContainer}>
        <form action="" className={classes.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Phone number (Otpional)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Minimum 10 characters"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

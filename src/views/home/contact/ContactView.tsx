import React, { useState } from "react";
import styles from "./ContactView.module.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Email } from "@mui/icons-material";
import axios from "axios";
import {
  uniqueID,
  useNotification,
} from "@/context/notifications/NotificationProvider";
import { Element } from "react-scroll";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const ContactView = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [info, setInfo] = useState(initialValues);
  const notification = useNotification();
  const validateForm = () => {
    const { name, email, message } = info;
    const isFormValid =
      name.trim() !== "" &&
      message.trim() !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    setIsDisabled(!isFormValid);
  };

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    validateForm();
  };

  const sendInfo = async () => {
    try {
      const res = await axios.post("/api/submitContactForm", info);
      if (res.status === 200) {
        notification({
          id: uniqueID(),
          type: "Success",
          message: "Message delivered",
        });
      } else {
        notification({
          id: uniqueID(),
          type: "FAILED",
          message: "UPS Something went wrong!",
        });
      }
      // Handle response
    } catch (err) {
      notification({
        id: uniqueID(),
        type: "FAILED",
        message: "UPS Something went wrong!",
      });
      console.error(err);
      // Handle error
    }
  };
  console.log(isDisabled);
  return (
    <Element name="contact" className={styles.container}>
      <h3>CONTACT ME</h3>

      <div className={styles.inner_container}>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={info.name}
            onChange={(e) => changeHandler(e)}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={info.email}
            onChange={(e) => changeHandler(e)}
          />
          <textarea
            id="textarea"
            placeholder="Message"
            name="message"
            value={info.message}
            onChange={(e) => changeHandler(e)}
          ></textarea>
        </div>

        <div className={styles.info}>
          <h3>CONTACT INFORMATION</h3>

          <div>
            <LocalPhoneIcon />
            <span>+353 83-894-4475</span>
          </div>
          <div>
            <Email />
            <span>danielchochlinski@gmail.com</span>
          </div>
          <button
            disabled={isDisabled}
            onClick={() => sendInfo()}
            className={
              !isDisabled ? "animated-button" : "animated-button disabled"
            }
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            CONTACT ME
          </button>
        </div>
      </div>
    </Element>
  );
};

export default ContactView;

import React, { useState } from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitapi = "http://localhost:3000/api/postcontact/";

    let data = {
      name: name,
      email: email,
      phone: phone,
      desc: desc,
    };

    //for posting data to server now check contactdata file, new file will be created their
    //after submitting
    fetch(submitapi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
          console.log("Success : ", data)
          alert("Thanks for your submission")
          //sets field back to empty
          setname('')
          setemail('')
          setphone('')
          setdesc('')
      })
      .catch((error) => {
        console.error("Error : ", error);
      });

    console.log(name, email, phone, desc);
  };

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    }
    // console.log(e.target.value, "change")
  };

  return (
    <div className={styles.container}>
      <form id={styles.contact} action="" method="post" onSubmit={handleSubmit}>
        <h3>Contact Us</h3>
        <h4>Contact us for custom quote</h4>
        <div>
          <input
            placeholder="Your name"
            name="name"
            value={name}
            onChange={handleChange}
            type="text"
            required
            autoFocus
          />
        </div>
        <div>
          <input
            placeholder="Your Email Address"
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
            required
          />
        </div>
        <div>
          <input
            placeholder="Your Phone Number"
            name="phone"
            value={phone}
            onChange={handleChange}
            type="tel"
            required
          />
        </div>
        <div>
          <input
            placeholder="Your Web Site (optional)"
            name="website"
            type="url"
          />
        </div>
        <div>
          <textarea
            placeholder="Type your message here...."
            name="desc"
            value={desc}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { Avatar } from "@mui/material";

const contactDetails = () => {
  const [contactDetails, setcontactDetails] = useState([]);
  const contactDetailsCollectionRef = collection(db, "contacts");
  const { id } = useParams();

  useEffect(() => {
    const getContactDetails = async () => {
      const data = await getDocs(contactDetailsCollectionRef);
      setcontactDetails(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getContactDetails();
  }, []);
  return (
    <div className="contact-details">
      {contactDetails.map((contactdetail) => {
        if (contactdetail.id === `${id}`) {
          return (
            <article key={contactdetail.id}>
              <Avatar
                alt={"image"}
                className="avatar"
                src={contactdetail.image}
                variant="rounded"
                sx={{ width: 200, height: 200 }}
              />
              <h2>{contactdetail.fName}</h2>
              <h2>{contactdetail.sName}</h2>
              <p>{contactdetail.services}</p>
              <Link
                target="_blank"
                to={"https://www.instagram.com/" + contactdetail.instagram}
              >
                <BsInstagram /> {contactdetail.instagram}
              </Link>
              <br />
              <Link
                target="_blank"
                to={"https://wa.me/+" + contactdetail.whatsapp}
              >
                <BsWhatsapp /> {contactdetail.whatsapp}
              </Link>
            </article>
          );
        }
      })}
      <Link to={"/"} className="add">
        <AiOutlineHome
          className="plus"
          style={{
            backgroundColor: "#747bff",
            padding: "10px",
            borderRadius: "5vw",
            fontSize: "6vw",
            color: "#573091",
          }}
        />
      </Link>
    </div>
  );
};

export default contactDetails;

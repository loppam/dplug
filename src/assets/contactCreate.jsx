import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import { storage } from "./firebase";
import { db } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, getDocs, addDoc, arrayUnion } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const contactCreate = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const [newfName, setnewfName] = useState("");
  const [newsName, setnewsName] = useState("");
  const [newservices, setnewServices] = useState("");
  const [newinstagram, setnewInstagram] = useState("");
  const [newwhatsapp, setnewWhatsapp] = useState("");
  const [contactDetails, setcontactDetails] = useState([]);
  const contactDetailsCollectionRef = collection(db, "contacts");
  const navigate = useNavigate();

  useEffect(() => {
    const getContactDetails = async () => {
      const data = await getDocs(contactDetailsCollectionRef);
      setcontactDetails(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getContactDetails();
  }, []);

  const addContact = async (e) => {
    e.preventDefault();
    await addDoc(contactDetailsCollectionRef, {
      fName: newfName,
      sName: newsName,
      services: newservices,
      instagram: newinstagram,
      whatsapp: newwhatsapp,
      image: url
    });
    navigate("/");
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message, "error getting the upload bytes");
      });
  };
  return (
    <div className="contact-create">
      <Avatar
        alt={"image"}
        className="avatar"
        src={url}
        sx={{ width: 200, height: 200 }}
      />
      <form action="" onSubmit={addContact}>
        <div className="flex-contact-create">
          <input
            accept="image/*"
            type="file"

            onChange={handleImageChange}
          />
          <button onClick={handleSubmit}>Upload</button>
        </div>
        <input
          type="text"
          required
          placeholder="First Name"
          onChange={(event) => {
            setnewfName(event.target.value);
          }}
        />
        <input
          type="text"
          required
          placeholder="Second Name"
          onChange={(event) => {
            setnewsName(event.target.value);
          }}
        />
        <input
          type="text"
          required
          placeholder="Services you offer?"
          onChange={(event) => {
            setnewServices(event.target.value);
          }}
        />
        <input
          type="text"
          required
          placeholder="Instagram"
          onChange={(event) => {
            setnewInstagram(event.target.value);
          }}
        />
        <input
          type="text"
          required
          placeholder="Whatsapp"
          onChange={(event) => {
            setnewWhatsapp(event.target.value);
          }}
        />
        <button>Add Blog</button>
      </form>
      <Link to={"/"} className="addd">
        <AiOutlineHome className="plus"
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

export default contactCreate;

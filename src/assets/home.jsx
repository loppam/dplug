import { useEffect, useState } from "react";
import { db } from "./firebase";
import ContactList from "./contactlist";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
const Homepage = () => {
  const [contactDetails, setcontactDetails] = useState([]);
  const contactDetailsCollectionRef = collection(db, "contacts");

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
    <div>
      <div>{contactDetails && <ContactList contacts={contactDetails} />}</div>
      <Link to={"/create"} className="add">
        <BiPlus className="plus"
          style={{
            backgroundColor: "#747bff",
            padding: "10px",
            borderRadius: "5vw",
            fontSize: "6vw",
            color: "#573091"
          }}
        />
      </Link>
    </div>
  );
};

export default Homepage;

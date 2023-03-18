import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div className="contact-preview" key={contact.id}>
          <Link
            to={"/" + contact.id}
            style={{
              textDecoration: "none",
            }}
          >
            <div className="id-flex">
            <Avatar
              alt={"image"}
              className="avatar"
              src={contact.image}
              // variant="rounded"
              sx={{ width: 70, height: 70 }}
            />
            <div className="lex">
              <h2 className="main-name">
                {contact.fName} {contact.sName}
              </h2>
              <p className="main-name">{contact.services}</p>
            </div>
            </div>
            <div className="plug">&#128268;</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ContactList;

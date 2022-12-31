import { Modal } from "antd";
import React, { useState } from "react";
import "../contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showModalBuy, setShowModalBuy] = useState(false);
  return (
    <>
      <Modal
        title={` `}
        centered
        visible={showModalBuy}
        onOk={() => {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setShowModalBuy(false);
        }}
        onCancel={() => {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setShowModalBuy(false);
        }}
        okButtonProps={{ color: "green" }}
        okText="ok"
        cancelText="Close"
      >
        <div>
          <div
            style={{ fontSize: "40px", color: "green", textAlign: "center" }}
          >
            {" "}
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <div
            style={{ fontSize: "26px", color: "green", textAlign: "center" }}
          >
            Thanks {name}, we got your mail we will reach out to you.
          </div>
        </div>
      </Modal>
      <h2 style={{ textAlign: "center" }}>Contact Form</h2>
      <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <div
          style={{
            background: "white",
            padding: "30px",
            display: "flex",
            gap: "20px",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <input
              type="email"
              name=""
              id=""
              placeholder="Email should contain @gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Subject"
              value={Subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <textarea
              rows={10}
              cols={10}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div>
            {name === "" || email === "" || message === "" || Subject === "" || !email.includes('@gmail.com') ? (
              <span style={{ position: "relative" }}>
                <button
                  className="btm"
                  style={{
                    cursor: "not-allowed",
                  }}
                  onMouseOver={(e) => {
                    e.target.previousElementSibling.style.display = "block";
                  }}
                  onMouseLeave={(e) => {
                    e.target.previousElementSibling.style.display = "none";
                  }}
                >
                  Please Fill All the Details
                </button>
              </span>
            ) : (
              <button
                className="btm"
                onClick={(e) => {
                  setShowModalBuy(true);
                }}
              >
                Send Us Message ☺
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

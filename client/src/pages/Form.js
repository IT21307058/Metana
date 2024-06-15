import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Before we start, what is your name?", "What's your email address?", "Which country you are from? 🏡🏡🏡", "What is your phone number?", "What languages and frameworks are you familiar with?", "How would you describe your current level of coding experience?", "What is your current annual compensation? (Optional)", "Certifying Statement*"];

  const calculateWidth = (page) => {
    return `${(page + 1) * (100 / 8)}%`;
  };


  const PageDisplay = () => {
    if (page === 0) {
      return <Page1 formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Page2 formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Page3 formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Page4 formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <Page5 formData={formData} setFormData={setFormData} />;
    } else if (page === 5) {
      return <Page6 formData={formData} setFormData={setFormData} />;
    } else if (page === 6) {
      return <Page7 formData={formData} setFormData={setFormData} />;
    } else {
      return <Page8 formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      <div className="form">
        <div className="progressbar">
          <div
            style={{
              width: calculateWidth(page),
              transition: 'width 0.5s ease'
            }}
          ></div>
        </div>
        <div className="form-container">
          <div className="header">
            <span style={{ color: "rgb(98, 0, 255)" }}>{page + 1} →</span>
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
        </div>

        <div className="footer">
          <div>
            <button
              className="submit-button"
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              ↑
            </button>
            <button
              className="submit-button"
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "↓"}
            </button>
          </div>
          <button
            className="submit-button"
          >
            Powered by Typeform
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;

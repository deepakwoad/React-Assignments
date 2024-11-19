import { useState } from "react";
import "./App.css";
import InputComponent from "./components/InputComponent";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subjects: [],
    url: "",
    choice: "",
    about: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedSubjects = checked
        ? [...formData.subjects, value]
        : formData.subjects.filter((subject) => subject !== value);
      setFormData({ ...formData, subjects: updatedSubjects });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.contact) {
      newErrors.contact = "Contact number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.contact)) {
      newErrors.contact = "Contact number must be 10 digits.";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender selection is required.";
    }

    // if (formData.subjects.length === 0) {
    //   newErrors.subjects = "At least one subject must be selected.";
    // }

    if (!formData.url) {
      newErrors.url = "URL is required.";
    } else if (!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(formData.url)) {
      newErrors.url = "Enter a valid URL.";
    }

    if (!formData.choice) {
      newErrors.choice = "You must select an option.";
    }

    if (!formData.about.trim()) {
      newErrors.about = "About section cannot be empty.";
    }

    console.log(newErrors, "=============Error Object===============");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "",
      subjects: [],
      url: "",
      choice: "",
      about: "",
    });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted: ", formData);
    } else {
      console.log("Validation failed.");
    }
  };

  return (
    <div className="form-container">
      <h2>Form in React</h2>
      <form onSubmit={handleSubmit}>
        <InputComponent
          label={"First Name*"}
          type={"text"}
          name={"firstName"}
          placeholder={"Enter First Name"}
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />

        <InputComponent
          label={"Last Name*"}
          type={"text"}
          name={"lastName"}
          placeholder={"Enter Last Name"}
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />

        <InputComponent
          label={"Enter Email*"}
          type={"email"}
          name={"email"}
          placeholder={"Enter email"}
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputComponent
          label={"Contact*"}
          type={"number"}
          name={"contact"}
          placeholder={"Enter Mobile Number"}
          value={formData.contact}
          onChange={handleChange}
          error={errors.contact}
        />

        <InputComponent
          label={"Gender*"}
          type={"radio"}
          name={"gender"}
          options={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Other", value: "Other" },
          ]}
          checked={(value) => formData.gender === value}
          onChange={handleChange}
          error={errors.gender}
        />

        <InputComponent
          label={"Your best Subject"}
          type={"checkbox"}
          name={"subjects"}
          value={["English", "Maths", "Physics"]}
          checked={(value) => formData.subjects.includes(value)}
          onChange={handleChange}
          error={errors.subjects}
        />

        <InputComponent
          label={"Enter URL*"}
          type={"url"}
          name={"url"}
          placeholder={"Enter URL"}
          value={formData.url}
          onChange={handleChange}
          error={errors.url}
        />

        <InputComponent
          label={"Select your choice"}
          type={"select"}
          name={"choice"}
          value={formData.choice}
          options={[
            { label: "Option 1", value: "Option 1" },
            { label: "Option 2", value: "Option 2" },
            { label: "Option 3", value: "Option 3" },
          ]}
          onChange={handleChange}
          error={errors.choice}
        />

        <InputComponent
          label={"About"}
          type={"textarea"}
          name={"about"}
          placeholder={"About yourself"}
          value={formData.about}
          onChange={handleChange}
          error={errors.about}
        />

        <div className="button-group">
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

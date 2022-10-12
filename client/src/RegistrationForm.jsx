import { useState } from "react";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [year, setYear] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    console.log(fullName + " " + email + " " + year + " " + course + " " + message);
  }

  return (
    <div className="RegistrationForm">
      <h2>Register for a Course</h2>
      <form onSubmit={submitForm}>
        <label>Full Name:</label>
        <input 
          type="text" 
          required 
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label>Email:</label>
        <input 
          type="text" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Year:</label>
        <input 
          type="text" 
          required 
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <label>Course:</label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value=" ">select</option>
          <option value="MATH101">MATH101</option>
          <option value="CSCI101">CSCI101</option>
        </select>
        <label>Message to Professor:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button>Enroll</button>
      </form>
    </div>
  );
}
 
export default RegistrationForm;
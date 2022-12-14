import { useState, useEffect } from "react";
import Axios from 'axios';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [year, setYear] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');

  const [courseList, setCourseList] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(fullName + " " + email + " " + year + " " + course + " " + message);
    Axios.post("http://localhost:3001/add", {
      email : email,
      course : course,
      year : year,
      message : message
    }).then(() => {
      console.log("success");
    });
  };

  const getAvailableCourses = () => {
    Axios.get('http://localhost:3001/getAvailableCourses', {
        params: { year : year }
    }).then((response) => {
        setCourseList(response.data);
    });
  };

  useEffect(() => {
    getAvailableCourses();
  }, [year]);

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
        <div className="container">
            <div className="item">
                <label>Course year:</label>
                <input 
                type="text" 
                required 
                value={year}
                onChange={(e) => setYear(e.target.value)}
                />
            </div>
            <div className="item">
                <label>Course name:</label>
                <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                >
                <option value=" ">select</option>
                {courseList.map((val, key) => {
                    return <option value={val.name}>{val.name}</option>
                })}
                </select>
            </div>
        </div>
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
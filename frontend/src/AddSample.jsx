import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import sampleService from './service/client/sampleService';
import Swal from 'sweetalert2';
import '@sweetalert2/theme-dark/dark.css';
function AddSimple() {

  
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    size: "",
    color: "",
    description: "",
    email: "",
    occupation: "Student" ,
  });



  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleChangeUploadFile = (e) => {
    setFormData({
      ...formData,
      thumbnail: e.target.files,
    });    
  }

  const handleSubmit = async (e) => { 
    e.preventDefault();
    console.log('dât check:', formData); 
    sampleService.postData(formData);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your create has been saved",
      showConfirmButton: false,
      timer: 1500
    });
    
  };


  return (
    <>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          {/* <img src="your-image-url-here.jpg" alt="Form Image" /> */}
          <h1 className='form-title'>CREATE SAMPLE</h1>
        
          <form onSubmit={handleSubmit}>
          <div className="formbold-input-group">
            <label htmlFor="thumbnail" className="formbold-form-label"> Thumbnails </label>  {/* Pluralize label for multiple images */}
            <input
              type="file"
              name="thumbnail" 
              id="thumbnail"
              onChange={(e) => handleChangeUploadFile(e)}
              multiple  
              placeholder="Select multiple images..."
              className="formbold-form-file"
              accept="image/*"
            />
          </div>

            <div className="formbold-input-group">
              <label htmlFor="name" className="formbold-form-label"> Simple Name </label>
              <input
                type="text"
                name="name"
                id="name"
                // value={formData.name}
                onChange={handleChange}
                placeholder="Enter sample name"
                className="formbold-form-input"
              />
            </div>

            <div className="formbold-input-group">
              <label htmlFor="category" className="formbold-form-label"> Category </label>
              <input
                type="text"
                name="category"
                id="category"
                // value={formData.category}
                onChange={handleChange}
                placeholder="Enter sample category"
                className="formbold-form-input"
              />
            </div>

            <div className="formbold-input-group">
              <label htmlFor="size" className="formbold-form-label"> Size </label>
              <input
                type="text"
                name="size"
                id="size"
                // value={formData.size}
                onChange={handleChange}
                placeholder="Enter sample size"
                className="formbold-form-input"
              />
            </div>

            <div className="formbold-input-group">
              <label htmlFor="color" className="formbold-form-label"> Color </label>
              <input
                type="text"
                name="color"
                id="color"
                // value={formData.color}
                onChange={handleChange}
                placeholder="Enter sample color"
                className="formbold-form-input"
              />
            </div>

            <div>
              <label htmlFor="description" className="formbold-form-label">
                Description
              </label>
              <textarea
                rows="6"
                name="description"
                id="description"
                // value={formData.description}
                onChange={handleChange}
                placeholder="Type here..."
                className="formbold-form-input"
              ></textarea>
            </div>
            <div className="formbold-input-group">
              <label htmlFor="email" className="formbold-form-label"> Email </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                placeholder="Enter your email"
                className="formbold-form-input"
              />
            </div>

            <div className="formbold-input-group">
              <label className="formbold-form-label">
                Which option best describes you?
              </label>
              <select
                className="formbold-form-select"
                name="occupation"
                id="occupation"
                onChange={handleChange}
              >
                <option value="Student">Student</option>
                <option value="Researcher">Researcher</option>
                <option value="Teacher">Teacher</option>
                <option value="Professor">Professor</option>
                <option  className='other' value="Other">Other</option>
              </select>
            </div>
            {formData.occupation === "Other" && (
              <div className="formbold-input-group">
                <input
                  type="text"
                  name="occupationIs"
                  id="occupationIs"
                  onChange={handleChange}
                  placeholder="Enter other option"
                  className="formbold-form-input"
                />
              </div>
            )}

            <button type="submit" className="formbold-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddSimple;

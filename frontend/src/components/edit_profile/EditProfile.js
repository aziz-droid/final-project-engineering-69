import Footer from "../Footer";
import Header from "../Header";
import "./EditProfile.css";
import { Link, useNavigate } from "react-router-dom";
import EditProfileImage from "./assets/EditProfile/EditProfileImage.svg";
import { useState } from "react";
import axios from "axios";

function EditProfile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    no_hp: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    console.log(profile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, gender, no_hp } = profile;
    axios
      .post("http://localhost:8080/api/user/profile/editprofile?id=5", { username, email, password, gender, no_hp })
      .then(() => {
        alert("sukses");
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
        alert("gagal update");
      });
    
  };

  return (
    <>
      <Header />
      <div className="edit-profile-container container-fluid">
        <div className="edit-profile-content">
          <div className="left-container">
            <img src={EditProfileImage} />
          </div>
          <div className="mid-container">
            <div className="mid-content">
              <form className="form">
                <div className="form-group">
                  <h1 className="mt-5">Edit Profil</h1>
                  <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                      Nama Lengkap
                    </label>
                    <input type="text" name="username" className="form-input form-control form-control-sm" onChange={handleChange} />
                  </div>
                  <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="text" name="email" className="form-input form-control form-control-sm" onChange={handleChange} />
                  </div>
                  <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                      Gender
                    </label>
                    <input type="" name="password" className="form-input form-control form-control-sm" onChange={handleChange} />
                  </div>
                  <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                      No. Hp
                    </label>
                    <input type="password" name="password" className="form-input form-control form-control-sm" onChange={handleChange} />
                  </div>

                  <button id="signup" type="submit" onClick={handleSubmit}>
                    Simpan Perubahan
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="right-container">
            <div className="right-content"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditProfile;

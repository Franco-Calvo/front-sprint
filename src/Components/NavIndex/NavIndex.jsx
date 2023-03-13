import React, { useEffect } from "react";
import { Link as Anchor } from "react-router-dom";
import "./navindex.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import alertActions from "../../Store/Alert/actions";

const { open } = alertActions;

export default function NavIndex({ handleRender }) {
  const token = localStorage.getItem(`token`);
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  let url = "http://localhost:8080/auth/signout";
  const store = useSelector((store) => store);
  let dispatch = useDispatch();

  async function handleLogout() {
    try {
      await axios.post(url, "", headers);
      let dataAlert = {
        icon: "success",
        title: "Logout successfully",
      };
      dispatch(open(dataAlert));
      localStorage.setItem("token", "");
      localStorage.setItem("user", "");
      handleRender();
    } catch (error) {
      if (typeof error.response.data.message === "string") {
        let dataAlert = {
          icon: "error",
          title: error.response.data.message,
        };
        dispatch(open(dataAlert));
      } else {
        let dataAlert = {
          icon: "error",
          title: "",
        };
        error.response.data.message.forEach((err) => {
          dataAlert.title += err + "\n";
        });
        dispatch(open(dataAlert));
      }
    }
  }

  if (!token) {
    localStorage.setItem(
      `user`,
      JSON.stringify({
        name: "",
        email: "",
        photo: "",
      })
    );
  }

  const user = JSON.parse(localStorage.getItem(`user`));
  const name = user.name;
  const email = user.email;
  const photo = user.photo;

  useEffect(() => {
    let url = "http://localhost:8080/auth/signintoken";
    if (token) {
      let headers = { headers: { Authorization: `Bearer ${token}` } };
      axios.post(url, null, headers);
    }
  });

  return (
    <nav>
      <div className="profile">
        <div className="span-container-profile">
          {token ? (
            <div className="img-text-container">
              <img className="profile-image" src={photo} alt={photo} />

              <div className="text-container">
                <h4>{name}</h4>
                <label>{email}</label>
              </div>
            </div>
          ) : (
            ""
          )}

          <span onClick={handleRender}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.70708 0.292893C1.31655 -0.097631 0.683389 -0.0976311 0.292864 0.292893C-0.0976599 0.683417 -0.0976601 1.31658 0.292864 1.70711L5.58571 6.99996L0.292771 12.2929C-0.0977531 12.6834 -0.0977531 13.3166 0.292771 13.7071C0.683295 14.0976 1.31646 14.0976 1.70698 13.7071L6.99992 8.41417L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41414 6.99996L13.707 1.70711C14.0975 1.31658 14.0975 0.683419 13.707 0.292895C13.3165 -0.0976298 12.6833 -0.0976294 12.2928 0.292895L6.99992 5.58574L1.70708 0.292893Z"
                fill="white"
              />
            </svg>
          </span>
        </div>

        <div className="a-links">
          <Anchor className="a-nav" to="/">
            {" "}
            Home
          </Anchor>

          <Anchor className="a-nav" to="/view-mangas">
            Mangas
          </Anchor>
          <Anchor className="a-nav" to="/mangas">
            Create Mangas
          </Anchor>
          <Anchor className="a-nav" to="/">
            My Mangas
          </Anchor>
          <Anchor className="a-nav" to="/">
            Favourites
          </Anchor>
          {token ? (
            <Anchor
              className="a-nav"
              to="/chapher-form/63ff9d4e04c1a2dc7b9914eb"
            >
              Chapter
            </Anchor>
          ) : null}
          {token ? (
            <Anchor className="a-nav" to="/author/640b93d57f41e871c0ed6622">
              Author
            </Anchor>
          ) : null}
          {token ? (
            <Anchor className="a-nav" to="/author-form">
              New Author
            </Anchor>
          ) : null}
          {token ? (
            <Anchor className="a-nav" onClick={handleLogout} to="/">
              Logout
            </Anchor>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

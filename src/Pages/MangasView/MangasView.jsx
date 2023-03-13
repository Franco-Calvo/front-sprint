import React, { useState, useEffect, useRef } from "react";
import "./mangasview.css";
import axios from "axios";
import CardManga from "../../Components/CardManga/CardManga";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Store/Text/actions";
import eventActions from "../../Store/Events/actions.js";
import actionsChecks from "../../Store/Checks/actions.js";
const { read_events } = eventActions;
const { captureText } = actions;
const { captureChecks } = actionsChecks;
let categoriasCheck = [];

export default function MangasView() {
  function returnclassName(value) {
    switch (value) {
      case "640b93d47f41e871c0ed6613":
        return "kodomo";
      case "640b93d47f41e871c0ed6615":
        return "seinen";
      case "640b93d47f41e871c0ed6612":
        return "shonen";
      case "640b93d47f41e871c0ed6614":
        return "shojo";
      default:
        return "";
    }
  }
  function returnStyle(value) {
    switch (value) {
      case "640b93d47f41e871c0ed6613":
        return "category-manga4";
      case "640b93d47f41e871c0ed6615":
        return "category-manga";
      case "640b93d47f41e871c0ed6612":
        return "category-manga2";
      case "640b93d47f41e871c0ed6614":
        return "category-manga3";
      default:
        return "";
    }
  }
  function returnCategory(value) {
    switch (value) {
      case "640b93d47f41e871c0ed6613":
        return "Comic";
      case "640b93d47f41e871c0ed6615":
        return "Seinen";
      case "640b93d47f41e871c0ed6612":
        return "Shonen";
      case "640b93d47f41e871c0ed6614":
        return "Shojo";
      default:
        return "";
    }
  }

  const [reload, SetReload] = useState(false);
  const dispatch = useDispatch();
  const text = useRef("");
  const [cate, setCate] = useState([]);
  const [pages, setPages] = useState(1);
  const defaultText = useSelector((store) => store.text.text);
  const data = useSelector((store) => store.events.events);
  const categorias = useSelector((store) => store.checks.category);

  const handleSearch = () => {
    SetReload(!reload);
    dispatch(captureText({ inputText: text.current.value }));
  };
  console.log(data);

  useEffect(() => {
    axios
      .get("http://localhost:8080/mangas")
      .then((response) => {
        setCate(response.data.categories);
      })
      .catch((error) => console.log(error));
  }, []);

  function checks(e) {
    cate.forEach((cate) => {
      if (cate.name === e.target.value) {
        if (categoriasCheck.includes(cate._id)) {
          categoriasCheck = categoriasCheck.filter((e) => e !== cate._id);
        } else {
          categoriasCheck.push(cate._id);
        }
        dispatch(captureChecks({ categories: categoriasCheck.join() }));
      }
    });
  }

  useEffect(() => {
    if (data) {
      dispatch(
        read_events({
          inputText: text.current.value,
          captureChecks: categorias,
          pages,
        })
      );
    }
  }, [reload, categorias, pages]);

  function handlePrevClick() {
    setPages((prevPages) => prevPages - 1);
    SetReload(true);
  }
  function handleNextClick() {
    setPages((prevPages) => prevPages + 1);
    SetReload(true);
  }

  return (
    <div className="container-manga">
      <div className="mangas-background">
        <h1>Mangas</h1>
        <span className="manga-span">
          <img src="./Search.png" alt="" />
          <input
            type="text"
            className="Search"
            placeholder="Find your manga here"
            ref={text}
            onChange={handleSearch}
            defaultValue={defaultText}
          />
        </span>
      </div>

      <div className="section-manga-cont">
        <div className="container-check-cards">
          <div className="center-items">
            <h3 className="explore-mangas">Explore</h3>
            <div className="img-mangas-mobile">
              <span>
                <label className="text-mobile-manga">Adventurers</label>
                <img src="./imagen 16.png" alt="" />
              </span>
              <span>
                <label className="text-mobile-manga">Nostalgic</label>
                <img src="./imagen 17.png" alt="" />
              </span>
              <span>
                <label className="text-mobile-manga">Popular</label>
                <img src="./imagen 18.png" alt="" />
              </span>
            </div>
            <div className="checkbox-container-mangas">
              <label className="category-button2">
                <input
                  type="checkbox"
                  name="category"
                  value="shonen"
                  onClick={checks}
                />
                <span className="category-label">shonen</span>
              </label>
              <label className="category-button3">
                <input
                  type="checkbox"
                  name="category"
                  value="seinen"
                  onClick={checks}
                />
                <span className="category-label">seinen</span>
              </label>
              <label className="category-button4">
                <input
                  type="checkbox"
                  name="category"
                  value="shojo"
                  onClick={checks}
                />
                <span className="category-label">shojo</span>
              </label>
              <label className="category-button5">
                <input
                  type="checkbox"
                  name="category"
                  value="comic"
                  onClick={checks}
                />
                <span className="category-label">comic</span>
              </label>
            </div>

            <div className="container-cards-mangas">
              {data.length ? (
                data.map((manga, index) => (
                  <CardManga
                    key={index}
                    style3={returnStyle(manga.category_id)}
                    style2={returnclassName(manga.category_id)}
                    category={returnCategory(manga.category_id)}
                    id={manga._id}
                    text={manga.title}
                    img={manga.cover_photo}
                  />
                ))
              ) : (
                <p>No result founds</p>
              )}
            </div>
          </div>
          <div className="prev-next">
            <div className="cont-count">
              {pages < 2 ? (
                ""
              ) : (
                <button className="prev-next-anchor" onClick={handlePrevClick}>
                  Prev
                </button>
              )}
              <label className="count-pages">{pages}</label>
              {data.length == 6 || data.length == 10 ? (
                <button className="prev-next-anchor" onClick={handleNextClick}>
                  Next
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import {Link as Anchor} from "react-router-dom";
import "./CardAuthor.css";

export default function img({data}) {
  return (
    <Anchor className="anchor-author" to={"/manga/" + data._id}>
      <img
        className="author-card-img"
        src={data.cover_photo}
        alt={data.title}
      />
      <p className="author-card-title">{data.title}</p>
    </Anchor>
  );
}
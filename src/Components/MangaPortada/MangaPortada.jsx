
import React from 'react';
import './mangaPortada.css'


export default function MangaPortada({info}) {
  
  return (
    <div className="img-title">
      <img className="img-manga" src={info.cover_photo} alt={info.title} />
      <p className="title">{info.title}</p>
    </div>
  );
} 

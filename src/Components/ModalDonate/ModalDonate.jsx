import React from 'react'
import axios from 'axios'
import './modaldonate.css'
import { useSelector, useDispatch } from 'react-redux'
import modaleActions from '../../Store/Modal/actions.js'

const { closeModal } = modaleActions

export default function ModalDonate() {
    const dispatch = useDispatch();
    const { render, modalName } = useSelector((store) => store.modal);

    const handleModalClose = () => {
        dispatch(closeModal());
      };

    let botones = [
        {
            id: 11,
            title: "Donate $1.000",
            currency_id: "ARS",
            price: 1000,
            image: "https://img.icons8.com/color/1x/keiji-akaashi.png",
            quantity: 1,
            image_pay: "https://i.imgur.com/anrrNbs.png",
          },
          {
            id: 12,
            title: "Donate $5.000",
            currency_id: "ARS",
            image: "https://img.icons8.com/color/1x/sailor-moon.png",
            price: 5000,
            quantity: 1,
            image_pay: "https://i.imgur.com/anrrNbs.png",
          },
          {
            id: 13,
            title: "Donate $10.000",
            currency_id: "ARS",
            price: 10000,
            image: "https://img.icons8.com/doodle/1x/naruto.png",
            quantity: 1,
            image_pay: "https://i.imgur.com/anrrNbs.png",
          },
    ]
    
      return (
        <>
      {render && modalName === 'modalDonate' && (
        <div className="modalContainerD">
          <div className="modal11">
            {botones.map((btn, index) => (
              <span key={index} className="spanDonate">
                <span className='containerDonateIMG'>
                  <img className="imageDonate" src={btn.image} alt="" />
                </span>
                <button
                  className="donar-btn"
                  id={btn.id}
                  onClick={() => {
                    axios
                      .post('https://minga-0gy1.onrender.com/payment', btn)
                      .then((res) => (window.location.href = res.data.response.body.init_point));
                  }}
                >
                  {btn.title}
                </button>
              </span>
            ))}
            <button className="donar-btn-close" onClick={handleModalClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
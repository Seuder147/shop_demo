import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
    <h2>All ruts are protected</h2>
    <div>
    <ul>
      <li>
      <a href="https://www.facebook.com/KrispyKreme?locale=ru_RU" target="_blank" rel="noreferrer" ><FaFacebook className='icon'/></a>
      </li>
      <li>
      <a href="https://twitter.com/krispykreme" target="_blank" rel="noreferrer"><FaTwitter className='icon'/></a>
      </li>
      <li>
      <a href="https://www.instagram.com/krispykreme/" target="_blank" rel="noreferrer"><FaInstagram className='icon'/></a>
      </li>
    </ul>
        </div>
    </footer>
  )
}
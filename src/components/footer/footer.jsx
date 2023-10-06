import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from '../../assets/logo-no-background.png'
import './footer.style.scss'

const Footer = () => {
  const address = "123 Main Street, City, Country";
  const email = "example@example.com";

  return (
    <footer>
      <div className="social-links">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="personal-bio">
        <p>Address: {address}</p>
        <p>Email: {email}</p>
      </div>
      
      <div className="footer-column">
     <img src={Logo} alt="hoobank" className="logo" />
     <h3>Best food made with Love</h3>
    </div>
     
    </footer>
  );
};

export default Footer;
























// import React from "react";
// import "./footer.style.scss"; 
// import Logo from '../../assets/logo-no-background.png'

// const footerLinks = [
//     {
//       title: "Useful Links",
//       links: [
//         {
//           name: "Content",
//           link: "https://www.hoobank.com/content/",
//         },
//         {
//           name: "How it Works",
//           link: "https://www.hoobank.com/how-it-works/",
//         },
//         {
//           name: "Create",
//           link: "https://www.hoobank.com/create/",
//         },
//         {
//           name: "Explore",
//           link: "https://www.hoobank.com/explore/",
//         },
//         {
//           name: "Terms & Services",
//           link: "https://www.hoobank.com/terms-and-services/",
//         },
//       ],
//     },
//     {
//       title: "Community",
//       links: [
//         {
//           name: "Help Center",
//           link: "https://www.hoobank.com/help-center/",
//         },
//         {
//           name: "Partners",
//           link: "https://www.hoobank.com/partners/",
//         },
//         {
//           name: "Suggestions",
//           link: "https://www.hoobank.com/suggestions/",
//         },
//         {
//           name: "Blog",
//           link: "https://www.hoobank.com/blog/",
//         },
//         {
//           name: "Newsletters",
//           link: "https://www.hoobank.com/newsletters/",
//         },
//       ],
//     },
//     {
//       title: "Partner",
//       links: [
//         {
//           name: "Our Partner",
//           link: "https://www.hoobank.com/our-partner/",
//         },
//         {
//           name: "Become a Partner",
//           link: "https://www.hoobank.com/become-a-partner/",
//         },
//       ],
//     },
//   ];
  
//   export const socialMedia = [
//     {
//       id: "social-media-1",
//       icon: '',
//       link: "https://www.instagram.com/",
//     },
//     {
//       id: "social-media-2",
//       icon: '',
//       link: "https://www.facebook.com/",
//     },
//     {
//       id: "social-media-3",
//       icon: '',
//       link: "https://www.twitter.com/",
//     },
//     {
//       id: "social-media-4",
//       icon: '',
//       link: "https://www.linkedin.com/",
//     },
//   ];
//   // Import the CSS file

// const Footer = () => (
//   <section className="footer">
//     <div className="footer-content">
//       <div className="footer-column">
//         <img src={Logo} alt="hoobank" className="logo" />
//       </div>

//       <div className="footer-column">
//         {footerLinks.map((footerlink) => (
//           <div key={footerlink.title} className="footer-link">
//             <h4>{footerlink.title}</h4>
//             <ul>
//               {footerlink.links.map((link, index) => (
//                 <li
//                   key={link.name}
//                   className={`${
//                     index !== footerlink.links.length - 1 ? "mb-4" : ""
//                   }`}
//                 >
//                   {link.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>

//     <div className="footer-copyright">
//       <p>
//         Copyright Ⓒ 2022 HooBank. All Rights Reserved.
//       </p>
//     </div>

//     <div className="footer-social">
//       {socialMedia.map((social, index) => (
//         <img
//           key={social.id}
//           src={social.icon}
//           alt={social.id}
//           className={`${
//             index !== socialMedia.length - 1 ? "mr-6" : ""
//           }`}
//           onClick={() => window.open(social.link)}
//         />
//       ))}
//     </div>
//   </section>
// );

// export default Footer;
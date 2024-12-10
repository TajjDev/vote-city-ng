// import React, { useState, useEffect } from "react";
// import imageone from "/src/assets/imageonee.png"
// import imagetwo from "/src/assets/imagetwo.png"
// import imagethree from "/src/assets/imagethree.png"
// import imagefour from "/src/assets/imagefour.png"
// import imagefive from "/src/assets/imagefive.png"
// import "./howitworks.css"

// const AutoSwipeCarousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [images.length]);

//   return (
//     <>
//     <p id="men">Some InApp <span>View</span></p>
//     <div id="vid" style={styles.carouselContainer}>
      
//       {images.map((image, index) => (
//         <div
//           key={index}
//           style={{
//             ...styles.imageContainer,
//             display: index === currentIndex ? "block" : "none",
//           }}
//         >
//           <img id="images" src={image} alt={`Slide ${index + 1}`} style={styles.image} />
//         </div>
//       ))}
//     </div>
//     </>
//   );
// };

// const styles = {
//   carouselContainer: {
//     width: "70%",
//     height: "530px", // Adjust to your preferred size
//     overflow: "hidden",
//     display:"flex",
//     marginBottom:"60px",
//     justifySelf:"center",
//     position: "relative",
//   },
//   imageContainer: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "99%",
//     height: "99.7%",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     // objectFit: "cover",
//   },
// };

// export default function Mine() {
//   const images = [
// imageone,   imagetwo,imagethree,imagefour,imagefive
// // imagethree,    imagefour,imagefive
//   ];

//   return (
//     <div>
//       <h1>Auto-Swiping Carousel</h1>
//       <AutoSwipeCarousel images={images} />
//     </div>
//   );
// }
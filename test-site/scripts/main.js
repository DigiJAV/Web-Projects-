const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/the-course-of-empire-consummation.jpg") {
    myImage.setAttribute("src", "images/course-of-empire-destruction.jpg");
  } else {
    myImage.setAttribute("src", "images/the-course-of-empire-consummation.jpg");
  }
};

.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

.slide {
  display: none;
}

img {
  width: 100%;
}

.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
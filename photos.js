console.log("Hello, world!");

document.addEventListener("DOMContentLoaded", () => {
  const numPics = 12;

  const segments = [];
  for (let i = 0; i < numPics; i++) {
    segments.push(document.getElementById(`segment${i + 1}`));
  }
  segments[0].style.backgroundColor = "#00c8ff";

  const track = document.getElementById("image-track");
  const images = track.getElementsByClassName("image");

  var currentSegment = 1;
  const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

  const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  };

  const handleOnMove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained =
        parseFloat(track.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }

    const imageWidth = images[0].getBoundingClientRect().width;
    const currentIndex = Math.round(
      (-nextPercentage / 100) * (images.length - 1)
    );
    currentSegment = currentIndex;

    for (let i = 0; i < numPics; i++) {
      if (i === currentIndex) {
        segments[i].style.backgroundColor = "#00c8ff";
      } else {
        segments[i].style.backgroundColor = "rgb(45, 45, 45)";
      }
    }
  };

  window.onmousedown = (e) => handleOnDown(e);
  window.ontouchstart = (e) => handleOnDown(e.touches[0]);
  window.onmouseup = (e) => handleOnUp(e);
  window.ontouchend = (e) => handleOnUp(e.touches[0]);
  window.onmousemove = (e) => handleOnMove(e);
  window.ontouchmove = (e) => handleOnMove(e.touches[0]);

  for (const image of images) {
    image.classList.add("fade-in");
  }
});

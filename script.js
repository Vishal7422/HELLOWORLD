function flipTo(section) {
  const card = document.getElementById("card");

  const backs = document.querySelectorAll(".back");
  backs.forEach(back => back.style.display = "none");

  if (section === "home") {
    card.style.transform = "rotateY(0deg)";
  } else {
    const target = document.querySelector(`.back.${section}`);
    if (target) {
      target.style.display = "flex";
      card.style.transform = "rotateY(180deg)";
    }
  }
}

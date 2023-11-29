var bodyColors = {
    backgroundColor: document.querySelector("body").style.backgroundColor ,
    fontColor: document.querySelector("body").style.color,
};

function dayNightHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "Night") {
    target.style.backgroundColor = "black";
    target.style.color= "white";
    self.value = "Day";
  } else if (self.value === "Day") {
    target.style.backgroundColor = "white";
    target.style.color = "black";
    self.value = "Night";
  }
}

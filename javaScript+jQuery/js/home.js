var BodyColors = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};

function dayNightHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "Night") {
    BodyColors.setBackgroundColor("black");
    BodyColors.setColor("white");
    self.value = "Day";
  } else if (self.value === "Day") {
    BodyColors.setBackgroundColor("white");
    BodyColors.setColor("black");
    self.value = "Night";
  }
}

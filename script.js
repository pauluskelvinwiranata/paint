const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const clearButton = document.getElementById("clearButton");
const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");

let isDrawing = false;

canvas.width = window.innerWidth * 0.6;
canvas.height = window.innerHeight * 0.6;
context.lineWidth = brushSize.value;
context.lineCap = "round";
context.strokeStyle = colorPicker.value;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

clearButton.addEventListener("click", clearCanvas);
colorPicker.addEventListener("input", changeColor);
brushSize.addEventListener("input", changeBrushSize);

function startDrawing(e) {
  isDrawing = true;
  draw(e);
}

function draw({ offsetX, offsetY }) {
  if (!isDrawing) return;

  context.lineTo(offsetX, offsetY);
  context.stroke();
  context.beginPath();
  context.moveTo(offsetX, offsetY);
}

function stopDrawing() {
  isDrawing = false;
  context.beginPath();
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function changeColor() {
  context.strokeStyle = colorPicker.value;
}

function changeBrushSize() {
  context.lineWidth = brushSize.value;
}

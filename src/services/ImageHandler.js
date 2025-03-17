import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
let chartInstance = null;
let canvas_og, ctx_og, canvas_gray, ctx_gray, canvas_bin, ctx_bin;
let grayButton, binaryButton, graphButton;
let threshold = 128;
let values = [];
for (let i = 0; i < 256; i++) {
  values.push(i);
}

document.addEventListener("DOMContentLoaded", () => {
  canvas_og = document.getElementById("ctx-og");
  ctx_og = canvas_og.getContext("2d", { willReadFrequently: true });

  canvas_gray = document.getElementById("ctx-gs");
  ctx_gray = canvas_gray.getContext("2d", { willReadFrequently: true });

  canvas_bin = document.getElementById("ctx-bin");
  ctx_bin = canvas_bin.getContext("2d", { willReadFrequently: true });

  grayButton = document.getElementById("gray");
  binaryButton = document.getElementById("binary");
  graphButton = document.getElementById("graph");
});

export const drawOriginalImage = (fileUrl) => {
  ctx_og.clearRect(0, 0, canvas_og.width, canvas_og.height);
  ctx_gray.clearRect(0, 0, canvas_og.width, canvas_og.height);
  ctx_bin.clearRect(0, 0, canvas_og.width, canvas_og.height);

  let img = new Image();
  img.src = fileUrl;

  img.onload = () => {
    canvas_og.width = img.width;
    canvas_og.height = img.height;
    canvas_gray.width = canvas_og.width;
    canvas_gray.height = canvas_og.height;
    canvas_bin.width = canvas_og.width;
    canvas_bin.height = canvas_og.height;
    ctx_og.drawImage(img, 0, 0, img.width, img.height);

    grayButton.disabled = false;
    binaryButton.disabled = true;
    graphButton.disabled = true;
  };
};

export const drawGrayScaleImage = () => {
  binaryButton.disabled = false;
  graphButton.disabled = false;
  canvas_gray.width = canvas_og.width;
  canvas_gray.height = canvas_og.height;
  ctx_gray.putImageData(processImage("grayscale"), 0, 0);
};

export const drawBinarizedImage = () => {
  canvas_bin.width = canvas_og.width;
  canvas_bin.height = canvas_og.height;
  ctx_bin.putImageData(processImage("binarize"), 0, 0);
};

export const graphHistogram = () => {
  const histogramData = getHistogramData();

  if (chartInstance) {
    chartInstance.destroy(); // Destruir el gráfico anterior
  }

  chartInstance = new Chart(document.getElementById("histogram"), {
    type: "line",
    data: {
      labels: values,
      datasets: [
        {
          label: "Grayscale Histogram",
          data: histogramData,
          fill: false,
          borderColor: "rgb(13, 124, 182)",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "Values (0-255)",
          },
        },
        y: {
          title: {
            display: true,
            text: "Occurrence",
          },
          min: 0,
        },
      },
    },
  });
};

const processImage = (operation) => {
  let data = ctx_og.getImageData(0, 0, canvas_og.width, canvas_og.height).data;

  for (let i = 0; i < data.length; i += 4) {
    let prom = (data[i] + data[i + 1] + data[i + 2]) / 3;

    if (operation === "grayscale") {
      data[i] = prom;
      data[i + 1] = prom;
      data[i + 2] = prom;
    } else if (operation === "binarize") {
      let value = prom > threshold ? 255 : 0;
      data[i] = value;
      data[i + 1] = value;
      data[i + 2] = value;
    }
  }
  return new ImageData(data, canvas_og.width, canvas_og.height);
};

const getHistogramData = () => {
  const data = ctx_gray.getImageData(
    0,
    0,
    canvas_gray.width,
    canvas_gray.height
  ).data;
  const histogram = Array(256).fill(0);

  for (let i = 0; i < data.length; i += 4) {
    let grayValue = data[i];
    histogram[grayValue]++;
  }

  return histogram;
};

export const setThreshold = (newThreshold) => {
  threshold = newThreshold;
};

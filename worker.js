
addEventListener('message', (data) => {
  const imageData = data.data;
  for (let x = 0; x < imageData.width; x++) {
    for (let y = 0; y < imageData.height; y++) {
      const index = (x + (y * imageData.width)) * 4;

      /**
          imageData.data[index] // red
          imageData.data[index + 1] // green
          imageData.data[index + 2] // blue
          imageData.data[index + 3] // alpha
        */
      // change opacity to 0.5
      imageData.data[index + 3] = 127;
    }
  }

  postMessage(
    imageData,
    // transform the pointer to main thread instead of copy data
    [imageData.data.buffer]
  );
});

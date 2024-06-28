document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
    let currentIndex = 0;
  
    function blinkBox() {
      // Remove active class from current box
      boxes[currentIndex].classList.remove("active");
  
      // Move to the next box
      currentIndex++;
  
      // Check if currentIndex exceeds the number of boxes
      if (currentIndex >= boxes.length) {
        currentIndex = 0; // Reset to the first box
      }
  
      // Add active class to the new current box
      boxes[currentIndex].classList.add("active");
    }
  
    // Call blinkBox function every 500ms
    setInterval(blinkBox, 500);
  });
  
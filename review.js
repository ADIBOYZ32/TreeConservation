
/* js/review.js */
document.addEventListener("DOMContentLoaded", () => {
  const reviewText = document.getElementById("reviewText");
  const submitBtn = document.getElementById("submitBtn");
  const reviewList = document.getElementById("reviewList");
  const msg = document.getElementById("msg");

  let reviews = JSON.parse(localStorage.getItem("ecoReviews") || "[]");

  function renderReviews() {
    reviewList.innerHTML = "";
    if (reviews.length === 0) {
      reviewList.innerHTML = "<li>No reviews yet.</li>";
    } else {
      reviews.forEach(r => {
        const li = document.createElement("li");
        li.textContent = r;
        reviewList.appendChild(li);
      });
    }
  }

  submitBtn.addEventListener("click", () => {
    const val = reviewText.value.trim();
    if (!val) {
      msg.textContent = "Please enter your review.";
      msg.style.color = "red";
      return;
    }
    reviews.push(val);
    localStorage.setItem("ecoReviews", JSON.stringify(reviews));
    reviewText.value = "";
    msg.textContent = "Review submitted!";
    msg.style.color = "green";
    renderReviews();
  });

  renderReviews();
});

// Theme Toggle (Dark/Light)
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.querySelector(".theme-toggle");
  themeBtn?.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    themeBtn.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
  });

  // Apply job button interaction
  document.querySelectorAll(".apply-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("✅ Application submitted successfully!");
    });
  });

  // Job form submission
  const jobForm = document.querySelector(".job-form");
  if (jobForm) {
    jobForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("🎉 Job posted successfully!");
      jobForm.reset();
    });
  }
});

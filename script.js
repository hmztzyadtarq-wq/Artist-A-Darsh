// تبديل الوضع الليلي والنهاري
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// تبديل اللغة (مثال بسيط)
function toggleLang() {
  if (document.documentElement.lang === "ar") {
    document.documentElement.lang = "en";
    alert("Language switched to English");
  } else {
    document.documentElement.lang = "ar";
    alert("تم تغيير اللغة إلى العربية");
  }
}

// إرسال رسالة (تجريبي)
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("تم إرسال رسالتك بنجاح!");
});
// إظهار الكروت مع التمرير
window.addEventListener("scroll", () => {
  document.querySelectorAll(".project-card").forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}
function toggleTheme() {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
  } else {
    localStorage.setItem("theme","light");
  }
}
// عند تحميل الصفحة
if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
}
function changeLanguage() {
  const lang = document.getElementById('language').value;
  localStorage.setItem("language", lang);
  applyLanguage(lang);
}
function applyLanguage(lang){
  if(lang === "ar"){
    document.querySelector("h2").innerText = "الإعدادات";
    document.querySelector(".toggle-btn").innerText = "تبديل الوضع الليلي/النهاري";
    // تقدر تكمل باقي النصوص هنا
  } else if(lang === "en"){
    document.querySelector("h2").innerText = "Settings";
    document.querySelector(".toggle-btn").innerText = "Toggle Dark/Light Mode";
  }
  // ممكن تضيف باقي اللغات بنفس الشكل
}
if(localStorage.getItem("language")){
  applyLanguage(localStorage.getItem("language"));
}

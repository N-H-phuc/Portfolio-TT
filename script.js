document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  /* =========================
     CLICK MENU → SCROLL ĐÚNG
     (không bị header che)
  ========================== */
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      const headerHeight = header.offsetHeight;
      const sectionTop =
        targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    });
  });

  /* =========================
     ACTIVE MENU KHI SCROLL
  ========================== */
  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - header.offsetHeight - 10;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });

  /* =========================
     FORM CONTACT (CHECK RỖNG)
  ========================== */
  const form = document.querySelector("#contact form");
  const inputs = form.querySelectorAll("input, textarea");

  form.addEventListener("submit", e => {
    e.preventDefault();

    let isValid = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        isValid = false;
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "#2563eb";
      }
    });

    if (isValid) {
      alert("✅ Gửi tin nhắn thành công!");
      form.reset();
    } else {
      alert("⚠️ Vui lòng nhập đầy đủ thông tin!");
    }
  });
});

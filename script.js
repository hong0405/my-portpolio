const nodemailer = require("nodemailer");

async function sendEmail(to, subject, text) {
  let transporter = nodemailer.createTransport({
    host: "smtp.naver.com",
    port: 587,
    secure: false,
    auth: {
      user: "wannab_cool@naver.com",
      pass: "!dhrndh12"
    }
  });

  let info = await transporter.sendMail({
    from: "wannab_cool@naver.com",
    to,
    subject,
    text
  });

  console.log("Message sent: %s", info.messageId);
}

sendEmail("receiver_email@example.com", "Subject", "Hello World").catch(console.error);

// 모든 링크 요소에 대한 이벤트 리스너를 등록
var links = document.querySelectorAll("a");

links.forEach(function(link) {
  link.addEventListener("mouseover", function() {
    var tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = "클릭하세요!"; // 원하는 툴팁 내용
    document.body.appendChild(tooltip);

    // 툴팁을 링크 위에 표시하기 위해 위치 조정
    var linkRect = link.getBoundingClientRect();
    tooltip.style.top = linkRect.top - 30 + "px"; // 링크 위에서 30px 위에 표시
    tooltip.style.left = linkRect.left + "px";

    // 툴팁 숨기기
    link.addEventListener("mouseout", function() {
      tooltip.remove();
    });
  });
});

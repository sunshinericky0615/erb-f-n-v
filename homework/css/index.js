const iframe = document.querySelector('iframe[name="incontent"]');
const footerText = document.querySelector(".end p");
let clockInterval;

const countryConfig = {
  "iceland.html": {
    name: "Iceland",
    tz: "Atlantic/Reykjavik",
    city: "Reykjavik",
  },
  "finland.html": { name: "Finland", tz: "Europe/Helsinki", city: "Helsinki" },
  "sweden.html": { name: "Sweden", tz: "Europe/Stockholm", city: "Stockholm" },
  "norway.html": { name: "Norway", tz: "Europe/Oslo", city: "Oslo" },
};

// 1. Enter your key from https://home.openweathermap.org
const API_KEY = "YOUR_API_KEY_HERE";

iframe.addEventListener("load", function () {
  clearInterval(clockInterval);

  try {
    const currentPath = iframe.contentWindow.location.pathname;
    const fileName = currentPath.split("/").pop();
    const data = countryConfig[fileName];

    if (data) {
      const updateUI = async () => {
        const now = new Date();

        // 3. Time and Date
        const timeStr = now.toLocaleTimeString("en-GB", {
          timeZone: data.tz,
          hour12: false,
        });
        const dateStr = now.toLocaleDateString("en-GB", {
          timeZone: data.tz,
          day: "2-digit",
          month: "short",
        });

        // 4. Weather Fetch
        let weatherHTML = "Loading...";
        try {
          // FIXED URL: Missing path added
          const url = `https://api.openweathermap.org{data.city}&units=metric&appid=${API_KEY}`;
          const res = await fetch(url);
          const wData = await res.json();

          if (res.ok) {
            const temp = Math.round(wData.main.temp);
            const iconCode = wData.weather[0].icon;
            // FIXED ICON URL: Missing /img/wn/ added
            const iconUrl = `https://openweathermap.org{iconCode}.png`;

            weatherHTML = `${temp}°C <img src="${iconUrl}" alt="weather" style="vertical-align: middle; width: 35px;">`;
          } else {
            weatherHTML = "Weather error";
          }
        } catch (err) {
          weatherHTML = "Offline";
        }

        // 5. Update the Footer (Centered by CSS)
        footerText.innerHTML = `
          <span>Welcome to ${data.name} | ${dateStr} ${timeStr}</span>
          <span>${data.city}: ${weatherHTML}</span>
        `;
      };

      updateUI();
      clockInterval = setInterval(updateUI, 1000);
    } else {
      // Default Centered Text
      footerText.innerHTML = `<span>Welcome to the Nordics</span>`;
    }
  } catch (e) {
    console.warn("Iframe access restricted. Run via a Local Server.");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("transition-overlay");
  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // 1. 啟動拉入動畫
      overlay.classList.remove("exit");
      overlay.classList.add("active");

      // 2. 當遮罩完全蓋住時 (約 0.6s)，頁面內容會透過 target="incontent" 自動切換

      // 3. 停留片刻讓 iframe 載入，然後執行拉出動畫
      setTimeout(() => {
        overlay.classList.remove("active");
        overlay.classList.add("exit");
      }, 1400); // 1.4秒後飛機拉著舊頁面殘影消失
    });
  });
});

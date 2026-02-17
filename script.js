console.log("ohcust.js executing........");
const newBase = "api.xircles.in";
// customerOrders = "";
const countries = "/country-details/";
const getState = "/state-details/";
const getCities = "/city-details/";
const xirclsBaseUrl = "omc.axentraos.co.in"
async function fetchthemeContainer() {
  let accountWrapper = document.getElementById("MainContent");
  let appContainer = document.getElementById("theme-container");

  // Store original content for restoring later
  let originalContent = accountWrapper ? accountWrapper.cloneNode(true) : null;

  // Function to get the correct footer (merchant-specific or generic)
  function getFooter() {
    let footer = document.getElementById("shopify-section-sections--19476334280917__footer");

    // If not found, fall back to the generic footer
    if (!footer) {
      footer = document.getElementById("shopify-section-footer");
    }

    return footer;
  }

  function getAccountWrapper() {
    return document.getElementById("MainContent") || document.getElementById("main") || document.getElementById("page-content") || document.getElementById("shopify-section-template--24375414391087__customer-account");
  }

  function moveEmbeddedApp() {
    accountWrapper = getAccountWrapper();
    appContainer = document.getElementById("theme-container");

    // Get the footer (either merchant-specific or generic)
    let footer = getFooter();

    if (!accountWrapper) {
      console.warn("❌ MainContent wrapper not found. Retrying...");
      return;
    }
    if (!appContainer) {
      console.warn("❌ App container not found. Waiting...");
      return;
    }
 console.log("moverShop", Shopify.shop)
 if ( Shopify.shop === "feeling-thrifty-2.myshopify.com") {
      accountWrapper.style.marginTop = "64px";
    }
    console.log("✅ Moving OhMyCustomer app...");

    // Clear existing content except the footer (generic or merchant-specific)
    while (accountWrapper.firstChild) {
      // Don't remove the footer if it is the first child
      if (accountWrapper.firstChild !== footer) {
        accountWrapper.removeChild(accountWrapper.firstChild);
      } else {
        break; // Stop removing if we encounter the footer
      }
    }

    // Add slide effect class just before inserting
    appContainer.classList.add("slide-down-effect");

    // If footer exists and is a valid child, insert app before it
    if (footer && accountWrapper.contains(footer)) {
      accountWrapper.insertBefore(appContainer, footer);  // Insert above footer
      console.log("✅ Footer found. App placed above footer.");
    } else {
      accountWrapper.appendChild(appContainer);  // Insert at the end of the content
      console.warn("⚠️ Footer not found or not a child of MainContent. App placed inside MainContent.");
    }
  }

  function restoreShopifyContent() {
    accountWrapper = getAccountWrapper();

    if (!accountWrapper || !originalContent) {
      console.warn("❌ Cannot restore original content.");
      return;
    }

    console.log("🔄 Restoring original Shopify account page content...");

    // Get the footer (generic or merchant-specific)
    let footer = getFooter();

    // Remove current content before restoring, but keep the footer
    while (accountWrapper.firstChild) {
      if (accountWrapper.firstChild !== footer) {
        accountWrapper.removeChild(accountWrapper.firstChild);
      } else {
        break; // Stop removing if we encounter the footer
      }
    }

    // Restore original content (preserving footer)
    accountWrapper.appendChild(originalContent.cloneNode(true));
  }

  // Observer to detect when the app is added
  let observer = new MutationObserver(() => {
    appContainer = document.getElementById("theme-container");

    if (appContainer) {
      moveEmbeddedApp();
      observer.disconnect(); // Stop watching once moved
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Fallback if observer fails
  setTimeout(() => {
    appContainer = document.getElementById("theme-container");
    accountWrapper = getAccountWrapper();
    if (appContainer && accountWrapper && !accountWrapper.contains(appContainer)) {
      moveEmbeddedApp();
    }
  }, 3000);
};

fetchthemeContainer()


function showLoader() {
  let loader = document.createElement("div");
  loader.id = "xircls-page-loader";
  loader.innerHTML = `
      <div style="
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          background: rgba(255, 255, 255, 0.84);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; color: #333;
          z-index: 9999;">Loading... Please wait.
      </div>`;
  document.body.appendChild(loader);
}
function hideLoader() {
  const loader = document.getElementById("xircls-page-loader");
  if (loader) loader.remove();
}

function createStatusToast(title, message, status = "success") {
  const isSuccess = status === "success";
  const mainColor = isSuccess ? "#22C55E" : "#EF4444";
  // const titleText = isSuccess ? "Success" : "Error";
  const titleText = title;
  // Remove previous toast if any
  const existing = document.querySelector(".toast-wrapper");
  if (existing) existing.remove();

  // Create wrapper
  const wrapper = document.createElement("div");
  wrapper.className = "toast-wrapper";
  wrapper.style.position = "fixed";
  wrapper.style.bottom = "-150px";
  wrapper.style.right = "20px";
  wrapper.style.zIndex = "9999";
  wrapper.style.width = "360px";
  wrapper.style.transition = "bottom 0.4s ease-out";
  wrapper.style.animation = "slideUp 0.4s forwards";

  // Create toast
  const toast = document.createElement("div");
  toast.style.width = "100%";
  toast.style.height = "100%";
  toast.style.backgroundColor = "#fff";
  toast.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.15)";
  toast.style.display = "flex";
  toast.style.alignItems = "flex-start";
  toast.style.gap = "1rem";
  toast.style.padding = "12px 16px 16px 16px";
  toast.style.position = "relative"; // you can remove this too if not needed
  toast.innerHTML = `
  <div style="font-size: 14px !important; color: ${mainColor}; margin-top: 5px !important;">
  ${
    isSuccess
      ? `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${mainColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${mainColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>`
  }
  </div>
  <div style="display: flex; flex-direction: column; flex: 1;">
    <div style="display: flex; align-items: first baseline; margin-bottom: 4px;">
      <div style="display: block; width: 8px; height: 8px; border-radius: 50%; background-color: ${mainColor}; margin-right: 8px; font-family: var(--font-family);"></div>
      <span style="font-size: 15px !important; color: #000; font-family: var(--font-family);">${titleText}</span>
    </div>
    <div style="font-size: 14px !important; color: #4b5563; line-height: 1.3; font-family: var(--font-family);">${message}</div>
  </div>
  <button style="background: none; border: none; font-size: 16px !important; color: #7c7c7c; cursor: pointer; position: relative; top: -15px; right: -15px;">
    <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
  </button>
  `;
  const closeBtn = toast.querySelector("button");
  closeBtn.addEventListener("click", () => wrapper.remove());
  wrapper.appendChild(toast);
  document.body.appendChild(wrapper);

  const style = document.createElement("style");
  style.innerHTML = `
      @keyframes slideUp {
        0% { bottom: -150px; opacity: 0; }
        100% { bottom: 20px; opacity: 1; }
      }
    `;
  document.head.appendChild(style);
  setTimeout(() => {
    wrapper.remove();
  }, 5000);
}
const phonecode_list = [
  {
    name: "Afghanistan",
    flag: "🇦🇫",
    code: "AF",
    dial_code: "+93",
  },
  {
    name: "Åland Islands",
    flag: "🇦🇽",
    code: "AX",
    dial_code: "+358",
  },
  {
    name: "Albania",
    flag: "🇦🇱",
    code: "AL",
    dial_code: "+355",
  },
  {
    name: "Algeria",
    flag: "🇩🇿",
    code: "DZ",
    dial_code: "+213",
  },
  {
    name: "American Samoa",
    flag: "🇦🇸",
    code: "AS",
    dial_code: "+1684",
  },
  {
    name: "Andorra",
    flag: "🇦🇩",
    code: "AD",
    dial_code: "+376",
  },
  {
    name: "Angola",
    flag: "🇦🇴",
    code: "AO",
    dial_code: "+244",
  },
  {
    name: "Anguilla",
    flag: "🇦🇮",
    code: "AI",
    dial_code: "+1264",
  },
  {
    name: "Antarctica",
    flag: "🇦🇶",
    code: "AQ",
    dial_code: "+672",
  },
  {
    name: "Antigua and Barbuda",
    flag: "🇦🇬",
    code: "AG",
    dial_code: "+1268",
  },
  {
    name: "Argentina",
    flag: "🇦🇷",
    code: "AR",
    dial_code: "+54",
  },
  {
    name: "Armenia",
    flag: "🇦🇲",
    code: "AM",
    dial_code: "+374",
  },
  {
    name: "Aruba",
    flag: "🇦🇼",
    code: "AW",
    dial_code: "+297",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    code: "AU",
    dial_code: "+61",
  },
  {
    name: "Austria",
    flag: "🇦🇹",
    code: "AT",
    dial_code: "+43",
  },
  {
    name: "Azerbaijan",
    flag: "🇦🇿",
    code: "AZ",
    dial_code: "+994",
  },
  {
    name: "Bahamas",
    flag: "🇧🇸",
    code: "BS",
    dial_code: "+1242",
  },
  {
    name: "Bahrain",
    flag: "🇧🇭",
    code: "BH",
    dial_code: "+973",
  },
  {
    name: "Bangladesh",
    flag: "🇧🇩",
    code: "BD",
    dial_code: "+880",
  },
  {
    name: "Barbados",
    flag: "🇧🇧",
    code: "BB",
    dial_code: "+1246",
  },
  {
    name: "Belarus",
    flag: "🇧🇾",
    code: "BY",
    dial_code: "+375",
  },
  {
    name: "Belgium",
    flag: "🇧🇪",
    code: "BE",
    dial_code: "+32",
  },
  {
    name: "Belize",
    flag: "🇧🇿",
    code: "BZ",
    dial_code: "+501",
  },
  {
    name: "Benin",
    flag: "🇧🇯",
    code: "BJ",
    dial_code: "+229",
  },
  {
    name: "Bermuda",
    flag: "🇧🇲",
    code: "BM",
    dial_code: "+1441",
  },
  {
    name: "Bhutan",
    flag: "🇧🇹",
    code: "BT",
    dial_code: "+975",
  },
  {
    name: "Bolivia, Plurinational State of bolivia",
    flag: "🇧🇴",
    code: "BO",
    dial_code: "+591",
  },
  {
    name: "Bosnia and Herzegovina",
    flag: "🇧🇦",
    code: "BA",
    dial_code: "+387",
  },
  {
    name: "Botswana",
    flag: "🇧🇼",
    code: "BW",
    dial_code: "+267",
  },
  {
    name: "Bouvet Island",
    flag: "🇧🇻",
    code: "BV",
    dial_code: "+47",
  },
  {
    name: "Brazil",
    flag: "🇧🇷",
    code: "BR",
    dial_code: "+55",
  },
  {
    name: "British Indian Ocean Territory",
    flag: "🇮🇴",
    code: "IO",
    dial_code: "+246",
  },
  {
    name: "Brunei Darussalam",
    flag: "🇧🇳",
    code: "BN",
    dial_code: "+673",
  },
  {
    name: "Bulgaria",
    flag: "🇧🇬",
    code: "BG",
    dial_code: "+359",
  },
  {
    name: "Burkina Faso",
    flag: "🇧🇫",
    code: "BF",
    dial_code: "+226",
  },
  {
    name: "Burundi",
    flag: "🇧🇮",
    code: "BI",
    dial_code: "+257",
  },
  {
    name: "Cambodia",
    flag: "🇰🇭",
    code: "KH",
    dial_code: "+855",
  },
  {
    name: "Cameroon",
    flag: "🇨🇲",
    code: "CM",
    dial_code: "+237",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    code: "CA",
    dial_code: "+1",
  },
  {
    name: "Cape Verde",
    flag: "🇨🇻",
    code: "CV",
    dial_code: "+238",
  },
  {
    name: "Cayman Islands",
    flag: "🇰🇾",
    code: "KY",
    dial_code: "+345",
  },
  {
    name: "Central African Republic",
    flag: "🇨🇫",
    code: "CF",
    dial_code: "+236",
  },
  {
    name: "Chad",
    flag: "🇹🇩",
    code: "TD",
    dial_code: "+235",
  },
  {
    name: "Chile",
    flag: "🇨🇱",
    code: "CL",
    dial_code: "+56",
  },
  {
    name: "China",
    flag: "🇨🇳",
    code: "CN",
    dial_code: "+86",
  },
  {
    name: "Christmas Island",
    flag: "🇨🇽",
    code: "CX",
    dial_code: "+61",
  },
  {
    name: "Cocos (Keeling) Islands",
    flag: "🇨🇨",
    code: "CC",
    dial_code: "+61",
  },
  {
    name: "Colombia",
    flag: "🇨🇴",
    code: "CO",
    dial_code: "+57",
  },
  {
    name: "Comoros",
    flag: "🇰🇲",
    code: "KM",
    dial_code: "+269",
  },
  {
    name: "Congo",
    flag: "🇨🇬",
    code: "CG",
    dial_code: "+242",
  },
  {
    name: "Congo, The Democratic Republic of the Congo",
    flag: "🇨🇩",
    code: "CD",
    dial_code: "+243",
  },
  {
    name: "Cook Islands",
    flag: "🇨🇰",
    code: "CK",
    dial_code: "+682",
  },
  {
    name: "Costa Rica",
    flag: "🇨🇷",
    code: "CR",
    dial_code: "+506",
  },
  {
    name: "Cote d'Ivoire",
    flag: "🇨🇮",
    code: "CI",
    dial_code: "+225",
  },
  {
    name: "Croatia",
    flag: "🇭🇷",
    code: "HR",
    dial_code: "+385",
  },
  {
    name: "Cuba",
    flag: "🇨🇺",
    code: "CU",
    dial_code: "+53",
  },
  {
    name: "Cyprus",
    flag: "🇨🇾",
    code: "CY",
    dial_code: "+357",
  },
  {
    name: "Czech Republic",
    flag: "🇨🇿",
    code: "CZ",
    dial_code: "+420",
  },
  {
    name: "Denmark",
    flag: "🇩🇰",
    code: "DK",
    dial_code: "+45",
  },
  {
    name: "Djibouti",
    flag: "🇩🇯",
    code: "DJ",
    dial_code: "+253",
  },
  {
    name: "Dominica",
    flag: "🇩🇲",
    code: "DM",
    dial_code: "+1767",
  },
  {
    name: "Dominican Republic",
    flag: "🇩🇴",
    code: "DO",
    dial_code: "+1849",
  },
  {
    name: "Ecuador",
    flag: "🇪🇨",
    code: "EC",
    dial_code: "+593",
  },
  {
    name: "Egypt",
    flag: "🇪🇬",
    code: "EG",
    dial_code: "+20",
  },
  {
    name: "El Salvador",
    flag: "🇸🇻",
    code: "SV",
    dial_code: "+503",
  },
  {
    name: "Equatorial Guinea",
    flag: "🇬🇶",
    code: "GQ",
    dial_code: "+240",
  },
  {
    name: "Eritrea",
    flag: "🇪🇷",
    code: "ER",
    dial_code: "+291",
  },
  {
    name: "Estonia",
    flag: "🇪🇪",
    code: "EE",
    dial_code: "+372",
  },
  {
    name: "Ethiopia",
    flag: "🇪🇹",
    code: "ET",
    dial_code: "+251",
  },
  {
    name: "Falkland Islands (Malvinas)",
    flag: "🇫🇰",
    code: "FK",
    dial_code: "+500",
  },
  {
    name: "Faroe Islands",
    flag: "🇫🇴",
    code: "FO",
    dial_code: "+298",
  },
  {
    name: "Fiji",
    flag: "🇫🇯",
    code: "FJ",
    dial_code: "+679",
  },
  {
    name: "Finland",
    flag: "🇫🇮",
    code: "FI",
    dial_code: "+358",
  },
  {
    name: "France",
    flag: "🇫🇷",
    code: "FR",
    dial_code: "+33",
  },
  {
    name: "French Guiana",
    flag: "🇬🇫",
    code: "GF",
    dial_code: "+594",
  },
  {
    name: "French Polynesia",
    flag: "🇵🇫",
    code: "PF",
    dial_code: "+689",
  },
  {
    name: "French Southern Territories",
    flag: "🇹🇫",
    code: "TF",
    dial_code: "+262",
  },
  {
    name: "Gabon",
    flag: "🇬🇦",
    code: "GA",
    dial_code: "+241",
  },
  {
    name: "Gambia",
    flag: "🇬🇲",
    code: "GM",
    dial_code: "+220",
  },
  {
    name: "Georgia",
    flag: "🇬🇪",
    code: "GE",
    dial_code: "+995",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    code: "DE",
    dial_code: "+49",
  },
  {
    name: "Ghana",
    flag: "🇬🇭",
    code: "GH",
    dial_code: "+233",
  },
  {
    name: "Gibraltar",
    flag: "🇬🇮",
    code: "GI",
    dial_code: "+350",
  },
  {
    name: "Greece",
    flag: "🇬🇷",
    code: "GR",
    dial_code: "+30",
  },
  {
    name: "Greenland",
    flag: "🇬🇱",
    code: "GL",
    dial_code: "+299",
  },
  {
    name: "Grenada",
    flag: "🇬🇩",
    code: "GD",
    dial_code: "+1473",
  },
  {
    name: "Guadeloupe",
    flag: "🇬🇵",
    code: "GP",
    dial_code: "+590",
  },
  {
    name: "Guam",
    flag: "🇬🇺",
    code: "GU",
    dial_code: "+1671",
  },
  {
    name: "Guatemala",
    flag: "🇬🇹",
    code: "GT",
    dial_code: "+502",
  },
  {
    name: "Guernsey",
    flag: "🇬🇬",
    code: "GG",
    dial_code: "+44",
  },
  {
    name: "Guinea",
    flag: "🇬🇳",
    code: "GN",
    dial_code: "+224",
  },
  {
    name: "Guinea-Bissau",
    flag: "🇬🇼",
    code: "GW",
    dial_code: "+245",
  },
  {
    name: "Guyana",
    flag: "🇬🇾",
    code: "GY",
    dial_code: "+592",
  },
  {
    name: "Haiti",
    flag: "🇭🇹",
    code: "HT",
    dial_code: "+509",
  },
  {
    name: "Heard Island and Mcdonald Islands",
    flag: "🇭🇲",
    code: "HM",
    dial_code: "+672",
  },
  {
    name: "Holy See (Vatican City State)",
    flag: "🇻🇦",
    code: "VA",
    dial_code: "+379",
  },
  {
    name: "Honduras",
    flag: "🇭🇳",
    code: "HN",
    dial_code: "+504",
  },
  {
    name: "Hong Kong",
    flag: "🇭🇰",
    code: "HK",
    dial_code: "+852",
  },
  {
    name: "Hungary",
    flag: "🇭🇺",
    code: "HU",
    dial_code: "+36",
  },
  {
    name: "Iceland",
    flag: "🇮🇸",
    code: "IS",
    dial_code: "+354",
  },
  {
    name: "India",
    flag: "🇮🇳",
    code: "IN",
    dial_code: "+91",
  },
  {
    name: "Indonesia",
    flag: "🇮🇩",
    code: "ID",
    dial_code: "+62",
  },
  {
    name: "Iran, Islamic Republic of Persian Gulf",
    flag: "🇮🇷",
    code: "IR",
    dial_code: "+98",
  },
  {
    name: "Iraq",
    flag: "🇮🇶",
    code: "IQ",
    dial_code: "+964",
  },
  {
    name: "Ireland",
    flag: "🇮🇪",
    code: "IE",
    dial_code: "+353",
  },
  {
    name: "Isle of Man",
    flag: "🇮🇲",
    code: "IM",
    dial_code: "+44",
  },
  {
    name: "Israel",
    flag: "🇮🇱",
    code: "IL",
    dial_code: "+972",
  },
  {
    name: "Italy",
    flag: "🇮🇹",
    code: "IT",
    dial_code: "+39",
  },
  {
    name: "Jamaica",
    flag: "🇯🇲",
    code: "JM",
    dial_code: "+1876",
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    code: "JP",
    dial_code: "+81",
  },
  {
    name: "Jersey",
    flag: "🇯🇪",
    code: "JE",
    dial_code: "+44",
  },
  {
    name: "Jordan",
    flag: "🇯🇴",
    code: "JO",
    dial_code: "+962",
  },
  {
    name: "Kazakhstan",
    flag: "🇰🇿",
    code: "KZ",
    dial_code: "+7",
  },
  {
    name: "Kenya",
    flag: "🇰🇪",
    code: "KE",
    dial_code: "+254",
  },
  {
    name: "Kiribati",
    flag: "🇰🇮",
    code: "KI",
    dial_code: "+686",
  },
  {
    name: "Korea, Democratic People's Republic of Korea",
    flag: "🇰🇵",
    code: "KP",
    dial_code: "+850",
  },
  {
    name: "Korea, Republic of South Korea",
    flag: "🇰🇷",
    code: "KR",
    dial_code: "+82",
  },
  {
    name: "Kosovo",
    flag: "🇽🇰",
    code: "XK",
    dial_code: "+383",
  },
  {
    name: "Kuwait",
    flag: "🇰🇼",
    code: "KW",
    dial_code: "+965",
  },
  {
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    code: "KG",
    dial_code: "+996",
  },
  {
    name: "Laos",
    flag: "🇱🇦",
    code: "LA",
    dial_code: "+856",
  },
  {
    name: "Latvia",
    flag: "🇱🇻",
    code: "LV",
    dial_code: "+371",
  },
  {
    name: "Lebanon",
    flag: "🇱🇧",
    code: "LB",
    dial_code: "+961",
  },
  {
    name: "Lesotho",
    flag: "🇱🇸",
    code: "LS",
    dial_code: "+266",
  },
  {
    name: "Liberia",
    flag: "🇱🇷",
    code: "LR",
    dial_code: "+231",
  },
  {
    name: "Libyan Arab Jamahiriya",
    flag: "🇱🇾",
    code: "LY",
    dial_code: "+218",
  },
  {
    name: "Liechtenstein",
    flag: "🇱🇮",
    code: "LI",
    dial_code: "+423",
  },
  {
    name: "Lithuania",
    flag: "🇱🇹",
    code: "LT",
    dial_code: "+370",
  },
  {
    name: "Luxembourg",
    flag: "🇱🇺",
    code: "LU",
    dial_code: "+352",
  },
  {
    name: "Macao",
    flag: "🇲🇴",
    code: "MO",
    dial_code: "+853",
  },
  {
    name: "Macedonia",
    flag: "🇲🇰",
    code: "MK",
    dial_code: "+389",
  },
  {
    name: "Madagascar",
    flag: "🇲🇬",
    code: "MG",
    dial_code: "+261",
  },
  {
    name: "Malawi",
    flag: "🇲🇼",
    code: "MW",
    dial_code: "+265",
  },
  {
    name: "Malaysia",
    flag: "🇲🇾",
    code: "MY",
    dial_code: "+60",
  },
  {
    name: "Maldives",
    flag: "🇲🇻",
    code: "MV",
    dial_code: "+960",
  },
  {
    name: "Mali",
    flag: "🇲🇱",
    code: "ML",
    dial_code: "+223",
  },
  {
    name: "Malta",
    flag: "🇲🇹",
    code: "MT",
    dial_code: "+356",
  },
  {
    name: "Marshall Islands",
    flag: "🇲🇭",
    code: "MH",
    dial_code: "+692",
  },
  {
    name: "Martinique",
    flag: "🇲🇶",
    code: "MQ",
    dial_code: "+596",
  },
  {
    name: "Mauritania",
    flag: "🇲🇷",
    code: "MR",
    dial_code: "+222",
  },
  {
    name: "Mauritius",
    flag: "🇲🇺",
    code: "MU",
    dial_code: "+230",
  },
  {
    name: "Mayotte",
    flag: "🇾🇹",
    code: "YT",
    dial_code: "+262",
  },
  {
    name: "Mexico",
    flag: "🇲🇽",
    code: "MX",
    dial_code: "+52",
  },
  {
    name: "Micronesia, Federated States of Micronesia",
    flag: "🇫🇲",
    code: "FM",
    dial_code: "+691",
  },
  {
    name: "Moldova",
    flag: "🇲🇩",
    code: "MD",
    dial_code: "+373",
  },
  {
    name: "Monaco",
    flag: "🇲🇨",
    code: "MC",
    dial_code: "+377",
  },
  {
    name: "Mongolia",
    flag: "🇲🇳",
    code: "MN",
    dial_code: "+976",
  },
  {
    name: "Montenegro",
    flag: "🇲🇪",
    code: "ME",
    dial_code: "+382",
  },
  {
    name: "Montserrat",
    flag: "🇲🇸",
    code: "MS",
    dial_code: "+1664",
  },
  {
    name: "Morocco",
    flag: "🇲🇦",
    code: "MA",
    dial_code: "+212",
  },
  {
    name: "Mozambique",
    flag: "🇲🇿",
    code: "MZ",
    dial_code: "+258",
  },
  {
    name: "Myanmar",
    flag: "🇲🇲",
    code: "MM",
    dial_code: "+95",
  },
  {
    name: "Namibia",
    flag: "🇳🇦",
    code: "NA",
    dial_code: "+264",
  },
  {
    name: "Nauru",
    flag: "🇳🇷",
    code: "NR",
    dial_code: "+674",
  },
  {
    name: "Nepal",
    flag: "🇳🇵",
    code: "NP",
    dial_code: "+977",
  },
  {
    name: "Netherlands",
    flag: "🇳🇱",
    code: "NL",
    dial_code: "+31",
  },
  {
    name: "Netherlands Antilles",
    flag: "",
    code: "AN",
    dial_code: "+599",
  },
  {
    name: "New Caledonia",
    flag: "🇳🇨",
    code: "NC",
    dial_code: "+687",
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    code: "NZ",
    dial_code: "+64",
  },
  {
    name: "Nicaragua",
    flag: "🇳🇮",
    code: "NI",
    dial_code: "+505",
  },
  {
    name: "Niger",
    flag: "🇳🇪",
    code: "NE",
    dial_code: "+227",
  },
  {
    name: "Nigeria",
    flag: "🇳🇬",
    code: "NG",
    dial_code: "+234",
  },
  {
    name: "Niue",
    flag: "🇳🇺",
    code: "NU",
    dial_code: "+683",
  },
  {
    name: "Norfolk Island",
    flag: "🇳🇫",
    code: "NF",
    dial_code: "+672",
  },
  {
    name: "Northern Mariana Islands",
    flag: "🇲🇵",
    code: "MP",
    dial_code: "+1670",
  },
  {
    name: "Norway",
    flag: "🇳🇴",
    code: "NO",
    dial_code: "+47",
  },
  {
    name: "Oman",
    flag: "🇴🇲",
    code: "OM",
    dial_code: "+968",
  },
  {
    name: "Pakistan",
    flag: "🇵🇰",
    code: "PK",
    dial_code: "+92",
  },
  {
    name: "Palau",
    flag: "🇵🇼",
    code: "PW",
    dial_code: "+680",
  },
  {
    name: "Palestinian Territory, Occupied",
    flag: "🇵🇸",
    code: "PS",
    dial_code: "+970",
  },
  {
    name: "Panama",
    flag: "🇵🇦",
    code: "PA",
    dial_code: "+507",
  },
  {
    name: "Papua New Guinea",
    flag: "🇵🇬",
    code: "PG",
    dial_code: "+675",
  },
  {
    name: "Paraguay",
    flag: "🇵🇾",
    code: "PY",
    dial_code: "+595",
  },
  {
    name: "Peru",
    flag: "🇵🇪",
    code: "PE",
    dial_code: "+51",
  },
  {
    name: "Philippines",
    flag: "🇵🇭",
    code: "PH",
    dial_code: "+63",
  },
  {
    name: "Pitcairn",
    flag: "🇵🇳",
    code: "PN",
    dial_code: "+64",
  },
  {
    name: "Poland",
    flag: "🇵🇱",
    code: "PL",
    dial_code: "+48",
  },
  {
    name: "Portugal",
    flag: "🇵🇹",
    code: "PT",
    dial_code: "+351",
  },
  {
    name: "Puerto Rico",
    flag: "🇵🇷",
    code: "PR",
    dial_code: "+1939",
  },
  {
    name: "Qatar",
    flag: "🇶🇦",
    code: "QA",
    dial_code: "+974",
  },
  {
    name: "Romania",
    flag: "🇷🇴",
    code: "RO",
    dial_code: "+40",
  },
  {
    name: "Russia",
    flag: "🇷🇺",
    code: "RU",
    dial_code: "+7",
  },
  {
    name: "Rwanda",
    flag: "🇷🇼",
    code: "RW",
    dial_code: "+250",
  },
  {
    name: "Reunion",
    flag: "🇷🇪",
    code: "RE",
    dial_code: "+262",
  },
  {
    name: "Saint Barthelemy",
    flag: "🇧🇱",
    code: "BL",
    dial_code: "+590",
  },
  {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    flag: "🇸🇭",
    code: "SH",
    dial_code: "+290",
  },
  {
    name: "Saint Kitts and Nevis",
    flag: "🇰🇳",
    code: "KN",
    dial_code: "+1869",
  },
  {
    name: "Saint Lucia",
    flag: "🇱🇨",
    code: "LC",
    dial_code: "+1758",
  },
  {
    name: "Saint Martin",
    flag: "🇲🇫",
    code: "MF",
    dial_code: "+590",
  },
  {
    name: "Saint Pierre and Miquelon",
    flag: "🇵🇲",
    code: "PM",
    dial_code: "+508",
  },
  {
    name: "Saint Vincent and the Grenadines",
    flag: "🇻🇨",
    code: "VC",
    dial_code: "+1784",
  },
  {
    name: "Samoa",
    flag: "🇼🇸",
    code: "WS",
    dial_code: "+685",
  },
  {
    name: "San Marino",
    flag: "🇸🇲",
    code: "SM",
    dial_code: "+378",
  },
  {
    name: "Sao Tome and Principe",
    flag: "🇸🇹",
    code: "ST",
    dial_code: "+239",
  },
  {
    name: "Saudi Arabia",
    flag: "🇸🇦",
    code: "SA",
    dial_code: "+966",
  },
  {
    name: "Senegal",
    flag: "🇸🇳",
    code: "SN",
    dial_code: "+221",
  },
  {
    name: "Serbia",
    flag: "🇷🇸",
    code: "RS",
    dial_code: "+381",
  },
  {
    name: "Seychelles",
    flag: "🇸🇨",
    code: "SC",
    dial_code: "+248",
  },
  {
    name: "Sierra Leone",
    flag: "🇸🇱",
    code: "SL",
    dial_code: "+232",
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    code: "SG",
    dial_code: "+65",
  },
  {
    name: "Slovakia",
    flag: "🇸🇰",
    code: "SK",
    dial_code: "+421",
  },
  {
    name: "Slovenia",
    flag: "🇸🇮",
    code: "SI",
    dial_code: "+386",
  },
  {
    name: "Solomon Islands",
    flag: "🇸🇧",
    code: "SB",
    dial_code: "+677",
  },
  {
    name: "Somalia",
    flag: "🇸🇴",
    code: "SO",
    dial_code: "+252",
  },
  {
    name: "South Africa",
    flag: "🇿🇦",
    code: "ZA",
    dial_code: "+27",
  },
  {
    name: "South Sudan",
    flag: "🇸🇸",
    code: "SS",
    dial_code: "+211",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    flag: "🇬🇸",
    code: "GS",
    dial_code: "+500",
  },
  {
    name: "Spain",
    flag: "🇪🇸",
    code: "ES",
    dial_code: "+34",
  },
  {
    name: "Sri Lanka",
    flag: "🇱🇰",
    code: "LK",
    dial_code: "+94",
  },
  {
    name: "Sudan",
    flag: "🇸🇩",
    code: "SD",
    dial_code: "+249",
  },
  {
    name: "Suriname",
    flag: "🇸🇷",
    code: "SR",
    dial_code: "+597",
  },
  {
    name: "Svalbard and Jan Mayen",
    flag: "🇸🇯",
    code: "SJ",
    dial_code: "+47",
  },
  {
    name: "Eswatini",
    flag: "🇸🇿",
    code: "SZ",
    dial_code: "+268",
  },
  {
    name: "Sweden",
    flag: "🇸🇪",
    code: "SE",
    dial_code: "+46",
  },
  {
    name: "Switzerland",
    flag: "🇨🇭",
    code: "CH",
    dial_code: "+41",
  },
  {
    name: "Syrian Arab Republic",
    flag: "🇸🇾",
    code: "SY",
    dial_code: "+963",
  },
  {
    name: "Taiwan",
    flag: "🇹🇼",
    code: "TW",
    dial_code: "+886",
  },
  {
    name: "Tajikistan",
    flag: "🇹🇯",
    code: "TJ",
    dial_code: "+992",
  },
  {
    name: "Tanzania, United Republic of Tanzania",
    flag: "🇹🇿",
    code: "TZ",
    dial_code: "+255",
  },
  {
    name: "Thailand",
    flag: "🇹🇭",
    code: "TH",
    dial_code: "+66",
  },
  {
    name: "Timor-Leste",
    flag: "🇹🇱",
    code: "TL",
    dial_code: "+670",
  },
  {
    name: "Togo",
    flag: "🇹🇬",
    code: "TG",
    dial_code: "+228",
  },
  {
    name: "Tokelau",
    flag: "🇹🇰",
    code: "TK",
    dial_code: "+690",
  },
  {
    name: "Tonga",
    flag: "🇹🇴",
    code: "TO",
    dial_code: "+676",
  },
  {
    name: "Trinidad and Tobago",
    flag: "🇹🇹",
    code: "TT",
    dial_code: "+1868",
  },
  {
    name: "Tunisia",
    flag: "🇹🇳",
    code: "TN",
    dial_code: "+216",
  },
  {
    name: "Turkey",
    flag: "🇹🇷",
    code: "TR",
    dial_code: "+90",
  },
  {
    name: "Turkmenistan",
    flag: "🇹🇲",
    code: "TM",
    dial_code: "+993",
  },
  {
    name: "Turks and Caicos Islands",
    flag: "🇹🇨",
    code: "TC",
    dial_code: "+1649",
  },
  {
    name: "Tuvalu",
    flag: "🇹🇻",
    code: "TV",
    dial_code: "+688",
  },
  {
    name: "Uganda",
    flag: "🇺🇬",
    code: "UG",
    dial_code: "+256",
  },
  {
    name: "Ukraine",
    flag: "🇺🇦",
    code: "UA",
    dial_code: "+380",
  },
  {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    code: "AE",
    dial_code: "+971",
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    code: "GB",
    dial_code: "+44",
  },
  {
    name: "United States",
    flag: "🇺🇸",
    code: "US",
    dial_code: "+1",
  },
  {
    name: "Uruguay",
    flag: "🇺🇾",
    code: "UY",
    dial_code: "+598",
  },
  {
    name: "Uzbekistan",
    flag: "🇺🇿",
    code: "UZ",
    dial_code: "+998",
  },
  {
    name: "Vanuatu",
    flag: "🇻🇺",
    code: "VU",
    dial_code: "+678",
  },
  {
    name: "Venezuela, Bolivarian Republic of Venezuela",
    flag: "🇻🇪",
    code: "VE",
    dial_code: "+58",
  },
  {
    name: "Vietnam",
    flag: "🇻🇳",
    code: "VN",
    dial_code: "+84",
  },
  {
    name: "Virgin Islands, British",
    flag: "🇻🇬",
    code: "VG",
    dial_code: "+1284",
  },
  {
    name: "Virgin Islands, U.S.",
    flag: "🇻🇮",
    code: "VI",
    dial_code: "+1340",
  },
  {
    name: "Wallis and Futuna",
    flag: "🇼🇫",
    code: "WF",
    dial_code: "+681",
  },
  {
    name: "Yemen",
    flag: "🇾🇪",
    code: "YE",
    dial_code: "+967",
  },
  {
    name: "Zambia",
    flag: "🇿🇲",
    code: "ZM",
    dial_code: "+260",
  },
  {
    name: "Zimbabwe",
    flag: "🇿🇼",
    code: "ZW",
    dial_code: "+263",
  },
];

var styles_applied = false;
var currObj = {
  font_family: '',
  secondaryFontFamily: '',
  box_shadow: '',
  profile_color: '',
  main_background_color: '',
  content_background_color: '',
  heading_color: '',
  heading_border_color: '',
  menu_heading_text_color: '',
  menu_items_color: '',
  menu_items_select_color: '',
  menu_items_background_color: '',
  menu_background_color: '',
  card_heading_color: '',
  card_label_color: '',
  card_text_color: '',
  card_text_background_color: '',
  card_background_color: '',
  card_font_family: '',
  card_border_radius: '',
  card_border_size: '',
  card_border_color: '',
  sidenavbtnhoverbackground: '',
  profile_border_color: '',
  sidenavbtnhovercolor: '',
  profile_border_size: '',
  button_background_color: '',
  button_background_hover_color: '',
  button_text_color: '',
  button_text_hover_color: '',
  button_border_color: '',
};
var elementsObj = {
  myOrders: true,
  myWishlist: true,
  recentlyViewed: true,
  myProfile: true,
  loyalty: true,
  changePassword: true,
  logout: true,
  dashboard: true,
};
let myOrders = [];
let myWishlist = [];
let recentlyViewed = [];
let myProfile = [];
let changePassword = [];
let logout = [];
let dashboard = [];
let xirclsBranding = {};
let LoyaltySettings = {};
let loyaltyCurrency = "";
let LoyltyProgramName = "";
let cancelMapping = {};
let trackOrderSettings = null;
let cancelOrderData = false;
let trackOrderData = false;
let exchangeOrderData = false;
let returnOrderData = false;
let replacementOrderData = false;
async function fetchAndProcessModuleSettings() {
  const shop = Shopify.shop;
  const url = `https://omc.axentraos.co.in/utility/get_module_setting/?shop=${shop}`;

  try {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();

    console.log("Full API Response:", data);
    console.log("Module Settings:", data.module_settings.find(m => m.module_name === 'Cancel Order'));
    const CancelData = data.module_settings.find(m => m.module_name === 'Cancel Order');
    window.cancelMapping = CancelData.module_json; 
    console.log("cancelMapping", window.cancelMapping);

    const trackModule = data.module_settings.find(m => m.module_name === 'Track Order');
    if (trackModule && trackModule.module_json) {
      window.trackOrderSettings = trackModule.module_json; // Make it global
      console.log("Track Order settings processed successfully from API:", window.trackOrderSettings);
    } else {
         console.warn('Track Order module data not found. Modal will use default visibility settings.');
    }

  } catch (error) {
    console.error("❌ Error fetching API data:", error);
  } finally {
    console.log("✅ Finished Cancel API call");
  }
}
fetchAndProcessModuleSettings()
function loadFont(fontName) {
  const fontLink = document.createElement('link');
  fontLink.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(' ', '+')}&display=swap`;
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);
  console.log('font loaded ==>', fontName, fontLink);
}
function applyTheme(theme) {
  console.log(theme, '=====> theme');
  document.documentElement.style.setProperty('--axentra-heading-color', theme.heading_color);
  document.documentElement.style.setProperty('--axentra-border-color', theme.border_color);
  document.documentElement.style.setProperty('--axentra-card-border-radius', theme.card_border_radius);
  document.documentElement.style.setProperty('--axentra-card-border-size', theme.card_border_size);
  document.documentElement.style.setProperty('--axentra-background-color', theme.main_background_color);
  document.documentElement.style.setProperty('--axentra-card-background-color', theme.card_background_color);
  document.documentElement.style.setProperty('--axentra-card-text-color', theme.card_text_color);
  document.documentElement.style.setProperty('--axentra-card-label-color', theme.card_label_color);
  document.documentElement.style.setProperty('--axentra-card-border-color', theme.card_border_color);
  document.documentElement.style.setProperty('--axentra-menu_heading_text_color', theme.menu_heading_text_color);
  document.documentElement.style.setProperty('--axentra-card-heading-color', theme.card_heading_color);
  document.documentElement.style.setProperty('--axentra-profile-background-color', theme.profile_color);
  document.documentElement.style.setProperty('--axentra-profile_border_color', theme.profile_border_color);
  document.documentElement.style.setProperty('--axentra-sidenavbtnhovercolor', theme.sidenavbtnhovercolor);
  document.documentElement.style.setProperty('--axentra-profile_border_size', theme.profile_border_size);
  document.documentElement.style.setProperty('--axentra-font-family', theme.font_family);
  document.documentElement.style.setProperty('--axentra-secondaryFontFamily', theme.secondaryFontFamily || theme.font_family);
  document.documentElement.style.setProperty('--axentra-card-font-family', theme.card_font_family);
  document.documentElement.style.setProperty('--axentra-container-two-background-color', theme.content_background_color);
  document.documentElement.style.setProperty('--axentra-container-one-background-color', theme.menu_background_color);
  document.documentElement.style.setProperty('--axentra-main-heading-border-color', theme.heading_border_color);
  document.documentElement.style.setProperty('--axentra-menu-items-color', theme.menu_items_color);
  document.documentElement.style.setProperty('--axentra-menu-items-select-color', theme.menu_items_select_color);
  document.documentElement.style.setProperty('--axentra-menu-items-background-color', theme.menu_items_background_color);
  document.documentElement.style.setProperty('--axentra-card-text-background-color', theme.card_text_background_color);
  document.documentElement.style.setProperty('--axentra-btn-background-color', theme.button_background_color);
  document.documentElement.style.setProperty('--axentra-sidenavbtnhoverbackground', theme.sidenavbtnhoverbackground);
  document.documentElement.style.setProperty('--axentra-btn-text-color', theme.button_text_color);
  document.documentElement.style.setProperty('--axentra-btn-text-hover-color', theme.button_text_hover_color);
  document.documentElement.style.setProperty('--axentra-btn-background-hover-color', theme.button_background_hover_color);
  document.documentElement.style.setProperty('--axentra-btn-border-color', theme.button_border_color);
  document.documentElement.style.setProperty('--uppercase', theme?.uppercaseHeadings);

  const heading = document.getElementById("tabHeading");
const style = getComputedStyle(document.documentElement);
const isUppercase = style.getPropertyValue('--uppercase').trim();

if (isUppercase === 'true') {
  heading.style.textTransform = 'uppercase';
} else {
  heading.style.textTransform = 'none';
}

}
const CACHE_DURATION_MS = 12 * 60 * 60 * 1000; 

/**
 * Retrieves cached data from localStorage if it's not stale.
 * @param {string} key The key for the cached item.
 * @returns {object|null} The parsed data or null if not found or stale.
 */
function getCachedData(key) {
  const cachedItem = localStorage.getItem(key);
  if (!cachedItem) {
    return null;
  }

  const { timestamp, data } = JSON.parse(cachedItem);
  const isStale = Date.now() - timestamp > CACHE_DURATION_MS;

  if (isStale) {
    localStorage.removeItem(key); // Clean up stale data
    console.log('Cache is stale. Removing it.');
    return null;
  }
  
  return data;
}

/**
 * Stores data in localStorage with a timestamp.
 * @param {string} key The key for the cached item.
 * @param {object} data The data to store.
 */
function setCachedData(key, data) {
  const itemToCache = {
    timestamp: Date.now(),
    data: data,
  };
  localStorage.setItem(key, JSON.stringify(itemToCache));
}


(async function () {
  // Define a unique key for our cached data
  const CACHE_KEY = 'omc_campaign_data';
  let data = getCachedData(CACHE_KEY); // Try to get data from cache first
  try {
    const shop = Shopify.shop;
    const url = `https://loyalty.axentraos.co.in/api/v1/rules/get_loyalty_settings/?shop=${shop}`;
    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();
console.log(data, "lllooo")
LoyaltySettings = data;
console.log(LoyaltySettings, "LoyaltySettings")
    loyaltyCurrency = LoyaltySettings?.basic_config?.points_terminology;
    LoyltyProgramName = LoyaltySettings?.basic_config?.programe_name;
    const instaredirect = LoyaltySettings?.earn_rule_json?.instagram_url;
    if (instaredirect) {
      const instabtn = document.getElementById("instdiv");
      if (instabtn) instabtn.style.display = "block";
    }

    const facebookredirect = LoyaltySettings?.earn_rule_json?.facebook_url;
    if (facebookredirect) {
      const facebookbtn = document.getElementById("facebookdiv");
      if (facebookbtn) facebookbtn.style.display = "block";
    }
    console.log('✅ Data fetched from API LoyaltySettings', LoyaltySettings);

  } catch (error) {
    console.error("Loyalty Settings catch error:", error);
  } finally {
    console.log('Loyalty Settings finally', LoyaltySettings);

   
  }

  
  try {
    // If there's no data in the cache, fetch it from the API
    if (!data) {
      console.log('No valid cache. Fetching campaign data from API...');

      const shop = Shopify.shop;
      const app = 'oh_my_customer';
      const url = `https://omc.axentraos.co.in/campaign/get_campaigns_shopify/?shop=${shop}&app=${app}`;
      
      const response = await fetch(url, { method: 'GET' });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      data = await response.json(); // Get the data from the response
      setCachedData(CACHE_KEY, data); // <<--- STORE THE FRESH DATA IN THE CACHE
      console.log('✅ Data fetched from API and cached.');

    } else {
      console.log('✅ Found data in cache. Using cached data.');
    }

    // --- The rest of your processing logic remains almost the same ---
    // It will now run with 'data' from either the cache or the fresh API call.
    
    console.log('✅ Raw API Response:', data);
    const campaign = data.campaigns && data.campaigns.length > 0 ? data.campaigns[0] : null;

    if (!campaign) {
      throw new Error('❌ No valid campaign or styling data found.');
    }
    
    console.log('🎯 Extracted Campaign:', campaign);
    const campaignJson = campaign.campaign_json || {};
    xirclsBranding.push = campaign?.campaign_json?.modules?.XIRCLSBranding || {};
    const styling = campaignJson.styling || {};
    const colors = styling.colors || {};
    const typography = styling.typography || {};
    const modules = campaignJson.modules || {};
    
    const finalobj = {
      // ... (your finalobj creation logic is unchanged)
      style: {
        typography: {
          fontFamily: typography.fontFamily || '',
          secondaryFontFamily: typography.secondaryFontFamily || '',
          uppercaseHeadings: typography.uppercaseHeadings || false,
        },
        boxShadow: styling.boxShadow || '',
        borderRadius: styling.borderRadius ? `${styling.borderRadius}px` : '',
        profile_border_size: styling.profile_border_size ? `${styling.profile_border_size}px` : '',
        colors: {
          namebackgroundcolor: colors.namebackgroundcolor || '',
          background: colors.background || '',
          primary: colors.primary || '',
          title: colors.lefttextcolor || '',
          sidenavbtntextcolor: colors.sidenavbtntextcolor || '',
          sidenavbtnselectcolor: colors.sidenavbtnselectcolor || '',
          sidenavbtnbackground: colors.sidenavbtnbackground || '',
          sidenavbackground: colors.sidenavbackground || '',
          sidenavbtnhovercolor: colors.sidenavbtnhovercolor || '',
          profile_border_color: colors.profile_border_color || '',
          sidenavbtnhoverbackground : colors.sidenavbtnhoverbackground || '',
          secondary: colors.secondary || '',
          accent: colors.accent || '',
          text: colors.text || '',
          cardBackgroundColor: colors.cardBackgroundColor || '',
          cardBorderColor: colors.cardBorderColor || '',
          rightbtnbgcolor: colors.rightbtnbgcolor || '',
          rightbtnbghovercolor: colors.rightbtnbghovercolor || '',
          rightbtntextcolor: colors.rightbtntextcolor || '',
          rightbtntexthovercolor: colors.rightbtntexthovercolor || '',
        },
      },
      style1: {
        cardborder_size: styling.cardBorderSize || '',
      },
      border_color: '',
      main_background_color: colors.background || '',
      main_heading_border_color: '',
      card_text_background_color: '',
      card_btn_border_color: '',
    };
    
    console.log('🔧 finalobj:', finalobj);
    currObj = {
      // ... (your currObj creation logic is unchanged)
      font_family: finalobj?.style?.typography?.fontFamily,
      secondaryFontFamily: finalobj?.style?.typography?.secondaryFontFamily,
      box_shadow: finalobj.style?.boxShadow,
      profile_color: finalobj?.style?.colors?.namebackgroundcolor,
      border_color: finalobj.border_color || '#111',
      main_background_color: finalobj?.style?.colors?.background,
      content_background_color: finalobj.main_background_color,
      heading_color: finalobj?.style?.colors?.primary,
      heading_border_color: finalobj.main_heading_border_color,
      menu_heading_text_color: finalobj?.style?.colors?.title,
      menu_items_color: finalobj?.style?.colors?.sidenavbtntextcolor,
      menu_items_select_color: finalobj?.style?.colors?.sidenavbtnselectcolor,
      menu_items_background_color: finalobj?.style?.colors?.sidenavbtnbackground,
      menu_background_color: finalobj?.style?.colors?.sidenavbackground,
      profile_border_color : finalobj?.style?.colors?.profile_border_color,
      card_heading_color: finalobj?.style?.colors?.secondary,
      sidenavbtnhovercolor: finalobj?.style?.colors?.sidenavbtnhovercolor,
      card_label_color: finalobj?.style?.colors?.accent,
      card_text_color: finalobj?.style?.colors?.text,
      card_text_background_color: finalobj.card_text_background_color,
      card_background_color: finalobj?.style?.colors?.cardBackgroundColor,
      card_font_family: finalobj?.style?.typography?.fontFamily,
      card_border_radius: finalobj.style?.borderRadius,
      card_border_size: finalobj.style1?.cardborder_size,
      card_border_color: finalobj.style?.colors?.cardBorderColor,
      button_background_color: finalobj.style?.colors?.rightbtnbgcolor,
      sidenavbtnhoverbackground : finalobj.style?.colors?.sidenavbtnhoverbackground,
      button_background_hover_color: finalobj.style?.colors?.rightbtnbghovercolor,
      button_text_color: finalobj.style?.colors?.rightbtntextcolor,
      button_text_hover_color: finalobj?.style?.colors?.rightbtntexthovercolor,
      button_border_color: finalobj.card_btn_border_color,
      profile_border_size : finalobj?.style?.profile_border_size,
      uppercaseHeadings: finalobj?.style?.typography?.uppercaseHeadings
    };
    console.log('✅ modules.loyalty:', modules.loyalty);
console.log('✅ LoyaltySettings.earn_rule_json:', LoyaltySettings?.earn_rule_json);
console.log('✅ LoyaltySettings.earn_rule_json exists:', !!LoyaltySettings?.earn_rule_json);

    elementsObj = {
      // ... (your elementsObj creation logic is unchanged)
      myOrders: modules.myOrders,
      myWishlist: modules.myWishlist,
      recentlyViewed: modules.recentlyViewed,
      myProfile: modules.myProfile,
      loyalty: {
        ...(typeof modules.loyalty === 'object' && modules.loyalty !== null ? modules.loyalty : { enabled: true }),
        enabled: LoyaltySettings?.earn_rule_json ? true : false
      },
     offers: modules.offers ?? false,
     subscription : modules.subscription ?? false,
     supportTicket: modules.supportTicket ?? { enabled: true },
      changePassword: modules.changePassword,
      logout: modules.logout,
      dashboard: modules.dashboard,
    };
    if (modules?.myOrders?.features && Array.isArray(modules.myOrders.features)) {
      console.log("haf")
  const cancelFeature = modules.myOrders.features.find(
    (feature) => feature.id === "Cancel_Order"
  );
   const trackFeature = modules.myOrders.features.find(
    (feature) => feature.id === "Order_Tracking"
  );
    const returnFeature = modules.myOrders.features.find(
    (feature) => feature.id === "Return"
  );
    const exchangeFeature = modules.myOrders.features.find(
    (feature) => feature.id === "Exchange"
  );
    const replaceFeature = modules.myOrders.features.find(
    (feature) => feature.id === "Replacement"
  );
  cancelOrderData = cancelFeature ? cancelFeature.enabled === true : false;
  console.log("cancelDatata", cancelOrderData, cancelFeature)

  trackOrderData = trackFeature ? trackFeature.enabled === true : false;
  console.log("trackOrderData", trackOrderData, trackFeature)

  returnOrderData = returnFeature ? returnFeature.enabled === true : false;
  console.log("returnOrderData", returnOrderData, returnFeature)

  exchangeOrderData = exchangeFeature ? exchangeFeature.enabled === true : false;
  console.log("exchangeOrderData", exchangeOrderData, exchangeFeature)

  replacementOrderData = replaceFeature ? replaceFeature.enabled === true : false;
  console.log("replacementOrderData", replacementOrderData, replaceFeature)

}
    // instaredirect = data.insta_url;
    // if (instaredirect) {
    //   const instabtn =  document.getElementById("instdiv")
    //   instabtn.style.display = "block"
    // }
    
    // console.log("insta_url11", instaredirect)
    console.log('✅ Final currObj:', currObj);
    console.log('✅ Final elementsObj:', elementsObj);

    // ... (your feature pushing logic is unchanged) ...

    if (typeof elementsObj === 'object' && elementsObj !== null) {
      for (let key in elementsObj) {
        const section = elementsObj[key];

        if (section.enabled && Array.isArray(section.features)) {
          for (let feature of section.features) {
            if (feature.enabled) {
              if (key === 'myOrders') myOrders.push(feature.id);
              else if (key === 'myWishlist') myWishlist.push(feature.id);
              else if (key === 'recentlyViewed') recentlyViewed.push(feature.id);
              else if (key === 'myProfile') myProfile.push(feature.id);
              else if (key === 'changePassword') changePassword.push(feature.id);
              else if (key === 'logout') logout.push(feature.id);
              else if (key === 'dashboard') dashboard.push(feature.id);
            }
          }
        }
      }
    }
    
    styles_applied = true;
  
    loadFont(finalobj.style.typography?.fontFamily);
    loadFont(finalobj.style.typography?.secondaryFontFamily);

    console.log("Rendering branding...");
    
    // Log the value of xirclsBranding.push.enabled
    console.log('xirclsBranding.push.enabled:', xirclsBranding.push.enabled);
    console.log('myProfile222', myProfile);
    
    const xirclsBrand = document.getElementById('XirclsBrand');
    
    if (xirclsBrand) {
      // Log the current status of the branding element
      console.log(xirclsBranding, "xirclsBrandingena");
  
      if (xirclsBranding.push.enabled) {
        xirclsBrand.style.display = 'flex'; // or 'flex', depending on your layout
      } else {
        xirclsBrand.style.display = 'none';
      }
    }
  } catch (error) {
    console.error('❌ Error in main execution block:', error);
  } finally {
    // This block runs regardless of cache hit/miss or error
    console.log('🎨 Applying Theme & Rendering UI...');
    if (currObj && Object.keys(currObj).length > 0) {
        applyTheme(currObj);
        if (styles_applied === true) {
            document.getElementById('theme-container').style.display = 'block';
        }
        renderMenu();
        renderMobileMenu();
        fetchWishlistOnReload();
        if (window.innerWidth <= 768) {
            toggleContainers();
        }
    } else {
        console.log("UI rendering skipped due to missing data.");
    }
  }




})();



(async function () {
  // Use the actual Shopify object in your store, this is for demonstration
  const shop = Shopify.shop; // Shopify.shop;
  const url = `https://omc.axentraos.co.in/utility/get_module_setting/?shop=${shop}`;

  try {
    const response = await fetch(url, { method: 'GET' });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Full API Response:', data);
    const targetModuleName = "Cancel Order";
    const cancelModule = data.module_settings.find(
      (module) => module.module_name === targetModuleName
    );
    let cancelMapping = null; 
    if (cancelModule) {
      console.log(`✅ Found settings for "${targetModuleName}":`, cancelModule);
      cancelMapping = cancelModule.module_json;
      console.log("Extracted cancelMapping:", cancelMapping);
    } else {
      console.warn(`❌ Could not find settings for module: "${targetModuleName}"`);
    }


  } catch (error) {
    console.error('❌ Error fetching or processing API data:', error);
  } finally {
    console.log('✅ Finished API call process');
  }
})();



document.addEventListener("DOMContentLoaded", function () {
  let accountWrapper = document.getElementById("MainContent");
  let footer = document.getElementById("shopify-section-footer");
  let appContainer = document.getElementById("ohcust-app-container");

  // Store original content for restoring later
  let originalContent = accountWrapper ? accountWrapper.cloneNode(true) : null;

  function moveEmbeddedApp() {
    accountWrapper = document.getElementById("MainContent");
    appContainer = document.getElementById("ohcust-app-container");
    footer = document.getElementById("shopify-section-footer"); // Re-check in case it loads dynamically

    if (!accountWrapper) {
      console.warn("❌ MainContent wrapper not found. Retrying...");
      return;
    }
    if (!appContainer) {
      console.warn("❌ App container not found. Waiting...");
      return;
    }
  
    console.log("✅ Moving OhMyCustomer app...");
  
    // Clear existing content
    while (accountWrapper.firstChild) {
      accountWrapper.removeChild(accountWrapper.firstChild);
    }
  
    // Add slide effect class just before inserting
    appContainer.classList.add("slide-down-effect");
  
    // Insert appContainer
    accountWrapper.appendChild(appContainer);
  
    if (footer) {
      console.log("✅ Footer found. App placed above footer.");
    } else {
      console.warn("⚠️ Footer not found. App placed inside MainContent.");
    }
  }
  
  function restoreShopifyContent() {
    accountWrapper = document.getElementById("MainContent");

    if (!accountWrapper || !originalContent) {
      console.warn("❌ Cannot restore original content.");
      return;
    }

    console.log("🔄 Restoring original Shopify account page content...");

    // Remove current content before restoring
    while (accountWrapper.firstChild) {
      accountWrapper.removeChild(accountWrapper.firstChild);
    }

    // Restore original content
    accountWrapper.appendChild(originalContent.cloneNode(true));
  }

  // Observer to detect when the app is added
  let observer = new MutationObserver(() => {
    appContainer = document.getElementById("ohcust-app-container");

    if (appContainer) {
      moveEmbeddedApp();
      observer.disconnect(); // Stop watching once moved
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Fallback if observer fails
  setTimeout(() => {
    appContainer = document.getElementById("ohcust-app-container");
    if (appContainer && !accountWrapper.contains(appContainer)) {
      moveEmbeddedApp();
    }
  }, 3000);

});

async function fetchTokenData() {
  console.log("fetch token data executing.....");
  const url = `https://${xirclsBaseUrl}/wishlist/get_shopify_token/`;

  const formData = new FormData();
  formData.append("shop", Shopify.shop);
  formData.append("app", "oh_my_customer");

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.response.access;
  } catch (error) {
    console.error("Error fetching API get_shopify_token:", error);
  }
}

async function clearCart() {
  console.log("Clearing cart...");
  await fetch("/cart/clear.js", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  console.log("Cart cleared successfully.");
}

//Wish List Functions


// Save wishlist to metafield or sessionStorage
async function saveWishlist(wishlist, metafieldId, productId) {
  console.log("productId", productId)
  if (customerId) {
    if (!metafieldId) {
      console.error("Metafield ID is null, cannot save wishlist");
      return;
    }

    try {
      const metafieldPayload = {
        customerId: customerId,
        shop: Shopify.shop,
        app: "oh_my_customer",
        metafieldId: metafieldId,
        productId: productId,
        metafield: {
          id: metafieldId,
          namespace: "wishlist",
          key: "items",
          value: JSON.stringify(wishlist),
          type: "json",
        },
      };

      const url = `https://${xirclsBaseUrl}/wishlist/update_metafield/`;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(metafieldPayload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Error saving wishlist: ${data.message}`);
      }

      console.log("Wishlist successfully saved to metafield:", wishlist);
    } catch (error) {
      console.error("Error saving wishlist:", error);
    }
  } else {
    sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
    console.log("Logged out - Wishlist added to sessionStorage:", wishlist);
  }
}


async function updateCustomerDetails(data) {
  document
    .querySelectorAll(".modal")
    .forEach((modal) => (modal.style.display = "none"));

  try {
    const response = await fetch(`https://${xirclsBaseUrl}/customer_profile/update-customer/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Added headers
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    const message_heading = result.customer
      ? "Profile Updated"
      : "Profile Update Unsuccessful";
    const message_subheading = result.customer
      ? "Your changes have been saved! Your updated details are now active on your account."
      : "Something went wrong and your changes weren’t saved. Please try again.";

    createStatusToast(message_heading, message_subheading, result.customer ? "success" : "error");
  } catch (error) {
    // document.getElementById('response-message').innerText = 'Error: ' + error.message;
    createStatusToast("Profile Update Unsuccessful", "Something went wrong and your changes weren’t saved. Please try again.", "error");
  } finally {
    setTimeout(() => window.location.reload(), 500);
  }
}

async function updateCustomerAddress(data) {
  document
    .querySelectorAll(".modal")
    .forEach((modal) => (modal.style.display = "none"));

  try {
    const response = await fetch(
      `https://${xirclsBaseUrl}/customer_profile/update-customer-address/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();

    // Check for a successful customer update
    const message = responseData.customer
      ? { text: "Address Updated", subtext: "Your changes have been saved! Your updated details are now active on your account.", type: "success" }
      : { text: "Couldn’t Update Address", subtext: "We couldn’t save your address. Please check the details and try again.", type: "error" };
    createStatusToast(message.text, message.subtext, message.type);
  } catch (error) {
    // document.getElementById('response-message').innerText = 'Error: ' + error.message;
    createStatusToast("Couldn’t Update Address", "We couldn’t save your address. Please check the details and try again.", "error");
  } finally {
    setTimeout(() => window.location.reload(), 500);
  }
}

async function addCustomerAddress(data) {
  document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
  try {
    const response = await fetch(`https://${xirclsBaseUrl}/customer_profile/add_customer_address/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });

    const result = await response.json();

    let message = 'Address details are Invalid!';
    let messageType = 'error';

    if (result.message) {
      const messageData = JSON.parse(result.message);
      if (messageData.customer_address && messageData.customer_address.id) {
        message = 'Address Updated';
        messageType = 'success';
      }

      // ✅ Return parsed messageData to caller
      return messageData;
    }

    return null;

  } catch (error) {
  
    console.error('Request failed', error);
    return null;
  } finally {
    setTimeout(() => window.location.reload(), 500);
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: adds smooth scroll effect
  });
  }
}

async function deleteCustomerAddress(addressId) {
  document
    .querySelectorAll(".modal")
    .forEach((modal) => (modal.style.display = "none"));

  try {
    const data = {
      customerId: customerId,
      addressId: addressId,
      shop: Shopify.shop,
      app: "oh_my_customer",
    };

    const response = await fetch(
      `https://${xirclsBaseUrl}/customer_profile/delete_customer_address/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const message_heading = response.ok
      ? "Address Deleted"
      : "Couldn’t Delete Address";
    const message_subheading = response.ok
      ? "Your changes have been saved! Your updated details are now active on your account."
      : "We couldn’t delete your address. Please check the details and try again.";

    createStatusToast(message_heading, message_subheading, response.ok ? "success" : "error");
  } catch (error) {
    createStatusToast(`Address Delete Fail`, "We couldn’t delete your address. Please check the details and try again.", "error");
    console.error("Error:", error);
  } finally {
    setTimeout(() => window.location.reload(), 500);
  }
}

async function cancelOrder(order_id,orderNumber) {
  // Remove existing modal if any
  const existingModal = document.getElementById("cancelOrderModal");
  if (existingModal) existingModal.remove();
console.log(orderNumber, order_id, "jshfdfhbsd")
  // Create modal wrapper
  const modal = document.createElement("div");
  modal.id = "cancelOrderModal";
  modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    font-family: var(--axentra-secondaryFontFamily);
  `;

  // Modal inner content
  modal.innerHTML = `
    <div id="cancelOrderModalContent" style="
      position: relative;
      background: white;
      border-radius: 15px;
      width: 100%;
      max-width: 512px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      padding: 27px;
      text-align: left;
    ">
     <button id="closeModalBtn" style="
        position: absolute;
        top: 11px;
        right: 24px;
        background: none;
        border: none;
        font-size: 30px;
        color: #666;
        cursor: pointer;
      ">&times;</button>

      <div style="
        font-size: 20px;
        font-weight: 700;
        color: #1a1a1a;
        margin-top: 0;
        margin-bottom: 8px;
        font-family: var(--axentra-secondaryFontFamily);
        text-transform: none !important;
        letter-spacing: 1px;
      ">Cancel Order ${orderNumber}</div>

      <div style="
        font-size: 16px;
        color: #4A5568;
        margin-top: 0;
        margin-bottom: 24px;
        line-height: 1.5;
        font-family: var(--axentra-secondaryFontFamily);
      ">
        Are you sure you want to cancel this order? This action cannot be
        undone. Once cancelled, the order process will stop and any payment
        will be refunded according to our refund policy.
      </div>

      <div style="
        display: flex;
        justify-content: flex-end;
        gap: 12px;
        margin-top: 16px;
      ">
        <button id="keepOrderBtn" style="
          background-color: #fff;
          color: #1a1a1a;
          border: 1px solid #dcdcdc;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          font-family: var(--axentra-secondaryFontFamily);
          line-height: 1;
        ">
          Keep Order
        </button>
        <button id="confirmCancelBtn" style="
           background-color: var(--axentra-btn-background-color);
           color: var(--axentra-btn-text-color);
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          font-family: var(--axentra-secondaryFontFamily);
          line-height: 1;
        ">
          Yes, Cancel Order
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeModal = () => modal.remove();

  // Close on 'Keep Order' button
  document.getElementById("keepOrderBtn").onclick = closeModal;
   document.getElementById("closeModalBtn").onclick = closeModal;

  // Close on outside click
  modal.addEventListener("click", function (e) {
    const content = document.getElementById("cancelOrderModalContent");
    if (!content.contains(e.target)) {
      closeModal();
    }
  });

  // Confirm and call API
  document.getElementById("confirmCancelBtn").onclick = async function () {
    closeModal();

    try {
      const formData = new FormData();
      formData.append('shop', Shopify.shop);
      formData.append('order_id', order_id);

      const response = await fetch(`https://omc.axentraos.co.in/utility/cancel_order/`, {
        method: "POST",
        body: formData,
      });

      const message = response.ok
        ? "Order Cancelled successfully!"
        : "Failed to Cancel Order!";
      
      const message_subheading = response.ok
        ? "Your order has been cancelled successfully. You can view the updated status in the Orders section."
        : "We couldn’t cancel your order. Try again or contact support for help.";

      createStatusToast(message, message_subheading, response.ok ? "success" : "error");
    } catch (error) {
      console.error("Request failed:", error);
      createStatusToast("Unable to Cancel Order", "We couldn’t cancel your order. Try again or contact support for help.", "error");
    } finally {
      setTimeout(() => window.location.reload(), 500);
    }
  };
}



async function addToCart(variantId, productId) {
  showLoader();
  const checkoutUrl = "/cart/add.js"; // Shopify's cart add endpoint
  console.log("Adding to cart:", { variantId, productId });

  // Create the data to be sent in the request
  const data = new URLSearchParams({
    form_type: "product",
    utf8: "✓",
    id: variantId, // Variant ID
    "product-id": productId, // Product ID
    "section-id": "template--17264040575126__main",
    sections: "cart-drawer,cart-icon-bubble",
    sections_url: "/products/selling-plans-ski-wax",
    selling_plan: "",
  });

  try {
    // Send the POST request to add the item to the cart
    const response = await fetch(checkoutUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data.toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Response error:", errorText);
      throw new Error("Network response was not ok: " + response.statusText);
    }

    const result = await response.json();
    console.log("Added to cart:", result);

    if (typeof window.refreshCart === 'function') {
      console.log("Calling theme's window.refreshCart()");
      window.refreshCart();
      createStatusToast(
  "Cart Updated Successfully",
  "Your cart has been updated successfully.",
  "success"
);
    } else {
      console.warn('Theme "refreshCart" function not found. Redirecting to cart page as a fallback.');
     createStatusToast(
  "Cart Updated Successfully",
  "Your cart has been updated successfully.",
  "success"
);

      window.location.href = "/cart";
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    createStatusToast("Cart Update Fail",
      "We couldn’t update your cart. Please try again or contact support for assistance.",
      "error"
    );
  } finally {
    hideLoader();
  }
}

async function buyNow(variantId, productId) {
  console.log("buy now executing....");
  showLoader();

  try {
    // Step 1: Fetch current cart data and store it in sessionStorage
    console.log("Fetching current cart data...");
    const cartResponse = await fetch("/cart.js");

    if (!cartResponse.ok) throw new Error("Failed to fetch cart data");

    const cartData = await cartResponse.json();
    console.log("Current Cart Data:", cartData);
    sessionStorage.setItem("previousCart", JSON.stringify(cartData.items));

    // Step 2: Clear the cart
    clearCart();

    // Step 3: Add the new product to the empty cart
    const checkoutUrl = "/cart/add.js"; // Shopify's cart add endpoint
    console.log("Adding new product to cart:", { variantId, productId });

    // Create the data to be sent in the request
    const data = new URLSearchParams({
      form_type: "product",
      utf8: "✓",
      id: variantId, // Variant ID
      "product-id": productId, // Product ID
      "section-id": "template--17264040575126__main",
      sections: "cart-drawer,cart-icon-bubble",
      sections_url: "/products/selling-plans-ski-wax",
      selling_plan: "",
    });

    // Send the POST request to add the item to the cart
    const response = await fetch(checkoutUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data.toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to add product to cart:", errorText);
      throw new Error("Network response was not ok: " + response.statusText);
    }

    const result = await response.json();
    console.log("Product Added to cart:", result);

    window.location.href = "/checkout"; // Redirect to checkout page
  } catch (error) {
    console.error("Error during buyNow operation:", error);
    createStatusToast("Cart Update Fail",
      "We couldn’t update your cart. Please try again or contact support for assistance.",
      "error"
    );
  } finally {
    hideLoader(); // Ensure loader is hidden
  }
}

async function attachReorderEventListeners() {
  const reorderButtons = document.querySelectorAll(".reorder-btn");

  reorderButtons.forEach((button) => {
    button.addEventListener("click", async function (e) {
      e.preventDefault(); // Good practice to prevent any default browser behavior
      
      const rawData = this.getAttribute("data-order");
      console.log("Raw encoded data:", rawData);

      try {
        // 1. Decode the URI encoded string before parsing
        if (!rawData || typeof rawData !== "string") {
          console.error("Invalid or empty data attribute");
          return;
        }

        // IMPORTANT: We decode here because we used encodeURIComponent in the HTML generation
        const lineItems = JSON.parse(decodeURIComponent(rawData));
        console.log("Parsed line items:", lineItems);

        if (!Array.isArray(lineItems) || lineItems.length === 0) {
          console.error("No valid line items found:", lineItems);
          return;
        }

        showLoader();

        // 2. Await clearCart if it's an async function (API call)
        if (typeof clearCart === 'function') {
             await clearCart(); 
        } else {
            // Fallback if clearCart isn't defined: manually clear via API
            await fetch('/cart/clear.js', { method: 'POST' });
        }

        // 3. Add items to cart
        for (const item of lineItems) {
          // Ensure we have a valid ID. Some objects use 'id' or 'variant_id' or 'variantId'
          const variantId = item.variantId || item.variant_id || item.id;

          console.log(`Adding item: ${item.title} (Variant ID: ${variantId}, Quantity: ${item.quantity})`);

          const response = await fetch("/cart/add.js", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              id: variantId,
              quantity: item.quantity || 1,
            }),
          });

          if (!response.ok) {
            const errorResponse = await response.json();
            console.error(`Error adding item to cart: ${item.title}`, errorResponse);
          } else {
            console.log(`Successfully added ${item.title}`);
          }
        }

        // 4. Add cart attributes
        await fetch("/cart/update.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            attributes: {
              reorder_source: "customer_accounts_by_axentra",
              campaign : "reorder"
            },
          }),
        });
        
        // 5. Verify Cart
        const cartResponse = await fetch("/cart.js");
        const cartData = await cartResponse.json();

        if (!cartData.items || cartData.items.length === 0) {
          console.error("Cart is empty after adding items. Aborting redirect.");
          hideLoader();
          return;
        }

        console.log("Cart ready. Redirecting to checkout...");

        // 6. Redirect
        setTimeout(() => {
          window.location.href = "/checkout?utm_source=customer_accounts_by_axentra&utm_campaign=reorder&utm_medium=app";
        }, 500);

      } catch (error) {
        console.error("Unexpected error during reorder:", error);
        hideLoader();
      }
    });
  });
}


async function removeFromWishlist(itemId) {
  console.log("itemId to remove:", itemId);
  try {
    // Fetch wishlist data to get the current items
    const response = await fetch(
      `https://${xirclsBaseUrl}/wishlist/get_metafield/?customerId=${customerId}&shop=${Shopify.shop}&app=oh_my_customer`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();

    // Find the wishlist metafield in the response
    const wishlistMetafield = data.metafields.metafields.find(
      (metafield) =>
        metafield.namespace === "wishlist" && metafield.key === "items"
    );
    console.log("wishlistMetafield", wishlistMetafield);
    if (!wishlistMetafield) {
      console.error("No wishlist metafield found.");
      return;
    }

    const wishlist = JSON.parse(wishlistMetafield.value); // Parse the existing wishlist
    const updatedWishlist = wishlist.filter((item) => item.id !== itemId); // Remove the item by id
    console.log("wishlist", wishlist);
    console.log("updatedWishlist", updatedWishlist);
    // Prepare the updated metafield data
    const updatedMetafield = {
      customerId: customerId,
      shop: Shopify.shop,
      app: "oh_my_customer",
      metafieldId: wishlistMetafield.id, // Use the metafield ID here
      productId: itemId,
      metafield: {
        id: wishlistMetafield.id,
        namespace: "wishlist",
        key: "items",
        value: JSON.stringify(updatedWishlist), // Save the updated wishlist
        type: "json",
      },
    };

    // Send the updated wishlist back to the server to update the metafield
    await fetch(`https://${xirclsBaseUrl}/wishlist/update_metafield/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMetafield),
    });
    console.log("updated wishlist meta field");
    createStatusToast(`Removed from Wishlist`, `This item has been successfully removed and is no longer saved in your wishlist.`, "success");
    // Re-render the wishlist after updating

    renderWishlist(updatedWishlist);
    setTimeout(() => {
      window.location.reload();
    }, 1500);

  } catch (error) {
    createStatusToast("Wishlist Update Failed", "We couldn’t update your wishlist. Please try again.", "error");
  } 
}

function handleLogout() {
  // Optional: showLoader();
  window.location.href = "/account/login";
}

function Logout() {
  createStatusToast(
    "Logged Out",
    "You’ve been successfully signed out of your account.",
    "success"
  );

  // First, trigger logout
  fetch('/account/logout')
    .then(() => {
      // Delay to let the toast show
      setTimeout(() => {
        // Manually redirect to custom login page (or wherever you want)
        window.location.href = '/';
      }, 1000);
    })
    .catch(() => {
      // Optional: handle logout failure
      console.error('Logout failed');
    });
}
async function confirmLogout() {
  // Remove any existing modal
  const existingModal = document.getElementById("confirmLogoutModal");
  if (existingModal) existingModal.remove();

  // Create modal wrapper
  const modal = document.createElement("div");
  modal.id = "confirmLogoutModal";
  modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    font-family: var(--axentra-secondaryFontFamily);
  `;

  // Modal inner content
  modal.innerHTML = `
    <div id="confirmLogoutModalContent" style="
      position: relative;
      background: white;
      border-radius: 15px;
      width: 100%;
      max-width: 512px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      padding: 27px;
      text-align: left;
    ">
      <button id="closeModalBtn" style="
        position: absolute;
        top: 11px;
        right: 24px;
        background: none;
        border: none;
        font-size: 30px;
        color: #666;
        cursor: pointer;
      ">&times;</button>

      <div style="
        font-size: 20px;
        font-weight: 700;
        color: #1a1a1a;
        margin-top: 0;
        margin-bottom: 8px;
        font-family: var(--axentra-secondaryFontFamily);
        text-transform: none !important;
        letter-spacing: 1px;
      ">Confirm Logout</div>

      <div style="
        font-size: 16px;
        color: #4A5568;
        margin-top: 0;
        margin-bottom: 24px;
        line-height: 1.5;
        font-family: var(--axentra-secondaryFontFamily);
      ">
        Do you want to logout?
      </div>

      <div style="
        display: flex;
        justify-content: flex-end;
        gap: 12px;
        margin-top: 16px;
      ">
        <button id="cancelLogoutBtn" style="
          background-color: #fff;
          color: #1a1a1a;
          border: 1px solid #dcdcdc;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          font-family: var(--axentra-secondaryFontFamily);
          line-height: 1;
        ">
          Cancel
        </button>
        <button id="confirmLogoutBtn" style="
           background-color: var(--axentra-btn-background-color);
           color: var(--axentra-btn-text-color);
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          font-family: var(--axentra-secondaryFontFamily);
          line-height: 1;
        ">
          Yes, Logout
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeModal = () => modal.remove();

  // Close on 'Cancel' or 'X' click
  document.getElementById("cancelLogoutBtn").onclick = closeModal;
  document.getElementById("closeModalBtn").onclick = closeModal;

  // Close on outside click
  modal.addEventListener("click", function (e) {
    const content = document.getElementById("confirmLogoutModalContent");
    if (!content.contains(e.target)) closeModal();
  });

  // Confirm logout
  document.getElementById("confirmLogoutBtn").onclick = function () {
    closeModal();
    Logout();
  };
}

function getModalData(modalId) {
  const modal = document.getElementById(modalId); // Find the modal by its unique ID

  const inputsAndSelects = modal.querySelectorAll("input, select"); // Fetch all input and select fields inside the modal

  const modalData = {}; // Create an object to store the input and select field values
  console.log(modalData, "getting modal data..................");
  // Loop through each input/select and store its value in the modalData object
  inputsAndSelects.forEach((element) => {
    if (element.tagName === "SELECT") {
      // If it's a select, get the selected value
      modalData[element.name] = element.value;
    } else if (element.tagName === "INPUT") {
      // If it's an input, get the input value
      modalData[element.name] = element.value;
    }
  });
  console.log(modalData, "getting modal data..................");

  return modalData; // Return the collected data
}

function createModal(headingText, bodyData, buttonText, buttonFunction) {
  console.log(bodyData, "modal body data");
  // Generate a unique ID based on the first word of the heading text
  const modalId = headingText.split(" ")[0].toLowerCase(); // Get the first word and make it lowercase

  // Create the modal container
  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.setAttribute("id", modalId); // Set the ID to the modal container
  modal.style.display = "flex"; // Initially display it as a flex container

  // Create the modal content wrapper
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // Close button (cross mark)
  const closeButton = document.createElement("span");
  closeButton.classList.add("close-btn");
  closeButton.innerHTML = '<i class="fas fa-times"></i>';

  // Heading section
  const modalHeading = document.createElement("h3");
  modalHeading.textContent = headingText;
  modalHeading.classList.add("modal-heading");

  // Body section
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  if (typeof bodyData === "string") {
    modalBody.textContent = bodyData; // Directly set the text if bodyData is a string
  } else {
    bodyData.forEach((field) => {
      modalBody.appendChild(field);
    });
  }

  // Button section
  const actionButton = document.createElement("button");
  actionButton.classList.add("modal-button");
  actionButton.textContent = buttonText;

  // Add event listener to the action button
  actionButton.addEventListener("click", function () {
    const data = getModalData(modalId);
    buttonFunction(data); // Execute the passed function on button click
  });

  // Close button functionality: hide the modal
  closeButton.addEventListener("click", function () {
    modal.style.display = "none"; // Hide the modal when cross is clicked
  });

  // Append the content to the modal
  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalHeading);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(actionButton);

  modal.appendChild(modalContent);

  // Append the modal to the body of the document
  document.body.appendChild(modal);
}
function triggerFileInput() {
  document.getElementById("imageInput").click();
}
// Preview selected image
function previewImage(event) {
  let file = event.target.files[0];

  if (file) {
    if (file.size > 45 * 1024) {
     
      createStatusToast("Upload Failed", "The image exceeds the maximum file size. Please upload a file smaller than 45KB.", "error");
      event.target.value = ""; // Reset file input
      return;
    }

    let reader = new FileReader();
    reader.onload = function (e) {
      selectedImage = e.target.result;
      if(selectedImage){
        setImage()
    }
     
    };
    reader.readAsDataURL(file);
  }
}

// Set selected image in place of icon
function setImage() {
  if (selectedImage) {
    const url = (document.getElementById("logoImage").src = selectedImage);
    const updated_data = {
      customerId: customerId,
      customerData: {
        metafields: [
          {
            namespace: "custom",
            key: "logo_image",
            value: url || "", // optional default value if dob is empty
            type: "single_line_text_field",
          },
        ],
      },
      shop: Shopify.shop,
      app: "oh_my_customer",
    };

    console.log("Saving Personal Information:", updated_data);
    updateCustomerDetails(updated_data);

  }
}
async function fetchCountries() {
  const localStorageKey = 'countriesData';
  const ttl = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

  const cached = localStorage.getItem(localStorageKey);
  if (cached) {
    try {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < ttl) {
        return data; // Return cached data if it's still valid
      }
    } catch (e) {
      console.warn("Invalid JSON from localStorage, fetching fresh data.");
    }
  }

  try {
    const response = await fetch(`https://api.xircles.in${countries}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    localStorage.setItem(localStorageKey, JSON.stringify({
      data,
      timestamp: Date.now()
    }));

    return data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return null;
  }
}

async function fetchStates(countryName) {
  try {
    const form_data = new FormData();
    form_data.append("country_name", countryName);

    const response = await fetch(`https://api.xircles.in${getState}`, {
      method: "POST",
      body: form_data,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching states for country: ${countryName}`, error);
    return null;
  }
}
function updateProfileImage(img_url, img_fn, img_ln) {
  const logoImage = document.getElementById("logoImage");
  const initialsAvatar = document.getElementById("initialsAvatar");

  if (img_url && img_url.trim() !== "") {
    // Image URL exists, so show the image and hide the initials
    logoImage.src = img_url;
    logoImage.style.display = "block"; // Make the image visible
    initialsAvatar.style.display = "none"; // Hide the initials
  } else {
    // Image URL is empty, so hide the image and show the initials
    logoImage.style.display = "none"; // Hide the image

    initialsAvatar.textContent = img_fn + img_ln; // Set the initials
    initialsAvatar.style.display = "flex"; // Make the initials visible
  }
}
updateProfileImage(img_url, img_fn, img_ln);
async function fetchCities(stateName) {
  try {
    const form_data = new FormData();
    form_data.append("state_name", stateName);

    const response = await fetch(`https://api.xircles.in${getCities}`, {
      method: "POST",
      body: form_data,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching cities for state: ${stateName}`, error);
    return null;
  }
}

console.log("theme-four.js executing........");
const filledHeartSVG = `
<svg  width="20" height="20" fill="red" class="xircls_svg4" viewBox="0 0 24 24" 
    stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
        2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
        4.5 2.09C13.09 3.81 14.76 3 16.5 3 
        19.58 3 22 5.42 22 8.5c0 3.78-3.4 
        6.86-8.55 11.54L12 21.35z"/>
    </svg>
`;

const emptyHeartSVG = `
<svg class="xircls_svg" width="20" height="20" fill="none" stroke="red"  viewBox="0 0 24 24" 
    stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
        2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
        4.5 2.09C13.09 3.81 14.76 3 16.5 3 
        19.58 3 22 5.42 22 8.5c0 3.78-3.4 
        6.86-8.55 11.54L12 21.35z"/>
    </svg>
`;

const shieldIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round"  width="25" height="25" 
       style="margin: 0.5rem; color: var(--axentra-card-text-color); flex-shrink: 0;">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
`;
const Cancelsvg = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="xircls_svg2" width="16" height="16" viewBox="0 0 512 512" version="1.1">
       <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="work-case" fill="#000000" transform="translate(91.520000, 91.520000)">
            <polygon id="Close" points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48">
</polygon>
        </g>
    </g>
</svg>
`
let WishlistItemsCount = 0
let globalLoyaltyPoints = null;
let LoyaltyTierName = "";
let allLoyaltyPointsHistory = [];
let allMembershipPlans = [];
async function fetchAllLoyaltyPointsHistory() {
    const formData = new FormData();
    formData.append("app", "oh_my_customer");
    formData.append("shop", Shopify.shop);
    formData.append("email", profile_email);
    formData.append("action", "all");

    const url = `https://loyalty.axentraos.co.in/api/v1/ledger/get_transactions/`;

    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        const history_data = data.transactions;
        allLoyaltyPointsHistory = history_data.map((entry) => ({
            ...entry,
            created_at: formatDate(entry.created_at), // format the date here
        }));
        console.log("Fetched loyalty points history:", allLoyaltyPointsHistory);
    } catch (error) {
        console.error("Failed to fetch loyalty points history:", error);
    }  // } finally {
    //     renderLoyaltyProgram()
    // }
}
async function fetchMembershipPlans() {
    const formData = new FormData();
    formData.append("app", "oh_my_customer");
    formData.append("shop", Shopify.shop);
    formData.append("email", profile_email);
    formData.append("action", "all");

    const url = `https://omc.axentraos.co.in/billing/get_all_plans/`;

    try {
        const response = await fetch(url, {
            method: "GET",
            // body: formData,
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        const history_data = data;
        allMembershipPlans = data.plans;
        console.log("Fetched membership:", allMembershipPlans);
    } catch (error) {
        console.error("Failed to fetch loyalty points history:", error);
    }  // } finally {
    //     renderLoyaltyProgram()
    // }
}


function renderMenu() {
  const menuOptions = [
    {
        label: "Dashboard",
        mobileLabel: "Dashboard",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12l9-9 9 9"/><path d="M4 10v10h6v-6h4v6h6V10"/></svg>`,
        heading: "My Account Dashboard",
        id: "dashboard"
    },
    {
        label: "My Orders",
        mobileLabel: "Orders",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg"  width="20" height="20" fill="none"  viewBox="0 0 24 24"  stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12V6a2 2 0 00-2-2h-2l-2-2h-4l-2 2H6a2 2 0 00-2 2v6m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4" /></svg>`,
        heading: "Order History",
        id: "myOrders"
    },
    {
        label: "My Profile",
        mobileLabel: "Profile",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>`,
        heading: "Profile",
        id: "myProfile"
    },
    {
        label: "My Wishlist",
        mobileLabel: "Wishlist",
        icon: `<svg  width="20" height="20" class="xircls_svg" fill="red" stroke-width="2"  viewBox="0 0 24 24" 
    stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
        2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
        4.5 2.09C13.09 3.81 14.76 3 16.5 3 
        19.58 3 22 5.42 22 8.5c0 3.78-3.4 
        6.86-8.55 11.54L12 21.35z"/>
    </svg>`,
        
        heading: "Saved Items",
        id: "myWishlist"
    },
    {
        label: "Recently Viewed",
        mobileLabel: "Recent",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
        heading: "Your Browsing History",
        id: "recentlyViewed"
    },
    {
        label: "My Support Tickets",
        mobileLabel: "Support Tickets",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        heading: "My Support Tickets",
        id: "supportTicket"
    },
   
    {
      label: LoyltyProgramName || "Loyalty",
      mobileLabel : "Loyalty",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke-width="2" class="xircls_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" /></svg>`,
      heading: LoyltyProgramName || "Loyalty",
      id:"loyalty"
    },
     {
        label: "My Subscription",
        mobileLabel: "Subscription",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
        heading: "My Subscriptions",
        id: "subscription"
    },
     {
      label: "Offers",
      mobileLabel : "Offers",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_offer_svg" width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M15,13h-3.5C9.6,13,8,14.6,8,16.5v0C8,17.9,6.9,19,5.5,19h0C4.1,19,3,17.9,3,16.5V16c0-3.3,2.7-6,6-6h0h2"/>
  <path d="M11,8v7.9l8.7,8.7c0.8,0.8,2,0.8,2.8,0l5-5c0.8-0.8,0.8-2,0-2.8L18.9,8L11,8z"/>
</svg>
`,
      heading: "Manage Your Offers",
      id:"offers"
    },
    {
        label: "Change Password",
        mobileLabel: "Password",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`,
        heading: "Change Password",
        id: "changePassword"
    },
    {
        label: "Logout",
        mobileLabel: "Logout",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
        heading: "Logout",
        id: "logout"
    }
];


    console.log("menu updated!!!");
    const profile_feature = document.getElementById("logoContainer")
    if (myProfile.includes("Profile_Picture")) {
      console.log(myProfile.includes("Profile_Picture"), 'imgggggggggprof');
      
        profile_feature.setAttribute("style", "display: block !important;");
    } else{
      profile_feature.setAttribute("style", "display: none !important;");
  console.log(myProfile.includes("Profile_Picture"), 'imgggggggggprof222');
    }

    const menuElement = document.getElementById("xircls-menu");
    menuElement.innerHTML = ""; // Clear previous menu items
    console.log(menuOptions, menuElement,myProfile, "cxvcvcxvcxvc")
    const menuOptions2 = menuOptions
        .map((option, index) => ({ ...option, originalIndex: index })) // Store original index
        .filter(option => {
            const isEnabled = elementsObj[option.id].enabled === true;
            console.log(`Option ID: ${option.id}, Enabled: ${isEnabled}`);
            return isEnabled;
        });


    const ulElement = document.createElement("ul");
    ulElement.className = "menu-list";
    console.log(menuOptions2, "opdsjuopfdsjgjsfd")
    menuOptions2.forEach((item, index) => {
        if (item.label === "Logout") {
            const hrElement = document.createElement("hr");
            hrElement.style.border = "1px solid #e5e7eb";
            hrElement.style.width = "85%";
            hrElement.style.margin = "20px 0px";

            ulElement.appendChild(hrElement);
        }

        const liElement = document.createElement("li");
        liElement.dataset.index = item.originalIndex;
        liElement.className = "xircls-menu-item";

        liElement.innerHTML = `
                    <span class="xircls-menu-icon">${item.icon}</span>
                    <span class="xircls-menu-label">${item.label}</span>
                    `;

        liElement.onclick = () => {
            console.log(`You clicked on: ${item.heading}`);
            renderContent(parseInt(liElement.dataset.index));

            const allItems = document.querySelectorAll(".xircls-menu-item");
            allItems.forEach((item) => item.classList.remove("active"));

            liElement.classList.add("active"); // Add the active class to the clicked item
        };

        ulElement.appendChild(liElement);

    });

    menuElement.appendChild(ulElement);
    //menuElement.appendChild(ulElement);

   
// Automatically open a specific tab based on URL parameter
const urlParams = new URLSearchParams(window.location.search);
const section = urlParams.get("section");

setTimeout(() => {
  const items = ulElement.querySelectorAll("li.xircls-menu-item");

if (section === "wishlist") {
  console.log("Opening wishlist section directly...");
    const wishlistItem = Array.from(items).find((item) =>
      item.textContent.trim().includes("Wishlist")
    );

    if (wishlistItem) {
      wishlistItem.classList.add("active");
      renderContent(parseInt(wishlistItem.dataset.index));
}
} else {
    const firstItem = items[0];
    if (firstItem) {
        firstItem.classList.add("active");
        renderContent(parseInt(firstItem.dataset.index));
    }
}
}, 100);


}
function renderMobileMenu() {
  const menuOptions = [
    {
        label: "Dashboard",
        mobileLabel: "Dashboard",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12l9-9 9 9"/><path d="M4 10v10h6v-6h4v6h6V10"/></svg>`,
        heading: "My Account Dashboard",
        id: "dashboard"
    },
    {
        label: "My Orders",
        mobileLabel: "Orders",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg"  width="20" height="20" fill="none"  viewBox="0 0 24 24"  stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12V6a2 2 0 00-2-2h-2l-2-2h-4l-2 2H6a2 2 0 00-2 2v6m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4" /></svg>`,
        heading: "Order History",
        id: "myOrders"
    },
    {
        label: "My Profile",
        mobileLabel: "Profile",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>`,
        heading: "Profile",
        id: "myProfile"
    },
    {
        label: "My Wishlist",
        mobileLabel: "Wishlist",
        icon: `<svg  width="20" height="20" class="xircls_svg" fill="red" stroke-width="2" viewBox="0 0 24 24" 
    stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
        2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
        4.5 2.09C13.09 3.81 14.76 3 16.5 3 
        19.58 3 22 5.42 22 8.5c0 3.78-3.4 
        6.86-8.55 11.54L12 21.35z"/>
    </svg>`,
        heading: "Saved Items",
        id: "myWishlist"
    },
    {
        label: "Recently Viewed",
        mobileLabel: "Recent",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
        heading: "Your Browsing History",
        id: "recentlyViewed"
    },
   
    {
      label: LoyltyProgramName || "Loyalty",
      mobileLabel : "Loyalty",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke-width="2" class="xircls_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" /></svg>`,
      heading: LoyltyProgramName || "Loyalty",
      id:"loyalty"
    },
     {
        label: "My Subscription",
        mobileLabel: "Subscription",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
        heading: "My Subscriptions",
        id: "subscription"
    },
     {
      label: "Offers",
      mobileLabel : "Offers",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_offer_svg" width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M15,13h-3.5C9.6,13,8,14.6,8,16.5v0C8,17.9,6.9,19,5.5,19h0C4.1,19,3,17.9,3,16.5V16c0-3.3,2.7-6,6-6h0h2"/>
  <path d="M11,8v7.9l8.7,8.7c0.8,0.8,2,0.8,2.8,0l5-5c0.8-0.8,0.8-2,0-2.8L18.9,8L11,8z"/>
</svg>
`,
      heading: "Manage Your Offers",
      id:"offers"
    },
    {
        label: "Change Password",
        mobileLabel: "Password",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`,
        heading: "Change Password",
        id: "changePassword"
    },
    {
        label: "Logout",
        mobileLabel: "Logout",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
        heading: "Logout",
        id: "logout"
    }
];
    console.log("menu updated!11!!");
    const menuElementMobile = document.getElementById("xircls-mobile-menu");
    menuElementMobile.innerHTML = ""; // Clear previous menu items
    console.log(menuElementMobile, menuOptions, "menuElements1122")
    const menuOptions2 = menuOptions
        .map((option, index) => ({ ...option, originalIndex: index })) // Store original index
        .filter(option => elementsObj[option.id].enabled === true); // Filter based on elementsObj



    if (menuElementMobile) {
        // Filter or select specific items for mobile if needed.
        // For now, using the first 5 items as per the image, or all items if fewer than 5.

        menuOptions2.forEach((item, index) => {
            const divElement = document.createElement("div");
            divElement.dataset.index = item.originalIndex;
            divElement.className = "xircls-menu-item";
            // Ensure icons are SVGs or use appropriate tags if they are font icons
            divElement.innerHTML = `
                    <span class="xircls-mobile-menu-icon">${item.icon}</span>
                    <span class="xircls-mobile-menu-label">${item.mobileLabel}</span>
                `;
            divElement.onclick = () => {
                console.log(`Mobile Menu: Clicked on ${item.heading}, index ${index}`);
                if (typeof renderContent === 'function') {
                    renderContent(parseInt(divElement.dataset.index)); // Ensure this maps to the correct content
                }
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth' // Optional: adds smooth scroll effect
              });
          
                setActiveMenuItem(index);
            };
            menuElementMobile.appendChild(divElement);
        });
    }
    console.log(menuOptions2, "menuOptions2");

    // Sort by originalIndex to ensure correct order
    const sortedMenu = [...menuOptions2].sort((a, b) => a.originalIndex - b.originalIndex);
    console.log(sortedMenu, "sortedmenue")
    // Get the first item based on originalIndex
    const firstItem = sortedMenu[0];
    console.log(firstItem, "firstItem")
    if (typeof renderContent === 'function') {
        renderContent(firstItem.originalIndex); // Pass the first item
    }

    setActiveMenuItem(0); // Also pass it here

}

const quickRedemptionData = [
    {
        title: "50% Discount",
        points: "100 points",
        redeemText: "Redeem Now",
    },
    {
        title: "100% Discount",
        points: "180 points",
        redeemText: "Redeem Now",
    },
    // {
    //     title: "Free Standard Shipping",
    //     points: "80 points",
    //     redeemText: "Redeem Now",
    // },
    // {
    //     title: "Free Expedited Shipping",
    //     points: "150 points",
    //     redeemText: "Redeem Now",
    // },
];
const pointsHistoryData = [
    {
        date: "Apr 10, 2025",
        activity: "Purchase: Order #45678",
        points: "+150",
        type: "earn",
    },
    {
        date: "Apr 3, 2025",
        activity: "Account Anniversary",
        points: "+200",
        type: "earn",
    },
    {
        date: "Mar 25, 2025",
        activity: "Redeemed for $10 Discount",
        points: "-100",
        type: "redeem",
    },
    {
        date: "Mar 15, 2025",
        activity: "Product Review",
        points: "+50",
        type: "earn",
    },
    {
        date: "Mar 10, 2025",
        activity: "Purchase: Order #45321",
        points: "+120",
        type: "earn",
    },
    {
        date: "Feb 28, 2025",
        activity: "Friend Referral",
        points: "+200",
        type: "earn",
    },
    {
        date: "Feb 15, 2025",
        activity: "Redeemed for Free Shipping",
        points: "-80",
        type: "redeem",
    },
    {
        date: "Feb 5, 2025",
        activity: "Purchase: Order #44832",
        points: "+90",
        type: "earn",
    },
];
const redeemOptionsData = [
    {
        title: "50% Discount",
        points: "100 points",
        redeemText: "Redeem Now",
    },
    {
        title: "100% Discount",
        points: "180 points",
        redeemText: "Redeem Now",
    },
];
const membershipTiersData = [
    {
        title: "Silver",
        pointsRequired: "500",
        benefits: [
            "10% discount on selected items",
            "Early access to sales",
            "Free shipping on orders over $50",
            "Birthday gift",
        ],
        isCurrent: true, // Indicates if this is the current tier
    },
    {
        title: "Gold",
        pointsRequired: "1,000",
        benefits: [
            "15% discount on selected items",
            "Priority customer service",
            "Free shipping on all orders",
            "Extended return period (45 days)",
            "Exclusive member-only promotions",
            "Birthday gift",
        ],
        isCurrent: false,
    },
    {
        title: "Platinum",
        pointsRequired: "2,500",
        benefits: [
            "20% discount on all items",
            "Dedicated customer service agent",
            "Free expedited shipping",
            "Extended return period (60 days)",
            "VIP event invitations",
            "Early access to new collections",
            "Anniversary gift",
            "Birthday gift",
        ],
        isCurrent: false,
    },
];
function toggleContainers() {
    const container1 = document.querySelector(".container-1");
    const container2 = document.querySelector(".container-2");

    console.log(`Condition checked! Mobile view initialized.`);

    const allItems = document.querySelectorAll(".xircls-menu-item");
    console.log(`condition checked!!!!!`, allItems);

    allItems.forEach((item) => {
        item.addEventListener("click", function () {
            // Remove active class from all items
            allItems.forEach((menuItem) => menuItem.classList.remove("active"));

            // Add active class to the clicked item
            item.classList.add("active");

            // Hide container-1 and show container-2
            container1.style.display = "none";
            container2.style.display = "block";

            console.log(`Active item set and containers toggled.`);
        });
    });
}
function toggleMenu() {
    const container1 = document.getElementById("xircls-menu-container");
    container1.classList.toggle("show"); // Toggle a class
}
async function viewOrderDetails(orderData) {
  console.log("=====>viewOrderDetails called");
  const order = JSON.parse(decodeURIComponent(orderData));
  console.log("viewOrderDetails called with order:", order);

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  document.body.appendChild(overlay);

  // pass overlay reference into modal creation
  const modal = await createOrderDetailsModal(order, overlay);

  document.body.appendChild(modal);

  // const overlay = document.createElement('div');
  // overlay.className = 'modal-overlay';
  // document.body.appendChild(overlay);

  // Make the modal and overlay visible
  modal.style.display = "block";
  overlay.style.display = "block";

  // Prevent background scrolling when modal is open
  document.body.style.overflow = "hidden";

  // Add animation class to slide in from top
  setTimeout(() => {
      modal.classList.add("slide-in-top");
  }, 50);

  // Close modal when overlay is clicked
  overlay.addEventListener("click", () => closeModal(modal, overlay));
}


function escapeHtml(str) {
  if (str === undefined || str === null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* ---------- Close overlay & modal ---------- */
function closeSubModal() {
  const overlay = document.getElementById('exchange-modal-overlay');
  if (overlay) {
    overlay.remove();
  }
  document.body.style.overflow = 'auto';
}

/* ---------- Entry: open modal with orderData (URI-decoded JSON string passed previously) ---------- */
function subscribeOrder(orderData) {
  let orderDataObj;
  try {
    orderDataObj = JSON.parse(decodeURIComponent(orderData));
  } catch (e) {
    console.error("Failed to parse order data:", e);
    alert("An error occurred while trying to open the subscription modal.");
    return;
  }

  // create overlay
  const overlay = document.createElement('div');
  overlay.id = 'exchange-modal-overlay';
  overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); display:flex;justify-content:center;align-items:center;z-index:1000;padding:20px;';
  overlay.addEventListener('click', function(e) {
    // if clicked directly on overlay (outside modal) close
    if (e.target === overlay) closeSubModal();
  });

  // create modal element (not appended to body; we'll append into overlay)
  const modalRoot = createSubscriptionModal(orderDataObj);

  // append and show
  overlay.appendChild(modalRoot);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
}

/* ---------- Build modal DOM and wire events ---------- */
function createSubscriptionModal(orderData) {


  // prepare addresses from the provided payload (key names may vary)
  const addr = orderData.shippingAddress || orderData.shipping_address || orderData.shipping_address || orderData.shippingAddress || orderData.shippingAddress || {};
  const bill = orderData.billingAddress || orderData.billing_address || orderData.billingAddress || orderData.billingAddress || addr || {};

  const addressDefaults = {
    shipping: {
      first_name: addr.first_name || addr.firstName || addr.name?.split?.(' ')?.[0] || "",
      last_name: addr.last_name || addr.lastName || addr.name?.split?.(' ')?.slice(1).join(' ') || "",
      address1: addr.address1 || addr.address_1 || "",
      address2: addr.address2 || addr.address_2 || "",
      city: addr.city || "",
      province: addr.province || addr.state || "",
      zip: addr.zip || addr.postal_code || "",
      country: addr.country || "",
      phone: addr.phone || addr.phone_number || ""
    },
    billing: {
      first_name: bill.first_name || bill.firstName || "",
      last_name: bill.last_name || bill.lastName || "",
      address1: bill.address1 || bill.address_1 || "",
      address2: bill.address2 || bill.address_2 || "",
      city: bill.city || "",
      province: bill.province || bill.state || "",
      zip: bill.zip || bill.postal_code || "",
      country: bill.country || "",
      phone: bill.phone || bill.phone_number || ""
    }
  };

  // Build items HTML (same as before)
  const itemsHTML = (orderData.items || []).map(item => {
    const variantId = item.variantId || item.variant_id || item.id || item.product_id || "";
    return `
     <div class="sub-item-row" data-id="${escapeHtml(variantId)}"
  style="display:flex;align-items:center;gap:12px;padding:12px;border:1px solid #e5e7eb;border-radius:8px;color:#111827;">

  <!-- TOP ROW -->
  <div class="sub-item-top" style="display:flex;align-items:center;gap:12px;flex:1;">
    <input type="checkbox" class="sub-item-checkbox" data-id="${escapeHtml(variantId)}"
      style="width:16px;height:16px;">

    <img src="${escapeHtml(item.image || '')}"
      style="width:48px;height:48px;border-radius:6px;object-fit:cover;">

    <div style="flex:1;">
      <div style="font-weight:500;">${escapeHtml(item.title || item.name || '')}</div>
      <div style="font-size:14px;color:#6b7280;">Qty: ${escapeHtml(item.quantity || 1)}</div>
    </div>
  </div>

  <!-- BOTTOM ROW -->
  <div class="sub-item-bottom" style="display:flex;align-items:center;gap:6px;">
    <button class="qty-btn" data-vid="${escapeHtml(variantId)}" data-dir="-1"
      style="width:28px;height:28px;border:1px solid #d1d5db;border-radius:6px;background:white;">-</button>

    <input type="number" class="quantity-input" id="qty-${escapeHtml(variantId)}"
      value="${escapeHtml(item.quantity || 1)}" min="1"
      style="width:50px;text-align:center;height:34px;border:1px solid #d1d5db;border-radius:6px;">

    <button class="qty-btn" data-vid="${escapeHtml(variantId)}" data-dir="1"
      style="width:28px;height:28px;border:1px solid #d1d5db;border-radius:6px;background:white;">+</button>
  </div>

</div>

    `;
  }).join("");

  // Create modal root element
  const root = document.createElement('div');
  root.id = "subscription-modal-root";
  root.setAttribute("role", "dialog");
  root.style.position = "relative";
  root.style.zIndex = 1001;
  root.style.width = "100%";
  root.style.fontSize = "12.6px";
  root.style.maxWidth = "610px";
  root.style.background = "var(--bg,#ffffff)";
  root.style.borderRadius = "12px";
  root.style.boxShadow = "0 8px 30px rgba(2,6,23,0.2)";
  root.style.maxHeight = "90vh";
  root.style.overflowY = "auto";
  root.style.color = "#111827";
  root.style.padding = "0";
  root.style.fontFamily = "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial";

  root.innerHTML = `
    <div style="padding:16px;border-bottom:1px solid #e6e6e6;display:flex;justify-content:space-between;align-items:center;">
      <div style="display:flex;gap:12px;align-items:center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package w-5 h-5 text-teal-600"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path><path d="m7.5 4.27 9 5.15"></path></svg>
        <div>
          <div style="font-size:14px;font-weight:600;">Subscribe to Order ${escapeHtml(orderData.orderNumber || orderData.name || '')}</div>
        </div>
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <button id="subscription-modal-close" aria-label="Close" style="background:transparent;border:none;cursor:pointer;opacity:0.75;padding:6px;border-radius:6px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
        </button>
      </div>
    </div>

    <div id="subscription-modal-body" style="padding:16px;display:flex;flex-direction:column;gap:18px;font-size:12px;">
      <div style="display:flex;flex-direction:column;gap:8px;">
        <label style="font-weight:600;">Plan Name</label>
        <input id="input-plan-name" type="text" style="width:100%;height:44px;border-radius:8px;border:1px solid #d1d5db;padding:8px;background:#f3f4f6;" placeholder="e.g. Monthly Snacks Box" value="${escapeHtml(orderData.plan_name || '')}">
      </div>

      <div style="display:flex;flex-direction:column;gap:8px;">
        <label style="font-weight:600;">Description</label>
        <input id="input-description" type="text" style="width:100%;height:44px;border-radius:8px;border:1px solid #d1d5db;padding:8px;" placeholder="Optional description" value="${escapeHtml(orderData.description || '')}">
      </div>

      <input type="hidden" id="hidden-order-id" value="${escapeHtml(orderData.orderId || orderData.id || '')}">

      <div>
        <label style="font-weight:600;">Subscribe to</label>
        <div style="margin-top:10px;display:flex;flex-direction:column;gap:10px;">
          <div class="sub-box" data-type="entire" style="padding:12px;border:1px solid #d1d5db;border-radius:10px;display:flex;align-items:center;gap:12px;cursor:pointer;">
            <input type="radio" name="sub-type" id="sub-entire" style="width:16px;height:16px;">
            <div>
              <div style="font-weight:600;">Entire Order</div>
              <div style="font-size:13px;color:#6b7280;">Subscribe to all items in this order</div>
            </div>
          </div>

          <div class="sub-box" data-type="specific" style="padding:12px;border:1px solid #d1d5db;border-radius:10px;display:flex;align-items:center;gap:12px;cursor:pointer;">
            <input type="radio" name="sub-type" id="sub-specific" checked style="width:16px;height:16px;">
            <div>
              <div style="font-weight:600;">Specific Items Only</div>
              <div style="font-size:13px;color:#6b7280;">Choose which items to include in subscription</div>
            </div>
          </div>
        </div>
      </div>

      <div id="specific-items-section" style="display:flex;flex-direction:column;gap:12px;">
        <label style="font-weight:600;">Select Items</label>
        ${itemsHTML || '<div style="color:#6b7280">No items found for this order.</div>'}
      </div>

      <div style="display:flex;gap:16px;">
        <div style="flex:1;">
          <label style="font-weight:600;">Deliver every</label>
          <input id="input-delivery-number" type="number" value="1" style="width:100%;height:44px;border-radius:8px;border:1px solid #d1d5db;padding:8px;">
        </div>

        <div style="flex:1;">
          <label style="font-weight:600;">Time Unit</label>
          <select id="input-delivery-unit" style="width:100%;height:44px;border-radius:8px;border:1px solid #d1d5db;padding:0 10px;color:#111827;">
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month" selected>Month</option>
            <option value="year" selected>Year</option>
          </select>
        </div>
      </div>

      <div>
        <label style="font-weight:600;">Max Billing Cycle</label>
        <input id="input-max-billing-cycle" type="number" style="width:100%;height:44px;border-radius:8px;border:1px solid #d1d5db;padding:8px;">
      </div>

      <div>
        <label style="font-weight:600;">Billing Type</label>
        <select id="billing-type" style="height:44px;width:100%;border-radius:8px;border:1px solid #d1d5db;padding:0 10px;color:#111827;">
          <option value="Prepaid">Prepaid</option>
          <option value="Postpaid">Postpaid</option>
        </select>
      </div>
    </div>

    <div style="padding:16px;border-top:1px solid #e5e7eb;display:flex;justify-content:flex-end;gap:12px;">
      <button id="subscription-modal-cancel" style="padding:0 16px;height:40px;border:1px solid #d1d5db;border-radius:8px;background:#fff;cursor:pointer;">
        Cancel
      </button>
      <button id="subscription-modal-create" style="padding:0 16px;height:40px;border-radius:8px;background:#0d9488;color:white;cursor:pointer;">
        Create Subscription
      </button>
    </div>
  `;

  /***** append wiring AFTER element exists in DOM (we will attach root into overlay externally) *****/
  // Close buttons
  root.querySelector("#subscription-modal-close").addEventListener("click", closeSubModal);
  root.querySelector("#subscription-modal-cancel").addEventListener("click", closeSubModal);

  // sub-box clicks toggle the radios and call handler
  root.querySelectorAll(".sub-box").forEach(box => {
    box.addEventListener("click", () => {
      const type = box.getAttribute("data-type");
      handleSubscriptionTypeChange(type, root);
    });
  });
const style = document.createElement("style");
style.innerHTML = `
  #subscription-modal-root ::placeholder {
    font-size: 10px;          /* reduce by ~10% */
    color: #9ca3af;          /* optional: slightly softer */
  }

  /* Firefox */
  #subscription-modal-root :-moz-placeholder {
    font-size: 10px;
  }

  #subscription-modal-root ::-moz-placeholder {
    font-size:10px;
  }
  #subscription-modal-root {
    scrollbar-width: thin;            /* Firefox */
    scrollbar-color: #9ca3af transparent;
  }

  #subscription-modal-root::-webkit-scrollbar {
    width: 2px;                       /* Chrome, Edge, Safari */
  }

  #subscription-modal-root::-webkit-scrollbar-track {
    background: transparent;
  }

  #subscription-modal-root::-webkit-scrollbar-thumb {
    background-color: #9ca3af;
    border-radius: 4px;
  }
`;
document.head.appendChild(style);

  // radios
  const ent = root.querySelector("#sub-entire");
  const spec = root.querySelector("#sub-specific");
  if (ent) ent.addEventListener("change", () => handleSubscriptionTypeChange("entire", root));
  if (spec) spec.addEventListener("change", () => handleSubscriptionTypeChange("specific", root));

  // qty +/- wiring
  root.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const vid = btn.getAttribute("data-vid");
      const dir = Number(btn.getAttribute("data-dir") || 0);
      changeQty(vid, dir);
    });
  });

  // Create Subscription (Step 1) -> we will POST and then show Step 2 (addresses)
  root.querySelector("#subscription-modal-create").addEventListener("click", async function onCreateClick(e) {
    const btn = e.currentTarget;
    btn.disabled = true;
    btn.style.opacity = "0.7";

    // Build productData
    let productData = {};
    const entireSelected = !!root.querySelector("#sub-entire")?.checked;

    if (entireSelected) {
      root.querySelectorAll(".sub-item-row").forEach(row => {
        const variantId = row.getAttribute("data-id");
        const qtyEl = row.querySelector(".quantity-input");
        const qty = Number(qtyEl ? qtyEl.value : 1);
        productData[variantId] = qty;
      });
    } else {
      root.querySelectorAll(".sub-item-checkbox:checked").forEach(cb => {
        const row = cb.closest(".sub-item-row");
        const variantId = cb.getAttribute("data-id");
        const qty = Number(row.querySelector(".quantity-input").value);
        productData[variantId] = qty;
      });
    }
 const customer = orderData.customerDetails || {};
    let phone_code = "";
    let phone_number = customer.phone || "";

    if (phone_number.startsWith("+")) {
      phone_code = phone_number.slice(0, 3);
      phone_number = phone_number.slice(3);
    }

const productDescription = [];

(orderData.items || []).forEach(item => {
  const variantId =
    item.variantId || item.variant_id || item.id || "";

  if (!variantId) return;

  const qty =
    productData[variantId] ?? Number(item.quantity) ?? 1;

  productDescription.push({
    variant_id: variantId,
    name: item.title || item.name || "",
    image: item.image,
    quantity: qty
  });
});

    // build payload
    const payload = {
      shop_url: Shopify.shop,
      customer_id: customerId,
      platform: "Razorpay",
      email: customer.email || "",
      customer_name: `${customer.firstName || ""} ${customer.lastName || ""}`.trim(),
      phone_code: phone_code,
      phone_number: phone_number,
      order_id: root.querySelector("#hidden-order-id").value,
      plan_name: root.querySelector("#input-plan-name").value.trim(),
      description: root.querySelector("#input-description").value.trim(),
      billing_type: root.querySelector("#billing-type").value,
      created_by: "customer",
      delivery_freq_conf : [
        {
            delivery_frequency: Number(root.querySelector("#input-delivery-number").value),
            delivery_unit: root.querySelector("#input-delivery-unit").value,
            discount_type: "none",
            discount_value: 0
        }
    ],
      max_billing_cycle: Number(root.querySelector("#input-max-billing-cycle").value) || null,
      product_variant_ids: productData,
      product_description: productDescription
    };

    console.log("📦 Final Subscription JSON to Send (Step 1):", payload);

    // --- your existing API POST (unchanged endpoint) ---
    try {
      const response = await fetch(
        "https://api.subscriptions.axentraos.co.in/api/v1/plans/customer_subscription/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }
      );

      const result = await response.json();
      console.log("✅ API Success Response:", result);

      if (response.ok) {
        const planId = result.id || result.plan_id || result.data?.id || result.data?.plan_id || result.pk || null;
      let deliveryConfRaw = result.delivery_freq_conf || result.data?.delivery_freq_conf;
let deliveryConf = Array.isArray(deliveryConfRaw)
  ? deliveryConfRaw[0]
  : deliveryConfRaw;

  showStep2(planId, payload, addressDefaults, orderData, root, customerId, deliveryConf);
      } else {
        alert("API Error: " + (result.message || "Something went wrong"));
      }
    } catch (error) {
      console.error("❌ Network Error:", error);
      alert("Network error! Check console.");
    } finally {
      btn.disabled = false;
      btn.style.opacity = "1";
    }
  });

  return root;
}

/* ---------- toggle for Entire vs Specific items. Accept root so we scope correctly ---------- */
function handleSubscriptionTypeChange(type, root) {
  const entRadio = root.querySelector("#sub-entire");
  const specRadio = root.querySelector("#sub-specific");
  if (entRadio) entRadio.checked = (type === "entire");
  if (specRadio) specRadio.checked = (type !== "entire");

  if (type === "entire") {
    selectAllItems(root);
    toggleItemSectionVisibility(false, root);
    disableQuantityInputs(true, root);
  } else {
    clearAllItems(root);
    toggleItemSectionVisibility(true, root);
    disableQuantityInputs(false, root);
  }
}

/* ---------- scoped helpers that accept root (if root omitted, use document) ---------- */
function selectAllItems(root) {
  const scope = root || document;
  scope.querySelectorAll(".sub-item-checkbox").forEach(cb => (cb.checked = true));
}
function clearAllItems(root) {
  const scope = root || document;
  scope.querySelectorAll(".sub-item-checkbox").forEach(cb => (cb.checked = false));
}
function toggleItemSectionVisibility(show, root) {
  const scope = root || document;
  const el = scope.querySelector("#specific-items-section");
  if (!el) return;
  el.style.display = show ? "flex" : "none";
}
function disableQuantityInputs(disable, root) {
  const scope = root || document;
  scope.querySelectorAll(".quantity-input").forEach(inp => inp.disabled = disable);
  scope.querySelectorAll(".qty-btn").forEach(btn => btn.disabled = disable);
}

/* ---------- qty change helper (global) ---------- */
function changeQty(id, change) {
  const input = document.getElementById("qty-" + id);
  if (!input) return;
  let value = Number(input.value) + change;
  if (value < 1) value = 1;
  input.value = value;
}

/* ---------- Step 2: show address edit UI inside the same modal root ---------- */
function showStep2(planId, payload, addressDefaults, originalOrderData, root, customerId, deliveryConf) {

  const body = root.querySelector("#subscription-modal-body");
  if (!body) return;

  const planName = payload.plan_name || "";

  /* ---------------------------------------------------
        STEP 2 UI (PLAN + ADDRESSES)
  --------------------------------------------------- */
  body.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:16px; padding-bottom:20px;">

      <!-- Header -->
      <div style="display:flex;gap:12px;align-items:center;">
        <div>
          <div style="font-size:15px;font-weight:600;">Plan created successfully</div>
          <div style="font-size:13px;color:#6b7280;">Plan ID: ${escapeHtml(planId)}</div>
          <div style="font-size:13px;color:#6b7280;">Plan Name: ${escapeHtml(planName)}</div>
        </div>
      </div>

      <!-- SHIPPING ADDRESS -->
      <div style="margin-top:10px; display:flex; justify-content:space-between; align-items:center;">
        <label style="font-weight:600; font-size:16px;">Delivery Address</label>
        <button id="edit-shipping"
          style="padding:6px 12px;border:1px solid #d1d5db;border-radius:8px;background:#fff;cursor:pointer;">
          Edit
        </button>
      </div>

      <div id="shipping-display" style="padding:14px;border:1px solid #e5e7eb;border-radius:10px;background:#f9fafb;">
        <div style="font-weight:600;">${escapeHtml(addressDefaults.shipping.first_name)} ${escapeHtml(addressDefaults.shipping.last_name)}</div>
        <div>${escapeHtml(addressDefaults.shipping.address1)}</div>
        <div>${escapeHtml(addressDefaults.shipping.address2)}</div>
        <div>${escapeHtml(addressDefaults.shipping.city)}, ${escapeHtml(addressDefaults.shipping.province)} ${escapeHtml(addressDefaults.shipping.zip)}</div>
        <div>${escapeHtml(addressDefaults.shipping.country)}</div>
        <div style="color:#6b7280;margin-top:6px;">${escapeHtml(addressDefaults.shipping.phone)}</div>
      </div>

      <div id="shipping-edit" style="display:none;grid-template-columns:1fr 1fr;gap:12px;" class="grid">
        <input id="addr-first-name" class="addr-input" placeholder="First Name" value="${escapeHtml(addressDefaults.shipping.first_name)}">
        <input id="addr-last-name" class="addr-input" placeholder="Last Name" value="${escapeHtml(addressDefaults.shipping.last_name)}">
        <input id="addr-address1" class="addr-input" placeholder="Address Line 1" style="grid-column:span 2" value="${escapeHtml(addressDefaults.shipping.address1)}">
        <input id="addr-address2" class="addr-input" placeholder="Address Line 2" style="grid-column:span 2" value="${escapeHtml(addressDefaults.shipping.address2)}">
        <input id="addr-city" class="addr-input" placeholder="City" value="${escapeHtml(addressDefaults.shipping.city)}">
        <input id="addr-province" class="addr-input" placeholder="State" value="${escapeHtml(addressDefaults.shipping.province)}">
        <input id="addr-zip" class="addr-input" placeholder="Pincode" value="${escapeHtml(addressDefaults.shipping.zip)}">
        <input id="addr-country" class="addr-input" placeholder="Country" value="${escapeHtml(addressDefaults.shipping.country)}">
        <input id="addr-phone" class="addr-input" placeholder="Phone" style="grid-column:span 2" value="${escapeHtml(addressDefaults.shipping.phone)}">
      </div>

      <!-- BILLING ADDRESS -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:25px;">
        <label style="font-weight:600; font-size:16px;">Billing Address</label>
        <button id="edit-billing"
          style="padding:6px 12px;border:1px solid #d1d5db;border-radius:8px;background:#fff;cursor:pointer;">
          Edit
        </button>
      </div>

      <div id="billing-display" style="padding:14px;border:1px solid #e5e7eb;border-radius:10px;background:#f9fafb;">
        <div style="font-weight:600;">${escapeHtml(addressDefaults.billing.first_name)} ${escapeHtml(addressDefaults.billing.last_name)}</div>
        <div>${escapeHtml(addressDefaults.billing.address1)}</div>
        <div>${escapeHtml(addressDefaults.billing.address2)}</div>
        <div>${escapeHtml(addressDefaults.billing.city)}, ${escapeHtml(addressDefaults.billing.province)} ${escapeHtml(addressDefaults.billing.zip)}</div>
        <div>${escapeHtml(addressDefaults.billing.country)}</div>
        <div style="color:#6b7280;margin-top:6px;">${escapeHtml(addressDefaults.billing.phone)}</div>
      </div>

      <div id="billing-edit" style="display:none;grid-template-columns:1fr 1fr;gap:12px;" class="grid">
        <input id="bill-first-name" class="addr-input" placeholder="First Name" value="${escapeHtml(addressDefaults.billing.first_name)}">
        <input id="bill-last-name" class="addr-input" placeholder="Last Name" value="${escapeHtml(addressDefaults.billing.last_name)}">
        <input id="bill-address1" class="addr-input" placeholder="Address Line 1" style="grid-column:span 2" value="${escapeHtml(addressDefaults.billing.address1)}">
        <input id="bill-address2" class="addr-input" placeholder="Address Line 2" style="grid-column:span 2" value="${escapeHtml(addressDefaults.billing.address2)}">
        <input id="bill-city" class="addr-input" placeholder="City" value="${escapeHtml(addressDefaults.billing.city)}">
        <input id="bill-province" class="addr-input" placeholder="State" value="${escapeHtml(addressDefaults.billing.province)}">
        <input id="bill-zip" class="addr-input" placeholder="Pincode" value="${escapeHtml(addressDefaults.billing.zip)}">
        <input id="bill-country" class="addr-input" placeholder="Country" value="${escapeHtml(addressDefaults.billing.country)}">
        <input id="bill-phone" class="addr-input" placeholder="Phone" style="grid-column:span 2" value="${escapeHtml(addressDefaults.billing.phone)}">
      </div>

    </div>
  `;

  /* ---------------------------------------------------
        STYLE THE INPUTS
  --------------------------------------------------- */
  root.querySelectorAll(".addr-input").forEach(inp => {
    inp.style.height = "42px";
    inp.style.border = "1px solid #d1d5db";
    inp.style.borderRadius = "8px";
    inp.style.padding = "6px 10px";
  });

  /* ---------------------------------------------------
       EDIT BUTTON LOGIC
  --------------------------------------------------- */
  const shippingDisplay = root.querySelector("#shipping-display");
  const shippingEdit = root.querySelector("#shipping-edit");
  const editShippingBtn = root.querySelector("#edit-shipping");

  const billingDisplay = root.querySelector("#billing-display");
  const billingEdit = root.querySelector("#billing-edit");
  const editBillingBtn = root.querySelector("#edit-billing");

  editShippingBtn.addEventListener("click", () => {
    const editing = shippingEdit.style.display === "none";
    shippingDisplay.style.display = editing ? "none" : "block";
    shippingEdit.style.display = editing ? "grid" : "none";
    editShippingBtn.textContent = editing ? "Save" : "Edit";
  });

  editBillingBtn.addEventListener("click", () => {
    const editing = billingEdit.style.display === "none";
    billingDisplay.style.display = editing ? "none" : "block";
    billingEdit.style.display = editing ? "grid" : "none";
    editBillingBtn.textContent = editing ? "Save" : "Edit";
  });

  /* ---------------------------------------------------
      REPLACE FOOTER WITH:
      [ Close ] [ Subscribe Now ]
  --------------------------------------------------- */
  const footer = root.querySelector("div[style*='justify-content:flex-end']");
  footer.innerHTML = `
      <button id="step2-close"
        style="padding:0 16px;height:40px;border:1px solid #d1d5db;border-radius:8px;background:#fff;cursor:pointer;">
        Close
      </button>

      <button id="step2-submit"
        style="padding:0 16px;height:40px;border-radius:8px;background:#0d9488;color:white;cursor:pointer;">
        Subscribe Now
      </button>
  `;

  root.querySelector("#step2-close").onclick = closeSubModal;

  /* ---------------------------------------------------
        FINAL SUBMIT STEP (STEP-3)
  --------------------------------------------------- */
  root.querySelector("#step2-submit").addEventListener("click", async () => {

    const finalShipping = {
      first_name: root.querySelector("#addr-first-name").value,
      last_name: root.querySelector("#addr-last-name").value,
      address1: root.querySelector("#addr-address1").value,
      address2: root.querySelector("#addr-address2").value,
      city: root.querySelector("#addr-city").value,
      province: root.querySelector("#addr-province").value,
      zip: root.querySelector("#addr-zip").value,
      country: root.querySelector("#addr-country").value,
      phone: root.querySelector("#addr-phone").value
    };

    const finalBilling = {
      first_name: root.querySelector("#bill-first-name").value,
      last_name: root.querySelector("#bill-last-name").value,
      address1: root.querySelector("#bill-address1").value,
      address2: root.querySelector("#bill-address2").value,
      city: root.querySelector("#bill-city").value,
      province: root.querySelector("#bill-province").value,
      zip: root.querySelector("#bill-zip").value,
      country: root.querySelector("#bill-country").value,
      phone: root.querySelector("#bill-phone").value
    };

    const customer = originalOrderData.customerDetails || {};
    let phone_code = "";
    let phone_number = customer.phone || "";

    if (phone_number.startsWith("+")) {
      phone_code = phone_number.slice(0, 3);
      phone_number = phone_number.slice(3);
    }

const finalPayload = {
  plan_id: planId,
  shop: Shopify.shop,
  customer_id: customerId,
  email: customer.email || "",
  customer_name: `${customer.firstName || ""} ${customer.lastName || ""}`.trim(),
  phone_code,
  phone_number,
  shipping_address: finalShipping,
  billing_address: finalBilling,
  delivery_freq_conf: deliveryConf
};

    console.log("🟢 FINAL Step-2 Payload", finalPayload);

    // API CALL
    const res = await fetch(
      "https://api.subscriptions.axentraos.co.in/api/v1/plans/subscription_purchase_view/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalPayload)
      }
    );

    const result = await res.json();
    console.log("🟢 Step-2 API Response:", result);

    const paymentUrl = result.payment_url || result.data?.payment_url;

const message = result.message || "Subscription created successfully";
const subId = result.data?.subscription_id || "—";

body.innerHTML = `
  <div style="padding:20px; text-align:center;">

    <h2 style="font-size:18px;font-weight:600; color:#10b981;">
      ${escapeHtml(message)}
    </h2>

    <p style="margin-top:12px; font-size:15px;">
      <strong>Subscription ID:</strong><br>
      ${escapeHtml(subId)}
    </p>

    <p style="margin-top:16px; color:#6b7280; font-size:15px;">
      Click the link below to complete payment:
    </p>

    <a href="${paymentUrl}" 
       target="_blank" 
       style="
         display:inline-block;
         margin-top:18px;
         background:#0d9488;
         color:white;
         padding:10px 20px;
         border-radius:8px;
         text-decoration:none;
         font-weight:500;
       ">
      Proceed to Payment
    </a>

  </div>
`;
  const footer = root.querySelector("div[style*='justify-content:flex-end']");
  footer.innerHTML = `
       <button id="step2-close"
          style="padding:0 16px;height:40px;border:1px solid #d1d5db;border-radius:8px;background:#fff;cursor:pointer;">
          Close
        </button>
 <a href="${paymentUrl}" target="_blank" >
      <button id="step2-submit"
        style="padding:0 16px;height:40px;border-radius:8px;background:#0d9488;color:white;cursor:pointer;">
       Proceed to Payment
      </button>
      </a>
  `;
// The button ID created in innerHTML above is "step2-close", so we must select that
const closeBtn = root.querySelector("#step2-close");
if(closeBtn) {
    closeBtn.onclick = closeSubModal;
}

  });
}



function formatDateToIST(dateString) {
  if (!dateString) return "N/A";
  try {
      const date = new Date(dateString); // Parses "2025-06-02 10:37:58 -0400" correctly
      return date.toLocaleString("en-IN", { // en-IN for common Indian format, or en-US for US-style IST
          timeZone: "Asia/Kolkata",
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true // Or false for 24-hour format
      });
  } catch (e) {
      console.error("Error formatting date:", e);
      return dateString; // Fallback to original if parsing/formatting fails
  }
}
function closeModal(modal, overlay) {
  console.log("ViewDetails Close")
    if (modal) {
        modal.classList.remove("slide-in-top"); // Reverse animation
        setTimeout(() => {
            modal.remove();
            if (overlay) overlay.remove();
            document.body.style.overflow = ""; // Restore background scrolling
        }, 300); // Match transition duration
    }
    // if (overlay) overlay.remove(); // Remove overlay
}

function closeViewDetails (modal, overlay) {
  console.log("ViewDetails11 Close")
   modal.remove();
            if (overlay) overlay.remove();
            document.body.style.overflow = "";
}
async function createOrderDetailsModal(order, overlay) { // Made async
  // console.log("shopname", shopName)
      console.log(order.orderTime, "ordertime (original)");
      console.log(formatDateToIST(order.orderTime), "ordertime (IST for display)");
  
      const { address1, address2, city, province, zip, country } = order.shippingAddress;
      const fullAddress = [address1, address2, city, province, zip, country]
          .filter(Boolean)
          .join(", ");
  
      const modal = document.createElement("div");
      modal.className = "order-details-modal card";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.classList.add("responsive-width");
  
      // Modal Title
      const titleDiv = document.createElement("div");
      titleDiv.classList.add("order-details-modal-title-div");
  
      const modalTitle = document.createElement("div");
      modalTitle.textContent = `Order Details - ${order.orderNumber}`;
      modalTitle.classList.add("order-details-modal-title");
  
      const cancelledText = document.createElement("div");
      cancelledText.classList.add("omc-cancelled-text");
      cancelledText.textContent = order.cancelledAt ? "Cancelled" : "";
  
      const closeButtonTop = document.createElement("div");
      closeButtonTop.innerHTML = '×';
      closeButtonTop.classList.add("order-details-modal-close-button-top");
      closeButtonTop.addEventListener("click", function () {
          closeViewDetails(modal, overlay);
      });
  
      titleDiv.appendChild(modalTitle);
      // closeButtonTop should be a sibling of modalTitle within titleDiv, or inside modalTitle if that's the design
      titleDiv.appendChild(closeButtonTop); // Moved here for better structure usually
      // modalTitle.appendChild(closeButtonTop); // If you want it inside the title text div
  const cancelDiv = document.createElement("div")
  cancelDiv.classList.add("omc-cancelled-div");
      if (order.cancelledAt) {
          cancelDiv.appendChild(cancelledText);
      }
  
      
      modal.appendChild(titleDiv);
      modal.appendChild(cancelDiv);
  
      const titleHr = document.createElement("hr");
      titleHr.classList.add("order-details-modal-title-hr");
      modal.appendChild(titleHr);
  
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("order-details-modal-container-div");
  
      // Order Information Section
      const orderInfoSection = document.createElement("div");
      orderInfoSection.classList.add("order-details-modal-info-section");
  
      const orderInfoHeading = document.createElement("div");
      orderInfoHeading.innerHTML = "Order Information";
      orderInfoHeading.classList.add("order-details-modal-info-heading");
      orderInfoSection.appendChild(orderInfoHeading);
  
      const orderInfoDetails = document.createElement("div");
      orderInfoDetails.classList.add("order-details-modal-info-details");
  
      orderInfoDetails.innerHTML = `
          <div><span class="order-details-modal-info-label">Order ID:</span> ${order.orderNumber}</div>
          <div><span class="order-details-modal-info-label">Date Placed:</span> ${order.orderDate}</div>
          <div><span class="order-details-modal-info-label">Status:</span> ${order.cancelledAt ? "Cancelled" : order.fulfillmentStatus}</div>
          <div><span class="order-details-modal-info-label">Payment Method:</span> ${order.paymentGateway}</div>
      `;
  
      orderInfoSection.appendChild(orderInfoDetails);
  
      // Shipping Information Section
      const shippingInfoSection = document.createElement("div");
      shippingInfoSection.classList.add("order-details-modal-info-section");
  
      const shippingInfoHeading = document.createElement("div");
      shippingInfoHeading.innerHTML = "Shipping Information";
      shippingInfoHeading.classList.add("order-details-modal-info-heading");
      // Edit icon will be appended later if conditions are met
      shippingInfoSection.appendChild(shippingInfoHeading);
  
  const shop11 = Shopify.shop
      // --- Start: Edit Button Logic ---
      const moduleSettings = await getModuleSettings(shop11); // Assuming order has shopDomain
      let canEditAddress = false;
      let editTimeLimitMinutes = 0;
  console.log(moduleSettings, "Modulesettingsss")
      if (moduleSettings) {
          const updateAddressModule = moduleSettings.find(m => m.module_name === "update address");
          if (updateAddressModule && updateAddressModule.is_enabled) {
              const generalSettings = updateAddressModule.module_json?.edit_orders?.general_settings;
              if (generalSettings && generalSettings.is_enabled) {
                  editTimeLimitMinutes = parseInt(generalSettings.edit_time, 10);
                  console.log("Edit tim:", editTimeLimitMinutes);
                  if (!isNaN(editTimeLimitMinutes) && editTimeLimitMinutes > 0) {
                      const requiredStatus = generalSettings.order_status?.toLowerCase();
                      const currentStatus = order.fulfillmentStatus?.toLowerCase();
                  const OrderCancelled = order.cancelledAt
                  console.log("Edit time time:", requiredStatus, currentStatus, OrderCancelled);
                  if(!OrderCancelled) {
                      console.log("Edit time. Current time:111");
                      if (requiredStatus && currentStatus === requiredStatus) {
                          console.log("Edit time. Current time:");
                          try {
                              const orderPlacedDate = new Date(order.orderTime);
                              const now = new Date();
                              const deadline = new Date(orderPlacedDate.getTime() + editTimeLimitMinutes * 60 * 1000);
                  
                              if (now <= deadline) {
                                  canEditAddress = true;
                                  console.log("Edit time limit. Current time:", now, "Deadline:", deadline);
                              } else {
                                  console.log("Edit time limit expired. Current time:", now, "Deadline:", deadline);
                              }
                          } catch (e) {
                              console.error("Error parsing orderTime for edit check:", order.orderTime, e);
                          }
                      } else {
                          console.log(`Order status "${currentStatus}" does not match required "${requiredStatus}"`);
                      }
                  } else {
                      console.log(`Order Cancelled So Edit Button is not seen`)
                  }
                  }
                  
              }
          }
      }
  
      if (canEditAddress) {
          const editIcon = document.createElement('button');
          editIcon.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Edit"><g><path d="M3.548,20.938h16.9a.5.5,0,0,0,0-1H3.548a.5.5,0,0,0,0,1Z"></path><path d="M9.71,17.18a2.587,2.587,0,0,0,1.12-.65l9.54-9.54a1.75,1.75,0,0,0,0-2.47l-.94-.93a1.788,1.788,0,0,0-2.47,0L7.42,13.12a2.473,2.473,0,0,0-.64,1.12L6.04,17a.737.737,0,0,0,.19.72.767.767,0,0,0,.53.22Zm.41-1.36a1.468,1.468,0,0,1-.67.39l-.97.26-1-1,.26-.97a1.521,1.521,0,0,1,.39-.67l.38-.37,1.99,1.99Zm1.09-1.08L9.22,12.75l6.73-6.73,1.99,1.99Zm8.45-8.45L18.65,7.3,16.66,5.31l1.01-1.02a.748.748,0,0,1,1.06,0l.93.94A.754.754,0,0,1,19.66,6.29Z"></path></g></g></svg>`;
          editIcon.classList.add("edit-shipping-address-button"); // Add a class for styling
          editIcon.style.marginLeft = "10px"; // Example styling
          editIcon.style.background = "none";
          editIcon.style.border = "none";
          editIcon.style.cursor = "pointer";
  
          editIcon.addEventListener("click", () => {
              openEditShippingModal(order.shippingAddress, order.orderNumber, order.orderId, order.customerDetails, overlay, Shopify.shop);
              closeModal(modal); // Close current modal after opening edit modal
          });
          shippingInfoHeading.appendChild(editIcon); // Append to the heading
      }
      // --- End: Edit Button Logic ---
  
      const shippingInfoDetails = document.createElement("div");
      shippingInfoDetails.classList.add("order-details-modal-info-details");
  
      shippingInfoDetails.innerHTML = `
          <div><span class="order-details-modal-info-label">Name:</span> ${order.shippingAddress.first_name} ${order.shippingAddress.last_name}</div>
          <div><span class="order-details-modal-info-label">Address:</span> ${address1}${address2 ? ', ' + address2 : ''}</div>
          <div><span class="order-details-modal-info-label">City:</span> ${city}, ${province} ${zip}</div>
          <div><span class="order-details-modal-info-label">Contact:</span> ${order.shippingAddress.phone}</div>
      `; // Corrected address line display
  
      shippingInfoSection.appendChild(shippingInfoDetails);
  
      containerDiv.appendChild(orderInfoSection);
      containerDiv.appendChild(shippingInfoSection);
  
      // Order Summary Section
      const orderSummary = document.createElement("div");
      orderSummary.classList.add("order-summary");
  
      const summaryHeading = document.createElement("div");
      summaryHeading.textContent = "Order Summary";
      summaryHeading.classList.add("order-summary-heading");
  
      const table = document.createElement("table");
      table.classList.add("omc-custom-table", "order-summary-table");
  
      const thead = document.createElement("thead");
      thead.classList.add("order-summary-thead");
  
      const headerRow = document.createElement("tr");
      ["Item", "Quantity", "Price"].forEach((text) => {
          const th = document.createElement("th");
          th.textContent = text;
          th.classList.add("order-summary-th");
          headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);
  
      const tbody = document.createElement("tbody");
      tbody.classList.add("order-summary-tbody");
  
      // Loop through all items in the order
      order.items.forEach((item) => {
          const itemRow = document.createElement("tr");
          itemRow.classList.add("order-summary-item-row");
  
          const itemCell = document.createElement("td");
          itemCell.classList.add("order-summary-item-cell");
  
          const itemImage = document.createElement("img");
          itemImage.src = item.image || "";
          itemImage.alt = item.title;
          itemImage.classList.add("order-summary-item-image");
  
          const itemTitle = document.createElement("span");
          itemTitle.textContent = item.title;
          itemTitle.classList.add("order-summary-item-title");
  
          itemCell.appendChild(itemImage);
          itemCell.appendChild(itemTitle);
  
          const quantityCell = document.createElement("td");
          quantityCell.textContent = item.quantity || "1";
          quantityCell.classList.add("order-summary-quantity-cell");
  
          const priceCell = document.createElement("td");
          priceCell.textContent = item.price;
          priceCell.classList.add("order-summary-price-cell");
  
          itemRow.appendChild(itemCell);
          itemRow.appendChild(quantityCell);
          itemRow.appendChild(priceCell);
          tbody.appendChild(itemRow);
      });
  
      // Total row
      const totalRow = document.createElement("tr");
      totalRow.classList.add("order-summary-total-row");
  
      const totalLabel = document.createElement("td");
      totalLabel.textContent = "Total";
      totalLabel.colSpan = 2;
      totalLabel.classList.add("order-summary-total-label");
  
      const totalValue = document.createElement("td");
      totalValue.textContent = order.totalPrice;
      totalValue.classList.add("order-summary-total-value");
  
      totalRow.appendChild(totalLabel);
      totalRow.appendChild(totalValue);
      tbody.appendChild(totalRow);
  
      table.appendChild(tbody);
      orderSummary.appendChild(summaryHeading);
      orderSummary.appendChild(table);
  
      // Modal Footer
      const modalActions = document.createElement("div");
      modalActions.classList.add("modal-actions");
  
      const closeButton = document.createElement("button");
      closeButton.classList.add("close-modal");
      closeButton.textContent = "Close";
      closeButton.addEventListener("mouseover", function () {
          this.classList.add("close-modal-hover");
      });
      closeButton.addEventListener("mouseout", function () {
          this.classList.remove("close-modal-hover");
      });
      closeButton.addEventListener("click", function () {
          closeViewDetails(modal, overlay);
      });
  
      modalActions.appendChild(closeButton);
  
      const hr = document.createElement("hr");
      hr.classList.add("order-details-hr");
  
      const modalContainer = document.createElement("div");
      modalContainer.classList.add("order-details-modal-container");
  
      modalContainer.appendChild(containerDiv);
      modalContainer.appendChild(hr);
      modalContainer.appendChild(orderSummary);
      modalContainer.appendChild(modalActions);
  
      modal.appendChild(modalContainer);
  
      modal.addEventListener("click", (event) => {
          event.stopPropagation();
      });
  
      return modal;
  }
async function getModuleSettings(shopName) {
  try {
      const response = await fetch(`https://omc.axentraos.co.in/utility/get_module_setting/?shop=${shopName}`);
      if (!response.ok) {
          console.error("Failed to fetch module settings:", response.status, await response.text());
          return null;
      }
      const data = await response.json();
      return data.module_settings;
  } catch (error) {
      console.error("Error fetching module settings:", error);
      return null;
  }
}
async function saveShippingAddress(orderId, formData, shopName) {
  try {
    const response = await fetch("https://omc.axentraos.co.in/utility/update_shipping_address/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        shop: shopName,
        order_id: orderId,
        address: formData
      })
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Shipping address updated successfully:", result);
      return { success: true, data: result };
    } else {
      const errorData = await response.json();
      console.error("Error updating address:", errorData);
      return { success: false, error: errorData };
    }
  } catch (error) {
    console.error("Network or server error while updating address:", error);
    return { success: false, error };
  }
}
async function openEditShippingModal(shippingAddress, orderNumber, orderId, customerDetails, overlay, shopName) {
  // 1. Fetch module settings
  console.log("shipping address", overlay);

if (overlay.hasAttribute('style')) {
  overlay.removeAttribute('style');
}

  if(window.innerWidth > 768){
    shippingAddress = JSON.parse(decodeURIComponent(shippingAddress))
  orderId = JSON.parse(decodeURIComponent(orderId))
  }
  console.log("shipping address", shippingAddress)
  
  let fieldRestrictions = {}; // Default: all fields editable if API fails or settings are missing
  const shopDomain = shopName; // Make this dynamic if needed
console.log("shopname11", shopName)
  // Helper to map form field names to API restriction keys
  const formFieldToApiKeyMap = {
      address1: "address_line_1",
      address2: "address_line_2",
      city: "city",
      province: "state", // API uses 'state' for 'province'
      zip: "zipcode", // API uses 'zip code' for 'zip'
      country: "country",
      // landmark: "landmark" // If you add a landmark field
  };

  try {
      const settingsResponse = await fetch(`https://omc.axentraos.co.in/utility/get_module_setting/?shop=${shopName}`);
      if (settingsResponse.ok) {
          const settingsData = await settingsResponse.json();
          const updateAddressModule = settingsData.module_settings?.find(
              (m) => m.module_name === "update address" && m.is_enabled
          );

          if (updateAddressModule?.module_json?.edit_orders?.editable_fields?.edit_shipping_address?.restrictions) {
              fieldRestrictions = updateAddressModule.module_json.edit_orders.editable_fields.edit_shipping_address.restrictions;
              console.log("Fetched field restrictions:", fieldRestrictions);
          } else {
              console.warn("Update address restrictions not found or module disabled. Defaulting to all fields editable.");
              // Set all known fields to true if restrictions are missing, to maintain editability
              Object.values(formFieldToApiKeyMap).forEach(apiKey => fieldRestrictions[apiKey] = true);
          }
      } else {
          console.error("Failed to fetch module settings:", settingsResponse.status);
          Object.values(formFieldToApiKeyMap).forEach(apiKey => fieldRestrictions[apiKey] = true);
      }
  } catch (error) {
      console.error("Error fetching or parsing module settings:", error);
      Object.values(formFieldToApiKeyMap).forEach(apiKey => fieldRestrictions[apiKey] = true);
  }

  const countriesData = await fetchCountries();
  const countryOptions = countriesData.success
    ? countriesData.data.countries.map(
        (country) =>
          `<option value="${country.name}" ${shippingAddress.country === country.name ? "selected" : ""}>${country.name}</option>`
      ).join("")
    : "<option>Error loading countries</option>";

  const editModal = document.createElement("div");
  editModal.className = "edit-shipping-modal card";
  editModal.setAttribute("role", "dialog");
  editModal.setAttribute("aria-modal", "true");
  editModal.classList.add("responsive-width");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("order-details-modal-title-div", "d-flex", "justify-content-between", "align-items-center");
  
  const modalTitle = document.createElement("div");
  modalTitle.textContent = `Edit Shipping Address`;
  modalTitle.style.fontWeight = "bold";
  modalTitle.style.fontFamily = "var(--axentra-font-family) !improtant";
  modalTitle.classList.add("order-details-modal-tcreateOrderDetailsModalitle", "mb-0");
  
  const closeButtonTop = document.createElement("div");
  closeButtonTop.innerHTML = '×';
  closeButtonTop.classList.add("order-details-modal-close-button-top", "cursor-pointer", "fs-4");
  closeButtonTop.style.fontWeight = "bold";
  closeButtonTop.style.cursor = "pointer";
  closeButtonTop.addEventListener("click", function () {
    closeModal(editModal, overlay);
  });
  
  titleDiv.appendChild(modalTitle);
  titleDiv.appendChild(closeButtonTop);
  // titleDiv.appendChild(modalTitle);
  editModal.appendChild(titleDiv);

  const titleHr = document.createElement("hr");
  titleHr.classList.add("order-details-modal-title-hr");
  editModal.appendChild(titleHr);

  const form = document.createElement("form");
  form.classList.add("edit-shipping-form");

  // Modified createInputGroup to accept restrictions
  const createInputGroup = (label, name, type = "text", options = "") => {
    const group = document.createElement("div");
    group.classList.add("form-group");

    const formLabel = document.createElement("label");
    formLabel.textContent = label;
    formLabel.setAttribute("for", name);

    let input;

    if (type === "select") {
      input = document.createElement("select");
      input.innerHTML = options;
    } else {
      input = document.createElement("input");
      input.type = type;
    }

    input.classList.add("form-control");
    input.id = name;
    input.name = name;

    // Apply restrictions
    const apiKey = formFieldToApiKeyMap[name];
    // If apiKey is not in fieldRestrictions (e.g. landmark not in form but in API) or explicitly true, it's editable.
    // Default to true if fieldRestrictions is empty or key not present.
    const isEditable = fieldRestrictions.hasOwnProperty(apiKey) ? fieldRestrictions[apiKey] === true : true;

    if (!isEditable) {
      input.disabled = true;
    }

    group.appendChild(formLabel);
    group.appendChild(input);
    return group;
  };
  const firstName = createInputGroup("First Name", "firstName");
  firstName.querySelector("input").value = shippingAddress.first_name || "";
  form.appendChild(firstName);

  const lastName = createInputGroup("Last Name", "lastName");
  lastName.querySelector("input").value = shippingAddress.last_name || "";
  form.appendChild(lastName);

  const address1Group = createInputGroup("Address 1", "address1");
  address1Group.querySelector("input").value = shippingAddress.address1 || "";
  form.appendChild(address1Group);

  const address2Group = createInputGroup("Address 2", "address2");
  address2Group.querySelector("input").value = shippingAddress.address2 || "";
  form.appendChild(address2Group);

  const countryGroup = createInputGroup("Country", "country", "select", countryOptions);
  const countrySelect = countryGroup.querySelector("select");
  form.appendChild(countryGroup);

  const provinceGroup = createInputGroup("Province", "province", "select", "<option>Select State</option>");
  const provinceSelect = provinceGroup.querySelector("select");
  form.appendChild(provinceGroup);

  const cityGroup = createInputGroup("City", "city", "select", "<option>Select City</option>");
  const citySelect = cityGroup.querySelector("select");
  form.appendChild(cityGroup);

  const zipGroup = createInputGroup("Zip", "zip");
  zipGroup.querySelector("input").value = shippingAddress.zip || "";
  form.appendChild(zipGroup);

  // Event listener for Country selection
  countrySelect.addEventListener("change", async () => {
    const selectedCountry = countrySelect.value;
    // Only fetch if province is editable, otherwise no point in changing options
    if (!provinceSelect.disabled || !citySelect.disabled) {
      const stateData = await fetchStates(selectedCountry);
      let stateOptions = "<option value=''>Select State</option>";

      if (stateData?.success) {
        stateOptions += stateData.data.states
          .map((state) => `<option value="${state.name}">${state.name}</option>`)
          .join("");
      }
      if (!provinceSelect.disabled) {
          provinceSelect.innerHTML = stateOptions;
      }
      if (!citySelect.disabled) {
          citySelect.innerHTML = "<option value=''>Select City</option>"; // Reset city options
      }
    }
  });

  // Event listener for State selection
  provinceSelect.addEventListener("change", async () => {
    const selectedState = provinceSelect.value;
    // Only fetch if city is editable
    if (!citySelect.disabled) {
      const cityData = await fetchCities(selectedState);
      let cityOptions = "<option value=''>Select City</option>";

      if (cityData?.success) {
        cityOptions += cityData.data.cities
          .map((city) => `<option value="${city.name}">${city.name}</option>`)
          .join("");
      }
      citySelect.innerHTML = cityOptions;
    }
  });

  // Set initial values for Province and City based on shippingAddress
  // This needs to run even if selects are disabled to show the current address
  if (shippingAddress.country) {
    if (!countrySelect.disabled) countrySelect.value = shippingAddress.country; // Set value if not disabled
    else if (countrySelect.querySelector(`option[value="${shippingAddress.country}"]`)) { // Ensure option exists if disabled
      countrySelect.value = shippingAddress.country;
    }


    const stateData = await fetchStates(shippingAddress.country);
    let stateOptions = "<option value=''>Select State</option>";
    if (stateData?.success) {
      stateOptions += stateData.data.states
        .map((state) => `<option value="${state.name}" ${shippingAddress.province === state.name ? "selected" : ""}>${state.name}</option>`)
        .join("");
    }
    // Populate options regardless of disabled state, then set value
    provinceSelect.innerHTML = stateOptions;
    if (shippingAddress.province) {
      if (!provinceSelect.disabled) provinceSelect.value = shippingAddress.province;
      else if (provinceSelect.querySelector(`option[value="${shippingAddress.province}"]`)) {
         provinceSelect.value = shippingAddress.province;
      }

      const cityData = await fetchCities(shippingAddress.province);
      let cityOptions = "<option value=''>Select City</option>";
      if (cityData?.success) {
        cityOptions += cityData.data.cities
          .map((city) => `<option value="${city.name}" ${shippingAddress.city === city.name ? "selected" : ""}>${city.name}</option>`)
          .join("");
      }
      // Populate options regardless of disabled state, then set value
      citySelect.innerHTML = cityOptions;
      if (shippingAddress.city) {
         if (!citySelect.disabled) citySelect.value = shippingAddress.city;
         else if (citySelect.querySelector(`option[value="${shippingAddress.city}"]`)) {
            citySelect.value = shippingAddress.city;
         }
      }
    }
  }


  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("modal-actions");

  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.textContent = "Save";
  saveButton.classList.add("btn", "btn-primary");
  saveButton.addEventListener("click", async () => {
      const formData = {
          first_name: document.getElementById("firstName").value,
          last_name:  document.getElementById("lastName").value,
          phone: shippingAddress.phone,
        address1: document.getElementById("address1").value,
        address2: document.getElementById("address2").value,
        city: citySelect.value,
        province: provinceSelect.value,
        zip: document.getElementById("zip").value,
        country: countrySelect.value,
      };
    
      console.log("Submitting Updated Shipping Address:", formData);
    
      const result = await saveShippingAddress(orderId, formData, shopName);
    
      if (result.success) {
          createStatusToast("Shipping Address Updated ", "Your shipping address has been changed. All deliveries will be sent to the new location.", "success");
        closeModal(editModal, overlay);
        window.location.reload()
        // Optionally, refresh the page or update UI dynamically
      } else {
        
      }
    });
    

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.textContent = "Cancel";
  cancelButton.classList.add("btn", "btn-secondary");
  cancelButton.addEventListener("click", () => {
    closeModal(editModal, overlay);
  });

  buttonDiv.appendChild(saveButton);
  buttonDiv.appendChild(cancelButton);
  form.appendChild(buttonDiv);
  const formDiv = document.createElement("div")
  formDiv.className = "shippingFormDiv"
  formDiv.appendChild(form)

  editModal.appendChild(form);


  overlay.style.display = "block";
  document.body.appendChild(editModal);
  document.body.appendChild(overlay);
  editModal.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}
function openTrackOrderModal(encodedOrderString, encodedTrackSettings) {
  const order = JSON.parse(decodeURIComponent(encodedOrderString));
  const trackSettings = encodedTrackSettings ? JSON.parse(decodeURIComponent(encodedTrackSettings)) : {};
console.log("orderrrr111", order, order.fulfillments)
console.log("trackSettings", window.trackOrderSettings, trackSettings)
    // check if it is null or undefined
  if (!window.trackOrderSettings || window.trackOrderSettings == null) {
    console.warn("Track settings not yet loaded. Please try again.");
    // Optionally, display an error message to the user or try again after a short delay.
    return;
  }

  const trackingFlow =
    window.trackOrderSettings?.track_order?.trackingFlow || "shopify";

  const url = `https://omc.axentraos.co.in/utility/get_tracking_info?order_id=${order.orderId}&shop=${Shopify.shop}`;

  fetch(url)
      .then(res => res.json())
      .then(apiData => {
          console.log("Fetched track_order_data:", apiData,apiData.trackings[0]);
console.log("Before assigning tracking data:", order.fulfillments);

      
            if (apiData.trackings && apiData.trackings.length > 0) {
              const firstTrackingData = apiData.trackings[0];

  // Ensure fulfillments array exists and has at least one object
  if (!order.fulfillments || !Array.isArray(order.fulfillments)) {
    order.fulfillments = [{}];
  } else if (order.fulfillments.length === 0) {
    order.fulfillments.push({});
  }

              order.fulfillments[0].trackingUrl = firstTrackingData.tracking_url;
              order.fulfillments[0].trackingNumber = firstTrackingData.tracking_number;
              order.fulfillments[0].company = firstTrackingData.company;
              order.fulfillments[0].service = firstTrackingData.service;

  order.trackings = apiData.trackings;
          }
       
       
           console.log("Fetched track_order_data2232:", order, order.fulfillments);
          if (trackingFlow === "shiprocket") {
        renderShiprocketTrack(order);
      } else {
        // existing default Shopify flow (UNCHANGED)
        renderTrackOrderModal(order, window.trackOrderSettings);
      }
          console.log("Fetched track_order_data2232:", order, order.fulfillments);
      })
      .catch(err => {
          console.error("Failed to fetch track_order_data:", err);
          //Pass window.trackOrderSettings
         if (trackingFlow === "shiprocket") {
        renderShiprocketTrack(order);
      } else {
        // existing default Shopify flow (UNCHANGED)
        renderTrackOrderModal(order, window.trackOrderSettings);
      }
      });
}


function renderTrackOrderModal(order, trackSettings) {
  let overallStatus = 'processing';
  console.log("orderrrr11122", order, order.fulfillments?.[0])
  if (order.fulfillmentStatus === 'unfulfilled') {
      overallStatus = 'placed';
  } else if (order.fulfillmentStatus === 'fulfilled') {
      overallStatus = 'processing';
  }

  const firstTrackingStatus = (order.trackings?.[0]?.status || '').toLowerCase();
  if (['shipped', 'in_transit', 'transit'].includes(firstTrackingStatus)) {
      overallStatus = 'shipped';
  } else if (firstTrackingStatus === 'delivered') {
      overallStatus = 'delivered';
  }

  const primaryFulfillment = order.fulfillments && order.fulfillments.length > 0 ? order.fulfillments[0] : {};

  const overallStatusMap = {
      'placed':     { progress: '0%' },
      'processing': { progress: '33%' },
      'shipped':    { progress: '67%' },
      'delivered':  { progress: '100%' }
  };

  const getStepClass = (step) => {
      const stepsOrder = ['placed', 'processing', 'shipped', 'delivered'];
      const currentIdx = stepsOrder.indexOf(overallStatus);
      const stepIdx = stepsOrder.indexOf(step);
      if (stepIdx <= currentIdx) return 'xircls-track-progress-step--complete';
      return 'xircls-track-progress-step--pending';
  };

  const formatAddress = (addr) => {
      if (!addr) return '<p>No address provided.</p>';
      let addressHtml = `<p>${addr.name || ''}</p><p>${addr.address1 || ''}</p>`;
      if (addr.address2) addressHtml += `<p>${addr.address2}</p>`;
      addressHtml += `<p>${addr.city || ''}, ${addr.provinceCode || ''} ${addr.zip || ''}</p><p>${addr.country || ''}</p>`;
      return addressHtml;
  };

  const generateOverallTabHTML = () => {
      const statusData = overallStatusMap[overallStatus] || overallStatusMap.processing;
      const deliveryStatusClass = overallStatus === 'delivered' ? 'xircls-track-complete' : 'xircls-track-incomplete';

      let deliveryStatusHTML = '';
      if (trackSettings.track_order.deliveryStatusCard) {
          deliveryStatusHTML = `
              <div class="xircls-track-panel-section ${deliveryStatusClass}">
                  <h3>Delivery Status</h3>
                  <div class="xircls-track-progress-container">
                      <div class="xircls-track-progress-track"><div class="xircls-track-progress-fill" style="width: ${statusData.progress}"></div></div>
                      <div class="xircls-track-progress-steps">
                          <div class="xircls-track-progress-step ${getStepClass('placed')}"><div class="xircls-track-progress-step-icon"><svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg></div><p>Order Placed</p></div>
                          <div class="xircls-track-progress-step ${getStepClass('processing')}"><div class="xircls-track-progress-step-icon"><svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 2 2 4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg></div><p>Processing</p></div>
                          <div class="xircls-track-progress-step ${getStepClass('shipped')}"><div class="xircls-track-progress-step-icon"><svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg></div><p>Shipped</p></div>
                          <div class="xircls-track-progress-step ${getStepClass('delivered')}"><div class="xircls-track-progress-step-icon"><svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></div><p>Delivered</p></div>
                      </div>
                  </div>
              </div>`;
      }
      let trackingInfoHTML = '';
      if (trackSettings.track_order.displayTrackingInfo) {
          const redirectToPartner = trackSettings.track_order.trackingLinkBehaviour?.redirectOnPartnerWebsite;
          const trackingLink = redirectToPartner ? primaryFulfillment.trackingUrl || '#' : order.orderStatusUrl || '#';
          trackingInfoHTML = `
              <div class="xircls-track-panel-section">
                  <h3>Tracking Information</h3><p>Your order is currently being handled by our shipping partner.</p>
                  <div class="xircls-track-info-box">
                      <div class="xircls-track-info-row"><span>Tracking Number:</span> <span>${primaryFulfillment.trackingNumber || 'N/A'}</span></div>
                      <div class="xircls-track-info-row"><span>Carrier:</span> <span>${primaryFulfillment.company || 'N/A'}</span></div>
                      <div class="xircls-track-info-row"><span>Service Type:</span> <span>${primaryFulfillment.service || 'N/A'}</span></div>
                      <a href="${trackingLink}" target="_blank" class="xircls-track-primary-btn">Track Package</a>
                  </div>
              </div>`;
      }
      const shippingDetailsHTML = `<div class="xircls-track-shipping-details xircls-track-panel-section"><div><h3>Shipping Address</h3>${formatAddress(order.shippingAddress)}</div><div><h3>Shipping Method</h3><p>${primaryFulfillment.shippingMethod || 'Standard Delivery'}</p></div></div>`;
      return deliveryStatusHTML + trackingInfoHTML + shippingDetailsHTML;
  };

  const generateItemsTabHTML = () => {
      if (!order.items || order.items.length === 0) {
          return `<div class="xircls-track-panel-section"><p>No item details available.</p></div>`;
      }
      
      const itemTrackingMap = {};
      (order.trackings || []).forEach(tracking => {
          (tracking.items || []).forEach(itemId => {
              itemTrackingMap[itemId] = tracking;
          });
      });

      return order.items.map(item => {
          const trackingData = itemTrackingMap[item.id] || {};
          const itemStatusRaw = (trackingData.status || 'processing').toLowerCase();
          
          // Normalize status for consistency ('in_transit' is a form of 'shipped')
          let itemStatus = (trackingData.status || 'processing').toLowerCase();
          if (['in_transit', 'transit', 'shipped', 'Shipped'].includes(itemStatus)) {
              itemStatus = 'shipped';
          }
          if (!['processing', 'shipped', 'delivered'].includes(itemStatus)) {
              itemStatus = 'processing'; // fallback to known step
          }
          
         
          
          // *** START: UPDATED SECTION FOR ITEM PROGRESS BAR ***

          // 1. Define the item-specific progress steps and fill percentages
          const itemStepsOrder = ['processing', 'shipped', 'delivered'];
          if (itemStepsOrder.indexOf(itemStatus) === -1) {
              console.warn('Unknown item status:', itemStatus);
          }
          const itemProgressFillMap = {
              'processing': '0%',
              'shipped': '50%',
              'delivered': '100%'
          };
          const progressFill = itemProgressFillMap[itemStatus] || '15%';

          // 2. Create a helper function to determine the class for each step
          const getItemStepClass = (step) => {
              const currentIdx = itemStepsOrder.indexOf(itemStatus);
              const stepIdx = itemStepsOrder.indexOf(step);
          console.log(currentIdx, stepIdx, "currentIndex")
              if (currentIdx === -1) return step === 'processing' ? 'xircls-track-progress-step--complete' : 'xircls-track-progress-step--pending';
              return stepIdx <= currentIdx ? 'xircls-track-progress-step--complete' : 'xircls-track-progress-step--pending';
          };
          

          // 3. Build the progress bar HTML using the same structure and classes as the "Overall" tab
          const itemProgressHTML = `
              <div class="xircls-track-item-progress-wrapper">
                  <div class="xircls-track-item-progress-title">Item Progress</div>
                  <div class="xircls-track-progress-container xircls-track-progress-container-itemwise">
                      <div class="xircls-track-progress-track-itemwise">
                          <div class="xircls-track-progress-fill" style="width: ${progressFill}"></div>
                      </div>
                      <div class="xircls-track-progress-steps-itemwise">
                          <div class="xircls-track-progress-step ${getItemStepClass('processing')}">
                              <div class="xircls-track-progress-step-icon"><svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 2 2 4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg></div>
                              <p>Processing</p>
                          </div>
                          <div class="xircls-track-progress-step ${getItemStepClass('shipped')}">
                              <div class="xircls-track-progress-step-icon"><svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg></div>
                              <p>Shipped</p>
                          </div>
                          <div class="xircls-track-progress-step ${getItemStepClass('delivered')}">
                              <div class="xircls-track-progress-step-icon"><svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></div>
                              <p>Delivered</p>
                          </div>
                      </div>
                  </div>
              </div>
          `;
          // *** END: UPDATED SECTION ***

          const redirectToPartner = trackSettings.track_order.trackingLinkBehaviour?.redirectOnPartnerWebsite;
          const trackingLink = redirectToPartner ? trackingData.tracking_url || '#' : order.orderStatusUrl || '#';
          
          const buttonContent = `<a href="${trackingLink}" target="_blank" class="xircls-track-primary-btn-itemSection">Track Package</a>`;
          const desktopTrackButtonHTML = `<div class="xircls-track-item-track-btn-wrapper xircls-track-btn-desktop">${buttonContent}</div>`;
          const mobileTrackButtonHTML = `<div class="xircls-track-item-track-btn-wrapper xircls-track-btn-mobile">${buttonContent}</div>`;

          return `
              <div class="xircls-track-item-card">
                  <img src="${item.image || 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png'}" alt="${item.name}" class="xircls-track-item-image">
                  <div class="xircls-track-item-details">
                      <div class="xircls-track-item-header">
                          <h4>${item.title}</h4>
                          ${desktopTrackButtonHTML}
                      </div>
                      <p class="xircls-track-item-info">Qty: ${item.quantity} • ${item.price}</p>
                      <div class="xircls-track-item-shipment-info">
                          <div class="xircls-track-item-shipment-col">
                              <span class="xircls-track-item-shipment-label">Tracking Number:</span>
                              <span class="xircls-track-item-shipment-value">${trackingData.tracking_number || 'N/A'}</span>
                          </div>
                          <div class="xircls-track-item-shipment-col">
                              <span class="xircls-track-item-shipment-label">Carrier:</span>
                              <span class="xircls-track-item-shipment-value">${trackingData.company || 'N/A'}</span>
                          </div>
                      </div>
                      ${itemProgressHTML} 
                      ${mobileTrackButtonHTML}
                  </div>
              </div>`;
      }).join('');
  };

  const modalHTML = `
      <div class="xircls-track-modal-overlay">
          <div class="xircls-track-modal-content">
              <div class="xircls-track-modal-header"><h2>Track Order - ${order.orderNumber}</h2><button class="xircls-track-modal-close-btn" title="Close">✖</button></div>
              <div class="xircls-track-modal-body">
              ${(trackSettings.track_order.entireOrder && !trackSettings.track_order.productWise) ? `
                  <div id="xircls-track-tab-overall" class="xircls-track-tab-panel xircls-track-tab-panel--active">
                      ${generateOverallTabHTML()}
                  </div>
              ` : `
                  <div class="xircls-track-tabs">
                      <button class="xircls-track-tab xircls-track-tab--active" data-tab="overall">Overall Tracking</button>
                      <button class="xircls-track-tab" data-tab="items">Item-wise Status</button>
                  </div>
                  <div id="xircls-track-tab-overall" class="xircls-track-tab-panel xircls-track-tab-panel--active">
                      ${generateOverallTabHTML()}
                  </div>
                  <div id="xircls-track-tab-items" class="xircls-track-tab-panel">
                      ${generateItemsTabHTML()}
                  </div>
              `}
              </div>
              <div class="xircls-track-modal-footer"><button class="xircls-track-secondary-btn xircls-track-modal-close-btn">Close</button></div>
          </div>
      </div>`;

  const modalWrapper = document.createElement('div');
  modalWrapper.innerHTML = modalHTML;
  document.body.appendChild(modalWrapper);
  
  const modalOverlay = modalWrapper.querySelector('.xircls-track-modal-overlay');
  setTimeout(() => {
      modalOverlay.classList.add('xircls-track-modal-open');
  }, 10);

  const closeModal = () => {
      modalOverlay.classList.remove('xircls-track-modal-open');
      const cleanup = () => { if (modalWrapper.parentElement) { document.body.removeChild(modalWrapper); } };
      modalOverlay.addEventListener('transitionend', cleanup, { once: true });
      setTimeout(cleanup, 400); // Fallback
  };

  modalOverlay.querySelectorAll('.xircls-track-modal-close-btn').forEach(btn => btn.addEventListener('click', closeModal));
  modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });

  const tabsContainer = modalOverlay.querySelector('.xircls-track-tabs');
  if (tabsContainer) {
      tabsContainer.addEventListener('click', (e) => {
          if (e.target.matches('.xircls-track-tab')) {
              const tabId = e.target.dataset.tab;
              tabsContainer.querySelectorAll('.xircls-track-tab').forEach(tab => tab.classList.remove('xircls-track-tab--active'));
              e.target.classList.add('xircls-track-tab--active');
              modalOverlay.querySelectorAll('.xircls-track-tab-panel').forEach(panel => panel.classList.remove('xircls-track-tab-panel--active'));
              modalOverlay.querySelector(`#xircls-track-tab-${tabId}`).classList.add('xircls-track-tab-panel--active');
          }
      });
  }
}
//shiprocket Integration Modal
function renderShiprocketTrack(order) {

    // ✅ use ORDER NAME instead of ID
    const orderName = order.orderNumber || order.order_name;
    console.log("orderrrrrr", order)
    const shiprocketApiUrl =
        `https://omc.axentraos.co.in/logistics/track_order/?order_id=${encodeURIComponent(orderName)}&shop=${Shopify.shop}`;

   const fallbackData = [
  {
    tracking_data: {
      track_status: 0,
      shipment_status: 0,

      shipment_track: [
        {
          order_id: order.orderNumber || "",
          awb_code: "—",
          courier_name: "Not available yet",
          weight: "—",
          consignee_name: "—",
          destination: "—",
          current_status: "Tracking not available",
          delivered_date: "",
          edd: ""
        }
      ],

      shipment_track_activities: [
        {
          date: "",
          activity: "Tracking information will be available once the shipment is picked up",
          location: "",
          "sr-status-label": "PENDING"
        }
      ],

      track_url: "",
      etd: "",
      is_return: false
    }
  }
];

    fetch(shiprocketApiUrl)
        .then(res => res.json())
        .then(data =>
            buildShiprocketModalHTML(
                parseShiprocketData(data.data, order, fallbackData)
            )
        )
        .catch(() =>
            buildShiprocketModalHTML(
                parseShiprocketData(null, order, fallbackData)
            )
        );
}
function parseShiprocketData(apiResponse, order, fallback) {
    const raw = (apiResponse && apiResponse[0]) 
        ? apiResponse[0].tracking_data 
        : fallback[0].tracking_data;

    const info = raw.shipment_track[0];
    const activities = raw.shipment_track_activities || [];

    const isDelivered =
        raw.shipment_status === 7 ||
        info.current_status === "Delivered";


    const displayDateStr = isDelivered
        ? (info.delivered_date || "")
        : (raw.etd || info.edd || "");

    const dateOnly = displayDateStr.split(" ")[0];
    const displayDate = new Date(dateOnly);

    const today = new Date();
    const diffDays = Math.ceil((displayDate - today) / (1000 * 60 * 60 * 24));

    return {
        orderID: "#ORD-" + (info.order_id || ""),
        awb: info.awb_code,
        trackUrl: raw.track_url || "",
        carrier: info.courier_name,
        weight: info.weight,
        consignee: info.consignee_name,
        destination: info.destination,
        activities,

        // 🔥 NEW FLAGS
        isDelivered,

        // 🔥 Date display fields
        label: isDelivered ? "Delivered On" : "Estimated Delivery",
        day: displayDate.getDate(),
        weekday: displayDate.toLocaleDateString('en-US', { weekday: 'long' }),
        monthYear: displayDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        daysLeft: isDelivered ? 0 : (diffDays > 0 ? diffDays : 0),

        statusId: parseInt(raw.shipment_status)
    };
}
function getProgressIndex({ statusId, activities, isDelivered }) {
    if (isDelivered) return 3;

    const latest = activities[0]?.["sr-status-label"]?.toUpperCase() || "";

    if (
        latest.includes("OUT FOR DELIVERY") ||
        latest.includes("IN TRANSIT") ||
        latest.includes("REACHED")
    ) {
        return 2; // Shipped
    }

    if (
        latest.includes("SHIPPED") ||
        latest.includes("PICKED") ||
        latest.includes("OUT FOR PICKUP")
    ) {
        return 1; // Processing
    }

    return 0; // Order Placed
}


function buildShiprocketModalHTML(data) {
    const existing = document.getElementById('sr-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'sr-modal-overlay';
    
    const style = document.createElement('style');
    style.innerHTML = `
        #sr-modal-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center;
            z-index: 99999; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        .sr-modal-box {
            background: #fff; width: 700px; max-height: 92vh; border-radius: 12px;
            display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        .sr-modal-header {
            padding: 16px 24px; border-bottom: 1px solid #f0f0f0; display: flex; justify-content: space-between; align-items: center;
        }
        .sr-modal-header h2 { margin: 0; font-size: 17px; font-weight: 600; color: #1a1a1a; }
        .sr-close-x { cursor: pointer; font-size: 22px; color: #333; border: none; background: none; }

        .sr-modal-content { padding: 24px; overflow-y: auto; flex: 1; }
        .sr-modal-content::-webkit-scrollbar { width: 5px; }
        .sr-modal-content::-webkit-scrollbar-thumb { background: #e0e0e0; border-radius: 10px; }

        /* Delivery Card Section */
        .sr-delivery-card { 
            background: #f8fbff; border: 1px solid #edf2f7; border-radius: 16px; padding: 25px; margin-bottom: 24px; position: relative;
        }
        .sr-est-lbl { font-size: 14px; color: #718096; margin-bottom: 10px; display: block; font-weight: 400;}
        .sr-date-section { display: flex; align-items: center; margin-bottom: 20px; }
        .sr-big-date { font-size: 58px; font-weight: 600; color: #0084ff; line-height: 1; margin-right: 18px; letter-spacing: -1px; }
        .sr-date-info .day { font-size: 20px; font-weight: 700; color: #1a202c; line-height: 1.2; }
        .sr-date-info .month { font-size: 16px; color: #718096; line-height: 1.2; }
        
        .sr-days-left-box { 
            position: absolute; top: 25px; right: 25px; background: #fff; border: 1px solid #e2e8f0; 
            border-radius: 14px; padding: 10px 20px; text-align: center;
        }
        .sr-days-num { display: block; font-size: 26px; font-weight: 700; color: #0084ff; line-height: 1; }
        .sr-days-lbl { font-size: 12px; color: #718096; font-weight: 400; margin-top: 2px; display: block; }

        .sr-tracking-row { display: flex; align-items: center; justify-content: space-between; padding-top: 15px; margin-top: 10px;}
        .sr-tr-label { color: #718096; font-size: 14px; }
        .sr-awb-pill { color: #005b96; font-weight: 700;text-decoration: none; font-size: 14px; border: 1px solid #dae1e7; background: #fff; padding: 6px 14px; border-radius: 8px; letter-spacing: 0.5px;}

        /* Progress Bar */
        .sr-prog-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
        .sr-prog-title { font-size: 16px; font-weight: 600; color: #1a1a1a; }
        .sr-prog-track-num { font-size: 13px; color: #718096; }

        .sr-prog-container { 
            border: 1px solid #eef2f6; border-radius: 12px; padding: 35px 20px; margin-bottom: 24px; background: #fff;
        }
        .sr-steps-wrapper { position: relative; width: 100%; }
        
        .sr-line-bg { position: absolute; top: 18px; left: 12.5%; width: 75%; height: 3px; background: #e2e8f0; z-index: 1; }
        .sr-line-fill { position: absolute;display:block !important; top: 18px; left: 12.5%; height: 3px; background: #0084ff; z-index: 2; transition: width 0.5s ease; }

        .sr-steps { display: flex; justify-content: space-between; position: relative; z-index: 3; }
        .sr-step { flex: 1; display: flex; flex-direction: column; align-items: center; }
        .sr-step-icon { width: 40px; height: 40px; background: #edf2f7; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; transition: background 0.3s; }
        .sr-step.active .sr-step-icon { background: #0084ff; }
        .sr-step-icon svg { width: 18px; height: 18px; stroke: #a0aec0; }
        .sr-step.active svg { stroke: #fff; }
        .sr-step-lbl { font-size: 12px; color: #718096; text-align: center; line-height: 1.4; font-weight: 500; }
        .sr-step.active .sr-step-lbl { color: #2d3748; font-weight: 600; }

        /* --- DETAILED TRACKING UPDATED STYLES --- */
        .sr-dropdown-trigger { 
            border: 1px solid #f0f0f0; border-radius: 10px; padding: 15px 20px; 
            cursor: pointer; display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;
        }
        .sr-dd-title { font-size: 13px; font-weight: 700; color: #1a1a1a; }
        .sr-dd-arrow { transition: 0.3s; font-size: 10px; color: #666; margin-left: 12px; }
        .sr-dd-arrow.open { transform: rotate(180deg); }

        .sr-detail-list { display: none; padding: 10px 5px 20px 5px;  font-size:12px; }
        .sr-detail-list.open { display: block; }
        
        .sr-act { display: flex; position: relative; padding-bottom: 30px; }
        .sr-act-left { position: relative; width: 40px; flex-shrink: 0; display: flex; justify-content: center; }
        
        /* VERTICAL LINE LOGIC */
        .sr-act-line { 
            position: absolute; left: 50%; top: 30px; bottom: -30px; width: 2.5px; 
            background: #e5e7eb; transform: translateX(-50%); z-index: 1;
        }
        .sr-act.completed .sr-act-line { background: #0084ff; }
        .sr-act:last-child .sr-act-line { display: none; }

        .sr-act-dot { 
            width: 30px; height: 30px; background: #f3f4f6; border-radius: 50%; 
            display: flex; align-items: center; justify-content: center; z-index: 2; position: relative;
        }
        .sr-act.completed .sr-act-dot { background: #0084ff; }
        
        .sr-act-dot svg { width: 15px; height: 15px; }
        .sr-act.completed .sr-act-dot svg { stroke: #fff; }
        .sr-act:not(.completed) .sr-act-dot svg { stroke: #9ca3af; }

        .sr-act-content { flex: 1; display: flex; justify-content: space-between; padding-left: 15px; padding-top: 4px;}
        .sr-act-info { flex: 1; }
        .sr-act-name { font-size: 13px; font-weight: 600; color: #111827; margin: 0 0 4px 0; }
        .sr-act:not(.completed) .sr-act-name { color: #6b7280; font-weight: 500; }
        
        .sr-act-loc { display: flex; align-items: center; gap: 6px; font-size: 11px; color: #6b7280; margin: 0 0 4px 0; font-weight: 400; }
        .sr-act-loc svg { width: 14px; height: 14px; color: #9ca3af; }
        
        .sr-act-date { font-size: 11px; color: #9ca3af; margin: 0; font-weight: 400; }
        .sr-act-time { font-size: 11px; color: #6b7280; font-weight: 400; margin-left: 20px; white-space: nowrap; }

        /* Footer */
        .sr-footer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; border-top: 1px solid #f0f0f0; padding-top: 24px;}
        .sr-f-box { background: #fbfbfb; padding: 15px; border-radius: 10px; }
        .sr-f-box h4 { margin: 0 0 10px 0; font-size: 13px; font-weight: 700; color: #1a1a1a; }
        .sr-f-box p { margin: 0; font-size: 12px; color: #666; line-height: 1.5; }
        .sr-modal-footer { padding: 15px 24px; text-align: right; border-top: 1px solid #f0f0f0; }
        .sr-btn-close { padding: 8px 30px; border: 1px solid #ddd; border-radius: 8px; background: #fff; cursor: pointer; font-size: 13px; font-weight: 600; }
    `;

    // Progression logic
    const activeIdx = getProgressIndex(data);
const fillWidths = [0, 25, 50, 75];
const currentFill = fillWidths[activeIdx];

    // Marking ALL steps as completed as per instructions
   const activitiesHTML = data.activities.map((act, i) => {
    const isCompleted = true; 
    // Check if this is the very last item in the list
    const isLast = i === data.activities.length - 1;

    const getStepIcon = (index) => {
        if (index === 0) return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`;
        if (index <= 2) return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>`;
        if (index === 3) return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>`;
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path></svg>`;
    };

    const locationIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>`;

    return `
        <div class="sr-act ${isCompleted ? 'completed' : ''}">
            <div class="sr-act-left">
                <!-- Logic: Only display the line if it's NOT the last item -->
                <div class="sr-act-line" style="display: ${isLast ? 'none' : 'block'} !important;"></div>
                <div class="sr-act-dot">
                    ${getStepIcon(i)}
                </div>
            </div>
            <div class="sr-act-content">
                <div class="sr-act-info">
                    <p class="sr-act-name">${act["sr-status-label"]}</p>
                    <p class="sr-act-loc">${locationIcon} ${act.location}</p>
                    <p class="sr-act-date">${act.dateString || act.date}</p>
                </div>
                <span class="sr-act-time">${act.time || ''}</span>
            </div>
        </div>
    `;
}).join('');

    overlay.innerHTML = `
        <div class="sr-modal-box">
            <div class="sr-modal-header">
                <h2>Track Order - ${data.orderID}</h2>
                <button class="sr-close-x" onclick="document.getElementById('sr-modal-overlay').remove()">×</button>
            </div>
            <div class="sr-modal-content">
               <div class="sr-delivery-card">
                   <span class="sr-est-lbl">${data.label}</span>
                    <div class="sr-date-section">
                       <div class="sr-big-date">${data.day}</div>
                        <div class="sr-date-info">
                           <div class="day">${data.weekday}</div>
                            <div class="month">${data.monthYear}</div>
                        </div>
                    </div>
                    ${!data.isDelivered ? `
<div class="sr-days-left-box">
  <span class="sr-days-num">${data.daysLeft}</span>
  <span class="sr-days-lbl">days left</span>
</div>
` : ``}

                    <div class="sr-tracking-row">
                        <span class="sr-tr-label">Tracking Number</span>
                       <a 
  class="sr-awb-pill"
  href="${data.trackUrl}"
  target="_blank"
  rel="noopener noreferrer"
>
  ${data.awb}
</a>

                    </div>
                </div>

                <div class="sr-prog-header">
                    <span class="sr-prog-title">Package Progress</span>
                    <span class="sr-prog-track-num">Tracking: ${data.awb}</span>
                </div>
                
                <div class="sr-prog-container">
                    <div class="sr-steps-wrapper">
                        <div class="sr-line-bg"></div>
                        <div class="sr-line-fill" style="width: ${currentFill}%"></div>
                        <div class="sr-steps">
                            <div class="sr-step active">
                                <div class="sr-step-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                </div>
                                <div class="sr-step-lbl">Order<br>Placed</div>
                            </div>
                            <div class="sr-step ${activeIdx >= 1 ? 'active' : ''}">
                                <div class="sr-step-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 2 2 4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>
                                </div>
                                <div class="sr-step-lbl">Processing</div>
                            </div>
                            <div class="sr-step ${activeIdx >= 2 ? 'active' : ''}">
                                <div class="sr-step-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
                                </div>
                                <div class="sr-step-lbl">Shipped</div>
                            </div>
                            <div class="sr-step ${activeIdx >= 3 ? 'active' : ''}">
                                <div class="sr-step-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                                </div>
                                <div class="sr-step-lbl">Delivered</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sr-dropdown-trigger" onclick="const b=document.getElementById('sr-details-body'); const a=this.querySelector('.sr-dd-arrow'); b.classList.toggle('open'); a.classList.toggle('open');">
                    <div class="sr-dd-title">
                        Detailed Tracking <span style="font-weight:400; color:#718096; margin-left:5px"></span>
                    </div>
                    <div style="display:flex; align-items:center;">
                       <a 
  href="${data.trackUrl}"
  target="_blank"
  rel="noopener noreferrer"
  style="color:#111827; font-size:13px; text-decoration:none; font-weight:600; margin-right:5px; display:flex; align-items:center;"
>

                            Track 
                            <svg style="margin-left:6px;" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                        </a>
                        <span class="sr-dd-arrow">▼</span>
                    </div>
                </div>

                <div class="sr-detail-list open" id="sr-details-body">
                    ${activitiesHTML}
                </div>

                <div class="sr-footer-grid">
                    <div class="sr-f-box">
                        <h4>Shipping Address</h4>
                        <p>${data.consignee}<br>${data.destination}<br>United States</p>
                    </div>
                    <div class="sr-f-box">
                        <h4>Shipping Details</h4>
                        <p>Carrier: ${data.carrier}<br>Weight: ${data.weight} lbs</p>
                    </div>
                </div>
            </div>
            <div class="sr-modal-footer">
                <button class="sr-btn-close" onclick="document.getElementById('sr-modal-overlay').remove()">Close</button>
            </div>
        </div>
    `;

    document.body.appendChild(style);
    document.body.appendChild(overlay);
}

window.toggleDetails = function(el) {
    const list = document.getElementById('sr-details-body');
    const arrow = el.querySelector('.sr-dd-arrow');
    const isOpen = list.classList.toggle('open');
    arrow.classList.toggle('open', isOpen);
};


function getReturnSettingValue(settingKey, sectionKey, orderData, returnSettings) {
  // Navigate to the correct part of the settings object (e.g., 'general settings')
  const settingsSection = returnSettings?.return?.[sectionKey];
  if (!settingsSection) return null;

  const isRegionalEnabled = settingsSection.enabled_regional === true;
  const customerCountry = orderData?.shippingAddress?.country;

  // 1. Check for a regional setting first
  if (isRegionalEnabled && customerCountry) {
    const regionalValue = settingsSection.regional?.[customerCountry]?.[settingKey];
    // If a value is found (even if it's `false` or `0`), use it.
    if (regionalValue !== undefined) {
      return regionalValue;
    }
  }

  // 2. Fall back to the global setting
  const globalValue = settingsSection.global?.[settingKey];
  return globalValue !== undefined ? globalValue : null;
}

function createReturnStatusBox(returnInfo) {
    if (!returnInfo || !returnInfo.status) {
        return '';
    }

    console.log("ReturnInfo", returnInfo);
    const itemsInThisRequest = [
        ...(returnInfo.order_details?.returned_items || []),
        ...(returnInfo.order_details?.exchanged_items || []),
        ...(returnInfo.order_details?.replaced_items || [])
    ];

    // Generate the HTML for the list of items.
    const itemsListHTML = itemsInThisRequest.length > 0 ? `
        <div class="Axentra-returnSatus-detail-item Axentra-items-in-request">
            <div class="Axentra-returnSatus-detail-label">Items in this Request:</div>
            <div class="Axentra-returnSatus-detail-value">
                <ul class="Axentra-items-list">
                    ${itemsInThisRequest.map(item => `<li>${item.title || 'Unknown Item'} (Qty: ${item.quantity})</li>`).join('')}
                </ul>
            </div>
        </div>
    ` : '';

    let config = {};
    
    const status = returnInfo.status.toLowerCase();
    const queryType = returnInfo.query_type?.toLowerCase();
    const approvedIcon = `<svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`;
    
    console.log("Normalized status:", status);

    // Configure UI elements based on the return status
    switch (status) {
        // --- General Statuses (Return, Exchange, or Replacement) ---
        case 'pending': {
            let typeText = 'Return';
            if (queryType === 'exchaged') typeText = 'Exchange';
            if (queryType === 'replaced') typeText = 'Replacement';
            config = {
                icon: `<svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                title: `${typeText} Request Pending`,
                description: `Your ${typeText.toLowerCase()} request is being reviewed and will be confirmed soon.`,
                statusPill: 'Pending Review',
                boxClass: 'Axentra-returnSatus-box-pending'
            };
            break;
        }
        case 'approved': {
            let typeText = 'Return';
            if (queryType === 'exchaged') typeText = 'Exchange';
            if (queryType === 'replaced') typeText = 'Replacement';
            config = {
                icon: approvedIcon,
                title: `${typeText} Approved & Processing`,
                description: `Your ${typeText.toLowerCase()} has been approved and processing has started.`,
                statusPill: null,
                boxClass: 'Axentra-returnSatus-box-approved'
            };
            break;
        }
        case 'rejected': {
            let typeText = 'Return';
            if (queryType === 'exchaged') typeText = 'Exchange';
            if (queryType === 'replaced') typeText = 'Replacement';
            config = {
                icon: `<svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>`,
                title: `${typeText} Request Denied`,
                description: `Your ${typeText.toLowerCase()} request was denied. Contact support for more info.`,
                statusPill: null,
                boxClass: 'Axentra-returnSatus-box-denied'
            };
            break;
        }

        // --- Return & Refund Statuses ---
        case 'return initiated':
            config = { icon: approvedIcon, title: 'Return Initiated', description: 'Your return request has been initiated.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
        case 'return picked up':
            config = { icon: approvedIcon, title: 'Return Picked Up', description: 'Your return item has been picked up.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
        case 'return completed':
            config = { icon: approvedIcon, title: 'Return Completed', description: 'Your return request has been completed.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
        case 'refund initiated':
            config = { icon: approvedIcon, title: 'Refund Initiated', description: 'Your refund has been initiated.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
        case 'refund completed':
            config = { icon: approvedIcon, title: 'Refund Completed', description: 'Your refund has been completed.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
            
        // --- Exchange Statuses ---
        case 'exchange request placed':
            config = { icon: approvedIcon, title: 'Exchange Request Placed', description: 'Your exchange has been placed.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
        case 'exchange initiated':
            config = { icon: approvedIcon, title: 'Exchange Initiated', description: 'Your exchange has been initiated.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
        case 'exchange approved':
            config = { icon: approvedIcon, title: 'Exchange Approved', description: 'Return Approved & Processing.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
        case 'old product pickup initiated':
            config = { icon: approvedIcon, title: 'Old Product Pickup Initiated', description: 'Your old product pickup has been initiated.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
        case 'new product delivery initiated':
            config = { icon: approvedIcon, title: 'New Product Delivery Initiated', description: 'Your new product delivery has been initiated.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
        case 'old product pickup successful':
            config = { icon: approvedIcon, title: 'Old Product Pickup Successful', description: 'Your old product has been picked up.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
        case 'new product delivered successful':
            config = { icon: approvedIcon, title: 'New Product Delivered Successful', description: 'Your new product has been delivered successfully.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
        case 'exchange successful':
            config = { icon: approvedIcon, title: 'Exchange Completed', description: 'Your exchange has been completed.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;

        // --- NEW: Specific Replacement Statuses ---
        case 'replace initiated':
            config = { icon: approvedIcon, title: 'Replacement Initiated', description: 'Your replacement has been initiated.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
        case 'old product pickup initiated for replacement':
            config = { icon: approvedIcon, title: 'Old Product Pickup Initiated for Replacement', description: 'Pickup for your original item has been scheduled.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
        case 'new product delivery initiated for replacement':
            config = { icon: approvedIcon, title: 'New Product Delivery Initiated for Replacement', description: 'Your new replacement item is on its way.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
        case 'old product pickup successful for replacement':
            config = { icon: approvedIcon, title: 'Old Product Pickup Successful', description: 'We have successfully received your original item.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
        case 'new product delivered successful for replacement':
            config = { icon: approvedIcon, title: 'New Product Delivered', description: 'Your replacement item has been successfully delivered.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;
        case 'replace successful':
            config = { icon: approvedIcon, title: 'Replacement Successful', description: 'Your replacement process has been completed.', statusPill: null, boxClass: 'Axentra-returnSatus-box-approved' };
            break;

        default:
            // If no match, return nothing to avoid showing an empty box
            return '';
    }

    const returnDate = returnInfo.created_at
        ? new Date(returnInfo.created_at).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
        })
        : 'N/A';

        // --- Determine the reason for the return/exchange/replacement ---
    let reason = 'N/A';
    if (returnInfo.description) {
        const desc = returnInfo.description;
        // The reason is often nested within an array corresponding to the request type.
        // We'll grab the reason from the first item in the relevant array.
        const replacementItems = desc.replacement_items || [];
        const exchangeItems = desc.exchanged_items || [];
        const returnItems = desc.returned_items || [];

        if (replacementItems.length > 0 && replacementItems[0].reason) {
            reason = replacementItems[0].reason;
        } else if (exchangeItems.length > 0 && exchangeItems[0].reason) {
            reason = exchangeItems[0].reason;
        } else if (returnItems.length > 0 && returnItems[0].reason) {
            reason = returnItems[0].reason;
        } else if (desc.reason) { // Fallback for a simpler, non-nested structure
            reason = desc.reason;
        }
    }

    // --- Detail section ---
    let detailLinesHTML = `
        <div class="Axentra-returnSatus-detail-item">
            <div class="Axentra-returnSatus-detail-label">Request Date:</div>
            <div class="Axentra-returnSatus-detail-value">${returnDate}</div>
        </div>
        <div class="Axentra-returnSatus-detail-item">
            <div class="Axentra-returnSatus-detail-label">Reason:</div>
            <div class="Axentra-returnSatus-detail-value">${reason}</div>
        </div>
    `;

    // Add tracking info if present
    if (returnInfo.tracking_url) {
        detailLinesHTML += `<div class="Axentra-returnSatus-detail-item">
            <div class="Axentra-returnSatus-detail-label">Tracking:</div>
            <div class="Axentra-returnSatus-detail-value">${returnInfo.tracking_url}</div>
            <a href="${returnInfo.tracking_url || '#'}" target="_blank" class="Axentra-returnSatus-track-link">
                <svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><polyline points="15 3 21 3 21 9" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><line x1="10" y1="14" x2="21" y2="3" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
                Track Return
            </a></div>`;
    }

    // Add support link if denial_reason or support_required is present
    if (returnInfo.denial_reason || returnInfo.support_required) {
        const denialText = returnInfo.denial_reason || "Need more assistance with your request?";
        detailLinesHTML += `<div class="Axentra-returnSatus-detail-item">
            <div class="Axentra-returnSatus-detail-label">Support:</div>
            <div class="Axentra-returnSatus-detail-value">${denialText}</div>
            <a href="/contact" class="Axentra-returnSatus-support-link">
                <svg class="xircls_svg" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><polyline points="15 3 21 3 21 9" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><line x1="10" y1="14" x2="21" y2="3" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
                Contact Support
            </a></div>`;
    }

    return `
        <div class="Axentra-returnSatus-box ${config.boxClass}">
            <div class="Axentra-returnSatus-header">
                <div class="Axentra-returnSatus-title-group">
                    <div class="Axentra-returnSatus-icon">${config.icon}</div>
                    <div class="Axentra-returnSatus-title">${config.title}</div>
                </div>
                ${config.statusPill ? `<div class="Axentra-returnSatus-pill">${config.statusPill}</div>` : ''}
            </div>
            <div class="Axentra-returnSatus-description">${config.description}</div>
            <div class="Axentra-returnSatus-details">
              ${itemsListHTML}
                ${detailLinesHTML}
            </div>
        </div>
    `;
}


function isOrderEligibleForReturn(order, returnSettings) {
    // --- TIME WINDOW CHECK ---
    const returnWindowDays = getReturnWindowForOrder(order, returnSettings); // Assumes getReturnWindowForOrder exists and handles regional logic
    
    if (returnWindowDays <= 0) {
        console.log(`Order ${order.orderNumber}: Ineligible for return because return window is 0 or not set.`);
        return false;
    }
    
    const orderDate = new Date(order.orderTime);
    const currentDate = new Date();
    const expirationDate = new Date(orderDate);
    expirationDate.setDate(expirationDate.getDate() + returnWindowDays);

    if (currentDate > expirationDate) {
        console.log(`Order ${order.orderNumber}: Ineligible for return because the window of ${returnWindowDays} days has expired.`);
        return false;
    }

    // --- PRODUCT EXCLUSION CHECK ---
    const exclusions = getReturnSettingValue('exclude', 'general settings', order, returnSettings); // Assumes getReturnSettingValue exists
    if (!exclusions) {
        console.log(`Order ${order.orderNumber}: Time window is valid and no exclusion rules found. Order is eligible for return.`);
        return true;
    }

    const items = order.items || [];
    for (const item of items) {
        const nameLower = (item.name || "").toLowerCase();

        if (exclusions['sale/discounted'] === true && item.discount_allocations && item.discount_allocations.length > 0) {
            console.log(`Order ${order.orderNumber}: Ineligible for return due to discounted item: ${item.name}`);
            return false;
        }
        if (exclusions['gift cards'] === true && nameLower.includes('gift card')) {
            console.log(`Order ${order.orderNumber}: Ineligible for return due to gift card item: ${item.name}`);
            return false;
        }
        if (exclusions['custom/personalized'] === true && (nameLower.includes('custom') || nameLower.includes('personalized'))) {
            console.log(`Order ${order.orderNumber}: Ineligible for return due to custom/personalized item: ${item.name}`);
            return false;
        }
    }

    console.log(`Order ${order.orderNumber}: Time window is valid and all items passed return exclusion checks. Order is eligible.`);
    return true;
}


function isOrderEligibleForExchange(order, settings) {
    if (!settings?.exchange?.basic_settings) {
        return false;
    }
    const exchangeConfig = settings.exchange.basic_settings;
    const eligibilityConfig = exchangeConfig.price_eligibilty;
    if (!eligibilityConfig) return true;

    // 1. Check Minimum Order Value
    const minVal = parseFloat(eligibilityConfig.minimum_value);
    const rawTotal = order.totalPrice || '';
    const match = rawTotal.match(/[\d,.]+/);
    const cleanedTotal = match ? parseFloat(match[0].replace(/,/g, '')) : NaN;
    if (!isNaN(minVal) && !isNaN(cleanedTotal) && cleanedTotal < minVal) {
        console.log(`Order ${order.orderNumber} ineligible for exchange: Fails minimum value check.`);
        return false;
    }

    // 2. Check for Excluded Items
    const exclusions = eligibilityConfig.exclude;
    if (exclusions) {
        for (const item of order.items) {
            if (exclusions['sale/discounted'] && item.discountAllocations && item.discountAllocations.length > 0) {
                 console.log(`Order ${order.orderNumber} ineligible for exchange: Contains a sale item.`);
                return false;
            }
            const productType = (item.productType || '').toLowerCase();
            if (exclusions['gift cards'] && productType.includes('gift card')) {
                 console.log(`Order ${order.orderNumber} ineligible for exchange: Contains a gift card.`);
                return false;
            }
            if (exclusions['custom/personalized'] && (productType.includes('custom') || productType.includes('personalized'))) {
                 console.log(`Order ${order.orderNumber} ineligible for exchange: Contains a custom item.`);
                return false;
            }
        }
    }

    // 3. Check Exchange Window
    const exchangeWindowDays = parseInt(exchangeConfig.exchange_window, 10);
    if (isNaN(exchangeWindowDays) || exchangeWindowDays <= 0) {
        console.log(`Order ${order.orderNumber}: Ineligible for exchange because exchange window is invalid or 0 days.`);
        return false;
    }
    const orderDate = new Date(order.orderTime);
    const currentDate = new Date();
    const expirationDate = new Date(orderDate);
    expirationDate.setDate(expirationDate.getDate() + exchangeWindowDays);
    if (currentDate > expirationDate) {
        console.log(`Order ${order.orderNumber}: Ineligible for exchange because the window of ${exchangeWindowDays} days has expired.`);
        return false;
    }

    console.log(`Order ${order.orderNumber}: All eligibility checks passed for exchange.`);
    return true;
}


function isOrderEligibleForReplacement(order, settings) {
    // Check if the main replacement module is enabled in settings
    if (!settings?.replacement?.is_enable) {
        console.log(`Order ${order.orderNumber}: Ineligible for replacement because the replacement module is disabled.`);
        return false;
    }

    const basicSettings = settings.replacement.basic_settings;
    if (!basicSettings) {
        console.log(`Order ${order.orderNumber}: Ineligible for replacement due to missing basic settings.`);
        return false;
    }

    // 1. Check Time Window
    const replacementWindowDays = parseInt(basicSettings.replacement_window, 10);
    if (isNaN(replacementWindowDays) || replacementWindowDays <= 0) {
        console.log(`Order ${order.orderNumber}: Ineligible for replacement because replacement window is invalid or 0 days.`);
        return false;
    }
    const orderDate = new Date(order.orderTime);
    const currentDate = new Date();
    const expirationDate = new Date(orderDate);
    expirationDate.setDate(expirationDate.getDate() + replacementWindowDays);
    if (currentDate > expirationDate) {
        console.log(`Order ${order.orderNumber}: Ineligible for replacement because the window of ${replacementWindowDays} days has expired.`);
        return false;
    }

    // 2. Check Product Eligibility (Minimum Value & Exclusions)
    const eligibilityConfig = basicSettings.product_eligibility;
    if (eligibilityConfig) {
        // Check Minimum Order Value
        const minVal = parseFloat(eligibilityConfig.minimum_value);
        const rawTotal = order.totalPrice || '';
        const match = rawTotal.match(/[\d,.]+/);
        const cleanedTotal = match ? parseFloat(match[0].replace(/,/g, '')) : NaN;

        if (!isNaN(minVal) && !isNaN(cleanedTotal) && cleanedTotal < minVal) {
            console.log(`Order ${order.orderNumber} ineligible for replacement: Fails minimum value check (${cleanedTotal} < ${minVal}).`);
            return false;
        }

        // Check for Excluded Items
        const exclusions = eligibilityConfig.exclude;
        if (exclusions) {
            for (const item of order.items) {
                if (exclusions['sale/discounted'] === true && item.discountAllocations && item.discountAllocations.length > 0) {
                    console.log(`Order ${order.orderNumber} ineligible for replacement: Contains a discounted item.`);
                    return false;
                }
                const nameLower = (item.name || "").toLowerCase();
                if (exclusions['gift cards'] === true && nameLower.includes('gift card')) {
                    console.log(`Order ${order.orderNumber} ineligible for replacement: Contains a gift card.`);
                    return false;
                }
                if (exclusions['custom/personalized'] === true && (nameLower.includes('custom') || nameLower.includes('personalized'))) {
                    console.log(`Order ${order.orderNumber} ineligible for replacement: Contains a custom item.`);
                    return false;
                }
            }
        }
    }
    
    console.log(`Order ${order.orderNumber}: All eligibility checks passed for replacement.`);
    return true; // If all checks pass
}
let timerInterval = null;
function startCancellationTimers() {
 
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  timerInterval = setInterval(() => {
    const timerElements = document.querySelectorAll('.Axentra-Cancel-timer');
    if (timerElements.length === 0) {
      clearInterval(timerInterval);
      timerInterval = null; 
      return;
    }
    const now = new Date(); 
    timerElements.forEach(timerEl => {
      const deadline = new Date(timerEl.dataset.deadline);
      const remainingMilliseconds = deadline - now;

      if (remainingMilliseconds <= 0) {
        const statusBox = timerEl.closest('.Axentra-Cancel-status-box--available');
        if (statusBox) {
            const mainText = statusBox.querySelector('.Axentra-Cancel-main-text');
            if (mainText) mainText.textContent = "Cancellation not available";
            const subText = statusBox.querySelector('.Axentra-Cancel-sub-text');
            if (subText) subText.textContent = "The time window for cancellation has passed.";
            statusBox.classList.remove('Axentra-Cancel-status-box--available');
            statusBox.classList.add('Axentra-Cancel-status-box--unavailable');
        }
        timerEl.classList.remove('Axentra-Cancel-timer');
        const orderRow = statusBox.closest('tr'); 
        if (orderRow) {
            const cancelButton = orderRow.querySelector('.omc-cancel-order-text:not(.cancel-disabled)');
            if (cancelButton && !cancelButton.matches('.view-order-details-link, .reorder-btn, .omc-track-order-link')) {
                 cancelButton.classList.add('cancel-disabled');
                 cancelButton.style.cssText = 'color: gray; pointer-events: none; cursor: default; display: inline-flex; align-items: center;';
                 cancelButton.setAttribute('title', 'Cancellation is not available for this order.');
                 cancelButton.removeAttribute('onClick');
            }
        }
      } else {
        const hours = Math.floor(remainingMilliseconds / 3600000);
        const minutes = Math.floor((remainingMilliseconds % 3600000) / 60000);
        const seconds = Math.floor((remainingMilliseconds % 60000) / 1000);
        timerEl.textContent = `${hours}h ${minutes}m ${seconds}s`;
      }
    });
  }, 1000);
}
function generateCancellationStatusBoxHTML({
  isAlreadyCancelled,
  cancelBtnDisabled,
  timeLimitMinutes,
  orderCreationUTC,
  currentTimeUTC,
  orderId,
  apiAllowedCancelStatus
}) {
  // If the order is already cancelled, don't show any status box.
  if (isAlreadyCancelled ) {
    return '';
  }
console.log(timeLimitMinutes, "timeLimitMinutes")
  const warningIconSVG = `<svg class="Axentra-Cancel-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>`;

  // Check if the conditions are met to show the countdown timer.
  if (!cancelBtnDisabled && timeLimitMinutes !== null) {
    const deadline = new Date(orderCreationUTC.getTime() + timeLimitMinutes * 60 * 1000);
    const remainingMilliseconds = deadline - currentTimeUTC;

    if (remainingMilliseconds > 0) {
      // --- CANCELLATION IS CURRENTLY AVAILABLE ---
      const hours = Math.floor(remainingMilliseconds / 3600000);
      const minutes = Math.floor((remainingMilliseconds % 3600000) / 60000);
      const seconds = Math.floor((remainingMilliseconds % 60000) / 1000);
      const initialTimeStr = `${hours}h ${minutes}m ${seconds}s`;

      return `
        <div class="Axentra-Cancel-status-box Axentra-Cancel-status-box--available">
          ${warningIconSVG}
          <div class="Axentra-Cancel-text-wrapper">
            <div class="Axentra-Cancel-main-text">
  <span class="Axentra-Cancel-title">Cancellation available</span>
 <svg class="Axentra-Cancel-icon1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
  <time class="Axentra-Cancel-timer" id="cancel-timer-${orderId}" data-deadline="${deadline.toISOString()}">${initialTimeStr}</time>
</div>

            <span class="Axentra-Cancel-sub-text">Until ${apiAllowedCancelStatus} status or time expires</span>
          </div>
        </div>`;
    }
  }

  // --- CANCELLATION IS NOT AVAILABLE (either from the start or because time expired) ---
const timeLimitHours = timeLimitMinutes
  ? `${Math.floor(timeLimitMinutes / 60) > 0 ? `${Math.floor(timeLimitMinutes / 60)} hours` : ''}${
      timeLimitMinutes % 60 > 0 ? `${timeLimitMinutes % 60} minutes` : ''
    }`.trim()
  : 'the time limit';

console.log("timeLimitHours", timeLimitHours)
  const subText = `Order cannot be cancelled after ${apiAllowedCancelStatus} status or ${timeLimitHours} have passed.`;

  return `
    <div class="Axentra-Cancel-status-box Axentra-Cancel-status-box--unavailable">
      ${warningIconSVG}
      <div class="Axentra-Cancel-text-wrapper1">
        <div class="Axentra-Cancel-main-text">  <span class="Axentra-Cancel-title1">Cancellation not available : </span></div>
        <span class="Axentra-Cancel-sub-text1">${subText}</span>
      </div>
    </div>`;
}

async function createTable(data, tableType, overlay) {
  window.exchangeSettings = exchangeSettings;
  window.allReturnDetails = allReturnDetails;

  console.log(data, tableType, "table creating.............");
  const tableContainer = document.createElement("div");
  tableContainer.className = "omc-table-container";

  const table = document.createElement("table");
  table.className = "omc-custom-table";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  let cancelMapping = null;
  let editModuleGeneralSettings = null; 
  let exchangeSettings = null;
  let returnSettings = null;
  let replacementSettings = null; // ADDED: Variable for replacement settings
  let returnStatusMap = new Map();
 let allReturnDetails = [];
  if (tableType === "wishlist") {
      headerRow.innerHTML = `
        <th>Product</th>
        <th>Added On</th>
        <th>Price</th>
        <th>Actions</th>
      `;
  } else if (tableType === "orders") {
      const shop1 = Shopify.shop;
      const url1 = `https://omc.axentraos.co.in/utility/get_module_setting/?shop=${shop1}`;
      const returnAndExchangeUrl = `https://omc.axentraos.co.in/utility/get_settings/?shop=${shop1}`;
      
     if (customerId) {
        const returnDetailsUrl = `https://omc.axentraos.co.in/utility/exchange_return_details/?shop=${Shopify.shop}&customer_id=${customerId}`;
        try {
            const response = await fetch(returnDetailsUrl);
            if (!response.ok) throw new Error(`API error: ${response.status}`);
            
            const returnDetailsData = await response.json();
            const finalResp = returnDetailsData.exchange_details;

            if (Array.isArray(finalResp)) {
                allReturnDetails = finalResp;
                console.log('✅ All return details fetched into a single array:', allReturnDetails);
            } else {
                console.error('❌ Expected an array for return details but received:', finalResp);
            }
        } catch (error) {
            console.error('❌ Error fetching return details:', error);
        }
    }
      try {
          const response = await fetch(url1, { method: 'GET' });
          if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
          const apiData = await response.json();
          console.log("cancelapidata", apiData)
          const CancelData = apiData?.module_settings.find(m => m.module_name === 'Cancel Order')
          if (CancelData.module_json) {
              const moduleJson = CancelData.module_json;
              cancelMapping = {
                  cod_timelimit: moduleJson.cod_timelimit,
                  prepaid_timelimit: moduleJson.prepaid_timelimit,
                  order_status_cod: moduleJson.order_status_cod,
                  order_status_prepaid: moduleJson.order_status_prepaid
              };
              console.log("cancelMapping processed successfully from API:", cancelMapping);
          } else {
              console.warn('Cancel mapping data not found or in unexpected format.');
          }
      } catch (error) {
          console.error('❌ Error fetching API data for cancel settings:', error);
      } finally {
          if (!cancelMapping) cancelMapping = {}; 
          console.log('✅ Finished Cancel API call section. Final cancelMapping:', cancelMapping);
      }

      try {
          console.log(`Fetching Return/Exchange/Replacement settings for shop: ${shop1}`);
          const response = await fetch(returnAndExchangeUrl, { method: 'GET' });
          if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
          
          const apiData = await response.json();
          console.log("✅ Return/Exchange/Replacement settings fetched successfully:", apiData);

          if (apiData?.return_settings) {
              returnSettings = apiData.return_settings;
              console.log("✅ Return settings processed successfully:", returnSettings);
          } else {
              console.warn("Return settings not found in API response.");
          }
          if (apiData?.exchange_settings) {
              exchangeSettings = apiData.exchange_settings;
              console.log("✅ Exchange settings processed successfully:", exchangeSettings);
          } else {
              console.warn("Exchange settings not found in API response.");
          }
          // ADDED: Process Replacement Settings
          if (apiData?.replacement_settings) {
              replacementSettings = apiData.replacement_settings;
              console.log("✅ Replacement settings processed successfully:", replacementSettings);
          } else {
              console.warn("Replacement settings not found in API response.");
          }
      } catch (error) {
          console.error("❌ Error fetching return/exchange/replacement settings:", error);
      } 

      if (data.length > 0) {
          const representativeShopDomain = Shopify.shop;
          const moduleSettings = await getModuleSettings(representativeShopDomain); // Assumes getModuleSettings is defined elsewhere
          if (moduleSettings) {
              const updateAddressModule = moduleSettings.find(m => m.module_name === "update address");
              if (updateAddressModule?.is_enabled) {
                  const generalSettings = updateAddressModule.module_json?.edit_orders?.general_settings;
                  if (generalSettings?.is_enabled) {
                      editModuleGeneralSettings = generalSettings;
                      console.log("Edit module general settings found for table:", editModuleGeneralSettings);
                  }
              }
          }
      }

      headerRow.innerHTML = `
        <th class="order-table-headers order-table-headers-left">ORDER ID</th>
        <th class="order-table-headers">DATE</th>
        <th class="order-table-headers order-table-headers-left">STATUS</th>
        <th class="order-table-headers order-table-headers-left">TOTAL</th>
        <th class="order-table-headers order-table-headers-left">PAYMENT METHOD</th>
      `;
  }

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  tbody.style.position = "relative";

  if (tableType === "wishlist") {
      // ... (wishlist tbody generation - unchanged)
      data.forEach((item) => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td class="omc-product-cell">
                  <div class="omc-product-details">
                      <img src="${item.image}" alt="${item.name}" class="omc-product-image">
                      <a href="${item.url}" class="omc-product-name" target="_blank">${item.name}</a>
                  </div>
              </td>
              <td>${formatDate(item.dateAdded)}</td>
              <td>${item.price}</td>
              <td class="omc-action-buttons-cell">
                  <div class="omc-action-buttons">
                      <button class="omc-add-to-cart-btn" data-id="${item.id}" onclick="addToCart('${item.variants[0].id}', '${item.id}')" title='Add to Cart'>
                          Add to Cart
                      </button>
                      <button class="omc-buy-now-btn buy-now-btn" data-id="${item.id}" onclick="buyNow('${item.variants[0].id}', '${item.id}')" title='Buy Now'>Buy Now</button>
                      <button class="omc-delete-btn" data-id="${item.id}" onclick="removeFromWishlist('${item.id}')" title='Remove From Wishlist'>
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="xircls_svg2" width="16" height="16" viewBox="0 0 512 512" version="1.1">
    <title>cancel</title>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="work-case" fill="#000000" transform="translate(91.520000, 91.520000)">
            <polygon id="Close" points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48">

</polygon>
        </g>
    </g>
</svg>
                      </button>
                  </div>
              </td>
          `;
          tbody.appendChild(row);
      });
  } else if (tableType === "orders") {
    let subscriptionTimelineEnabled = false;

try {
    const timelineUrl = `https://api.subscriptions.axentraos.co.in/api/v1/platform/get_timeline/?shop=${Shopify.shop}`;
    const timelineResp = await fetch(timelineUrl);
    const timelineJson = await timelineResp.json();

    subscriptionTimelineEnabled = timelineJson?.data?.plugin_installed === true;

    console.log("Timeline Plugin Installed:", subscriptionTimelineEnabled);

} catch (error) {
    console.error("Error fetching timeline settings:", error);
}

    let subscriptionOrderBasedEnabled = false;

try {
    const subscriptionUrl = `https://api.subscriptions.axentraos.co.in/api/v1/shopify/get_ui_customization/?shop=${Shopify.shop}`;
    const subResp = await fetch(subscriptionUrl);
    const subJson = await subResp.json();

    subscriptionOrderBasedEnabled =
        subJson?.custom_json?.widgets?.order_based === true;

    console.log("Subscription Order Based Enabled:", subscriptionOrderBasedEnabled);

} catch (error) {
    console.error("Error fetching subscription UI settings:", error);
}
      data.forEach((order) => {
          const row = document.createElement("tr");
          const currentOrderStatusNormalized = (order.fulfillmentStatus || "").trim().toLowerCase();
          const isOrderFulfilled = currentOrderStatusNormalized === 'fulfilled';
          let isOrderDelivered = order.fulfillments?.some(f => (f.shipment_status || "").trim().toLowerCase() === 'delivered') || false;

          let displayStatus = isOrderDelivered ? 'Delivered' : (order.fulfillmentStatus || 'N/A');
          const fulfillmentId = `order-status-${displayStatus.replace(/\s+/g, '-').toLowerCase()}`;

          const orderCreationUTC = new Date(order.orderTime);
          const currentTimeUTC = new Date();
          const diffInMinutes = (currentTimeUTC - orderCreationUTC) / (1000 * 60);

          const isCOD = (order.paymentGateway || "").trim().toLowerCase() === "cod" || !order.paymentGateway?.trim();
          const rawTimeLimitFromAPI = isCOD ? cancelMapping.cod_timelimit : cancelMapping.prepaid_timelimit;
          console.log("rawtimelinecancel", rawTimeLimitFromAPI)
          let timeLimitMinutes = !isNaN(parseFloat(rawTimeLimitFromAPI)) ? parseFloat(rawTimeLimitFromAPI) : null;
           console.log("rawtimelinecancel1", timeLimitMinutes)
          const rawOrderStatusFromApi = isCOD ? cancelMapping.order_status_cod : cancelMapping.order_status_prepaid;
          const apiAllowedCancelStatus = (rawOrderStatusFromApi || "unfulfilled").trim().toLowerCase();
          const encodedOrderItems = encodeURIComponent(JSON.stringify(order.items));
          const isAlreadyCancelled = !!order.cancelledAt;
          const statusPreventsCancellation = apiAllowedCancelStatus !== "" && currentOrderStatusNormalized !== apiAllowedCancelStatus;
          const isOutsideTimeLimit = (timeLimitMinutes !== null) && (diffInMinutes > timeLimitMinutes);
          const cancelBtnDisabled = isAlreadyCancelled || statusPreventsCancellation || isOutsideTimeLimit;

          row.innerHTML = `
              <td class="order-table-data order-table-data-bold order-table-data-left">${order.orderNumber}</td>
              <td class="order-table-data order-table-data-left">${order.orderDate}</td>
              <td class="order-table-data order-table-data-left">${order.cancelledAt ? `<span class='omc-cancelled-text'>Cancelled</span>` : `<span id="${fulfillmentId}">${displayStatus}</span>`}</td>
              <td class="order-table-data order-table-data-bold order-table-data-left">${order.totalPrice}</td>
              <td class="order-table-data order-table-data-left">${order.paymentGateway || 'N/A'}</td>
          `;

          const actionDiv = document.createElement('tr');
          actionDiv.style.cssText = `display: table-row; border-bottom: 1px solid var(--axentra-card-border-color);`;

        const returnInfo = allReturnDetails.filter(detail => 
            String(detail.order_id) === String(order.orderId)
        );
        // --- END OF FILTERING ---
console.log(timeLimitMinutes, "timeLimitMinutes11")
 const cancellationStatusHTML = generateCancellationStatusBoxHTML({
              isAlreadyCancelled,
              cancelOrderData,
              cancelBtnDisabled,
              timeLimitMinutes,
              orderCreationUTC,
              currentTimeUTC,
              orderId: order.orderId,
              apiAllowedCancelStatus
          });

        // The rest of the logic remains exactly the same, as it's designed to work with an array.
        let initiatedVariantIds = new Set();
        let initiatedActionType = new Set();
        console.log("returnInfo", returnInfo);
        returnInfo.forEach(returnInfo => {
            const queryType = returnInfo?.query_type?.toLowerCase() || '';
            if (queryType.includes('return')) initiatedActionType.add('return');
            if (queryType.includes('exchage')) initiatedActionType.add('exchange'); // Handles API typo
             if (queryType.includes('replaced')) initiatedActionType.add('replacement');

            const allItems = [
                ...(returnInfo.order_details?.returned_items || []),
                ...(returnInfo.order_details?.exchanged_items || []),
                 ...(returnInfo.order_details?.replaced_items || [])
            ];
            allItems.forEach(item => {
                if (item.variant_id) {
                    initiatedVariantIds.add(item.variant_id);
                }
            });
        });
console.log("initiatedActionType", initiatedActionType)
        const allItemsInitiated = initiatedVariantIds.size >= order.items.length;
         const returnInfoArray = allReturnDetails.filter(detail =>
            String(detail.order_id) === String(order.orderId)
        );
console.log("allitemsinitiated", allItemsInitiated);
        // --- THE CRITICAL FIX IS HERE ---
        // 2. MAP & GENERATE: Loop over the array of requests. For each one, call
        //    createReturnStatusBox to generate its unique HTML. Join them all together.
        const allStatusBoxesHTML = returnInfoArray.map(singleRequest => 
            createReturnStatusBox(singleRequest)
        ).join('');
        // --- END OF FIX ---

          const encodedOrderString = encodeURIComponent(JSON.stringify(order));
          const encodedTrackSettingsString = encodeURIComponent(JSON.stringify(trackOrderSettings)); // Assumes trackOrderSettings is available
          const showTrackButton = !isAlreadyCancelled && currentOrderStatusNormalized !== 'unfulfilled';

          // --- Return Button Logic ---
         const encodedReturnSettingsString = returnSettings ? encodeURIComponent(JSON.stringify(returnSettings)) : '';
        const isReturnModuleEnabled = returnSettings?.return?.['is enabled'] === true;
        const isEligibleForReturnOverall = isOrderEligibleForReturn(order, returnSettings); // Assuming this checks general rules like time window
        const restrictUndeliveredForReturn = getReturnSettingValue('restrict undelivered', 'return settings', order, returnSettings) === true;
        let isEligibleByFulfillmentStatusForReturn = restrictUndeliveredForReturn ? isOrderDelivered : (isOrderFulfilled || isOrderDelivered);
        
        // Final visibility check for the Return button
        const showReturnButton = 
            !isAlreadyCancelled &&
            isReturnModuleEnabled &&
            isEligibleForReturnOverall &&
            isEligibleByFulfillmentStatusForReturn &&
            !allItemsInitiated && // Hide if all items are already handled
             (initiatedActionType.size === 0 || (initiatedActionType.size === 1 && initiatedActionType.has('return'))); // Hide if an exchange/replacement is in progress

        const encodedReturnInfoString = returnInfo ? encodeURIComponent(JSON.stringify(returnInfo)) : '';
        const returnButtonHTML = showReturnButton ? `
            <span onclick="openReturnModal('${encodedOrderString}', '${encodedReturnSettingsString}', '${encodedReturnInfoString}')" style="display: inline-flex; align-items: center; cursor: pointer;" class="Axentra-return-btn-color omc-cancel-order-text">
              <svg class="xircls_svg2" style="margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v.5a5 5 0 0 1-5 5H11"/></svg>
              Return
            </span>` : '';

          // --- Exchange Button Logic ---
          const encodedExchangeSettingsString = exchangeSettings ? encodeURIComponent(JSON.stringify(exchangeSettings)) : '';
          const isExchangeModuleEnabled = exchangeSettings?.exchange?.is_enabled === true;
          const isEligibleForExchange = isOrderEligibleForExchange(order, exchangeSettings);
          const restrictUndeliveredForExchange = exchangeSettings?.exchange?.basic_settings?.price_eligibilty?.item_condition?.exchange_restrictions?.undeliverd === true;
          let isEligibleByFulfillmentStatusForExchange = restrictUndeliveredForExchange ? isOrderDelivered : (isOrderFulfilled || isOrderDelivered);
        const isEligibleForExchangeOverall = isOrderEligibleForExchange(order, exchangeSettings);
          const showExchangeButton = !isAlreadyCancelled && isExchangeModuleEnabled && isEligibleForExchange && isEligibleByFulfillmentStatusForExchange && isEligibleForExchangeOverall && !allItemsInitiated &&    (initiatedActionType.size === 0 || (initiatedActionType.size === 1 && initiatedActionType.has('exchange')));
          const exchangeButtonHTML = showExchangeButton ? `
            <span onclick="openExchangeModal('${encodedOrderString}', '${encodedExchangeSettingsString}', '${encodedReturnInfoString}')" style="display: inline-flex; align-items: center; cursor: pointer;" class="Axentra-exchange-btn-color omc-cancel-order-text view-order-details-link">
              <svg class="xircls_svg2" style="margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
              Exchange
            </span>` : '';
          
          // --- REPLACEMENT BUTTON LOGIC (NEW) ---
          const encodedReplacementSettingsString = replacementSettings ? encodeURIComponent(JSON.stringify(replacementSettings)) : '';
          console.log("replacemennnt", encodedReplacementSettingsString)
          const isReplacementModuleEnabled = replacementSettings?.replacement?.is_enable === true;
          const isEligibleForReplacement = isOrderEligibleForReplacement(order, replacementSettings); // Uses the new function
          const restrictUndeliveredForReplacement = replacementSettings?.replacement?.advance_settings?.replacement_restrictions?.undeliverd === true;
          let isEligibleByFulfillmentStatusForReplacement = restrictUndeliveredForReplacement ? isOrderDelivered : (isOrderFulfilled || isOrderDelivered);
          const showReplacementButton = !isAlreadyCancelled && isReplacementModuleEnabled && isEligibleForReplacement && isEligibleByFulfillmentStatusForReplacement && !allItemsInitiated &&  (initiatedActionType.size === 0 || (initiatedActionType.size === 1 && initiatedActionType.has('replacement')));
          const replacementButtonHTML = showReplacementButton ? `
            <span onclick="openReplacementModal('${encodedOrderString}', '${encodedReplacementSettingsString}', '${encodedReturnInfoString}')" style="display: inline-flex; align-items: center; cursor: pointer;" class="Axentra-replace-btn-color omc-cancel-order-text view-order-details-link">
              <svg class="xircls_svg2" style="margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
              Replacement
            </span>` : '';

          // --- Edit Address Logic ---
          let canEditAddress = false;
          if (editModuleGeneralSettings) {
              const editTimeLimitMinutes = parseInt(editModuleGeneralSettings.edit_time, 10);
              if (!isNaN(editTimeLimitMinutes) && editTimeLimitMinutes > 0 && !order.cancelledAt) {
                  const requiredStatus = editModuleGeneralSettings.order_status?.toLowerCase();
                  if (requiredStatus && currentOrderStatusNormalized === requiredStatus) {
                      const deadline = new Date(new Date(order.orderTime).getTime() + editTimeLimitMinutes * 60 * 1000);
                      if (new Date() <= deadline) {
                          canEditAddress = true;
                      }
                  }
              }
          }
          const editAddressHTML = canEditAddress ? `
            <span style="display: inline-flex; align-items: center; cursor: pointer;" class="Axentra-edit-btn-color omc-edit-span"
              onclick="
      event.stopPropagation(); 
      if (typeof openEditShippingModal === 'function') {
        if (typeof overlay === 'undefined') {
          overlay = document.createElement('div');
          overlay.className = 'modal-overlay';
          document.body.appendChild(overlay);
          
        }
        openEditShippingModal(
          '${encodeURIComponent(JSON.stringify(order.shippingAddress))}',
          '${encodeURIComponent(JSON.stringify(order.orderNumber))}',
          '${encodeURIComponent(JSON.stringify(order.orderId))}',
          '${encodeURIComponent(JSON.stringify(order.customerDetails))}',
          overlay,
          '${Shopify.shop}'
        );
      } else {
        console.error('openEditShippingModal function is not defined.');
      }
    ">
              <svg class="xircls_svg3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" style="margin-right: 8px;" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>
              Edit
            </span>` : '';

          actionDiv.innerHTML = `
              <td colspan="5" class="order-table-data order-table-data-left omc-order-actions">
                <div class="omc-actions-wrapper">
                  <span style="display: inline-flex; align-items: center;" class="Axentra-view-btn-color omc-cancel-order-text view-order-details-link" onClick="viewOrderDetails('${encodedOrderString}')">
                    <svg class="xircls_svg2" style="margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>View
                  </span>
                  <span style="display: inline-flex; align-items: center;" class="Axentra-reorder-btn-color reorder-btn omc-cancel-order-text" data-order='${encodedOrderItems}'>
                    <svg class="xircls_svg2" style="margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>Re-order
                  </span>
                ${subscriptionOrderBasedEnabled && subscriptionTimelineEnabled ? `
<span style="display: inline-flex; align-items: center;" 
      class="Axentra-view-btn-color omc-cancel-order-text view-order-details-link" 
      onClick="subscribeOrder('${encodedOrderString}')">

    <svg class="xircls_svg2" style="margin-right: 8px;" width="16" height="16"
         viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
         <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
         <path d="M12 22V12"></path>
         <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
         <path d="m7.5 4.27 9 5.15"></path>
    </svg>
    Subscribe
</span>
` : ""}


                  ${trackOrderData ? `
                     ${showTrackButton ? `<span style="display: inline-flex; align-items: center;" onclick="openTrackOrderModal('${encodedOrderString}', '${encodedTrackSettingsString}');" class="omc-track-order-link Axentra-track-btn-color">
                    <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg2" style="margin-right: 8px;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>Track
                  </span>` : ""}
                    ` : ""}
                 
                  ${editAddressHTML}

                  ${returnOrderData ? `
                  ${returnButtonHTML} 
                     ` : ""}

                  ${exchangeOrderData ? `
                      ${exchangeButtonHTML}
                    ` : ""}
                ${replacementOrderData ? `
                  ${replacementButtonHTML} <!-- REPLACED hardcoded span with dynamic variable -->
                     ` : ""}
                  ${cancelOrderData ? `
  ${!isAlreadyCancelled ? `
    <span class="Axentra-cancel-btn-color omc-cancel-order-text ${cancelBtnDisabled ? 'cancel-disabled' : ''}"
      ${cancelBtnDisabled 
        ? 'style="color: gray; pointer-events: none; cursor: default; display: inline-flex; align-items: center;" title="Cancellation not available"' 
        : `style="display: inline-flex; align-items: center;" onClick="cancelOrder('${order.orderId}', '${order.orderNumber}')"`
      } 
      title="${cancelBtnDisabled ? 'Cancellation is not available for this order.' : 'Cancel Order'}">
      <svg class="xircls_svg2" style="margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m15 9-6 6"></path>
        <path d="m9 9 6 6"></path>
      </svg>
      Cancel
    </span>
  ` : ""}
  ${cancellationStatusHTML}
` : ""}

                   ${allStatusBoxesHTML}
                </div>
              </td>`;

          tbody.appendChild(row);
          tbody.appendChild(actionDiv);
          row.classList.add("order-table-row");
      });
  }

  table.appendChild(tbody);
  tableContainer.appendChild(table);

  return table; 
}
async function createTableWithPagination(data, tableType, itemsPerPage = 4) {
  let currentPage = 1;
  let filteredData = data; // Initially, filtered data is all the data

  const tableContainer = document.createElement("div");
  tableContainer.className = "omc-table-container";

  // Create a container for the table header and search box
  const headerContainer = document.createElement("div");
  headerContainer.className = "omc-table-header";

  const titleDescContainer = document.createElement("div");
  titleDescContainer.className = "omc-table-heading";

  const allOrdersTitle = document.createElement("div");
  allOrdersTitle.innerText = "All Orders";
  allOrdersTitle.classList.add("allorders-table-text");

  const allOrdersDescription = document.createElement("div");
  allOrdersDescription.innerText = "Manage and track your orders here.";

  // Search
  const searchInputDiv = document.createElement("div");
  searchInputDiv.className = "omc-search-box";
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search orders...";
  searchInput.className = "omc-search-input";
  const svgString = `<svg class="xircls_svg" style="position: absolute; right: 16px; height: 16px; width: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>`;

  const searchIcon = document.createElement('div');
  searchIcon.innerHTML = svgString;

  let debounceTimer;

  searchInput.addEventListener("keyup", function (event) {
      const searchTerm = event.target.value.toLowerCase();
  
      clearTimeout(debounceTimer);
  
      debounceTimer = setTimeout(() => {
          filteredData = data.filter((order) => {
              const orderNumber = String(order.orderNumber).toLowerCase();
              return orderNumber.includes(searchTerm);
          });
  
          currentPage = 1;
          renderPage(currentPage);
      }, 1000); // 300ms delay
  });

  searchInputDiv.appendChild(searchInput);
  const svgElement = searchIcon.firstChild;  // This gets the <svg> tag

searchInputDiv.appendChild(svgElement);


  titleDescContainer.appendChild(allOrdersTitle);
  headerContainer.appendChild(titleDescContainer);
  headerContainer.appendChild(searchInputDiv);

  // Create a container for the table only
  const contentWrapper = document.createElement("div");
  contentWrapper.className = "content-wrapper";
  contentWrapper.classList.add("table-scrollable-wrapper");

  // Create pagination controls - initialize outside the render
  const paginationDiv = document.createElement("div");
  paginationDiv.className = "omc-pagination-controls";

  const renderPage = async (page) => {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const currentPageData = filteredData.slice(start, end);
      const totalPages = Math.ceil(filteredData.length / itemsPerPage);

      // Clear existing table and controls
      contentWrapper.innerHTML = "";
      paginationDiv.innerHTML = "";

      // Generate the table for the current page
      const table = await createTable(currentPageData, tableType);
      table.id = "my-orders-table-id"; //added to add responsiveness
      contentWrapper.appendChild(table);
      attachReorderEventListeners();
      // Create pagination controls again, to display current state
      const prevButton = document.createElement("button");
      prevButton.innerText = "Previous";
      prevButton.disabled = page === 1;
      prevButton.className = "omc-pagination-button";
      
      prevButton.onclick = () => {
          currentPage--;
          renderPage(currentPage);
      };

      const nextButton = document.createElement("button");
      nextButton.innerText = "Next";
      nextButton.disabled = page === totalPages;
      nextButton.className = "omc-pagination-button";

      nextButton.onclick = () => {
          currentPage++;
          renderPage(currentPage);
      };

      const buttonDiv = document.createElement("div");
      const pageInfo = document.createElement("span");
      pageInfo.innerText = `  Showing ${page} of ${totalPages} results `;
      pageInfo.classList.add("pagination-text-table");

      // Assemble pagination controls section
      paginationDiv.appendChild(pageInfo); // Moved to the left
      buttonDiv.appendChild(prevButton);
      buttonDiv.appendChild(nextButton);
      paginationDiv.appendChild(buttonDiv);
  };

  // Initial render
  renderPage(currentPage);
  tableContainer.style.textAlign = "center";
  tableContainer.appendChild(headerContainer);
  const headerHr = document.createElement("hr");
  headerHr.style.margin = "0px";
  headerHr.style.backgroundColor = "#eeeeee";
  tableContainer.appendChild(headerHr);
  tableContainer.appendChild(contentWrapper); // Table goes in this section
  tableContainer.appendChild(paginationDiv); // Controls, after
startCancellationTimers()
  return tableContainer;
}
async function addToWishlistHandler(item) {
    if (!item || !item.id) {
        console.error("Invalid item passed to addToWishlistHandler");
        createStatusToast("Wishlist Update Failed", "We couldn’t update your wishlist. Please try again.", "error");
        return;
    }

    showLoader();

    try {
        const { id: metafieldId, wishlist } = await fetchWishlist();

        const itemIndex = wishlist.findIndex(wishlistItem => wishlistItem.id === item.id);
        const heartButton = document.querySelector(`.item-card-add-wishlist-btn[data-item-id="${item.id}"]`);
        const itemId = item.id
        if (itemIndex !== -1) {
            // Remove item from wishlist
            wishlist.splice(itemIndex, 1);
            await saveWishlist(wishlist, metafieldId, itemId);

            console.log("Item removed from wishlist:", item.id);
            createStatusToast("Removed from Wishlist", "This item has been successfully removed and is no longer saved in your wishlist.", "success");

            if (heartButton) {
                heartButton.innerHTML = emptyHeartSVG; // Outline
                heartButton.title = "Add to Wishlist";
                heartButton.style.color = "";
            }
        } else {
            // Add item to wishlist
            const itemToAdd = {
                id: item.id,
                name: item.name || "Unknown Product",
                image: item.image || "",
                price: item.price || "N/A",
                url: item.url || "#",
                variants: item.variants || [],
                dateAdded: new Date().toISOString(),
            };

            const updatedWishlist = [...wishlist, itemToAdd];
            await saveWishlist(updatedWishlist, metafieldId, itemId);

            console.log("Item added to wishlist:", itemToAdd);
            createStatusToast("Added to Your Wishlist", "This item is now saved! You can view it anytime in your wishlist.", "success");

            if (heartButton) {
                heartButton.innerHTML = filledHeartSVG; // Solid
                heartButton.title = "Remove from Wishlist";
                heartButton.style.color = "red";
            }
        }

        const wishlistContainer = document.getElementById("wishListsContainer");
        if (wishlistContainer && wishlistContainer.style.display !== "none") {
            await fetchWishlistOnReload();
        }
        setTimeout(() => {
      window.location.reload();
    }, 1500);

    } catch (error) {
        console.error("Error toggling wishlist item:", error);
        createStatusToast("Wishlist Update Failed", "We couldn’t update your wishlist. Please try again.", "error");
    } finally {
        hideLoader();
    }
}
function renderCalendar(
    calendarContainer,
    currentMonth,
    currentYear,
    selectedDate,
    updateDateButtonText,
    dateButton,
    formatDate,
    setSelectedDate
) {
    calendarContainer.innerHTML = "";
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const header = document.createElement("div");
    header.className = "calendar-header";

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "‹";
    prevBtn.className = "calendar-nav-btn";
    prevBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(
            calendarContainer,
            currentMonth,
            currentYear,
            selectedDate,
            updateDateButtonText,
            dateButton,
            formatDate,
            setSelectedDate
        );
    });

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "›";
    nextBtn.className = "calendar-nav-btn";
    nextBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(
            calendarContainer,
            currentMonth,
            currentYear,
            selectedDate,
            updateDateButtonText,
            dateButton,
            formatDate,
            setSelectedDate
        );
    });

    const monthYear = document.createElement("div");
    monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    monthYear.className = "calendar-month-year";

    header.append(prevBtn, monthYear, nextBtn);
    calendarContainer.appendChild(header);

    const daysRow = document.createElement("div");
    daysRow.className = "calendar-days-row";
    ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].forEach((day) => {
        const dayEl = document.createElement("div");
        dayEl.textContent = day;
        dayEl.className = "calendar-day-name";
        daysRow.appendChild(dayEl);
    });
    calendarContainer.appendChild(daysRow);

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

    const grid = document.createElement("div");
    grid.className = "calendar-grid";

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Previous month faded days
    for (let i = firstDay - 1; i >= 0; i--) {
        const fadedDay = prevMonthDays - i;
        const fadedDate = new Date(currentYear, currentMonth - 1, fadedDay);
        const fadedDateStr = `${fadedDate.getFullYear()}-${(
            fadedDate.getMonth() + 1
        )
            .toString()
            .padStart(2, "0")}-${fadedDate.getDate().toString().padStart(2, "0")}`;

        const fadedCell = document.createElement("div");
        fadedCell.textContent = fadedDay;
        fadedCell.className = "calendar-day faded";

        if (fadedDate <= today) {
            fadedCell.classList.add("clickable");
            fadedCell.addEventListener("click", (event) => {
                event.stopPropagation();
                setSelectedDate(fadedDateStr);
                updateDateButtonText();
                Array.from(grid.children).forEach((cell) =>
                    cell.classList.remove("selected")
                );
                fadedCell.classList.add("selected");
            });
        } else {
            fadedCell.classList.add("disabled");
        }

        grid.appendChild(fadedCell);
    }

    // Current month days
    for (let day = 1; day <= totalDays; day++) {
        const dateObj = new Date(currentYear, currentMonth, day);
        const dateStr = `${currentYear}-${(currentMonth + 1)
            .toString()
            .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

        const dateBox = document.createElement("div");
        dateBox.textContent = day;
        dateBox.className = "calendar-day";

        if (dateObj <= today) {
            dateBox.classList.add("clickable");
            dateBox.addEventListener("click", (event) => {
                event.stopPropagation();
                setSelectedDate(dateStr);
                updateDateButtonText();
                Array.from(grid.children).forEach((cell) =>
                    cell.classList.remove("selected")
                );
                dateBox.classList.add("selected");
            });
        } else {
            dateBox.classList.add("disabled");
        }

        const todayStr = `${today.getFullYear()}-${(today.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
        if (dateStr === todayStr) {
            dateBox.classList.add("today");
        }

        grid.appendChild(dateBox);
    }

    // Next month trailing faded days
    const totalCells = firstDay + totalDays;
    const remaining = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let i = 1; i <= remaining; i++) {
        const fadedDate = new Date(currentYear, currentMonth + 1, i);
        const fadedDateStr = `${fadedDate.getFullYear()}-${(
            fadedDate.getMonth() + 1
        )
            .toString()
            .padStart(2, "0")}-${fadedDate.getDate().toString().padStart(2, "0")}`;

        const fadedCell = document.createElement("div");
        fadedCell.textContent = i;
        fadedCell.className = "calendar-day faded";

        if (fadedDate <= today) {
            fadedCell.classList.add("clickable");
            fadedCell.addEventListener("click", (event) => {
                event.stopPropagation();
                setSelectedDate(fadedDateStr);
                updateDateButtonText();
                Array.from(grid.children).forEach((cell) =>
                    cell.classList.remove("selected")
                );
                fadedCell.classList.add("selected");
            });
        } else {
            fadedCell.classList.add("disabled");
        }

        grid.appendChild(fadedCell);
    }

    calendarContainer.appendChild(grid);
}
async function saveReminder(data, item) {
    const { id: metafieldId, wishlist } = await fetchWishlist();

    if (!customerId || !metafieldId) {
        createStatusToast("Reminder Failed", "We couldn’t edit your reminder. Please try again or contact support for assistance.", "error");
        return;
    }

    // Clone and prepare updated wishlist
    const updatedWishlist = Array.isArray(wishlist) ? [...wishlist] : [];

    // Check if item already exists by id
    const existingIndex = updatedWishlist.findIndex(w => w.id === item.id);

    const itemWithReminder = {
        ...item,
        reminderDate: `${data.date} ${data.time}`
    };

    if (existingIndex !== -1) {
        // Update existing item
        updatedWishlist[existingIndex] = itemWithReminder;
    } else {
        // Add new item
        updatedWishlist.push(itemWithReminder);
    }

    const payload = {
        customerId,
        customer_name: prof_name,
        shop: Shopify.shop,
        app: "oh_my_customer",
        metafieldId,
        email: profile_email,
        caltime: data.time,
        caldate: data.date,
        productId: item.id,
        metafield: {
            id: metafieldId,
            namespace: "wishlist",
            key: "items",
            value: JSON.stringify(updatedWishlist),
            type: "json"
        }
    };

    try {
        const response = await fetch(`https://${xirclsBaseUrl}/wishlist/update_metafield/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const resData = await response.json();

        if (!response.ok) {
            throw new Error(`Error saving wishlist: ${resData.message}`);
        }

        createStatusToast(`Reminder Scheduled`, "We'll notify you about this item on your chosen date and time.", "success");
    } catch (error) {
        console.error("Error saving reminder:", error);
    } finally {
      setTimeout(() => window.location.reload(), 1000);
    }
}
async function injectReminderModal(item) {
    console.log("rendering the Reminder modal")
    const modal = renderCalendarUI(item.name);
    document.body.appendChild(modal);

    // Wait for the reminderSet event
    reminderData = await new Promise((resolve) => {
        const handler = (e) => {
            document.removeEventListener("reminderSet", handler);
            resolve(e.detail); // { date, time }
        };
        document.addEventListener("reminderSet", handler);
    });

    if (reminderData) {
        console.log(reminderData, item)
        saveReminder(reminderData, item);
    }
}

// Dummy saveReminder function for testing
// async function saveReminder(data) {
//     const { id: metafieldId, wishlist } = await fetchWishlist();

//     console.log(
//         metafieldId,
//         wishlist,
//         customerId,
//         prof_name,
//         profile_email,
//         Shopify.shop,
//         data,
//         "success"
//     );

//     if (!customerId || !metafieldId) {
//         // showAlert("Error setting Reminder!", "failure");
//         createStatusToast("Error setting Reminder!", "Error setting Reminder!", "error")
//     }
//     const payload = {
//         customerId: customerId,
//         customer_name: prof_name,
//         shop: Shopify.shop,
//         app: "oh_my_customer",
//         metafieldId: metafieldId,
//         email: profile_email,
//         caltime: data.time,
//         caldate: data.date,
//         productId: ite
//         metafield: {
//             id: metafieldId,
//             namespace: "wishlist",
//             key: "items",
//             value: JSON.stringify([wishlist]),
//             type: "json",
//         },
//     };
//     try {
//         const response = await fetch(`${xirclsBaseUrl}/api/v1/update_metafield/`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(payload),
//         });

//         const data = await response.json();
//         if (!response.ok) {
//             throw new Error(`Error saving wishlist: ${data.message}`);
//         }

//         console.log("Wishlist successfully saved to metafield:", wishlist);
//         console.log(data, "<====response");
//         // showAlert(`Reminder Set!`, "success");
//         createStatusToast("Reminder Scheduled", "We'll notify you about this item on your chosen date and time.", "success")
//     } catch (error) {
//         console.error("Error saving reminder:", error);
//     }
// }
function renderCalendarUI(product_name) {
  const modal = document.createElement("div");
  modal.innerHTML = `
      <div style="font-family: var(--axentra-font-family); position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center; z-index: 1000;">
        <div style="background: white; padding: 20px; width: 330px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); position: relative;">
          <span id="closeCross" style="cursor: pointer; font-size: 20px; font-weight: bold; color: #000; position: absolute; right: 20px; top: 5px;">&times;</span>
          <div style="display: flex; justify-content: center; align-items: center;">
            <span style="margin-top: 0px; font-size: 16px; font-weight: bold; color: #111;">Reminder Details!</span>
          </div>
          <div style="padding: 10px;">
            <label style="font-size: 16px; padding-bottom: 20px; color: #111;">Product Name: <strong>${product_name}</strong></label>
            <div id="calender-container"></div>
          </div>
          <div style="display: flex; justify-content: end; align-items: center; gap: 5px; margin-top: 20px;">
            <button id="closeModal" style="background: white; color: black; border: 1px solid black; padding: 8px 16px; cursor: pointer; font-size: 13px;">Cancel</button>
            <button id="setReminder" style="background: black; color: white; border: 1px solid black; padding: 8px 16px; cursor: pointer; font-size: 13px;">Set Reminder</button>
          </div>
        </div>
      </div>
    `;
  const calendarContainer = modal.querySelector("#calender-container");
  const container = document.createElement("div");
  container.style.cssText = `
      max-width: 350px;
      margin: auto;
      background: white;
      border-radius: 10px;
      font-size: 14px;
      position: relative;
    `;
  container.innerHTML = `
      <div style="font-weight: bold; margin-top: 20px; color: #111; font-size: 14px;">Reminder Date</div>
      <div style="padding: 10px; border: 1px solid #ccc; margin-top: 5px;">
        <div class="nav-buttons" style="display: flex; justify-content: space-between; align-items: center; padding: 5px 25px 10px 25px; border-bottom: 1px solid #ccc;">
          <span id="prevMonth" style="cursor: pointer; font-size: 10px; color: #000;">&#10094;</span>
          <span id="month-year" style="font-weight: bold; color: #000;"></span>
          <span id="nextMonth" style="cursor: pointer; font-size: 10px; color: #000;">&#10095;</span>
        </div>
        <div class="weekdays" style="display: grid; grid-template-columns: repeat(7, 1fr); font-weight: bold; color: #666; margin-bottom: 10px; margin-top: 10px; text-align: center;">
          <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
        </div>
        <div class="calendar" id="calendar" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px;"></div>
      </div>
      <div style="font-weight: bold; margin-top: 20px; color: #111; font-size: 14px;">Reminder Time</div>
      <select id="timeSelect" style="margin-top: 5px; width: 100%; padding: 5px; border-radius: 4px; border: 1px solid #ccc;">
        ${Array.from({ length: 24 }, (_, i) => {
          const hour = i % 12 === 0 ? 12 : i % 12;
          const ampm = i < 12 ? "AM" : "PM";
          return `<option value="${String(i).padStart(
            2,
            "0"
          )}:00">${hour}:00 ${ampm}</option>`;
        }).join("")}
      </select>
    `;
  calendarContainer.appendChild(container);
  const calendar = container.querySelector("#calendar");
  const monthYear = container.querySelector("#month-year");
  const prevMonthBtn = container.querySelector("#prevMonth");
  const nextMonthBtn = container.querySelector("#nextMonth");
  const timeSelect = container.querySelector("#timeSelect");

  let date = new Date();
  let selectedDate = null;

  function renderCalendar(allowPast = false, allowFuture = true) {
    calendar.innerHTML = "";
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    monthYear.textContent = `${month} ${currentYear}`;
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const dayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const prevMonthLastDate = new Date(currentYear, currentMonth, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0); // normalize time

    // Previous month's days (non-selectable always)
    for (let i = dayOfWeek - 1; i >= 0; i--) {
      const dayElement = document.createElement("div");
      dayElement.textContent = prevMonthLastDate - i;
      dayElement.style.cssText = `
    padding: 8px;
    text-align: center;
    color: #aaa;
    background: #f0f0f0;
  `;
      calendar.appendChild(dayElement);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement("div");
      const thisDate = new Date(currentYear, currentMonth, day);
      thisDate.setHours(0, 0, 0, 0); // normalize time

      const isPast = thisDate < today;
      const isFuture = thisDate > today;
      const isSelectable =
        (isPast && allowPast) ||
        (!isPast && !isFuture) ||
        (isFuture && allowFuture);

      dayElement.className = "day";
      dayElement.textContent = day;
      dayElement.style.cssText = `
    padding: 8px;
    text-align: center;
    border-radius: 0px;
    cursor: ${isSelectable ? "pointer" : "not-allowed"};
    background: #f8f8f8;
    transition: background 0.2s;
    color: ${isSelectable ? "#000" : "#ccc"};
  `;
      if (isSelectable) {
        dayElement.addEventListener("mouseover", () => {
          if (!dayElement.classList.contains("selected")) {
            dayElement.style.backgroundColor = "#e0e0e0";
          }
        });

        dayElement.addEventListener("mouseout", () => {
          if (!dayElement.classList.contains("selected")) {
            dayElement.style.backgroundColor = "#f8f8f8";
          }
        });

        dayElement.addEventListener("click", () => {
          container.querySelectorAll(".day").forEach((d) => {
            if (d.style.cursor === "pointer") {
              d.classList.remove("selected");
              d.style.backgroundColor = "#f8f8f8";
              d.style.color = "#000";
            }
          });
          dayElement.classList.add("selected");
          dayElement.style.backgroundColor = "#000";
          dayElement.style.color = "#fff";
          selectedDate = `${currentYear}-${String(currentMonth + 1).padStart(
            2,
            "0"
          )}-${String(day).padStart(2, "0")}`;
        });
      }
      calendar.appendChild(dayElement);
    }
  }
  timeSelect.addEventListener("change", function () {
    if (selectedDate) {
      console.log("Selected Time:", timeSelect.value);
    }
  });
  prevMonthBtn.addEventListener("click", () => {
    const currentMonth = date.getMonth();
    date.setMonth(currentMonth - 1);
    renderCalendar();
  });

  nextMonthBtn.addEventListener("click", () => {
    const currentMonth = date.getMonth();
    date.setMonth(currentMonth + 1);
    renderCalendar();
  });
  renderCalendar();
  const closeBtn = modal.querySelector("#closeModal");
  const closeCrossBtn = modal.querySelector("#closeCross");
  const setReminderBtn = modal.querySelector("#setReminder");

  closeBtn.addEventListener("click", () => {
    modal.remove();
    const reminderEvent = new CustomEvent("reminderSet", { detail: null });
    document.dispatchEvent(reminderEvent);
  });
  closeCrossBtn.addEventListener("click", () => {
    modal.remove();
    const reminderEvent = new CustomEvent("reminderSet", { detail: null });
    document.dispatchEvent(reminderEvent);
  });
  setReminderBtn.addEventListener("click", () => {
    const selectedTime = timeSelect.value; // get time value
    console.log(!selectedDate, !selectedTime);
    if (!selectedDate || !selectedTime || selectedDate === null) {
      createStatusToast(
        "Missing Reminder Details",
        "Please select both a date and a time to create your reminder.",
        "error"
      );
      return;
    }
    const now = new Date();
    const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);

    const isToday = selectedDate === now.toISOString().slice(0, 10);
    if (isToday && selectedDateTime <= now) {
      createStatusToast(
        "Time Selection Error",
        "The selected time is invalid. Please choose a valid time to continue.",
        "error"
      );
      return;
    }
    const reminderDateTime = {
      date: selectedDate,
      time: selectedTime,
    };
    modal.remove();
    console.log("Reminder Set For:", reminderDateTime);
    const reminderEvent = new CustomEvent("reminderSet", {
      detail: reminderDateTime,
    });
    document.dispatchEvent(reminderEvent);
  });
  return modal;
}


async function injectEditReminderModal(item, id) {
    console.log("rendering the Reminder modal")
    const modal = renderCalendarUI(item.name);
    document.body.appendChild(modal);

    // Wait for the reminderSet event
    reminderData = await new Promise((resolve) => {
        const handler = (e) => {
            document.removeEventListener("reminderSet", handler);
            resolve(e.detail); // { date, time }
        };
        document.addEventListener("reminderSet", handler);
    });

    if (reminderData) {
        console.log(reminderData, item)
        saveEditReminder(reminderData, item, id);
    }
}
async function saveEditReminder(data, item, reminder_id) {
    const { id: metafieldId, wishlist } = await fetchWishlist();

    if (!customerId || !metafieldId) {
        createStatusToast("Reminder Failed", "We couldn’t edit your reminder. Please try again or contact support for assistance.", "error");
        return;
    }

    // Clone and prepare updated wishlist
    const updatedWishlist = Array.isArray(wishlist) ? [...wishlist] : [];

    // Check if item already exists by id
    const existingIndex = updatedWishlist.findIndex(w => w.id === item.id);

    const itemWithReminder = {
        ...item,
        reminderDate: `${data.date} ${data.time}`
    };

    if (existingIndex !== -1) {
        // Update existing item
        updatedWishlist[existingIndex] = itemWithReminder;
    } else {
        // Add new item
        updatedWishlist.push(itemWithReminder);
    }

    const payload = {
        customerId,
        customer_name: prof_name,
        shop: Shopify.shop,
        app: "oh_my_customer",
        metafieldId,
        email: profile_email,
        productId: item.id,
        metafield: {
            id: metafieldId,
            namespace: "wishlist",
            key: "items",
            value: JSON.stringify(updatedWishlist),
            type: "json"
        }
    };

    try {
        const response = await fetch(`https://${xirclsBaseUrl}/wishlist/update_metafield/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });


        const resData = await response.json();

        if (!response.ok) {
            throw new Error(`Error saving wishlist: ${resData.message}`);
        }
        const payloadUpt = {
            caltime: data.time,
            caldate: data.date,
            reminderId: reminder_id
        }
        await fetch(`https://${xirclsBaseUrl}/wishlist/update_task/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payloadUpt),
        });

        createStatusToast(`Reminder Scheduled`, "We'll notify you about this item on your chosen date and time.", "success");
    } catch (error) {
        console.error("Error saving reminder:", error);
    } finally {
        setTimeout(() => window.location.reload(), 500);
    }
}
async function editReminder(item) {
    const removeId = await getReminderData(item.id)
    injectEditReminderModal(item, removeId[0].id)
}
async function removeReminder(item) {
    const removeId = await getReminderData(item.id)
    console.log(removeId, "iddddd")
    const removeUrl = `https://${xirclsBaseUrl}/wishlist/delete_task/`
    const payload = {
        reminderId: removeId[0].id
    }
    try {
        const response = await fetch(
            removeUrl,
            {
                method: "POST",
                body: JSON.stringify(payload)
            }
        );
        const data = await response.json();
        console.log("Response from server:", data);
        const { id, wishlist } = await fetchWishlist()
        wishlist.forEach(items => {
            if (items.id === item.id) {
                console.log(items.reminderDate, "wishlistttttttttttRemove")
                delete items.reminderDate;
                console.log(items.reminderDate, "withoutdate");
            }
        })
        console.log(wishlist, "updatedWishloist")

        const payloadUpdt = {
            customerId: customerId,
            customer_name: prof_name,
            shop: Shopify.shop,
            app: 'oh_my_customer',
            metafieldId: id,
            email: profile_email,
            productId: item.id,
            metafield: {
                id: id,
                namespace: 'wishlist',
                key: 'items',
                value: JSON.stringify(wishlist),
                type: 'json'
            }
        };
        const response1 = await fetch(`https://${xirclsBaseUrl}/wishlist/update_metafield/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payloadUpdt)
        });
        const data1 = await response1.json();

        if (!response.ok) {
            throw new Error(`Error saving wishlist: ${data1.message}`);
        }
        console.log("Wishlist successfully saved to metafield:", wishlist);

        
    } catch (error) {
        console.log(error)
    }
    finally {
        setTimeout(() => window.location.reload(), 500);
    }
}
async function getReminderData(id) {
    const url = "https://omc.axentraos.co.in/wishlist/get_reminder_id/"
    const formData = new FormData();
    // formData.append("app", "oh_my_customer");
    formData.append("shop", Shopify.shop);
    formData.append("email", profile_email);
    formData.append("productId", id)
    payload = {
        shop: Shopify.shop,
        email: profile_email,
        productId: id
    }
    try {
        const response = await fetch(
            url,
            {
                method: "POST",
                body: JSON.stringify(payload)
            }
        );
        const data = await response.json();
        console.log("Response from server:", data);
        return data;
    } catch (error) {
        console.log(error)
    }
}
async function createItemCard(item, type = "wishlist", wishlist) {
    const card = document.createElement("div");
    card.className = "item-card";
    card.setAttribute("data-item-id", item.id); // Add item ID for easier selection
    console.log(item.image, 'imgggggggggggggggggggggggggggg');
    
    // --- Image Section ---
    const imageContainer = document.createElement("div");
    imageContainer.className = "item-card-image-container";

    const img = document.createElement("img");
    const imageUrl = item.image;
    img.src = imageUrl;
    img.alt = item.name || "Product Image";
    img.className = "item-card-image";
    imageContainer.appendChild(img);
    const saleBadge = document.createElement("span");
    saleBadge.className = "item-card-sale-badge";
    if (type === "recentlyViewed") {
        saleBadge.classList.add("recently-viewed-sale-badge");
    }
    saleBadge.textContent = "SALE";
    // imageContainer.appendChild(saleBadge);

    // --- Wishlist Buttons (Conditional) ---
    const wishlistButtonContainer = document.createElement("div");
    // Use a consistent class for positioning, differentiate buttons by specific class/ID if needed
    wishlistButtonContainer.className = "item-card-wishlist-btn-container";
    
    if (type === "wishlist") {
        // Remove Button (Heart with X or Trash can be better UX than solid heart for remove)
        const removeButton = document.createElement("button");
        removeButton.className = "item-card-wishlist-remove-btn"; // Specific class
        removeButton.title = "Remove From Wishlist";
        removeButton.setAttribute("data-item-id", item.id); // Keep item ID here too
        removeButton.onclick = (event) => {
            event.stopPropagation();
            removeFromWishlist(item.id);
            
        };
        // Use a filled heart or trash icon for remove
        removeButton.innerHTML = filledHeartSVG;

        wishlistButtonContainer.appendChild(removeButton);
    } else {
      
        const addButton = document.createElement("button");
        addButton.className = "item-card-add-wishlist-btn";
        addButton.setAttribute("data-item-id", item.id);
        
        // Fetch wishlist once to decide icon style before rendering
        const isWishlisted = wishlist.some(w => w.id === item.id);

        addButton.title = isWishlisted ? "Remove from Wishlist" : "Add to Wishlist";
        addButton.innerHTML = isWishlisted ? filledHeartSVG : emptyHeartSVG;
      
        addButton.onclick = (event) => {
          event.stopPropagation();
          addToWishlistHandler(item);
          
        };

        wishlistButtonContainer.appendChild(addButton);
    }

    imageContainer.appendChild(wishlistButtonContainer); // Add the container with the button

    // --- Content Section (Title) ---
    const content = document.createElement("div");
    content.className = "item-card-content";

    const title = document.createElement("span");
    const subTitle = document.createElement("span");
    subTitle.className = "item-card-subtitle";
    title.className = "item-card-title";
    const titleLink = document.createElement("span");
    titleLink.textContent = item.name || "Unnamed Product";

    subTitle.textContent = item.type || "";
    title.appendChild(titleLink);
    content.appendChild(title);
    // content.appendChild(subTitle);
    if(item.url) {
const openProductPage = () => window.open(item.url, "_blank");

        
        imageContainer.style.cursor = "pointer"
        imageContainer.addEventListener("click", openProductPage);
    }
 
    // --- Actions Section (Price and Button) ---
    const actions = document.createElement("div");

    const price = document.createElement("div");
    price.className = "item-card-price";
    price.textContent = item.price;
    price.style.textAlign = "left";
    const priceReminder = document.createElement("div");
    const reminderDiv = document.createElement('div')
    reminderDiv.innerHTML = ''
    reminderDiv.classList.add('xircls-reminder-div')
    if (type === "wishlist") {
        const reminderSpan = document.createElement("span");
        const inputDate = item.reminderDate ? new Date(item.reminderDate) : null;
        let formattedDate = '';
        let timeString = ''
        if (inputDate && !isNaN(inputDate)) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            formattedDate = inputDate.toLocaleDateString('en-US', options);
            const dateTimeVal = item.reminderDate
            timeString = dateTimeVal.split(" ")[1]
        }
        if (timeString === undefined) {
          timeString = item.reminderTime
        }
        ; // Extract "23:00"
        reminderDiv.innerHTML = `
        <div class="xircls-reminder-wrapper">
    <div class="xircls-reminder-content">
      <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" class="xircls-clock-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      <div class="xircls-reminder-text">
        <div class="xircls-reminder-title">Reminder set for ${formattedDate} at ${timeString}</div>
      </div>
      <div class="xircls-reminder-actions">
        <button class="xircls-edit-btn" title="Edit reminder" onclick='editReminder(${JSON.stringify(item)})'>
          <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" class="xircls-edit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
            <path d="m15 5 4 4"></path>
          </svg>
        </button>
        <button class="xircls-delete-btn" title="Remove reminder" onclick='removeReminder(${JSON.stringify(item)})'>
          <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" class="xircls-delete-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" x2="10" y1="11" y2="17"></line>
            <line x1="14" x2="14" y1="11" y2="17"></line>
          </svg>
        </button>
      </div>
    </div>
  </div>
        `
        priceReminder.classList.add("item-card-price-reminder");
        priceReminder.style.marginBottom = "10px"
        reminderSpan.innerHTML =
            `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="18" height="18" stroke-width="2" class="remind-bell" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg> Remind Me`;
        reminderSpan.addEventListener("click", function () {
            injectReminderModal(item);
        });
        priceReminder.appendChild(price);
         if (myWishlist.includes("Reminders") && !item.reminderDate) {
            priceReminder.appendChild(reminderSpan);
        }
    } else {
       price.style.padding = "0px 0px 10px 0px"
       price.style.textAlign = "left"
        actions.appendChild(price);
    }

    // Add to Cart Button / View Button
    if (
        item.variants &&
        Array.isArray(item.variants) &&
        item.variants.length > 0
    ) {
        const addToCartBtn = document.createElement("button");
        addToCartBtn.className = "item-card-add-to-cart-btn-wishlist"; // General class

        if (type === "recentlyViewed") {
            actions.className = "item-card-actions";
            addToCartBtn.classList.add("add-cart-icon");
            addToCartBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="16" height="16" stroke-width="2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <circle cx="9" cy="21" r="1" />
  <circle cx="20" cy="21" r="1" />
  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6" />
</svg>
`; // Cart Icon
            addToCartBtn.title = "Add to Cart";
            addToCartBtn.classList.add("icon-only-btn"); // Add specific class for styling if needed
            const buyNowBtn = document.createElement("button");
            buyNowBtn.classList.add("item-buy-now-btn");
            buyNowBtn.textContent = "Buy Now";
            buyNowBtn.title = "Buy Now";
            buyNowBtn.onclick = (event) => {
                event.stopPropagation();
                buyNow(item.variants[0].id, item.id); // buy now function
            };
            const actionButtonDiv = document.createElement("div");
            actionButtonDiv.classList.add("item-card-actions-recent-viewed");
           if (recentlyViewed.includes("Buy_Now")) {
              actionButtonDiv.appendChild(buyNowBtn);
          }
          if (recentlyViewed.includes("Add_to_Cart_Button")) {
              actionButtonDiv.appendChild(addToCartBtn);
          }
          //  setTimeout(() => {
          //   console.log(recentlyViewed, "recentlyViewedrecentlyViewed")
          
          //  }, 800)
            actions.appendChild(actionButtonDiv);
        } else {
            actions.className = "item-card-actions-wishlist";
            const buyNowBtn = document.createElement("button");
            buyNowBtn.classList.add("item-buy-now-btn-wishlist");
            buyNowBtn.textContent = "Buy Now";
            buyNowBtn.title = "Buy Now";
            buyNowBtn.onclick = (event) => {
                event.stopPropagation();
                buyNow(item.variants[0].id, item.id); // buy now function
            };
            addToCartBtn.textContent = "Add to Cart";
            addToCartBtn.title = "Add to Cart";
            if (myWishlist.includes("Buy_Now")) {
            actions.appendChild(buyNowBtn);
            }
             if (myWishlist.includes("Add_to_Cart_Button")) {
            actions.appendChild(addToCartBtn);
             }
        }
        // ***********************************

        addToCartBtn.onclick = (event) => {
            event.stopPropagation();
            addToCart(item.variants[0].id, item.id);
        };
    } else if (item.url) {
      
        const openProductPage = () => window.open(item.url, "_blank");

        
        imageContainer.style.cursor = "pointer"
        imageContainer.addEventListener("click", openProductPage);
    } else {
        console.warn("No variants/URL for actions:", item.id);
        if (!actions.querySelector(".item-card-price")) {
            // Ensure price placeholder if needed
            price.textContent = "";
            actions.appendChild(price);
        }
    }

    // --- Assemble Card ---
    card.appendChild(imageContainer);
    card.appendChild(content);
    if (type === "wishlist") {
        if (item.reminderDate) {

            card.appendChild(reminderDiv)
        }
        card.appendChild(priceReminder);
    }
    card.appendChild(actions);

    return card;
}
async function renderWishlist(wishlist) {
    console.log("renderWishlist executing with new card logic", wishlist);
    const updatedWishlist = wishlist;
    // .map(product => {
    //     let imagePath = product.image || ''; // Use an empty string as fallback if image is undefined or null

    //     // Only proceed with URL extraction if the imagePath is not empty
    //     if (imagePath) {
    //         // Extract only 'cdn/shop/products/...' part (not full domain)
    //         const match = imagePath.match(/cdn\/shop\/products\/.*/);
    //         if (match) {
    //             imagePath = match[0]; // Keep only the correct part (cdn/shop/products/...)
    //         }
    //     }

    //     return {
    //         ...product,
    //         image: imagePath
    //     };
    // });
    const wishlistContainer = document.getElementById("wishListsContainer");
    if (!wishlistContainer) {
        console.error("wishListsContainer element not found!");
        return;
    }
    wishlistContainer.innerHTML = ""; // Clear previous content

    if (!updatedWishlist || updatedWishlist.length === 0) {
        wishlistContainer.appendChild(createEmptyItemsCard("wishlist"));
        return;
    }

    // Create a grid container for the cards
    const gridContainer = document.createElement("div");
    gridContainer.className = "item-card-grid"; // Class for CSS grid styling

    // Ensure wishlist is an array
    const wishlistArray = Array.isArray(updatedWishlist) ? updatedWishlist : [];

    if (wishlistArray.length === 0 && !Array.isArray(updatedWishlist)) {
        console.warn("Received non-array wishlist data:", updatedWishlist);
        wishlistContainer.innerHTML =
            '<div class="no-wishlist-text">Could not load wishlist items.</p>';
        return;
    }

    wishlistArray.forEach(async (item) => {
        // Basic validation for essential item properties
        if (
            item &&
            item.id &&
            item.name &&
            item.image &&
            item.price &&
            item.variants
        ) {
            try {
                const cardElement = await createItemCard(item, "wishlist");
                gridContainer.appendChild(cardElement);
            } catch (error) {
                console.error("Error creating card for item:", item, error);
                // Optionally append an error placeholder card
            }
        } else {
            console.warn("Skipping invalid wishlist item:", item);
        }
    });
    const buttonAction = document.createElement('div')
    buttonAction.id = "actionheading"
    const addAllToCart = document.createElement('button')
    addAllToCart.id = "button-action-1"
    const buyAll = document.createElement('button')
    buyAll.id = "button-action-2"
    const clearAll = document.createElement('button')
    clearAll.id = "button-action-3"
    buyAll.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg><div>Buy All</div>`
    addAllToCart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg> <div>Add All to Cart</div>`
    clearAll.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="16" height="16"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> <div>Clear All</div>`;
    buttonAction.style.display = 'flex'

    if (window.innerWidth <= 768) {
        buttonAction.style.marginTop = '0px'
    }
    else {
        buttonAction.style.marginTop = '-54px'
        buttonAction.style.marginBottom = '16px'
    }

    addAllToCart.addEventListener("click", () => {
        if (!wishlist || wishlist.length === 0) {
            createStatusToast("Empty Wishlist", "Your wishlist is empty. Please try adding items to your wishlist.", "error");
            return;
        }

        const itemsToAdd = wishlist.map((product) => ({
            id: product.variants[0].id,
            quantity: 1,
        }));

        fetch("/cart/add.js", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ items: itemsToAdd }),
        })
            .then((response) => {
                if (!response.ok) throw new Error("Failed to add items to cart");
                return response.json();
            })
            .then((data) => {
                createStatusToast("Cart Updated", "Your changes have been saved! Your wishlist items are now available in your cart.", "success");

                window.location.href = "/cart";
            })
            .catch((error) => {
                console.error("Error adding to cart:", error);
                createStatusToast("Cart Update Fail",
                    "We couldn’t update your cart. Please try again or contact support for assistance.",
                    "error"
                );
            });
    });

    buyAll.addEventListener("click", () => {
        if (!wishlist || wishlist.length === 0) {
            createStatusToast("Empty Wishlist", "Your wishlist is empty. Please try adding items to your wishlist.", "error");
            return;
        }

        const itemsToBuy = wishlist.map((product) => ({
            id: product.variants[0].id,
            quantity: 1,
        }));

        fetch("/cart/clear.js", { method: "POST" }) // optional: clears cart first
            .then(() => {
                return fetch("/cart/add.js", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ items: itemsToBuy }),
                });
            })
            .then((response) => {
                if (!response.ok) throw new Error("Failed to add items to cart");
                return response.json();
            })
            .then((data) => {
                window.location.href = "/checkout";
            })
            .catch((error) => {
                console.error("Error during Buy All:", error);
                createStatusToast("Buy Request Fail",
                    "We couldn’t process your request. Please try again or contact support for assistance.",
                    "error"
                );
            });
    });

    clearAll.addEventListener("click", async () => {
        if (!wishlist || wishlist.length === 0) {
            createStatusToast("Empty Wishlist", "Your wishlist is empty. Please try adding items to your wishlist.", "error");
            return;
        }

        try {
            // Step 1: Fetch current wishlist metafield
            const response = await fetch(
                `https://${xirclsBaseUrl}/wishlist/get_metafield/?customerId=${customerId}&shop=${Shopify.shop}&app=oh_my_customer`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const data = await response.json();

            // Step 2: Locate the wishlist metafield
            const wishlistMetafield = data.metafields.metafields.find(
                (metafield) =>
                    metafield.namespace === "wishlist" && metafield.key === "items"
            );
            console.log(wishlistMetafield, "wishlist metafield")

            if (!wishlistMetafield) {
                console.error("No wishlist metafield found.");
                return;
            }

            // Step 3: Prepare the metafield update with an empty wishlist
            const updatedMetafield = {
                customerId: customerId,
                shop: Shopify.shop,
                app: "oh_my_customer",
                metafieldId: wishlistMetafield.id,
                productId: 0 || '',
                metafield: {
                    id: wishlistMetafield.id,
                    namespace: "wishlist",
                    key: "items",
                    value: JSON.stringify([]), // Clear all items
                    type: "json",
                },
            };

            // Step 4: Send updated empty wishlist
            await fetch(`https://${xirclsBaseUrl}/wishlist/update_metafield/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedMetafield),
            });

            console.log("Cleared all wishlist items");
            createStatusToast("Removed from Wishlist", "This item has been successfully removed and is no longer saved in your wishlist.", "success")

            renderWishlist([]); // Clear UI
        } catch (error) {
            console.error("Error clearing wishlist:", error);
        }
    });

    buttonAction.appendChild(addAllToCart)
    buttonAction.appendChild(buyAll)
    buttonAction.appendChild(clearAll)

    wishlistContainer.appendChild(buttonAction)
    wishlistContainer.appendChild(gridContainer);

    // Note: Pagination is removed for this card view.
    // If pagination is needed, it would require a different implementation
    // that works with the card grid (e.g., slicing the data and re-rendering).
}
async function removeFromWishlist(itemId) {
    console.log("itemId to remove:", itemId);
    try {
        // Fetch wishlist data to get the current items
        const response = await fetch(
            `https://${xirclsBaseUrl}/wishlist/get_metafield/?customerId=${customerId}&shop=${Shopify.shop}&app=oh_my_customer`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await response.json();

        // Find the wishlist metafield in the response
        const wishlistMetafield = data.metafields.metafields.find(
            (metafield) =>
                metafield.namespace === "wishlist" && metafield.key === "items"
        );
        console.log("wishlistMetafield", wishlistMetafield);
        if (!wishlistMetafield) {
            console.error("No wishlist metafield found.");
            return;
        }

        const wishlist = JSON.parse(wishlistMetafield.value); // Parse the existing wishlist
        const updatedWishlist = wishlist.filter((item) => item.id !== itemId); // Remove the item by id
        console.log("wishlist", wishlist);
        console.log("updatedWishlist", updatedWishlist);
        // Prepare the updated metafield data
        const updatedMetafield = {
            customerId: customerId,
            shop: Shopify.shop,
            app: "oh_my_customer",
            metafieldId: wishlistMetafield.id, // Use the metafield ID here
            productId: itemId,
            metafield: {
                id: wishlistMetafield.id,
                namespace: "wishlist",
                key: "items",
                value: JSON.stringify(updatedWishlist), // Save the updated wishlist
                type: "json",
            },
        };

        // Send the updated wishlist back to the server to update the metafield
        await fetch(`https://${xirclsBaseUrl}/wishlist/update_metafield/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedMetafield),
        });
        console.log("updated wishlist meta field");
        // alert("Item Successfully Removed From Wishlist!");
        createStatusToast("Removed from Wishlist", "This item has been successfully removed and is no longer saved in your wishlist.", "success")
        // Re-render the wishlist after updating
        renderWishlist(updatedWishlist);
        setTimeout(() => {
      window.location.reload();
    }, 1500);

    } catch (error) {
        console.error("Error removing item from wishlist:", error);
    }
}
let wishlist = [];
async function fetchWishlistOnReload() {
    console.log("fetch Wish list On Reload calling");

    try {
        console.log("customerId:", customerId);
        console.log("Shop:", Shopify.shop);

        const metafieldResponse = await fetch(
            `https://${xirclsBaseUrl}/wishlist/get_metafield/?customerId=${customerId}&shop=${Shopify.shop}&app=oh_my_customer`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        // Check if the response is successful (status 200)
        if (!metafieldResponse.ok) {
            throw new Error("Failed to fetch metafield data");
        }

        const metafieldData = await metafieldResponse.json();
        console.log("Metafield Data:", metafieldData);

        // Check if 'metafields' is an array inside the nested object
        if (Array.isArray(metafieldData.metafields?.metafields)) {
            const existingMetafield = metafieldData.metafields.metafields.find(
                (metafield) =>
                    metafield.namespace === "wishlist" && metafield.key === "items"
            );

            if (existingMetafield) {
                // Parse and return the wishlist
                const wishlistData = JSON.parse(existingMetafield.value);
                wishlist = wishlistData;
                console.log(wishlist, 'datawish');

                console.log(wishlistData, "wishlist data fetch success");
                renderWishlist(wishlistData); // Call render Wishlist to display the wishlist
                return { id: existingMetafield.id, wishlist: wishlistData };
            } else {
                console.log("No matching wishlist metafield found.");
                renderWishlist([]); // Call render Wishlist with an empty array
                return { id: null, wishlist: [] };
            }
        } else {
            // Handle case if metafields is not an array
            console.error("Error: metafields is not an array", metafieldData);
            renderWishlist([]); // Call render Wishlist with an empty array
            return { id: null, wishlist: [] };
        }
    } catch (error) {
        console.error("Error fetching wishlist:", error);
        renderWishlist([]); // Call render Wishlist with an empty array
        return { id: null, wishlist: [] }; // Return empty wishlist in case of error
    }
}
async function fetchWishlist() {
    if (customerId) {
        try {
            const metafieldResponse = await fetch(
                `https://${xirclsBaseUrl}/wishlist/get_metafield/?customerId=${customerId}&shop=${Shopify.shop}&app=oh_my_customer`,
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                }
            );

            const metafieldData = await metafieldResponse.json();

            if (
                metafieldData.metafields &&
                Array.isArray(metafieldData.metafields.metafields)
            ) {
                const existingMetafield = metafieldData.metafields.metafields.find(
                    (metafield) =>
                        metafield.namespace === "wishlist" && metafield.key === "items"
                );
                console.log(existingMetafield, "existsj");
                if (existingMetafield) {
                    const wishlist = JSON.parse(existingMetafield.value)
                    WishlistItemsCount = wishlist.length
                    console.log(wishlist.length, " wishlist.length")
                    return {
                        id: existingMetafield.id,
                        wishlist: wishlist,
                    };
                } else {
                    WishlistItemsCount = 0
                    const createdMetafield = await createMetafield(); // Create new metafield
                    return { id: createdMetafield.id, wishlist: [] };
                }
            } else {
                WishlistItemsCount = 0
                const createdMetafield = await createMetafield(); // Create new metafield
                return { id: createdMetafield.id, wishlist: [] };
            }
        } catch (error) {
            WishlistItemsCount = 0
            console.error("Error fetching wishlist:", error);
            return { id: null, wishlist: [] };
        } finally {
            renderDashboard()
        }
    } else {
        const wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];
        console.log("Logged out - Current wishlist from sessionStorage:", wishlist);
        return { id: null, wishlist: wishlist };
    }

}
async function renderRecentlyViewed() {
    console.log("Rendering Recently Viewed products...");
    const recentContainer = document.getElementById("RecentsContainer");
    if (!recentContainer) {
        console.error("RecentsContainer element not found!");
        return;
    }
    recentContainer.innerHTML = ""; // Clear previous content

    try {
        const recentlyViewed =
            JSON.parse(sessionStorage.getItem("recentlyViewed")) || [];
        console.log("Recently Viewed Items from session:", recentlyViewed);

        if (!Array.isArray(recentlyViewed)) {
            console.error("Recently viewed data is not an array:", recentlyViewed);
            recentContainer.innerHTML =
                '<div style="margin-top: 50px; text-align: center;">Could not load recently viewed items.</p>';
            return;
        }

        if (recentlyViewed.length === 0) {
            recentContainer.appendChild(createEmptyItemsCard("recentlyViewed"));
            return;
        }

        // Create grid container WITH THE NEW CLASS
        const gridContainer = document.createElement("div");
        gridContainer.className = "item-card-grid recent-item-card-grid"; // Add both classes
        gridContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
        const { wishlist } = await fetchWishlist()
        recentlyViewed.forEach(async (item) => {
            if (item && item.id && item.name) {
                try {
                    const cardElement = await createItemCard(
                        item,
                        "recentlyViewed" /*, isInWishlist */,
                        wishlist
                    );
                    gridContainer.appendChild(cardElement);
                } catch (error) {
                    console.error(
                        "Error creating card for recently viewed item:",
                        item,
                        error
                    );
                }
            } else {
                console.warn("Skipping invalid recently viewed item:", item);
            }
        });

        recentContainer.appendChild(gridContainer);
    } catch (error) {
        console.error("Error rendering recently viewed products:", error);
        recentContainer.appendChild(createEmptyItemsCard("recentlyViewed"));
    }
}

window.savedTotalCount = 0;
// Helper to get default address
function getParsedAddresses() {
    // Check if the variable exists globally
    if (typeof customerAddresses === 'undefined') {
        console.warn("customerAddresses variable is missing.");
        return [];
    }

    // If it's already an array/object, return it
    if (typeof customerAddresses === 'object' && customerAddresses !== null) {
        return customerAddresses;
    }

    // If it's a string (from Liquid '{{...}}'), parse it
    if (typeof customerAddresses === 'string') {
        try {
            return JSON.parse(customerAddresses);
        } catch (e) {
            console.error("Error parsing customerAddresses JSON:", e);
            return [];
        }
    }

    return [];
}

// 2. Get Default Address from the parsed list
function getDefaultAddress() {
    const addresses = getParsedAddresses();
    
    if (!Array.isArray(addresses) || addresses.length === 0) {
        return {};
    }
    
    // Find the default address, otherwise return the first one
    return addresses.find(addr => addr.default === true) || addresses[0] || {};
}

// 3. Escape HTML for safety
function escapeHtml(text) {
  if (text == null) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
// Helper to toggle the visibility of extra variants
window.toggleVariants = function(containerId, btnId, count) {
    const container = document.getElementById(containerId);
    const btn = document.getElementById(btnId);
    
    if (!container || !btn) return;

    if (container.style.display === "none") {
        container.style.display = "block";
        btn.innerText = "Show Less";
    } else {
        container.style.display = "none";
        btn.innerText = `Show More (+${count})`;
    }
};
// Add this to your script file, outside the renderSubscription function
window.toggleSubDetails = function(id) {
    const body = document.getElementById(`sub-body-${id}`);
    const icon = document.getElementById(`sub-icon-${id}`);
    
    if (body.style.display === "none") {
        body.style.display = "block";
        icon.style.transform = "rotate(180deg)";
    } else {
        body.style.display = "none";
        icon.style.transform = "rotate(0deg)";
    }
};
/* =========================================
   HELPER: For toggling "Show More" in Available Plans
   ========================================= */
if (!window.toggleVariants) {
    window.toggleVariants = function(containerId, btnId, count) {
        const container = document.getElementById(containerId);
        const btn = document.getElementById(btnId);
        if (!container || !btn) return;

        if (container.style.display === "none") {
            container.style.display = "block";
            btn.innerText = "Show Less";
        } else {
            container.style.display = "none";
            btn.innerText = `Show More (+${count})`;
        }
    };
}

async function renderSubscription(page = 1) {
    console.log(`Rendering Subscriptions Page ${page}...`);
    const shopCurrencyCode = Shopify.currency.active;

    const formatter = new Intl.NumberFormat("en", {
        style: "currency",
        currency: shopCurrencyCode,
    });

    let symbol = "$";
    try {
        const parts = formatter.formatToParts(1);
        const currencyPart = parts.find(p => p.type === "currency");
        if (currencyPart) symbol = currencyPart.value;
    } catch (e) {}

    const container = document.getElementById("subscriptionContainer");
    if (!container) return;

    if (page > 1) {
        const yOffset = -100;
        const y = container.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
            top: y,
            behavior: "smooth"
        });
    }

    container.innerHTML = "";
    setupDeleteModal();
    setupSubscriptionModal();

    // =========================================================
    // PART 1: ACTIVE SUBSCRIPTIONS
    // =========================================================
    let subscriptions = [];
    let apiTotalCount = 0;
    const pageSize = 3;
    const shopName = Shopify.shop;
    const custId = typeof customerId !== "undefined" ? customerId : null;
    const isMobile = window.innerWidth <= 768;

    if (!custId) {
        container.innerHTML = `<div style="color:red;text-align:center;">User ID missing.</div>`;
        return;
    }

    try {
        const response = await fetch(
            `https://api.subscriptions.axentraos.co.in/api/v1/plans/customer_subscription/?shop=${shopName}&customer_id=${custId}&page=${page}&size=${pageSize}`
        );
        const json = await response.json();
        subscriptions = json?.data?.data || [];
        apiTotalCount = json?.data?.total_count || 0;
        if (apiTotalCount > 0) window.savedTotalCount = apiTotalCount;
    } catch (error) {
        container.innerHTML = `<div style="color:red;text-align:center;">Error loading subscriptions.</div>`;
        return;
    }

    if (subscriptions.length === 0) {
        container.innerHTML = `
            <div style="margin:50px 0;text-align:center;color:#666;">
                ${page === 1 ? "No active subscriptions found." : "No more subscriptions found."}
            </div>`;
    } else {
        subscriptions.forEach((sub, index) => {
            const planDetails = sub.subscription_plan || {};
            const planName = planDetails.plan_name || "Subscription Plan";
            const planDescription = planDetails.description || "No description available";

            /* ---------- PRICE ---------- */
            const basePrice = parseFloat(planDetails.price || 0);
            const discountVal = parseFloat(sub.discount_value || 0);
            let finalPrice = basePrice;

            if (sub.discount_type === "percentage") {
                finalPrice = basePrice - (basePrice * discountVal / 100);
            } else if (sub.discount_type === "fixed_amount") {
                finalPrice = basePrice - discountVal;
            }
            finalPrice = Math.max(0, finalPrice).toFixed(2);

            /* ---------- INTERVAL ---------- */
            const frequency = sub.delivery_frequency || 1;
            const unit = sub.delivery_unit || "month";
            const intervalText =
                frequency == 1 ? `/${unit.replace(/s$/, "")}` : `/${frequency} ${unit}`;

            /* ---------- DATE ---------- */
            let nextBillingText = "N/A";
            if (sub.next_delivery_date) {
                nextBillingText = new Date(sub.next_delivery_date).toLocaleDateString(
                    "en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }
                );
            }

            /* ---------- PRODUCTS ---------- */
            const products = Array.isArray(planDetails.product_description) ?
                planDetails.product_description : [];

            const firstProductName = products[0]?.name || planName;
            const extraCount = products.length > 1 ? products.length - 1 : 0;

            let productListHtml = "";
            products.forEach(p => {
                const imgUrl =
                    p.image ||
                    "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png";

                productListHtml += `
                <div style="display:flex;align-items:flex-start;margin-bottom:15px;padding-bottom:15px;border-bottom:1px solid #f3f4f6;">
                    <div style="width:45px;height:45px;flex-shrink:0;background:#f9fafb;border-radius:4px;overflow:hidden;border:1px solid #e5e7eb;margin-right:15px;">
                        <img src="${imgUrl}" style="width:100%;height:100%;object-fit:cover;">
                    </div>
                    <div>
                        <div style="font-size:12px;font-weight:700;color:#111;margin-bottom:4px;text-align:start;">
                            ${p.name}
                        </div>
                        <div style="font-size:11px;color:#6b7280;text-align:start;">
                            Qty: ${p.quantity}
                        </div>
                    </div>
                </div>
            `;
            });

            /* ---------- STATUS BADGE ---------- */
            let badgeText = "";
            let badgeBg = "";
            let badgeColor = "";

            if (!sub.active) {
                badgeText = "Cancelled";
                badgeBg = "#fee2e2";
                badgeColor = "#991b1b";
            } else if (sub.status === "pending") {
                badgeText = "Pending";
                badgeBg = "#fef3c7";
                badgeColor = "#92400e";
            } else {
                badgeText = "Active";
                badgeBg = "#dcfce7";
                badgeColor = "#166534";
            }

            const uniqueId = sub.id || index;
            const card = document.createElement("div");

            /* ---------- CARD ---------- */
            card.style.cssText = `
            border:1px solid #e5e7eb;
            border-radius:8px;
            background:white;
            margin-bottom:16px;
            width:100%;
            font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
            overflow:hidden;
            box-shadow:0 1px 2px rgba(0,0,0,0.05);
            font-size:90%;
        `;


            card.innerHTML = `
        <!-- HEADER -->
        <div onclick="window.toggleSubDetails('${uniqueId}')"
            style="cursor:pointer; padding:20px; display:flex; flex-direction:${isMobile ? "column" : "row"}; align-items:${isMobile ? "flex-start" : "center"}; justify-content:${isMobile ? "flex-start" : "space-between"}; gap:${isMobile ? "8px" : "0"}; background:#fff; width:100%;">

            <!-- TITLE (FULL WIDTH ON MOBILE) -->
            <div style="width:100%;">
                <h3 style="margin:0; font-size:${isMobile ? "14px" : "16px"}; font-weight:700; color:#111; text-align:start; line-height:1.3; word-break:normal; white-space:normal;">
                    ${firstProductName}
                </h3>
                ${extraCount ? `
                    <div style="font-size:12px;font-weight:600;color:#2563eb;margin-top:2px; text-align:start;">
                        +${extraCount} more
                    </div>
                ` : ""}
            </div>

            <!-- STATUS + PRICE + ARROW -->
            <div style="display:flex; align-items:center; gap:10px; white-space:nowrap; justify-content:space-between; ${isMobile ? "width:100%;" : ""}">
                <span style="background:${badgeBg}; color:${badgeColor}; font-size:11px; font-weight:600; padding:2px 8px; border-radius:999px;">
                    ${badgeText}
                </span>

                <div style="font-size:16px;font-weight:700;color:#111;display:flex;justify-content:center;">
                    ${symbol}${finalPrice}
                    <span style="font-size:13px;font-weight:400;color:#6b7280;padding:2px">
                        ${intervalText}
                    </span>
                    <div id="sub-icon-${uniqueId}" style="display:flex;align-items:center;">
                        <!-- DOWN ARROW (default visible) -->
                        <svg id="arrow-down-${uniqueId}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <!-- UP ARROW (hidden initially) -->
                        <svg id="arrow-up-${uniqueId}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" style="display:none;">
                            <polyline points="6 15 12 9 18 15"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <!-- BODY -->
        <div id="sub-body-${uniqueId}" style="display:none;border-top:1px solid #f3f4f6;">
            <!-- PRODUCTS -->
            <div style="padding:20px;">
                <h4 style="margin:0 0 15px;font-size:13px;font-weight:600;color:#374151;text-align:start;">
                    Products in this subscription
                </h4>
                ${productListHtml}
            </div>

            <!-- DETAILS -->
            <div style="background:#f9fafb;padding:20px;border-top:1px solid #f3f4f6;border-bottom:1px solid #f3f4f6;">
                <div style="display:flex;flex-wrap:wrap;gap:40px;">
                    <div style="flex:1;min-width:200px;">
                        <div style="font-size:13px;font-weight:600;color:#111;margin-bottom:8px;text-align:start;">
                            Next Billing Date
                        </div>
                        <div style="font-size:14px;color:#4b5563;text-align:start;">
                            ${nextBillingText}
                        </div>
                        <div style="font-size:12px;color:#9ca3af;margin-top:4px;text-align:start;">
                            You will be charged ${symbol}${finalPrice}
                        </div>
                    </div>

                    <div style="flex:1;min-width:200px;">
                        <div style="font-size:13px;font-weight:600;color:#111;margin-bottom:8px;text-align:start;">
                            Plan Details
                        </div>
                        <div style="font-size:13px;font-weight:600;color:#111;text-align:start;">
                            ${planName}
                        </div>
                        <div style="font-size:12px;color:#4b5563;text-align:start;">
                            ${planDescription}
                        </div>
                    </div>
                </div>
            </div>

            <!-- FOOTER -->
            <div style="padding:15px 20px;display:flex;justify-content:flex-end;gap:10px;background:#fff;">
                ${
                    sub.active && sub.status === "active"
                        ? `<button onclick="openDeleteModal('${sub.id}')" style="background:white;border:1px solid #d36969; color:#ef4444;padding:8px 16px;font-size:12px;cursor:pointer;">
                          X  Cancel
                          </button>`
                        : ""
                }
            </div>
        </div>
        `;

            container.appendChild(card);
        });

        /* ---------- PAGINATION ---------- */
        const totalToUse = window.savedTotalCount || apiTotalCount;
        if (totalToUse > pageSize || page > 1) {
            const totalPages = Math.ceil(totalToUse / pageSize);

            const pagination = document.createElement("div");
            pagination.style.cssText =
                "display:flex;justify-content:end;gap:15px;margin:30px 0;";

            pagination.innerHTML = `
            <button ${page === 1 ? "disabled" : ""} onclick="renderSubscription(${page - 1})">Previous</button>
            <span style="color:black";>Page ${page} of ${totalPages}</span>
            <button ${page >= totalPages ? "disabled" : ""} onclick="renderSubscription(${page + 1})">Next</button>
        `;

            container.appendChild(pagination);
        }
    }

    // =========================================================
    // PART 2: AVAILABLE PLANS (Section Added Here)
    // =========================================================

    try {
        const availResponse = await fetch(
            `https://api.subscriptions.axentraos.co.in/api/v1/plans/customer_get_product_plans/?shop=${shopName}&customer_id=${custId}`
        );
        const availJson = await availResponse.json();
        const allPlans = availJson?.data?.data || [];

        // Filter logic (adjust if you want to see all plans)
        const hiddenPlans = allPlans.filter(p => p.visible_on_product_page === false);

        if (hiddenPlans.length > 0) {
            const availableSection = document.createElement("div");
            availableSection.style.marginTop = "25px";
            availableSection.style.marginBottom = "10px";
            availableSection.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

            const heading = document.createElement("h2");
            heading.innerText = "Available Plans";
            heading.style.cssText = `font-size: 16px; font-weight: 700; color: #000; margin-bottom: 24px; text-align:start;`;
            availableSection.appendChild(heading);

            const plansContainer = document.createElement("div");
            plansContainer.style.cssText = `display: flex; flex-wrap: wrap; gap: 24px; justify-content: flex-start; align-items: stretch;`;

            hiddenPlans.forEach((plan, index) => {
                const planPrice = parseFloat(plan.price || 0).toFixed(2);
                let headerUnit = "/month";
                if (plan.delivery_freq_conf && plan.delivery_freq_conf.length > 0) {
                    const firstConf = plan.delivery_freq_conf[0];
                    if (firstConf.delivery_frequency === 1) {
                        headerUnit = `/${firstConf.delivery_unit}`;
                    } else {
                        headerUnit = `/${firstConf.delivery_frequency} ${firstConf.delivery_unit}s`;
                    }
                }

                // --- LOGIC: Variant IDs with "Show More" ---
                let variantsHtml = "";
                try {
                    let rawVariants = plan.product_variant_ids;
                    if (rawVariants) {
                        // Parse if string
                        let variantsObj = rawVariants;
                        if (typeof rawVariants === 'string') {
                            variantsObj = JSON.parse(rawVariants.replace(/'/g, '"'));
                        }

                        const variantIds = Object.keys(variantsObj);

                        const products = Array.isArray(plan.product_description) ?
                            plan.product_description : [];

                        const totalVars = products.length;

                        if (totalVars > 0) {
                            // Generate Unique IDs for toggling
                            const uniqueId = plan.id || index;
                            const extraContainerId = `vars-extra-${uniqueId}`;
                            const toggleBtnId = `vars-btn-${uniqueId}`;
                            const hiddenCount = totalVars - 1;

                            variantsHtml += `<div style="background: #f9fafb; padding: 10px; border-radius: 6px; border: 1px solid #f3f4f6; margin-bottom: 15px;">`;

                            // Header Row
                            variantsHtml += `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 6px;">
                                <div style="font-size: 11px; font-weight: 700; color: #9ca3af; ">Included Products</div>`;

                            // "Show More" Button (Only if > 1 item)
                            if (totalVars > 1) {
                                variantsHtml += `
                                    <div id="${toggleBtnId}" 
                                         onclick="window.toggleVariants('${extraContainerId}', '${toggleBtnId}', ${hiddenCount})" 
                                         style="font-size: 9px; color: #2563eb; cursor: pointer; font-weight: 600;">
                                         Show More (+${hiddenCount})
                                    </div>`;
                            }
                            variantsHtml += `</div>`; // End Header Row

                            // Function to generate a single row HTML
                            const createRow = (product) => `
                              <div style="display: flex; justify-content: space-between; align-items: start; font-size: 12px; color: #374151; margin-bottom: 4px; border-bottom: 1px dashed #e5e7eb; padding-bottom: 2px;">
                                <div style="display:flex; flex-direction:column;">
                                  <span style="font-size:10px; color:#6b7280;text-align:start;">Product</span>
                                  <span style="font-family: monospace; font-weight:500;font-size:10px;">${product.name}</span>
                                </div>
                                <div style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 99px; font-size: 7px; font-weight: 600;">
                                  Qty: ${product.quantity}
                                </div>
                              </div>`;

                            // 1. Render FIRST Item (Always Visible)
                            variantsHtml += createRow(products[0]);

                            // REMAINING products
                            if (totalVars > 1) {
                                variantsHtml += `<div id="${extraContainerId}" style="display: none;">`;
                                for (let i = 1; i < totalVars; i++) {
                                    variantsHtml += createRow(products[i]);
                                }
                                variantsHtml += `</div>`;
                            }

                            variantsHtml += `</div>`; // End Wrapper
                        }
                    }
                } catch (e) {
                    console.warn("Error parsing product_variant_ids:", e);
                }
                // ------------------------------------------------

                let featuresHtml = "";
                if (plan.delivery_freq_conf && plan.delivery_freq_conf.length > 0) {
                    plan.delivery_freq_conf.forEach(conf => {
                        const freq = conf.delivery_frequency;
                        const unit = conf.delivery_unit;
                        const label = freq === 1 ? `Every ${unit}` : `Every ${freq} ${unit}s`;

                        let discountText = "";
                        if (conf.discount_value > 0) {
                            if (conf.discount_type === 'percentage') {
                                discountText = `${conf.discount_value}% OFF`;
                            } else {
                                discountText = `${symbol}${conf.discount_value} OFF`;
                            }
                        }

                        const featureText = discountText ? `${label} (${discountText})` : label;
                        const checkIcon = `
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="min-width: 16px;">
                            <circle cx="12" cy="12" r="10" fill="#22C55E"/>
                            <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`;

                        featuresHtml += `
                            <li style="display: flex; align-items: flex-start; margin-bottom: 12px; font-size: 12px; color: #374151;">
                                <div style="margin-right: 10px; margin-top: 2px;">${checkIcon}</div>
                                <span style="line-height: 1.4;">${featureText}</span>
                            </li>
                        `;
                    });
                } else {
                    featuresHtml = `<li style="font-size:12px; color:#9ca3af; margin-bottom:12px;">Standard Features</li>`;
                }

                const card = document.createElement("div");
                card.style.cssText = `
                    flex: 0 1 300px; 
                    min-width: 340px;
                    max-width: 100%;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    padding: 20px; 
                    background: #fff;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                `;

                card.innerHTML = `
                    <div>
                        <h3 style="font-size: 15px; font-weight: 700; color: #111; margin: 0 0 5px 0;text-align:start;">${plan.plan_name}</h3>
                        <div style="display: flex; align-items: baseline; margin-bottom: 5px;">
                            <span style="font-size: 18px; font-weight: 800; color: #111;">${symbol}${planPrice}</span>
                            <span style="font-size: 11px; font-weight: 400; color: #6b7280; margin-left: 2px;">${headerUnit}</span>
                        </div>
                        
                        ${variantsHtml}

                        <ul style="list-style: none; padding: 0; margin: 0 0 24px 0;">
                            ${featuresHtml}
                        </ul>
                    </div>
                    <button class="sub-btn" 
                        style="width: 100%; padding: 10px 14px; background-color: #fff; color: #111; border: 1px solid #d1d5db; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.2s ease; text-align: center; box-shadow: 0 1px 2px rgba(0,0,0,0.05);" 
                        onmouseover="this.style.borderColor='#9ca3af'; this.style.backgroundColor='#f9fafb'" 
                        onmouseout="this.style.borderColor='#d1d5db'; this.style.backgroundColor='#fff'">
                        ${plan.plan_name.toLowerCase().includes('enterprise') ? 'Contact Sales' : 'Subscribe'}
                    </button>
                `;

                const btn = card.querySelector(".sub-btn");
                btn.onclick = function() {
                    openSubscriptionModal(plan);
                };

                plansContainer.appendChild(card);
            });

            availableSection.appendChild(plansContainer);
            container.appendChild(availableSection);
        }

    } catch (e) {
        console.error("Error fetching available plans:", e);
    }
}

function setupDeleteModal() {
    if (!document.getElementById("deleteModal")) {
        const modal = document.createElement("div");
        modal.id = "deleteModal";
        modal.style.cssText = `display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 99999; justify-content: center; align-items: center; padding: 20px; box-sizing: border-box;`;
       modal.innerHTML = `
        <div style="background:white; width:100%; max-width:400px; border-radius:10px; padding:20px;">
            <h3 id="modalTitle" style="margin:0 0 10px; font-size:18px;color:black">Cancel Subscription?</h3>
            <p id="modalMessage" style="font-size:14px; color:#6b7280;">Are you sure you want to cancel this subscription?</p>
            <div id="modalLoader" style="display:none; margin: 10px 0; width: 25px; height: 25px; border: 3px solid #e5e7eb; border-top-color: #3b82f6; border-radius: 50%; animation: spin 1s linear infinite;"></div>
        <div id="modalButtons" style="display:flex; justify-content:flex-end; gap:10px; flex-wrap:wrap;">
                <button onclick="closeDeleteModal()" style="padding:8px 14px; border:1px solid #d1d5db; background:white; border-radius:6px;">Keep Plan</button>
                <button onclick="confirmDelete()" style="padding:8px 14px; background:#ef4444; color:white; border:none; border-radius:6px;">Confirm</button>
            </div>
        </div>`;
        document.body.appendChild(modal);
    }
}

function setupSubscriptionModal() {
    if (!document.getElementById("subscriptionModal")) {
        const modal = document.createElement("div");
        modal.id = "subscriptionModal";
        modal.style.cssText = `display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 99999; justify-content: center; align-items: center; padding: 20px; box-sizing: border-box; overflow-y: auto;`;
        
        // Inner container
        modal.innerHTML = `
            <div style="background:white; width:100%; max-width:600px; border-radius:10px; padding:20px; max-height: 90vh; overflow-y: auto; display: flex; flex-direction: column;">
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:15px; margin-bottom:15px;">
                     <h3 style="margin:0; font-size:18px; font-weight:700;color:black;">Subscribe to Plan</h3>
                     <button id="final-close" style="background:none; border:none; font-size:24px; cursor:pointer;">&times;</button>
        </div>
                <div id="subscription-modal-body">
                    <!-- Dynamic Content Loaded Here -->
                </div>
                <!-- Footer area is handled dynamically in showStep2 logic -->
                <div id="subscription-modal-footer" style="margin-top:20px; display:flex; justify-content:flex-end; gap:10px;"></div>
    </div>
`;
        document.body.appendChild(modal);

        // Attach generic close handler
        document.getElementById("final-close").onclick = closeSubModal1;
    }
    }

// =========================================================
// MODAL LOGIC (DELETE)
// =========================================================
    openDeleteModal = function (id) {
        window.subscriptionToDelete = id;
        document.getElementById("deleteModal").style.display = "flex";
    };

closeDeleteModal = function () {
    const title = document.getElementById("modalTitle");
    const message = document.getElementById("modalMessage");
    const buttons = document.getElementById("modalButtons");
    title.textContent = "Cancel Subscription?";
    message.textContent = "Are you sure you want to cancel this subscription?";
    message.style.color = "#6b7280";
    buttons.style.display = "flex";
    document.getElementById("deleteModal").style.display = "none";
    window.subscriptionToDelete = null;
};

  confirmDelete = async function () {
    if (!window.subscriptionToDelete) return;
    const title = document.getElementById("modalTitle");
    const message = document.getElementById("modalMessage");
    const buttons = document.getElementById("modalButtons");
    const loader = document.getElementById("modalLoader");
    loader.style.display = "block";
    buttons.style.display = "none";
    title.textContent = "Processing...";
    message.textContent = "Please wait while we cancel your subscription...";
    message.style.color = "#6b7280";
    try {
        await fetch(`https://api.subscriptions.axentraos.co.in/api/v1/plans/customer_subscription/?customer_subscription_plan_id=${window.subscriptionToDelete}`, { method: "DELETE" });
        if(window.savedTotalCount > 0) window.savedTotalCount--;
        loader.style.display = "none";
        title.textContent = "Subscription Cancelled!";
        message.textContent = "Your subscription has been successfully cancelled.";
        message.style.color = "#166534";
        setTimeout(() => { closeDeleteModal(); renderSubscription(window.savedTotalCount > 0 ? 1 : 1); }, 3000);
    } catch (e) {
        loader.style.display = "none";
        title.textContent = "Failed!";
        message.textContent = "Something went wrong. Please try again.";
        message.style.color = "#991b1b";
        buttons.style.display = "flex";
    }
};

// =========================================================
// MODAL LOGIC (SUBSCRIBE / "STEP 2")
// =========================================================

closeSubModal1 = function() {
    document.getElementById("subscriptionModal").style.display = "none";
}

openSubscriptionModal = function(plan) {
    const modal = document.getElementById("subscriptionModal");
    const body = document.getElementById("subscription-modal-body");
    const footerContainer = document.getElementById("subscription-modal-footer");
    
    // 1. Get Default Address Data
    const defaultAddress = getDefaultAddress(); 
    
    const addressDefaults = {
        shipping: { ...defaultAddress },
        billing: { ...defaultAddress }
    };

    // --- SETUP: Custom Styles for Very Thin Scrollbar ---
    const customStyles = `
    <style>
        #subscriptionModal::-webkit-scrollbar,
        .thin-scroll::-webkit-scrollbar { width: 2px; height: 2px; }
        #subscriptionModal::-webkit-scrollbar-track,
        .thin-scroll::-webkit-scrollbar-track { background: transparent; }
        #subscriptionModal::-webkit-scrollbar-thumb,
        .thin-scroll::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 2px; }
        #subscriptionModal::-webkit-scrollbar, .thin-scroll { scrollbar-width: thin; scrollbar-color: #d1d5db transparent; }
    </style>
    `;

    // --- LOGIC: Parse Included Products (Product Names) ---
    let variantsListHtml = "";
    let hasVariants = false;
    
    // 1. Try to get Product Names from description
    const productList = Array.isArray(plan.product_description) ? plan.product_description : [];

    if (productList.length > 0) {
        hasVariants = true;
        productList.forEach(prod => {
            const name = prod.name || "Product";
            const qty = prod.quantity || 1;

            variantsListHtml += `
            <div style="display: flex; justify-content: space-between; align-items: start; padding: 6px 0; border-bottom: 1px dashed #e5e7eb; font-size: 11px;">
                <div style="display:flex; align-items:start; gap:6px;">
                    <div style="margin-top:2px;">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    </div>
                    <span style="color: #374151; line-height:1.3;">
                        <strong>${name}</strong>
                    </span>
                </div>
                <span style="background: #e0f2fe; color: #0284c7; padding: 1px 6px; border-radius: 4px; font-size: 9px; font-weight: 600; white-space:nowrap; margin-left:10px;">Qty: ${qty}</span>
            </div>`;
        });
    } else {
        // 2. Fallback to Variant IDs if description is missing
        try {
            let rawVariants = plan.product_variant_ids;
            if (rawVariants) {
                let variantsObj = rawVariants;
                if (typeof rawVariants === 'string') {
                    variantsObj = JSON.parse(rawVariants.replace(/'/g, '"'));
                }
                const ids = Object.keys(variantsObj);
                if (ids.length > 0) {
                    hasVariants = true;
                    ids.forEach(id => {
                        const qty = variantsObj[id];
                        variantsListHtml += `
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 4px 0; border-bottom: 1px dashed #e5e7eb; font-size: 11px;">
                            <div style="display:flex; align-items:center; gap:6px;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                                <span style="color: #374151;">Variant: <span style="font-family:monospace;">${id}</span></span>
                            </div>
                            <span style="background: #e0f2fe; color: #0284c7; padding: 1px 6px; border-radius: 4px; font-size: 9px; font-weight: 600;">Qty: ${qty}</span>
                        </div>`;
                    });
                }
            }
        } catch (e) {
            console.warn("Error parsing variants fallback:", e);
        }
    }

    const variantsContainerHtml = hasVariants ? `
        <div style="margin-top:10px; margin-bottom:10px;">
            <label style="font-weight:600; font-size:12px; color:#374151; display:block; margin-bottom:4px;">Included Products</label>
            <div class="thin-scroll" style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 4px 12px; max-height: 100px; overflow-y: auto;">
                ${variantsListHtml}
            </div>
        </div>
    ` : ``;

    // --- LOGIC: Delivery Frequency Options ---
    let frequencyOptionsHtml = "";
    let hasFrequencies = plan.delivery_freq_conf && plan.delivery_freq_conf.length > 0;
    const currencySymbol = "₹"; 

    if (hasFrequencies) {
        plan.delivery_freq_conf.forEach((conf, index) => {
            let label = "";
            if(conf.delivery_frequency === 1) {
                const unit = conf.delivery_unit.endsWith('s') ? conf.delivery_unit.slice(0, -1) : conf.delivery_unit;
                label = `Every ${unit}`;
            } else {
                label = `Every ${conf.delivery_frequency} ${conf.delivery_unit}s`;
            }

            if (conf.discount_value > 0) {
                if (conf.discount_type === 'percentage') {
                    label += ` (${conf.discount_value}% OFF)`;
                } else {
                    label += ` (${currencySymbol}${conf.discount_value} OFF)`;
                }
            }
            frequencyOptionsHtml += `<option value="${index}">${label}</option>`;
        });
    } else {
        frequencyOptionsHtml = `<option value="-1">Standard Delivery</option>`;
    }

    modal.style.display = "flex";

    const planName = plan.plan_name || "";
    const planId = plan.id;

    // Inject Styles + Content
    body.innerHTML = `
    ${customStyles}
    <div style="display:flex;flex-direction:column;gap:12px; padding-bottom:5px;">
      <!-- Header Info -->
      <div style="display:flex;gap:10px;align-items:center;">
        <div>
          <div style="font-size:14px;font-weight:700;color:black;">${escapeHtml(planName)}</div>
          <div style="font-size:10px;color:#6b7280;">Plan ID: ${escapeHtml(planId)}</div>
        </div>
      </div>

      <!-- INCLUDED PRODUCTS LIST -->
      ${variantsContainerHtml}

      <!-- DELIVERY FREQUENCY SELECTOR -->
      <div>
        <label style="font-weight:600; font-size:13px; color:black; display:block; margin-bottom:4px;">Delivery Frequency</label>
        <select id="plan-frequency-select" style="width:100%; height:36px; border:1px solid #d1d5db; border-radius:6px; padding:0 8px; background:white; font-size:11px; color:#374151;">
            ${frequencyOptionsHtml}
        </select>
      </div>

      <!-- SHIPPING ADDRESS -->
      <div style="margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
        <label style="font-weight:600; font-size:13px;color:black;">Delivery Address</label>
        <button id="edit-shipping" style="padding:4px 10px;border:1px solid #d1d5db;border-radius:6px;background:#fff;cursor:pointer;font-size:10px;">Edit</button>
      </div>

      <div id="shipping-display" style="padding:10px;border:1px solid #e5e7eb;border-radius:8px;background:#f9fafb; font-size:11px; line-height:1.4;">
        <div style="font-weight:600;color:black;">${escapeHtml(addressDefaults.shipping.first_name)} ${escapeHtml(addressDefaults.shipping.last_name)}</div>
        <div style="color:black;">${escapeHtml(addressDefaults.shipping.address1)}</div>
        <div style="color:black;">${escapeHtml(addressDefaults.shipping.address2)}</div>
        <div style="color:black;">${escapeHtml(addressDefaults.shipping.city)}, ${escapeHtml(addressDefaults.shipping.province)} ${escapeHtml(addressDefaults.shipping.zip)}</div>
        <div style="color:black;">${escapeHtml(addressDefaults.shipping.country)}</div>
        <div style="color:#6b7280;margin-top:4px;">${escapeHtml(addressDefaults.shipping.phone)}</div>
      </div>

      <div id="shipping-edit" style="display:none;grid-template-columns:1fr 1fr;gap:8px;">
        <input id="addr-first-name" class="addr-input" placeholder="First Name" value="${escapeHtml(addressDefaults.shipping.first_name)}">
        <input id="addr-last-name" class="addr-input" placeholder="Last Name" value="${escapeHtml(addressDefaults.shipping.last_name)}">
        <input id="addr-address1" class="addr-input" placeholder="Address Line 1" style="grid-column:span 2" value="${escapeHtml(addressDefaults.shipping.address1)}">
        <input id="addr-address2" class="addr-input" placeholder="Address Line 2" style="grid-column:span 2" value="${escapeHtml(addressDefaults.shipping.address2)}">
        <input id="addr-city" class="addr-input" placeholder="City" value="${escapeHtml(addressDefaults.shipping.city)}">
        <input id="addr-province" class="addr-input" placeholder="State" value="${escapeHtml(addressDefaults.shipping.province)}">
        <input id="addr-zip" class="addr-input" placeholder="Pincode" value="${escapeHtml(addressDefaults.shipping.zip)}">
        <input id="addr-country" class="addr-input" placeholder="Country" value="${escapeHtml(addressDefaults.shipping.country)}">
        <input id="addr-phone" class="addr-input" placeholder="Phone" style="grid-column:span 2" value="${escapeHtml(addressDefaults.shipping.phone)}">
      </div>

      <!-- BILLING ADDRESS -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px;">
        <label style="font-weight:600; font-size:13px;color:black;">Billing Address</label>
        <button id="edit-billing" style="padding:4px 10px;border:1px solid #d1d5db;border-radius:6px;background:#fff;cursor:pointer;font-size:10px;">Edit</button>
      </div>

      <div id="billing-display" style="padding:10px;border:1px solid #e5e7eb;border-radius:8px;background:#f9fafb; font-size:11px; line-height:1.4;">
        <div style="font-weight:600;color:black;">${escapeHtml(addressDefaults.billing.first_name)} ${escapeHtml(addressDefaults.billing.last_name)}</div>
        <div style="color:black;">${escapeHtml(addressDefaults.billing.address1)}</div>
        <div style="color:black;">${escapeHtml(addressDefaults.billing.address2)}</div>
        <div style="color:black;">${escapeHtml(addressDefaults.billing.city)}, ${escapeHtml(addressDefaults.billing.province)} ${escapeHtml(addressDefaults.billing.zip)}</div>
        <div style="color:black;">${escapeHtml(addressDefaults.billing.country)}</div>
        <div style="color:#6b7280;margin-top:4px;">${escapeHtml(addressDefaults.billing.phone)}</div>
      </div>

      <div id="billing-edit" style="display:none;grid-template-columns:1fr 1fr;gap:8px;">
        <input id="bill-first-name" class="addr-input" placeholder="First Name" value="${escapeHtml(addressDefaults.billing.first_name)}">
        <input id="bill-last-name" class="addr-input" placeholder="Last Name" value="${escapeHtml(addressDefaults.billing.last_name)}">
        <input id="bill-address1" class="addr-input" placeholder="Address Line 1" style="grid-column:span 2" value="${escapeHtml(addressDefaults.billing.address1)}">
        <input id="bill-address2" class="addr-input" placeholder="Address Line 2" style="grid-column:span 2" value="${escapeHtml(addressDefaults.billing.address2)}">
        <input id="bill-city" class="addr-input" placeholder="City" value="${escapeHtml(addressDefaults.billing.city)}">
        <input id="bill-province" class="addr-input" placeholder="State" value="${escapeHtml(addressDefaults.billing.province)}">
        <input id="bill-zip" class="addr-input" placeholder="Pincode" value="${escapeHtml(addressDefaults.billing.zip)}">
        <input id="bill-country" class="addr-input" placeholder="Country" value="${escapeHtml(addressDefaults.billing.country)}">
        <input id="bill-phone" class="addr-input" placeholder="Phone" style="grid-column:span 2" value="${escapeHtml(addressDefaults.billing.phone)}">
      </div>
    </div>
    `;

    // 4. Style Inputs
    document.querySelectorAll(".addr-input").forEach(inp => {
        inp.style.height = "36px";
        inp.style.border = "1px solid #d1d5db";
        inp.style.borderRadius = "6px";
        inp.style.padding = "4px 8px";
        inp.style.fontSize = "11px";
        inp.style.width = "100%";
        inp.style.boxSizing = "border-box";
    });

    // 5. Edit Button Logic
    const shippingDisplay = document.getElementById("shipping-display");
    const shippingEdit = document.getElementById("shipping-edit");
    const editShippingBtn = document.getElementById("edit-shipping");

    const billingDisplay = document.getElementById("billing-display");
    const billingEdit = document.getElementById("billing-edit");
    const editBillingBtn = document.getElementById("edit-billing");

    editShippingBtn.addEventListener("click", () => {
        const editing = shippingEdit.style.display === "none";
        shippingDisplay.style.display = editing ? "none" : "block";
        shippingEdit.style.display = editing ? "grid" : "none";
        editShippingBtn.textContent = editing ? "Save" : "Edit";
    });

    editBillingBtn.addEventListener("click", () => {
        const editing = billingEdit.style.display === "none";
        billingDisplay.style.display = editing ? "none" : "block";
        billingEdit.style.display = editing ? "grid" : "none";
        editBillingBtn.textContent = editing ? "Save" : "Edit";
    });

    // 6. Footer Buttons
    footerContainer.innerHTML = `
      <button id="step2-close" style="padding:0 12px;height:34px;border:1px solid #d1d5db;border-radius:6px;background:#fff;cursor:pointer;font-size:11px;">Close</button>
      <button id="step2-submit" style="padding:0 12px;height:34px;border-radius:6px;background:#0d9488;color:white;cursor:pointer;border:none;font-size:11px;">Subscribe Now</button>
    `;

    document.getElementById("step2-close").onclick = closeSubModal1;

    // 7. Submit Logic
    document.getElementById("step2-submit").addEventListener("click", async () => {
        const subBtn = document.getElementById("step2-submit");
        subBtn.innerText = "Processing...";
        subBtn.disabled = true;

        const freqSelect = document.getElementById("plan-frequency-select");
        let deliveryConf = null;
        if (freqSelect) {
            const selectedIndex = parseInt(freqSelect.value);
            if (selectedIndex >= 0 && plan.delivery_freq_conf && plan.delivery_freq_conf[selectedIndex]) {
                deliveryConf = plan.delivery_freq_conf[selectedIndex];
            }
        }

        const finalShipping = {
            first_name: document.getElementById("addr-first-name").value,
            last_name: document.getElementById("addr-last-name").value,
            address1: document.getElementById("addr-address1").value,
            address2: document.getElementById("addr-address2").value,
            city: document.getElementById("addr-city").value,
            province: document.getElementById("addr-province").value,
            zip: document.getElementById("addr-zip").value,
            country: document.getElementById("addr-country").value,
            phone: document.getElementById("addr-phone").value
        };

        const finalBilling = {
            first_name: document.getElementById("bill-first-name").value,
            last_name: document.getElementById("bill-last-name").value,
            address1: document.getElementById("bill-address1").value,
            address2: document.getElementById("bill-address2").value,
            city: document.getElementById("bill-city").value,
            province: document.getElementById("bill-province").value,
            zip: document.getElementById("bill-zip").value,
            country: document.getElementById("bill-country").value,
            phone: document.getElementById("bill-phone").value
        };

        let phone_code = "";
        let phone_number = defaultAddress.phone || "";
        if(finalShipping.phone) phone_number = finalShipping.phone;
        
        if (phone_number.startsWith("+")) {
            phone_code = phone_number.slice(0, 3);
            phone_number = phone_number.slice(3);
        }

        const customerName = (defaultAddress.first_name + " " + defaultAddress.last_name).trim() || "Customer";

        const finalPayload = {
            plan_id: planId,
            shop: Shopify.shop,
            customer_id: typeof customerId !== 'undefined' ? customerId : defaultAddress.customer_id,
            email: customerEmail, 
            customer_name: customerName,
            phone_code,
            phone_number,
            shipping_address: finalShipping,
            billing_address: finalBilling,
            delivery_freq_conf: deliveryConf 
        };

        console.log("🟢 FINAL Payload", finalPayload);

        try {
            const res = await fetch(
                "https://api.subscriptions.axentraos.co.in/api/v1/plans/subscription_purchase_view/",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(finalPayload)
                }
            );

            const result = await res.json();
            console.log("🟢 API Response:", result);

            const paymentUrl = result.payment_url || (result.data ? result.data.payment_url : null);
            const message = result.message || "Subscription created successfully";
            const subId = (result.data && result.data.subscription_id) ? result.data.subscription_id : "—";

            body.innerHTML = `
              <div style="padding:16px; text-align:center;">
                <h2 style="font-size:14px;font-weight:600; color:#10b981;">
                  ${escapeHtml(message)}
                </h2>
                <p style="margin-top:10px; font-size:12px;color:black;">
                  <strong >Subscription ID:</strong><br>
                  ${escapeHtml(subId)}
                </p>
                <p style="margin-top:12px; color:#6b7280; font-size:12px;">
                  Click the link below to complete payment:
                </p>
                <a href="${paymentUrl}" target="_blank" style="display:inline-block; margin-top:14px; background:#0d9488; color:white; padding:8px 16px; border-radius:6px; text-decoration:none; font-weight:500; font-size:12px;">
                  Proceed to Payment
                </a>
              </div>
            `;

            footerContainer.innerHTML = `
                <button id="step2-close-final" style="padding:0 12px;height:34px;border:1px solid #d1d5db;border-radius:6px;background:#fff;cursor:pointer;font-size:11px;">Close</button>
                <a href="${paymentUrl}" target="_blank">
                    <button style="padding:0 12px;height:34px;border-radius:6px;background:#0d9488;color:white;cursor:pointer;border:none;font-size:11px;">Proceed to Payment</button>
                </a>
            `;
            document.getElementById("step2-close-final").onclick = closeSubModal1;

        } catch (error) {
            console.error(error);
            subBtn.innerText = "Try Again";
            subBtn.disabled = false;
            alert("Failed to create subscription. Check console.");
        }
    });
};
function createEmptyItemsCard(type) {
    // Placeholder for a filled heart SVG, used if type is 'wishlist'
    const filledHeartSVG1 = `<svg class="xircls_svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>`;
    const filledHeartSVG = `<svg class="xircls_svg" width="30" height="30" fill="currentColor"  viewBox="0 0 24 24" 
    stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
        2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
        4.5 2.09C13.09 3.81 14.76 3 16.5 3 
        19.58 3 22 5.42 22 8.5c0 3.78-3.4 
        6.86-8.55 11.54L12 21.35z"/>
    </svg>`;
    
    const card = document.createElement("div");
    card.classList.add("empty-items-card");

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("empty-items-icon-container");

    const icon = document.createElement("div");
    icon.classList.add("empty-items-icon");
    if (type === "wishlist") {
        icon.innerHTML = filledHeartSVG;
    } else {
        // Default icon for other types
        icon.innerHTML = `<svg class="xircls_svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1.75a10.25 10.25 0 1 0 10.25 10.25A10.262 10.262 0 0 0 12 1.75zm0 18.5a8.25 8.25 0 1 1 8.25-8.25 8.26 8.26 0 0 1-8.25 8.25zm.75-13a.75.75 0 0 0-1.5 0v5.25a.75.75 0 0 0 .375.649l3 1.75a.75.75 0 0 0 .75-1.298L12.75 12.1z"/>
            </svg>`;
    }
    iconContainer.appendChild(icon);

    const heading = document.createElement("div");
    heading.classList.add("empty-items-heading");
    
    const paragraph = document.createElement("div");
    paragraph.classList.add("empty-items-paragraph");

    // Set text content based on the type
    if (type === "wishlist") {
        heading.textContent = "Your wishlist is empty";
        paragraph.textContent = "Items added to your wishlist will appear here";
    } else if (type === "order") {
        heading.textContent = "No orders to display!";
        paragraph.textContent = "Your orders will appear here";
    } else if (type === "points") {
        heading.textContent = "No points history available!";
        paragraph.textContent = "Redeemed points will be displayed here";
    } else if (type === "transaction") {
        heading.textContent = "No redemption methods available!";
    } else if (type === "WaystoEarn") {
        heading.textContent = "Earning options are not available at this time.";
    } else if (type === "offers") {
        heading.textContent = "No offers are currently available";
        paragraph.textContent = "Check back later for special discounts and promotions.";
    } else if (type === "offers") {
        heading.textContent = "No offers are currently available";
        paragraph.textContent = "Check back later for special discounts and promotions.";
    } else if (type === "error") {
        heading.textContent = "Could Not Load Offers";
        paragraph.textContent = "There was an error fetching data. Please try again later.";
    } else {
        heading.textContent = "No recently viewed items";
    }

    const cardWrapper = document.createElement("div");
    cardWrapper.appendChild(iconContainer);
    cardWrapper.appendChild(heading);
    if (paragraph.textContent) { // Only append paragraph if it has content
        cardWrapper.appendChild(paragraph);
    }
    cardWrapper.classList.add("empty-items-card-wrapper");
    card.appendChild(cardWrapper);

    return card;
}
async function syncSessionWishlistToMetafield() {
    const sessionWishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];
    console.log(
        "Syncing wishlist from sessionStorage to metafield:",
        sessionWishlist
    );
const itemId = "1456358"
    if (sessionWishlist.length > 0 && customerId) {
        try {
            // Fetch existing wishlist from metafield for logged-in user
            const { id: metafieldId, wishlist: existingWishlist } =
                await fetchWishlist();

            // Combine sessionStorage wishlist with the existing wishlist (if any)
            // No need to stringify and parse objects again; simply concatenate the arrays
            const combinedWishlist = [...existingWishlist, ...sessionWishlist];

            // Save the combined wishlist to the metafield
            await saveWishlist(combinedWishlist, metafieldId, itemId);

            // Clear the sessionStorage wishlist after syncing
            sessionStorage.removeItem("wishlist");
            console.log("Session wishlist successfully synced to metafield. Cleared sessionStorage.");
            const updated = await fetchWishlist();
            WishlistItemsCount = updated.wishlist.length;
            fetchWishlistOnReload();
            renderRecentlyViewed();
            
        } catch (error) {
            console.error("Error syncing wishlist to metafield:", error);
        }
    }
}
async function saveWishlist(wishlist, metafieldId, itemId) {
    if (customerId) {
        if (!metafieldId) {
            console.error("Metafield ID is null, cannot save wishlist");
            return;
        }

        try {
            const metafieldPayload = {
                customerId: customerId,
                shop: Shopify.shop,
                app: "oh_my_customer",
                metafieldId: metafieldId,
                productId: itemId,
                metafield: {
                    id: metafieldId,
                    namespace: "wishlist",
                    key: "items",
                    value: JSON.stringify(wishlist),
                    type: "json",
                },
            };

            const url = `https://${xirclsBaseUrl}/wishlist/update_metafield/`;

            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(metafieldPayload),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(`Error saving wishlist: ${data.message}`);
            }

            console.log("Wishlist successfully saved to metafield:", wishlist);
        } catch (error) {
            console.error("Error saving wishlist:", error);
        }
    } else {
        sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
        console.log("Logged out - Wishlist added to sessionStorage:", wishlist);
    }
}
function closeMenu() {
    const container1 = document.getElementById("xircls-menu-container");
    const container2List = document.getElementsByClassName("container-2");

    if (container1) container1.style.display = "none";

    // Show all elements with class "container-2"
    for (let i = 0; i < container2List.length; i++) {
        container2List[i].style.display = "block";
    }
}
function createInputField(labelText, inputType, value = "") {
    // Create a div to wrap the label and input
    const div = document.createElement("div");
    div.classList.add("input-field"); // Optional: Add a class for styling if needed

    // Create the label element
    const label = document.createElement("label");
    label.textContent = labelText;
    label.setAttribute("for", labelText.replace(" ", "").toLowerCase()); // Set 'for' attribute for accessibility

    // Create the input element
    const input = document.createElement("input");
    input.setAttribute("type", inputType);
    input.setAttribute("id", labelText.replace(" ", "").toLowerCase()); // Set ID to link with the label
    input.setAttribute("name", labelText.replace(" ", "").toLowerCase()); // Set name for form data
    input.setAttribute("placeholder", `Enter ${labelText}`);
    input.value = value; // Set the value of the input

    // Make input read-only if type is email
    if (inputType === "email") {
        input.setAttribute("readonly", true);
        input.setAttribute("disabled", true);
    }
    if (inputType === "number") {
        input.setAttribute("min", 0);
    }

    // Append the label and input to the div
    div.appendChild(label);
    div.appendChild(input);

    // Return the div containing the label and input
    return div;
}
function createSelectField(labelText, options, selectedValue = "") {
    // Create a div to wrap the label and select
    const div = document.createElement("div");
    div.classList.add("input-field"); // Optional: Add a class for styling if needed

    // Create the label element
    const label = document.createElement("label");
    label.textContent = labelText;
    label.setAttribute("for", labelText.replace(" ", "").toLowerCase()); // Set 'for' attribute for accessibility

    // Create the select element
    const select = document.createElement("select");
    select.setAttribute("id", labelText.replace(" ", "").toLowerCase()); // Set ID to link with the label
    select.setAttribute("name", labelText.replace(" ", "").toLowerCase()); // Set name for form data

    // Add options to the select element
    options.forEach((optionText) => {
        const option = document.createElement("option");
        option.value = optionText.toLowerCase().replace(" ", ""); // Set value attribute
        option.textContent = optionText; // Set option text

        if (option.value === selectedValue.toLowerCase().replace(" ", "")) {
            option.selected = true;
        }

        select.appendChild(option); // Append the option to the select
    });
    div.appendChild(label);
    div.appendChild(select);
    return div;
}
function getFunctionToCall(headingText, id) {
  console.log(headingText, "==============", id);

  // Based on the headingText, return a function that triggers an API call
  if (headingText === "Personal Information") {
      // This function now expects the `data` object to include the original birthdate
      // for comparison, e.g., data['original-birthdate'].
      return async function (data) {
          const updated_data = {
              customerId: customerId,
              customerData: {
                  first_name: data["first-name"],
                  last_name: data["last-name"],
                  email: data.email,
                  phone: data.contact,
                  metafields: [
                      {
                          namespace: "custom",
                          key: "name",
                          value: data["first-name"] + " " + data["last-name"],
                          type: "single_line_text_field",
                      },
                      {
                          namespace: "custom",
                          key: "date_of_birth",
                          value: data.birthdate || "",
                          type: "date",
                      },
                      {
                          namespace: "custom",
                          key: "gender",
                          value: data.gender || "",
                          type: "single_line_text_field",
                      },
                      {
                          namespace: "custom",
                          key: "country_code",
                          value: data["phone-code"] || "",
                          type: "single_line_text_field",
                      },
                      {
                          namespace: 'custom',
                          key: 'mobile_no',
                          value: data.contact || "",
                          type: 'single_line_text_field'
                      },
                  ],
              },
              shop: Shopify.shop,
              app: "oh_my_customer",
          };

          // --- START: ADDED BIRTHDATE API LOGIC ---
          const newBirthdate = data.birthdate || "";
          const originalBirthdate = cardData[0].data.Birthdate || ""; // Expects original value to be passed in data

          // Check if birthdate was added for the first time or changed
          if (newBirthdate && newBirthdate !== originalBirthdate) {
              console.log("Birthdate changed. Scheduling birthday reward.");

              const formData = new FormData();
              formData.append('email', data.email);
              formData.append('shop', Shopify.shop);
              formData.append('birthday', newBirthdate);

              try {
                  const response = await fetch('https://loyalty.axentraos.co.in/api/v1/customer/birthday_reward/', {
                      method: 'POST',
                      body: formData,
                  });

                  if (!response.ok) {
                      throw new Error(`HTTP Error: ${response.status}`);
                  }

                  const result = await response.json();
                  console.log('Successfully scheduled birthday reward:', result);
              } catch (error) {
                  console.error('Failed to schedule birthday reward:', error);
                  // Optionally, you can show an error to the user here
              }
          }
          // --- END: ADDED BIRTHDATE API LOGIC ---

          console.log("Saving Personal Information:", updated_data);
          updateCustomerDetails(updated_data);
      };
  }

  if (headingText === "Shipping Information" && id !== undefined) {
      return async function (data) {
          try {
             if(!data.default){
               const metafieldResponse = await fetch(
                `https://${xirclsBaseUrl}/wishlist/get_metafield/?customerId=${customerId}&shop=${Shopify.shop}&app=oh_my_customer`
            );
            const metafieldData = await metafieldResponse.json();
            const allMetafields = metafieldData?.metafields?.metafields || [];

            const addressMeta = allMetafields.find(
                (mf) => mf.namespace === "addressData" && mf.key === "items"
            );

            let addressItems = [];
            const existingMetafieldId = addressMeta?.id; 

            if (addressMeta?.value) {
                try {
                    const parsed = JSON.parse(addressMeta.value);
                    if (Array.isArray(parsed)) {
                        addressItems = parsed;
                    } else {
                        console.warn("Metafield value is not an array, resetting to []");
                    }
                } catch (e) {
                    console.warn("Error parsing metafield JSON, resetting to []");
                }
            }

            const addressIndex = addressItems.findIndex(item => item.address_id === id);

            if (addressIndex === -1) {
                console.warn(`Address with ID ${id} not found in metafield!`);
                return;
            }

            addressItems[addressIndex] = {
                ...addressItems[addressIndex], 
                contact_name: data.contactName !== undefined ? data.contactName : "",
                saveaddressas: data.saveAddressAs !== undefined ? data.saveAddressAs : "",
                relation: data.relationship !== undefined ? data.relationship : "",
            };
            console.log(addressItems, "submittt");

            const metafieldPayload = {
              customerId: customerId,
              shop: Shopify.shop,
              app: "oh_my_customer",
              metafieldId: existingMetafieldId,
              productId: 0 || "",
              metafield: {
                  ...(existingMetafieldId && { id: existingMetafieldId }),
                  namespace: "addressData",
                  key: "items",
                  value: JSON.stringify(addressItems),
                  type: "json",
              },
          };

          const saveResponse = await fetch(`https://${xirclsBaseUrl}/wishlist/update_metafield/`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(metafieldPayload),
          });

          const savedData = await saveResponse.json();

          if (!saveResponse.ok) {
              throw new Error(`Error updating metafield: ${savedData.message}`);
          }

          console.log("Saved updated address metadata:", savedData);
             }

              const updated_data = {
                  customerId: customerId,
                  addressId: id,
                  addressData: {
                      address1: data.addressline1,
                      address2: data.addressline2,
                      city: data.city,
                      province: data.state,
                      zip: data.zipcode,
                      country: data.country,
                  },
                  shop: Shopify.shop,
                  app: "oh_my_customer",
              };

              console.log("Saving Shipping Information:", data, updated_data, id);
              updateCustomerAddress(updated_data);
             
        createStatusToast("Address Updated", "Your changes have been saved! Your updated details are now active on your account.", "success");


          } catch (error) {
              console.error("Error saving shipping info:", error);
              createStatusToast("Couldn’t Update Address", "We couldn’t save your address. Please check the details and try again.", "error");
          }
      };
  }

  if (headingText === "Shipping Information" && id === undefined) {
      return async function (data) {
        console.log("address Data", data)
          try {
              const metafieldResponse = await fetch(
                  `https://${xirclsBaseUrl}/wishlist/get_metafield/?customerId=${customerId}&shop=${Shopify.shop}&app=oh_my_customer`
              );
              const metafieldData = await metafieldResponse.json();
              const allMetafields = metafieldData?.metafields?.metafields || [];

              const addressMeta = allMetafields.find(
                  (mf) => mf.namespace === "addressData" && mf.key === "items"
              );

              let addressItems = [];
              const existingMetafieldId = addressMeta?.id;

              if (addressMeta?.value) {
                  try {
                      const parsed = JSON.parse(addressMeta.value);
                      if (Array.isArray(parsed)) {
                          addressItems = parsed;
                      } else {
                          console.warn("Metafield value is not an array, resetting to []");
                      }
                  } catch (e) {
                      console.warn("Error parsing metafield JSON, resetting to []");
                  }
              }

              const addressPayload = {
                  customerId: customerId,
                  addressData: {
                      address1: data["address line 1"],
                      address2: data["address line 2"],
                      city: data.city,
                      province: data.state,
                      zip: data["zip code"],
                      country: data.country,
                  },
                  shop: Shopify.shop,
                  app: "oh_my_customer",
              };

              const addressResponse = await addCustomerAddress(addressPayload);
              const newAddressId = addressResponse?.customer_address?.id;

              console.log("Created new address:", newAddressId);

              if (!newAddressId) {
                  throw new Error("Address creation failed or ID not returned.");
              }

              addressItems.push({
                  address_id: newAddressId,
                  contact_name: data.contactName || "",
                  saveaddressas: data.saveAddressAs || "",
                  relation: data.relationship || "",
              });

              const metafieldPayload = {
                  customerId: customerId,
                  shop: Shopify.shop,
                  app: "oh_my_customer",
                  metafieldId: existingMetafieldId,
                  productId: 0 || "",
                  metafield: {
                      ...(existingMetafieldId && { id: existingMetafieldId }),
                      namespace: "addressData",
                      key: "items",
                      value: JSON.stringify(addressItems),
                      type: "json",
                  },
              };

              const url = existingMetafieldId
                  ? `https://${xirclsBaseUrl}/wishlist/update_metafield/`
                  : `https://${xirclsBaseUrl}/wishlist/create_metafield/`;

              const saveResponse = await fetch(url, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(metafieldPayload),
              });

              const savedData = await saveResponse.json();
              if (!saveResponse.ok) {
                  throw new Error(`Error saving metafield: ${savedData.message}`);
              }

              console.log("Saved updated address metadata:", savedData);
        createStatusToast("Address Updated", "Your changes have been saved! Your updated details are now active on your account.", "success");

          } catch (error) {
              console.error("Error saving shipping info:", error);
              createStatusToast("Couldn’t Update Address", "We couldn’t save your address. Please check the details and try again.", "error");
          }
      };
  }

  return function (data) {
      console.error("Unknown heading:", headingText);
  };
}
function Instaclicked() {
  console.log("InstaClicked", LoyaltySettings?.earn_rule_json?.instagram_url);

  // Shopify Liquid variable
  const shopDomain = Shopify.shop;
  const apiUrl = 'https://loyalty.axentraos.co.in/api/v1/customer/credit_social_points/';

  const payload = {
    email: profile_email,
    shop: shopDomain,
    followed: true,
    followed_type: "instagram"
  };

  // Fire and forget
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
    keepalive: true
  }).then(response => {
    console.log('API response sent successfully.');
  }).catch(error => {
    console.error('Failed to send API request', error);
  });

  // Open in new tab
  window.open(LoyaltySettings?.earn_rule_json?.instagram_url, '_blank');
}

function Facebookclicked() {
  console.log("facebookredirect", LoyaltySettings?.earn_rule_json?.facebook_url);

  const shopDomain = Shopify.shop;
  const apiUrl = 'https://loyalty.axentraos.co.in/api/v1/customer/credit_social_points/';

  const payload = {
    email: profile_email,
    shop: shopDomain,
    followed: true,
    followed_type: "facebook"
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
    keepalive: true
  }).then(response => {
    console.log('API response sent successfully.');
  }).catch(error => {
    console.error('Failed to send API request', error);
  });

  // Open in new tab
  window.open(LoyaltySettings?.earn_rule_json?.facebook_url, '_blank');
}
 
  
async function createProfileCard() {
    const { wishlist } = await fetchWishlist();
    console.log(wishlist, 'wishhhhhhhhhhhh')
    const profileCard = document.createElement("div");
    profileCard.classList.add("profile-data-card");
    profileCard.id = `profile-data-card`;

    const userAvatarDiv = document.createElement("div");
    userAvatarDiv.classList.add("user-avatar");

    let avatarElement;
    if (img_url) {
        // Use image if img_url exists
        const avatar = document.createElement("img");
        avatar.src = img_url;
        avatar.id = "logoImage";
        avatar.alt = "User Avatar";
        avatar.classList.add("avatar", "image-avatar");

        // Open file input on click
        avatar.onclick = () => {
            document.getElementById("imageInput").click();
        };

        avatarElement = avatar;
    } else {
        // Use text avatar if img_url is not available
        const avatarText = document.createElement("div");
        avatarText.classList.add("avatar", "text-avatar");
        avatarText.textContent =
            img_fn.charAt(0) + img_ln.charAt(0);

        // Open file input on click
        avatarText.onclick = () => {
            document.getElementById("imageInput").click();
        };

        avatarElement = avatarText;
    }


    // Create the container
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    userAvatarDiv.append(avatarElement);
    const imageContainerWrapper = document.createElement("div");
    imageContainerWrapper.classList.add("image-container-wrapper");
    // Add the plus icon
    const plusIcon = document.createElement("div");
    plusIcon.classList.add("xircls-plus-icon");
    plusIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;"><path d="M16 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" style="color: var(--rightbtn-text-color); background-color: var(--rightbtn-bg-color);"></path><path d="M12 9v6"></path><path d="M9 12h6"></path></svg>';
    plusIcon.onclick = () => {
        document.getElementById("imageInput").click();
    };

    imageContainerWrapper.appendChild(avatarElement); // Make sure this is attached.
    imageContainerWrapper.appendChild(plusIcon);
    setTimeout(() => {
      if (myProfile.includes("Profile_Picture")) {
        imageContainer.appendChild(imageContainerWrapper);
    }
    }, 800)
    userAvatarDiv.appendChild(imageContainer);

    const profDiv = document.createElement("div");
    const avatarText = document.createElement("label");
    avatarText.textContent = profile_email;

    const nameText = document.createElement("label");
    nameText.textContent = prof_name;
    nameText.classList.add("profileName");
    avatarText.classList.add("profileEmail");
    profileCard.append(userAvatarDiv);
    profDiv.append(nameText);
    profDiv.append(avatarText);
    profDiv.classList.add("prof-div");
    const statsDiv = document.createElement("div");
    const orderDiv = document.createElement("div");
    const wishlistDiv = document.createElement("div");
    const orderNum = document.createElement("span");
    const orderText = document.createElement("span");
    const wishlistNum = document.createElement("span");
    const wishlistText = document.createElement("span");
    orderNum.textContent = customerOrders.length || "0";
    orderText.textContent = "Orders";
    wishlistNum.textContent = wishlist.length;
    wishlistText.textContent = "Wishlist";
    orderNum.classList.add("stats-number");
    wishlistNum.classList.add("stats-number");
    orderText.classList.add("stats-text");
    wishlistText.classList.add("stats-text");
    orderDiv.appendChild(orderNum);
    orderDiv.appendChild(orderText);
    wishlistDiv.appendChild(wishlistNum);
    wishlistDiv.appendChild(wishlistText);
    orderDiv.classList.add("stats-column");
    wishlistDiv.classList.add("stats-column");

    statsDiv.appendChild(orderDiv);
    statsDiv.appendChild(wishlistDiv);
    statsDiv.classList.add("stats-div");
    userAvatarDiv.append(profDiv);
    userAvatarDiv.append(statsDiv);
    profileCard.append(userAvatarDiv);

    return profileCard;
}
function createContactCard() {
    const contactCard = document.createElement("div");
    contactCard.classList.add("contact-data-card"); // General card class
    contactCard.id = `contact-data-card`; // Unique ID for each card

    // Add heading
    const heading = document.createElement("div");
    heading.textContent = "Contact Information";
    heading.classList.add("contact-card-heading"); // Add class for styling
    contactCard.appendChild(heading);

    const contactInfoDiv = document.createElement("div");
    contactInfoDiv.classList.add("contact-info");

    // Email
    const emailDiv = document.createElement("div");
    emailDiv.classList.add("contact-info-item"); // Add class for consistent styling
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email Address";
    const emailValue = document.createElement("label");
    emailValue.textContent = profile_email; // Static Email

    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailValue);
    contactInfoDiv.appendChild(emailDiv);

    // Mobile
    const mobileDiv = document.createElement("div");
    mobileDiv.classList.add("contact-info-item"); // Add class for consistent styling
    const mobileLabel = document.createElement("label");
    mobileLabel.textContent = "Phone Number";
    const mobileValue = document.createElement("label");
    mobileValue.textContent = `${cardData[0].data.Mobile ? cardData[0].data.Mobile : "---"
        }`; // Static Mobile

    mobileDiv.appendChild(mobileLabel);
    mobileDiv.appendChild(mobileValue);
    contactInfoDiv.appendChild(mobileDiv);

    // Location
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("contact-info-item"); // Add class for consistent styling
    const locationLabel = document.createElement("label");
    locationLabel.textContent = "Location";
    const locationValue = document.createElement("label");
    

    const locationData = cardData?.[2]?.data?.[0];

    locationValue.textContent = [
      locationData?.city,
      locationData?.country_name
    ].filter(Boolean).join(", ") || "---";
    

    locationDiv.appendChild(locationLabel);
    locationDiv.appendChild(locationValue);
    contactInfoDiv.appendChild(locationDiv);

    contactCard.append(contactInfoDiv);
    return contactCard;
}

function createCard(
    headingText,
    buttonText,
    labelsAndValues,
    id,
    isPreview = false,
    cardId
) {
    // --- Initial Card and Form Setup ---
    const card = document.createElement("div");
    card.classList.add("data-card");
    card.id = `data-card-${cardId || id}`;

    if (id !== "password") {
        const headingTitle = document.createElement("div");
        headingTitle.classList.add("prof-heading");
        headingTitle.textContent = headingText;
        card.append(headingTitle);
    }

    const form = document.createElement("form");
    form.id = `data-card-form-${id}`;
    form.classList.add("data-card-form");
    // Prevent default submission; we handle it with button clicks or specific listeners.
    form.addEventListener('submit', (e) => e.preventDefault());

    // --- Containers for Password/OTP flow ---
    let passwordFieldsContainer = null;
    let otpContainer = null;

    if (id === "password") {
        form.classList.add("data-card-form-block");

        const heading = document.createElement("span");
        heading.textContent = "Password Security";
        heading.classList.add("data-card-heading");
        form.appendChild(heading);

        const description = document.createElement("label");
        description.textContent = "For your account's security, ensure that your new password is strong and unique.";
        description.classList.add("data-card-description");
        form.appendChild(description);

        // This div will hold the New Password and Confirm Password fields
        passwordFieldsContainer = document.createElement('div');
        passwordFieldsContainer.id = 'password-fields-container';

        // This div will hold the OTP input field
        otpContainer = document.createElement('div');
        otpContainer.id = 'otp-container';
        otpContainer.style.display = 'none'; // Initially hidden
        otpContainer.innerHTML = `
            <p style="font-family: var(--axentra-secondaryFontFamily, sans-serif); color: #4b5563; margin-bottom: 1rem;">An OTP has been sent to your registered email. Please enter it below to confirm.</p>
            <div class="form-field-wrapper password-field-wrapper">
                <label for="otp-input" class="data-card-label">Enter OTP</label>
                <input type="text" id="otp-input" name="otp-input" class="data-card-input" autocomplete="one-time-code" placeholder="Enter OTP">
            </div>
        `;
    } else {
        form.classList.add("data-card-form-grid");
    }

    // --- Complex Field Generation Loop (from your first function) ---
    labelsAndValues.forEach((item) => {
        // Conditional field rendering based on profile settings
        if (item.label === "Birthdate" && !myProfile.includes("Date_of_Birth")) return;
        if (item.label === "Gender" && !myProfile.includes("Gender")) return;

        // Dynamically set field properties
        if (item.label === "Email") {
            item.readonly = true;
        } else if (item.label === "Gender") {
            item.type = "select";
            item.options = ["Male", "Female", "Other", "Prefer not to say"];
        } else if (item.label === "Birthdate") {
            item.type = "customDate";
        } else if (item.label === "Contact") {
            item.type = "number";
        }

        const fieldWrapper = document.createElement("div");
        fieldWrapper.classList.add("form-field-wrapper");
        if (id === "password") {
            fieldWrapper.classList.add("password-field-wrapper");
        }

        const label = document.createElement("label");
        label.textContent = item.label;
        label.classList.add("data-card-label");
        const inputId = `data-card-input-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
        label.htmlFor = inputId; // Correctly associate label with input
        fieldWrapper.appendChild(label);

        let input;

        // Password field with show/hide eye icon
        if (item.type === "password") {
            input = document.createElement("input");
            input.type = "password";
            const eyeIcon = document.createElement("div");
            eyeIcon.className = "eye-pass";
            fieldWrapper.style.position = "relative";

            const eyeSVG = `<svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/></svg>`;
            const eyeSlashSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"/></svg>`;

            eyeIcon.innerHTML = eyeSVG;
            eyeIcon.addEventListener("click", () => {
                const isHidden = input.type === "password";
                eyeIcon.innerHTML = isHidden ? eyeSlashSVG : eyeSVG;
                input.type = isHidden ? "text" : "password";
            });
            fieldWrapper.appendChild(eyeIcon);

        // Date input
        } else if (item.type === "customDate") {
             // Simplified to use the standard browser date picker
            input = document.createElement('input');
            input.type = "date";
            input.value = item.value;
            fieldWrapper.appendChild(input);

        // Select dropdown
        } else if (item.type === "select") {
            input = document.createElement("select");
            item.options.forEach((option) => {
                const optionElement = document.createElement("option");
                optionElement.value = option;
                optionElement.textContent = option;
                if (option === item.value) {
                    optionElement.selected = true; // Pre-select the current value
                }
                input.appendChild(optionElement);
            });

        // Contact field with country code dropdown
        } else if (item.label === "Contact" || item.type === "number") {
            const contactWrapper = document.createElement("div");
            contactWrapper.classList.add("contact-wrapper");

            input = document.createElement("input");
            input.type = "tel";
            input.value = item.value;
            input.classList.add("data-card-input");

            const button = document.createElement("button");
            button.type = "button";
            button.className = "dropdown-button";
            const span = document.createElement("span");
            span.textContent = cardData[0].data.PhoneCode || "+91";
            button.appendChild(span);

            const phoneCodeInput = document.createElement("input");
            phoneCodeInput.type = "hidden";
            phoneCodeInput.name = "phone-code";
            phoneCodeInput.value = cardData[0].data.PhoneCode || "+91";
            contactWrapper.appendChild(phoneCodeInput);

            const chevronIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            chevronIcon.setAttribute("class", "chevron-icon");
            chevronIcon.setAttribute("width", "12"); chevronIcon.setAttribute("height", "12");
            chevronIcon.setAttribute("viewBox", "0 0 24 24"); chevronIcon.setAttribute("fill", "none");
            chevronIcon.setAttribute("stroke", "currentColor"); chevronIcon.setAttribute("stroke-width", "2");
            const chevronPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            chevronPath.setAttribute("d", "m6 9 6 6 6-6");
            chevronIcon.appendChild(chevronPath);
            button.appendChild(chevronIcon);

            const dropdownList = document.createElement("ul");
            dropdownList.className = "dropdown-options hidden";
            phonecode_list.forEach((entry) => {
                const li = document.createElement("li");
                li.className = "dropdown-item";
                li.innerHTML = `<span>${entry.flag}</span><span>${entry.dial_code}</span>`;
                li.addEventListener("click", () => {
                    span.textContent = entry.dial_code;
                    phoneCodeInput.value = entry.dial_code;
                    dropdownList.classList.add("hidden");
                });
                dropdownList.appendChild(li);
            });

            contactWrapper.appendChild(button);
            contactWrapper.appendChild(dropdownList);
            contactWrapper.appendChild(input);

            button.addEventListener("click", () => dropdownList.classList.toggle("hidden"));
            fieldWrapper.appendChild(contactWrapper);

        // All other standard text inputs
        } else {
            input = document.createElement("input");
            input.type = item.type || "text";
        }

        // Common input properties for non-contact/date fields
        if (item.label !== "Contact" && item.type !== "customDate") {
            input.value = item.value;
            fieldWrapper.appendChild(input);
        }
        
        input.id = inputId;
        input.name = item.label.toLowerCase().replace(/\s+/g, "-");
        input.classList.add("data-card-input");
        if (item.placeholder || (id === 'password' && item.label.includes('Password'))) {
            input.placeholder = item.placeholder || `Enter ${item.label.toLowerCase()}`;
        }
        if (item.readonly || isPreview) {
            input.readOnly = true;
        }

        // --- Append the field to the correct container ---
        if (id === 'password' && passwordFieldsContainer) {
            passwordFieldsContainer.appendChild(fieldWrapper);
        } else {
            form.appendChild(fieldWrapper);
        }
    });

    // Append the password/OTP containers to the form if they exist
    if (id === 'password') {
        if (passwordFieldsContainer) form.appendChild(passwordFieldsContainer);
        if (otpContainer) form.appendChild(otpContainer);
    }
    
    // --- Save Button and Event Listeners ---
    const saveButton = document.createElement("button");
    saveButton.textContent = buttonText;
    saveButton.classList.add("save-button");

    if (id === "password") {
        saveButton.classList.add("update-password", "saveButton-password");
        saveButton.type = "button"; // Important: It's not a form submit button
    } else {
        saveButton.classList.add("profile-save-button", "saveButton-profile");
        saveButton.type = "submit"; // Regular forms can use submit type
    }

    if (isPreview) {
        saveButton.classList.add("saveButton-disabled");
        saveButton.disabled = true;
    }

    // --- EVENT LISTENER LOGIC ---
    if (id === "password") {
        const newPasswordInput = form.querySelector(`#data-card-input-new-password`);
        const confirmNewPasswordInput = form.querySelector(`#data-card-input-confirm-new-password`);
        const otpInput = form.querySelector(`#otp-input`);

        let isOtpStep = false;
        let stagedNewPassword = "";

        const showOtpView = () => {
            if (passwordFieldsContainer) passwordFieldsContainer.style.display = "none";
            if (otpContainer) otpContainer.style.display = "block";
            saveButton.textContent = "Verify OTP & Save";
            isOtpStep = true;
        };

        const showPasswordView = () => {
            if (passwordFieldsContainer) passwordFieldsContainer.style.display = "block";
            if (otpContainer) otpContainer.style.display = "none";
            saveButton.textContent = buttonText;
            isOtpStep = false;
            stagedNewPassword = "";
            if (newPasswordInput) newPasswordInput.value = "";
            if (confirmNewPasswordInput) confirmNewPasswordInput.value = "";
            if (otpInput) otpInput.value = "";
        };

        saveButton.addEventListener("click", async () => {
            const originalButtonText = saveButton.textContent;
            saveButton.disabled = true;
            saveButton.textContent = "Loading...";

            const url = `https://omc.axentraos.co.in/customer_profile/update_customer_password/`;

            if (!customerEmail || !customerId) {
                console.error("Critical: customerEmail or customerId is missing.");
                createStatusToast("Configuration Error", "Could not retrieve customer details.", "error");
                saveButton.disabled = false;
                saveButton.textContent = originalButtonText;
                return;
            }

            try {
                if (isOtpStep) {
                    // STEP 2: VERIFY OTP AND FINALIZE PASSWORD CHANGE
                    const otp = otpInput.value;
                    if (!otp || otp.trim().length < 4) {
                        throw new Error("Please enter a valid OTP.");
                    }
                    const payload = {
                        shop: Shopify.shop, app: "oh_my_customer", customerId,
                        email: customerEmail, newPassword: stagedNewPassword, otp,
                    };
                    const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
                    const data = await response.json();
                    if (!response.ok) throw new Error(data.message || "Invalid OTP or an error occurred.");

                    createStatusToast("Password Changed", "Your password has been updated successfully.", "success");
                    showPasswordView();

                } else {
                    // STEP 1: VALIDATE PASSWORD AND REQUEST OTP
                    const newPassword = newPasswordInput.value;
                    const confirmNewPassword = confirmNewPasswordInput.value;

                    if (newPassword !== confirmNewPassword) throw new Error("New password and confirmation do not match.");
                    if (newPassword.length < 8) throw new Error("New password must be at least 8 characters long.");
                    
                    stagedNewPassword = newPassword;
                    const payload = {
                        shop: Shopify.shop, app: "oh_my_customer", customerId,
                        email: customerEmail, newPassword: newPassword,
                    };
                    const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
                    const data = await response.json();
                    if (!response.ok) throw new Error(data.message || "Failed to initiate password change.");
                    
                    createStatusToast("OTP Sent", `An OTP has been sent to your email.`, "success");
                    showOtpView();
                }
            } catch (error) {
                console.error("Password change process failed:", error);
                createStatusToast("Request Failed", error.message, "error");
            } finally {
                saveButton.disabled = false;
                // Only reset button text if we are not in the OTP step.
                if (!isOtpStep) {
                    saveButton.textContent = originalButtonText;
                } else {
                    saveButton.textContent = "Verify OTP & Save";
                }
            }
        });

        showPasswordView(); // Initialize the view

    } else {
        // Event listener for non-password forms (Profile, etc.)
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => { data[key] = value; });

            const phoneCode = data["phone-code"];
            const functionToCall = getFunctionToCall(headingText, cardId);
            if (functionToCall) {
                functionToCall(data, phoneCode);
            }
        });
    }

    form.appendChild(saveButton);
    card.appendChild(form);

    return card;
}
async function renderCard(cardData) {
    const profileContainer = document.getElementById("profileContainerChild");
    profileContainer.innerHTML = "";

    const profileCardsWrapper = document.createElement("div");
    profileCardsWrapper.id = "profile-cards-wrapper";
    profileCardsWrapper.classList.add("profile-cards-wrapper");

    const profileCardWrapper = document.createElement("div");
    profileCardWrapper.id = "profile-card-wrapper";
    const profileCardContent = await createProfileCard();
    profileCardWrapper.append(profileCardContent);

    const contactCardWrapper = document.createElement("div");
    contactCardWrapper.id = "contact-card-wrapper";
    const ContactCardContent = createContactCard();
    contactCardWrapper.append(ContactCardContent);

    profileCardsWrapper.append(profileCardWrapper);

   
    profileCardsWrapper.append(contactCardWrapper);
   
    let personalCard = cardData.find((card) => card.id === "personal");
    let contactCard = cardData.find((card) => card.id === "contact");
    let shippingCard = cardData.find((card) => card.id === "address");

    if (personalCard && contactCard) {
        personalCard.data = { ...personalCard.data, ...contactCard.data };
        cardData = cardData.filter((card) => card.id !== "contact");
    }

    const cardsWrapper2 = document.createElement("div");
    cardsWrapper2.id = "data-cards-wrapper";
    cardsWrapper2.classList.add("data-cards-wrapper");

    // -------- PERSONAL CARD ----------
    if (personalCard) {
        const personalFields = [
            "First Name",
            "Last Name",
            "Email",
            "Contact",
            "Birthdate",
            "Gender",
        ];
        let personalLabelsAndValues = personalFields.map((field) => {
            let value;
            switch (field) {
                case "First Name":
                    value = personalCard.data?.Name?.split(" ")[0] || "";
                    break;
                case "Last Name":
                    value = personalCard.data?.Name?.split(" ").slice(1).join(" ") || "";
                    break;
                case "Email":
                    value = personalCard.data?.Email || "";
                    break;
                case "Contact":
                    value = personalCard.data?.Mobile || "";
                    break;
                case "Birthdate":
                    value = personalCard.data?.Birthdate || "";
                    break;
                case "Gender":
                    value = personalCard.data?.Gender || "";
                    break;
                default:
                    value = "";
            }
            const item = { label: field, value: value };
            if (field === "Email") item.readonly = true;
            if (field === "Gender") {
                item.type = "select";
                item.options = ["Male", "Female", "Other", "Prefer not to say"];
            }
            if (field === "Birthdate") item.type = "date";
            return item;
        });

        const personalCardElement = createCard(
            personalCard.heading,
            "Save",
            personalLabelsAndValues,
            personalCard.id,
            personalCard.data.id
        );
        personalCardElement.classList.add("personal-card-element");
        cardsWrapper2.appendChild(personalCardElement);
    } else {
        console.error("Personal card not found.");
    }

    // -------- SHIPPING CARD ----------
    if (shippingCard) {
        const shippingAddressContainer = document.createElement("div");
        shippingAddressContainer.id = "shipping-address-container";
        shippingAddressContainer.classList.add("shipping-address-container");

        // Create the main shipping card
        const shippingAddressElement = document.createElement("div");
        shippingAddressElement.classList.add(
            "data-card",
            "shipping-address-element"
        );
        shippingAddressElement.id = `data-card-${shippingCard.id}`;

        // Add the heading
        const headingTitle = document.createElement("div");
        headingTitle.classList.add("prof-heading");
        headingTitle.textContent = shippingCard.heading;
        shippingAddressElement.appendChild(headingTitle);

        // Saved addresses section
        const savedAddressesSection = document.createElement("div");
        savedAddressesSection.id = "saved-addresses-section";
        savedAddressesSection.classList.add("saved-addresses-container"); // Add the container class
        const addressMetafields = await fetchAddressMeta();

        const createSavedAddressCard = (addressData, countries, addressMetafields) => {
            console.log(addressMetafields, "addressMetafields");
            console.log(addressData, "addressData");

            const addressCard = document.createElement("div");
            addressCard.classList.add("saved-address-card");
            let defaultSpan = addressData.default
                ? '<span class="default-badge">Default</span>'
                : "";
            let contactName;
            let relationship;
            if (addressData.default) {
                contactName = prof_name
                relationship = "Self";
                saveAddressAs = "Home";
            }
            else {
                contactName = "Contact Name";
                relationship = "Relationship";
                saveAddressAs = "Save Address As";
            }
            // Extract contact name and relation from addressMetafields


            // console.log(addressMetafields.addressMeta, "hahahaha");

            if (addressMetafields && addressMetafields.addressMeta && Array.isArray(addressMetafields.addressMeta)) {
                const matchingMeta = addressMetafields.addressMeta.find(meta => meta.address_id === addressData.id);

                if (matchingMeta) {
                    contactName = matchingMeta.contact_name || "Contact Name";
                    saveAddressAs = matchingMeta.saveaddressas || "Save Address As";
                    relationship = matchingMeta.relation || "Relationship";
                }
            }
            const cntDiv = `<div style="color: var(--axentra-card-label-color);">${contactName}</div>`
            // Construct the formatted address
            let formattedAddress = `<div style=" font-weight: 500;  font-size: 18px; margin-top: -4px;">${saveAddressAs}</div><div style="display: inline-flex; align-items: center; font-weight: 500;  font-size: 18px; ">${cntDiv}${defaultSpan} </div><br><span style="font-style: italic; color: var(--axentra-card-text-color);">Relationship: ${relationship}</span><br>`;

            if (addressData.address1)
                formattedAddress += `<div style="color: var(--axentra-card-text-color)">${addressData.address1 || ""}</div>`;
            if (addressData.address2)
                formattedAddress += `<div style="color: var(--axentra-card-text-color)">${addressData.address2 || ""}</div>`;
            formattedAddress += `<div style="color: var(--axentra-card-text-color)">${addressData.city || ""}, ${addressData.province || "" } ${addressData.zip || ""}</div> `;
            formattedAddress += `<div style="color: var(--axentra-card-text-color)">${addressData.country || ""}</div>`;

            // Address Icon
            const addressIcon = document.createElement("div");
            const homeIcon = document.createElement("div");
            if (addressData.default) {
                homeIcon.innerHTML = `<svg class="xircls_svg" viewBox="0 0 24 24" class="xircls_svg" height="20" width="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Navigation / House_03"> <path id="Vector" d="M2 20.0001H4M4 20.0001H10M4 20.0001V11.4522C4 10.9179 4 10.6506 4.06497 10.4019C4.12255 10.1816 4.21779 9.97307 4.3457 9.78464C4.49004 9.57201 4.69064 9.39569 5.09277 9.04383L9.89436 4.84244C10.6398 4.19014 11.0126 3.86397 11.4324 3.73982C11.8026 3.63035 12.1972 3.63035 12.5674 3.73982C12.9875 3.86406 13.3608 4.19054 14.1074 4.84383L18.9074 9.04383C19.3095 9.39568 19.5102 9.57202 19.6546 9.78464C19.7825 9.97307 19.877 10.1816 19.9346 10.4019C19.9995 10.6506 20 10.9179 20 11.4522V20.0001M10 20.0001H14M10 20.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V20.0001M14 20.0001H20M20 20.0001H22" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>`;
            } else {
                homeIcon.innerHTML = `<svg class="xircls_svg" viewBox="0 0 24 24" class="xircls_svg" height="20" width="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
            }
            addressIcon.appendChild(homeIcon);

            const addressDisplay = document.createElement("div");
            addressDisplay.innerHTML = formattedAddress; // Use innerHTML to render the <br> tags
            addressDisplay.classList.add("address-text");

            // Delete Icon
            const deleteIcon = document.createElement("div");
            deleteIcon.classList.add('remove-address-btn')
            deleteIcon.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" class="xircls-delete-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" x2="10" y1="11" y2="17"></line>
            <line x1="14" x2="14" y1="11" y2="17"></line>
          </svg>` // Font Awesome trash icon class
            // You would add an event listener here to handle the deletion.
            deleteIcon.addEventListener("click", () => {
                // Add logic to delete the address (e.g., remove it from shippingCard.data)
                // and then re-render the shipping card to update the UI.
                deleteCustomerAddress(addressData.id);
                console.log("Delete icon clicked for address:", addressData);
            });

            // Edit Icon
            const editIcon = document.createElement("div");
            editIcon.classList.add('edit-address-btn')
            editIcon.innerHTML = `<svg class="xircls_svg" xmlns="http://www.w3.org/2000/svg" class="xircls-edit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
            <path d="m15 5 4 4"></path>
          </svg>`; // Font Awesome edit icon class
            editIcon.addEventListener("click", async () => {
                // Replace card with edit form
                const editForm = await createEditAddressForm(addressData, countries, addressMetafields);
                addressCard.replaceWith(editForm);
            });

            const actionDiv = document.createElement("div");
            actionDiv.classList.add("address-actions");
            if (!addressData.default) {
                actionDiv.appendChild(deleteIcon);
            }
            actionDiv.appendChild(editIcon);

            const addressinnerDiv = document.createElement("div");
            addressinnerDiv.classList.add("inner-save-div");
            addressinnerDiv.appendChild(addressIcon);
            addressinnerDiv.appendChild(addressDisplay);

            addressCard.appendChild(addressinnerDiv);
            addressCard.appendChild(actionDiv); // Append actionDiv to the card

            return addressCard;
        };

        const createEditAddressForm = async (addressData, countries, addressMetafields) => {
            console.log(addressData, 'editz');
            console.log(addressMetafields, 'editz1');
            const formContainer = document.createElement("div");
            formContainer.classList.add("edit-address-form-container");

            const form = document.createElement("form");
            form.classList.add("edit-address-form");
            const editAddTitle = document.createElement("div");
            editAddTitle.textContent = "Edit Address";
            editAddTitle.id = "edit-address-title"
            formContainer.appendChild(editAddTitle)

            // Determine the contact name and relationship values
            let contactNameValue = "";
            let relationshipValue = "";
            let saveAddressAs = "";

            if (addressMetafields && addressMetafields.addressMeta && Array.isArray(addressMetafields.addressMeta)) {
                const matchingMeta = addressMetafields.addressMeta.find(meta => meta.address_id === addressData.id);

                if (matchingMeta) {
                    contactNameValue = matchingMeta.contact_name || "";
                    saveAddressAs = matchingMeta.saveaddressas || "";
                    relationshipValue = matchingMeta.relation || "";
                }
                else if (addressData.default) {
                    contactNameValue = prof_name
                    relationshipValue = "Self"
                    saveAddressAs = "Home"
                }
            }

            // Contact Name
            const contactNameWrapper = document.createElement("div");
            contactNameWrapper.classList.add("form-field-wrapper");
            const contactNameLabel = document.createElement("label");
            contactNameLabel.textContent = "Contact Name";
            contactNameLabel.classList.add("data-card-label");
            const contactNameInput = document.createElement("input");
            contactNameInput.type = "text";
            contactNameInput.name = "contactName";
            contactNameInput.classList.add("data-card-input");
            contactNameInput.value = contactNameValue || ""; // Set the value
            contactNameWrapper.appendChild(contactNameLabel);
            contactNameWrapper.appendChild(contactNameInput);
            form.appendChild(contactNameWrapper);

            const saveAddressAsWrapper = document.createElement("div");
            saveAddressAsWrapper.classList.add("form-field-wrapper");
            const saveAddressAsLabel = document.createElement("label");
            saveAddressAsLabel.textContent = "Save Address As";
            saveAddressAsLabel.classList.add("data-card-label");
            const saveAddressAsInput = document.createElement("input");
            saveAddressAsInput.type = "text";
            saveAddressAsInput.name = "saveAddressAs";
            saveAddressAsInput.classList.add("data-card-input");
            saveAddressAsInput.value = saveAddressAs || ""; // Set the value
            saveAddressAsWrapper.appendChild(saveAddressAsLabel);
            saveAddressAsWrapper.appendChild(saveAddressAsInput);
            form.appendChild(saveAddressAsWrapper);

            // Relationship
            const relationshipWrapper = document.createElement("div");
            relationshipWrapper.classList.add("form-field-wrapper");
            const relationshipLabel = document.createElement("label");
            relationshipLabel.textContent = "Relationship";
            relationshipLabel.classList.add("data-card-label");
            relationshipWrapper.appendChild(relationshipLabel);

            const relationshipSelect = document.createElement("select");
            relationshipSelect.name = "relationshipSelect";
            relationshipSelect.classList.add("data-card-input");
            const defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = "Select Relationship";
            relationshipSelect.appendChild(defaultOption);
            const relationOptions = [
                "Father",
                "Mother",
                "Brother",
                "Sister",
                "Friend",
                "Neighbor",
                "Parent",
                "Self",
                "Child"
            ];

            // Populate the dropdown
            relationOptions.forEach((option) => {
                const opt = document.createElement("option");
                opt.value = option;
                opt.textContent = option;
                if (relationshipValue === option) {
                    opt.selected = true;
                }
                relationshipSelect.appendChild(opt);
            });
            relationshipWrapper.appendChild(relationshipSelect);
            if (addressData.default) {
                contactNameInput.readOnly = true;
                saveAddressAsInput.readOnly = true;
                relationshipSelect.disabled = true;
            }
            const otherRelationshipInputWrapper = document.createElement("div");
            otherRelationshipInputWrapper.classList.add("form-field-wrapper");
            otherRelationshipInputWrapper.classList.add(
                "other-relation-input-wrapper"
            );
            const otherRelationshipInput = document.createElement("input");
            otherRelationshipInput.type = "text";
            otherRelationshipInput.name = "relationship";
            otherRelationshipInput.classList.add("data-card-input");
            otherRelationshipInput.value = relationshipValue === 'Other' ? relationshipValue : '';
            otherRelationshipInputWrapper.appendChild(otherRelationshipInput);
            otherRelationshipInput.classList.add("other-relation-input");
            otherRelationshipInput.style.display = relationshipValue === 'Other' ? "block" : "none";
            relationshipWrapper.appendChild(otherRelationshipInputWrapper);

            relationshipSelect.addEventListener("change", function () {
                if (this.value === "Other") {
                    otherRelationshipInput.style.display = "block";
                } else {
                    otherRelationshipInput.style.display = "none";
                }
            });

            form.appendChild(relationshipWrapper);

            // Address Fields (rest of the fields remain the same, using addressData)
            const shippingFields = [
                "Address Line 1",
                "Address Line 2",
                "Country",
                "State",
                "City",
                "Zip Code",
            ];

            let stateSelect = null;
            let citySelect = null;

            for (const field of shippingFields) {
                const fieldWrapper = document.createElement("div");
                fieldWrapper.classList.add("form-field-wrapper");
                const label = document.createElement("label");
                label.textContent = field;
                label.classList.add("data-card-label");

                let input;

                if (field === "City" || field === "State" || field === "Country") {
                    input = document.createElement('select');
                    input.name = field.toLowerCase();
                    input.classList.add('data-card-input');

                    if (field === 'Country') {
                        const defaultOption = document.createElement('option');
                        defaultOption.textContent = 'Select Country';
                        input.appendChild(defaultOption);

                        countries.countries.forEach(country => {
                            const option = document.createElement('option');
                            option.value = country.name;
                            option.textContent = country.name;
                            if (addressData.country === country.name) {
                                option.selected = true;
                            }
                            input.appendChild(option);
                        });

                        // Fetch states when country is selected
                        input.addEventListener('change', async function () {
                            const selectedCountry = this.value;
                            const states = await fetchStates(selectedCountry);
                            console.log('Fetched States:', states);  // Log the fetched states

                            // Clear previous states and cities
                            if (stateSelect) {
                                stateSelect.innerHTML = '<option>Select State</option>';
                            }
                            if (citySelect) {
                                citySelect.innerHTML = '<option>Select City</option>';
                            }

                            // Populate the state dropdown with fetched state names
                            if (states?.data?.states) {
                                states.data.states.forEach(state => {
                                    const option = document.createElement('option');
                                    option.value = state.name;  // Set the value to the state name
                                    option.textContent = state.name;  // Display the state name as text
                                    stateSelect.appendChild(option);
                                });
                            }
                        });
                    } else if (field === 'State') {
                        stateSelect = input;
                        input.innerHTML = '<option>Select State</option>';
                        const states = await fetchStates(addressData.country)
                        if (states?.data?.states) {
                            states.data.states.forEach(state => {
                                const option = document.createElement('option');
                                option.value = state.name;
                                option.textContent = state.name;
                                if (addressData.province === state.name) {
                                    option.selected = true;
                                }
                                stateSelect.appendChild(option);
                            });
                        }
                        // Fetch cities when state is selected
                        input.addEventListener('change', async function () {
                            const selectedState = this.value;
                            const cities = await fetchCities(selectedState);
                            console.log('Fetched Cities:', cities);  // Log the fetched cities

                            if (citySelect) {
                                citySelect.innerHTML = '<option>Select City</option>';
                                if (cities?.data?.cities) {
                                    cities.data.cities.forEach(city => {
                                        const option = document.createElement('option');
                                        option.value = city.name;
                                        option.textContent = city.name;
                                        citySelect.appendChild(option);
                                    });
                                }
                            }
                        });
                    } else if (field === 'City') {
                        citySelect = input;
                        input.innerHTML = '<option>Select City</option>';
                        const cities = await fetchCities(addressData.province)
                        if (cities?.data?.cities) {
                            cities.data.cities.forEach(city => {
                                const option = document.createElement('option');
                                option.value = city.name;
                                option.textContent = city.name;
                                if (addressData.city === city.name) {
                                    option.selected = true;
                                }
                                citySelect.appendChild(option);
                            });
                        }
                    }
                } else {
                    input = document.createElement("input");
                    input.type = "text";
                    input.name = field.toLowerCase().replace(/ /g, ""); // Remove spaces
                    input.classList.add("data-card-input");
                    console.log(addressData, 'check123');

                    if (field === 'Address Line 1') {
                        input.value = addressData.address1 || ""; //Remove spaces
                    }
                    else if (field === 'Address Line 2') {
                        input.value = addressData.address2 || ""; //Remove spaces
                    }
                    else if (field === 'Zip Code') {
                        input.value = addressData.zip || ""; //Remove spaces
                    }
                }

                fieldWrapper.appendChild(label);
                fieldWrapper.appendChild(input);
                form.appendChild(fieldWrapper);
            }

            // Save and Cancel Buttons
            const saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            saveButton.classList.add("save-button");
            saveButton.type = "submit";

            const cancelButton = document.createElement("button");
            cancelButton.textContent = "Cancel";
            cancelButton.classList.add("cancel-button");
            cancelButton.type = "button";

            const buttonDiv = document.createElement("div");
            buttonDiv.classList.add("save-cancel-buttons");
            buttonDiv.appendChild(cancelButton);
            buttonDiv.appendChild(saveButton);
            form.appendChild(buttonDiv);

            form.addEventListener("submit", (event) => {
                event.preventDefault();
                const formData = new FormData(form);
                const updatedAddressData = {};
                formData.forEach((value, key) => {
                    updatedAddressData[key] = value;
                });
                updatedAddressData.id = addressData.id;
                updatedAddressData.relationship =
                    updatedAddressData.relationshipSelect === "Other"
                        ? updatedAddressData.relationship
                        : updatedAddressData.relationshipSelect;
                updatedAddressData["default"] = addressData.default;
                const functionToCall = getFunctionToCall(
                    shippingCard.heading,
                    addressData.id
                );
                functionToCall(updatedAddressData);

                // Replace form with updated card
                const updatedCard = createSavedAddressCard(updatedAddressData, countries, addressMetafields);
                formContainer.replaceWith(updatedCard);
            });

            cancelButton.addEventListener("click", () => {
                // Replace form with original card
                const originalCard = createSavedAddressCard(addressData, countries, addressMetafields);
                formContainer.replaceWith(originalCard);
            });

            formContainer.appendChild(form);
            return formContainer;
        };


        if (shippingCard.data && Array.isArray(shippingCard.data)) {
            const countriesData = await fetchCountries();

            shippingCard.data.forEach((addressData) => {
                const addressCard = createSavedAddressCard(addressData, countriesData.data, addressMetafields);
                savedAddressesSection.appendChild(addressCard);
            });
        }

        shippingAddressElement.appendChild(savedAddressesSection);

        // Add address button
        const addAddressButton = document.createElement("button");
        addAddressButton.innerHTML =
            ' + Add Address ';
        addAddressButton.classList.add("add-address-button");
        if (myProfile.includes("Add_Multiple_Addresses")) {
            shippingAddressElement.appendChild(addAddressButton);

        }

        // New address form (initially hidden)
        const newAddressFormContainer = document.createElement("div");
        newAddressFormContainer.id = "new-address-form-container";
        newAddressFormContainer.classList.add("new-address-form-container");
        const countries = await fetchCountries();

        const createNewAddressForm = async (countries) => {
            const form = document.createElement("form");
            form.classList.add("new-address-form");
            form.id = "new-address-form-id";

            const contactNameWrapper = document.createElement("div");
            contactNameWrapper.classList.add("form-field-wrapper");
            const contactNameLabel = document.createElement("label");
            contactNameLabel.textContent = "Contact Name";
            contactNameLabel.classList.add("data-card-label");
            const contactNameInput = document.createElement("input");
            contactNameInput.type = "text";
            contactNameInput.name = "contactName";
            contactNameInput.classList.add("data-card-input");
            contactNameWrapper.appendChild(contactNameLabel);
            contactNameWrapper.appendChild(contactNameInput);
            form.appendChild(contactNameWrapper);


            const saveAddressAsWrapper = document.createElement("div");
            saveAddressAsWrapper.classList.add("form-field-wrapper");
            const saveAddressAsLabel = document.createElement("label");
            saveAddressAsLabel.textContent = "Save Address As";
            saveAddressAsLabel.classList.add("data-card-label");
            const saveAddressAsInput = document.createElement("input");
            saveAddressAsInput.type = "text";
            saveAddressAsInput.name = "saveAddressAs";
            saveAddressAsInput.classList.add("data-card-input");
            saveAddressAsWrapper.appendChild(saveAddressAsLabel);
            saveAddressAsWrapper.appendChild(saveAddressAsInput);
            form.appendChild(saveAddressAsWrapper);

            const relationshipWrapper = document.createElement("div");
            relationshipWrapper.classList.add("form-field-wrapper");
            const relationshipLabel = document.createElement("label");
            relationshipLabel.textContent = "Relationship";
            relationshipLabel.classList.add("data-card-label");
            relationshipWrapper.appendChild(relationshipLabel);

            const relationshipSelect = document.createElement("select");
            relationshipSelect.name = "relationshipSelect";
            relationshipSelect.classList.add("data-card-input");
            const defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = "Select Relationship";
            relationshipSelect.appendChild(defaultOption);
            const relationOptions = [
                "Father",
                "Mother",
                "Brother",
                "Sister",
                "Friend",
                "Neighbor",
                "Parent",
                "Self",
                "Child"
            ];
            relationOptions.forEach((option) => {
                const opt = document.createElement("option");
                opt.value = option;
                opt.textContent = option;
                relationshipSelect.appendChild(opt);
            });
            relationshipWrapper.appendChild(relationshipSelect);

            const otherRelationshipInputWrapper = document.createElement("div");
            otherRelationshipInputWrapper.classList.add("form-field-wrapper");
            otherRelationshipInputWrapper.classList.add(
                "other-relation-input-wrapper"
            );
            const otherRelationshipInput = document.createElement("input");
            otherRelationshipInput.type = "text";
            otherRelationshipInput.name = "relationship";
            otherRelationshipInput.classList.add("data-card-input");
            otherRelationshipInputWrapper.appendChild(otherRelationshipInput);
            otherRelationshipInput.classList.add("other-relation-input");
            otherRelationshipInput.style.display = "none";
            relationshipWrapper.appendChild(otherRelationshipInputWrapper);

            relationshipSelect.addEventListener("change", function () {
                if (this.value === "Other") {
                    otherRelationshipInput.style.display = "block";
                } else {
                    otherRelationshipInput.style.display = "none";
                }
            });

            form.appendChild(relationshipWrapper);

            const newShippingFields = [
                "Address Line 1",
                "Address Line 2",
                "Country",
                "State",
                "City",
                "Zip Code",
            ];

            // Declare outside of the loop to use them in the event listeners
            let stateSelect = null;
            let citySelect = null;

            newShippingFields.forEach((field) => {
                const fieldWrapper = document.createElement("div");
                fieldWrapper.classList.add("form-field-wrapper");
                const label = document.createElement("label");
                label.textContent = field;
                label.classList.add("data-card-label");

                let input;
                const countryData = countries;

                if (field === "City" || field === "State" || field === "Country") {
                    input = document.createElement("select");
                    input.name = field.toLowerCase();
                    input.classList.add("data-card-input");

                    if (field === "Country") {
                        const defaultOption = document.createElement("option");
                        defaultOption.textContent = "Select Country";
                        input.appendChild(defaultOption);

                        countryData.countries.forEach((country) => {
                            const option = document.createElement("option");
                            option.value = country.name;
                            option.textContent = country.name;
                            input.appendChild(option);
                        });

                        // Fetch states when country is selected
                        input.addEventListener("change", async function () {
                            const selectedCountry = this.value;
                            const states = await fetchStates(selectedCountry);
                            console.log("Fetched States:", states); // Log the fetched states

                            // Clear previous states and cities
                            if (stateSelect) {
                                stateSelect.innerHTML = "<option>Select State</option>";
                            }
                            if (citySelect) {
                                citySelect.innerHTML = "<option>Select City</option>";
                            }

                            // Populate the state dropdown with fetched state names
                            if (states?.data?.states) {
                                states.data.states.forEach((state) => {
                                    const option = document.createElement("option");
                                    option.value = state.name; // Set the value to the state name
                                    option.textContent = state.name; // Display the state name as text
                                    stateSelect.appendChild(option);
                                });
                            }
                        });
                    } else if (field === "State") {
                        stateSelect = input;
                        input.innerHTML = "<option>Select State</option>";

                        // Fetch cities when state is selected
                        input.addEventListener("change", async function () {
                            const selectedState = this.value;
                            const cities = await fetchCities(selectedState);
                            console.log("Fetched Cities:", cities); // Log the fetched cities

                            // For now, show static cities as options
                            if (citySelect) {
                                citySelect.innerHTML = "<option>Select City</option>";

                                // Populate city dropdown with fetched city names
                                if (cities?.data?.cities) {
                                    cities.data.cities.forEach((city) => {
                                        const option = document.createElement("option");
                                        option.value = city.name; // Set the value to the city name
                                        option.textContent = city.name; // Display the city name as text
                                        citySelect.appendChild(option);
                                    });
                                }
                            }
                        });
                    } else if (field === "City") {
                        citySelect = input;
                        input.innerHTML = "<option>Select City</option>";
                    }
                } else {
                    input = document.createElement("input");
                    input.type = "text";
                    input.name = field.toLowerCase();
                    input.classList.add("data-card-input");
                }

                fieldWrapper.appendChild(label);
                fieldWrapper.appendChild(input);
                form.appendChild(fieldWrapper);
            });

            const saveButton = document.createElement("button");
            saveButton.textContent = "Save Address";
            saveButton.classList.add("save-button");
            saveButton.type = "submit";

            const cancelButton = document.createElement("button"); // Create a cancel button
            cancelButton.textContent = "Cancel";
            cancelButton.classList.add("cancel-button");
            cancelButton.type = "button"; // Prevent form submission

            // Div for Save and Cancel buttons
            const buttonDiv = document.createElement("div");
            buttonDiv.classList.add("save-cancel-buttons");
            buttonDiv.appendChild(cancelButton);

            buttonDiv.appendChild(saveButton);

            form.appendChild(buttonDiv);
            return form;
        };

        const newAddressFormElement = await createNewAddressForm(countries.data);
        newAddressFormElement.classList.add("new-address-form-element");

        const formElement = newAddressFormElement; // Get form element

        const saveButton = newAddressFormElement.querySelector(".save-button");

        const cancelButton = newAddressFormElement.querySelector(".cancel-button"); // Get cancel button

        saveButton.addEventListener("click", (event) => {
            event.preventDefault();
            const formData = new FormData(newAddressFormElement);
            const newAddressData = {};
            formData.forEach((value, key) => {
                newAddressData[key] = value;
            });
            newAddressData.relationship =
                newAddressData.relationshipSelect === "Other"
                    ? newAddressData.relationship
                    : newAddressData.relationshipSelect;

            const functionToCall = getFunctionToCall(
                shippingCard.heading,
                shippingCard.data.id
            );
            functionToCall(newAddressData);

            const newAddressCard = createSavedAddressCard(newAddressData, countries.data, addressMetafields);
            savedAddressesSection.appendChild(newAddressCard);
            newAddressFormContainer.classList.remove(
                "new-address-form-container-visible"
            );
            addAddressButton.style.display = "block";
        });

        cancelButton.addEventListener("click", (event) => {
            // Add an event listener to the new cancel button
            event.preventDefault();
            newAddressFormContainer.classList.remove(
                "new-address-form-container-visible"
            ); // Hide the form container
            addAddressButton.style.display = "block"; // Show add address button
        });

        addAddressButton.addEventListener("click", () => {
            newAddressFormContainer.innerHTML = "";
            const adddNewAddTitle = document.createElement("div");
            adddNewAddTitle.textContent = "Add Address";
            adddNewAddTitle.classList.add('add-new-address-title')

            newAddressFormContainer.appendChild(adddNewAddTitle);
            newAddressFormContainer.appendChild(newAddressFormElement);
            newAddressFormContainer.classList.add(
                "new-address-form-container-visible"
            );
            addAddressButton.style.display = "block";
        });

        newAddressFormContainer.appendChild(newAddressFormElement);

        shippingAddressElement.appendChild(newAddressFormContainer); // Append form container to main card.

        shippingAddressContainer.appendChild(shippingAddressElement);
        cardsWrapper2.appendChild(shippingAddressContainer);
    } else {
        console.error("Shipping card not found.");
    }

    const wrapper = document.createElement('div')
    wrapper.className = "xircls-profile-wrapper-section"
    wrapper.classList.add("profile-container-child");

    // wrapper.appendChild(profileCardsWrapper);
    wrapper.appendChild(cardsWrapper2);

    profileContainer.appendChild(wrapper);

    if (profileContainer && profileContainer.children.length >= 2) {
        const firstChild = profileContainer.children[0];

        if (firstChild.classList.contains('xircls-profile-wrapper-section')) {
            profileContainer.removeChild(firstChild);
        }
    }
}
async function renderCardMobile(cardData) {
    const profileContainer = document.getElementById('profileContainerChild');
    profileContainer.innerHTML = '';

    // Profile & Contact Cards
    const profileCardsWrapper = document.createElement("div");
    profileCardsWrapper.id = "profile-cards-wrapper";
    profileCardsWrapper.classList.add("mobile-profile-cards-wrapper");

    const profileCardWrapper = document.createElement("div");
    profileCardWrapper.id = "profile-card-wrapper";
    const profileCardContent = await createProfileCard();
    profileCardWrapper.append(profileCardContent);

    const contactCardWrapper = document.createElement("div");
    contactCardWrapper.id = "contact-card-wrapper";
    const ContactCardContent = createContactCard();
    contactCardWrapper.append(ContactCardContent);

    profileCardsWrapper.append(profileCardWrapper);
    console.log("insta_url121", LoyaltySettings?.earn_rule_json?.instagram_url)
    console.log("insta_url121", LoyaltySettings?.earn_rule_json?.instagram_url);

    if (window.innerWidth <= 768 && LoyaltySettings?.earn_rule_json?.instagram_url) {
      const instaButtonWrapper = document.createElement("div");
      instaButtonWrapper.style.display = "flex";
      instaButtonWrapper.style.flexDirection = "column"; // Stack buttons vertically
      instaButtonWrapper.style.justifyContent = "flex-end";
      instaButtonWrapper.style.gap = "10px"; // Space between buttons
    
      // Instagram Button
      const instaButton = document.createElement("button");
      instaButton.setAttribute("onclick", "Instaclicked()");
      instaButton.style.cssText = `
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 16px;
          font-family: var(--axentra-font-family);
        font-size: 14px;
          background-color: var(--axentra-btn-background-color);
          color: var(--axentra-btn-text-color);
        border: 1px solid #4b5563;
        border-radius: 6px;
        cursor: pointer;
        width: 100%;
        justify-content: center;
      `;
      instaButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
        Follow us on Instagram
      `;
      instaButtonWrapper.appendChild(instaButton);
    
      // Facebook Button (only if URL exists)
      if (LoyaltySettings?.earn_rule_json?.facebook_url) {
        const fbButton = document.createElement("button");
        fbButton.setAttribute("onclick", "Facebookclicked()");
        fbButton.style.cssText = instaButton.style.cssText;
        fbButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
          Like us on Facebook
        `;
        instaButtonWrapper.appendChild(fbButton);
      }
    
      profileCardsWrapper.appendChild(instaButtonWrapper);
    }
    
    // Always append the contact card wrapper
    profileCardsWrapper.append(contactCardWrapper);
    
    profileCardsWrapper.append(contactCardWrapper);

    // Data Cards Container
    const cardsWrapper2 = document.createElement("div");
    cardsWrapper2.id = "data-cards-wrapper";
    cardsWrapper2.classList.add("mobile-data-cards-wrapper");

    let personalCard = cardData.find((card) => card.id === "personal");
    let contactCard = cardData.find((card) => card.id === "contact");
    let shippingCard = cardData.find((card) => card.id === "address");

    if (personalCard && contactCard) {
        personalCard.data = { ...personalCard.data, ...contactCard.data };
        cardData = cardData.filter((card) => card.id !== "contact");
    }

    // -------- PERSONAL CARD ----------
    if (personalCard) {
        const personalFields = [
            "First Name",
            "Last Name",
            "Email",
            "Contact",
            "Birthdate",
            "Gender",
        ];
        let personalLabelsAndValues = personalFields.map((field) => {
            let value;
            switch (field) {
                case "First Name":
                    value = personalCard.data?.Name?.split(" ")[0] || "";
                    break;
                case "Last Name":
                    value = personalCard.data?.Name?.split(" ").slice(1).join(" ") || "";
                    break;
                case "Email":
                    value = personalCard.data?.Email || "";
                    break;
                case "Contact":
                    value = personalCard.data?.Mobile || "";
                    break;
                case "Birthdate":
                    value = personalCard.data?.Birthdate || "";
                    break;
                case "Gender":
                    value = personalCard.data?.Gender || "";
                    break;
                default:
                    value = "";
            }
            const item = { label: field, value: value };
            if (field === "Email") item.readonly = true;
            if (field === "Gender") {
                item.type = "select";
                item.options = ["Male", "Female", "Other", "Prefer not to say"];
            }
            if (field === "Birthdate") item.type = "date";
            return item;
        });

        const personalCardElement = createCard(
            personalCard.heading,
            "Save",
            personalLabelsAndValues,
            personalCard.id,
            personalCard.data.id
        );
        personalCardElement.classList.add("mobile-personal-card-element");

        // Apply flex column to the form inside the personal card
        const personalForm = personalCardElement.querySelector("form");
        if (personalForm) {
            personalForm.classList.add("mobile-personal-form");
        }

        cardsWrapper2.appendChild(personalCardElement);
    } else {
        console.error("Personal card not found.");
    }

    // -------- SHIPPING CARD ----------
    if (shippingCard) {
        const shippingAddressContainer = document.createElement("div");
        shippingAddressContainer.id = "shipping-address-container";
        shippingAddressContainer.classList.add("mobile-shipping-address-container");

        // Create the main shipping card
        const shippingAddressElement = document.createElement("div");
        shippingAddressElement.classList.add(
            "data-card",
            "mobile-shipping-address-element"
        );
        shippingAddressElement.id = `data-card-${shippingCard.id}`;

        // Add the heading
        const headingTitle = document.createElement("div");
        headingTitle.classList.add("prof-heading");
        headingTitle.textContent = shippingCard.heading;
        shippingAddressElement.appendChild(headingTitle);

        // Saved addresses section
        const savedAddressesSection = document.createElement("div");
        savedAddressesSection.id = "saved-addresses-section";
        savedAddressesSection.classList.add("saved-addresses-container"); // Add the container class
        const addressMetafields = await fetchAddressMeta();
        const createSavedAddressCard = (addressData, countries, addressMetafields) => {
            console.log(addressMetafields, "addressMetafields");
            console.log(addressData, "addressData");

            const addressCard = document.createElement("div");
            addressCard.classList.add("saved-address-card");
            let defaultSpan = addressData.default
                ? '<span class="default-badge">Default</span>'
                : "";
            let contactName;
            let relationship;
            let saveAddressAs;
            if (addressData.default) {
                contactName = prof_name;
                relationship = "Self";
                saveAddressAs = "Home";
            }
            else {
                contactName = "Contact Name";
                relationship = "Relationship";
                saveAddressAs = "Home";
            }
            // Extract contact name and relation from addressMetafields


            // console.log(addressMetafields.addressMeta, "hahahaha");

            if (addressMetafields && addressMetafields.addressMeta && Array.isArray(addressMetafields.addressMeta)) {
                const matchingMeta = addressMetafields.addressMeta.find(meta => meta.address_id === addressData.id);

                if (matchingMeta) {
                    contactName = matchingMeta.contact_name || "Contact Name";
                    saveAddressAs = matchingMeta.saveaddressas || "Save As";
                    relationship = matchingMeta.relation || "Relationship";
                }
            }
             const cntDiv = `<div style="color: var(--axentra-card-label-color);">${contactName}</div>`
            // Construct the formatted address
            let formattedAddress = `<div style=" font-weight: 500;  font-size: 18px; margin-top: -4px;">${saveAddressAs}</div><div style="display: inline-flex; align-items: center; font-weight: 500;  font-size: 18px; ">${cntDiv}${defaultSpan} </div><br><span style="font-style: italic; color: var(--axentra-card-text-color);">Relationship: ${relationship}</span><br>`;

            if (addressData.address1)
                formattedAddress += `<div style="color: var(--axentra-card-text-color)">${addressData.address1 || ""}</div>`;
            if (addressData.address2)
                formattedAddress += `<div style="color: var(--axentra-card-text-color)">${addressData.address2 || ""}</div>`;
            formattedAddress += `<div style="color: var(--axentra-card-text-color)">${addressData.city || ""}, ${addressData.province || "" } ${addressData.zip || ""}</div> `;
            formattedAddress += `<div style="color: var(--axentra-card-text-color)">${addressData.country || ""}</div>`;

            // Address Icon
            const addressIcon = document.createElement("div");
            const homeIcon = document.createElement("div");
            if (addressData.default) {
                homeIcon.innerHTML = `<svg class="xircls_svg" viewBox="0 0 24 24" class="xircls_svg" height="20" width="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Navigation / House_03"> <path id="Vector" d="M2 20.0001H4M4 20.0001H10M4 20.0001V11.4522C4 10.9179 4 10.6506 4.06497 10.4019C4.12255 10.1816 4.21779 9.97307 4.3457 9.78464C4.49004 9.57201 4.69064 9.39569 5.09277 9.04383L9.89436 4.84244C10.6398 4.19014 11.0126 3.86397 11.4324 3.73982C11.8026 3.63035 12.1972 3.63035 12.5674 3.73982C12.9875 3.86406 13.3608 4.19054 14.1074 4.84383L18.9074 9.04383C19.3095 9.39568 19.5102 9.57202 19.6546 9.78464C19.7825 9.97307 19.877 10.1816 19.9346 10.4019C19.9995 10.6506 20 10.9179 20 11.4522V20.0001M10 20.0001H14M10 20.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V20.0001M14 20.0001H20M20 20.0001H22" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>`;
            } else {
                homeIcon.innerHTML = `<svg  class="xircls_svg" viewBox="0 0 24 24" class="xircls_svg" height="20" width="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
            }
            addressIcon.appendChild(homeIcon);

            const addressDisplay = document.createElement("div");
            addressDisplay.innerHTML = formattedAddress; // Use innerHTML to render the <br> tags
            addressDisplay.classList.add("address-text");

            // Delete Icon
            const deleteIcon = document.createElement("div");
            deleteIcon.classList.add('remove-address-btn')
            deleteIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="xircls-delete-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" x2="10" y1="11" y2="17"></line>
            <line x1="14" x2="14" y1="11" y2="17"></line>
          </svg>` // Font Awesome trash icon class
            // You would add an event listener here to handle the deletion.
            deleteIcon.addEventListener("click", () => {
                // Add logic to delete the address (e.g., remove it from shippingCard.data)
                // and then re-render the shipping card to update the UI.
                deleteCustomerAddress(addressData.id);
                console.log("Delete icon clicked for address:", addressData);
            });

            // Edit Icon
            const editIcon = document.createElement("div");
            editIcon.classList.add('edit-address-btn')
            editIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="xircls-edit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
            <path d="m15 5 4 4"></path>
          </svg>`; // Font Awesome edit icon class
            editIcon.addEventListener("click", async () => {
                // Replace card with edit form
                const editForm = await createEditAddressForm(addressData, countries, addressMetafields);
                addressCard.replaceWith(editForm);
            });

            const actionDiv = document.createElement("div");
            actionDiv.classList.add("address-actions");
            if (!addressData.default) {
                actionDiv.appendChild(deleteIcon);
            }
            actionDiv.appendChild(editIcon);

            const addressinnerDiv = document.createElement("div");
            addressinnerDiv.classList.add("inner-save-div");
            addressinnerDiv.appendChild(addressIcon);
            addressinnerDiv.appendChild(addressDisplay);

            addressCard.appendChild(addressinnerDiv);
            addressCard.appendChild(actionDiv); // Append actionDiv to the card

            return addressCard;
        };


        const createEditAddressForm = async (addressData, countries, addressMetafields) => {
            console.log(addressData, 'editz');
            console.log(addressMetafields, 'editz1');
            const formContainer = document.createElement("div");
            formContainer.classList.add("edit-address-form-container");

            const form = document.createElement("form");
            form.classList.add("edit-address-form");
            const editAddTitle = document.createElement("div");
            editAddTitle.textContent = "Edit Address";
            editAddTitle.id = "edit-address-title"
            formContainer.appendChild(editAddTitle)

            // Determine the contact name and relationship values
            let contactNameValue = "";
            let relationshipValue = "";
            let saveAddressAs = "";

            if (addressMetafields && addressMetafields.addressMeta && Array.isArray(addressMetafields.addressMeta)) {
                const matchingMeta = addressMetafields.addressMeta.find(meta => meta.address_id === addressData.id);

                if (matchingMeta) {
                    contactNameValue = matchingMeta.contact_name || "";
                    saveAddressAs = matchingMeta.saveaddressas || "";
                    relationshipValue = matchingMeta.relation || "";
                }
                else if (addressData.default) {
                    contactNameValue = prof_name
                    relationshipValue = "Self"
                    saveAddressAs = "Home"
                }
            }

            // Contact Name
            const contactNameWrapper = document.createElement("div");
            contactNameWrapper.classList.add("form-field-wrapper");
            const contactNameLabel = document.createElement("label");
            contactNameLabel.textContent = "Contact Name";
            contactNameLabel.classList.add("data-card-label");
            const contactNameInput = document.createElement("input");
            contactNameInput.type = "text";
            contactNameInput.name = "contactName";
            contactNameInput.classList.add("data-card-input");
            contactNameInput.value = contactNameValue || ""; // Set the value
            contactNameWrapper.appendChild(contactNameLabel);
            contactNameWrapper.appendChild(contactNameInput);
            form.appendChild(contactNameWrapper);



            const saveAddressAsWrapper = document.createElement("div");
            saveAddressAsWrapper.classList.add("form-field-wrapper");
            const saveAddressAsLabel = document.createElement("label");
            saveAddressAsLabel.textContent = "Save Address As";
            saveAddressAsLabel.classList.add("data-card-label");
            const saveAddressAsInput = document.createElement("input");
            saveAddressAsInput.type = "text";
            saveAddressAsInput.name = "saveAddressAs";
            saveAddressAsInput.classList.add("data-card-input");
            saveAddressAsInput.value = saveAddressAs || ""; // Set the value
            saveAddressAsWrapper.appendChild(saveAddressAsLabel);
            saveAddressAsWrapper.appendChild(saveAddressAsInput);
            form.appendChild(saveAddressAsWrapper);

            // Relationship
            const relationshipWrapper = document.createElement("div");
            relationshipWrapper.classList.add("form-field-wrapper");
            const relationshipLabel = document.createElement("label");
            relationshipLabel.textContent = "Relationship";
            relationshipLabel.classList.add("data-card-label");
            relationshipWrapper.appendChild(relationshipLabel);

            const relationshipSelect = document.createElement("select");
            relationshipSelect.name = "relationshipSelect";
            relationshipSelect.classList.add("data-card-input");
            const defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = "Select Relationship";
            relationshipSelect.appendChild(defaultOption);
            const relationOptions = [
                "Father",
                "Mother",
                "Brother",
                "Sister",
                "Friend",
                "Neighbor",
                "Parent",
                "Self",
                "Child"
            ];
            if (addressData.default) {
                contactNameInput.readOnly = true;
                relationshipSelect.disabled = true;
            }

            // Populate the dropdown
            relationOptions.forEach((option) => {
                const opt = document.createElement("option");
                opt.value = option;
                opt.textContent = option;
                if (relationshipValue === option) {
                    opt.selected = true;
                }
                relationshipSelect.appendChild(opt);
            });
            relationshipWrapper.appendChild(relationshipSelect);


            relationshipSelect.addEventListener("change", function () {
                if (this.value === "Other") {
                    otherRelationshipInput.style.display = "block";
                } else {
                    otherRelationshipInput.style.display = "none";
                }
            });

            form.appendChild(relationshipWrapper);

            // Address Fields (rest of the fields remain the same, using addressData)
            const shippingFields = [
                "Address Line 1",
                "Address Line 2",
                "Country",
                "State",
                "City",
                "Zip Code",
            ];

            let stateSelect = null;
            let citySelect = null;

            for (const field of shippingFields) {
                const fieldWrapper = document.createElement("div");
                fieldWrapper.classList.add("form-field-wrapper");
                const label = document.createElement("label");
                label.textContent = field;
                label.classList.add("data-card-label");

                let input;

                if (field === "City" || field === "State" || field === "Country") {
                    input = document.createElement('select');
                    input.name = field.toLowerCase();
                    input.classList.add('data-card-input');

                    if (field === 'Country') {
                        const defaultOption = document.createElement('option');
                        defaultOption.textContent = 'Select Country';
                        input.appendChild(defaultOption);

                        countries.countries.forEach(country => {
                            const option = document.createElement('option');
                            option.value = country.name;
                            option.textContent = country.name;
                            if (addressData.country === country.name) {
                                option.selected = true;
                            }
                            input.appendChild(option);
                        });

                        // Fetch states when country is selected
                        input.addEventListener('change', async function () {
                            const selectedCountry = this.value;
                            const states = await fetchStates(selectedCountry);
                            console.log('Fetched States:', states);  // Log the fetched states

                            // Clear previous states and cities
                            if (stateSelect) {
                                stateSelect.innerHTML = '<option>Select State</option>';
                            }
                            if (citySelect) {
                                citySelect.innerHTML = '<option>Select City</option>';
                            }

                            // Populate the state dropdown with fetched state names
                            if (states?.data?.states) {
                                states.data.states.forEach(state => {
                                    const option = document.createElement('option');
                                    option.value = state.name;  // Set the value to the state name
                                    option.textContent = state.name;  // Display the state name as text
                                    stateSelect.appendChild(option);
                                });
                            }
                        });
                    } else if (field === 'State') {
                        stateSelect = input;
                        input.innerHTML = '<option>Select State</option>';
                        const states = await fetchStates(addressData.country)
                        if (states?.data?.states) {
                            states.data.states.forEach(state => {
                                const option = document.createElement('option');
                                option.value = state.name;
                                option.textContent = state.name;
                                if (addressData.province === state.name) {
                                    option.selected = true;
                                }
                                stateSelect.appendChild(option);
                            });
                        }
                        // Fetch cities when state is selected
                        input.addEventListener('change', async function () {
                            const selectedState = this.value;
                            const cities = await fetchCities(selectedState);
                            console.log('Fetched Cities:', cities);  // Log the fetched cities

                            if (citySelect) {
                                citySelect.innerHTML = '<option>Select City</option>';
                                if (cities?.data?.cities) {
                                    cities.data.cities.forEach(city => {
                                        const option = document.createElement('option');
                                        option.value = city.name;
                                        option.textContent = city.name;
                                        citySelect.appendChild(option);
                                    });
                                }
                            }
                        });
                    } else if (field === 'City') {
                        citySelect = input;
                        input.innerHTML = '<option>Select City</option>';
                        const cities = await fetchCities(addressData.province)
                        if (cities?.data?.cities) {
                            cities.data.cities.forEach(city => {
                                const option = document.createElement('option');
                                option.value = city.name;
                                option.textContent = city.name;
                                if (addressData.city === city.name) {
                                    option.selected = true;
                                }
                                citySelect.appendChild(option);
                            });
                        }
                    }
                } else {
                    input = document.createElement("input");
                    input.type = "text";
                    input.name = field.toLowerCase().replace(/ /g, ""); // Remove spaces
                    input.classList.add("data-card-input");
                    console.log(addressData, 'check123');

                    if (field === 'Address Line 1') {
                        input.value = addressData.address1 || ""; //Remove spaces
                    }
                    else if (field === 'Address Line 2') {
                        input.value = addressData.address2 || ""; //Remove spaces
                    }
                    else if (field === 'Zip Code') {
                        input.value = addressData.zip || ""; //Remove spaces
                    }
                }

                fieldWrapper.appendChild(label);
                fieldWrapper.appendChild(input);
                form.appendChild(fieldWrapper);
            }

            // Save and Cancel Buttons
            const saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            saveButton.classList.add("save-button");
            saveButton.type = "submit";

            const cancelButton = document.createElement("button");
            cancelButton.textContent = "Cancel";
            cancelButton.classList.add("cancel-button");
            cancelButton.type = "button";

            const buttonDiv = document.createElement("div");
            buttonDiv.classList.add("save-cancel-buttons");
            buttonDiv.appendChild(cancelButton);
            buttonDiv.appendChild(saveButton);
            form.appendChild(buttonDiv);

            form.addEventListener("submit", (event) => {
                event.preventDefault();
                const formData = new FormData(form);
                const updatedAddressData = {};
                formData.forEach((value, key) => {
                    updatedAddressData[key] = value;
                });
                updatedAddressData.id = addressData.id;
                updatedAddressData.relationship =
                    updatedAddressData.relationshipSelect === "Other"
                        ? updatedAddressData.relationship
                        : updatedAddressData.relationshipSelect;

                const functionToCall = getFunctionToCall(
                    shippingCard.heading,
                    addressData.id
                );
                functionToCall(updatedAddressData);

                // Replace form with updated card
                const updatedCard = createSavedAddressCard(updatedAddressData, countries, addressMetafields);
                formContainer.replaceWith(updatedCard);
            });

            cancelButton.addEventListener("click", () => {
                // Replace form with original card
                const originalCard = createSavedAddressCard(addressData, countries, addressMetafields);
                formContainer.replaceWith(originalCard);
            });

            formContainer.appendChild(form);
            return formContainer;
        };
        if (shippingCard.data && Array.isArray(shippingCard.data)) {
            const countriesData = await fetchCountries();

            shippingCard.data.forEach((addressData) => {
                const addressCard = createSavedAddressCard(addressData, countriesData.data, addressMetafields);
                savedAddressesSection.appendChild(addressCard);
            });
        }

        shippingAddressElement.appendChild(savedAddressesSection);

        // Add address button
        const addAddressButton = document.createElement("button");
        addAddressButton.innerHTML =
            ' + Add Address ';
        addAddressButton.classList.add("add-address-button");
        if (myProfile.includes("Add_Multiple_Addresses")) {
            shippingAddressElement.appendChild(addAddressButton);
        }


        // New address form (initially hidden)
        const newAddressFormContainer = document.createElement("div");
        newAddressFormContainer.id = "new-address-form-container";
        newAddressFormContainer.classList.add('mobile-new-address-form-container');
        const countries = await fetchCountries();
        const createNewAddressForm = async (countries) => {
            const form = document.createElement("form");
            form.classList.add('mobile-new-address-form');
            form.id = 'new-address-form-id';

            const contactNameWrapper = document.createElement("div");
            contactNameWrapper.classList.add("form-field-wrapper");
            const contactNameLabel = document.createElement("label");
            contactNameLabel.textContent = "Contact Name";
            contactNameLabel.classList.add("data-card-label");
            const contactNameInput = document.createElement("input");
            contactNameInput.type = "text";
            contactNameInput.name = "contactName";
            contactNameInput.classList.add("data-card-input");
            contactNameWrapper.appendChild(contactNameLabel);
            contactNameWrapper.appendChild(contactNameInput);
            form.appendChild(contactNameWrapper);


            const saveAddressAsWrapper = document.createElement("div");
            saveAddressAsWrapper.classList.add("form-field-wrapper");
            const saveAddressAsLabel = document.createElement("label");
            saveAddressAsLabel.textContent = "Save Address As";
            saveAddressAsLabel.classList.add("data-card-label");
            const saveAddressAsInput = document.createElement("input");
            saveAddressAsInput.type = "text";
            saveAddressAsInput.name = "saveAddressAs";
            saveAddressAsInput.classList.add("data-card-input");
            saveAddressAsWrapper.appendChild(saveAddressAsLabel);
            saveAddressAsWrapper.appendChild(saveAddressAsInput);
            form.appendChild(saveAddressAsWrapper);


            const relationshipWrapper = document.createElement("div");
            relationshipWrapper.classList.add("form-field-wrapper");
            const relationshipLabel = document.createElement("label");
            relationshipLabel.textContent = "Relationship";
            relationshipLabel.classList.add("data-card-label");
            relationshipWrapper.appendChild(relationshipLabel);

            const relationshipSelect = document.createElement("select");
            relationshipSelect.name = "relationshipSelect";
            relationshipSelect.classList.add("data-card-input");
            const defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = "Select Relationship";
            relationshipSelect.appendChild(defaultOption);
            const relationOptions = ["Father",
                "Mother",
                "Brother",
                "Sister",
                "Friend",
                "Neighbor",
                "Parent",
                "Self",
                "Child"];
            relationOptions.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option;
                opt.textContent = option;
                relationshipSelect.appendChild(opt);
            });
            relationshipWrapper.appendChild(relationshipSelect);

            const otherRelationshipInputWrapper = document.createElement("div");
            otherRelationshipInputWrapper.classList.add("form-field-wrapper");
            otherRelationshipInputWrapper.classList.add(
                "other-relation-input-wrapper"
            );
            const otherRelationshipInput = document.createElement("input");
            otherRelationshipInput.type = "text";
            otherRelationshipInput.name = "relationship";
            otherRelationshipInput.classList.add("data-card-input");
            otherRelationshipInputWrapper.appendChild(otherRelationshipInput);
            otherRelationshipInput.classList.add("other-relation-input");
            relationshipWrapper.appendChild(otherRelationshipInputWrapper);

            relationshipSelect.addEventListener('change', function () {
                if (this.value === 'Other') {
                    otherRelationshipInput.style.display = 'block';
                } else {
                    otherRelationshipInput.style.display = 'none';
                }
            });

            form.appendChild(relationshipWrapper);

            const newShippingFields = ['Address Line 1', 'Address Line 2', 'Country', 'State', 'City', 'Zip Code'];

            let stateSelect = null;
            let citySelect = null;

            newShippingFields.forEach(field => {
                const fieldWrapper = document.createElement("div");
                fieldWrapper.classList.add("form-field-wrapper");
                const label = document.createElement("label");
                label.textContent = field;
                label.classList.add("data-card-label");

                let input;
                const countryData = countries;
                // let stateSelect, citySelect;


                if (field === 'City' || field === 'State' || field === 'Country') {
                    input = document.createElement('select');
                    input.name = field.toLowerCase();
                    input.classList.add('data-card-input');

                    if (field === 'Country') {
                        const defaultOption = document.createElement('option');
                        defaultOption.textContent = 'Select Country';
                        input.appendChild(defaultOption);

                        countryData.countries.forEach(country => {
                            const option = document.createElement('option');
                            option.value = country.name;
                            option.textContent = country.name;
                            input.appendChild(option);
                        });

                        input.addEventListener('change', async function () {
                            const selectedCountry = this.value;
                            const states = await fetchStates(selectedCountry);
                            console.log('Fetched States:', states);  // Log the fetched states

                            if (stateSelect) {
                                stateSelect.innerHTML = '<option>Select State</option>';
                            }
                            if (citySelect) {
                                citySelect.innerHTML = '<option>Select City</option>';
                            }

                            if (states?.data?.states) {
                              console.log("states?.data?.states", states?.data?.states)
                                states.data.states.forEach(state => {
                                    const option = document.createElement('option');
                                    option.value = state.name;  // Set the value to the state name
                                    option.textContent = state.name;
                                    stateSelect.appendChild(option);
                                    console.log("option",stateSelect)  // Display the state name as text
                                });
                            }
                        });
                    } else if (field === 'State') {
                        stateSelect = input;
                        input.innerHTML = '<option>Select State</option>';

                        input.addEventListener('change', async function () {
                            const selectedState = this.value;
                            const cities = await fetchCities(selectedState);
                            console.log('Fetched Cities:', cities);  // Log the fetched cities

                            if (citySelect) {
                                citySelect.innerHTML = '<option>Select City</option>';

                                if (cities?.data?.cities) {
                                    cities.data.cities.forEach(city => {
                                        const option = document.createElement('option');
                                        option.value = city.name;
                                        option.textContent = city.name;
                                        citySelect.appendChild(option);
                                    });
                                }
                            }
                        });
                    } else if (field === 'City') {
                        citySelect = input;
                        input.innerHTML = '<option>Select City</option>';
                    }
                } else {
                    input = document.createElement('input');
                    input.type = 'text';
                    input.name = field.toLowerCase();
                    input.classList.add('data-card-input');
                }

                fieldWrapper.appendChild(label);
                fieldWrapper.appendChild(input);
                form.appendChild(fieldWrapper);
            });

            const saveButton = document.createElement("button");
            saveButton.textContent = "Save Address";
            saveButton.classList.add("save-button");
            saveButton.type = "submit";

            const cancelButton = document.createElement("button"); // Create a cancel button
            cancelButton.textContent = "Cancel";
            cancelButton.classList.add("cancel-button");
            cancelButton.type = "button"; // Prevent form submission

            // Div for Save and Cancel buttons
            const buttonDiv = document.createElement("div");
            buttonDiv.classList.add("save-cancel-buttons");
            buttonDiv.appendChild(cancelButton);
            buttonDiv.appendChild(saveButton);

            form.appendChild(buttonDiv);
            return form;
        };


        const newAddressFormElement = await createNewAddressForm(countries.data);

        // Apply flex column to the form inside the shipping card (new address form)
        const shippingForm = newAddressFormElement;
        if (shippingForm) {
            shippingForm.classList.add("mobile-shipping-form");
        }

        const formElement = newAddressFormElement; // Get form element

        const saveButton = newAddressFormElement.querySelector(".save-button");

        const cancelButton = newAddressFormElement.querySelector(".cancel-button"); // Get cancel button

        saveButton.addEventListener("click", (event) => {
            event.preventDefault();
            const formData = new FormData(newAddressFormElement);
            const newAddressData = {};
            formData.forEach((value, key) => {
                newAddressData[key] = value;
            });
            newAddressData.relationship =
                newAddressData.relationshipSelect === "Other"
                    ? newAddressData.relationship
                    : newAddressData.relationshipSelect;

            const functionToCall = getFunctionToCall(
                shippingCard.heading,
                shippingCard.data.id
            );
            functionToCall(newAddressData);

            const newAddressCard = createSavedAddressCard(newAddressData, countries.data, addressMetafields);
            savedAddressesSection.appendChild(newAddressCard);
            newAddressFormContainer.classList.remove(
                "mobile-new-address-form-container-visible"
            );
            addAddressButton.style.display = "block";
        });

        cancelButton.addEventListener("click", (event) => {
            // Add an event listener to the new cancel button
            event.preventDefault();
            newAddressFormContainer.classList.remove(
                "mobile-new-address-form-container-visible"
            ); // Hide the form container
            addAddressButton.style.display = "block"; // Show add address button
        });

        addAddressButton.addEventListener("click", () => {
            newAddressFormContainer.innerHTML = "";
            const adddNewAddTitle = document.createElement("div");
            adddNewAddTitle.textContent = "Add Address";
            adddNewAddTitle.classList.add('add-new-address-title')
            newAddressFormContainer.appendChild(adddNewAddTitle);
            newAddressFormContainer.appendChild(newAddressFormElement);
            newAddressFormContainer.classList.add(
                "mobile-new-address-form-container-visible"
            );
            addAddressButton.style.display = "none";
        });

        newAddressFormContainer.appendChild(newAddressFormElement);

        shippingAddressElement.appendChild(newAddressFormContainer); // Append form container to main card.

        shippingAddressContainer.appendChild(shippingAddressElement);
        cardsWrapper2.appendChild(shippingAddressContainer);
    } else {
        console.error("Shipping card not found.");
    }

    const wrapper = document.createElement('div')
    wrapper.className = "xircls-profile-wrapper-section"
    wrapper.classList.add('mobile-profile-container-child');


    wrapper.appendChild(profileCardsWrapper);
    wrapper.appendChild(cardsWrapper2);

    profileContainer.appendChild(wrapper);

    if (profileContainer && profileContainer.children.length >= 2) {
        const firstChild = profileContainer.children[0];

        if (firstChild.classList.contains('xircls-profile-wrapper-section')) {
            profileContainer.removeChild(firstChild);
        }
    }
}
function updateProfile(cardData) {
    if (window.innerWidth <= 768) {
        renderCardMobile(cardData);
    } else {
        renderCard(cardData);
    }
}
function formatDate(isoDate) {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
}
async function updateOrdersContainer(customerOrders) {
    const ordersContainer = document.getElementById("ordersContainer");
    ordersContainer.innerHTML = "";

    if (customerOrders.length === 0) {
        ordersContainer.appendChild(createEmptyItemsCard("order"));
    } else {
        if (window.innerWidth > 768) {
            const tableElement = await createTableWithPagination(
                customerOrders,
                "orders",
                5 
            );
            attachReorderEventListeners();
            ordersContainer.appendChild(tableElement);
        } else {
            const cardElement = await OrderTableMobile(customerOrders);
            attachReorderEventListeners();
            ordersContainer.append(cardElement);
        }
    }
    
}

async function OrderTableMobile(orders, overlay) {
  console.log("OrderTableMobile: Initializing. Received orders:", orders);

  // --- API Call for cancelMapping, return/exchange settings, and edit settings ---
  let cancelMapping = null;
  let returnSettings = null;    // To store return module configuration
  let exchangeSettings = null;  // To store exchange module configuration
  let editModuleGeneralSettings = null; // To store edit configuration
  let replacementSettings = null; // To store replacement configuration
  let allReturnDetails = []; // Will store all return/exchange/replacement details in an array

  const shop1 = Shopify.shop;
  const cancelUrl = `https://omc.axentraos.co.in/utility/get_module_setting/?shop=${shop1}`;
  // Corrected and unified URL for both Return and Exchange
  const returnAndExchangeUrl = `https://omc.axentraos.co.in/utility/get_settings/?shop=${shop1}`;

  // --- Start: Fetch Cancel Order Settings ---
  try {
    console.log(`OrderTableMobile: Fetching cancel settings for shop: ${shop1}`);
    const response = await fetch(cancelUrl, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const apiData = await response.json();
    console.log('OrderTableMobile: Full API Response for cancel settings:', apiData);
 const CancelData = apiData?.module_settings.find(m => m.module_name === 'Cancel Order')
    if (CancelData.module_json) {
      const moduleJson = CancelData.module_json;
      cancelMapping = {
        cod_timelimit: moduleJson.cod_timelimit,
        prepaid_timelimit: moduleJson.prepaid_timelimit,
        order_status_cod: moduleJson.order_status_cod,
        order_status_prepaid: moduleJson.order_status_prepaid
      };
      console.log("OrderTableMobile: cancelMapping processed successfully from API:", cancelMapping);
    } else {
      console.warn('OrderTableMobile: Cancel mapping data not found or in unexpected format. Using default cancel settings.');
    }
  } catch (error) {
    console.error('OrderTableMobile: ❌ Error fetching API data for cancel settings:', error);
    console.warn('OrderTableMobile: Using default cancel settings due to API error.');
  } finally {
    if (!cancelMapping) {
      cancelMapping = {}; // Initialize if completely null or API error
    }
    console.log('OrderTableMobile: ✅ Finished Cancel API call section. Final cancelMapping:', cancelMapping);
  }
  // --- End: Fetch Cancel Order Settings ---

  // --- Start: Fetch Return, Exchange & Replacement Settings ---
  try {
    console.log(`OrderTableMobile: Fetching Return/Exchange/Replacement settings for shop: ${shop1}`);
    const response = await fetch(returnAndExchangeUrl, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const apiData = await response.json();
    console.log("OrderTableMobile: ✅ Return, Exchange, Replacement settings fetched successfully:", apiData);

    // Process Return Settings
    if (apiData?.return_settings) {
      returnSettings = apiData.return_settings;
      console.log("OrderTableMobile: ✅ Return settings processed successfully:", returnSettings);
    } else {
      console.warn("OrderTableMobile: Return settings not found in API response.");
    }

    // Process Exchange Settings
    if (apiData?.exchange_settings) {
      exchangeSettings = apiData.exchange_settings;
      console.log("OrderTableMobile: ✅ Exchange settings processed successfully:", exchangeSettings);
    } else {
      console.warn("OrderTableMobile: Exchange settings not found in API response.");
    }

    // Process Replacement Settings
    if (apiData?.replacement_settings) {
      replacementSettings = apiData.replacement_settings;
      console.log("OrderTableMobile:✅ Replacement settings processed successfully:", replacementSettings);
    } else {
      console.warn("OrderTableMobile: Replacement settings not found in API response.");
    }

  } catch (error) {
    console.error("OrderTableMobile: ❌ Error fetching return/exchange/replacement settings:", error);
  }
  // --- End: Fetch Return, Exchange & Replacement Settings ---

  // --- Start: Fetch All Return Statuses ---
  if (customerId) {
    const returnDetailsUrl = `https://omc.axentraos.co.in/utility/exchange_return_details/?shop=${shop1}&customer_id=${customerId}`;
    try {
      const response = await fetch(returnDetailsUrl);
      if (!response.ok) throw new Error(`API error: ${response.status}`);
      const returnDetailsData = await response.json();
      const finalResp = returnDetailsData.exchange_details;
      console.log('✅ Full API Response for return statuses (Mobile):', returnDetailsData);
      if (Array.isArray(finalResp)) {
        allReturnDetails = finalResp; // Store all details in the array
        console.log('✅ All return details fetched into a single array (Mobile):', allReturnDetails);
      } else {
        console.error('❌ Expected an array for return details but received (Mobile):', finalResp);
      }
    } catch (error) {
      console.error('❌ Error fetching return statuses (Mobile):', error);
    }
  }
  // --- End: Fetch All Return Statuses ---

  // --- Start: Fetch Edit Order Settings ---
  if (typeof getModuleSettings === 'function' && Array.isArray(orders) && orders.length > 0) {
    const representativeShopDomain = Shopify.shop;
    const moduleSettings = await getModuleSettings(representativeShopDomain);
    console.log("OrderTableMobile: Module settings for edit button:", moduleSettings);

    if (moduleSettings) {
      const updateAddressModule = moduleSettings.find(m => m.module_name === "update address");
      if (updateAddressModule && updateAddressModule.is_enabled) {
        const generalSettings = updateAddressModule.module_json?.edit_orders?.general_settings;
        if (generalSettings && generalSettings.is_enabled) {
          editModuleGeneralSettings = generalSettings;
          console.log("OrderTableMobile: Edit module general settings found:", editModuleGeneralSettings);
        }
      }
    }
  }

  let subscriptionOrderBasedEnabled = false;

try {
    const subscriptionUrl = `https://api.subscriptions.axentraos.co.in/api/v1/shopify/get_ui_customization/?shop=${Shopify.shop}`;
    const subResp = await fetch(subscriptionUrl);
    const subJson = await subResp.json();

    subscriptionOrderBasedEnabled =
        subJson?.custom_json?.widgets?.order_based === true;

    console.log("Subscription Order Based Enabled (Mobile):", subscriptionOrderBasedEnabled);

} catch (error) {
    console.error("Error fetching subscription UI settings (Mobile):", error);
  }
  // --- End: Fetch Edit Order Settings ---
// --- Start: Fetch Timeline Plugin Installation Status ---
let subscriptionTimelineEnabled = false;

try {
    const timelineUrl = `https://api.subscriptions.axentraos.co.in/api/v1/platform/get_timeline/?shop=${Shopify.shop}`;
    const timelineResp = await fetch(timelineUrl);
    const timelineJson = await timelineResp.json();

    subscriptionTimelineEnabled =
        timelineJson?.data?.plugin_installed === true;

    console.log("Timeline Plugin Installed (Mobile):", subscriptionTimelineEnabled);

} catch (error) {
    console.error("Error fetching timeline plugin status (Mobile):", error);
}
// --- End: Fetch Timeline Plugin Installation Status ---

  const orderContainer = document.createElement("div");
  orderContainer.id = "omc-dashorder-container";
  orderContainer.classList.add("mobile-order-table-container");

  const ordersContent = document.createElement("div");
  ordersContent.className = "mobile-recent-orders";
  ordersContent.id = "omc-dashorder-content";
  ordersContent.classList.add("mobile-order-table-content");

  if (!Array.isArray(orders) || orders.length === 0) {
    console.log("OrderTableMobile: No orders to display.");
    ordersContent.textContent = "You have no orders yet.";
  }

  orders.forEach((order, index) => {
    if (!order || typeof order !== 'object') {
      console.warn(`OrderTableMobile: Invalid order object at index ${index}. Skipping.`, order);
      return;
    }
    console.log(`OrderTableMobile: Processing order ${order.orderNumber || `(index ${index})`}`);

    const orderDiv = document.createElement("div");
    orderDiv.className = "mobile-order-item order-div-mobile";

    const innerOrderDiv = document.createElement("div");
    innerOrderDiv.className = "mobile-order-content mobile-order-inner-div";
    orderDiv.appendChild(innerOrderDiv);

    const flexdiv = document.createElement("div");
    flexdiv.className = "mobile-order-flex";

    const imageAndDetailsDiv = document.createElement("div");
    imageAndDetailsDiv.className = "imageAndDetailsDiv mobile-order-img-details-div";
    flexdiv.appendChild(imageAndDetailsDiv);

    const flexTitle = document.createElement('div');
    flexTitle.style.cssText = `display: flex; justify-content: space-between; align-items: center;`;
    innerOrderDiv.appendChild(flexTitle);
    innerOrderDiv.appendChild(flexdiv);

    const orderItems = Array.isArray(order.items) ? order.items : [];
    const orderItem = orderItems.length > 0 ? orderItems[0] : null;
    const imageUrl = orderItem?.image ? orderItem.image : "https://via.placeholder.com/70";
    const itemTitle = orderItem?.title ? orderItem.title : (orderItems.length > 0 ? "Item Details Unavailable" : "No Items");

    imageAndDetailsDiv.innerHTML = `
        <div class="mobile-order-image">
            <img src="${imageUrl}" alt="${itemTitle}" class="order-image-mobile">
        </div>
        <div class="textAndPriceDiv">
            <div class="titleAndPriceDiv">
                <div class="titleDiv" style="margin-bottom: -8px;">
                    <div class="order-title-mobile">${itemTitle}</div>
                    ${orderItems.length > 1 ? `<div class="more-items-div">+${orderItems.length - 1} more item${orderItems.length - 1 > 1 ? 's' : ''}</div>` : ''}
                </div>
            </div>
            <span class="order-price-mobile">${order.totalPrice || 'N/A'}</span>
        </div>
      `;

    // --- Status Display Logic ---
    const currentOrderStatusNormalized = (order.fulfillmentStatus || "").trim().toLowerCase();
    const isOrderFulfilled = currentOrderStatusNormalized === 'fulfilled';
    const isOrderDelivered = order.fulfillments?.some(f => (f.shipment_status || "").trim().toLowerCase() === 'delivered') || false;
    let displayStatus = isOrderDelivered ? 'Delivered' : (order.fulfillmentStatus || 'N/A');

    const statusDisplayDiv = document.createElement('div');
    statusDisplayDiv.innerHTML = order.cancelledAt ? `<span class="omc-cancelled-text">Cancelled</span>` : `<span class="order-status-mobile">${displayStatus}</span>`;

    flexTitle.innerHTML = `
        <div style="width: 100%;">
            <div class="orderTittlediv1">
                <div>Order ID</div>
                ${statusDisplayDiv.outerHTML}
            </div>
            <span class="order-orderid-mobile">${order.orderNumber || 'N/A'}</span>
        </div>
      `;

    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("mobile-order-actions");
    flexdiv.appendChild(actionsDiv);

    // Common variables for actions
    const isAlreadyCancelled = !!order.cancelledAt;
    const encodedOrderString = encodeURIComponent(JSON.stringify(order));
    const encodedTrackSettingsString = encodeURIComponent(JSON.stringify(trackOrderSettings));

    // --- View Details Button ---
    const viewOrderDetailsBtn = document.createElement("button");
    viewOrderDetailsBtn.classList.add("vieworder-btn-mobile", "vieworder-btn-mobile-spacing");
    viewOrderDetailsBtn.innerHTML = `<span style="align-items: center; display: flex;"><svg class="xircls_svg2" style="margin-right: 6px;" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>View Details</span>`;
    viewOrderDetailsBtn.addEventListener("click", () => viewOrderDetails(encodedOrderString));
    actionsDiv.appendChild(viewOrderDetailsBtn);

    // --- Re-order Button ---
    const buyAgainButton = document.createElement("button");
    buyAgainButton.classList.add("buyagain-btn-mobile", "reorder-btn", "buyagain-btn-mobile-spacing");
    buyAgainButton.innerHTML = `<span style="align-items: center; display:flex;"><svg class="xircls_svg2" style="margin-right: 6px;" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>Re-order</span>`;
    buyAgainButton.setAttribute("data-order", JSON.stringify(orderItems).replace(/'/g, "\\'"));
    actionsDiv.appendChild(buyAgainButton);
// --- Subscribe Button Logic ---
// --- Subscribe Button Logic ---
if (subscriptionOrderBasedEnabled && subscriptionTimelineEnabled) {
    const subscribeButton = document.createElement("button");
    subscribeButton.classList.add("Axentra-return-btn-mobile", "Axentra-return-btn-mobile-spacing");

    subscribeButton.innerHTML = `
      <span style="align-items: center; display:flex;">
        <svg xmlns="http://www.w3.org/2000/svg" 
             class="xircls_svg2" 
             style="margin-right: 6px;" 
             width="12" height="12" 
             viewBox="0 0 24 24" 
             fill="none" 
             stroke="currentColor" 
             stroke-width="2" 
             stroke-linecap="round" 
             stroke-linejoin="round">
            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/>
            <path d="M12 22V12"/>
            <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/>
            <path d="m7.5 4.27 9 5.15"/>
        </svg>
        Subscribe
      </span>
    `;

    subscribeButton.addEventListener("click", () => {
        if (typeof subscribeOrder === "function") {
            subscribeOrder(encodedOrderString);
        }
    });

    actionsDiv.appendChild(subscribeButton);
}


    // --- Track Button Logic ---
    if (trackOrderData) {
    if (!isAlreadyCancelled && currentOrderStatusNormalized !== 'unfulfilled') {
      const trackOrderButton = document.createElement("button");
      trackOrderButton.classList.add("trackorder-btn-mobile", "trackorder-btn-mobile-spacing");
      trackOrderButton.innerHTML = `<span style="align-items: center; display: flex;"><svg class="xircls_svg2" style="margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>Track</span>`;
      trackOrderButton.addEventListener("click", () => openTrackOrderModal(encodedOrderString, encodedTrackSettingsString));
      actionsDiv.appendChild(trackOrderButton);
    }
}
    // --- Edit Button Logic ---
    let canEditAddress = false;
    if (editModuleGeneralSettings) {
      const editTimeLimitMinutes = parseInt(editModuleGeneralSettings.edit_time, 10);
      if (!isNaN(editTimeLimitMinutes) && editTimeLimitMinutes > 0 && !isAlreadyCancelled) {
        const requiredStatus = editModuleGeneralSettings.order_status?.toLowerCase();
        if (requiredStatus && currentOrderStatusNormalized === requiredStatus) {
            const deadline = new Date(new Date(order.orderTime).getTime() + editTimeLimitMinutes * 60 * 1000);
            if (new Date() <= deadline) {
                canEditAddress = true;
            }
        }
      }
    }

    if (canEditAddress) {

      
       const editBtn = document.createElement("button");
          console.log("canedit4", canEditAddress)
          // These classes align with the pattern of other action buttons,
          // allowing CSS to style them consistently.
          editBtn.classList.add("edit-btn-mobile", "edit-btn-mobile-spacing");
          editBtn.innerHTML = `<span style="align-items: center;"><svg style="margin-right: 6px; vertical-align: middle;" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" style="margin-right: 8px;" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path>
    </svg>Edit</span>`;
          editBtn.title = "Edit Shipping Address";
          editBtn.addEventListener("click", function (event) {
              event.stopPropagation();
              if (typeof openEditShippingModal === 'function') {
                  if (!overlay || !document.body.contains(overlay)) { // Check if overlay exists and is in DOM
                      console.log("OrderTableMobile: Creating new overlay for edit modal.");
                      overlay = document.createElement("div");
                      overlay.className = "modal-overlay";
                      document.body.appendChild(overlay);
                  } else {
                      console.log("OrderTableMobile: Reusing existing overlay for edit modal.");
                  }
                  openEditShippingModal(order.shippingAddress, order.orderNumber, order.orderId, order.customerDetails, overlay, Shopify.shop);
              } else {
                  console.error("openEditShippingModal function is not defined.");
              }
          });
          actionsDiv.appendChild(editBtn);
      }
    
    // --- START: Return/Exchange/Replacement Logic ---
    const returnInfoArray = allReturnDetails.filter(detail => String(detail.order_id) === String(order.orderId));
    let initiatedVariantIds = new Set();
    let initiatedActionType = new Set();
    
    returnInfoArray.forEach(info => {
        const queryType = info?.query_type?.toLowerCase() || '';
        if (queryType.includes('return')) initiatedActionType.add('return');
        if (queryType.includes('exchage')) initiatedActionType.add('exchange'); // Handles API typo
        if (queryType.includes('replaced')) initiatedActionType.add('replacement');

        const allItems = [
            ...(info.order_details?.returned_items || []),
            ...(info.order_details?.exchanged_items || []),
            ...(info.order_details?.replaced_items || [])
        ];
        allItems.forEach(item => {
            if (item.variant_id) initiatedVariantIds.add(item.variant_id);
        });
    });

    const allItemsInitiated = initiatedVariantIds.size >= order.items.length;
const encodedReturnInfoString = returnInfoArray ? encodeURIComponent(JSON.stringify(returnInfoArray)) : '';
    // --- Return Button Logic ---
    
    const encodedReturnSettingsString = returnSettings ? encodeURIComponent(JSON.stringify(returnSettings)) : '';
    const isReturnModuleEnabled = returnSettings?.return?.['is enabled'] === true;
    const isEligibleForReturnOverall = isOrderEligibleForReturn(order, returnSettings);
    const restrictUndeliveredForReturn = getReturnSettingValue('restrict undelivered', 'return settings', order, returnSettings) === true;
    let isEligibleByFulfillmentStatusForReturn = restrictUndeliveredForReturn ? isOrderDelivered : (isOrderFulfilled || isOrderDelivered);
    
    const showReturnButton = !isAlreadyCancelled &&
                             isReturnModuleEnabled &&
                             isEligibleForReturnOverall &&
                             isEligibleByFulfillmentStatusForReturn &&
                             !allItemsInitiated &&
                             (initiatedActionType.size === 0 || (initiatedActionType.size === 1 && initiatedActionType.has('return')));
if (returnOrderData) {
    if (showReturnButton) {
      const returnButton = document.createElement("button");
      returnButton.classList.add("Axentra-return-btn-mobile", "Axentra-return-btn-mobile-spacing");
      returnButton.innerHTML = `<span style="align-items: center; display: flex;"><svg class="xircls_svg2" style="margin-right: 6px;" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v.5a5 5 0 0 1-5 5H11"></path></svg>Return</span>`;
      returnButton.title = "Start a return for this order";
      returnButton.addEventListener("click", () => {
        if (typeof openReturnModal === 'function') openReturnModal(encodedOrderString, encodedReturnSettingsString, encodedReturnInfoString);
      });
      actionsDiv.appendChild(returnButton);
    }
}
    // --- Exchange Button Logic ---
    const encodedExchangeSettingsString = exchangeSettings ? encodeURIComponent(JSON.stringify(exchangeSettings)) : '';
    const isExchangeModuleEnabled = exchangeSettings?.exchange?.is_enabled === true;
    const isEligibleForExchangeOverall = isOrderEligibleForExchange(order, exchangeSettings);
    const restrictUndeliveredForExchange = exchangeSettings?.exchange?.basic_settings?.price_eligibilty?.item_condition?.exchange_restrictions?.undeliverd === true;
    let isEligibleByFulfillmentStatusForExchange = restrictUndeliveredForExchange ? isOrderDelivered : (isOrderFulfilled || isOrderDelivered);
    
    const showExchangeButton = !isAlreadyCancelled &&
                               isExchangeModuleEnabled &&
                               isEligibleForExchangeOverall &&
                               isEligibleByFulfillmentStatusForExchange &&
                               !allItemsInitiated &&
                               (initiatedActionType.size === 0 || (initiatedActionType.size === 1 && initiatedActionType.has('exchange')));
if (exchangeOrderData) {
    if (showExchangeButton) {
      const exchangeButton = document.createElement("button");
      exchangeButton.classList.add("Axentra-return-btn-mobile", "Axentra-return-btn-mobile-spacing");
      exchangeButton.innerHTML = `<span style="align-items: center; display: flex;"><svg class="xircls_svg2" style="margin-right: 6px;" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>Exchange</span>`;
      exchangeButton.title = "Start an exchange for this order";
      exchangeButton.addEventListener("click", () => {
        if (typeof openExchangeModal === 'function') openExchangeModal(encodedOrderString, encodedExchangeSettingsString, encodedReturnInfoString);
      });
      actionsDiv.appendChild(exchangeButton);
    }

  }
    // --- Replacement Button Logic ---
    const encodedReplacementSettingsString = replacementSettings ? encodeURIComponent(JSON.stringify(replacementSettings)) : '';
    const isReplacementModuleEnabled = replacementSettings?.replacement?.is_enable === true;
    const isEligibleForReplacement = isOrderEligibleForReplacement(order, replacementSettings);
    const restrictUndeliveredForReplacement = replacementSettings?.replacement?.advance_settings?.replacement_restrictions?.undeliverd === true;
    let isEligibleByFulfillmentStatusForReplacement = restrictUndeliveredForReplacement ? isOrderDelivered : (isOrderFulfilled || isOrderDelivered);
    
    const showReplacementButton = !isAlreadyCancelled &&
                                  isReplacementModuleEnabled &&
                                  isEligibleForReplacement &&
                                  isEligibleByFulfillmentStatusForReplacement &&
                                  !allItemsInitiated &&
                                  (initiatedActionType.size === 0 || (initiatedActionType.size === 1 && initiatedActionType.has('replacement')));
  if (replacementOrderData) {
    if (showReplacementButton) {
      const replacementButton = document.createElement("button");
      replacementButton.classList.add("Axentra-return-btn-mobile", "Axentra-return-btn-mobile-spacing");
      replacementButton.innerHTML = `<span style="align-items: center; display: flex;"><svg class="xircls_svg2" style="margin-right: 6px;" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>Replacement</span>`;
      replacementButton.title = "Start a replacement for this order";
      replacementButton.addEventListener("click", () => {
        if (typeof openReplacementModal === 'function') openReplacementModal(encodedOrderString, encodedReplacementSettingsString, encodedReturnInfoString);
      });
      actionsDiv.appendChild(replacementButton);
    }
    // --- END: Return/Exchange/Replacement Logic ---
}
    // --- Cancel Logic ---
    const orderCreationUTC = new Date(order.orderTime);
    const currentTimeUTC = new Date();
    const diffInMinutes = (currentTimeUTC - orderCreationUTC) / (1000 * 60);
    const isCOD = order.paymentGateway?.trim().toLowerCase() === "cod" || !order.paymentGateway?.trim();
    const rawTimeLimitFromAPI = isCOD ? cancelMapping.cod_timelimit : cancelMapping.prepaid_timelimit;
    let timeLimitMinutes = parseFloat(rawTimeLimitFromAPI);
    if (isNaN(timeLimitMinutes)) timeLimitMinutes = null;

    const rawOrderStatusFromApi = isCOD ? cancelMapping.order_status_cod : cancelMapping.order_status_prepaid;
    const apiAllowedCancelStatus = (rawOrderStatusFromApi || "unfulfilled").trim().toLowerCase();
    const statusPreventsCancellation = apiAllowedCancelStatus !== "" && currentOrderStatusNormalized !== apiAllowedCancelStatus;
    const isOutsideTimeLimit = (timeLimitMinutes !== null) && (diffInMinutes > timeLimitMinutes);
    const cancelBtnDisabled = isAlreadyCancelled || statusPreventsCancellation || isOutsideTimeLimit;
    console.log(timeLimitMinutes, "timeLimitMinutes11")
 const cancellationStatusHTML = generateCancellationStatusBoxHTML({
        isAlreadyCancelled,
        cancelBtnDisabled,
        cancelOrderData,
        timeLimitMinutes,
        orderCreationUTC,
        currentTimeUTC,
        orderId: order.orderId,
        apiAllowedCancelStatus
    });

    // 3. If HTML was generated, create a container and add it to the order card

    if (cancellationStatusHTML) {
        const cancelStatusContainer = document.createElement('div');
        // This container is useful for adding margins or specific mobile styles if needed
        cancelStatusContainer.className = 'mobile-cancel-status-container'; 
        cancelStatusContainer.innerHTML = cancellationStatusHTML;
         if (cancelOrderData) {
        innerOrderDiv.appendChild(cancelStatusContainer); // Append to the main content div
         }
    }
      

 if (cancelOrderData) {
  if (!isAlreadyCancelled) {
    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn-mobile", "cancel-btn-mobile-spacing");
    cancelBtn.innerHTML = `
      <span style="align-items: center; display:flex;">
        <svg class="xircls_svg2" style="margin-right: 6px;" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m15 9-6 6"></path>
          <path d="m9 9 6 6"></path>
        </svg>
        Cancel
      </span>
    `;

    if (cancelBtnDisabled) {
      cancelBtn.disabled = true;
      cancelBtn.style.color = "gray";
      cancelBtn.style.pointerEvents = "none";
      cancelBtn.title = "Cancellation is not available for this order.";
    } else {
      cancelBtn.addEventListener("click", () => {
        if (typeof cancelOrder === 'function') {
          cancelOrder(order.orderId, order.orderNumber);
        }
      });
      cancelBtn.title = "Cancel this order";
    }

    actionsDiv.appendChild(cancelBtn);
  }
}


    // --- Return Status Box Display (Mobile) ---
    if (typeof createReturnStatusBox === 'function' && returnInfoArray.length > 0) {
      const allStatusBoxesHTML = returnInfoArray.map(singleRequest => createReturnStatusBox(singleRequest)).join('');
      if (allStatusBoxesHTML) {
        const statusBoxContainer = document.createElement('div');
        statusBoxContainer.className = 'mobile-return-status-container';
        statusBoxContainer.innerHTML = allStatusBoxesHTML;
        innerOrderDiv.appendChild(statusBoxContainer);
      }
    }

    innerOrderDiv.classList.add("mobile-order-inner-style");
    ordersContent.appendChild(orderDiv);
  });

  orderContainer.appendChild(ordersContent);

  console.log("OrderTableMobile: Finished creating mobile order table structure.");
  return orderContainer;
}

function updateSecurityContainer() {
    // Console logs for debugging
    console.log({ myOrders, myWishlist, recentlyViewed, myProfile, changePassword, logout, dashboard });

    const securityContainer = document.getElementById("securityContainer");
    securityContainer.innerHTML = ""; // Clear previous content

    const passwordFields = [
    
        { label: "New Password", value: "createPasswordInput" },
        { label: "Confirm New Password", value: "createPasswordInput" },
    ];

    // Now, call `createCard` and pass the `passwordFields` array to it.
    const passwordCard = createCard(
        "Password Security",      // headingText
        "Update Password",        // buttonText
        passwordFields,           // labelsAndValues (now contains the fields)
        "password",               // id
        false,                    // isPreview
        "password-card"           // cardId
    );

    // --- 2. Create the Security Tips Card (your existing code is perfect) ---
    const securityCard = document.createElement("div");
    securityCard.classList.add("sec-card"); // Or "data-card" to match the other style
    securityCard.style.backgroundColor = "var(--axentra-card-background-color)";
    const tipsHTML = `
        <div style=" backgroung-color: var(--axentra-card-background-color); padding: 20px; border: 1px solid var(--axentra-card-border-color); border-radius: var(--axentra-card-border-radius); box-shadow: 0 1px 4px rgba(0,0,0,0.06);">
            <div style="font-size: 20px; font-weight: 600; color: var(--axentra-card-heading-color); font-family: var(--axentra-font-family); margin-bottom: 15px; text-align: left;">Security Tips</div>
            <ul style="color: #4b5563; list-style: none; padding: 0; margin: 0; text-align: left; font-family: var(--axentra-secondaryFontFamily);">
                <li style="font-size: 18px; display: flex; align-items: center; margin-bottom: 10px;">${shieldIcon}<span style="color: var(--axentra-card-label-color); margin-left: 8px;">Avoid using the same password for multiple accounts</span></li>
                <li style="font-size: 18px; display: flex; align-items: center; margin-bottom: 10px;">${shieldIcon}<span style="color: var(--axentra-card-label-color); margin-left: 8px;">Consider using a password manager</span></li>
                <li style=" font-size: 18px; display: flex; align-items: center; margin-bottom: 10px;">${shieldIcon}<span style="color: var(--axentra-card-label-color); margin-left: 8px;">Change your password regularly</span></li>
                <li style="font-size: 18px; display: flex; align-items: center;">${shieldIcon}<span style="color: var(--axentra-card-label-color); margin-left: 8px;">Never share your password with anyone</span></li>
            </ul>
        </div>
    `;
    securityCard.innerHTML = tipsHTML;
    
    // This is a quick fix to make the styling more consistent with the other card.
    // You can adjust this in your CSS for `.sec-card` instead.
    securityCard.style.border = "1px solid #ccc";
    securityCard.style.borderRadius = "8px";
   


    // --- 3. Append both cards to the main container ---
    securityContainer.appendChild(passwordCard);
    securityContainer.appendChild(securityCard);

    // NOTE: Your event listeners inside `createCard` should now work correctly
    // because the elements they need (inputs, buttons) will have been created.
}
// This array simulates the data you would get from an API
const offersFromApi = [
    {
        id: 'vip_special_01',
        title: 'VIP Customer Special',
        description: 'Exclusive 25% off on premium electronics',
        couponCode: 'VIP25EXCLUSIVE',
        discount: '25% off',
        expiryDate: '2024-01-31',
        category: 'Electronics',
        categoryIconType: 'electronics',
        termsAndConditions: 'Minimum purchase $200. Valid on electronics only. Cannot be combined with other offers.',
        specialModule: null
    },
    // {
    //     id: 'birthday_bonus_02',
    //     title: 'Birthday Bonus',
    //     description: 'Special birthday discount just for you',
    //     couponCode: 'BDAY30OFF',
    //     discount: '30% off',
    //     expiryDate: '2024-01-15',
    //     category: 'All Categories',
    //     categoryIconType: 'categories',
    //     termsAndConditions: 'Offer valid during your birthday month. No minimum purchase required. Can be combined with one other offer.',
    //     specialModule: {
    //         type: 'birthdayReminder',
    //         title: 'Birthday Reminder',
    //         text: 'Enter your date of birth to get reminded about this special offer on your birthday!',
    //         buttonText: 'Set Birthday Reminder'
    //     }
    // },
    {
        id: 'new_year_deal_03',
        title: 'New Year, New Deals',
        description: 'Start the year with 15% off everything',
        couponCode: 'NEWYEAR15',
        discount: '15% off',
        expiryDate: '2024-01-10',
        category: 'All Categories',
        categoryIconType: 'categories',
        termsAndConditions: 'Offer valid for all registered users. Applicable site-wide. Expires Jan 10th, 2024 at 11:59 PM PST.',
        specialModule: null
    }
];


async function updateOffersContainer() {
    const offersContainer = document.getElementById("offersContainer");
    if (!offersContainer) {
        console.error("The target container with id 'offersContainer' was not found.");
        return;
    }

    // Assuming customerId and shop is available in the scope
    const shop = Shopify.shop;
    const CACHE_KEY = `xircls-offers-cache-${shop}-${customerId}`;
    const CACHE_TTL = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
    const apiUrl = `https://omc.axentraos.co.in/utility/fetch_shopify_discounts/?shop=${shop}&customer_id=${customerId}`;

    /**
     * Transforms the new API offer structure into the format expected by the UI.
     */
    const transformApiOffer = (apiOffer) => {
        const { title, summary, ends_at, id } = apiOffer;

        let discount = "Special Offer";
        let description = "A special offer on your next purchase.";

        const percentageMatch = summary.match(/(\d+\.?\d*)% off/);
        const fixedAmountMatch = summary.match(/([$€£₹]|A\$|C\$|د\.إ|¥)\s*([\d,]+\.?\d*)/);
        const bogoMatch = summary.toLowerCase().includes('buy 1 item, get 1 item free');

        if (percentageMatch) {
            const value = parseFloat(percentageMatch[1]);
            discount = `${value}% off`;
            description = `Save ${value}% on your order.`;
        } else if (fixedAmountMatch) {
            const symbol = fixedAmountMatch[1];
            const value = parseFloat(fixedAmountMatch[2].replace(/,/g, ''));
            discount = `${symbol}${value.toFixed(2)} off`;
            description = `Save ${symbol}${value.toFixed(2)} on your order.`;
        } else if (bogoMatch) {
            discount = "Buy 1 Get 1 Free";
            description = "Buy one item, get a second one absolutely free.";
        }
        
        const formatExpiry = () => {
            if (!ends_at) return 'No expiry date';
            return new Date(ends_at).toISOString().split('T')[0];
        };

        return {
            id: id,
            title: title,
            description: description,
            couponCode: title,
            discount: discount,
            expiryDate: formatExpiry(),
            category: 'All Categories',
            categoryIconType: 'categories',
            termsAndConditions: summary.replace(/•/g, '<br>•'),
            specialModule: null
        };
    };

    try {
        // Note: Assuming createEmptyItemsCard is defined elsewhere
        if (typeof createEmptyItemsCard === 'function') {
            offersContainer.appendChild(createEmptyItemsCard("offers"));
        }

        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
            const parsed = JSON.parse(cached);
            const isCacheValid = Date.now() - parsed.timestamp < CACHE_TTL;

            if (isCacheValid && parsed.data?.discounts?.length > 0) {
                console.log("Using cached offers data");
                processOffers(parsed.data.discounts);
                return;
            } else {
                localStorage.removeItem(CACHE_KEY);
            }
        }

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`API request failed with status: ${response.status}`);

        const data = await response.json();

        if (!data.discounts || data.discounts.length === 0) {
            if (typeof createEmptyItemsCard === 'function') {
                createEmptyItemsCard('offers');
            }
            return;
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            data: data
        }));

        processOffers(data.discounts);
    } catch (error) {
        console.error("Error loading offers:", error);
        if (typeof createEmptyItemsCard === 'function') {
            createEmptyItemsCard('offers');
        }
    }

    function processOffers(discounts) {
        const offersFromApi = discounts.map(transformApiOffer);

        let selectedCouponCode = null;
        let currentPage = 1;
        const cardsPerPage = 4;

        // --- SVG Icons ---
        const starIcon = `<svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
        const clockIcon = `<svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
        const giftIcon = `<svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>`;
        const calendarIcon = `<svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
        const copyIcon = `<svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
        const tagIcon = `<svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`;
        const categoriesIcon = `<svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`;
        const infoIcon = `<svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
        const chevronDownIcon = `<svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
        const chevronUpIcon = `<svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`;

        const createOfferCard = (offer) => {
            const categoryIcon = categoriesIcon; // Defaulting to categories icon
            const specialModuleHtml = offer.specialModule ? `
                <div style="background-color: #fce7f3; color: #9d2463; padding: 16px; border-radius: 8px; display: flex; flex-direction: column; gap: 12px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 600;">
                       <span style="color: #db2777;">${giftIcon}</span> ${offer.specialModule.title}
                    </div>
                    <p style="font-size: 14px; margin: 0;">${offer.specialModule.text}</p>
                    <button style="background-color: #db2777; color: white; border: none; border-radius: 6px; padding: 10px; font-size: 14px; font-weight: 600; cursor: pointer;">
                        ${calendarIcon} ${offer.specialModule.buttonText}
                    </button>
                </div>` : '';

            return `
                <div class="Axentra-offer-card-container">
                    <input type="radio" name="selected-offer-radio" id="offer-radio-${offer.id}" value="${offer.couponCode}" class="offer-radio-input">
                    <label for="offer-radio-${offer.id}" class="offer-card" style="background-color: var(--axentra-card-background-color); border: 2px solid #e0f2fe; border-radius: 12px; padding: 24px; display: flex; flex-direction: column; gap: 16px; transition: all 0.2s ease-in-out; position: relative;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div>
                                <div style="text-align:start; font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 4px 0;">${offer.title}</div>
                                <div style="font-size: 14px; color: #6b7280; margin: 0;">${offer.description}</div>
                            </div>
                            <div class="custom-radio-button"></div>
                        </div>
                        <div style="background-color: #f3f4f6; padding: 8px 12px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; font-family: monospace; font-size: 14px; color: #374151;">
                            <span>${offer.couponCode}</span>
                            <button class="copy-btn" data-coupon-code="${offer.couponCode}" style="background: none; border: none; cursor: pointer; padding: 4px;">${copyIcon}</button>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 12px; font-size: 14px; color: #4b5563;">
                            <div style="display: flex; align-items: center; gap: 8px; font-weight: 500; color: #16a34a;">${tagIcon} ${offer.discount}</div>
                            <div style="display: flex; align-items: center; gap: 8px;">${clockIcon} Expires ${offer.expiryDate}</div>
                            <div style="display: flex; align-items: center; gap: 8px;">${categoryIcon} ${offer.category}</div>
                        </div>
                        ${specialModuleHtml}
                        <div class="terms-container" style="border: 1px solid #bfdbfe; background-color: #f0f9ff; border-radius: 8px; padding: 12px 16px; font-size: 14px; color: #1d4ed8; display: flex; flex-direction: column; gap: 10px;">
                            <div class="terms-trigger" style="display: flex; justify-content: space-between; align-items: center; font-weight: 600; cursor: pointer;">
                                <div style="display: flex; align-items: center; gap: 6px;">${infoIcon} Terms & Conditions</div>
                                <span class="chevron-icon">${chevronDownIcon}</span>
                            </div>
                            <div class="terms-content" style="display: none; color: #1e3a8a; text-align:left; font-weight: 400; line-height: 1.4;">
                                ${offer.termsAndConditions || 'No specific terms available.'}
                            </div>
                        </div>
                    </label>
                </div>`;
        };

        function renderOffers() {
            const grid = document.getElementById('offersGrid');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const paginationInfo = document.getElementById('paginationInfo');
            const paginationContainer = document.querySelector('.pagination-controls');
            
            const totalOffers = offersFromApi.length;
            const totalPages = Math.ceil(totalOffers / cardsPerPage);

            // Determine indices
            const startIndex = (currentPage - 1) * cardsPerPage;
            // Slice does not include end index, so we just add cardsPerPage
            const paginatedOffers = offersFromApi.slice(startIndex, startIndex + cardsPerPage);
            
            // Render cards
            grid.innerHTML = paginatedOffers.map(createOfferCard).join('');

            // Update Pagination Controls
            if (totalPages <= 1) {
                paginationContainer.style.display = 'none';
            } else {
                paginationContainer.style.display = 'flex';
                
                // Update info text: "Showing Page X of Y"
                paginationInfo.textContent = `Showing Page ${currentPage} of ${totalPages}`;

                // Update button states
                prevBtn.disabled = currentPage === 1;
                nextBtn.disabled = currentPage >= totalPages;
            }

            // Re-synch radio button state if changing pages
            if (selectedCouponCode) {
                const selectedRadio = document.querySelector(`input[name="selected-offer-radio"][value="${selectedCouponCode}"]`);
                if (selectedRadio) {
                    selectedRadio.checked = true;
                }
            }
        }
        
        // Set up HTML structure including pagination
        offersContainer.innerHTML = `
             <style>
        .Axentra-offer-card-container { position: relative; }
        .offer-radio-input { position: absolute; opacity: 0; width: 0; height: 0; }
        .custom-radio-button {
            width: 22px; height: 22px; border-radius: 50%;
            border: 2px solid #9ca3af; flex-shrink: 0;
            transition: all 0.2s ease; cursor: pointer; background-color: #fff;
            display:block !important;
        }
        .offer-card { cursor: pointer; word-wrap: break-word; overflow-wrap: break-word; }
        .offer-radio-input:checked + .offer-card {
            border-color: #0ea5e9; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.2);
        }
        .offer-radio-input:checked + .offer-card .custom-radio-button {
            border-color: #0ea5e9; background-color: #0ea5e9;
            box-shadow: 0 0 0 3px white inset;
        }
        .pagination-controls {
            display: flex;
            justify-content: space-between; /* Text left, buttons right */
            align-items: center;
            margin-top: 24px;
            padding-top: 16px;
            border-top: 1px solid #e5e7eb;
        }
        .pagination-buttons {
            display: flex;
            gap: 10px;
        }
        .pagination-controls button {
            background-color: #fff;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            padding: 8px 16px;
            font-size: 14px;
            font-weight: 500;
            color: #374151;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        }
        .pagination-controls button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            background-color: #f9fafb;
        }
        .pagination-controls button:hover:not(:disabled) {
            background-color: #f3f4f6;
            border-color: #9ca3af;
        }

        /* ✅ Responsive Fixes */
        @media (max-width: 768px) {
            #offersGrid {
                grid-template-columns: 1fr !important;
                gap: 16px !important;
            }
            .offer-card {
                padding: 16px !important;
            }
            .offer-card > div:first-child div:first-child {
                font-size: 16px !important;
                line-height: 1.3 !important;
                word-break: break-word !important;
                overflow-wrap: break-word !important;
                white-space: normal !important;
                max-width: 100% !important;
            }
            .offer-card > div:first-child div:nth-child(2) {
                font-size: 13px !important;
                line-height: 1.4 !important;
            }
            .pagination-controls {
                flex-direction: column;
                gap: 8px;
                align-items: flex-start;
            }
            .pagination-buttons {
                width: 100%;
                justify-content: space-between;
            }
        }

        @media (max-width: 480px) {
            .offer-card {
                padding: 14px !important;
            }
            .offer-card > div:first-child div:first-child {
                font-size: 15px !important;
            }
            #offersGrid {
                gap: 12px !important;
            }
        }
    </style>
            <div style="font-family: Arial, sans-serif; background-color: var(--axentra-container-two-background-color);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <div id="checkout-action-area" style="display: none; margin-left: auto;">
                        <button id="apply-checkout-btn">Apply Selected at Checkout</button>
                    </div>
                </div>
                <div style="display: flex; border-bottom: 1px solid #e5e7eb; margin-bottom: 24px;">
                    <button style="display: flex; align-items: center; gap: 8px; padding: 12px 20px; border: none; background: none; color: #111827; font-size: 16px; font-weight: 600; border-bottom: 2px solid #111827; margin-bottom: -1px; cursor: pointer;">${starIcon} Only For You</button>
                </div>
                
                <!-- Grid Container -->
                <div id="offersGrid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 24px;">
                </div>

                <!-- Pagination Section -->
                <div class="pagination-controls" style="display:none;">
                    <span id="paginationInfo" style="font-size: 14px; color: #6b7280;"></span>
                    <div class="pagination-buttons">
                        <button class="Axentra_offer_prev" id="prevBtn">Previous</button>
                        <button class="Axentra_offer_next" id="nextBtn">Next</button>
                    </div>
                </div>
            </div>
        `;
        
        // Initial render
        renderOffers();

        // Event Listeners
        const grid = document.getElementById('offersGrid');
        const checkoutArea = document.getElementById('checkout-action-area');
        const applyBtn = document.getElementById('apply-checkout-btn');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderOffers();
            }
        });

        nextBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(offersFromApi.length / cardsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderOffers();
            }
        });

        // Use event delegation for card interactions
        grid.addEventListener('click', (e) => {
            const copyButton = e.target.closest('.copy-btn');
            const termsTrigger = e.target.closest('.terms-trigger');
            const cardLabel = e.target.closest('.offer-card');

            // Handle Copy
            if (copyButton) {
                e.preventDefault(); e.stopPropagation();
                const codeToCopy = copyButton.dataset.couponCode;
                navigator.clipboard.writeText(codeToCopy).then(() => {
                    copyButton.innerHTML = 'Copied!';
                    setTimeout(() => { copyButton.innerHTML = copyIcon; }, 2000);
                });
                return;
            }

            // Handle Terms Accordion
            if (termsTrigger) {
                e.preventDefault(); e.stopPropagation();
                const content = termsTrigger.nextElementSibling;
                const iconSpan = termsTrigger.querySelector('.chevron-icon');
                const isExpanded = content.style.display === 'block';
                content.style.display = isExpanded ? 'none' : 'block';
                iconSpan.innerHTML = isExpanded ? chevronDownIcon : chevronUpIcon;
                return;
            }

            // Handle Card Selection (clicking anywhere on card)
            if (cardLabel) {
                const radioId = cardLabel.getAttribute('for');
                const radio = document.getElementById(radioId);
                
                if (radio) {
                    if (radio.checked && selectedCouponCode === radio.value) {
                        // Deselect if already selected
                        setTimeout(() => {
                            radio.checked = false;
                            selectedCouponCode = null;
                            checkoutArea.style.display = 'none';
                        }, 0);
                    } else {
                        // Select
                        radio.checked = true;
                        selectedCouponCode = radio.value;
                        checkoutArea.style.display = 'block';
                    }
                }
            }
        });

        // Handle Selection via Radio Button directly
        grid.addEventListener('change', (e) => {
            if (e.target.name === 'selected-offer-radio' && e.target.checked) {
                selectedCouponCode = e.target.value;
                checkoutArea.style.display = 'block';
            }
        });

        applyBtn.addEventListener('click', () => {
            if (selectedCouponCode) {
                console.log("Applying coupon:", selectedCouponCode);
                location.href = `/discount/${selectedCouponCode}/?redirect=${location.pathname}`;
            }
        });
    }
}

function initializePasswordFormLogic() {
    // Find the form and its elements that were just created
    const form = document.getElementById("change-password-form");
    if (!form) {
        console.error("Password form not found!");
        return;
    }

    // --- Get DOM Elements ---
    const saveButton = form.querySelector("#save-password-button");
    const newPasswordInput = form.querySelector('#new-password');
    const confirmNewPasswordInput = form.querySelector('#confirm-new-password');
    const otpInput = form.querySelector('#otp-input');
    const passwordFieldsContainer = form.querySelector("#password-fields-container");
    const otpContainer = form.querySelector("#otp-container");

    // --- State Management ---
    let isOtpStep = false;
    let stagedNewPassword = "";

    // --- UI Helper Functions ---
    const showOtpView = () => {
        passwordFieldsContainer.style.display = "none";
        otpContainer.style.display = "block";
        saveButton.textContent = "Verify OTP & Save";
        isOtpStep = true;
    };

    const showPasswordView = () => {
        passwordFieldsContainer.style.display = "block";
        otpContainer.style.display = "none";
        saveButton.textContent = "Change Password";
        isOtpStep = false;
        stagedNewPassword = "";
        newPasswordInput.value = "";
        confirmNewPasswordInput.value = "";
        otpInput.value = "";
    };

    // --- Main Event Listener ---
    saveButton.addEventListener("click", async () => {
        const url = `https://omc.axentraos.co.in/customer_profile/update_customer_password/`;
        
        // STEP 2: VERIFY OTP
        if (isOtpStep) {
            const otp = otpInput.value.trim();

            if (!otp) {
                createStatusToast("Invalid OTP", "Please enter the OTP you received.", "error");
                return;
            }

            try {
                // ASSUMPTION: 'customerEmail' and 'customerId' are available globally or in a higher scope.
                const payload = {
                    shop: Shopify.shop,
                    app: "oh_my_customer",
                    customerId: customerId,
                    email: customerEmail, // Make sure 'customerEmail' variable is available
                    newPassword: stagedNewPassword,
                    otp: otp,
                };

                const response = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });

                const data = await response.json();
                if (!response.ok) throw new Error(data.message || "Invalid OTP or error occurred.");

                createStatusToast("Password Changed", "Your password has been updated successfully.", "success");
                showPasswordView(); // Reset the form

            } catch (error) {
                console.error("OTP verification failed:", error);
                createStatusToast("Update Failed", error.message, "error");
            }

        // STEP 1: REQUEST OTP
        } else {
            const newPassword = newPasswordInput.value;
            const confirmNewPassword = confirmNewPasswordInput.value;

            if (newPassword !== confirmNewPassword) {
                createStatusToast("Password Invalid", "New password and Confirm password do not match.", "error");
                return;
            }
            if (newPassword.length < 8) {
                createStatusToast("Password Invalid", "New password must be at least 8 characters long.", "error");
                return;
            }

            try {
                stagedNewPassword = newPassword;
                const payload = {
                    shop: Shopify.shop,
                    app: "oh_my_customer",
                    customerId: customerId,
                    email: customerEmail, // Make sure 'customerEmail' variable is available
                    newPassword: newPassword,
                };

                const response = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });
                
                const data = await response.json();
                if (!response.ok) throw new Error(data.message || "Failed to initiate password change.");

                createStatusToast("OTP Sent", `An OTP has been sent to your email.`, "info");
                showOtpView(); // Switch to OTP view

            } catch (error) {
                console.error("Failed to request OTP:", error);
                createStatusToast("Request Failed", error.message, "error");
                stagedNewPassword = ""; // Clear password if request fails
            }
        }
    });
}
function dashProfile() {
    const profileCard = document.createElement("div");
    profileCard.id = "omc-dashprofile-card";
    profileCard.classList.add("dashprofile-card");

    const topSection = document.createElement("div");
    topSection.id = "omc-dashprofile-top";
    topSection.classList.add("dashprofile-top");

    const title = document.createElement("div");
    title.id = "omc-dashprofile-title";
    title.classList.add("dashprofile-title");
    title.textContent = "Your Profile";

    const editButton = document.createElement("button");
    editButton.id = "omc-dashprofile-edit-button";
    editButton.classList.add("RedirectEdit");
    editButton.textContent = "Edit Profile";

    editButton.onclick = () => {
        renderContent(2); // Edit Profile Function
    };

    const editButton1 = document.createElement("button");
    editButton1.id = "omc-dashprofile-edit-button";
    editButton1.classList.add("dashprofile-edit-button");
    editButton1.textContent = "Edit Profile";

    editButton1.onclick = () => {
        renderContent(2); // Edit Profile Function
    };

    topSection.appendChild(title);
    topSection.appendChild(editButton1);

    // topSection.appendChild(editButton);

    const contentSection = document.createElement("div");
    contentSection.id = "omc-dashprofile-content";
    contentSection.classList.add("dashprofile-content");

    const imageColumn = document.createElement("div");
    imageColumn.classList.add("dashprofile-image-column");

    let avatarElement = "-";
    if (img_url) {
        // Use image if img_url exists
        const avatar = document.createElement("img");
        avatar.src = img_url; // Assuming a dummy image is fine
        avatar.id = "logoImage";
        avatar.alt = "User Avatar";
        avatar.classList.add("avatar", "image-avatar");

        // Attach onclick event for image change
        // avatar.onclick = openImageModal;
        avatarElement = avatar;
    } else if (img_fn){
        // Use text avatar if img_url is not available
        const avatarText = document.createElement("div");
        avatarText.classList.add("avatar", "text-avatar"); // Use avatar class for styling
        avatarText.textContent =
            img_fn.charAt(0) + img_ln.charAt(0) || ""; // initials as text
        // avatarText.onclick = openImageModal;

        avatarElement = avatarText;
    } else {
       const avatarText = document.createElement("div");
        avatarText.classList.add("avatar", "text-avatar", "EmptyTextAvtar"); // Use avatar class for styling
        avatarText.textContent = ""; // initials as text
        // avatarText.onclick = openImageModal;

        avatarElement = avatarText;
    }

    const image = document.createElement("img");
    image.id = "omc-dashprofile-image";
    image.src =
        img_url ||
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80";
    image.alt = "Profile picture";
    image.classList.add("dashprofile-image");

    const nameAndMetaDiv = document.createElement("div");
    nameAndMetaDiv.classList.add("dashprofile-name-meta");

    const name = document.createElement("span");
    name.id = "omc-dashprofile-name";
    name.classList.add("dashprofile-name");
    name.textContent = prof_name; // Assuming profile_name is in global scope

    const premiumMember = document.createElement("div");
    premiumMember.id = "omc-dashprofile-member-type";
    premiumMember.classList.add("dashprofile-member-type");
    premiumMember.textContent = `Customer Id: ${customerId}`;

    const completionContainer = document.createElement("div");
    completionContainer.classList.add("dashprofile-completion-container");

    const progressBarBackground = document.createElement("div");
    progressBarBackground.classList.add("progress-bg");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");

    const percentageText = document.createElement("span");
    percentageText.id = "omc-dashprofile-completion-percent";
    percentageText.classList.add("percent-text");
    percentageText.textContent = "75%";

    const completionLabel = document.createElement("div");
    completionLabel.classList.add("complete-prof");
    completionLabel.textContent = "Profile Completion";

    progressBarBackground.appendChild(progressBar);
    completionContainer.appendChild(progressBarBackground);
    completionContainer.appendChild(percentageText);
    nameAndMetaDiv.appendChild(name);
    nameAndMetaDiv.appendChild(premiumMember);
    // nameAndMetaDiv.appendChild(completionContainer);
    // nameAndMetaDiv.appendChild(completionLabel);
    if (myProfile.includes("Profile_Picture")) {
        const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.style.display = "none"; // hidden input

    // When file is selected, call previewImage
    fileInput.addEventListener("change", previewImage);

    // Trigger file input when avatar is clicked
    avatarElement.style.cursor = "pointer";
    avatarElement.addEventListener("click", () => {
        fileInput.click();
    });

    imageColumn.appendChild(avatarElement);
    imageColumn.appendChild(fileInput); // Append hidden input
    }
    imageColumn.appendChild(nameAndMetaDiv);

    const detailsColumn = document.createElement("div");
    detailsColumn.classList.add("details-column");

    const labelsAndValues = [
        { label: "Full Name", value: prof_name && prof_name.trim() !== "" ? prof_name : "---" },
        { label: "Email Address", value: profile_email },
        {
            label: "Phone Number",
            value: cardData[0].data.Mobile ? cardData[0].data.Mobile : "---",
        }, // Static Data
        // {
        //     label: "Date of Birth",
        //     value: cardData[0].data.Birthdate ? cardData[0].data.Birthdate : "---",
        // }, // Static Data
        // { label: 'Member Since', value: 'January 15, 2021' }, // Static Data
        // {
        //     label: "Default Address",
        //     value: cardData[2].data[0]
        //         ? [
        //             cardData[2].data[0].address1,
        //             cardData[2].data[0].address2,
        //             cardData[2].data[0].city,
        //             cardData[2].data[0].province,
        //             cardData[2].data[0].zip,
        //             cardData[2].data[0].country_name,
        //         ]
        //             .filter(Boolean) // Remove any null, undefined, or empty strings
        //             .join(", ") // Join the remaining elements with commas
        //         : "None",
        // },
    ];

    labelsAndValues.forEach((item) => {
        if (item.label === "Date of Birth") {
            console.log(myProfile.includes("Date_of_Birth"), "Birthdatefgdfgh");
            if (myProfile.includes("Date_of_Birth") === false) {
                return
            }
        }

        const detailDiv = document.createElement("div");
        detailDiv.classList.add("detail-div");

        const label = document.createElement("span");
        label.classList.add("prof-label");
        label.textContent = item.label;

        const value = document.createElement("span");
        value.classList.add("prof-value");
        value.innerHTML = item.value; // Addresses can be put in new lines

        detailDiv.appendChild(label);
        detailDiv.appendChild(value);
        if (window.innerWidth <= 768) {
        detailDiv.appendChild(editButton);
        }
        detailsColumn.appendChild(detailDiv);
    });

    contentSection.appendChild(imageColumn);
    contentSection.appendChild(detailsColumn);

    profileCard.appendChild(topSection);
    profileCard.appendChild(contentSection);

    return profileCard;
}
async function createMobileDashboardOrder(orders, overlay) {
  console.log("OrderTableMobile: Initializing. Received orders:", orders);

  // --- API Call for cancelMapping ---
  let cancelMapping = null;
  const shop1 = Shopify.shop;
  const url1 = `https://omc.axentraos.co.in/utility/get_module_setting/?shop=${shop1}`;

  try {
      console.log(`OrderTableMobile: Fetching cancel settings for shop: ${shop1}`);
      const response = await fetch(url1, { method: 'GET' });
      if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
      }
      const apiData = await response.json();
      console.log('OrderTableMobile: Full API Response for cancel settings:', apiData);
 const CancelData = apiData?.module_settings.find(m => m.module_name === 'Cancel Order')
      if (apiData && apiData.module_settings && apiData.module_settings.length > 0 && CancelData.module_json) {
          const moduleJson = CancelData.module_json;
          cancelMapping = {
              cod_timelimit: moduleJson.cod_timelimit,
              prepaid_timelimit: moduleJson.prepaid_timelimit,
              order_status_cod: moduleJson.order_status_cod,
              order_status_prepaid: moduleJson.order_status_prepaid
          };
          console.log("OrderTableMobile: cancelMapping processed successfully from API:", cancelMapping);
      } else {
          console.warn('OrderTableMobile: Cancel mapping data not found or in unexpected format.');
      }
  } catch (error) {
      console.error('OrderTableMobile: ❌ Error fetching API data for cancel settings:', error);
  } finally {
      if (!cancelMapping) {
          console.warn('OrderTableMobile: cancelMapping was not successfully populated. Initializing to empty object for safety.');
          cancelMapping = {}; // Ensure it's an object
      }
      console.log('OrderTableMobile: ✅ Finished Cancel API call section. Final cancelMapping:', cancelMapping);
  }
  // --- End of API Call for cancelMapping ---
    const orderContainer = document.createElement("div");
    orderContainer.id = "omc-dashorder-container"; // Keep the original ID
    orderContainer.classList.add("dashOrderContainer-mobile");

    const headerSection = document.createElement("div");
    headerSection.id = "omc-dashorder-header"; // Keep the original ID
    headerSection.classList.add("mobile-dashorder-header");

    const title = document.createElement("div");
    title.id = "omc-dashorder-title-mobile"; // Keep the original ID
    title.classList.add("mobile-dashorder-title");
    title.textContent = "Recent Orders";

    const viewAllLink = document.createElement("span");
    viewAllLink.id = "omc-dashorder-view-all-mobile"; // Keep the original ID
    viewAllLink.classList.add("mobile-dashorder-view-all");
    viewAllLink.textContent = "View All Orders";
    viewAllLink.addEventListener("click", function () {
        renderContent(1);
    }); // Call the order func

    headerSection.appendChild(title);
    headerSection.appendChild(viewAllLink);

    const ordersContent = document.createElement("div");
    ordersContent.className = "mobile-recent-orders"; // Use this new class
    ordersContent.id = "omc-dashorder-content"; // Keep the original ID
    ordersContent.classList.add("mobile-dashorder-content");

    // Create each recent order
    let recentOrders = [];
    if (orders && Array.isArray(orders)) {
        recentOrders = orders.slice(0, 3);
    }
    let editModuleGeneralSettings = null;
    // Assuming getModuleSettings is globally available or imported
    if (typeof getModuleSettings === 'function') {
        if (Array.isArray(recentOrders) && recentOrders.length > 0) {
            try {
                // Using the same shopDomainForSettings as cancel for consistency
                const moduleSettings = await getModuleSettings(shop1);
                console.log("OrderTableMobile: Module settings for edit button:", moduleSettings);
                if (moduleSettings) {
                    const updateAddressModule = moduleSettings.find(m => m.module_name === "update address");
                    if (updateAddressModule && updateAddressModule.is_enabled) {
                        const generalSettings = updateAddressModule.module_json?.edit_orders?.general_settings;
                        if (generalSettings && generalSettings.is_enabled) {
                            editModuleGeneralSettings = generalSettings;
                            console.log("OrderTableMobile: Edit module general settings found:", editModuleGeneralSettings);
                        } else {
                             console.log("OrderTableMobile: Edit module general settings not enabled or not found.");
                        }
                    } else {
                        console.log("OrderTableMobile: Update address module not enabled or not found.");
                    }
                }
            } catch (error) {
                console.error("OrderTableMobile: Error fetching edit module settings:", error);
            }
        }
        if (!editModuleGeneralSettings) {
            console.warn("OrderTableMobile: Edit module settings not obtained or not applicable.");
        }
    } else {
        console.warn("OrderTableMobile: getModuleSettings function is not defined. Edit button functionality will be disabled.");
    }
    // --- End of API Call for Edit Module Settings ---
    recentOrders.forEach((order) => {
        const orderDiv = document.createElement("div");
        orderDiv.className = "mobile-order-item"; // New class to style each

        const innerOrderDiv = document.createElement("div");
        innerOrderDiv.className = "mobile-order-content"; // this is content div
        innerOrderDiv.classList.add("mobile-order-inner");
        
        const headerDiv = document.createElement('div')
        const orderId = document.createElement("div");
        orderId.classList.add("dash-order-id");
        orderId.textContent = order.orderNumber;
        orderId.style.padding = '5px'
        headerDiv.appendChild(orderId)
        const cancelledText = document.createElement('span');
        cancelledText.classList.add('omc-cancelled-text')
        cancelledText.textContent = order.cancelledAt ? "Cancelled" : ""
        cancelledText.style.marginLeft = '10px'
        if (order.cancelledAt) {
          headerDiv.appendChild(cancelledText)
        }

        const statusSpan = document.createElement("div");
        statusSpan.classList.add("dash-order-status");
        statusSpan.textContent = order.fulfillmentStatus;
        if (!order.cancelledAt) {
          headerDiv.appendChild(statusSpan);
        }
        headerDiv.style.cssText = `
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        `
        orderDiv.appendChild(headerDiv)
        orderDiv.appendChild(innerOrderDiv);
        const flexdiv = document.createElement("div");
        flexdiv.className = "mobile-order-flex"; // this is flexdiv div
        innerOrderDiv.appendChild(flexdiv);

        const imageAndDetailsDiv = document.createElement("div");
        imageAndDetailsDiv.className = "imageAndDetailsDiv";
        imageAndDetailsDiv.classList.add("mobile-order-img-details-div");
        flexdiv.appendChild(imageAndDetailsDiv);

        const orderItem =
            order.items && order.items.length > 0 ? order.items[0] : null;
        const imageUrl = orderItem
            ? orderItem.image
            : "https://via.placeholder.com/70";

        const imageContainer = document.createElement("div");
        imageContainer.className = "mobile-order-image"; // New Class
        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = orderItem ? orderItem.title : "Order Image";
        image.classList.add("mobile-order-img");
        imageContainer.appendChild(image);
        imageAndDetailsDiv.appendChild(imageContainer);

        const textAndPriceDiv = document.createElement("div");
        textAndPriceDiv.className = "textAndPriceDiv";
        imageAndDetailsDiv.appendChild(textAndPriceDiv);
        imageAndDetailsDiv.classList.add("mobile-order-text-price");

        const titleAndPriceDiv = document.createElement("div");
        titleAndPriceDiv.className = "titleAndPriceDiv";
        textAndPriceDiv.appendChild(titleAndPriceDiv);

        const titleDiv = document.createElement("div");
        titleDiv.className = "titleDiv";
        titleAndPriceDiv.appendChild(titleDiv);
        titleDiv.style.marginBottom = "-8px";

        const title = document.createElement("div");
        title.classList.add("dash-order-title");
        title.textContent = orderItem ? orderItem.title : "Unnamed Product";
        titleDiv.appendChild(title);
        
        const moreItems = document.createElement('div')
        moreItems.textContent = `+${order.items.length - 1} more items`
        moreItems.classList.add('moreitems-dashorder')
        titleDiv.appendChild(title);
        if (order.items.length > 1) {
            titleDiv.appendChild(moreItems);
        }
        // titleDiv.appendChild(orderId);


        const priceDiv = document.createElement("div");
        priceDiv.className = "mobile-order-price"; // NEW CLASS
        //   textAndPriceDiv.appendChild(priceDiv)

        const price = document.createElement("span");
        price.classList.add("dash-order-price");
        price.textContent = order.totalPrice;
        textAndPriceDiv.appendChild(price);

        // actionsDiv and then added it

        const actionsDiv = document.createElement("div");
        actionsDiv.className = "mobile-order-actions";
        flexdiv.appendChild(actionsDiv);
        actionsDiv.style.cssText = `
        display: flex;
    justify-items: center;
    white-space: nowrap;
    overflow-x: auto;
    width: 100%;
        `
        const viewOrderDetailsBtn = document.createElement("button");
      viewOrderDetailsBtn.classList.add("dash-order-view");
      viewOrderDetailsBtn.innerHTML = `<span style="align-items: center; display: flex;"><svg class="xircls_svg2" style="margin-right: 6px; vertical-align: middle;" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye h-3 w-3 mr-1"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>View Details</span>`;
      viewOrderDetailsBtn.addEventListener("click", function () {
          viewOrderDetails(encodeURIComponent(JSON.stringify(order)));
      });
      actionsDiv.appendChild(viewOrderDetailsBtn);


        const isAlreadyCancelled = !!order.cancelledAt;
        const currentOrderStatusNormalized = (order.fulfillmentStatus || "").trim().toLowerCase();
        const showTrackButton = !isAlreadyCancelled && currentOrderStatusNormalized !== 'unfulfilled';
        const encodedOrderString = encodeURIComponent(JSON.stringify(order));
        const encodedTrackSettingsString = encodeURIComponent(JSON.stringify(trackOrderSettings));
        if(showTrackButton) {
        const trackOrderButton = document.createElement("button");
        trackOrderButton.classList.add("dash-order-track");
        trackOrderButton.innerHTML = `<span style="align-items: center; display:flex;"><svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" class="" style="margin-right: 8px; vertical-align: middle;" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck h-3 w-3 mr-1"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>Track</span>`;

        trackOrderButton.addEventListener("click", function () {
          openTrackOrderModal(encodedOrderString, encodedTrackSettingsString);
        });
        trackOrderButton.classList.add("button-spacing");
        actionsDiv.appendChild(trackOrderButton);
      }
        const buyAgainButton = document.createElement("button");
        buyAgainButton.classList.add("dash-order-buy","reorder-btn");
        buyAgainButton.innerHTML = `<span style="align-items: center; display:flex;"><svg class="xircls_svg2" style="margin-right: 6px; vertical-align: middle;"  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw h-3 w-3 mr-1"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>Buy Again</span>`;

        buyAgainButton.setAttribute(
            "data-order",
            JSON.stringify(order.items).replace(/'/g, "\\'")
        );
        buyAgainButton.classList.add("reorder-btn");

        buyAgainButton.classList.add("button-spacing");

        actionsDiv.appendChild(buyAgainButton);
        
      // --- Start: Edit Button Logic (Mobile) ---
      let canEditAddress = false;
      if (editModuleGeneralSettings) { // Check if we have settings from API
          
          let editTimeLimitMinutes = parseInt(editModuleGeneralSettings.edit_time, 10);
          console.log(`Order ${order.orderNumber}: Edit time limit from settings: ${editTimeLimitMinutes} minutes`);

          if (!isNaN(editTimeLimitMinutes) && editTimeLimitMinutes > 0) {
              const requiredStatus = editModuleGeneralSettings.order_status?.toLowerCase();
              const currentStatus = order.fulfillmentStatus?.toLowerCase();
              const orderCancelled = order.cancelledAt;
              
              console.log(`Order ${order.orderNumber}: Edit check: Required status='${requiredStatus}', Current status='${currentStatus}', Cancelled='${!!orderCancelled}'`);

              if (!orderCancelled) {
                  if (requiredStatus && currentStatus === requiredStatus) {
                      try {
                          const orderPlacedDate = new Date(order.orderTime); // Ensure order.orderTime is a valid date string/timestamp
                          const now = new Date();
                          const deadline = new Date(orderPlacedDate.getTime() + editTimeLimitMinutes * 60 * 1000);
              
                          if (now <= deadline) {
                              canEditAddress = true;
                              console.log(`Order ${order.orderNumber}: Can edit. Current time: ${now}, Deadline: ${deadline}`);
                          } else {
                              console.log(`Order ${order.orderNumber}: Edit time limit expired. Current time: ${now}, Deadline: ${deadline}`);
                          }
                      } catch (e) {
                          console.error(`Order ${order.orderNumber}: Error parsing orderTime for edit check:`, order.orderTime, e);
                      }
                  } else {
                      console.log(`Order ${order.orderNumber}: Edit not allowed. Status "${currentStatus}" does not match required "${requiredStatus}".`);
                  }
              } else {
                  console.log(`Order ${order.orderNumber}: Edit not allowed. Order is cancelled.`);
              }
          } else {
               console.log(`Order ${order.orderNumber}: Edit not allowed. Invalid or zero edit time limit from settings.`);
          }
      } else {
          console.log(`Order ${order.orderNumber}: Edit not allowed. No edit module settings available.`);
      }

      const editBtn = document.createElement("button");
      console.log("canedit3qqqqq", canEditAddress)
      if (canEditAddress) {
          console.log("canedit411111", canEditAddress)
          // These classes align with the pattern of other action buttons,
          // allowing CSS to style them consistently.
          editBtn.classList.add("dash-order-edit");
          editBtn.innerHTML = `<span style="align-items: center; display:flex;"><svg class="xircls_svg3" style="margin-right: 6px; vertical-align: middle;" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" style="margin-right: 8px;" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path>
    </svg>Edit</span>`;
          editBtn.title = "Edit Shipping Address";
          editBtn.addEventListener("click", function (event) {
              event.stopPropagation();
              if (typeof openEditShippingModal === 'function') {
                  if (!overlay || !document.body.contains(overlay)) { // Check if overlay exists and is in DOM
                      console.log("OrderTableMobile: Creating new overlay for edit modal1111111.");
                      overlay = document.createElement("div");
                      overlay.className = "modal-overlay";
                      document.body.appendChild(overlay);
                  } else {
                      console.log("OrderTableMobile: Reusing existing overlay for edit modal.");
                  }
                  openEditShippingModal(order.shippingAddress, order.orderNumber, order.orderId, order.customerDetails, overlay, Shopify.shop);
              } else {
                  console.error("openEditShippingModal function is not defined.");
              }
          });
          actionsDiv.appendChild(editBtn);
      }
      // --- End: Edit Button Logic (Mobile) ---

 // --- Apply Cancel Logic (Mobile) ---
      // 2. Robust Date Parsing for order.orderTime
      let diffInMinutes = NaN; // Default to NaN, meaning time won't prevent cancellation by default
      let orderPlacedDateForCalc; 
      if (order.orderTime) {
          const orderCreationAttempt = new Date(order.orderTime);
          if (!isNaN(orderCreationAttempt.getTime())) { // Check if date is valid
              const orderCreationUTC = orderCreationAttempt;
              const orderCreationIST = new Date(orderCreationUTC.getTime() + (5.5 * 60 * 60 * 1000));
              const currentTimeIST = new Date(new Date().getTime() + (5.5 * 60 * 60 * 1000));
              diffInMinutes = (currentTimeIST - orderCreationIST) / (1000 * 60);
          } else {
              console.warn(`OrderTableMobile: Order ${order.orderNumber || `(index ${index})`}: Invalid order.orderTime: '${order.orderTime}'. Time-based cancellation rules might not apply accurately.`);
          }
      } else {
          console.warn(`OrderTableMobile: Order ${order.orderNumber || `(index ${index})`}: Missing order.orderTime. Time-based cancellation rules might not apply accurately.`);
      }

      const paymentGw = (order.paymentGateway || "").trim().toLowerCase();
      const isCOD = paymentGw === "cod" || paymentGw === "";

      // Parse Time Limit from API (handles null, undefined, non-numeric)
      const rawTimeLimitFromAPI = isCOD ? cancelMapping.cod_timelimit : cancelMapping.prepaid_timelimit;
      let timeLimitMinutes = null;

      if (rawTimeLimitFromAPI !== null && typeof rawTimeLimitFromAPI !== 'undefined') {
          const parsedValue = parseFloat(rawTimeLimitFromAPI);
          if (!isNaN(parsedValue)) {
              timeLimitMinutes = parsedValue;
          } else {
              console.warn(`OrderTableMobile: Order ${order.orderNumber || `(index ${index})`}: Invalid time limit value ('${rawTimeLimitFromAPI}') for ${isCOD ? 'COD':'Prepaid'} from API. No time-based cancellation restriction will be applied.`);
          }
      }
      // timeLimitMinutes is now either a number or null.

      const rawOrderStatusFromApi = isCOD ? cancelMapping.order_status_cod : cancelMapping.order_status_prepaid;
      const apiAllowedCancelStatus = (typeof rawOrderStatusFromApi === 'string' ? rawOrderStatusFromApi.trim() : "unfulfilled").toLowerCase();

     
      const statusPreventsCancellation = apiAllowedCancelStatus !== "" && currentOrderStatusNormalized !== apiAllowedCancelStatus;
      // isOutsideTimeLimit is true ONLY if a numeric timeLimitMinutes is set AND diffInMinutes (if valid) exceeds it.
      // If timeLimitMinutes is null OR diffInMinutes is NaN, time does NOT prevent cancellation.
      const isOutsideTimeLimit = (timeLimitMinutes !== null) && (!isNaN(diffInMinutes)) && (diffInMinutes > timeLimitMinutes);

      const cancelBtnDisabled = isAlreadyCancelled || statusPreventsCancellation || isOutsideTimeLimit;
      
      let disabledReason = "Cancellation not available.";
      if (isAlreadyCancelled) {
          disabledReason = "Order is already cancelled.";
      } else if (statusPreventsCancellation) {
          disabledReason = `Order status ('${order.fulfillmentStatus || 'N/A'}') prevents cancellation. Allowed: '${apiAllowedCancelStatus}'.`;
      } else if (isOutsideTimeLimit) {
          // This condition implies timeLimitMinutes is not null and diffInMinutes is valid.
          disabledReason = `Cancellation period of ${timeLimitMinutes} minutes has expired.`;
      }

      console.log(`OrderTableMobile: Order ${order.orderNumber || `(index ${index})`}:`);
      console.log(`  Diff (mins): ${diffInMinutes.toFixed(2)}, TimeLimit (mins): ${timeLimitMinutes}`);
      console.log(`  isAlreadyCancelled: ${isAlreadyCancelled}, statusPreventsCancellation: ${statusPreventsCancellation} (current: '${currentOrderStatusNormalized}', allowed: '${apiAllowedCancelStatus}'), isOutsideTimeLimit: ${isOutsideTimeLimit}`);
      console.log(`  Cancel Button Disabled: ${cancelBtnDisabled}, Reason: ${disabledReason}`);
if (cancelOrderData) {
      if (!isAlreadyCancelled) {
          const cancelBtn = document.createElement("button");
          cancelBtn.classList.add("dash-order-cancel");
          cancelBtn.innerHTML = `<span style="align-items: center; display:flex"><svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" style="margin-right: 6px; vertical-align: middle;" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>Cancel Order</span>`;


          if (cancelBtnDisabled) {
              cancelBtn.disabled = true;
              cancelBtn.style.color = "gray";
              cancelBtn.style.pointerEvents = "none";
              cancelBtn.style.cursor = "default";
              cancelBtn.classList.add("cancel-disabled-mobile");
              cancelBtn.title = disabledReason;
          } else {
              cancelBtn.addEventListener("click", function () {
                  if (typeof cancelOrder === 'function') {
                      cancelOrder(order.orderId, order.orderNumber);
                  } else {
                      console.error("cancelOrder function is not defined.");
                  }
              });
              cancelBtn.title = "Cancel this order";
          }
          actionsDiv.appendChild(cancelBtn);
      }
    }
attachReorderEventListeners();
        innerOrderDiv.classList.add("mobile-order-inner-style");

        ordersContent.appendChild(orderDiv); // Appended inside mobile
        const hrTag = document.createElement("hr");
        hrTag.classList.add("mobile-order-hr");
        ordersContent.appendChild(hrTag);
    });

    orderContainer.appendChild(headerSection);

    const omcdash = document.createElement("div");
    omcdash.className = "mobile-dash-view";
    omcdash.appendChild(ordersContent);
    orderContainer.appendChild(omcdash); // Append recent Orders

    return orderContainer;
}
async function renderDashboard() {
    const dashboardContainer = document.getElementById("dashboardContainer");
    dashboardContainer.innerHTML = "";
    const dashboardWrapper = document.createElement("div");
    dashboardWrapper.className = "xircls-dashboard-wrapper"

    const cardsData = await getCardsData(); // Fetch your card data
    const profileCard = dashProfile(); // Assuming it creates a profile card

    // Conditionally use different order functions
    let orderSection;
    if (window.innerWidth <= 768) {
        orderSection = await createMobileDashboardOrder(customerOrders);
    } else {
        orderSection = dashOrder(customerOrders);
    }

    const cardsSection = createCardsSection(cardsData);

    dashboardWrapper.appendChild(cardsSection);
    dashboardWrapper.appendChild(profileCard);
    if (customerOrders.length !== 0) {
        dashboardWrapper.appendChild(orderSection);
    }
    dashboardContainer.appendChild(dashboardWrapper);

    if (dashboardContainer && dashboardContainer.children.length >= 2) {
        const firstChild = dashboardContainer.children[0];

        if (firstChild.classList.contains('xircls-dashboard-wrapper')) {
            dashboardContainer.removeChild(firstChild);
        }
    }
    attachReorderEventListeners();
}
function dashOrder(orders) {
    const orderContainer = document.createElement("div");
    orderContainer.id = "omc-dashorder-container";
    orderContainer.classList.add("dashorder-container");

    const headerSection = document.createElement("div");
    headerSection.id = "omc-dashorder-header";
    headerSection.classList.add("dashorder-header");

    const title = document.createElement("div");
    title.id = "omc-dashorder-title";
    title.textContent = "Recent Orders";

    const viewAllLink = document.createElement("span");
    viewAllLink.id = "omc-dashorder-view-all";
    viewAllLink.classList.add("dashorder-view-all");
    viewAllLink.addEventListener("click", function () {
        renderContent(1);
    });
    viewAllLink.textContent = "View All Orders";

    headerSection.appendChild(title);
    headerSection.appendChild(viewAllLink);

    const ordersContent = document.createElement("div");
    ordersContent.id = "omc-dashorder-content";
    ordersContent.classList.add("dashorder-content");

    // Get the latest 3 orders
    let recentOrders = [];
    if (orders && Array.isArray(orders)) {
        recentOrders = orders.slice(0, 3);
    }

    // Create each recent order
    recentOrders.forEach((order) => {
        // Log the order to the console for inspection
        console.log(order, "inspecting recent order");

        const orderDiv = document.createElement("div");
        orderDiv.className = "omc-recent-order";

        const orderInnerDiv = document.createElement("div");
        orderInnerDiv.classList.add("dashOrder-container");

        const imageAndDetailsDiv = document.createElement("div");
        imageAndDetailsDiv.classList.add("dashOrder-imgdetails-div");

        const imageContainer = document.createElement("div");
        imageContainer.style.flexShrink = "0";

        const orderItem =
            order.items && order.items.length > 0 ? order.items[0] : null; // Get the first item in the order, if available
        const imageUrl = orderItem
            ? orderItem.image
            : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png"; // Default image URL

        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = orderItem ? orderItem.title : "Order Image";
        image.classList.add("dashOrder-img");

        imageContainer.appendChild(image);

        const textAndPriceDiv = document.createElement("div");
        // textAndPriceDiv.style.flexGrow = '1';

        const titleAndPriceDiv = document.createElement("div");
        titleAndPriceDiv.classList.add("dashorder-title-price-div");

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("dashorder-title-div");

        const title = document.createElement("span");
        title.classList.add("dashOrder-order-title");
        title.textContent = orderItem ? orderItem.title : "Unnamed Product";

        const orderId = document.createElement("span");
        orderId.classList.add("dashOrder-order-id");
        orderId.textContent = order.orderNumber;
        const moreItems = document.createElement('div')
        moreItems.textContent = `+${order.items.length - 1} more items`
        moreItems.classList.add('moreitems-dashorder')
        titleDiv.appendChild(title);
        if (order.items.length > 1) {
            titleDiv.appendChild(moreItems);
        }
        titleDiv.appendChild(orderId);

        const cancelledText = document.createElement('span');
        cancelledText.classList.add('omc-cancelled-text')
        cancelledText.textContent = order.cancelledAt ? "Cancelled" : ""
        cancelledText.style.marginLeft = '10px'

        const statusSpan = document.createElement("span");
        statusSpan.classList.add("dashOrder-status");
        const statusText = document.createElement("span");
        statusText.textContent = order.fulfillmentStatus;
        statusSpan.appendChild(statusText);

        if (order.cancelledAt) {
            title.appendChild(cancelledText)
        } else {
            title.appendChild(statusSpan)
        }

        const priceDiv = document.createElement("div");
        const price = document.createElement("span");
        price.classList.add("dashOrder-price");
        price.textContent = order.totalPrice;

        titleAndPriceDiv.appendChild(titleDiv);
        // titleAndPriceDiv.appendChild(priceDiv);
        priceDiv.appendChild(price);

        const metaDetailsDiv = document.createElement("div");
        metaDetailsDiv.classList.add("dashorder-meta-details");

        const orderDate = document.createElement("span");
        orderDate.classList.add("dashOrder-date");
        orderDate.textContent = order.orderDate;

        metaDetailsDiv.appendChild(orderDate);

        textAndPriceDiv.appendChild(titleAndPriceDiv);
        textAndPriceDiv.appendChild(metaDetailsDiv);

        imageAndDetailsDiv.appendChild(imageContainer);
        imageAndDetailsDiv.appendChild(textAndPriceDiv);

        const actionsDiv = document.createElement("div");
        actionsDiv.classList.add("dashorder-actions");
        const isAlreadyCancelled = !!order.cancelledAt;
        const currentOrderStatusNormalized = (order.fulfillmentStatus || "").trim().toLowerCase();
        const showTrackButton = !isAlreadyCancelled && currentOrderStatusNormalized !== 'unfulfilled';
        const encodedOrderString = encodeURIComponent(JSON.stringify(order));
        const encodedTrackSettingsString = encodeURIComponent(JSON.stringify(trackOrderSettings));
        
        const trackOrderButton = document.createElement("button");
        
        trackOrderButton.classList.add("dashOrder-track");
        trackOrderButton.textContent = "Track";
        trackOrderButton.addEventListener("click", function () {
          openTrackOrderModal(encodedOrderString, encodedTrackSettingsString);
        });

        const buyAgainButton = document.createElement("button");
        buyAgainButton.classList.add("dashOrder-buyagain");
        buyAgainButton.textContent = "Buy Again";
        buyAgainButton.setAttribute(
            "data-order",
            JSON.stringify(order.items).replace(/'/g, "\\'")
        );
        buyAgainButton.classList.add("reorder-btn");
        attachReorderEventListeners();
        actionsDiv.appendChild(priceDiv);

        if (myOrders.includes("Order_Tracking") && showTrackButton) {
            actionsDiv.appendChild(trackOrderButton);
        }
        if (myOrders.includes("Re_order")) {
            actionsDiv.appendChild(buyAgainButton);
        }

        orderInnerDiv.appendChild(imageAndDetailsDiv);
        orderInnerDiv.appendChild(actionsDiv);

        orderDiv.appendChild(orderInnerDiv);
        ordersContent.appendChild(orderDiv);
    });

    // Append the content
    orderContainer.appendChild(headerSection);
    orderContainer.appendChild(ordersContent);

    return orderContainer;
}
async function LoyaltyPoints() {
    const formData = new FormData();
    formData.append('app', 'oh_my_customer');
    formData.append('shop', Shopify.shop);
    formData.append('email', profile_email);

    const url = `https://loyalty.axentraos.co.in/api/v1/ledger/customer_details/`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('✅ Raw API loyalty:', data);
        globalLoyaltyPoints = data; // assign to global variable
        LoyaltyTierName = data.customer_tier;
        return data;
    } catch (error) {
        console.error('❌ Error fetching API data:', error);
        globalLoyaltyPoints = 0; // or null if preferred
         LoyaltyTierName = "";
        return 0;
    }
    // finally {
    //   updateLoyaltyPointsContainer();
    //   redemptionOptions = getRedemptionOptions();
    // }
}
async function getCardsData() {
  // Start with an empty array. We will add cards to it conditionally.
  const cards = [];
const loyaltyData = await LoyaltyPoints();
  // --- Card 1: Total Orders ---
  // Only add this card if the 'My Orders' feature is enabled.
  if (elementsObj.myOrders && elementsObj.myOrders.enabled === true) {
      cards.push({
          title: "Total Orders",
          value: customerOrders.length,
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg"  width="18" height="18" fill="none"  viewBox="0 0 24 24"  stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12V6a2 2 0 00-2-2h-2l-2-2h-4l-2 2H6a2 2 0 00-2 2v6m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4" /></svg>`,
          iconBackgroundColor: "#E5E7EB",
          iconColor: "#2563EB",
          navigationId: "myOrders", // For clickable navigation
      });
  }

  // --- Card 2: Total Spent ---
  // This card is not tied to a specific menu item, so we can assume it's always shown.
  // If you want to control it too, you can add a similar 'if' condition.
  if (elementsObj.myOrders && elementsObj.myOrders.enabled === true) {
  cards.push({
      title: "Total Spent",
      value: totalSpent || "",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" viewBox="0 0 24 24"  width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M6 3h12" /><path d="M6 8h12" /><path d="M6 13l8.5 8" /><path d="M6 13h3a6 6 0 0 0 6-6V3" /></svg>`,
      iconBackgroundColor: "#D1FAE5",
      iconColor: "#16A34A",
      navigationId: "myOrders", 
  });
  }
  // --- Card 3: Wishlist Items ---
  // Only add this card if the 'My Wishlist' feature is enabled.
  if (elementsObj.myWishlist && elementsObj.myWishlist.enabled === true) {
      cards.push({
          title: "Wishlist Items",
          value: WishlistItemsCount,
          icon: `<svg  width="20" height="20" class="xircls_svg" fill="red" stroke-width="2" viewBox="0 0 24 24" 
    stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
        2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
        4.5 2.09C13.09 3.81 14.76 3 16.5 3 
        19.58 3 22 5.42 22 8.5c0 3.78-3.4 
        6.86-8.55 11.54L12 21.35z"/>
    </svg>`,
          iconBackgroundColor: "#FEE2E2",
          iconColor: "#DC2626",
          saleItems: WishlistItemsCount,
          navigationId: "myWishlist", // For clickable navigation
      });
  }
  const TierName = "gift"
  const tierIconMap = {
      crown: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="xircls_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crown w-10 h-10 text-amber-500"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>`,
      gift: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="xircls_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift w-10 h-10" ><rect x="3" y="8" width="18" height="4" rx="1"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>`,
      shield: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="xircls_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield w-10 h-10" ><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>`,
      heart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="xircls_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart w-10 h-10" ><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>`,
      trophy: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="xircls_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy w-10 h-10" ><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>`,
      star: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="xircls_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star w-10 h-10" ><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>`,
      rocket: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="xircls_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket w-10 h-10" ><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>`,
      gem: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="xircls_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gem w-10 h-10" ><path d="M6 3h12l4 6-10 13L2 9Z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></svg>`,
      default: `<svg xmlns="http://www.w3.org/2000/svg" ...>...</svg>`, 
    };

    const activeTierIcon = tierIconMap[TierName] || tierIconMap.default;
if (elementsObj.loyalty  && loyaltyData.customer_tier && elementsObj.loyalty.enabled === true) {
    cards.push({
      title: "Current Tier",
      value: loyaltyData.customer_tier || "", // you can replace with actual tier value
      icon: activeTierIcon,
      iconBackgroundColor: "#fff1caff",
      iconColor: "#ce9721ff",
      navigationId: "loyalty",
    });
}
  return cards;
}
function createCardsSection(cardsData) {
    const cardsWrapper = document.createElement("div");
    cardsWrapper.classList.add("cards-wrapper-unique"); // Added class

    if (!cardsData || cardsData.length === 0) {
        const noDataMessage = document.createElement("div");
        noDataMessage.textContent = "";
        cardsWrapper.appendChild(noDataMessage);
        return cardsWrapper;
    }

    cardsData.forEach((card) => {
        const cardElement = createDashboardCard(card);
        cardsWrapper.appendChild(cardElement);
    });

    return cardsWrapper;
}
function setActiveMenu(activeIndex) {
  // Helper to update a single menu
  const updateMenu = (menuSelector) => {
      const menuItems = document.querySelectorAll(`${menuSelector} .xircls-menu-item`);
      menuItems.forEach(item => {
          item.classList.remove("active");
          if (parseInt(item.dataset.index) === activeIndex) {
              item.classList.add("active");
          }
      });
  };

  // Update both desktop and mobile menus
  updateMenu("#xircls-menu"); // For desktop
  updateMenu("#xircls-mobile-menu"); // For mobile
}
function createDashboardCard(cardData) {
  const card = document.createElement("div");
  card.classList.add("dashboard-card-unique");

  const topRow = document.createElement("div");
  topRow.classList.add("top-row-unique");

  const titleValue = document.createElement("div");
  titleValue.classList.add("title-value-unique");

  const title = document.createElement("span");
  title.classList.add("card-title-unique");
  title.textContent = cardData.title;

  const value = document.createElement("span");
  value.classList.add("card-value-unique");
  value.textContent = cardData.value;

  titleValue.appendChild(title);
  titleValue.appendChild(value);

  const iconDiv = document.createElement("div");
  const icon = document.createElement("div");
  icon.innerHTML = cardData.icon;
  icon.classList.add("card-icon-container-unique");
  icon.style.backgroundColor = cardData.iconBackgroundColor;
  icon.style.color = cardData.iconColor;
  
  iconDiv.appendChild(icon);

  topRow.appendChild(titleValue);
  topRow.appendChild(iconDiv); // Corrected this from icon to iconDiv

  // --- START: New Navigation Logic ---
  const menuOptions = [
    {
        label: "Dashboard",
        mobileLabel: "Dashboard",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12l9-9 9 9"/><path d="M4 10v10h6v-6h4v6h6V10"/></svg>`,
        heading: "My Account Dashboard",
        id: "dashboard"
    },
    {
        label: "My Orders",
        mobileLabel: "Orders",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg"  width="20" height="20" fill="none"  viewBox="0 0 24 24"  stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12V6a2 2 0 00-2-2h-2l-2-2h-4l-2 2H6a2 2 0 00-2 2v6m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4" /></svg>`,
        heading: "Order History",
        id: "myOrders"
    },
    {
        label: "My Profile",
        mobileLabel: "Profile",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>`,
        heading: "Profile",
        id: "myProfile"
    },
    {
        label: "My Wishlist",
        mobileLabel: "Wishlist",
        icon: `<svg  width="20" height="20" class="xircls_svg" fill="red" stroke-width="2" viewBox="0 0 24 24" 
    stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
        2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
        4.5 2.09C13.09 3.81 14.76 3 16.5 3 
        19.58 3 22 5.42 22 8.5c0 3.78-3.4 
        6.86-8.55 11.54L12 21.35z"/>
    </svg>`,
        heading: "Saved Items",
        id: "myWishlist"
    },
    {
        label: "Recently Viewed",
        mobileLabel: "Recent",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
        heading: "Your Browsing History",
        id: "recentlyViewed"
    },
    
    {
      label: LoyltyProgramName || "Loyalty",
      mobileLabel : "Loyalty",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke-width="2" class="xircls_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" /></svg>`,
      heading: LoyltyProgramName || "Loyalty",
      id:"loyalty"
    },
     {
        label: "My Subscription",
        mobileLabel: "Subscription",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
        heading: "My Subscriptions",
        id: "subscription"
    },
     {
      label: "Offers",
      mobileLabel : "Offers",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_offer_svg" width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M15,13h-3.5C9.6,13,8,14.6,8,16.5v0C8,17.9,6.9,19,5.5,19h0C4.1,19,3,17.9,3,16.5V16c0-3.3,2.7-6,6-6h0h2"/>
  <path d="M11,8v7.9l8.7,8.7c0.8,0.8,2,0.8,2.8,0l5-5c0.8-0.8,0.8-2,0-2.8L18.9,8L11,8z"/>
</svg>
`,
      heading: "Manage Your Offers",
      id:"offers"
    },
    {
        label: "Change Password",
        mobileLabel: "Password",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`,
        heading: "Change Password",
        id: "changePassword"
    },
    {
        label: "Logout",
        mobileLabel: "Logout",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
        heading: "Logout",
        id: "logout"
    }
];
  // Note: This relies on `menuOptions` being accessible in this scope. 
  // It's defined in `renderMenu`, so it should be available if declared globally or in an outer scope.
  if (cardData.navigationId && typeof menuOptions !== 'undefined') {
      const targetIndex = menuOptions.findIndex(opt => opt.id === cardData.navigationId);

      if (targetIndex !== -1) {
          card.style.cursor = "pointer"; // Add a visual cue that the card is clickable
          card.title = `Go to ${cardData.title}`; // Add a helpful tooltip

          card.onclick = () => {
              // 1. Render the new content
              renderContent(targetIndex);

              // 2. Update the active menu item in both menus
              setActiveMenu(targetIndex);

              // 3. Optional: Scroll to the top of the page
              window.scrollTo({ top: 0, behavior: 'smooth' });
          };
      }
  }
  // --- END: New Navigation Logic ---

  let changeDiv;
  if (cardData.change) {
    changeDiv = document.createElement("div");
    changeDiv.classList.add("change-div-unique");

    const changeSpan = document.createElement("span");
    changeSpan.style.color = cardData.change.color;
    changeSpan.classList.add("change-span-unique");

    const changeIcon = document.createElement("i");
    changeIcon.classList.add("fa", cardData.change.icon);
    changeIcon.classList.add(cardData.change.icon.replace("fa-", "") + "-icon");
    changeIcon.style.fontSize = "1rem";
    changeIcon.style.marginRight = "4px";

    const changeValue = document.createElement("span");
    changeValue.textContent = cardData.change.value;

    changeSpan.appendChild(changeIcon);
    changeSpan.appendChild(changeValue);

    changeDiv.appendChild(changeSpan);
  }

  card.appendChild(topRow);
  if (cardData.change) {
      card.appendChild(changeDiv);
  }

  return card;
}
function renderContent(index) {
  let renderedContentDivs = {};
  const tabContent = document.getElementById("tabContent");
  const menuOptions = [
    {
        label: "Dashboard",
        mobileLabel: "Dashboard",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12l9-9 9 9"/><path d="M4 10v10h6v-6h4v6h6V10"/></svg>`,
        heading: "My Account Dashboard",
        id: "dashboard"
    },
    {
        label: "My Orders",
        mobileLabel: "Orders",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg"  width="20" height="20" fill="none"  viewBox="0 0 24 24"  stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12V6a2 2 0 00-2-2h-2l-2-2h-4l-2 2H6a2 2 0 00-2 2v6m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4" /></svg>`,
        heading: "Order History",
        id: "myOrders"
    },
    {
        label: "My Profile",
        mobileLabel: "Profile",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>`,
        heading: "My Profile",
        id: "myProfile"
    },
    {
        label: "My Wishlist",
        mobileLabel: "Wishlist",
        icon: `<svg  width="20" height="20" class="xircls_svg" fill="red" stroke-width="2" viewBox="0 0 24 24" 
    stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
        2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
        4.5 2.09C13.09 3.81 14.76 3 16.5 3 
        19.58 3 22 5.42 22 8.5c0 3.78-3.4 
        6.86-8.55 11.54L12 21.35z"/>
    </svg>`,
        heading: "Saved Items",
        id: "myWishlist"
    },
    {
        label: "Recently Viewed",
        mobileLabel: "Recent",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
        heading: "Your Browsing History",
        id: "recentlyViewed"
    },
   
    {
      label: LoyltyProgramName || "Loyalty",
      mobileLabel : "Loyalty",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke-width="2" class="xircls_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" /></svg>`,
      heading: LoyltyProgramName || "Loyalty",
      id:"loyalty"
    },
     {
        label: "My Subscription",
        mobileLabel: "Subscription",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
        heading: "My Subscriptions",
        id: "subscription"
    },
     {
      label: "Offers",
      mobileLabel : "Offers",
       icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_offer_svg" width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M15,13h-3.5C9.6,13,8,14.6,8,16.5v0C8,17.9,6.9,19,5.5,19h0C4.1,19,3,17.9,3,16.5V16c0-3.3,2.7-6,6-6h0h2"/>
  <path d="M11,8v7.9l8.7,8.7c0.8,0.8,2,0.8,2.8,0l5-5c0.8-0.8,0.8-2,0-2.8L18.9,8L11,8z"/>
</svg>
`,
      heading: "Manage Your Offers",
      id:"offers"
    },
    {
        label: "Change Password",
        mobileLabel: "Password",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`,
        heading: "Change Password",
        id: "changePassword"
    },
    {
        label: "Logout",
        mobileLabel: "Logout",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
        heading: "Logout",
        id: "logout"
    }
];
    console.log("content rendering....", index);
    renderedContentDivs[0] = document.getElementById("dashboardContainer");
    renderedContentDivs[1] = document.getElementById("ordersContainer");
    renderedContentDivs[2] = document.getElementById("profileContainer");
    renderedContentDivs[3] = document.getElementById("wishListsContainer");
    renderedContentDivs[4] = document.getElementById("RecentsContainer");
    // renderedContentDivs[5] = document.getElementById("loyaltyContainer");
    // renderedContentDivs[6] = document.getElementById("subscriptionContainer");
    // renderedContentDivs[7] = document.getElementById("offersContainer");
    //renderedContentDivs[8] = document.getElementById("securityContainer");
    renderedContentDivs[5] = ensureSupportTicketsContainer(tabContent);
    renderedContentDivs[6] = document.getElementById("loyaltyContainer");
    renderedContentDivs[7] = document.getElementById("subscriptionContainer");
    renderedContentDivs[8] = document.getElementById("offersContainer");
    //renderedContentDivs[8] = document.getElementById("securityContainer");
    //renderedContentDivs[8] = ensureSupportTicketsContainer();
    renderedContentDivs[9] = document.getElementById("securityContainer");
    // We don't need to store the logout modal content as it will be dynamically created later.
    //if (index !== 9) {
      if (index !== 10) {
        tabHeading.innerText = menuOptions[index].heading; // Set the heading inside tabHeading
    }
    
    if (index === 2) {
        // tabHeading.style.display = "none";
        // const container = document.getElementById("profileContainer");
        // const tabContainer = document.getElementById("tabContent");
        // const container_2 = document.querySelector(".container-2");
        // container.style.padding = "0px 20px"
        // tabContainer.style.padding = "0px 20px"
        // container_2.style.padding = "0px 20px"
    //} else if (index === 8) {
    } else if (index === 5 || index === 9) {
        tabHeading.style.display = "none";
        // const container = document.getElementById('profileContainer');
        // container.style.padding = "0px 20px"
    //} else if (index === 9) {
    } else if (index === 10) {
        tabHeading.style.display = "none";
        // const container = document.getElementById('profileContainer');
        // container.style.padding = "0px 20px"
    } else {
        tabHeading.style.display = "block ";
    }
    // if (index === 3) {

    // } else if (index !== 3) {
    // const buttonAction = document.getElementById("actionheading");
    // buttonAction.style.display = "none";
    // }
    // if (index === 0) {
    //     renderDashboard()
    // }
   
    if (index === 3) {
        // renderWishlist()
        fetchWishlistOnReload();
    }
    if (!tabContent) {
        console.error("tabContent not found!");
        return;
    }

    let contentDiv;
    console.log("Determining which content to render...");

    //if (index === 9) {
    if (index === 10) {
        console.log("Logout option clicked");
        // createModal(
        //     'Logout',             // Heading Text
        //     'Are you sure you want to logout?', // Body Content
        //     'Proceed',                    // Button Text
        //     Logout              // Function to be executed on button click
        // );
       confirmLogout();

        return;
    }
    if (index !== 10) {
        contentDiv = renderedContentDivs[index];
    }

    if (!contentDiv) {
        console.error("Content container for index " + index + " is missing!");
        return;
    }

    // Hide all content divs and only show the selected one
    Object.values(renderedContentDivs).forEach((div) => {
        if (div) div.style.display = "none";
    });

    contentDiv.style.display = "block";
    // tabContent.innerHTML = '';
    // console.log("tabContent emptied...", tabContent)

    // Append the contentDiv (selected container) to tabContent
    tabContent.appendChild(contentDiv);

    // Add the active class to the clicked item
   

    const urlParams = new URLSearchParams(window.location.search);
const section = urlParams.get("section");

    const allItems = document.querySelectorAll(".xircls-menu-item");
    allItems.forEach((item) => item.classList.remove("active"));
const activeItem = document.querySelector(`.xircls-menu-item:nth-child(${index + 1})`);
if (activeItem) activeItem.classList.add("active");

}




// SUPPORT TICKET CODE 

const SUPPORT_TICKET_BASE_URL = "http://127.0.0.1:8000";
const supportTicketApi = {
  baseUrl: SUPPORT_TICKET_BASE_URL,
  ticketsPath: "/api/v1/ticket/handler/shop",
  ratingsPath: "/api/v1/ticket/ratings/shop",
};

const supportTicketState = {
  tickets: [],
};


function ensureSupportTicketsContainer() {
  let container = document.getElementById("supportTicketsContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "supportTicketsContainer";
    document.body.appendChild(container);
  }

  if (!container.dataset.rendered) {
    renderSupportTickets(container);
    container.dataset.rendered = "true";
    fetchAndRenderSupportTickets();
  }

  container.style.display = "block";
  return container;
}

function getSupportApiUrl(path) {
  if (!supportTicketApi.baseUrl) return path;
  return `${supportTicketApi.baseUrl.replace(/\/$/, "")}${path}`;
}

function getSupportTicketRequestContext() {
  const resolvedEmail = typeof customerEmail !== "undefined" && customerEmail
    ? customerEmail
    : (typeof profile_email !== "undefined" ? profile_email : "");

  const resolvedCustomerId = typeof customerId !== "undefined" ? Number(customerId) : 0;

  return {
    web_url: Shopify?.shop,
    customer_id: resolvedCustomerId,
    email: resolvedEmail,
  };
}

function fetchAndRenderSupportTickets() {
  const { web_url, customer_id, email } = getSupportTicketRequestContext();
  const query = new URLSearchParams({ web_url, customer_id, email }).toString();

  fetch(`${getSupportApiUrl(supportTicketApi.ticketsPath)}?${query}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) =>
      response.json().then((data) => ({ ok: response.ok, data }))
    )
    .then(({ ok, data }) => {
      if (!ok || data?.status !== "success") {
        throw new Error(data?.message || "Failed to fetch support tickets");
      }
    
      supportTicketState.tickets = data?.data?.tickets || [];
      renderSupportTicketList();
    })
    
    .catch((error) => {
      console.error("❌ Support tickets fetch failed:", error);
      createStatusToast("Couldn’t Load Tickets", error.message || "Please try again.", "error");
      supportTicketState.tickets = [];
      renderSupportTicketList();
    });
}

function renderSupportTickets(container) {
  container.innerHTML = `
  <div style="max-width:1200px;margin:0 auto;padding:24px;position:relative;">

   
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px;">
      <div>
        <h1 style="font-size:28px;font-weight:700;margin:0 0 6px;">My Support Tickets</h1>
        <p style="color:#6b7280;margin:0;">Track and manage your support requests</p>
      </div>

      <button id="openCreateTicket" style="
        background:#2563eb;color:#fff;border:none;border-radius:6px;
        padding:10px 16px;font-size:14px;font-weight:500;cursor:pointer;
      ">+ Create New Ticket</button>
    </div>

   
    <div id="supportTicketStats" style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px;"></div>

   
    <div style="display:flex;gap:12px;margin-bottom:24px;position:relative;">
      <input id="supportTicketSearch" placeholder="Search tickets by subject, number, or description..."
        style="flex:1;padding:10px 12px;border-radius:6px;border:1px solid #d1d5db;font-size:14px;"
      />


      ${dropdown("statusDropdown", "All Status", ["All Status","Open","Pending","Assigned","Closed"])}
      ${dropdown("priorityDropdown", "All Priority", ["All Priority","Low","Medium","High","Critical"])}
    </div>

   
    <div id="supportTicketList" style="display:flex;flex-direction:column;gap:16px;"></div>

   
    ${createTicketModal()}
    ${ticketConversationModal()}
     <p id="supportTicketEmptyState" style="display:none;color:#6b7280;text-align:center;margin:12px 0 0;">No tickets found for your search/filter.</p>
  </div>
  `;

  attachDropdownLogic();
  attachModalLogic();
  attachSupportTicketsLogic();
  attachTicketConversationModalLogic();
  renderSupportTicketList();
}

function renderSupportTicketList() {
  const ticketList = document.getElementById("supportTicketList");
  const stats = document.getElementById("supportTicketStats");
  if (!ticketList || !stats) return;

  const tickets = supportTicketState.tickets || [];
  const statusCount = tickets.reduce((acc, t) => {
    const key = (t?.status || "").toLowerCase();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  stats.innerHTML = [
    statCard("Open Tickets", String(statusCount.open || 0)),
    statCard("Pending", String(statusCount.pending || 0)),
    statCard("Assigned", String(statusCount.assigned || 0)),
    statCard("Closed", String(statusCount.closed || 0)),
  ].join("");

  ticketList.innerHTML = tickets
    .map((ticket) => mapApiTicketToCard(ticket))
    .join("");

  attachSupportTicketsLogic();
  attachTicketConversationModalLogic();
}

function mapApiTicketToCard(ticket) {
  const content = ticket?.content || {};
  const additional = ticket?.additional_details || {};
  const customer = ticket?.customer_details || {};
  const subject = content.subject || "Untitled ticket";
  const desc = content.description || "No description provided.";
  const ticketType = additional.department || "General";
  const priority = additional.priority || "low";
  const status = ticket?.status || "pending";
  const meta = `${ticket?.support_ticket_id || "-"} · Customer: ${customer.customer_first_name || ""} ${customer.customer_last_name || ""}`.trim();
  const date = ticket?.created_at ? new Date(ticket.created_at).toLocaleString() : "-";

  return ticketCard({
    id: ticket?.id,
    title: subject,
    tag: ticketType,
    desc,
    status: toTitleCase(status),
    priority: toTitleCase(priority),
    meta,
    date,
  });
}

function toTitleCase(value = "") {
  return value
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/* ---------- HELPERS ---------- */

function statCard(label, value) {
  return `
    <div style="border:1px solid #e5e7eb;border-radius:8px;padding:16px;background:#f9fafb;">
      <div style="font-size:24px;font-weight:700;">${value}</div>
      <div style="font-size:14px;color:#6b7280;">${label}</div>
    </div>
  `;
}

function dropdown(id, label, items) {
  return `
  <div style="position:relative;">
    <button id="${id}Btn" style="
      padding:10px 12px;border-radius:6px;border:1px solid #d1d5db;
      background:#fff;font-size:14px;cursor:pointer;min-width:140px;
    ">${label} ▼</button>

    <div id="${id}Menu" style="
      display:none;position:absolute;top:44px;left:0;background:#fff;
      border:1px solid #e5e7eb;border-radius:6px;min-width:160px;
      box-shadow:0 8px 24px rgba(0,0,0,.08);z-index:10;text-align:left;
    ">
      ${items.map(i=>`<div class="dd-item" data-value="${i}"
        style="padding:8px 12px;font-size:14px;cursor:pointer;text-align:left;">${i}</div>`).join("")}
    </div>
  </div>`;
}


function ticketCard({id,title,tag,desc,status,priority,meta,date}) {
  const searchable = `${title} ${desc} ${meta}`.toLowerCase().replace(/"/g, "&quot;");

  return `
  <div class="support-ticket-card"
    data-id="${id || ""}"
    data-search="${searchable}"
    data-status="${status.toLowerCase()}"
    data-priority="${priority.toLowerCase()}"
    style="
      border:1px solid #e5e7eb;
      border-radius:8px;
      padding:16px;
      cursor:pointer;
      transition:box-shadow 0.2s ease;
    "
    onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.08)'"
    onmouseout="this.style.boxShadow='none'"
  >
    <div style="display:flex;align-items:flex-start;gap:16px;">

      <!-- LEFT CONTENT -->
      <div style="flex:1;min-width:0;">

        <!-- TOP ROW -->
        <div style="display:flex;justify-content:space-between;margin-bottom:8px;">

          <!-- TITLE + TAG -->
          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
              <h3 style="
                margin:0;
                font-weight:500;
                font-size:16px;
                color:#111827;
              ">
                ${title}
              </h3>

              <div style="
                display:inline-flex;
                align-items:center;
                border-radius:999px;
                padding:2px 10px;
                font-size:12px;
                font-weight:600;
                background:#ede9fe;
                color:#6b21a8;
              ">
                ${tag}
              </div>
            </div>

            <!-- DESCRIPTION -->
            <p style="
              margin:0;
              font-size:14px;
              color:#4b5563;
              line-height:1.4;
              text-align: left;
            ">
              ${desc}
            </p>
          </div>

          <!-- STATUS + PRIORITY -->
          <div style="
            display:flex;
            flex-direction:column;
            align-items:flex-end;
            gap:8px;
            margin-left:16px;
          ">

            <div style="
              display:inline-flex;
              align-items:center;
              border-radius:999px;
              padding:2px 10px;
              font-size:12px;
              font-weight:600;
              background:#ede9fe;
              color:#6b21a8;
            ">
              ${status}
            </div>

            <div style="
              display:inline-flex;
              align-items:center;
              border-radius:999px;
              padding:2px 10px;
              font-size:12px;
              font-weight:600;
              background:#fef3c7;
              color:#92400e;
            ">
              ${priority}
            </div>

          </div>
        </div>

        <!-- META ROW -->
        <div style="
          display:flex;
          justify-content:space-between;
          font-size:14px;
          color:#6b7280;
          margin-top:8px;
        ">
          <div>
            ${meta}
          </div>
          <span>${date}</span>
        </div>

      </div>
    </div>
  </div>`;
}


function ticketConversationModal() {
  return `
  <div id="ticketConversationModal" style="
    display:none;position:fixed;inset:0;background:rgba(17,24,39,.55);
    justify-content:center;align-items:center;z-index:1001;padding:20px;
  ">
    <div style="
      position:relative;background:#fff;border:1px solid #e5e7eb;border-radius:14px;
      width:100%;max-width:720px;max-height:86vh;overflow-y:auto;
      box-shadow:0 20px 40px -12px rgba(0,0,0,.25);padding:18px 20px;
      font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
    ">
      <button id="closeTicketConversation" type="button" style="
        position:absolute;right:16px;top:14px;background:transparent;border:none;
        color:#6b7280;font-size:24px;line-height:1;cursor:pointer;padding:0;
      ">×</button>

      <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px;">
        <span style="font-size:18px;line-height:1;color:#2563eb;">◌</span>
        <h2 style="margin:0;font-size:24px;font-weight:700;line-height:1.25;">Ticket Conversation</h2>
      </div>

      <p style="margin:8px 0 0;color:#6b7280;">Conversation view will be wired with backend messages in the next step.</p>
    </div>
  </div>`;
}


let applySupportFilters = null;

function attachSupportTicketsLogic() {
  const searchInput = document.getElementById("supportTicketSearch");
  const statusBtn = document.getElementById("statusDropdownBtn");
  const priorityBtn = document.getElementById("priorityDropdownBtn");

  if (!searchInput || !statusBtn || !priorityBtn) return;

  const normalize = (val="") => val.toLowerCase().trim();

  const getSelectedValue = (btn, defaultLabel) => {
    const raw = btn.innerText.replace("▼","").trim().toLowerCase();
    return raw === defaultLabel.toLowerCase() ? "all" : raw;
  };

  applySupportFilters = () => {
    const searchTerm = normalize(searchInput.value);
    const selectedStatus = getSelectedValue(statusBtn, "All Status");
    const selectedPriority = getSelectedValue(priorityBtn, "All Priority");

    let filtered = [...supportTicketState.tickets];

    if (searchTerm) {
      filtered = filtered.filter(ticket =>
        normalize(ticket.content?.subject).includes(searchTerm) ||
        normalize(ticket.content?.description).includes(searchTerm) ||
        normalize(ticket.support_ticket_id).includes(searchTerm)
      );
    }

    if (selectedStatus !== "all") {
      filtered = filtered.filter(ticket =>
        normalize(ticket.status) === selectedStatus
      );
    }

    if (selectedPriority !== "all") {
      filtered = filtered.filter(ticket =>
        normalize(ticket.additional_details?.priority) === selectedPriority
      );
    }

    renderFilteredTickets(filtered);
  };

  searchInput.oninput = applySupportFilters;
}



function renderFilteredTickets(tickets) {
  const ticketList = document.getElementById("supportTicketList");
  const stats = document.getElementById("supportTicketStats");
  const emptyState = document.getElementById("supportTicketEmptyState");

  if (!ticketList || !stats) return;

  const statusCount = tickets.reduce((acc, t) => {
    const key = (t.status || "").toLowerCase();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  stats.innerHTML = [
    statCard("Open Tickets", String(statusCount.open || 0)),
    statCard("Pending", String(statusCount.pending || 0)),
    statCard("Assigned", String(statusCount.assigned || 0)),
    statCard("Closed", String(statusCount.closed || 0)),
  ].join("");

  ticketList.innerHTML = tickets
    .map(ticket => mapApiTicketToCard(ticket))
    .join("");

  if (emptyState) {
    emptyState.style.display = tickets.length === 0 ? "block" : "none";
  }

  attachTicketConversationModalLogic();
}


function attachTicketConversationModalLogic() {
  const modal = document.getElementById("ticketConversationModal");
  const closeBtn = document.getElementById("closeTicketConversation");
  const cards = document.querySelectorAll(".support-ticket-card");

  if (!modal || cards.length === 0) return;

  cards.forEach((card) => {
    card.onclick = () => {
      modal.style.display = "flex";
    };
  });

  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };
   
  }

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}


function createTicketModal() {
  const priorityBadgeStyles = {
    Low: "background:#dcfce7;color:#166534;border:1px solid #bbf7d0;",
    Medium: "background:#fef3c7;color:#92400e;border:1px solid #fde68a;",
    High: "background:#ffedd5;color:#9a3412;border:1px solid #fed7aa;",
    Critical: "background:#fee2e2;color:#991b1b;border:1px solid #fecaca;",
  };

  const priorityOptionRow = (value) => `
    <button type="button" class="priority-option-item" data-value="${value}" style="
      width:100%;display:flex;align-items:center;gap:8px;border:none;background:transparent;
      padding:6px 10px;cursor:pointer;text-align:left;
    ">
      <span class="priority-option-check" style="width:14px;color:#111827;font-size:14px;visibility:hidden;">✓</span>
      <span style="display:inline-flex;align-items:center;padding:2px 10px;border-radius:999px;font-size:15px;line-height:1;font-weight:600;${priorityBadgeStyles[value]}">${value}</span>
    </button>
  `;

  return `
  <div id="ticketModal" style="
  display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);
  justify-content:center;align-items:center;z-index:1000;
">
  <div style="
    background:#fff;
    border-radius:10px;
    width:420px;
    padding:20px;
    position:relative;
  ">

    <button id="closeModalX" style="position:absolute;top:12px;right:12px;background:transparent;border:none;font-size:18px;cursor:pointer;color:#6b7280;">✕</button>

    <h3 style="margin:0 0 12px;text0align: left;">+ Create New Support Ticket</h3>

      <label style="display:block; margin-bottom:4px;text-align: left;">Ticket Type <span style="color:red;">*</span></label>
      <select id="ticketTypeInput" style="width:100%;padding:8px;margin-bottom:10px;">
        <option value="">Select ticket type</option>
        <option value="order enquiry">📦 Order Enquiry</option>
        <option value="return request">↩️ Return Request</option>
        <option value="refund request">💰 Refund Request</option>
        <option value="delivery issue">🚚 Delivery Issue</option>
        <option value="product defect">⚠️ Product Defect</option>
        <option value="billing enquiry">🧾 Billing Enquiry</option>
        <option value="technical issue">🛠️ Technical Issue</option>
        <option value="general enquiry">ℹ️ General Enquiry</option>
        <option value="complaint">❗ Complaint</option>
        <option value="feedback">💬 Feedback</option>
      </select>

      <div id="relatedOrderField" style="display:none;margin-bottom:10px;">
        <label style="display:block; margin-bottom:4px;text-align: left;">Related Order <span style="color:red;">*</span></label>
        <div id="ticketOrderSelect" style="position:relative;">
          <button type="button" role="combobox" aria-expanded="false" aria-autocomplete="none" id="ticketOrderSelectBtn" style="
            width:100%;min-height:42px;padding:6px 10px;border:1px solid #d1d5db;border-radius:10px;
            display:flex;justify-content:space-between;align-items:center;background:#fff;cursor:pointer;
          ">
            <span id="ticketOrderSelectLabel" style="color:#6b7280;">Select an order</span>
            <span style="color:#6b7280;font-size:16px;line-height:1;">▾</span>
          </button>
          <div id="ticketOrderSelectMenu" style="display:none;position:absolute;left:0;top:calc(100% + 6px);width:100%;max-height:180px;overflow:auto;background:#fff;border:1px solid #e5e7eb;border-radius:10px;box-shadow:0 10px 24px rgba(15,23,42,.12);z-index:20;padding:4px 0;"></div>
          <input type="hidden" id="ticketOrderInput" value="" />
        </div>
      </div>

      <label style="display:block; margin-bottom:4px;text-align: left;">Subject <span style="color:red;">*</span></label>
      <input id="ticketSubjectInput" style="width:100%;padding:8px;margin-bottom:10px;" />

      <label style="display:block; margin-bottom:4px;text-align: left;">Priority</label>
      <div id="prioritySelect" style="position:relative;margin-bottom:10px;">
        <button type="button" id="prioritySelectBtn" style="
          width:100%;min-height:42px;padding:6px 10px;border:1px solid #d1d5db;border-radius:10px;
          display:flex;justify-content:space-between;align-items:center;background:#fff;cursor:pointer;
        ">
          <span id="prioritySelectLabel" style="display:inline-flex;align-items:center;padding:2px 10px;border-radius:999px;font-size:15px;line-height:1;font-weight:600;${priorityBadgeStyles.Medium}">Medium</span>
          <span style="color:#6b7280;font-size:16px;line-height:1;">▾</span>
        </button>
        <div id="prioritySelectMenu" style="display:none;position:absolute;left:0;top:calc(100% + 6px);width:100%;background:#fff;border:1px solid #e5e7eb;border-radius:10px;box-shadow:0 10px 24px rgba(15,23,42,.12);z-index:20;padding:4px 0;">
          ${priorityOptionRow("Low")}
          ${priorityOptionRow("Medium")}
          ${priorityOptionRow("High")}
          ${priorityOptionRow("Critical")}
        </div>
        <input type="hidden" id="ticketPriorityValue" value="Medium" />
      </div>


      <label style="display:block; margin-bottom:4px;text-align: left;">Description <span style="color:red;">*</span></label>
      <textarea id="ticketDescriptionInput" style="width:100%;padding:8px;height:80px;"></textarea>

      <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:16px;">
        <button id="closeModal">Cancel</button>
        <button id="createTicketSubmitBtn" style="background:#2563eb;color:#fff;border:none;padding:8px 14px;border-radius:6px;">+ Create Ticket
        </button>
      </div>
    </div>
  </div>`;
}

function getSupportTicketOrderOptions() {
  const orderSources = [
    window.customerOrders,
    window.orders,
    window.ordersData,
    window.customer_orders,
  ];

  const rawOrders = orderSources.find((source) => Array.isArray(source)) || [];

  return rawOrders
    .map((order) => {
      const value = order?.orderId || order?.id || order?.order_id || "";
      const label = order?.orderNumber || order?.name || order?.order_name || value;
      if (!value || !label) return null;
      return { value: String(value), label: String(label) };
    })
    .filter(Boolean);
}

function attachTicketTypeOrderLogic() {
  const ticketTypeInput = document.getElementById("ticketTypeInput");
  const relatedOrderField = document.getElementById("relatedOrderField");

  if (!ticketTypeInput || !relatedOrderField) return;

  const ticketTypesRequiringOrder = new Set([
    "order enquiry",
    "return request",
    "refund request",
    "delivery issue",
  ]);

  const toggleRelatedOrderField = () => {
    const selectedTicketType = ticketTypeInput.value?.trim().toLowerCase();
    const shouldShow = ticketTypesRequiringOrder.has(selectedTicketType);
    relatedOrderField.style.display = shouldShow ? "block" : "none";

    if (!shouldShow) {
      const ticketOrderInput = document.getElementById("ticketOrderInput");
      const ticketOrderSelectLabel = document.getElementById("ticketOrderSelectLabel");
      if (ticketOrderInput) ticketOrderInput.value = "";
      if (ticketOrderSelectLabel) {
        ticketOrderSelectLabel.textContent = "Select an order";
        ticketOrderSelectLabel.style.color = "#6b7280";
      }
    }
  };

  ticketTypeInput.addEventListener("change", toggleRelatedOrderField);
  toggleRelatedOrderField();
}

function attachTicketOrderSelectLogic() {
  const selectWrapper = document.getElementById("ticketOrderSelect");
  const selectBtn = document.getElementById("ticketOrderSelectBtn");
  const menu = document.getElementById("ticketOrderSelectMenu");
  const label = document.getElementById("ticketOrderSelectLabel");
  const valueInput = document.getElementById("ticketOrderInput");

  if (!selectWrapper || !selectBtn || !menu || !label || !valueInput) return;

  const options = getSupportTicketOrderOptions();

  const setOrder = (value, selectedLabel) => {
    valueInput.value = value;
    label.textContent = selectedLabel || "Select an order";
    label.style.color = value ? "#111827" : "#6b7280";

    menu.querySelectorAll(".ticket-order-option-item").forEach((option) => {
      const isSelected = option.dataset.value === value;
      option.style.background = isSelected ? "#e5e7eb" : "transparent";
    });
  };

  menu.innerHTML = "";

  if (options.length === 0) {
    menu.innerHTML = '<div style="padding:8px 10px;color:#6b7280;font-size:14px;">No orders available</div>';
  } else {
    options.forEach((option) => {
      const optionBtn = document.createElement("button");
      optionBtn.type = "button";
      optionBtn.className = "ticket-order-option-item";
      optionBtn.dataset.value = option.value;
      optionBtn.dataset.label = option.label;
      optionBtn.style.cssText = "width:100%;display:flex;align-items:center;gap:8px;border:none;background:transparent;padding:8px 10px;cursor:pointer;text-align:left;";
      optionBtn.innerHTML = `<span>${escapeHtml(option.label)}</span>`;
      optionBtn.onclick = (event) => {
        event.preventDefault();
        setOrder(option.value, option.label);
        menu.style.display = "none";
        selectBtn.setAttribute("aria-expanded", "false");
      };
      menu.appendChild(optionBtn);
    });
  }

  selectBtn.onclick = (event) => {
    event.stopPropagation();
    const isOpen = menu.style.display === "block";
    menu.style.display = isOpen ? "none" : "block";
    selectBtn.setAttribute("aria-expanded", isOpen ? "false" : "true");
  };

  document.addEventListener("click", (event) => {
    if (!selectWrapper.contains(event.target)) {
      menu.style.display = "none";
      selectBtn.setAttribute("aria-expanded", "false");
    }
  });

  setOrder(valueInput.value || "", "");
}

function createSupportTicket() {
  const ticketType = document.getElementById("ticketTypeInput")?.value?.trim();
  const orderId = document.getElementById("ticketOrderInput")?.value?.trim();
  const subject = document.getElementById("ticketSubjectInput")?.value?.trim();
  const description = document.getElementById("ticketDescriptionInput")?.value?.trim();
  const priority = (document.getElementById("ticketPriorityValue")?.value || "Medium").toLowerCase();
  const ticketTypesRequiringOrder = new Set([
    "order enquiry",
    "return request",
    "refund request",
    "delivery issue",
  ]);

  if (!ticketType || !subject || !description) {
    createStatusToast("Missing Fields", "Ticket type, subject and description are required.", "error");
    return;
  }

  const { web_url, customer_id, email } = getSupportTicketRequestContext();
  const firstName = typeof profile_first_name !== "undefined" ? profile_first_name : "";
  const lastName = typeof profile_last_name !== "undefined" ? profile_last_name : "";
  const phone = typeof customer_phone !== "undefined" ? customer_phone : "";

  const payload = {
    web_url,
    customer_id,
    email,
    raised_by: {
      user_id: String(customer_id),
      user_type: "customer",
      email,
      name: `${firstName} ${lastName}`.trim(),
    },
    customer_details: {
      customer_id,
      customer_first_name: firstName,
      customer_last_name: lastName,
      customer_email: email || "",
      customer_phone: phone,
    },
    content: {
      subject,
      description,
      attachment: [],
    },
    additional_details: {
      department: ticketType,
      priority,
      order_id: orderId || "",
      tags: [],
    },
  };

  fetch(getSupportApiUrl(supportTicketApi.ticketsPath), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((response) =>
      response.json().then((data) => ({ ok: response.ok, data }))
    )
    .then(({ ok, data }) => {
      if (!ok || data?.status !== "success") {
        throw new Error(data?.message || "Failed to create ticket");
      }
    
      createStatusToast(
        "Ticket Created",
        "Your support ticket has been submitted.",
        "success"
      );
    
      document.getElementById("ticketModal").style.display = "none";
      fetchAndRenderSupportTickets();
    })
    
    .catch((error) => {
      console.error("❌ Ticket create failed:", error);
      createStatusToast("Couldn’t Create Ticket", error.message || "Please try again.", "error");
    });
}

function attachPrioritySelectLogic() {
  const selectWrapper = document.getElementById("prioritySelect");
  const selectBtn = document.getElementById("prioritySelectBtn");
  const menu = document.getElementById("prioritySelectMenu");
  const label = document.getElementById("prioritySelectLabel");
  const valueInput = document.getElementById("ticketPriorityValue");

  if (!selectWrapper || !selectBtn || !menu || !label || !valueInput) return;

  const priorityBadgeStyles = {
    Low: "background:#dcfce7;color:#166534;border:1px solid #bbf7d0;",
    Medium: "background:#fef3c7;color:#92400e;border:1px solid #fde68a;",
    High: "background:#ffedd5;color:#9a3412;border:1px solid #fed7aa;",
    Critical: "background:#fee2e2;color:#991b1b;border:1px solid #fecaca;",
  };

  const setPriority = (selectedValue) => {
    valueInput.value = selectedValue;
    label.textContent = selectedValue;
    label.style.cssText = `display:inline-flex;align-items:center;padding:2px 10px;border-radius:999px;font-size:15px;line-height:1;font-weight:600;${priorityBadgeStyles[selectedValue]}`;

    menu.querySelectorAll(".priority-option-item").forEach((option) => {
      const isSelected = option.dataset.value === selectedValue;
      option.style.background = isSelected ? "#e5e7eb" : "transparent";
      const check = option.querySelector(".priority-option-check");
      if (check) check.style.visibility = isSelected ? "visible" : "hidden";
    });
  };

  setPriority(valueInput.value || "Medium");

  selectBtn.onclick = (event) => {
    event.stopPropagation();
    const isOpen = menu.style.display === "block";
    menu.style.display = isOpen ? "none" : "block";
  };

  menu.querySelectorAll(".priority-option-item").forEach((option) => {
    option.onclick = (event) => {
      event.preventDefault();
      setPriority(option.dataset.value);
      menu.style.display = "none";
    };
  });

  document.addEventListener("click", (event) => {
    if (!selectWrapper.contains(event.target)) {
      menu.style.display = "none";
    }
  });
}



/* ---------- INTERACTION LOGIC ---------- */

function attachDropdownLogic() {
  document.querySelectorAll("[id$='DropdownBtn']").forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const menu = document.getElementById(btn.id.replace("Btn","Menu"));
      if (!menu) return;

      menu.style.display =
        menu.style.display === "block" ? "none" : "block";
    };
  });

  document.querySelectorAll(".dd-item").forEach(item => {
    item.onclick = (e) => {
      e.stopPropagation();

      const menu = item.parentElement;
      const btn = document.getElementById(menu.id.replace("Menu","Btn"));
      if (!btn) return;

      // ✅ Update button label
      btn.innerText = item.dataset.value + " ▼";

      menu.style.display = "none";

      // 🔥 Trigger filter manually
      if (typeof applySupportFilters === "function") {
        applySupportFilters();
      }
    };
  });

  document.addEventListener("click", () => {
    document.querySelectorAll("[id$='DropdownMenu']")
      .forEach(menu => menu.style.display="none");
  });
}


function attachModalLogic() {
  document.getElementById("openCreateTicket").onclick =
    () => document.getElementById("ticketModal").style.display="flex";

  document.getElementById("closeModal").onclick =
    () => document.getElementById("ticketModal").style.display="none";

  document.getElementById("closeModalX").onclick =
    () => document.getElementById("ticketModal").style.display="none";

  document.getElementById("createTicketSubmitBtn").onclick = createSupportTicket;

  document.getElementById("ticketModal").addEventListener("click", (event) => {
    if (event.target.id === "ticketModal") {
      event.target.style.display = "none";
    }
  });

  attachPrioritySelectLogic();
  attachTicketTypeOrderLogic();
  attachTicketOrderSelectLogic();

}





function toggleMenu() {
    console.log("menu toggled!!!!");
    const container1 = document.querySelector(".container-1");
    const container2 = document.querySelector(".container-2");
    if (container1.style.display === "block") {
        container1.style.display = "none";
        container2.style.display = "block";
    } else {
        container1.style.display = "block";
        container2.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) {
        toggleContainers();
    }
});

// async function loyaltyCardRender() {
//     const card = document.getElementById("xircls-loyalty-card");
//     if (!card) return;

//     card.classList.add("card-container");

//     const pointCardHeader = document.createElement("div");
//     pointCardHeader.classList.add("point-card-header");
//     card.appendChild(pointCardHeader);

//     const loyaltySection = document.createElement("div");
//     loyaltySection.classList.add("loyalty-section");

//     const loyaltyHeader = document.createElement("div");
//     loyaltyHeader.classList.add("loyalty-header");

//     const loyaltyLabel = document.createElement("span");
//     loyaltyLabel.classList.add("point-loyalty-label");
//     loyaltyLabel.textContent = "Loyalty Points:";

//     const points = document.createElement("span");
//     points.classList.add("points");
//     let loyaltyPoints = await LoyaltyPoints();
//     points.textContent = loyaltyPoints ? loyaltyPoints : "0";

//     loyaltyHeader.appendChild(loyaltyLabel);
//     loyaltyHeader.appendChild(points);
//     loyaltySection.appendChild(loyaltyHeader);

//     const input = document.createElement("input");
//     input.type = "text";
//     input.placeholder = "Enter points";
//     input.id = "loyalty-input";
//     input.classList.add("loyalty-input");
//     loyaltySection.appendChild(input);

//     const submitBtn = document.createElement("button");
//     submitBtn.textContent = "Submit";
//     submitBtn.classList.add("loyalty-submit-btn");
//     submitBtn.onclick = () => handleLoyaltySubmit();
//     loyaltySection.appendChild(submitBtn);

//     card.appendChild(loyaltySection);

//     // Attach discount code to checkout if one exists
//     attachDiscountToCheckoutBtn();
// }

// Handle submission of loyalty points
// async function handleLoyaltySubmit() {
//     const input = document.getElementById("loyalty-input");
//     const value = input.value.trim();

//     if (!value || isNaN(value)) {
//         console.log("Points input is empty or not a valid number.");
//         return;
//     }

//     const formData = new FormData();
//     formData.append("shop", Shopify.shop);
//     formData.append("app", "oh_my_customer");
//     formData.append("email", profile_email);
//     formData.append("points", parseInt(value, 10));

//     try {
//         const response = await fetch(
//             "https://omc.axentraos.co.in/loyalty/redeem_points/",
//             {
//                 method: "POST",
//                 body: formData,
//             }
//         );

//         const data = await response.json();
//         console.log("Response from server:", data);
//         location.href = `/discount/${data.discount_code}/?redirect=${location.pathname}`;
//         return;
//     } catch (error) {
//         console.error("❌ Error during POST request:", error);
//     }
// }
// MODIFIED: Function signature updated to accept rewardType and productId
async function handleLoyaltySubmit(points, discount, rewardType, productId) {
  console.log({ points, discount, rewardType, productId }, "handleLoyaltySubmit called with:");

  if (!points || isNaN(points) || parseInt(points, 10) < 0) {
    console.log("Points input is empty or not a valid number.");
    createStatusToast("Couldn’t Redeem Points", "Invalid point value provided.", "error");
    return;
  }

  const payload = {
    shop: Shopify.shop,
    app: "oh_my_customer",
    email: customerEmail,
    customer_id: customerId,
    points_to_redeem: parseInt(points, 10),
  };
  
  if (rewardType === "fixed_amount") {
    payload.type = "milestone_redemption";
    payload.reward_type = "fixed_amount";
  } else if (rewardType === "percentage") {
    payload.type = "milestone_redemption";
    payload.reward_type = "percentage";
    // Optionally add discount value
    // payload.discount_value = discount;
  } else if (rewardType === "free_product") {
    payload.type = "milestone_redemption";
    payload.reward_type = "free_product";
    payload.product_id = productId;
  } else {
    payload.type = "flexible_redemption"
  }
  

  try {
    const response = await fetch("https://loyalty.axentraos.co.in/api/v1/customer/redeem_points/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log("Response from server:", data, response);
    console.log("Response from server:", data.varient_id);
    if (!data.success) {
      createStatusToast("Couldn’t Redeem Points", data.message || "An unknown error occurred.", "error");
      return;
    }

    createStatusToast("Points Redeemed Successfully", "Your rewards are being applied.", "success");

    // Handle Free Product (add to cart) vs. Regular Discount
    
    if (data.varient_id) {
      console.log("Response from server11:", data.varient_id);
    
      const cartRes = await fetch("/cart.js");
      const cart = await cartRes.json();
    
      // Only check if the variant is already in the cart
      const isAlreadyInCart = cart.items.some(item => item.variant_id === data.varient_id);
    
      if (isAlreadyInCart) {
        // Product is already in cart, just apply discount
        location.href = `/discount/${data.code}/?redirect=${location.pathname}`;
        console.log("Redirected with discount, product already in cart.");
      } else {
        // Add free product to cart
        await fetch("/cart/add.js", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: [
              {
                id: data.varient_id.toString(),
                quantity: 1
              }
            ]
          }),
        });
    
        console.log("Free product added to cart.");
        // Redirect with discount after adding product
        location.href = `/discount/${data.code}/?redirect=${location.pathname}`;
      }
    } else {
      // No free product, just apply the discount code
      location.href = `/discount/${data.code}/?redirect=${location.pathname}`;
    }
    
  } catch (error) {
    createStatusToast("Couldn’t Redeem Points", "A network error occurred. Please try again.", "error");
    console.error("❌ Error during POST request:", error);
  }
}

async function renderLoyaltyProgram() {
    const loyalContainer = document.getElementById('loyaltyContainer');
    shop = Shopify.shop
    loyalContainer.innerHTML = "";
    const loyaltyData = await LoyaltyPoints();
    console.log(loyaltyData, "loyallllllllllll");

    // ------ Progress and Balance Div ------
    const progressDiv = document.createElement('div');
    progressDiv.id = "loyalty-progress-div";

    // --- Progress Container ---
    const progressContainer = document.createElement('div');
    progressContainer.id = 'progressContainer';

    const headerDiv = document.createElement('div');
    headerDiv.id = 'headerDiv';

    const progressTextSpan = document.createElement('span');
    progressTextSpan.id = 'progressTextSpan';
    progressTextSpan.textContent = 'Progress to Gold';

    const percentageSpan = document.createElement('span');
    percentageSpan.id = 'percentageSpan';
    percentageSpan.textContent = '50%';

    headerDiv.appendChild(progressTextSpan);
    headerDiv.appendChild(percentageSpan);

    const progressBarContainer = document.createElement('div');
    progressBarContainer.id = 'progressBarContainer';
    progressBarContainer.setAttribute('role', 'progressbar');
    progressBarContainer.setAttribute('aria-valuemin', '0');
    progressBarContainer.setAttribute('aria-valuemax', '100');
    progressBarContainer.setAttribute('data-state', 'indeterminate');
    progressBarContainer.setAttribute('data-max', '100');

    const progressBarFill = document.createElement('div');
    progressBarFill.id = 'progressBarFill';
    progressBarFill.setAttribute('data-state', 'indeterminate');
    progressBarFill.setAttribute('data-max', '100');

    progressBarContainer.appendChild(progressBarFill);

    const pointsTextParagraph = document.createElement('div');
    pointsTextParagraph.id = 'pointsTextParagraph';

    const needTextNode = document.createTextNode('Need ');

    const pointsSpan = document.createElement('span');
    pointsSpan.id = 'pointsSpan';
    pointsSpan.textContent = '250 more points';

    const toReachTextNode = document.createTextNode(' to reach Gold tier');

    pointsTextParagraph.appendChild(needTextNode);
    pointsTextParagraph.appendChild(pointsSpan);
    pointsTextParagraph.appendChild(toReachTextNode);

    progressContainer.appendChild(headerDiv);
    progressContainer.appendChild(progressBarContainer);
    progressContainer.appendChild(pointsTextParagraph);

    const redeemButtondiv = document.createElement('div');
    redeemButtondiv.id = 'Axentra_loyalCardss';
    // --- Balance Container ---
    const balanceContainer = document.createElement('div');
    balanceContainer.id = 'balanceContainer';

    const balanceSection = document.createElement('div');
    balanceSection.id = 'balanceSection';

    const balanceLabel = document.createElement('div');
    balanceLabel.id = 'balanceLabel';
    balanceLabel.textContent = 'Your Balance';

    const balanceAmountContainer = document.createElement('div');
    balanceAmountContainer.id = 'balanceAmountContainer';

    const amountSpan = document.createElement('span');
    amountSpan.id = 'amountSpan';
    amountSpan.textContent = loyaltyData.available_points || '0';

    const pointSpan = document.createElement('span');
    pointSpan.id = 'pointsSpan';
    pointSpan.textContent = `${ loyaltyCurrency ? loyaltyCurrency : "Points" }`;

    balanceAmountContainer.appendChild(amountSpan);
    balanceAmountContainer.appendChild(pointSpan);

    balanceSection.appendChild(balanceLabel);
    balanceSection.appendChild(balanceAmountContainer);

    const tierContainer = document.createElement('div');
    tierContainer.id = 'tierContainer';

    const tierIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    tierIcon.setAttribute('xmlns', "http://www.w3.org/2000/svg");
    tierIcon.setAttribute('width', "24");
    tierIcon.setAttribute('height', "24");
    tierIcon.setAttribute('viewBox', "0 0 24 24");
    tierIcon.setAttribute('fill', "none");
    tierIcon.setAttribute('stroke', "currentColor");
    tierIcon.setAttribute('stroke-width', "2");
    tierIcon.setAttribute('stroke-linecap', "round");
    tierIcon.setAttribute('stroke-linejoin', "round");
    tierIcon.id = 'tierIcon';

    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute('d', "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z");
    tierIcon.appendChild(path1);

    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute('d', "m9 12 2 2 4-4");
    tierIcon.appendChild(path2);

    const tierNameSpan = document.createElement('span');
    tierNameSpan.id = 'tierNameSpan';
    tierNameSpan.textContent = loyaltyData.customer_tier || 'Member';

    tierContainer.appendChild(tierIcon);
    tierContainer.appendChild(tierNameSpan);

    balanceContainer.appendChild(balanceSection);
    balanceContainer.appendChild(tierContainer);
    const redeemCustompoints = document.createElement('button')
    redeemCustompoints.onclick = function () {
        if(LoyaltySettings?.redeem_rule_json?.flexible_redemption?.is_enabled){
        customRedeemModal(loyaltyData.available_points);
        }
        else if(LoyaltySettings?.redeem_rule_json?.milestone_redemption?.is_enabled){
          customRedeemMilestoneModal(loyaltyData.available_points);
        }
    };
    const loyalCards = document.createElement('div');
    loyalCards.id = 'Axentra_loyalCards';

    loyalCards.innerHTML = `
  <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px; margin-bottom: 24px; font-family: var(--secondaryFontFamily)">
  
  <div style="flex: 1 1 calc(33.33% - 12px); background-color: var(--axentra-card-background-color); padding: 20px; border: 1px solid var(--axentra-card-border-color); border-radius: var(--axentra-card-border-radius); box-shadow: 0 1px 4px rgba(0,0,0,0.06); min-width: 200px;">
    <div style="font-size: 14px; color: var(--axentra-card-label-color); margin-bottom: 6px;">Available ${ loyaltyCurrency ? loyaltyCurrency : "Points" }</div>
    <div style="font-size: 16px; font-weight: 600; color: var(--axentra-card-text-color);">${loyaltyData.available_points || 0}</div>
  </div>
  
  <div style="flex: 1 1 calc(33.33% - 12px); background-color:  var(--axentra-card-background-color);; padding: 20px; border: 1px solid var(--axentra-card-border-color); border-radius: var(--axentra-card-border-radius); box-shadow: 0 1px 4px rgba(0,0,0,0.06); min-width: 200px;">
    <div style="font-size: 14px; color: var(--axentra-card-label-color); margin-bottom: 6px;">${ loyaltyCurrency ? loyaltyCurrency : "Points" } Redeemed</div>
    <div style="font-size: 16px; font-weight: 600; color: var(--axentra-card-text-color);">${loyaltyData.debited_points || 0}</div>
  </div>
  
 

</div>


    `

    redeemCustompoints.classList.add('xircls-custom-redeem-points-button')
    redeemCustompoints.innerHTML = `<svg class="xircls_svg" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg> Redeem ${ loyaltyCurrency ? loyaltyCurrency : "Points" }`


    if (window.innerWidth <= 768) {
      progressDiv.appendChild(loyalCards)
      progressDiv.appendChild(redeemButtondiv)
      // redeemButtondiv.appendChild(balanceContainer);
      redeemButtondiv.appendChild(redeemCustompoints);
   
    } else {
      progressDiv.appendChild(loyalCards)
      progressDiv.appendChild(redeemButtondiv)
      redeemButtondiv.appendChild(balanceContainer);
      redeemButtondiv.appendChild(redeemCustompoints);
     
    }


    // ------ Tab List Container ------
    const tabListContainer = document.createElement('div');
    tabListContainer.id = 'tabListContainer';

    const tabListWrapper = document.createElement('div');
    tabListWrapper.id = 'tabListWrapper';
    tabListWrapper.setAttribute('role', 'tablist');
    tabListWrapper.setAttribute('aria-orientation', 'horizontal');
    tabListWrapper.setAttribute('tabindex', '0');
    tabListWrapper.setAttribute('data-orientation', 'horizontal');

    const waysToEarnTab = document.createElement('button');
    waysToEarnTab.id = 'waysToEarnTab';
    waysToEarnTab.setAttribute('type', 'button');
    waysToEarnTab.setAttribute('role', 'tab');
    waysToEarnTab.setAttribute('aria-selected', 'true');
    waysToEarnTab.setAttribute('aria-controls', 'content-earn');
    waysToEarnTab.setAttribute('data-state', 'active');
    waysToEarnTab.textContent = 'Overview';

    const pointsHistoryTab = document.createElement('button');
    pointsHistoryTab.id = 'pointsHistoryTab';
    pointsHistoryTab.setAttribute('type', 'button');
    pointsHistoryTab.setAttribute('role', 'tab');
    pointsHistoryTab.setAttribute('aria-selected', 'false');
    pointsHistoryTab.setAttribute('aria-controls', 'content-history');
    pointsHistoryTab.setAttribute('data-state', 'inactive');
    pointsHistoryTab.textContent = `${ loyaltyCurrency ? loyaltyCurrency : "Points" } History`;

    const membershipTab = document.createElement('button');
    membershipTab.id = 'membershipTab';
    membershipTab.setAttribute('type', 'button');
    membershipTab.setAttribute('role', 'tab');
    membershipTab.setAttribute('aria-selected', 'false');
    membershipTab.setAttribute('aria-controls', 'content-member');
    membershipTab.setAttribute('data-state', 'inactive');
    membershipTab.textContent = 'Membership Tiers';

    const redeemPointsTab = document.createElement('button');
    redeemPointsTab.id = 'redeemPointsTab';
    redeemPointsTab.setAttribute('type', 'button');
    redeemPointsTab.setAttribute('role', 'tab');
    redeemPointsTab.setAttribute('aria-selected', 'false');
    redeemPointsTab.setAttribute('aria-controls', 'content-redeem');
    redeemPointsTab.setAttribute('data-state', 'inactive');
    redeemPointsTab.textContent = `Redeem ${ loyaltyCurrency ? loyaltyCurrency : "Points" }`;

    // ----- Tab Content -----
    const tabContentContainer = document.createElement('div');
    tabContentContainer.id = 'tabContentContainer';


    // Content rendering functions (defined externally)


    const renderContent = (contentRenderer) => {
        tabContentContainer.innerHTML = ""; // Clear previous content
        const contentElement = contentRenderer(loyaltyData); // Call the function to get the content
        tabContentContainer.appendChild(contentElement);
    };
    // Initial Content: Ways to Earn
    renderContent(renderWaysToEarnContent)
    // Add onclick events to tabs
    waysToEarnTab.onclick = () => {
        setActiveTab(waysToEarnTab, [pointsHistoryTab, redeemPointsTab, membershipTab]);
        renderContent(renderWaysToEarnContent);
    };

    pointsHistoryTab.onclick = () => {
        setActiveTab(pointsHistoryTab, [waysToEarnTab, redeemPointsTab, membershipTab]);
        renderContent(renderPointsHistoryContent);
    };
    membershipTab.onclick = () => {
        setActiveTab(membershipTab, [waysToEarnTab, pointsHistoryTab, redeemPointsTab]);
        renderContent(renderMembershipContent);
    };

    redeemPointsTab.onclick = () => {
        setActiveTab(redeemPointsTab, [waysToEarnTab, pointsHistoryTab, membershipTab]);
        renderContent(renderRedeemPointsContent);
    };
    const setActiveTab = (activeTab, inactiveTabs) => {
        activeTab.setAttribute('aria-selected', 'true');
        activeTab.setAttribute('data-state', 'active');


        inactiveTabs.forEach(tab => {
            tab.setAttribute('aria-selected', 'false');
            tab.setAttribute('data-state', 'inactive');

        });
    };
    const earntab = LoyaltySettings?.earn_rule_json ;
    if(earntab) {
      tabListWrapper.appendChild(waysToEarnTab);
    }
    

    tabListWrapper.appendChild(pointsHistoryTab);
    // tabListWrapper.appendChild(membershipTab);
    console.log(LoyaltySettings, "llloopp");
    tabListWrapper.appendChild(redeemPointsTab);


    tabListContainer.appendChild(tabListWrapper);

    const loyaltyWrapper = document.createElement('div')
    loyaltyWrapper.classList.add('xircls-loyalty-container-wrapper')
    loyaltyWrapper.appendChild(progressDiv);
    loyaltyWrapper.appendChild(tabListContainer);
    loyaltyWrapper.appendChild(tabContentContainer); // Append content container
    const faqSection = await renderFAQSection(shop);
  if (faqSection) {
     loyaltyWrapper.appendChild(faqSection);
  }
  
    // loyaltyWrapper.appendChild(faqSection);
    loyalContainer.appendChild(loyaltyWrapper);


    if (loyalContainer && loyalContainer.children.length >= 2) {
        const firstChild = loyalContainer.children[0];

        if (firstChild.classList.contains('xircls-loyalty-container-wrapper')) {
            loyalContainer.removeChild(firstChild);
        }
    }
}
async function renderFAQSection(shop) {
  try {
    // Fetch customization data
    const response = await fetch(
      `https://loyalty.axentraos.co.in/api/v1/rules/get_ui_customization/?shop=${shop}`
    );
    const data = await response.json();

    if (!data.success || !data.custom_json) {
      console.warn('Invalid response from API');
      return;
    }

    // Find the FAQ widget
    const faqWidget = data.custom_json.widgets.find(
      (w) => w.id === 'faqs_section' && w.enabled
    );

    if (!faqWidget) {
      console.warn('FAQ section not enabled in customization.');
      return;
    }

    // Parse FAQ configuration
    const faqConfig = JSON.parse(faqWidget.settings.faq_config || '{}');
    const faqList = faqConfig.faqs || [];
 if (faqList.length === 0) {
      console.warn('FAQ list is empty. Skipping rendering.');
      return;
    }
    const faqTitleText = faqConfig.title || faqWidget.settings.title || 'Frequently Asked Questions';
    const faqSubtitleText = faqConfig.subtitle || '';
    

    // --- Create FAQ section structure ---
    const sectionContainer = document.createElement('div');
   sectionContainer.style.fontFamily = 'var(--secondaryFontFamily)';
    sectionContainer.style.color = '#111827';
    sectionContainer.style.marginTop = '30px';

    // Title
    const faqTitle = document.createElement('div');
    faqTitle.textContent = faqTitleText;
    faqTitle.style.fontSize = '20px';
    faqTitle.style.fontWeight = '700';
    faqTitle.style.marginBottom = faqSubtitleText ? '8px' : '24px';
    faqTitle.style.color = '#1a1a1a';
    faqTitle.style.textAlign = 'left';


    sectionContainer.appendChild(faqTitle);

    // Subtitle (optional)
    if (faqSubtitleText) {
      const faqSubtitle = document.createElement('div');
      faqSubtitle.textContent = faqSubtitleText;
      faqSubtitle.style.fontSize = '14px';
      faqSubtitle.style.color = '#4b5563';
      faqSubtitle.style.marginBottom = '24px';
      faqSubtitle.style.lineHeight = '1.5';
      faqSubtitle.style.textAlign = 'left';
      sectionContainer.appendChild(faqSubtitle);
    }

    // Grid
    const faqGrid = document.createElement('div');
    faqGrid.style.display = 'grid';
    faqGrid.style.gap = '24px';
    faqGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    faqGrid.style.textAlign = 'left';
    faqGrid.className = 'faq-grid-responsive';

    // Responsive style
    const styleSheet = document.createElement('style');
    styleSheet.innerText = `
      @media (max-width: 900px) { 
        .faq-grid-responsive { grid-template-columns: 1fr !important; } 
      }
    `;
    document.head.appendChild(styleSheet);

    // Populate FAQ cards
    faqList.forEach((item) => {
      const itemCard = document.createElement('div');
      itemCard.style.backgroundColor = '#ffffff';
      itemCard.style.borderRadius = '8px';
      itemCard.style.padding = '16px';
      itemCard.style.border = '1px solid #e5e7eb';
      itemCard.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';

      const questionEl = document.createElement('div');
      questionEl.textContent = item.question;
      questionEl.style.fontWeight = '700';
      questionEl.style.fontSize = '16px';
      questionEl.style.marginBottom = '8px';
      questionEl.style.color = '#111827';

      const answerEl = document.createElement('div');
      answerEl.textContent = item.answer;
      answerEl.style.fontSize = '14px';
      answerEl.style.color = '#4b5563';
      answerEl.style.lineHeight = '1.6';

      itemCard.appendChild(questionEl);
      itemCard.appendChild(answerEl);
      faqGrid.appendChild(itemCard);
    });

    sectionContainer.appendChild(faqGrid);

    return sectionContainer;

  } catch (error) {
    console.error('Error rendering FAQ section:', error);
  }
}


function renderWaysToEarnContent(loyaltyData) {
  console.log(loyaltyData, "lloyalty in render function");

  const contentElement = document.createElement('div');
  contentElement.id = 'waysToEarnContent';

  const pointsDiv = document.createElement('div');
  pointsDiv.id = 'way-to-earn-container';

  const listContainer = document.createElement('div');
  listContainer.id = 'waysToEarnList';

  const title = document.createElement('div');
  title.id = 'waysToEarnTitle';
  // Use the globally set loyaltyCurrency
  title.textContent = `Ways to Earn ${loyaltyCurrency}`;

  const titlediv = document.createElement('div');
  // titlediv.appendChild(title);

  // --- START OF DYNAMIC DATA GENERATION ---

  const earnRules = LoyaltySettings?.earn_rule_json || {};
  const dynamicWaysToEarnData = [];

  // 1. Make a Purchase
if (earnRules.points_per_doller && parseFloat(earnRules.points_per_doller) > 0) {
    dynamicWaysToEarnData.push({
        title: "Make a Purchase",
        description: `Earn ${earnRules.points_per_doller} ${loyaltyCurrency} for every ₹1 spent`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 6h15l-1.5 9h-13z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="21" r="1"/><circle cx="18" cy="21" r="1"/></svg>`,
    });
}

  // 2. Account Signup
  if (earnRules.account_signup && parseFloat(earnRules.account_signup) > 0) {
      dynamicWaysToEarnData.push({
          title: "Create an Account",
          description: `Earn ${earnRules.account_signup} ${loyaltyCurrency} for signing up`,
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
      });
  }

  // 3. Birthday Bonus
  if (earnRules.birthday_bonus && parseFloat(earnRules.birthday_bonus) > 0) {
      dynamicWaysToEarnData.push({
          title: "Birthday Bonus",
          description: `Get ${earnRules.birthday_bonus} ${loyaltyCurrency} as a gift on your birthday`,
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" id="Layer_1" data-name="Layer 1"><path d="M7.38,30.74H24.62c.41,0,.75-.34,.75-.75V14.59c0-.41-.34-.75-.75-.75h-2.66v-5.38c0-.2-.08-.39-.21-.52,.43-.65,.67-1.43,.67-2.23,0-1.35-.67-2.6-1.78-3.37-.26-.17-.59-.17-.85,0-1.12,.76-1.78,2.02-1.78,3.37,0,.8,.24,1.57,.67,2.23-.13,.14-.21,.32-.21,.52v5.38h-5.52v-5.38c0-.2-.08-.39-.21-.52,.43-.65,.67-1.43,.67-2.23,0-1.35-.67-2.6-1.78-3.37-.26-.17-.59-.17-.85,0-1.12,.76-1.78,2.02-1.78,3.37,0,.8,.24,1.57,.67,2.23-.13,.14-.21,.32-.21,.52v5.38h-2.07c-.41,0-.75,.34-.75,.75v15.4c0,.41,.34,.75,.75,.75Zm16.49-5.27H8.13v-6.83c.14,.1,.27,.23,.44,.39,.46,.46,1.08,1.08,2.25,1.08s1.8-.63,2.25-1.08c.43-.43,.66-.64,1.19-.64s.76,.21,1.19,.64c.46,.46,1.08,1.08,2.25,1.08s1.8-.63,2.26-1.08c.43-.43,.67-.64,1.19-.64s.76,.21,1.2,.64c.35,.35,.79,.79,1.51,.98v5.46Zm0,3.77H8.13v-2.27h15.74v2.27ZM20.21,3.94c.45,.48,.71,1.11,.71,1.77s-.26,1.29-.71,1.77c-.45-.48-.71-1.11-.71-1.77s.26-1.29,.71-1.77Zm-.25,5.27h.5v4.63h-.5v-4.63ZM11.2,3.94c.45,.48,.71,1.11,.71,1.77s-.26,1.29-.71,1.77c-.45-.48-.71-1.11-.71-1.77s.26-1.29,.71-1.77Zm-.25,5.27h.5v4.63h-.5v-4.63Zm-.75,6.13h13.67v3.02c-.14-.1-.28-.23-.45-.4-.46-.46-1.08-1.08-2.26-1.08s-1.8,.63-2.26,1.08c-.43,.43-.67,.64-1.2,.64s-.76-.21-1.19-.64c-.46-.46-1.08-1.08-2.25-1.08s-1.8,.63-2.25,1.08c-.43,.43-.67,.64-1.19,.64s-.76-.21-1.19-.64c-.35-.35-.79-.79-1.5-.98v-1.64h2.07Z"/></svg>`,
      });
  }

  // 4. Instagram Follow
  if (earnRules.instagram_follow && parseFloat(earnRules.instagram_follow) > 0 && earnRules.instagram_url) {
      dynamicWaysToEarnData.push({
          title: "Follow on Instagram",
          description: `Earn ${earnRules.instagram_follow} ${loyaltyCurrency} for following us`,
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
      });
  }

  // 5. Facebook Follow
  if (earnRules.facebook_follow && parseFloat(earnRules.facebook_follow) > 0 && earnRules.facebook_url) {
      dynamicWaysToEarnData.push({
          title: "Follow on Facebook",
          description: `Earn ${earnRules.facebook_follow} ${loyaltyCurrency} for following us`,
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,
      });
  }

  // --- MODIFICATION START: Check if any data was generated ---
  if (LoyaltySettings?.redeem_rule_json?.milestone_redemption?.is_enabled) {
    pointsDiv.appendChild(listContainer);
    listContainer.appendChild(titlediv)
 
  }
if (dynamicWaysToEarnData.length > 0) {
   const flexibleRules = LoyaltySettings.redeem_rule_json.flexible_redemption;

    const minPointsToRedeem = parseInt(flexibleRules.minimum_points_to_redeem, 10);
    const minOrderValue = parseFloat(flexibleRules.minimum_order_value);
    const pointsPerDollar = parseFloat(flexibleRules.points_to_doller);
    const maxRedemptionPercentage = parseFloat(flexibleRules.maximum_points_per_order, 10)
    const shopCurrencyCode = Shopify.currency.active; // e.g., "INR"
    const formatter = new Intl.NumberFormat('en', {
      style: 'currency',
      currency: shopCurrencyCode
    });

    const symbol = formatter.formatToParts(1).find(p => p.type === 'currency').value;
    const twoColumnWrapper = document.createElement('div');
    twoColumnWrapper.classList.add('ways-to-earn-grid');

    // Column 1: dynamic cards
    const col1 = document.createElement('div');
    col1.classList.add('ways-to-earn-col');

    // Title for Column 1
    const col1Title = document.createElement('div');
    col1Title.id = 'waysToEarnTitle';
    col1Title.textContent = `Ways to Earn ${loyaltyCurrency}`;
    col1.appendChild(col1Title);

dynamicWaysToEarnData.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('ways-to-earn-card');
    card.innerHTML = `
        <div class="ways-to-earn-icon">${item.icon}</div>
        <div class="ways-to-earn-text">
            <div class="ways-to-earn-card-title">${item.title}</div>
            <div class="ways-to-earn-card-description">${item.description}</div>
        </div>
    `;

    // Attach event handlers based on the item type
    if (item.title === "Follow on Instagram") {
        card.style.cursor = "pointer";
        card.addEventListener("click", Instaclicked);
    } else if (item.title === "Follow on Facebook") {
        card.style.cursor = "pointer";
        card.addEventListener("click", Facebookclicked);
    }

    col1.appendChild(card);
});


    // Column 2: static flexible redemption card
    const col2 = document.createElement('div');
    col2.classList.add('ways-to-earn-col');

    // Title for Column 2
    const col2Title = document.createElement('div');
    col2Title.id = 'waysToEarnTitle';
    col2Title.textContent = `Ways to Redeem ${loyaltyCurrency}`;
    col2.appendChild(col2Title);

    const instagramCard = document.createElement('div');
    instagramCard.classList.add('ways-to-earn-card');
    instagramCard.innerHTML = `
        <div class="ways-to-earn-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
        </div>
        <div class="ways-to-earn-text">
            <div class="ways-to-earn-card-title">Flexible Checkout Redemption</div>
            <div class="ways-to-earn-card-description">Use points like cash at checkout - ${pointsPerDollar} ${loyaltyCurrency} = ${symbol}1</div>
        </div>
    `;
    if (LoyaltySettings?.redeem_rule_json?.flexible_redemption?.is_enabled) {
    col2.appendChild(instagramCard);
    }
    twoColumnWrapper.appendChild(col1);
     if (LoyaltySettings?.redeem_rule_json?.flexible_redemption?.is_enabled) {
    twoColumnWrapper.appendChild(col2);
       }
    listContainer.appendChild(twoColumnWrapper);
}

 else {
      // If no earning rules are set, show a fallback message
      const fallbackMessage = document.createElement('div');
      fallbackMessage.className = 'ways-to-earn-fallback'; // Added a class for styling
      fallbackMessage.textContent = 'No ways to earn points are available at the moment.';
      fallbackMessage.style.padding = '20px 10px'; // Basic inline style for visibility
      fallbackMessage.style.textAlign = 'center';
      listContainer.appendChild(createEmptyItemsCard("WaystoEarn"));
  }

  // --- MODIFICATION END ---
  
  // --- END OF DYNAMIC DATA GENERATION ---


 
  // --- Quick Redemption Section (Your existing logic) ---
  const quickRedemptionSection = document.createElement('div');
  quickRedemptionSection.id = 'quickRedemptionSection';
 
  // Only show this entire section if milestone redemption is enabled
  if (LoyaltySettings?.redeem_rule_json?.milestone_redemption?.is_enabled) {
      const redeemTitle = document.createElement('div');
      redeemTitle.id = 'quickRedemptionTitle';
      redeemTitle.textContent = 'Quick Redemption';
      quickRedemptionSection.appendChild(redeemTitle);

      const redeemGridContainer = document.createElement('div');
      redeemGridContainer.id = 'quickRedemptionGrid';
      redeemGridContainer.classList.add('redeem-points-grid');
      
      const mileStonesDataRaw = LoyaltySettings?.redeem_rule_json?.milestone_redemption?.milestones;
      const mileStonesData = Array.isArray(mileStonesDataRaw) ? mileStonesDataRaw : [];

      mileStonesData.slice(0, 4).forEach(item => {
          const card = document.createElement('div');
          const isDisabled = loyaltyData.available_points < item.points_required;
          card.classList.add('redeem-points-card');
          card.innerHTML = `
                  <div class="redeem-points-header">
                      <div class="redeem-points-card-title"><div style="font-size: 20px; font-weight: bold;">${getHeading(item.reward_type, item.reward_value)}</div></div>
                      <div class="redeem-points-card-cost">${item.points_required} ${loyaltyCurrency}</div>
                  </div>
                  <div style="text-align: left; margin-bottom: 16px;">${item.description}</div>
                  <button class="redeem-points-redeem-button" ${isDisabled ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''} data-redeem-title="${item.description}" data-redeem-points="${item.points_required}" data-total-points="${loyaltyData.available_points}" data-reward-value="${item.reward_value}" data-reward-type="${item.reward_type}">Redeem Now</button>
              `;
          redeemGridContainer.appendChild(card);
      });
      quickRedemptionSection.appendChild(redeemGridContainer);
      pointsDiv.appendChild(quickRedemptionSection);
      redeemGridContainer.addEventListener('click', handleLoyaltyRedeemClick);
  } else {
    pointsDiv.appendChild(titlediv)
    pointsDiv.appendChild(listContainer);
    pointsDiv.classList.add("way-to-earn-container");
    listContainer.classList.add('waysToEarnList1');
  }
 
  contentElement.appendChild(pointsDiv);
  return contentElement;
}
// function renderPointsHistoryContent(loyaltyData) {
//     const contentElement = document.createElement('div');
//     contentElement.id = 'pointsHistoryContent';
//     contentElement.setAttribute('data-state', 'active');
//     contentElement.setAttribute('data-orientation', 'horizontal');
//     contentElement.setAttribute('role', 'tabpanel');
//     contentElement.setAttribute('tabindex', '0');

//     const title = document.createElement('div');
//     title.id = 'pointsHistoryTitle';
//     title.textContent = 'Points Activity';
//     contentElement.appendChild(title);

//     const tableContainer = document.createElement('div');
//     tableContainer.id = 'pointsHistoryTableContainer';

//     const table = document.createElement('table');
//     table.id = 'pointsHistoryTable';

//     // Create Table Header
//     const thead = document.createElement('thead');
//     const headerRow = document.createElement('tr');
//     const headers = ['Date', 'Activity', 'Points'];

//     headers.forEach(headerText => {
//         const th = document.createElement('th');
//         th.textContent = headerText;
//         headerRow.appendChild(th);
//     });
//     thead.appendChild(headerRow);
//     table.appendChild(thead);

//     // Create Table Body
//     console.log(allLoyaltyPointsHistory, "historyyy")
//     const tbody = document.createElement('tbody');
//     allLoyaltyPointsHistory.forEach(item => {
//         const row = document.createElement('tr');
//         row.classList.add('points-history-row');

//         const dateCell = document.createElement('td');
//         dateCell.textContent = item.created_at;
//         row.appendChild(dateCell);

//         const activityCell = document.createElement('td');
//         activityCell.textContent = item.description;
//         row.appendChild(activityCell);

//         const pointsCell = document.createElement('td');
//         pointsCell.textContent = item.points;
//         row.appendChild(pointsCell);

//         tbody.appendChild(row);
//     });
//     table.appendChild(tbody);

//     // Add Table to the Container
//     tableContainer.appendChild(table);
//     contentElement.appendChild(tableContainer);

//     // View full history link
//     const viewFullHistoryDiv = document.createElement('div');
//     viewFullHistoryDiv.id = 'viewFullHistoryDiv';
//     const viewFullHistoryLink = document.createElement('a');
//     viewFullHistoryLink.id = 'viewFullHistoryLink';
//     viewFullHistoryLink.href = '#';
//     viewFullHistoryLink.textContent = 'View full history';

//     viewFullHistoryDiv.appendChild(viewFullHistoryLink);
//     contentElement.appendChild(viewFullHistoryDiv);

//     return contentElement;
// }
function renderPointsHistoryContent(loyaltyData) {
    const contentElement = document.createElement('div');
    contentElement.id = 'pointsHistoryContent';
    contentElement.setAttribute('data-state', 'active');
    contentElement.setAttribute('data-orientation', 'horizontal');
    contentElement.setAttribute('role', 'tabpanel');
    contentElement.setAttribute('tabindex', '0');

    const title = document.createElement('div');
    title.id = 'pointsHistoryTitle';
    title.textContent = `${ loyaltyCurrency ? loyaltyCurrency : "Points" } Activity`;
    contentElement.appendChild(title);

    // View full history link - moving up before the table
    // const viewFullHistoryDiv = document.createElement('div');
    // viewFullHistoryDiv.id = 'viewFullHistoryDiv';
    // const viewFullHistoryLink = document.createElement('a');
    // viewFullHistoryLink.id = 'viewFullHistoryLink';
    // viewFullHistoryLink.href = '#';
    // viewFullHistoryLink.textContent = 'View full history';

    // viewFullHistoryDiv.appendChild(viewFullHistoryLink);
    // contentElement.appendChild(viewFullHistoryDiv);
    

    const tableContainer = document.createElement('div');
    tableContainer.id = 'pointsHistoryTableContainer';
    contentElement.appendChild(tableContainer);
    console.log(allLoyaltyPointsHistory, "allHissssss")
    // Create table with pagination
    if (allLoyaltyPointsHistory.length > 0) {
        const paginatedTable = createPointsHistoryTableWithPagination(allLoyaltyPointsHistory, 'pointsHistory', 5, tableContainer);
    }
    else {
        tableContainer.appendChild(createEmptyItemsCard('points'))
    }
    // contentElement.appendChild(paginatedTable); //No need to append, as createPointsHistoryTableWithPagination handles rendering
    return contentElement;
}
function createPointsHistoryTableWithPagination(data, tableType, itemsPerPage = 5, tableContainer) {
    let currentPage = 1;
    let filteredData = data; // Initially, filtered data is all the data

    // Create a container for the table header and search box (if needed, can remove if not needed)
    //const headerContainer = document.createElement("div");  // Remove header container if not needed for search
    //headerContainer.className = "omc-table-header";

    // Search (Remove all this section if you don't want search)
    //const searchInputDiv = document.createElement("div");
    //searchInputDiv.className = "omc-search-box";
    //const searchInput = document.createElement("input");
    //searchInput.type = "text";
    //searchInput.placeholder = "Search activity...";
    //searchInput.className = "omc-search-input";

    //const searchIcon = document.createElement("i");
    //searchIcon.className = "fa fa-search omc-search-icon";

    //searchInput.addEventListener("keyup", function (event) {
    //    const searchTerm = event.target.value.toLowerCase();

    //    filteredData = data.filter((historyItem) => {
    //        const description = historyItem.description.toLowerCase();
    //        return description.includes(searchTerm);
    //    });

    //    currentPage = 1;
    //    renderPage(currentPage);
    //});

    //searchInputDiv.appendChild(searchInput);
    //searchInputDiv.appendChild(searchIcon);
    //headerContainer.appendChild(searchInputDiv);

    // Create a container for the table only
    const contentWrapper = document.createElement("div");
    contentWrapper.className = "content-wrapper";
    contentWrapper.classList.add("table-scrollable-wrapper");
    contentWrapper.classList.add('points-table-content-wrapper')

    // Create pagination controls - initialize outside the render
    const paginationDiv = document.createElement("div");
    paginationDiv.className = "omc-pagination-controls";

    const renderPage = (page) => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const currentPageData = filteredData.slice(start, end);
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);

        // Clear existing table and controls
        contentWrapper.innerHTML = "";
        paginationDiv.innerHTML = "";
        tableContainer.innerHTML = ""; // Clear the main container instead

        // Generate the table for the current page
        const table = createPointsHistoryTable(currentPageData, tableType);
        table.id = "pointsHistoryTable"; //added to add responsiveness  (was my-orders-table-id, which is incorrect)
        contentWrapper.appendChild(table);

        // Create pagination controls again, to display current state
        const prevButton = document.createElement("button");
        prevButton.innerText = "Previous";
        prevButton.disabled = page === 1;
        prevButton.className = "omc-pagination-button";

        prevButton.onclick = () => {
            currentPage--;
            renderPage(currentPage);
        };

        const nextButton = document.createElement("button");
        nextButton.innerText = "Next";
        nextButton.disabled = page === totalPages;
        nextButton.className = "omc-pagination-button";

        nextButton.onclick = () => {
            currentPage++;
            renderPage(currentPage);
        };

        const buttonDiv = document.createElement("div");
        const pageInfo = document.createElement("span");
        pageInfo.innerText = `  Showing ${page} of ${totalPages} results `;
        pageInfo.classList.add("pagination-text-table");

        // Assemble pagination controls section
        paginationDiv.appendChild(pageInfo); // Moved to the left
        buttonDiv.appendChild(prevButton);
        buttonDiv.appendChild(nextButton);
        paginationDiv.appendChild(buttonDiv);

        //Append the table and pagination to the tableContainer
        tableContainer.appendChild(contentWrapper); // Table goes in this section
        tableContainer.appendChild(paginationDiv); // Controls, after
    };

    // Initial render
    renderPage(currentPage);
    //tableContainer.style.textAlign = "center"; //this is no longer needed.
    //tableContainer.appendChild(headerContainer); // Remove if not needed for search
    //const headerHr = document.createElement("hr"); //remove if not needed.
    //headerHr.style.margin = "0px"; //remove if not needed.
    //headerHr.style.backgroundColor = "#eeeeee"; //remove if not needed
    //tableContainer.appendChild(headerHr); //remove if not needed.
    return tableContainer; // Now the original container is returned. - this is used to avoid appending again in the call function.
}
function createPointsHistoryTable(data) {
  const table = document.createElement('table');
  table.id = 'pointsHistoryTable';

  // Create Table Header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headers = ['Date', 'Activity', `${loyaltyCurrency ? loyaltyCurrency : "points"}`];

  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create Table Body
  const tbody = document.createElement('tbody');
  data.forEach(item => {
    const row = document.createElement('tr');
    row.classList.add('points-history-row');

    const dateCell = document.createElement('td');
    dateCell.textContent = item.created_at;
    row.appendChild(dateCell);

    const activityCell = document.createElement('td');
    activityCell.textContent = item.description;
    row.appendChild(activityCell);

    const pointsCell = document.createElement('td');
     let points;
    switch (item.action) {
      case 'CREDIT':
        points = item.earned;
        break;
      case 'DEBIT':
        points = `-${item.redeemed}`;
        break;
      case 'REVERT':
        points = `-${item.revert}`;
        break;
      case 'BLOCKED':
        points = `${item.blocked}`;
        break;
      default:
        points = 0;
    }

    pointsCell.textContent = points;
    row.appendChild(pointsCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  return table;
}

function renderRedeemPointsContent(loyaltyData) {
  // --- 1. Extract Settings and Define Rules ---
  const totalPoints = loyaltyData?.available_points || 0;
  const loyaltyCurrency = LoyaltySettings?.basic_config?.points_terminology || "Points";

  // Milestone Redemption Settings
  const milestoneSettings = LoyaltySettings?.redeem_rule_json?.milestone_redemption || {};
  const isMilestoneEnabled = milestoneSettings.is_enabled;
  const milestoneData = milestoneSettings.milestones || [];
  const hasMilestones = Array.isArray(milestoneData) && milestoneData.length > 0;

  // Flexible Redemption Settings
  const flexibleSettings = LoyaltySettings?.redeem_rule_json?.flexible_redemption || {};
  const isFlexibleEnabled = flexibleSettings.is_enabled;
  const minPointsToRedeem = parseInt(flexibleSettings.minimum_points_to_redeem, 10) || 1;
  const maxPointsPercentage = parseInt(flexibleSettings.maximum_points_per_order, 10) || 100;

  // Calculate the actual maximum points the user can redeem
  const maxPointsFromRule = Math.floor(totalPoints * (maxPointsPercentage / 100));
  const effectiveMaxPoints = Math.min(totalPoints, maxPointsFromRule);

  const canUseFlexibleRedeem = totalPoints >= minPointsToRedeem;

  // --- 2. Create Main Content Container ---
  const contentElement = document.createElement('div');
  contentElement.id = 'redeemPointsContent';
  contentElement.setAttribute('data-state', 'active');
  contentElement.setAttribute('role', 'tabpanel');

  const title = document.createElement('div');
  title.id = 'redeemPointsTitle';
  title.textContent = `Redeem Your ${loyaltyCurrency}`;
  contentElement.appendChild(title);

  // --- 3. Render Milestone Redemption Section (if enabled) ---
  if (isMilestoneEnabled && hasMilestones) {
      const gridContainer = document.createElement('div');
      gridContainer.id = 'redeemPointsGrid';
      gridContainer.classList.add('redeem-options-grid');

      milestoneData.forEach(item => {
          const card = document.createElement('div');
          const isDisabled = totalPoints < item.points_required;
          card.classList.add('redeem-option-card');

          card.innerHTML = `
              <div class="redeem-option-header">
                  <div class="redeem-option-card-title"><div style="font-size: 20px; font-weight: bold;">${getHeading(item.reward_type)}</div></div>
                  <div class="redeem-option-card-cost">${item.points_required}</div>
              </div>
              <div style="text-align: left; margin-bottom: 16px;">${item.description}</div>
              <button class="redeem-points-redeem-button"  
                      ${isDisabled ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''} 
                      data-redeem-title="${item.description}" 
                      data-redeem-points="${item.points_required}" 
                      data-total-points="${totalPoints}" 
                      data-reward-value="${item.reward_value}"  
                      data-reward-type="${item.reward_type}">Redeem</button>
          `;
          gridContainer.appendChild(card);
      });
      gridContainer.addEventListener('click', handleLoyaltyRedeemClick);
      contentElement.appendChild(gridContainer);
  }

  // --- 4. Render Flexible Redemption Section (if enabled) ---
if (isFlexibleEnabled) {
    // --- Data Extraction & Reconciliation ---
    const shopCurrencyCode = Shopify.currency.active; // e.g., "INR"

    const formatter = new Intl.NumberFormat('en', {
      style: 'currency',
      currency: shopCurrencyCode
    });

    const symbol = formatter.formatToParts(1).find(p => p.type === 'currency').value;

    console.log(symbol, "currennnn"); // "₹"

    const flexibleRules = LoyaltySettings.redeem_rule_json.flexible_redemption;

    const minPointsToRedeem = parseInt(flexibleRules.minimum_points_to_redeem, 10);
    const minOrderValue = parseFloat(flexibleRules.minimum_order_value);
    const pointsPerDollar = parseFloat(flexibleRules.points_to_doller);
    const maxRedemptionPercentage = parseFloat(flexibleRules.maximum_points_per_order, 10);

    // --- Example Calculation ---
    const exampleCustomerPoints = 20;  // Example: customer has 20 points
    const exampleCartValue = 100;      // Example: cart value ₹100

    // Conversion: points → currency
    const examplePointsValue = (exampleCustomerPoints / pointsPerDollar).toFixed(2);

    // Max redeemable in currency based on %
    const maxRedeemableValue = ((exampleCartValue * maxRedemptionPercentage) / 100).toFixed(2);
let redeemablePoints = Math.floor((exampleCustomerPoints * maxRedemptionPercentage) / 100);

    // Cap at customer’s available points
    if (redeemablePoints > exampleCustomerPoints) {
        redeemablePoints = exampleCustomerPoints;
    }

// ✅ Correct: capped by percentage of customer's points


// Convert those points into currency
const actualRedeemableValue = (redeemablePoints / pointsPerDollar).toFixed(2);

// Final cart after redemption
const finalCartValue = (exampleCartValue - actualRedeemableValue).toFixed(2);


    // --- UI ---
    const rewardsDisplayContainer = document.createElement('div');

    const expirySectionHTML = `
        <div style="font-family: var(--font-family); background-color: #FFFBEB; border: 1px solid #FEEFC3; border-radius: 8px; padding: 16px; display: flex; align-items: flex-start; gap: 12px; margin-bottom: 20px; font-family: sans-serif; color: #713F12 !important;">
            <div style="font-family: var(--font-family); flex-shrink: 0; margin-top: 2px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
            </div>
            <div>
                <div style="font-family: var(--font-family); margin: 0 0 4px 0; font-size: 16px; font-weight: 600; color:#713F12 !important; text-align:left">Use Your Points Soon!</div>
                <div style="font-family: var(--font-family); margin: 0;text-align: left; font-size: 14px; line-height: 1.5;">You have <strong>${totalPoints} ${ loyaltyCurrency ? loyaltyCurrency : "Points" }</strong> expiring soon. Redeem them before they expire!</div>
            </div>
        </div>
    `;

   const flexibleSectionHTML = `
    <div style=" text-align:left;  padding: 24px; font-family: var(--font-family); color: #333; ">
        <!-- Header -->
        <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px; font-family: var(--font-family);">
            <div style="font-family: var(--font-family); background-color: #dfdfdfff; border-radius: 8px; padding: 10px; display: flex; justify-content: center; align-items: center; flex-shrink: 0;">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
            </div>
            <div>
                <div style="font-family: var(--font-family); margin: 0 0 4px 0; font-size: 16px; font-weight: 600; color: #111827;">Flexible Checkout Redemption</div>
                <div style=" font-family: var(--font-family); margin: 0; font-size: 13px; color: #4B5563;">Use your ${loyaltyCurrency} like cash during checkout! Convert ${loyaltyCurrency} to ${symbol} at any time when placing an order.</div>
            </div>
        </div>

        <!-- Details Grid -->
        <div style=" font-family: var(--font-family); display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin-bottom: 16px;">
            <!-- Conversion Rate Card -->
            <div style=" font-family: var(--font-family); background-color: #fff; border-radius: 8px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <div style=" font-family: var(--font-family); margin: 0 0 10px 0; font-size: 13px; font-weight: 600; color: #111827;">Conversion Rate</div>
                <div style=" font-family: var(--font-family); font-size: 20px; font-weight: bold; color: #3B82F6; margin-bottom: 6px;">
                    ${pointsPerDollar} points = ${symbol}1.00
                </div>
                <div style="margin: 0; font-size: 12px; color: #6B7280;">Your ${totalPoints} ${loyaltyCurrency ? loyaltyCurrency : "Points"} = ${symbol}${(totalPoints / pointsPerDollar).toFixed(2)} value</div>
            </div>

            <!-- Requirements Card -->
            <div style=" font-family: var(--font-family); background-color: #fff; border-radius: 8px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <div style=" font-family: var(--font-family); margin: 0 0 10px 0; font-size: 13px; font-weight: 600; color: #111827;">Requirements</div>
                <ul style=" font-family: var(--font-family); margin: 0; padding-left: 20px; font-size: 13px; color: #4B5563; line-height: 1.6;">
                    <li>Minimum: ${minPointsToRedeem} points to redeem</li>
                    <li>Min order value: ${symbol}${minOrderValue}</li>
                    <li>Max ${maxRedemptionPercentage}% of ${loyaltyCurrency ? loyaltyCurrency : "Points"}</li>
                </ul>
            </div>
        </div>

        <!-- How it works Card -->
        <div style="font-family: var(--font-family); background-color: #fff; border-radius: 8px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 20px;">
            <div style=" font-family: var(--font-family); margin: 0 0 10px 0; font-size: 13px; font-weight: 600; color: #000000;">How it works:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: #313131; line-height: 1.6; font-weight: 500;">
                <li>You have ${exampleCustomerPoints} ${loyaltyCurrency || "Points"} = ${symbol}${examplePointsValue} value</li>
                <li>
                    On a ${symbol}${exampleCartValue} order, can use max ${maxRedemptionPercentage}% of ${loyaltyCurrency || "Points"} 
                    = ${redeemablePoints} ${loyaltyCurrency || "Points"} (${symbol}${actualRedeemableValue})
                </li>
                <li>Final order total: ${symbol}${finalCartValue}</li>
            </ul>
        </div>

        <div style="font-family: var(--font-family); display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 500; color: #4B5563;">
            <span style="color: #FBBF24;">✨</span>
            <span>Available automatically at checkout - no need to pre-select rewards!</span>
        </div>
    </div>
`;


    // --- Combine and Append ---
    rewardsDisplayContainer.innerHTML = expirySectionHTML + flexibleSectionHTML;
    contentElement.appendChild(rewardsDisplayContainer);
}



  // --- 5. Render "No Methods Available" Message if applicable ---
  if (! (isMilestoneEnabled && hasMilestones) && !isFlexibleEnabled) {
      const noDataMsg = document.createElement('div');
      noDataMsg.className = 'no-redemption-methods';
      noDataMsg.style.cssText = "padding: 20px; text-align: center; color: gray; font-style: italic;";
      noDataMsg.textContent = "No redemption methods are currently available.";
      contentElement.appendChild(createEmptyItemsCard("transaction"));
  }
  
  return contentElement;
}
function renderMembershipContent(loyaltyData) {
  console.log(loyaltyData, "loooooyaaal")
    const contentElement = document.createElement('div');
    contentElement.id = 'membershipContent';
    contentElement.setAttribute('data-state', 'active');
    contentElement.setAttribute('data-orientation', 'horizontal');
    contentElement.setAttribute('role', 'tabpanel');
    contentElement.setAttribute('tabindex', '0');

    const title = document.createElement('div');
    title.id = 'membershipTitle';
    title.textContent = 'Membership Tiers & Benefits';
    contentElement.appendChild(title);

    const gridContainer = document.createElement('div');
    gridContainer.id = 'membershipGrid';
    gridContainer.classList.add('membership-tiers-grid');

    membershipTiersData.forEach(tier => {
        const card = document.createElement('div');
        card.classList.add('membership-tier-card');

        let currentBadge = '';
        if (tier.isCurrent) {
            currentBadge = `<span class="current-tier-badge">Current</span>`;
        }

        card.innerHTML = `
              <div class="membership-tier-header">
                  <div class="membership-tier-card-title">${tier.title}</div>
                  ${currentBadge}
              </div>
              <div class="membership-tier-points-section">
                  <div class="membership-tier-points-label">Required Points</div>
                  <div class="membership-tier-points-value">${tier.pointsRequired}</div>
              </div>
              <div class="membership-tier-benefits-title">Benefits:</div>
              <ul class="membership-tier-benefits-list">
                  ${tier.benefits.map(benefit => `
                      <li class="membership-tier-benefit">
                          <span class="benefit-check-icon">✓</span><span>${benefit}</span>
                      </li>
                  `).join('')}
              </ul>
          `;
        gridContainer.appendChild(card);
    });

    contentElement.appendChild(gridContainer);
    return contentElement;
}
async function fetchAddressMeta() {
    if (customerId) {
        try {
            const metafieldResponse = await fetch(
                `https://${xirclsBaseUrl}/wishlist/get_metafield/?customerId=${customerId}&shop=${Shopify.shop}&app=oh_my_customer`,
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                }
            );

            const metafieldData = await metafieldResponse.json();

            if (
                metafieldData.metafields &&
                Array.isArray(metafieldData.metafields.metafields)
            ) {
                const existingMetafield = metafieldData.metafields.metafields.find(
                    (metafield) =>
                        metafield.namespace === "addressData" && metafield.key === "items"
                );
                console.log(existingMetafield, "existsj");
                if (existingMetafield) {
                    return {
                        id: existingMetafield.id,
                        addressMeta: JSON.parse(existingMetafield.value),
                    };
                }

            }
        } catch (error) {
            console.error("Error fetching wishlist:", error);
            return { id: null, addressMeta: [] };
        }
    }
}
function handleLoyaltyRedeemClick(event) {
    if (event.target.classList.contains('redeem-points-redeem-button')) {
        const redeemTitle = event.target.dataset.redeemTitle;
        const redeemPoints = event.target.dataset.redeemPoints;
        const totalPoints = event.target.dataset.totalPoints;
        const redeemValue = event.target.dataset.rewardValue;
        const redeemType = event.target.dataset.rewardType;
        console.log(redeemValue, redeemType, "event handler")
        openLoyaltyRedeemModal(redeemTitle, redeemPoints, totalPoints, redeemValue, redeemType);
    }
}
function openLoyaltyRedeemModal(title, points, totalPoints, redeemValue, redeemType, productId = null) {
  const modal = document.createElement('div');
  modal.id = 'loyaltyModal';
  modal.classList.add('loyaltyModal');
  console.log(title, points, totalPoints, redeemValue, redeemType, productId, "loyalty modal data");

  const modalContent = document.createElement('div');
  modalContent.classList.add('redeem-modal-content');

  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '×';
  closeButton.addEventListener('click', closeLoyaltyModal);

  const modalTitle = document.createElement('div');
  modalTitle.textContent = `Confirm Redemption`;
  modalTitle.classList.add('redeem-modal-title');

  const pointsContainer = document.createElement('div');
  pointsContainer.id = 'pointsContainer';
  pointsContainer.textContent = `You are about to redeem ${points} ${ loyaltyCurrency ? loyaltyCurrency : "Points" } for the following reward:`;

  const redeemButton = document.createElement('button');
  redeemButton.textContent = 'Confirm Redemption';
  redeemButton.classList.add('xircls-loyalty-footer-buttons');
  redeemButton.addEventListener('click', async () => {
      await handleLoyaltySubmit(points, redeemValue, redeemType, productId);
      closeLoyaltyModal();
  });

  const closeButtonFooter = document.createElement('button');
  closeButtonFooter.textContent = 'Cancel';
  closeButtonFooter.classList.add('xircls-loyalty-footer-buttons');
  closeButtonFooter.addEventListener('click', () => {
      closeLoyaltyModal();
  });

  const errorMessage = document.createElement('span');
  errorMessage.style.color = 'red';
  errorMessage.style.fontSize = '14px';
  errorMessage.style.display = 'none';
  errorMessage.style.marginTop = '4px';
  errorMessage.id = 'errorMessage';

  const discountCard = document.createElement('div');
  const remainingPoints = totalPoints - points;
  discountCard.innerHTML = `
      <div class="xircls-discount-card">
          <div class="xircls-card-header">
              <div class="xircls-card-title">${title}</div>
              <div class="xircls-card-points">${points} ${ loyaltyCurrency ? loyaltyCurrency : "Points" }</div>
          </div>
          <div class="xircls-card-body">
              <div class="xircls-card-row">
                  <span>Your current balance:</span>
                  <span class="xircls-bold-text">${totalPoints} ${ loyaltyCurrency ? loyaltyCurrency : "Points" }</span>
              </div>
              <div class="xircls-card-row">
                  <span>Cost:</span>
                  <span class="xircls-red-text xircls-bold-text">-${points} ${ loyaltyCurrency ? loyaltyCurrency : "Points" }</span>
              </div>
              <div class="xircls-card-row last">
                  <span>Remaining balance:</span>
                  <span class="xircls-bold-text">${remainingPoints} ${ loyaltyCurrency ? loyaltyCurrency : "Points" }</span>
              </div>
          </div>
      </div>
  `;

  const footerDiv = document.createElement('div');
  footerDiv.classList.add('xircls-loyalty-moal-footer');
  footerDiv.appendChild(closeButtonFooter);
  footerDiv.appendChild(redeemButton);

  // Assemble the modal
  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(pointsContainer);
  modalContent.appendChild(discountCard);
  modalContent.appendChild(footerDiv);
  modal.appendChild(modalContent);

  // Add the modal to the document body
  document.body.appendChild(modal);
  modal.style.display = 'block';
}

function closeLoyaltyModal() { //Renamed Function
    const modal = document.getElementById('loyaltyModal');
    if (modal) {
        modal.style.display = 'none';
        modal.remove(); // Remove the modal from the DOM
    }
}

function getHeading(type) {
  switch (type) {
    case "fixed_amount":
      return "Amount Discount";
    case "percentage":
      return "Percentage Off";
    case "BOGO":
      return "Buy One Get One";
    case "free_product":
      return "Free Product";
    default:
      return "Reward";
  }
}


/**
 * Creates and displays a modal for redeeming loyalty points.
 * @param {number} totalPoints - The total number of points the user has available.
 */
function customRedeemModal(totalPoints) {
  // --- 1. Extract Settings and Calculate Rules ---
  const redeemSettings = LoyaltySettings?.redeem_rule_json?.flexible_redemption || {};
  const loyaltyCurrency = LoyaltySettings?.basic_config?.points_terminology || "Points";

  const minPointsToRedeem = parseInt(redeemSettings.minimum_points_to_redeem, 10) || 1;
  const maxPointsPercentage = parseInt(redeemSettings.maximum_points_per_order, 10) || 100;

  // The maximum points a user is allowed to redeem based on the percentage rule.
  // Note: This logic assumes the percentage is applied to the user's total points.
  // In a real scenario, this might be a percentage of the cart total.
  const maxPointsFromRule = Math.floor(totalPoints * (maxPointsPercentage / 100));

  // The actual maximum points a user can redeem is the MINIMUM of their balance and the rule's limit.
  const effectiveMaxPoints = Math.min(totalPoints, maxPointsFromRule);

  // Check if the user can redeem points at all.
  const canRedeem = totalPoints >= minPointsToRedeem;

  // --- 2. Create Modal HTML ---
  const modal = document.createElement("div");
  modal.className = "customRedeemModal xircls-modal-overlay";

  // Determine the main guidance text based on whether the user can redeem.
  let guidanceText = `Select a predefined amount or enter a custom value to redeem.`;
  if (!canRedeem) {
      guidanceText = `You need at least ${minPointsToRedeem} ${loyaltyCurrency} to redeem. You currently have ${totalPoints}.`;
  }

  modal.innerHTML = `
    <div class="xircls-modal">
      <button class="xircls-modal-close" onclick="this.closest('.customRedeemModal').remove()">×</button>
      <div class="xircls-modal-title">Redeem Your ${loyaltyCurrency}</div>
      <p class="xircls-modal-description">Choose how many ${loyaltyCurrency} you would like to redeem for a reward.</p>

      <div class="xircls-balance-card">
        <div class="xircls-balance-header">
          <span>Available Balance</span>
          <span class="xircls-points">${totalPoints}</span>
        </div>
        <div class="xircls-balance-subtext">${guidanceText}</div>
      </div>
      
      <div style="font-size: 12px; margin-bottom: 6px; margin-left: 3px;">
        ${maxPointsPercentage < 100 ? `You can use up to ${maxPointsPercentage}% of your ${loyaltyCurrency}.` : ''}
      </div>

      <div class="xircls-options">
        <button class="xircls-option-button" data-value="250">250 ${loyaltyCurrency}</button>
        <button class="xircls-option-button" data-value="500">500 ${loyaltyCurrency}</button>
        <button class="xircls-option-button" data-value="1000">1000 ${loyaltyCurrency}</button>
      </div>

      <div class="xircls-custom-input">
        <input type="number" placeholder="Custom amount" min="${minPointsToRedeem}" max="${effectiveMaxPoints}" ${!canRedeem ? 'disabled' : ''}>
        <span class="xircls-suffix">${loyaltyCurrency}</span>
      </div>
      <div class="xircls-validation-message" style="color: red; font-size: 12px; height: 15px; margin-top: 5px; margin-left: 3px;"></div>

      <div class="xircls-modal-footer">
        <button class="xircls-cancel-btn">Cancel</button>
        <button class="xircls-proceed-btn" disabled>Proceed</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // --- 3. Add Event Listeners and Dynamic Logic ---
  const optionButtons = modal.querySelectorAll(".xircls-option-button");
  const inputField = modal.querySelector("input[type='number']");
  const proceedBtn = modal.querySelector(".xircls-proceed-btn");
  const cancelBtn = modal.querySelector(".xircls-cancel-btn");
  const validationMessageEl = modal.querySelector(".xircls-validation-message");
  
  let selectedPoints = 0;
  let highlightedButton = null;

  const highlightButton = (button) => {
      if (highlightedButton) {
          highlightedButton.classList.remove("xircls-option-button-selected");
      }
      if (button) {
          button.classList.add("xircls-option-button-selected");
      }
      highlightedButton = button;
  };
  
  // Function to validate the points and update the UI accordingly
  const validatePoints = (points) => {
      validationMessageEl.textContent = ''; // Clear previous messages
      if (!points) {
           proceedBtn.disabled = true;
           return;
      }

      if (points < minPointsToRedeem) {
          validationMessageEl.textContent = `Minimum redemption is ${minPointsToRedeem} ${loyaltyCurrency}.`;
          proceedBtn.disabled = true;
      } else if (points > effectiveMaxPoints) {
          validationMessageEl.textContent = `Maximum redemption is ${effectiveMaxPoints} ${loyaltyCurrency}.`;
          proceedBtn.disabled = true;
      } else {
          selectedPoints = points;
          proceedBtn.disabled = false;
      }
  };

  // Disable option buttons that don't meet the criteria
  optionButtons.forEach((btn) => {
      const val = parseInt(btn.dataset.value, 10);
      if (!canRedeem || val < minPointsToRedeem || val > effectiveMaxPoints) {
          btn.disabled = true;
      }

      btn.addEventListener("click", () => {
          selectedPoints = val;
          inputField.value = val;
          highlightButton(btn);
          validatePoints(val);
      });
  });

  // Input field handler
  inputField.addEventListener("input", () => {
      highlightButton(null); // Unhighlight any button if the user types
      const val = parseInt(inputField.value, 10);
      
      // Reset if input is empty or invalid
      selectedPoints = 0;
      proceedBtn.disabled = true;

      validatePoints(val);
  });

  // Cancel button
  cancelBtn.addEventListener("click", () => {
      modal.remove();
  });

  // Close button in the corner
  modal.querySelector(".xircls-modal-close").addEventListener("click", () => {
      modal.remove();
  });


  // Proceed button
  proceedBtn.addEventListener("click", async () => {
      // Final check before proceeding
      if (selectedPoints >= minPointsToRedeem && selectedPoints <= effectiveMaxPoints) {
          // Show some loading indicator if needed
          proceedBtn.textContent = "Processing...";
          proceedBtn.disabled = true;
          await handleLoyaltySubmit(selectedPoints); // Assuming this function exists
          modal.remove();
      } else {
          // This case should ideally not be reached due to button state, but it's a good safeguard
          console.error("Invalid points selected for redemption.");
      }
  });
}


function customRedeemMilestoneModal(totalPoints) {
  const modal = document.createElement("div");
  modal.className = "customRedeemModal xircls-modal-overlay";
  const milestone_redemption = LoyaltySettings?.redeem_rule_json?.milestone_redemption?.milestones;

  console.log(milestone_redemption, "maxPointsPerOrder");

  modal.innerHTML = `
    <div class="xircls-modal">
      <button class="xircls-modal-close" onclick="document.querySelector('.customRedeemModal').remove()">×</button>
      <div class="xircls-modal-title">Redeem Your ${ loyaltyCurrency ? loyaltyCurrency : "Points" }</div>
      <p class="xircls-modal-description">Choose how many ${ loyaltyCurrency ? loyaltyCurrency : "Points" } you would like to redeem for a reward</p>

      <div class="xircls-balance-card">
        <div class="xircls-balance-header">
          <span>Available Balance</span>
          <span class="xircls-points">${totalPoints}</span>
        </div>
        <div class="xircls-balance-subtext">Select a predefined amount or enter a custom value to redeem</div>
      </div>
      <div style="font-size:16px; margin-bottom:8px; margin-left:1px;"> Available Rewards </div>
      <div class="Axentra-thin-scrollbar" style="display: flex;flex-direction: column;gap: 12px;margin-bottom: 16px;overflow:auto;min-height: 100px;max-height: 300px;">
        ${milestone_redemption.map((item) => `
          <button 
            class="xircls-milestone-option-button" 
            data-req="${item.points_required}" 
            data-val="${item.reward_value}" 
            data-type="${item.reward_type}"
            ${/* // NEW: Add product ID as a data attribute if it's a free product */''}
            ${item.reward_type === 'free_product' && item.entitled_product_ids?.length ? `data-product-id="${item.entitled_product_ids[0]}"` : ''}
          >
            <div style='text-align: left;'>
              <div style="font-weight: bold;">${getHeading(item.reward_type)}</div>
              <div style="font-size: 12px;">${item.description}</div>
            </div>
            <div>
              <div style="font-weight: bold;">${item.points_required} ${loyaltyCurrency ? loyaltyCurrency : "points"}</div>
            </div>
          </button>
        `).join("")}
      </div>

      <div class="xircls-modal-footer">
        <button class="xircls-cancel-btn">Cancel</button>
        <button class="xircls-proceed-btn" disabled>Proceed</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const optionButtons = modal.querySelectorAll(".xircls-milestone-option-button");
  const proceedBtn = modal.querySelector(".xircls-proceed-btn");
  const cancelBtn = modal.querySelector(".xircls-cancel-btn");

  let selectedPoints = 0;
  let selectedRewValue = 0;
  let selectedRewType;
  let selectedProductId = null; // NEW: Variable to store the product ID
  let highlightedButton = null;

  const highlightButton = (button) => {
    if (highlightedButton) {
      highlightedButton.classList.remove("xircls-milestone-option-button-selected");
    }
    button.classList.add("xircls-milestone-option-button-selected");
    highlightedButton = button;
  };

  optionButtons.forEach((btn) => {
    const req = parseInt(btn.dataset.req, 10);
    const value = btn.dataset.val; // Value can be a string like "Free"
    const rewType = btn.dataset.type;
    const productId = btn.dataset.productId; // NEW: Get the product ID from the data attribute

    if (req > totalPoints) {
      btn.disabled = true;
    }

    btn.addEventListener("click", () => {
      selectedPoints = req;
      selectedRewValue = value;
      selectedRewType = rewType;
      selectedProductId = productId || null; // NEW: Store the product ID on click
      proceedBtn.disabled = false;
      highlightButton(btn);
    });
  });

  cancelBtn.addEventListener("click", () => {
    modal.remove();
  });

  // MODIFIED: Proceed button now passes all necessary data to the handler
  proceedBtn.addEventListener("click", async () => {
    if (selectedPoints > 0 && selectedPoints <= totalPoints) {
      console.log(selectedPoints, selectedRewType, selectedRewValue, selectedProductId, "milestoneSubmit");
      // MODIFIED: Pass all relevant data, not just the heading text
      await handleLoyaltySubmit(selectedPoints, selectedRewValue, selectedRewType, selectedProductId);
      modal.remove();
    }
  });
}


// Helper function to set active menu item
function setActiveMenuItem(activeIndex) {

    // Deactivate all items in mobile menu
    const mobileItems = document.querySelectorAll("#xircls-mobile-menu .xircls-menu-item");
    mobileItems.forEach(item => item.classList.remove("active"));
    if (mobileItems[activeIndex]) {
        mobileItems[activeIndex].classList.add("active");
    }
}

//Exchange 

const variantMetadataByLineItemId = {};
async function fetchAndDisplayVariants(productId, container) {
    container.innerHTML = `<div style="font-size: 14px; color: #6b7280; padding: 8px 0;">Loading variants...</div>`;

    try {
        const shopDomain = Shopify.shop;
        if (!shopDomain) throw new Error("Shopify.shop domain not found.");

        const url = `https://omc.axentraos.co.in/utility/product_variants?shop=${encodeURIComponent(shopDomain)}&product_id=${encodeURIComponent(productId)}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`API Error: ${response.status} - ${response.statusText}`);

        const data = await response.json();
        if (!data || !data.variants || !Array.isArray(data.variants.edges)) {
            console.error("Unexpected API response structure.", data);
            throw new Error("Could not process variant data from the server.");
        }

        const variantEdges = data.variants.edges;
        
        // **MODIFICATION START**
        // Check for no variants OR the common Shopify case of a single "Default Title" variant,
        // which means the product has no selectable options (like size or color).
        const hasNoRealVariants = variantEdges.length === 0 || 
                                  (variantEdges.length === 1 && variantEdges[0].node.title === 'Default Title');

        if (hasNoRealVariants) {
            console.log(`No exchangeable variants found for product ${productId}.`);
            container.innerHTML = ''; // Clear the "Loading..." message
            return false; // Signal that no variants were found
        }
        // **MODIFICATION END**

        const lineItemId = container.id.replace('variants-container-', '');
        variantMetadataByLineItemId[lineItemId] = {}; // initialize

        const selectOptions = variantEdges.map(edge => {
            const v = edge.node;
            const isAvailable = v.inventoryQuantity > 0;

            // Save structured metadata
            variantMetadataByLineItemId[lineItemId][v.id] = {
                title: v.title,
                image: v.image?.originalSrc || '',
                price: v.price,
                variantId: v.id,
                productId: productId
            };

            return `<option value="${v.id}" ${!isAvailable ? 'disabled' : ''}>
                ${v.title} ${!isAvailable ? '(Out of Stock)' : ''}
            </option>`;
        }).join('');

        container.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <label for="variant-select-${lineItemId}" style="font-size: 14px; font-weight: 500; color: #374151;">Select New Variant:</label>
                <select id="variant-select-${lineItemId}" name="variant-select" style="width: 100%; border-radius: 6px; border: 1px solid #d1d5db; background: white; padding: 8px 12px; font-size: 14px;">
                    <option value="">-- Please choose an option --</option>
                    ${selectOptions}
                </select>
            </div>
        `;

        return true; // Signal success
    } catch (error) {
        console.error(`Failed to fetch variants for product ${productId}:`, error);
        container.innerHTML = ''; // Clear the "Loading..." message on error
        return false; // Signal failure
    }
}

async function handleProductSelectionChange(checkbox, productId, lineItemId,allowVariants) {

    const variantsContainer = document.getElementById(`variants-container-${lineItemId}`);
      console.log(allowVariants,variantsContainer, "allowVariants")
    if (!variantsContainer) return;

    if (checkbox.checked) {

        if (allowVariants == "true") {
        
        const isAlreadyPopulated = variantsContainer.querySelector('select');
        console.log("allowVariants1")
        if (isAlreadyPopulated) {
          console.log( "allowVariants11")
            // If already populated, just show it.
            variantsContainer.style.display = 'block';
        } else {
          console.log( "allowVariants111")
            // **MODIFICATION START**
            // Fetch variants and wait for the result.
            const variantsFound = await fetchAndDisplayVariants(productId, variantsContainer);

            // Only show the container if the fetch was successful and found variants.
            if (variantsFound) {
                variantsContainer.style.display = 'block';
            } else {
                // If no variants were found or an error occurred, keep the container hidden.
                // The fetch function has already cleared the container's innerHTML.
                variantsContainer.style.display = 'none';
            }
          }  // **MODIFICATION END**
        }
    } else {
        // If unchecked, always hide the container.
        variantsContainer.style.display = 'none';
    }

    // Update the summary at the bottom
    updateSelectedExchangeItems();
}
function openExchangeModal(encodedOrderString, encodedSettingsString, encodedReturnInfoString) {
 let orderData;
 let exchangeSettings;
 let returnInfo;
  try {
    // Decode and parse the stringified order data passed from the button's onclick attribute
    
    orderData = JSON.parse(decodeURIComponent(encodedOrderString));
     exchangeSettings = JSON.parse(decodeURIComponent(encodedSettingsString));
     returnInfo = JSON.parse(decodeURIComponent(encodedReturnInfoString));
  } catch (e) {
    console.error("Could not open the return modal. Failed to parse order data:", e);
    alert("An error occurred while trying to open the return modal.");
    return;
    
  }
  currentExchangeOrderData = orderData;
  console.log(orderData, exchangeSettings, "exchangesettings")
  // Create modal overlay element
  const overlay = document.createElement('div');
  overlay.id = 'exchange-modal-overlay';
  overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center; z-index: 1000;';
  overlay.onclick = closeExchangeModal;
  
  // Add modal content
  overlay.innerHTML = exchangeModal(orderData, exchangeSettings, returnInfo);
  
  // Append to body
  document.body.appendChild(overlay);
}
function handleExchangeReasonChange(event) {
    const photoSection = document.getElementById('photo-upload-section');
    if (!photoSection) return;

    const selectedReason = event.target.value;
    console.log("Exchange reason selected:", selectedReason);

    // Show the photo upload section for any reason EXCEPT "Want different model"
    if (selectedReason !== "Want different model") {
        photoSection.style.display = 'block';
    } else {
        photoSection.style.display = 'none';
    }
}

function handlePhotoSelection(event) {
  const fileInput = event.target;
  const filenameDisplay = document.getElementById('photo-filename-display');
  const uploadButton = document.getElementById('photo-upload-button');

  if (fileInput.files && fileInput.files.length > 0) {
    const filename = fileInput.files[0].name;
    // Display the filename to the user
    filenameDisplay.textContent = `Selected: ${filename}`;
    if (uploadButton) {
      uploadButton.textContent = 'Change Photo';
    }
  } else {
    // Clear the filename if no file is selected
    filenameDisplay.textContent = '';
    if (uploadButton) {
      uploadButton.textContent = 'Upload Photo';
    }
  }
}

async function submitExchangeRequest() {
  console.log("Submit button clicked. Preparing data for API submission...");

  const submitButton = document.getElementById('submit-exchange-button');
  if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
  }

  try {
    // --- 1. GATHER DATA FROM THE FORM ---
    const orderIdElement = document.getElementById('exchange-order-id-hidden');
    const orderId = orderIdElement ? orderIdElement.value : null;
    const shopDomain = Shopify.shop;

    // MODIFIED: Select checkboxes by their unique prefix
    const selectedCheckboxes = document.querySelectorAll('input[id^="line-item-checkbox-"]:checked');
    // MODIFIED: Extract line item IDs. Assuming the API parameter 'product_ids' actually accepts line_item_ids.
    const line_item_ids = Array.from(selectedCheckboxes).map(cb => cb.id.replace('line-item-checkbox-', ''));

    const reason = document.querySelector('input[name="exchange-reason"]:checked')?.value;
    const additionalDetails = document.getElementById('exchange-description').value;
    const exchangePreferences = document.getElementById('exchange-product').value;
    const photoInput = document.getElementById('exchange-photo-input');
    const imageFile = (photoInput && photoInput.files.length > 0) ? photoInput.files[0] : null;

    // --- 2. ASSEMBLE DATA FOR FORMDATA ---
    
    // NEW: Gather selected variant data for each item being exchanged
    const requestedExchanges = [];
    line_item_ids.forEach(lineItemId => {
        const variantSelect = document.getElementById(`variant-select-${lineItemId}`);
        if (variantSelect && variantSelect.value) {
            const selectedOption = variantSelect.options[variantSelect.selectedIndex];
            // Find the original product ID associated with this line item
            const originalItem = currentExchangeOrderData.items.find(item => item.id == lineItemId);
           const selectedVariantId = variantSelect.value;
const variantMeta = variantMetadataByLineItemId[lineItemId]?.[selectedVariantId] || {};

requestedExchanges.push({
    originalProductId: originalItem ? originalItem.productId : 'N/A',
    originalLineItemId: lineItemId,
    requestedVariantId: selectedVariantId,
    requestedVariantTitle: variantMeta.title || selectedOption.text.trim(),
    variantImage: variantMeta.image || '',
    variantPrice: variantMeta.price || '',
    variantProductId: variantMeta.productId || ''
});
        }
    });

    const descriptionObject = {
      reason: reason || "No reason selected.",
      additionalDetails: additionalDetails || "No additional details provided.",
      exchangePreferences: exchangePreferences || "No exchange preferences provided.",
      // NEW: Add the structured variant selection data to the description
      requestedExchanges: requestedExchanges 
    };

    // --- 3. CREATE AND POPULATE FORMDATA ---
    const formData = new FormData();
    formData.append('shop', shopDomain || '');
    formData.append('order_id', orderId || '');
    formData.append('customer_id', customerId || '');
    // MODIFIED: Send the array of line item IDs
    formData.append('product_ids', JSON.stringify(line_item_ids));
    formData.append('description', JSON.stringify(descriptionObject));

    if (imageFile) {
      formData.append('file1', imageFile);
    }
    
    console.log("--- Submitting FormData to API ---");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    console.log("---------------------------------");

    // --- 4. SUBMIT THE DATA VIA FETCH ---
    const response = await fetch('https://omc.axentraos.co.in/utility/exchange_request_handler/', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Failed to parse error response.' }));
      throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorData.message || 'No details'}`);
    }

    const result = await response.json();

    // --- 5. HANDLE SUCCESS ---
    console.log("API Success Response:", result);

     createStatusToast("Exchange", "Your exchange request has been submitted successfully!", "success");
        setTimeout(() => window.location.reload(), 500);
    closeExchangeModal(); // Close modal on success

  } catch (error) {
    // --- 6. HANDLE ERRORS ---
    console.error("Failed to submit exchange request:", error);
createStatusToast("Exchange", "Your exchange request has been failed!", "error");
 setTimeout(() => window.location.reload(), 500);
  closeExchangeModal();
    
  } finally {
    // --- 7. RE-ENABLE THE BUTTON ---
    if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Request';
    }
  }
}
function exchangeModal(orderData, exchangeSettings, returnInfo) {
  
  const settings = exchangeSettings.exchange?.basic_settings;
  const exchangeWindowDays = settings?.exchange_window || 'N/A';
 const allowVariantExchange = settings?.exchange_functionality?.varient_exchanges === true;
 const initiatedVariantIds = new Set();
  
  // 2. Safely loop through the consolidated array of requests passed from createTable.
  (returnInfo || []).forEach(returnInfo => {
    if (returnInfo?.order_details) {
        const allInitiatedItems = [
            ...(returnInfo.order_details.returned_items || []),
            ...(returnInfo.order_details.exchanged_items || [])
        ];
        allInitiatedItems.forEach(initiatedItem => {
            // Collect the VARIANT ID from the API response
            if (initiatedItem && typeof initiatedItem.variant_id !== 'undefined') {
                initiatedVariantIds.add(initiatedItem.variant_id);
            }
        });
    }
  });

  console.log('--- exchange MODAL DEBUG ---');
  console.log('Final Set of initiated VARIANT IDs (from ALL requests):', initiatedVariantIds);
  console.log('--------------------------');
  const itemsHTML = orderData.items.map(item => {

 const numericVariantId = Number(String(item.variantId).split('/').pop()); // Assuming item.id from your order object holds the Variant ID
    const isAlreadyInitiated = initiatedVariantIds.has(numericVariantId);
    
    console.log(`Checking Item: "${item.title}" | Its Variant ID: ${numericVariantId} | In initiated Set? -> ${isAlreadyInitiated}`);
    
     const isRuleEligible = isOrderEligibleForExchange({ ...orderData, items: [item] }, exchangeSettings);
     const isDisabled = !isRuleEligible || isAlreadyInitiated;
    
    // Determine which badge to show for better UX
    let eligibilityBadge;
    if (isAlreadyInitiated) {
        eligibilityBadge = `<div style="background-color: #d1d5db; color: #4b5563;padding:5px; border-radius:10px;font-size:8px">Request Initiated</div>`;
    } else if (isRuleEligible) {
        eligibilityBadge = `<div style="background-color: #3b82f6; color: white;padding:5px; border-radius:10px;font-size:8px">Eligible</div>`;
    } else {
        eligibilityBadge = `<div style="background-color: #f3f4f6; color: #6b7280;padding:5px; border-radius:10px;font-size:8px">Not Eligible</div>`;
    }
    // ASSUMPTION: The 'item' object must have 'id' (line item id) and 'productId'.
    const lineItemId = item.id;
    const productId = item.id;
    
    return `
     <div style="border-radius: 8px; border: 1px solid #e5e7eb; background: white; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); ${isDisabled ? 'opacity: 0.5;' : ''}">
          <div style="padding: 16px;">
              <div style="display: flex; align-items: flex-start; gap: 16px;">
                  <input class="Axentra-custom-checkbox" type="checkbox" ${isDisabled ? 'disabled' : ''} id="line-item-checkbox-${lineItemId}" onchange="handleProductSelectionChange(this, '${productId}', '${lineItemId}','${allowVariantExchange}')" style="width: 16px; height: 16px; margin-top: 4px; cursor: ${isDisabled ? 'not-allowed' : 'pointer'};">
                  <img src="${item.image || 'https://placehold.co/100x100'}" alt="${item.title}" style="width: 64px; height: 64px; object-fit: cover; border-radius: 8px;">
                  <div style="flex: 1;">
                      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                          <div>
                              <div style="font-weight: 500; color: #111827; font-size: 14px; margin-bottom: 4px;">${item.title}</div>
                              <div style="font-size: 12px; color: #6b7280; margin-bottom: 4px;">${item.variantTitle || 'Standard'} • Qty: ${item.quantity}</div>
                              <div style="font-size: 12px; font-weight: 500; color: #111827;">${item.price} each</div>
                          </div>
                          <div style="text-align: right;">
                              <div style="display: inline-flex; align-items: center; border-radius: 16px; border: 1px solid transparent; padding: 2px 10px; font-size: 10px; font-weight: 600;">
                                  ${eligibilityBadge}
                              </div>
                              <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">Window: ${exchangeWindowDays} days</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div id="variants-container-${lineItemId}" style="display: none; padding: 0px 16px 16px 96px;"></div>
      </div>
  `}).join('');
  const staticReasons = [
      "Wrong size ordered", "Wrong color ordered", "Item doesn't fit",
      "Want different model", "Item damaged/defective"
  ];
  const dynamicReasonObj = settings?.price_eligibilty?.exchange_reson || {};
  const dynamicReasons = Object.values(dynamicReasonObj);
  const allReasons = [...new Set([...staticReasons, ...dynamicReasons])]; // Use Set to remove duplicates

  const reasonsHTML = allReasons.map((reason, index) => `
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
          <input  class="Axentra-custom-checkbox" type="radio" name="exchange-reason" value="${reason}" id="exchange-reason-${index}" onchange="handleExchangeReasonChange(event)" style="width: 16px; height: 16px; cursor: pointer;">
          <label for="exchange-reason-${index}" style="font-size: 14px; font-weight: 500; cursor: pointer;">${reason}</label>
      </div>
  `).join('');

  const processingTime = settings?.price_eligibilty?.item_condition?.process_timing?.exchange_process || '5-7';
  const importantInfo = [
      "Items must be in original condition with tags attached", "Exchange shipping label will be provided",
      `Processing takes ${processingTime} business days after receipt`, "You'll receive email updates throughout the process",
      "Exchanges are subject to product availability"
  ];
  const infoHTML = importantInfo.map(info => `<div style="font-size: 12px; color: #1e40af; margin-bottom: 4px;">• ${info}</div>`).join('');

  return `
      <div style="background: white; border-radius: 12px; max-width: 672px; width: 94%; max-height: 78vh; overflow-y: auto;" onclick="event.stopPropagation()">
          <input type="hidden" id="exchange-order-id-hidden" value="${orderData.orderId}">
          <div style="position: sticky; top: 0; background: white; z-index: 10; display: flex; align-items: center; justify-content: space-between; padding: 16px; border-bottom: 1px solid #e5e7eb;">
              <div style="font-size: 20px; font-weight: 600; color: #111827;">Exchange Items - Order ${orderData.orderNumber}</div>
              <button onclick="closeExchangeModal(event)" style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 50%; border: none; background: none; cursor: pointer; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#f3f4f6'" onmouseout="this.style.backgroundColor='transparent'">
                  X
              </button>
          </div>
          <div style="padding: 16px;">
              <div style="display: flex; flex-direction: column; gap: 24px;">
                  <div>
                      <div  style="font-weight: 500; color: #111827; margin-bottom: 16px; font-size: 16px;">Select Items to Exchange</div>
                      <div style="display: flex; flex-direction: column; gap: 12px;">${itemsHTML}</div>
                  </div>
                  <div style="height: 1px; background-color: #e5e7eb; width: 100%;"></div>
                  <div>
                      <div style="font-weight: 500; color: #111827; margin-bottom: 16px; font-size: 16px;">Reason for Exchange</div>
                      <div style="display: grid; gap: 8px;">${reasonsHTML}</div>
                  </div>
                  <div id="photo-upload-section" style="display: none;">
                      <div style="border: 1px dashed #d1d5db; border-radius: 6px; padding: 24px; text-align: center;">
                          <svg class="xircls_svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 12px; display: block;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                          <div style="color: #374151; font-weight: 500; font-size: 14px; margin-bottom: 4px;">Photo Required</div>
                          <div style="color: #6b7280; font-size: 12px; margin-bottom: 16px;">Please upload a photo showing the issue with your item</div>
                          <input type="file" id="exchange-photo-input" accept="image/*" style="display: none;" onchange="handlePhotoSelection(event)">
                          <button id="photo-upload-button" type="button" onclick="document.getElementById('exchange-photo-input').click()" style="background-color: #fff; border: 1px solid #d1d5db; color: #374151; font-weight: 500; font-size: 14px; border-radius: 6px; padding: 8px 16px; cursor: pointer;">Upload Photo</button>
                          <div id="photo-filename-display" style="font-size: 12px; color: #4b5563; margin-top: 12px; font-weight: 500; min-height: 18px;"></div>
                      </div>
                  </div>
                  <div>
                      <div style="font-size: 14px; font-weight: 500; color: #111827; display: block; margin-bottom: 8px;">Additional Details (Optional)</div>
                      <textarea id="exchange-description" placeholder="Please provide any additional details about your request..." rows="3" style="display: flex; min-height: 80px; width: 100%; border-radius: 6px; border: 1px solid #d1d5db; background: white; padding: 8px 12px; font-size: 14px; resize: vertical; box-sizing: border-box;"></textarea>
                  </div>
                  <div style="height: 1px; background-color: #e5e7eb; width: 100%;"></div>
                  <div>
                      <div style="font-weight: 500; color: #111827; margin-bottom: 16px; font-size: 16px;">Exchange Preferences</div>
                      <textarea id="exchange-product" placeholder="If the variant you want isn't listed above, please describe it here." rows="2" style="display: flex; min-height: 60px; width: 100%; border-radius: 6px; border: 1px solid #d1d5db; background: white; padding: 8px 12px; font-size: 14px; resize: vertical; box-sizing: border-box;"></textarea>
                  </div>
                 
                  <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px;">
                      <div style="display: flex; align-items: flex-start; gap: 12px;">
                          <svg class="xircls_svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px; flex-shrink: 0;"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
                          <div>
                              <div style="font-weight: 500; color: #1e3a8a; margin-bottom: 8px; font-size: 16px;">Important Information</div>
                              <div style="font-size: 14px; color: #1e40af;">${infoHTML}</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div style="position: sticky; bottom: 0; background: white; z-index: 10; padding: 16px; border-top: 1px solid #e5e7eb; display: flex; justify-content: flex-end; gap: 8px;">
              <button onclick="closeExchangeModal(event)" class="Axentra-returnclose" style="display: inline-flex;  cursor: pointer;">Cancel</button>
              <button id="submit-exchange-button" class="Axentra-ReturnBtn" onclick="submitExchangeRequest()" style="display: inline-flex; cursor: pointer;">
                  <svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
                  Submit Request
              </button>
          </div>
      </div>
  `;
}


function updateSelectedExchangeItems() {
  if (!currentExchangeOrderData) return;

  const selectedItems = [];
  // MODIFIED: Select checkboxes by their unique prefix
  const checkboxes = document.querySelectorAll('input[id^="line-item-checkbox-"]:checked');
  let totalValue = 0;

  checkboxes.forEach(checkbox => {
    // MODIFIED: Extract unique line item ID and find the corresponding item
    const lineItemId = checkbox.id.replace('line-item-checkbox-', '');
    const item = currentExchangeOrderData.items.find(i => i.id == lineItemId);
    
    if (item) {
        selectedItems.push(item);
        const priceValue = parseFloat(item.price.replace(/[^\d.-]/g, '')) || 0;
        totalValue += (priceValue * item.quantity);
    }
  });

  const containerDiv = document.getElementById('exchange-summary-div');
  if (containerDiv) {
    containerDiv.style.display = selectedItems.length > 0 ? 'block' : 'none';
  }
  
  const countEl = document.getElementById('exchange-items-count');
  if (countEl) {
    countEl.textContent = `${selectedItems.length} item(s) selected for exchange.`;
  }
  
  const container = document.getElementById('exchange-items-container');
  if (container) {
    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; font-size: 14px;">
        <span>Value of selected items:</span>
        <span style="font-weight: 500;">${currentExchangeOrderData.currencyCode} ${totalValue.toFixed(2)}</span>
      </div>
    `;
  }
}

function closeExchangeModal(event) {
    // Only close if the click is on the overlay itself, not on its children
    if (event && event.currentTarget !== event.target) {
        return;
    }
    const overlay = document.getElementById('exchange-modal-overlay');
    if (overlay) {
        overlay.remove();
        currentExchangeOrderData = null; // Clean up the global data
    }
}


//Return

function updateUploadButtonText(input) {
  const uploadLabel = document.getElementById('photo-upload-label');
  if (input.files && input.files.length > 0) {
    uploadLabel.textContent = input.files[0].name;
  } else {
    uploadLabel.textContent = 'Upload Photo';
  }
}

function submitReturnRequest() {
  // --- Gather all raw data from the form safely ---
  
  // Get Shop Domain from the global Shopify object
  const shopDomain = typeof Shopify !== 'undefined' ? Shopify.shop : null;

  // Get Order ID from hidden input
  const orderIdElement = document.getElementById('return-order-id-hidden');
  const orderId = orderIdElement ? orderIdElement.value : null;

  // Get Customer ID from hidden input
  const customerIdElement = document.getElementById('return-customer-id-hidden');


  // Get selected product IDs
  const selectedProductIds = [];
  document.querySelectorAll('input[type="checkbox"][id^="return-item-"]:checked').forEach(checkbox => {
    selectedProductIds.push(checkbox.dataset.itemId);
  });
  
  // Get reason, details, and refund method
  const reasonElement = document.querySelector('input[name="return-reason"]:checked');
  const returnReason = reasonElement ? reasonElement.value : null;

  const detailsElement = document.getElementById('return-description');
  const additionalDetails = detailsElement ? detailsElement.value : '';

  const refundElement = document.getElementById('refund-method');
  const refundMethod = refundElement ? refundElement.value : null;

  // Get the uploaded file
  const photoInput = document.getElementById('photo-upload-input');
  let uploadedFile = null;
  if (photoInput && photoInput.files.length > 0) {
    uploadedFile = photoInput.files[0];
  }

  // --- Basic Validation ---
  if (selectedProductIds.length === 0) {
    
      createStatusToast("Return", "Please select one item to return.", "error");
    closeReturnModal();
    return;
  }
  if (!returnReason) {
     createStatusToast("Return", "Please select a reason for the return.", "error");

    return;
  }

  const descriptionObject = {
    reason: returnReason,
    additional_details: additionalDetails,
    refund_preferences: refundMethod,
    uploaded_images: uploadedFile
  };

  // 2. Create the final payload
  const submissionData = {
    shop: shopDomain,
    order_id: orderId,
    customer_id: customerId,
    product_ids: selectedProductIds,
    description: descriptionObject
  };
 const formData = new FormData();
  formData.append('shop', shopDomain || '');
  formData.append('order_id', orderId || '');
  formData.append('customer_id', customerId || '');
 formData.append('product_ids', JSON.stringify(submissionData.product_ids));
formData.append('description', JSON.stringify(submissionData.description));


  if (uploadedFile) {
    formData.append('file1', uploadedFile);
  }

  // Submit the form
  fetch('https://omc.axentraos.co.in/utility/return_request_handler/', {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('✅ Return Request Response:', data);
      createStatusToast("Return", "Your return request has been submitted successfully.", "success");
      
      closeReturnModal();
        setTimeout(() => window.location.reload(), 500);
    })
    .catch(error => {
      console.error('❌ Error submitting return request:', error);
      
       createStatusToast("Return", "There was an error submitting your return request. Please try again.", "success");
      //  setTimeout(() => window.location.reload(), 500);
    })
  // Log the final data to the console
  console.log("--- Return Request Submitted ---", submissionData);
 setTimeout(() => window.location.reload(), 500);
  closeReturnModal();


}

function getReturnWindowForOrder(orderData, returnSettings) {
  const generalSettings = returnSettings?.return?.['general settings'];

  // If there are no general settings, there's no return window.
  if (!generalSettings) {
    console.warn("No 'general settings' found in return settings. Defaulting to 0 day window.");
    return 0;
  }

  // Check if regional settings are enabled and if a setting for the order's country exists.
  const isRegionalEnabled = generalSettings.enabled_regional === true;
  const customerCountry = orderData?.shippingAddress?.country;
  
  if (isRegionalEnabled && customerCountry) {
    const regionalCountrySetting = generalSettings.regional?.[customerCountry];
    
    // If a specific setting for the customer's country exists, use its return window.
    if (regionalCountrySetting && regionalCountrySetting['return window']) {
      console.log(`Using regional return window for ${customerCountry}: ${regionalCountrySetting['return window']} days.`);
      return parseInt(regionalCountrySetting['return window'], 10);
    }
  }

  // If no applicable regional setting was found, fall back to the global setting.
  if (generalSettings.global && generalSettings.global['return window']) {
    console.log(`Falling back to global return window: ${generalSettings.global['return window']} days.`);
    return parseInt(generalSettings.global['return window'], 10);
  }

  // If no global setting is found either, default to 0.
  console.warn("No global return window found. Defaulting to 0 days.");
  return 0;
}
function returnModal(orderData, returnSettings, returnInfo) {

  console.log(returnInfo, "returnInfo")
  // Use settings from the API
  const generalSettings = returnSettings.return?.['general settings']?.global;
   const returnWindowDays = getReturnWindowForOrder(orderData, returnSettings);
  const returnReasons = [
    "Item is defective or damaged",
    "Received the wrong item",
    "Size is too small",
    "Size is too large",
    "Changed my mind",
    "Item doesn't match description",
    "Other"
  ];

  const importantInfo = [
   
  ];



const returnTime = getReturnSettingValue('return processing time', 'return settings', orderData, returnSettings);
const refundTime = getReturnSettingValue('refund processing time', 'return settings', orderData, returnSettings);

if (returnTime) {
  importantInfo.push(`Your return will be processed within ${returnTime} business days of receipt.`);
}
if (refundTime) {
  importantInfo.push(`Approved refunds are typically issued within ${refundTime} business days.`);
}

  const initiatedVariantIds = new Set();
  
  // 2. Safely loop through the consolidated array of requests passed from createTable.
  (returnInfo || []).forEach(returnInfo => {
    if (returnInfo?.order_details) {
        const allInitiatedItems = [
            ...(returnInfo.order_details.returned_items || []),
            ...(returnInfo.order_details.exchanged_items || [])
        ];
        allInitiatedItems.forEach(initiatedItem => {
            // Collect the VARIANT ID from the API response
            if (initiatedItem && typeof initiatedItem.variant_id !== 'undefined') {
                initiatedVariantIds.add(initiatedItem.variant_id);
            }
        });
    }
  });

  console.log('--- RETURN MODAL DEBUG ---');
  console.log('Final Set of initiated VARIANT IDs (from ALL requests):', initiatedVariantIds);
  console.log('--------------------------');

console.log(returnTime, refundTime, "reffund")
    const infoHTML = importantInfo.map(info => `<div>• ${info}</div>`).join('');
  const itemsHTML = orderData.items.map(item => {
      // === NEW PRECISE TIME-BASED LOGIC ===  
    // STEP 4: Perform the CORRECT comparison.
    // Check if this item's PRODUCT ID is in the Set of initiated PRODUCT IDs.
  const numericVariantId = Number(String(item.variantId).split('/').pop()); // Assuming item.id from your order object holds the Variant ID
    const isAlreadyInitiated = initiatedVariantIds.has(numericVariantId);
    
    console.log(`Checking Item: "${item.title}" | Its Variant ID: ${numericVariantId} | In initiated Set? -> ${isAlreadyInitiated}`);

    const orderDate = new Date(orderData.orderTime);
    const currentDate = new Date();

    // Calculate the exact expiration date and time
    const expirationDate = new Date(orderDate);
    expirationDate.setDate(expirationDate.getDate() + returnWindowDays);
    
    // The new, more precise eligibility check:
    // Is the current moment before or exactly at the expiration moment?
    const isWithinWindow = returnWindowDays > 0 && currentDate <= expirationDate;
       let isEligible = false;
    let eligibilityText = '';
    
    if (isAlreadyInitiated) {
      isEligible = false;
      eligibilityText = 'Return Initiated';
    } else if (isWithinWindow) {
      isEligible = true;
      eligibilityText = 'Eligible';
    } else {
      isEligible = false;
      eligibilityText = 'Return Window Expired';
    }
    
    const eligibilityColor = isEligible ? 'background-color: #3b82f6; color: white;' : 'background-color: #f3f4f6; color: #6b7280;';
    const containerStyle = !isEligible ? 'opacity: 0.6; pointer-events: none;' : '';

     return `
      <div style="border-radius: 8px; border: 1px solid #e5e7eb; background: white; ${containerStyle}">
          <div style="padding: 16px;">
              <div style="display: flex; align-items: flex-start; gap: 16px;">
                  <input class="Axentra-custom-checkbox" type="checkbox" ${!isEligible ? 'disabled' : ''} id="return-item-${item.id}" data-item-id="${item.id}" style="width: 16px; height: 16px; margin-top: 4px; cursor: ${isEligible ? 'pointer' : 'not-allowed'};">
                  <img class="Axentra-ReturnOrderImg" src="${item.image}" alt="${item.title}" style="width: 64px; height: 64px; object-fit: cover; border-radius: 8px;">
                  <div style="flex: 1;">
                      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                          <div>
                              <div class="Axentra-ReturnOrderName" style="font-weight: 500; color: #111827; font-size: 14px; margin-bottom: 4px;">${item.title}</div>
                              <div class="Axentra-ReturnOrderVariant" style="font-size: 12px; color: #6b7280; margin-bottom: 4px;">${item.variantTitle || 'Standard'} • Qty: ${item.quantity}</div>
                              <div class="Axentra-ReturnOrderprice" style="font-size: 12px; font-weight: 500; color: #111827;">${item.price} each</div>
                          </div> 
                          <div style="text-align: right;">
                              <div style="display: inline-flex; align-items: center; border-radius: 16px; padding: 2px 10px; font-size: 10px; font-weight: 600; ${eligibilityColor}">
                                  ${eligibilityText}
                              </div>
                              <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">Return window: ${returnWindowDays} days</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>`;
  }).join('');
  const reasonsHTML = returnReasons.map((reason, index) => `
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
          <input class="Axentra-custom-checkbox" onchange="handleReasonChangeReturn()" type="radio" name="return-reason" value="${reason}" id="return-reason-${index}" style="width: 16px; height: 16px; cursor: pointer;">
          <label for="return-reason-${index}" class="Axentra-returnLabel" style="font-size: 14px; font-weight: 500; cursor: pointer;">${reason}</label>
      </div>
  `).join('');
  
  const photoUploadHTML = `
    <div id="photo-upload-container" style="display: none; flex-direction: column; align-items: center; justify-content: center; text-align: center; border: 2px dashed #d1d5db; border-radius: 8px; padding: 32px; gap: 12px;">
      <input type="file" id="photo-upload-input" accept="image/*" style="display: none;" onchange="updateUploadButtonText(this)">
      <svg class="xircls_svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
      <div style="font-weight: 600; color: #374151;">Photo Required</div>
      <div style="font-size: 14px; color: #6b7280;">Please upload a photo showing the issue with your item</div>
      <label for="photo-upload-input" id="photo-upload-label" style="margin-top: 8px; display: inline-block; border: 1px solid #d1d5db; background: white; color: #374151; font-weight: 500; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 14px;">Upload Photo</label>
    </div>
  `;

 return `
  <div class="Axentra-returnModal" style="background: white; border-radius: 12px; max-width: 672px; width: 95%; max-height: 90vh; overflow-y: auto; display: flex; flex-direction: column;" onclick="event.stopPropagation()">
    <!-- Hidden inputs to store IDs -->
    <input type="hidden" id="return-order-id-hidden" value="${orderData.orderId}">
    <input type="hidden" id="return-customer-id-hidden" value="${orderData.customerDetails ? orderData.customerDetails.id : ''}">

    <!-- Header -->
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; border-bottom: 1px solid #e5e7eb; position: sticky; top: 0; background: white; z-index: 1;">
      <div class="Axentra-returnmodal-header" style="font-size: 20px; font-weight: 600; color: #111827;">
        Return Items - Order ${orderData.orderNumber}
      </div>
      <button onclick="closeReturnModal()" class="Axentra-returnclose" style="display: inline-flex; background: none; cursor: pointer;">
        <svg class="xircls_svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </button>
    </div>

    <!-- Content Section -->
    <div style="padding: 20px; overflow-y: auto;">
      <div style="display: flex; flex-direction: column; gap: 24px;">

        <!-- Items to Return -->
        <div>
          <div style="font-weight: 500; color: #111827; margin-bottom: 16px; font-size: 16px;">Select Items to Return</div>
          <div style="display: flex; flex-direction: column; gap: 12px;">${itemsHTML}</div>
        </div>

        <div style="height: 1px; background-color: #e5e7eb;"></div>

        <!-- Return Reason -->
        <div>
          <div class="Axentra-ReasonReturnModal1" style="font-weight: 500; color: #111827; margin-bottom: 16px; font-size: 16px;">Reason for Return</div>
          <div class="Axentra-ReasonReturnModal" style="display: grid; gap: 8px;">${reasonsHTML}</div>
          <div style="margin-top: 16px;">${photoUploadHTML}</div>
        </div>

        <!-- Additional Details -->
        <div>
          <label class="Axentra-returnLabel" style="font-size: 14px; font-weight: 500; color: #111827; display: block; margin-bottom: 8px;">Additional Details (Optional)</label>
          <textarea id="return-description" class="Axentra-returnLabel" placeholder="Please provide any additional details..." rows="3" style="min-height: 80px; width: 100%; border-radius: 6px; border: 1px solid #d1d5db; padding: 8px 12px; font-size: 14px; resize: vertical; box-sizing: border-box;"></textarea>
        </div>

        <div style="height: 1px; background-color: #e5e7eb;"></div>

        <!-- Refund Method -->
        

        <!-- Refund Summary (Initially Hidden) -->
        <div id="return-summary-div" style="display: none;">
          <div style="font-weight: 500; color: #111827; font-size: 16px;">Refund Summary</div>
          <div style="font-size: 12px;" id="selected-items-count"></div>
          <div id="selected-items-container"></div>
        </div>

        <!-- Info Box -->
        <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px;">
          <div style="display: flex; align-items: flex-start; gap: 12px;">
            <svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
            <div>
              <div class="Axentra-returnLabel" style="font-weight: 500; color: #1e3a8a; margin-bottom: 8px; font-size: 16px;">Important Information</div>
              <div class="Axentra-returnLabel" style="font-size: 14px; color: #1e40af;">${infoHTML}</div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Footer Buttons -->
    <div style="padding: 16px; border-top: 1px solid #e5e7eb; display: flex; justify-content: flex-end; gap: 8px;">
      <button onclick="closeReturnModal()" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; white-space: nowrap; border-radius: 6px; font-size: 14px; font-weight: 500; border: 1px solid #d1d5db; background: white; color: #374151; height: 40px; padding: 0 16px; cursor: pointer;" onmouseover="this.style.backgroundColor='#f9fafb'" onmouseout="this.style.backgroundColor='white'">
        Cancel
      </button>

      <button class="Axentra-ReturnBtn" onclick="submitReturnRequest()" style="display: inline-flex; ">
        <svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
          <path d="M21 3v5h-5"></path>
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
          <path d="M8 16H3v5"></path>
        </svg>
        Submit Request
      </button>
    </div>
  </div>
`;

}

function handleReasonChangeReturn() {
  const photoUploadContainer = document.getElementById('photo-upload-container');
  const selectedReason = document.querySelector('input[name="return-reason"]:checked');

  if (!photoUploadContainer || !selectedReason) return;

  const reasonValue = selectedReason.value;
  const reasonsRequiringPhoto = ["Item is defective or damaged", "Received the wrong item"];

  if (reasonsRequiringPhoto.includes(reasonValue)) {
    photoUploadContainer.style.display = 'flex'; // Show the container
  } else {
    photoUploadContainer.style.display = 'none'; // Hide it for other reasons
  }
}



function updateSelectedItems() {
  const selectedItems = [];
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let totalPrice = 0;
  checkboxes.forEach(checkbox => {
    const item = returnData.items.find(i => i.id === checkbox.id);
    if (item) selectedItems.push(item);
    totalPrice += item.price
  });
  const containerDiv = document.getElementById('return-summary-div')
  if(selectedItems.length > 0){
    containerDiv.style.display = 'block'
  }
  else{
    containerDiv.style.display = 'none'
  }
  const container = document.getElementById('selected-items-container');
  const count = document.getElementById('selected-items-count')
  if(count){
    count.textContent = `${selectedItems.length} item(s) selected`
  }
  if (container) {
    container.innerHTML = `
    <div style="display: flex; justify-content: space-between;">
      <div style="font-size: 14px;">
        Refund will be processed within 3-5 business days after we receive your items.
    </div>
    <div>
       ${totalPrice}
    </div>
    </div>
    `;
  }
}

function openReturnModal(encodedOrderString, encodedSettingsString , encodedReturnInfoString) {
  let orderData, returnSettings, returnInfo;
  try {
    // Decode and parse the stringified order data passed from the button's onclick attribute
    
    orderData = JSON.parse(decodeURIComponent(encodedOrderString));
     returnSettings = JSON.parse(decodeURIComponent(encodedSettingsString));
     returnInfo = encodedReturnInfoString ? JSON.parse(decodeURIComponent(encodedReturnInfoString)) : null;
  } catch (e) {
    console.error("Could not open the return modal. Failed to parse order data:", e);
    alert("An error occurred while trying to open the return modal.");
    return;
  }
  
  console.log(orderData, "returnorder"); // This will now log the parsed order object

  // Create modal overlay element
  const overlay = document.createElement('div');
  overlay.id = 'exchange-modal-overlay';
  overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center; z-index: 1000;';
  
  // Close modal only if the background overlay itself is clicked, not its content
  overlay.onclick = function(event) {
    if (event.target === overlay) {
      closeReturnModal();
    }
  };
  
  // Pass the parsed order object to the returnModal function to generate the HTML
  overlay.innerHTML = returnModal(orderData, returnSettings, returnInfo);
  
  // Append to body
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}


function closeReturnModal(event) {
  const overlay = document.getElementById('exchange-modal-overlay');
  if (event && event.target !== overlay && !event.target.closest('button')) return;
  if (overlay) {
      overlay.remove();
  }
    document.body.style.overflow = 'auto'; 
}


//Replacement

// --- GLOBAL STATE FOR REPLACEMENT MODAL ---
let currentReplacementStep = 1;
let currentExchangeOrderData = {};
let currentReplacementSettings = {}; // To store settings
let currentReturnInfo = []; // To store initiated request info
let selectedReplacementItemIds = [];
let replacementDetails = {};
let replacementAdditionalNotes = '';
let hasAgreedToConditions = false;


function openReplacementModal(encodedOrderString, encodedSettingsString, encodedReturnInfoString) {
  let orderData, replacementSettings, returnInfo;
  try {
    orderData = JSON.parse(decodeURIComponent(encodedOrderString));
    // Use consistent variable name 'replacementSettings'
    replacementSettings = JSON.parse(decodeURIComponent(encodedSettingsString));
    returnInfo = encodedReturnInfoString ? JSON.parse(decodeURIComponent(encodedReturnInfoString)) : [];
  } catch (e) {
    console.error("Could not open the replacement modal. Failed to parse data:", e);
    alert("An error occurred while trying to open the replacement modal.");
    return;
  }

  // --- CRITICAL FIX: Set the global state variables ---
  currentExchangeOrderData = orderData;
  currentReplacementSettings = replacementSettings; // Set the settings globally
  currentReturnInfo = returnInfo; // Set the return info globally

  // Reset step-specific state
  currentReplacementStep = 1;
  selectedReplacementItemIds = [];
  replacementDetails = {};
  replacementAdditionalNotes = '';
  hasAgreedToConditions = false;

  const overlay = document.createElement('div');
  overlay.id = 'replace-modal-overlay';
  overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6); display: flex; justify-content: center; align-items: center; z-index: 1000;';
  overlay.onclick = closeReplaceModal;

  // Pass all data to the main modal function
  overlay.innerHTML = replaceModal(orderData, replacementSettings, returnInfo);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  const notesTextarea = document.getElementById('replacement-notes');
  if (notesTextarea) {
    notesTextarea.addEventListener('input', (e) => {
      replacementAdditionalNotes = e.target.value;
    });
  }
}

function closeReplaceModal(event) {
  const overlay = document.getElementById('replace-modal-overlay');
  if (event && event.target !== overlay && !event.target.closest('.close-btn')) return;

  if (overlay) {
    overlay.remove();
  }
  document.body.style.overflow = 'auto';

  // Clear global state on close
  currentExchangeOrderData = {};
  currentReplacementSettings = {};
  currentReturnInfo = [];
}
function rerenderStep1() {
    document.getElementById('step-content-1-items').innerHTML = getStep1ItemsHTML(
        currentExchangeOrderData, 
        currentReplacementSettings, 
        currentReturnInfo
    );
    document.getElementById('footer-container').innerHTML = getFooterHTML(1);
}

function toggleReplacementItem(checkbox, itemId) {
    if (checkbox.checked) {
        if (!selectedReplacementItemIds.includes(itemId)) {
            selectedReplacementItemIds.push(itemId);
            replacementDetails[itemId] = { reason: 'Defective product', files: [] };
        }
    } else {
        selectedReplacementItemIds = selectedReplacementItemIds.filter(id => id !== itemId);
        delete replacementDetails[itemId];
    }
    rerenderStep1();
}

function handleReasonChange(select, itemId) {
    if (replacementDetails[itemId]) {
        replacementDetails[itemId].reason = select.value;
    }
    rerenderStep1();
}

function handleImageUpload(event, itemId) {
    if (!replacementDetails[itemId] || !event.target.files) return;

    const existingFiles = replacementDetails[itemId].files || [];
    const newFiles = Array.from(event.target.files);

    // --- Limit to 5 images max ---
    if (existingFiles.length + newFiles.length > 5) {
        const allowedCount = 5 - existingFiles.length;

        if (allowedCount <= 0) {
            alert("You can upload a maximum of 5 images only.");
            event.target.value = ""; // reset input
            return;
    }

        alert(`Only ${allowedCount} more image(s) can be uploaded.`);
        replacementDetails[itemId].files.push(...newFiles.slice(0, allowedCount));
    } else {
        replacementDetails[itemId].files.push(...newFiles);
    }

    event.target.value = ""; // reset input after upload
    rerenderStep1();
}


function triggerImageUpload(itemId) {
    document.getElementById(`image-upload-input-${itemId}`).click();
}

function removeImage(itemId, index) {
    if (replacementDetails[itemId]) {
        replacementDetails[itemId].files.splice(index, 1);
    }
    rerenderStep1();
}

function toggleAgreement(checkboxElement) {
    hasAgreedToConditions = checkboxElement.checked;
    if (currentReplacementStep === 2) {
        document.getElementById('footer-container').innerHTML = getFooterHTML(2);
    }
}


function navigateReplacementStep(targetStep) {
  if (currentReplacementStep === 1 && targetStep > 1) {
    if (selectedReplacementItemIds.length === 0) {
      alert("Please select at least one item to replace.");
      return;
    }
    for (const itemId of selectedReplacementItemIds) {
        const details = replacementDetails[itemId];
        if (!details.reason) {
            alert(`Please select a reason for all selected items.`);
            return;
        }
        if ((details.reason === 'Defective product' || details.reason === 'Damaged during shipping') && details.files.length === 0) {
            alert(`Please upload at least 1 image for defective or damaged items.`);
            return;
        }
    }
  } else if (currentReplacementStep === 2 && targetStep > 2) {
    if (!hasAgreedToConditions) {
        alert("Please agree to the replacement conditions and requirements before proceeding.");
        return;
    }
  }

  document.getElementById(`step-content-${currentReplacementStep}`).style.display = 'none';
  document.getElementById(`step-content-${targetStep}`).style.display = 'block';

  if (targetStep === 2) {
    document.getElementById('shipping-summary-container').innerHTML = getStep2ShippingSummaryHTML();
  } else if (targetStep === 3) {
    document.getElementById('confirmation-items-container').innerHTML = getStep3ConfirmationItemsHTML();
    document.getElementById('confirmation-shipping-cost-container').innerHTML = getStep3ShippingCostHTML();
  }

  document.getElementById('stepper-container').innerHTML = getStepperHTML(targetStep);
  document.getElementById('footer-container').innerHTML = getFooterHTML(targetStep);
  currentReplacementStep = targetStep;
}

function getStepperHTML(step) {
  const steps = ['Select Items', 'Conditions', 'Confirm'];
  let html = '<div class="Axentra-ReplaceStepper" style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 0 40px; box-sizing: border-box;">';
  for (let i = 1; i <= 3; i++) {
    const isCompleted = i < step;
    const isActive = i === step;
    const circleColor = isCompleted ? '#22c55e' : (isActive ? '#3b82f6' : '#d1d5db');
    const textColor = isCompleted || isActive ? '#111827' : '#6b7280';
    const fontWeight = isActive ? '600' : '500';
    html += `
        <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 24px; height: 24px; border-radius: 50%; background-color: ${circleColor}; color: white; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600;">
                ${isCompleted ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big w-5 h-5 text-green-600 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>' : i}
            </div>
            <span class="Axentra-ReplaceStepperContent" style="color: ${textColor}; font-weight: ${fontWeight}; font-size: 14px;">${steps[i-1]}</span>
        </div>
    `;
    if (i < 3) {
      html += '<div style="flex-grow: 1; height: 2px; background-color: #e5e7eb; margin: 0 16px;"></div>';
    }
  }
  html += '</div>';
  return html;
}

function getFooterHTML(step) {
  const backButton = `<button class="Axentra-returnclose" onclick="navigateReplacementStep(${step - 1})" style="cursor: pointer;">Back</button>`;
  const submitButton = `<button class="Axentra-ReturnBtn" onclick="submitReplacement()" style=" cursor: pointer;">Submit Request</button>`;

  switch (step) {
    case 1:
      // FIXED: Condition now checks the array length
      const isStep1NextDisabled = selectedReplacementItemIds.length === 0;
      const nextButtonStep1 = `<button class="Axentra-ReturnBtn" onclick="navigateReplacementStep(2)" ${isStep1NextDisabled ? 'disabled' : ''} style="">Next</button>`;
      return `<div style="display: flex; justify-content: flex-end; gap: 8px;">${nextButtonStep1}</div>`;
    case 2:
      const isStep2NextDisabled = !hasAgreedToConditions;
      const nextButtonStep2 = `<button class="Axentra-ReturnBtn" onclick="navigateReplacementStep(3)" ${isStep2NextDisabled ? 'disabled' : ''} style="">Next</button>`;
      return `<div style="display: flex; justify-content: space-between; width: 100%;">${backButton}${nextButtonStep2}</div>`;
    case 3:
      return `<div style="display: flex; justify-content: space-between; width: 100%;">${backButton}${submitButton}</div>`;
    default:
      return '';
  }
}

function getReasonAndUploadHTML(itemId) {
  const replacementReasons = ["Defective product", "Damaged during shipping", "Wrong size/color received", "Item doesn't match description", "Changed my mind", "Other"];
  const currentDetail = replacementDetails[itemId] || { reason: '', files: [] };
  const reasonsHTML = replacementReasons.map(reason => `<option value="${reason}" ${reason === currentDetail.reason ? 'selected' : ''}>${reason}</option>`).join('');
  const showUploader = (currentDetail.reason === 'Defective product' || currentDetail.reason === 'Damaged during shipping');
  const fileCount = currentDetail.files.length;
  const thumbnailsHTML = currentDetail.files.map((file, index) => `
    <div style="position: relative; width: 60px; height: 60px;">
        <img src="${URL.createObjectURL(file)}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px; border: 1px solid #e5e7eb;">
        <button onclick="event.stopPropagation(); removeImage('${itemId}', ${index})" style="position: absolute; top: -5px; right: -5px; width: 20px; height: 20px; border-radius: 50%; background-color: #ef4444; color: white; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">×</button>
    </div>`).join('');

  return `
    <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;" onclick="event.stopPropagation()">
        <label for="replacement-reason-select-${itemId}" style="display: block; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 8px;">Reason for replacement:</label>
        <select id="replacement-reason-select-${itemId}" onchange="handleReasonChange(this, '${itemId}')" style="width: 100%; box-sizing: border-box; border: 1px solid #d1d5db; border-radius: 6px; padding: 8px 12px; font-size: 14px; background-color: white; cursor: pointer;">
            ${reasonsHTML}
        </select>
        <div id="image-upload-section-${itemId}" style="margin-top: 16px; border: 1px solid #fca5a5; background-color: #fff1f2; border-radius: 8px; padding: 16px; display: ${showUploader ? 'block' : 'none'};">
            <input type="file" id="image-upload-input-${itemId}" multiple accept="image/*" style="display: none;" onchange="handleImageUpload(event, '${itemId}')">
            <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #991b1b;">Upload Images (Required)</h4>
            <div id="thumbnail-preview-container-${itemId}" style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">${thumbnailsHTML}</div>
            <button onclick="triggerImageUpload('${itemId}')" style="display: inline-flex; align-items: center; gap: 8px; border: 1px solid #e5e7eb; background-color: white; padding: 8px 12px; border-radius: 6px; cursor: pointer;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                <span style="font-size: 14px; font-weight: 500; color: #374151;">Add Images</span>
            </button>
            <span style="font-size: 12px; color: ${fileCount > 0 ? '#166534' : '#ef4444'}; margin-left: 12px;">${fileCount} image(s) uploaded</span>
        </div>
    </div>`;
}
function getReplacementWindowForOrder(orderData, replacementSettings) {
    // Example logic, adapt to your settings structure
    console.log("replace Window", orderData, replacementSettings);
    const days = replacementSettings?.replacement?.basic_settings?.replacement_window;
    return parseInt(days, 10) || 0; // Return 0 if not found
}
function getStep1ItemsHTML(orderData, replacementSettings, returnInfo) {
  const initiatedVariantIds = new Set();
  console.log("ReplacementSet", replacementSettings);
  // A. Consolidate all variant IDs from existing return/exchange/replacement requests
  (returnInfo || []).forEach(request => {
    if (request?.order_details) {
        const allInitiatedItems = [
            ...(request.order_details.returned_items || []),
            ...(request.order_details.exchanged_items || []),
            ...(request.order_details.replaced_items || []) // Include replaced items
        ];
        allInitiatedItems.forEach(initiatedItem => {
            if (initiatedItem && typeof initiatedItem.variant_id !== 'undefined') {
                initiatedVariantIds.add(initiatedItem.variant_id);
            }
        });
    }
  });

  const replacementWindowDays = getReplacementWindowForOrder(orderData, replacementSettings);

  return orderData.items.map(item => {
    // B. Check eligibility for each item
    const numericVariantId = Number(String(item.variantId).split('/').pop());
    const isAlreadyInitiated = initiatedVariantIds.has(numericVariantId);

    const orderDate = new Date(orderData.orderTime);
    const currentDate = new Date();
    const expirationDate = new Date(orderDate);
    expirationDate.setDate(expirationDate.getDate() + replacementWindowDays);
    const isWithinWindow = replacementWindowDays > 0 && currentDate <= expirationDate;
    
    let isEligible = false;
    let eligibilityText = '';

    if (isAlreadyInitiated) {
      isEligible = false;
      eligibilityText = 'Request Initiated'; // More generic text
    } else if (isWithinWindow) {
      isEligible = true;
      eligibilityText = 'Eligible';
    } else {
      isEligible = false;
      eligibilityText = 'Window Expired';
    }

    const isSelected = selectedReplacementItemIds.includes(item.id);
    const borderColor = isSelected ? '#3b82f6' : '#e5e7eb';
    const checkmarkSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    const eligibilityColor = isEligible ? '#dcfce7' : '#fee2e2';
    const eligibilityTextColor = isEligible ? '#166534' : '#991b1b';
    const eligibilityIcon = isEligible ? '✔' : '✖';
    const containerStyle = !isEligible ? 'opacity: 0.6; background-color: #f9fafb; cursor: not-allowed;' : 'background-color: white; cursor: pointer;';

    return `
      <div onclick="${isEligible ? `document.getElementById('checkbox-${item.id}').click()` : ''}" style="border: 2px solid ${borderColor}; border-radius: 12px; padding: 16px; transition: border-color 0.2s; ${containerStyle}">
        <div style="display: flex; gap: 16px; align-items: flex-start;">
            <div style="flex-shrink: 0; position: relative; width: 20px; height: 20px; margin-top: 5px;">
                <input type="checkbox" id="checkbox-${item.id}" onchange="toggleReplacementItem(this, '${item.id}')" onclick="event.stopPropagation()" style="opacity: 0; position: absolute;" ${!isEligible ? 'disabled' : ''} ${isSelected ? 'checked' : ''}>
                <div style="width: 20px; height: 20px; border-radius: 6px; border: 2px solid ${isSelected ? '#3b82f6' : '#9ca3af'}; background-color: ${isSelected ? '#3b82f6' : 'white'}; color: white; display: flex; align-items: center; justify-content: center;">
                  ${isSelected ? checkmarkSVG : ''}
                </div>
            </div>
            <img src="${item.image}" alt="${item.title}" style="width: 60px; height: 60px; border-radius: 6px; object-fit: cover;">
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px;">
                <div style="font-weight: 500; color: #111827; font-size: 14px; margin-bottom: 4px;">${item.title}</div>
                <div style="font-size: 12px; color: #6b7280; margin-bottom: 4px;">${item.variantTitle || 'Standard'} • Qty: ${item.quantity}</div>
                <div style="font-size: 12px; font-weight: 500; color: #111827;">${item.price} each</div>
            </div>
            <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
                <div style="font-size: 12px; font-weight: 500; background-color: ${eligibilityColor}; color: ${eligibilityTextColor}; padding: 4px 10px; border-radius: 16px;">${eligibilityIcon} ${eligibilityText}</div>
                <span style="font-size: 12px; color: #6b7280;">Window: ${replacementWindowDays} days</span>
            </div>
        </div>
        ${isSelected ? getReasonAndUploadHTML(item.id) : ''}
      </div>
    `;
  }).join('');
}

function getStep2ShippingSummaryHTML() {
    // This function now returns a static HTML block that matches the new design.
    // The previous bulleted list format has been replaced with styled paragraphs.
    return `
        <style>
            .Axentra_replace_container {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                color: #212529; /* Dark text color */
                font-size: 14px;
                line-height: 1.6;
            }
            .Axentra_replace_section {
                margin-top: 24px;
            }
            .Axentra_replace_heading {
                font-size: 14px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 16px;
                color: #343a40;
            }
            .Axentra_replace_item {
                margin: 0 0 8px 0;
                padding: 0;
                color: #495057; /* Softer text color for items */
            }
            .Axentra_replace_info-box {
                display: flex;
                align-items: flex-start;
                padding: 12px 16px;
                background-color: #f1f3f5; /* Light grey background */
                border-radius: 6px;
                color: #495057;
            }
            .Axentra_replace_info-icon {
                 margin-right: 12px;
                 color: #868e96; /* Grey for the icon */
                 flex-shrink: 0;
                 margin-top: 3px;
            }
        </style>
        <div class="Axentra_replace_container">
            <div class="Axentra_replace_info-box">
                <div class="Axentra_replace_info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    </svg>
                </div>
                <span>Please review the following conditions carefully before proceeding with your replacement request.</span>
            </div>
            
            <div class="Axentra_replace_section">
                <div class="Axentra_replace_heading">Replacement Eligibility</div>
                <p class="Axentra_replace_item">Product must be in original condition with all tags and packaging</p>
                <p class="Axentra_replace_item">Replacement request must be made within 30 days of delivery</p>
                <p class="Axentra_replace_item">Product must not show signs of excessive use or damage</p>
                <p class="Axentra_replace_item">Original receipt or order confirmation required</p>
            </div>

            <div class="Axentra_replace_section">
                <div class="Axentra_replace_heading">Replacement Process</div>
                <p class="Axentra_replace_item">Processing time: 2-3 business days</p>
                <p class="Axentra_replace_item">Replacement shipping: 3-5 business days</p>
                <p class="Axentra_replace_item">You will receive a prepaid return label via email</p>
                <p class="Axentra_replace_item">Original item must be returned within 14 days of replacement approval</p>
            </div>
        </div>
    `;
}

function getStep3ConfirmationItemsHTML() {
    return selectedReplacementItemIds.map(itemId => {
        const item = currentExchangeOrderData.items.find(i => i.id === itemId);
        const details = replacementDetails[itemId];
        if (!item || !details) return '';
        return `
            <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; display: flex; gap: 16px; align-items: center;">
                <img src="${item.image}" alt="${item.title}" style="width: 60px; height: 60px; border-radius: 6px; object-fit: cover;">
                <div style="flex: 1;">
                   <div style="font-weight: 500; color: #111827; font-size: 14px; margin-bottom: 4px;">${item.title}</div>
                              <div style="font-size: 12px; color: #6b7280; margin-bottom: 4px;">${item.variantTitle || 'Standard'} • Qty: ${item.quantity}</div>
                              <div style="font-size: 12px; font-weight: 500; color: #111827;">${item.price} each</div>
                    <div style="font-size: 12px; color: #6b7280; margin-top: 4px;">Reason: ${details.reason}</div>
                </div>
            </div>`;
    }).join('');
}

function getStep3ShippingCostHTML() {
    const hasFreeShippingReason = selectedReplacementItemIds.some(id => {
        const reason = replacementDetails[id]?.reason;
        return reason === 'Defective product' || reason === 'Damaged during shipping';
    });
    const cost = hasFreeShippingReason ? '$0.00' : '$12.99';
    return `
       `;
}

// --- SUBMISSION ---
async function submitReplacement() {
  console.log("Submit button clicked. Preparing data for API submission...");

  // Assume the replacement modal has a submit button with this ID
  const submitButton = document.getElementById('submit-replacement-button');
  if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
  }

  try {
    // --- 1. GATHER DATA FROM THE FORM ---
    if (selectedReplacementItemIds.length === 0) {
        // Use the existing toast function for validation feedback
        createStatusToast("Replacement", "Please select at least one item to replace.", "error");
        // We throw an error to be caught by the catch/finally block to re-enable the button
        throw new Error("Validation failed: No items selected.");
    }
    
    const shopDomain = typeof Shopify !== 'undefined' ? Shopify.shop : null;
  const orderId = currentExchangeOrderData.orderId || null;
  const orderNumber = currentExchangeOrderData.orderNumber || null;

    // customerId is assumed to be available in the global scope, like in the reference function

    // Gather details for each selected item, including the reason for replacement
    const itemsToReplace = selectedReplacementItemIds.map(itemId => {
        const details = replacementDetails[itemId] || {}; // Default to empty object if no details
        const itemData = currentExchangeOrderData.items.find(i => i.id.toString() === itemId.toString());
        return {
            line_item_id: itemId,
            title: itemData ? itemData.title : 'Unknown Item',
            quantity: itemData ? itemData.quantity : 1,
            reason: details.reason || "No reason provided", // Ensure reason is always present
        };
    });
    
    // This is equivalent to 'additionalDetails' in the exchange function
    const additionalNotes = document.getElementById('replacement-additional-notes')?.value || "";

    // --- 2. ASSEMBLE DATA FOR FORMDATA (within a 'description' object) ---
    const descriptionObject = {
      replacement_items: itemsToReplace,
      additional_notes: additionalNotes || "No additional notes provided.",
    };

    // --- 3. CREATE AND POPULATE FORMDATA ---
    const formData = new FormData();
    formData.append('shop', shopDomain || '');
    formData.append('order_id', orderId || '');
    formData.append('customer_id', customerId || '');
    // Send the array of selected line item IDs, matching the 'exchange' function
    formData.append('product_ids', JSON.stringify(selectedReplacementItemIds));
    // Send the structured data as a single stringified JSON object
    formData.append('description', JSON.stringify(descriptionObject));

    // Append files for each item, similar to the original logic but more robust
    let fileCounter = 1;
    selectedReplacementItemIds.forEach(itemId => {
        const details = replacementDetails[itemId];
        if (details && details.files && details.files.length > 0) {
            details.files.forEach(file => {
                // The API handler will receive file1, file2, etc.
                formData.append(`file${fileCounter}`, file);
                fileCounter++;
            });
        }
    });
    
    console.log("--- Submitting Replacement FormData to API ---");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    console.log("------------------------------------------");

    // --- 4. SUBMIT THE DATA VIA FETCH ---
    const response = await fetch('https://omc.axentraos.co.in/utility/replacement_request_handler/', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Failed to parse error response.' }));
      throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorData.message || 'No details'}`);
    }

    const result = await response.json();

    // --- 5. HANDLE SUCCESS ---
    console.log("API Success Response:", result);
    createStatusToast("Replacement", "Your replacement request has been submitted successfully!", "success");
    // Reload the page to reflect changes, consistent with the exchange function's behavior
    setTimeout(() => window.location.reload(), 500); 
    closeReplaceModal(); // Close modal on success

  } catch (error) {
    // --- 6. HANDLE ERRORS ---
    // Don't show a toast if it's just the validation error from the top
    if (error.message !== "Validation failed: No items selected.") {
        console.error("Failed to submit replacement request:", error);
        createStatusToast("Replacement", "Your replacement request failed. Please try again.", "error");
        // Optionally reload on failure as well
        setTimeout(() => window.location.reload(), 500);
        closeReplaceModal();
    }
    
  } finally {
    // --- 7. RE-ENABLE THE BUTTON ---
    if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Request';
    }
  }
}

// --- MAIN MODAL ASSEMBLY ---
// FIX 3: Standardize parameter name in `replaceModal` for clarity
function replaceModal(orderData, replacementSettings, returnInfo) {
  const step1HTML = `
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
        <h3 style="margin:0; font-size: 16px; font-weight: 600; color: #374151;">Select items eligible for replacement</h3>
    </div>
    <div id="step-content-1-items" style="display: flex; flex-direction: column; gap: 12px;">
        ${getStep1ItemsHTML(orderData, replacementSettings, returnInfo)}
    </div>
    <div style="margin-top: 24px;">
      <label for="replacement-notes" style="display: block; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 8px;">Additional Notes (Optional)</label>
      <textarea id="replacement-notes" placeholder="Please provide any additional details..." rows="4" style="width: 100%; box-sizing: border-box; border-radius: 6px; border: 1px solid #d1d5db; padding: 8px 12px; font-size: 14px; resize: vertical;"></textarea>
    </div>`;

    // The rest of the `replaceModal` function remains the same. I'm including the full version below.

    const step2HTML = `
    <div style="font-size: 14px; color: #374151; line-height: 1.6; display: flex; flex-direction: column; gap: 24px;">
        <div style="margin: 0; font-size: 16px; font-weight: 600;">Review replacement conditions and requirements</div>
        <div id="shipping-summary-container"></div>
        <label style="display: flex; align-items: center; gap: 12px; cursor: pointer; user-select: none;">
            <input type="checkbox" onchange="toggleAgreement(this)" style="width: 18px; height: 18px; accent-color: #0d6efd; cursor: pointer;">
            <span style="font-weight: 500;">I have read and agree to the replacement conditions.</span>
        </label>
    </div>`;
    const step3HTML = `
    <div style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #374151; display: flex; align-items: center; gap: 8px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big w-5 h-5 text-green-600 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
        Confirm your replacement request
    </div>
    <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 4px;">
        <div style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #166534;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big w-5 h-5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>Ready to Submit</div>
        <div style="font-size: 14px; color: #166534;">Your replacement request is ready to be submitted. Please review the details below.</div>
    </div>
    <div id="confirmation-items-container" style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;"></div>
    <div id="confirmation-shipping-cost-container" style="margin-top: 24px; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; background-color: #f9fafb; display: flex; justify-content: space-between; align-items: center;"></div>`;

    return `
    <div style="background: #f9fafb; border-radius: 12px; max-width: 672px; width: 93%; max-height: 78vh; overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);" onclick="event.stopPropagation()">
        <div style="padding: 16px 24px; border-bottom: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center; background: white;">
            <div style="font-size: 18px; font-weight: 600; color: #111827; margin: 0;">Replace Items - Order ${orderData.orderNumber}</div>
             <button onclick="closeReplaceModal()" style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 50%; border: none; background: none; cursor: pointer;">
        <svg class="xircls_svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </button>
        </div>
        <div id="stepper-container" style="padding: 24px; border-bottom: 1px solid #e5e7eb; background: white;">${getStepperHTML(1)}</div>
        <div style="padding: 24px; overflow-y: auto; flex-grow: 1;">
            <div id="step-content-1">${step1HTML}</div>
            <div id="step-content-2" style="display: none;">${step2HTML}</div>
            <div id="step-content-3" style="display: none;">${step3HTML}</div>
        </div>
        <div id="footer-container" style="padding: 16px 24px; border-top: 1px solid #e5e7eb; background: white;">${getFooterHTML(1)}</div>
    </div>`;
}
document.addEventListener("DOMContentLoaded", async function () {

    // const menuElementMobile = document.getElementById("xircls-mobile-menu");

    // if (menuElementMobile) {
    //     menuElementMobile.innerHTML = "";

    //     menuOptions.forEach((item, index) => {
    //         const divElement = document.createElement("div");
    //         divElement.className = "xircls-menu-item";
    //         // Ensure icons are SVGs or use appropriate tags if they are font icons
    //         divElement.innerHTML = `
    //             <span class="xircls-menu-icon">${item.icon}</span>
    //             <span class="xircls-menu-label">${item.mobileLabel}</span>
    //         `;
    //         divElement.onclick = () => {
    //             console.log(`Mobile Menu: Cliscked on ${item.heading}, index ${index}`);
    //             window.scrollTo({
    //                 top: 0,
    //                 behavior: 'smooth' // Optional for smooth scrolling
    //             });
    //             if (typeof renderContent === 'function') {
    //                 renderContent(index); // Ensure this maps to the correct content
    //             }
    //             setActiveMenuItem(index);
    //         };
    //         menuElementMobile.appendChild(divElement);
    //     });
    // }


    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

});

attachReorderEventListeners();
// renderBranding()
renderDashboard()
updateProfile(cardData)
updateOrdersContainer(customerOrders)
// fetchWishlistOnReload(customerId)
renderRecentlyViewed()
renderSubscription()
updateSecurityContainer()
updateOffersContainer();
fetchAllLoyaltyPointsHistory()
setTimeout (() => {
  renderLoyaltyProgram() 
  }, 1000)

if (window.innerWidth <= 768) {
  renderMobileMenu();
  
} else {
  renderMenu();
}



/// SUPPORT TICKET CODE

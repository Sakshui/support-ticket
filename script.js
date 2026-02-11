//OHCUST.JS
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
async function FetchLoyaltySettings() {


}


function renderCalendarUI(product_name) {
  const modal = document.createElement("div");
  modal.innerHTML = `
      <div style="font-family: var(--font-family); position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center; z-index: 1000;">
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
    return document.getElementById("MainContent") || document.getElementById("main");
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
console.log("ohcust.js executing........");
const newBase = "api.xircles.in";
const countries = "/country-details/";
const getState = "/state-details/";
const getCities = "/city-details/";
const baseUrl = "api.xircles.in"
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
  ${isSuccess
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
  const url = `https://${baseUrl}/api/v1/get_shopify_token/`;

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
async function fetchWishlistOnReload() {
  console.log("fetch Wish list On Reload calling");

  try {
    console.log("customerId:", customerId);
    console.log("Shop:", Shopify.shop);

    const metafieldResponse = await fetch(
      `https://${baseUrl}/api/v1/get_metafield/?customerId=${customerId}&shop=${Shopify.shop}&app=oh_my_customer`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
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
        const wishlist = JSON.parse(existingMetafield.value);
        renderWishlist(wishlist); // Call render Wishlist to display the wishlist
        return { id: existingMetafield.id, wishlist: wishlist };
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

// Save wishlist to metafield or sessionStorage
async function saveWishlist(wishlist, metafieldId, productId) {
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

      const url = `https://${baseUrl}/api/v1/update_metafield/`;

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

async function syncSessionWishlistToMetafield() {
  const sessionWishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];
  console.log(
    "Syncing wishlist from sessionStorage to metafield:",
    sessionWishlist
  );

  if (sessionWishlist.length > 0 && customerId) {
    try {
      // Fetch existing wishlist from metafield for logged-in user
      const { id: metafieldId, wishlist: existingWishlist } =
        await fetchWishlist();

      // Combine sessionStorage wishlist with the existing wishlist (if any)
      // No need to stringify and parse objects again; simply concatenate the arrays
      const combinedWishlist = [...existingWishlist, ...sessionWishlist];

      // Save the combined wishlist to the metafield
      await saveWishlist(combinedWishlist, metafieldId);

      // Clear the sessionStorage wishlist after syncing
      sessionStorage.removeItem("wishlist");
      console.log(
        "Session wishlist successfully synced to metafield. Cleared sessionStorage."
      );
      fetchWishlistOnReload();
    } catch (error) {
      console.error("Error syncing wishlist to metafield:", error);
    }
  }
}

async function updateCustomerDetails(data) {
  document
    .querySelectorAll(".modal")
    .forEach((modal) => (modal.style.display = "none"));

  try {
    const response = await fetch(`https://${baseUrl}/api/v1/update-customer/`, {
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

    createStatusToast(
      message_heading,
      message_subheading,
      result.customer ? "success" : "error"
    );
  } catch (error) {
    // document.getElementById('response-message').innerText = 'Error: ' + error.message;
    createStatusToast(
      "Profile Update Unsuccessful",
      "Something went wrong and your changes weren’t saved. Please try again.",
      "error"
    );
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
      `https://${baseUrl}/api/v1/update-customer-address/`,
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
      ? {
        text: "Address Updated",
        subtext:
          "Your changes have been saved! Your updated details are now active on your account.",
        type: "success",
      }
      : {
        text: "Couldn’t Update Address",
        subtext:
          "We couldn’t save your address. Please check the details and try again.",
        type: "error",
      };
    createStatusToast(message.text, message.subtext, message.type);
  } catch (error) {
    // document.getElementById('response-message').innerText = 'Error: ' + error.message;
    createStatusToast(
      "Couldn’t Update Address",
      "We couldn’t save your address. Please check the details and try again.",
      "error"
    );
  } finally {
    setTimeout(() => window.location.reload(), 500);
  }
}

async function addCustomerAddress(data) {
  document
    .querySelectorAll(".modal")
    .forEach((modal) => (modal.style.display = "none"));
  try {
    const response = await fetch(
      `https://${baseUrl}/api/v1/add_customer_address/`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );

    const result = await response.json();

    let message = "Address details are Invalid!";
    let messageType = "error";

    if (result.message) {
      const messageData = JSON.parse(result.message);
      if (messageData.customer_address && messageData.customer_address.id) {
        message = "Address Updated";
        messageType = "success";
      }

      // ✅ Return parsed messageData to caller
      return messageData;
    }

    return null;
  } catch (error) {
    console.error("Request failed", error);
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
      `https://${baseUrl}/api/v1/delete_customer_address/`,
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

    createStatusToast(
      message_heading,
      message_subheading,
      response.ok ? "success" : "error"
    );
  } catch (error) {
    createStatusToast(
      `Address Delete Fail`,
      "We couldn’t delete your address. Please check the details and try again.",
      "error"
    );
    console.error("Error:", error);
  } finally {
    setTimeout(() => window.location.reload(), 500);
  }
}

async function cancelOrder(order_id) {
  // === Step 1: Create & show confirmation modal ===
  const existingModal = document.getElementById("cancelOrderModal");
  if (existingModal) existingModal.remove();

  const modal = document.createElement("div");
  modal.id = "cancelOrderModal";
  modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  `;

  modal.innerHTML = `
    <div id="cancelOrderModalContent" style="
      position: relative;
      background: white;
      border-radius: var(--card-border-radius, 8px);
      max-width: 90%;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      padding: 24px;
      font-family: var(--secondaryFontFamily, sans-serif);
      text-align: center;
    ">
      <button id="modalCloseX" style="
        position: absolute;
        top: 12px;
        right: 12px;
        background: transparent;
        border: none;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        color: #999;
      " aria-label="Close modal">&times;</button>

      <h2 style="font-size: 20px; margin-bottom: 16px;">Cancel Order</h2>
      <p style="font-size: 14px; color: #555; margin-bottom: 24px;">
        Are you sure you want to cancel this order? This action cannot be undone.
      </p>
      <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
        <button id="confirmCancelBtn" style="
          background-color: var(--btn-background-color, #d32f2f);
          color: var(--btn-text-color, white);
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        ">Yes, Cancel</button>
        <button id="closeCancelBtn" style="
          background-color: #ccc;
          color: #333;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        ">No</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const closeModal = () => modal.remove();

  // Close modal on "No", "X", or outside click
  document.getElementById("closeCancelBtn").onclick = closeModal;
  document.getElementById("modalCloseX").onclick = closeModal;
  modal.addEventListener("click", function (e) {
    const content = document.getElementById("cancelOrderModalContent");
    if (!content.contains(e.target)) closeModal();
  });

  // === Step 2: Wait for confirmation ===
  return new Promise((resolve) => {
    document.getElementById("confirmCancelBtn").onclick = async function () {
      closeModal();

      // === Step 3: Proceed with API Call after confirmation ===
      try {
        const formData = new FormData();
        formData.append("shop", Shopify.shop);
        formData.append("order_id", order_id);

        const response = await fetch(
          `https://omc.axentraos.co.in/utility/cancel_order/`,
          {
            method: "POST",
            body: formData,
          }
        );

        const message = response.ok
          ? "Order Cancelled successfully!"
          : "Failed to Cancel Order!";

        const message_subheading = response.ok
          ? "Your Order has been Cancelled successfully. You can view updated order status under Orders Section."
          : "We couldn’t cancel your order. Try again or contact support for help.";

        createStatusToast(
          message,
          message_subheading,
          response.ok ? "success" : "error"
        );
      } catch (error) {
        createStatusToast(
          "Unable to Cancel Order",
          "We couldn’t cancel your order. Try again or contact support for help.",
          "error"
        );
        console.error("Request failed:", error);
      } finally {
        setTimeout(() => window.location.reload(), 500);
        resolve(); // in case something depends on it
      }
    };
  });
}


async function addToCart(variantId, productId) {
  showLoader();
  const checkoutUrl = "/cart/add.js"; // Shopify's cart add endpoint
  console.log("Adding to cart:", { variantId, productId });

  // Create the data to be sent in the request
  const data = new URLSearchParams({
    form_type: "product",
    utf8: "✓",
    id: variantId,
    "product-id": productId,
    "section-id": "template--17264040575126__main",
    sections: "cart-drawer,cart-icon-bubble",
    sections_url: window.location.pathname,  // dynamically set
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

    window.location.href = "/cart"; // Redirect to the cart page if successful
  } catch (error) {
    console.error("Error adding to cart:", error);
    createStatusToast(
      "Cart Update Fail",
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
      id: variantId,
      "product-id": productId,
      "section-id": "template--17264040575126__main",
      sections: "cart-drawer,cart-icon-bubble",
      sections_url: window.location.pathname,  // dynamically set
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
    createStatusToast(
      "Cart Update Fail",
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
    button.addEventListener("click", async function () {
      const rawData = this.getAttribute("data-order");
      console.log("Raw data for reorder:", rawData);

      try {
        clearCart(); // Make sure this is synchronous or awaited properly

        if (!rawData || typeof rawData !== "string") {
          console.error("Invalid or empty JSON data:", rawData);
          return;
        }

        const lineItems = JSON.parse(rawData);
        console.log("Parsed line items:", lineItems);

        if (!Array.isArray(lineItems) || lineItems.length === 0) {
          console.error("No valid line items found:", lineItems);
          return;
        }

        showLoader();

        for (const item of lineItems) {
          console.log(`Adding item: ${item.title} (Variant ID: ${item.variantId}, Quantity: ${item.quantity})`);

          const response = await fetch("/cart/add.js", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              id: item.variantId,
              quantity: item.quantity,
            }),
          });

          if (!response.ok) {
            const errorResponse = await response.json();
            console.error(`Error adding item to cart: ${item.title}`, errorResponse);
          } else {
            console.log(`Successfully added ${item.title}`);
          }
        }

        // ✅ Add cart attribute (e.g., tag for tracking reorder source)
        await fetch("/cart/update.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            attributes: {
              reorder_source: "customer_accounts_by_axentra",
              campaign: "reorder"
            },
          }),
        });



        // ✅ Confirm cart has items before redirecting
        const cartResponse = await fetch("/cart.js");
        const cartData = await cartResponse.json();

        if (!cartData.items || cartData.items.length === 0) {
          console.error("Cart is empty after adding items. Aborting redirect.");
          hideLoader();
          return;
        }

        console.log("Cart ready. Redirecting to checkout...");

        // ✅ Small delay for safety
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

attachReorderEventListeners();
async function removeFromWishlist(itemId) {
  console.log("itemId to remove:", itemId);
  try {
    // Fetch wishlist data to get the current items
    const response = await fetch(
      `https://${baseUrl}/api/v1/get_metafield/?customerId=${customerId}&shop=${Shopify.shop}&app=oh_my_customer`,
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
    await fetch(`https://${baseUrl}/api/v1/update_metafield/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMetafield),
    });
    console.log("updated wishlist meta field");
    createStatusToast(
      `Removed from Wishlist`,
      `This item has been successfully removed and is no longer saved in your wishlist.`,
      "success"
    );
    // Re-render the wishlist after updating

    renderWishlist(updatedWishlist);
  } catch (error) {
    createStatusToast(
      "Wishlist Update Failed",
      "We couldn’t update your wishlist. Please try again.",
      "error"
    );
  } finally {
    setTimeout(() => window.location.reload(), 500);
  }
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
      createStatusToast(
        "Upload Failed",
        "The image exceeds the maximum file size. Please upload a file smaller than 45KB.",
        "error"
      );
      event.target.value = ""; // Reset file input
      return;
    }

    let reader = new FileReader();
    reader.onload = function (e) {
      selectedImage = e.target.result;
      if (selectedImage) {
        setImage();
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

//LOAD-STYLES

var styles_applied = false;
var currObj = {
  font_family: "",
  secondaryFontFamily: "",
  box_shadow: "",
  profile_color: "",
  main_background_color: "",
  content_background_color: "",
  heading_color: "",
  heading_border_color: "",
  menu_items_color: "",
  menu_heading_text_color: "",
  menu_items_select_color: "",
  menu_items_background_color: "",
  menu_background_color: "",
  card_heading_color: "",
  card_label_color: "",
  card_text_color: "",
  card_text_background_color: "",
  card_background_color: "",
  card_font_family: "",
  card_border_radius: "",
  sidenavbtnhoverbackground: "",
  card_border_size: "",
  card_border_color: "",
  button_background_color: "",
  button_background_hover_color: "",
  button_text_color: "",
  button_text_hover_color: "",
  button_border_color: "",
  profile_border_color: '',
  profile_border_size: '',
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
// Step 1: Create global arrays for each key
let myOrders = [];
let myWishlist = [];
let recentlyViewed = [];
let myProfile = [];
let changePassword = [];
let logout = [];
let dashboard = [];
let cancelMapping = {};
let trackOrderSettings = null;
let xirclsBranding = {};
let LoyaltySettings = {};
let loyaltyCurrency = "";
let cancelOrderData = false;
function loadFont(fontName) {
  const fontLink = document.createElement("link");
  fontLink.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(
    " ",
    "+"
  )}&display=swap`;
  fontLink.rel = "stylesheet";
  document.head.appendChild(fontLink);
  console.log("font loaded ==>", fontName, fontLink);
}
function applyTheme(theme) {
  console.log(theme, "=====> theme");
  document.documentElement.style.setProperty(
    "--heading-color",
    theme.heading_color
  );
  document.documentElement.style.setProperty(
    "--border-color",
    theme.border_color
  );
  document.documentElement.style.setProperty(
    "--card-border-radius",
    theme.card_border_radius
  );
  document.documentElement.style.setProperty(
    "--card-border-size",
    theme.card_border_size
  );
  document.documentElement.style.setProperty(
    "--background-color",
    theme.main_background_color
  );
  document.documentElement.style.setProperty('--menu_heading_text_color', theme.menu_heading_text_color);
  document.documentElement.style.setProperty(
    "--card-background-color",
    theme.card_background_color
  );
  document.documentElement.style.setProperty(
    "--card-text-color",
    theme.card_text_color
  );
  document.documentElement.style.setProperty(
    "--card-label-color",
    theme.card_label_color
  );
  document.documentElement.style.setProperty(
    "--card-border-color",
    theme.card_border_color
  );
  document.documentElement.style.setProperty(
    "--card-heading-color",
    theme.card_heading_color
  );
  document.documentElement.style.setProperty(
    "--profile-background-color",
    theme.profile_color
  );
  document.documentElement.style.setProperty('--profile_border_color', theme.profile_border_color);
  document.documentElement.style.setProperty('--profile_border_size', theme.profile_border_size);
  document.documentElement.style.setProperty(
    "--font-family",
    theme.font_family
  );
  document.documentElement.style.setProperty("--secondaryFontFamily", theme.secondaryFontFamily);
  document.documentElement.style.setProperty(
    "--card-font-family",
    theme.card_font_family
  );
  document.documentElement.style.setProperty(
    "--container-two-background-color",
    theme.content_background_color
  );
  document.documentElement.style.setProperty(
    "--container-one-background-color",
    theme.menu_background_color
  );
  document.documentElement.style.setProperty(
    "--main-heading-border-color",
    theme.heading_border_color
  );
  document.documentElement.style.setProperty(
    "--menu-items-color",
    theme.menu_items_color
  );
  document.documentElement.style.setProperty(
    "--menu-items-select-color",
    theme.menu_items_select_color
  );
  document.documentElement.style.setProperty(
    "--menu-items-background-color",
    theme.menu_items_background_color
  );
  document.documentElement.style.setProperty(
    "--card-text-background-color",
    theme.card_text_background_color
  );
  document.documentElement.style.setProperty(
    "--btn-background-color",
    theme.button_background_color
  );
  document.documentElement.style.setProperty("--sidenavbtnhoverbackground", theme.sidenavbtnhoverbackground);
  document.documentElement.style.setProperty(
    "--btn-text-color",
    theme.button_text_color
  );
  document.documentElement.style.setProperty(
    "--btn-text-hover-color",
    theme.button_text_hover_color
  );
  document.documentElement.style.setProperty(
    "--btn-background-hover-color",
    theme.button_background_hover_color
  );
  document.documentElement.style.setProperty(
    "--btn-border-color",
    theme.button_border_color
  );
  document.documentElement.style.setProperty('--uppercase', theme.uppercaseHeadings);

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
  try {
    const shop = Shopify.shop;
    const url = `https://loyalty.axentraos.co.in/api/v1/rules/get_loyalty_settings/?shop=${shop}`;
    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();
    console.log(data, "lllooo")
    LoyaltySettings = data;
    console.log(LoyaltySettings, "LoyaltySettings")
    loyaltyCurrency = LoyaltySettings?.basic_config?.points_terminology
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
  // Define a unique key for our cached data
  const CACHE_KEY = 'omc_campaign_data';
  let data = getCachedData(CACHE_KEY); // Try to get data from cache first

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
          fontFamily: typography.fontFamily || "",
          secondaryFontFamily: typography.secondaryFontFamily || "",
          uppercaseHeadings: typography.uppercaseHeadings || false,
        },
        boxShadow: styling.boxShadow || "",
        borderRadius: styling.borderRadius ? `${styling.borderRadius}px` : "",
        profile_border_size: styling.profile_border_size ? `${styling.profile_border_size}px` : '',
        colors: {
          namebackgroundcolor: colors.namebackgroundcolor || "",
          background: colors.background || "",
          primary: colors.primary || "",
          title: colors.lefttextcolor || "",
          sidenavbtntextcolor: colors.sidenavbtntextcolor || "",
          sidenavbtnhoverbackground: colors.sidenavbtnhoverbackground || "",
          sidenavbtnselectcolor: colors.sidenavbtnselectcolor || "",
          sidenavbtnbackground: colors.sidenavbtnbackground || "",
          sidenavbackground: colors.sidenavbackground || "",
          profile_border_color: colors.profile_border_color || '',
          secondary: colors.secondary || "",
          accent: colors.accent || "",
          text: colors.text || "",
          cardBackgroundColor: colors.cardBackgroundColor || "",
          cardBorderColor: colors.cardBorderColor || "",
          rightbtnbgcolor: colors.rightbtnbgcolor || "",
          rightbtnbghovercolor: colors.rightbtnbghovercolor || "",
          rightbtntextcolor: colors.rightbtntextcolor || "",
          rightbtntexthovercolor: colors.rightbtntexthovercolor || "",
        },
      },
      style1: {
        cardborder_size: styling.cardBorderSize || "",
      },
      border_color: "",
      main_background_color: colors.background || "",
      main_heading_border_color: "",
      card_text_background_color: "",
      card_btn_border_color: "",
    };
    console.log("🔧 finalobj:", finalobj);
    currObj = {
      font_family: finalobj?.style?.typography?.fontFamily,
      secondaryFontFamily: finalobj?.style?.typography?.secondaryFontFamily,
      box_shadow: finalobj.style?.boxShadow,
      profile_color: finalobj?.style?.colors?.namebackgroundcolor,
      border_color: finalobj.border_color || "#111",
      main_background_color: finalobj?.style?.colors?.background,
      content_background_color: finalobj.main_background_color,
      heading_color: finalobj?.style?.colors?.primary,
      heading_border_color: finalobj.main_heading_border_color,
      menu_heading_text_color: finalobj?.style?.colors?.title,
      menu_items_color: finalobj?.style?.colors?.sidenavbtntextcolor,
      menu_items_select_color: finalobj?.style?.colors?.sidenavbtnselectcolor,
      menu_items_background_color:
        finalobj?.style?.colors?.sidenavbtnbackground,
      menu_background_color: finalobj?.style?.colors?.sidenavbackground,
      card_heading_color: finalobj?.style?.colors?.secondary,
      card_label_color: finalobj?.style?.colors?.accent,
      card_text_color: finalobj?.style?.colors?.text,
      card_text_background_color: finalobj.card_text_background_color,
      card_background_color: finalobj?.style?.colors?.cardBackgroundColor,
      card_font_family: finalobj?.style?.typography?.fontFamily,
      card_border_radius: finalobj.style?.borderRadius,
      card_border_size: finalobj.style1?.cardborder_size,
      card_border_color: finalobj.style?.colors?.cardBorderColor,
      sidenavbtnhoverbackground: finalobj.style?.colors?.sidenavbtnhoverbackground,
      button_background_color: finalobj.style?.colors?.rightbtnbgcolor,
      button_background_hover_color:
        finalobj.style?.colors?.rightbtnbghovercolor,
      button_text_color: finalobj.style?.colors?.rightbtntextcolor,
      button_text_hover_color: finalobj?.style?.colors?.rightbtntexthovercolor,
      button_border_color: finalobj.card_btn_border_color,
      profile_border_color: finalobj?.style?.colors?.profile_border_color,
      profile_border_size: finalobj?.style?.profile_border_size,
      uppercaseHeadings: finalobj?.style?.typography.uppercaseHeadings
    };
    elementsObj = {
      myOrders: modules.myOrders,
      myWishlist: modules.myWishlist,
      recentlyViewed: modules.recentlyViewed,
      myProfile: modules.myProfile,
      loyalty: {
        ...(typeof modules.loyalty === 'object' && modules.loyalty !== null ? modules.loyalty : { enabled: true }),
        enabled: LoyaltySettings?.earn_rule_json ? true : false
      },
      offers: modules.offers ?? false,
      changePassword: modules.changePassword,
      logout: modules.logout,
      dashboard: modules.dashboard,
    };

    console.log("✅ styles_applied:", styles_applied);
    console.log("✅ Final currObj:", currObj);
    console.log("✅ Final elementsObj:myOrders:-", elementsObj);

    if (modules?.myOrders?.features && Array.isArray(modules.myOrders.features)) {
      console.log("haf")
      const cancelFeature = modules.myOrders.features.find(
        (feature) => feature.id === "Cancel_Order"
      );
      cancelOrderData = cancelFeature ? cancelFeature.enabled === true : false;
      console.log("cancelDatata", cancelOrderData, cancelFeature)
    }

    if (typeof elementsObj === "object" && elementsObj !== null) {
      for (let key in elementsObj) {
        const section = elementsObj[key];

        if (section.enabled && Array.isArray(section.features)) {
          for (let feature of section.features) {
            // Push features into the corresponding global array
            if (feature.enabled) {
              // Push only the feature.id to the corresponding array
              if (key === "myOrders") myOrders.push(feature.id);
              else if (key === "myWishlist") myWishlist.push(feature.id);
              else if (key === "recentlyViewed")
                recentlyViewed.push(feature.id);
              else if (key === "myProfile") myProfile.push(feature.id);
              else if (key === "changePassword")
                changePassword.push(feature.id);
              else if (key === "logout") logout.push(feature.id);
              else if (key === "dashboard") dashboard.push(feature.id);
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
    console.error("❌ Error fetching API data:", error);
  } finally {
    // This block runs regardless of cache hit/miss or error
    console.log('🎨 Applying Theme & Rendering UI...');
    if (currObj && Object.keys(currObj).length > 0) {
      applyTheme(currObj);
      if (styles_applied === true) {
        console.log("condition for styles checked...");
        document.getElementById("theme-container").style.display = "block";
      }
      console.log("test 0..............");
      renderMenu();
      renderMobileMenu()
      // renderMobileMenu();
      console.log("test 1..............");
      renderContent(0);
      console.log("test 2..............");
      fetchWishlistOnReload();
      console.log("test 3..............");
      if (window.innerWidth <= 768) {
        toggleContainers();
      }
    } else {
      console.log("UI rendering skipped due to missing data.");
    }
  }
})();


async function fetchAndProcessModuleSettings() {
  const shop = Shopify.shop;
  const url = `https://omc.axentraos.co.in/utility/get_module_setting/?shop=${shop}`;

  try {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();

    console.log("Full API Response:", data);
    console.log("Module Settings:", data.module_settings[0].module_json);
    window.cancelMapping = data.module_settings[0].module_json; // Make it global
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

//THEME-3.JS
let globalLoyaltyPoints = null;
let redemptionOptions = [];
let loyaltyPointsHistory = [];
let allLoyaltyPointsHistory = [];

const filledHeartSVG = `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="25" height="25" fill="red" viewBox="0 0 24 24"<path d="M12 21s-6-4.35-9-9c-3-4.65 1-9 6-6 1.5 1 3 3 3 3s1.5-2 3-3c5-3 9 1.35 6 6-3 4.65-9 9-9 9z"/></svg>`;

const emptyHeartSVG = `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="25" height="25" fill="none" stroke="red" stroke-width="2" viewBox="0 0 24 24"><path d="M12 21s-6-4.35-9-9c-3-4.65 1-9 6-6 1.5 1 3 3 3 3s1.5-2 3-3c5-3 9 1.35 6 6-3 4.65-9 9-9 9z"/></svg>`;

const lockSVG = `<svg width="16" height="16" class="xircls_svg" style="position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); color: #000;" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;

async function LoyaltyPoints() {
  const formData = new FormData();
  formData.append("app", "oh_my_customer");
  formData.append("shop", Shopify.shop);
  formData.append("email", customerEmail);

  const url = `https://loyalty.axentraos.co.in/api/v1/ledger/customer_details/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ Raw API loyalty:", data);
    globalLoyaltyPoints = data; // assign to global variable
    return data;
  } catch (error) {
    console.error("❌ Error fetching API data:", error);
    globalLoyaltyPoints = 0; // or null if preferred
    return 0;
  } finally {
    updateLoyaltyPointsContainer();
    redemptionOptions = getRedemptionOptions();
  }
}
LoyaltyPoints()
function formatDate(isoDate) {
  const date = new Date(isoDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
async function fetchLoyaltyPointsHistory() {
  const formData = new FormData();
  formData.append("app", "oh_my_customer");
  formData.append("shop", Shopify.shop);
  formData.append("email", customerEmail);

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
    loyaltyPointsHistory = history_data.map((entry) => ({
      ...entry,
      created_at: formatDate(entry.created_at), // format the date here
    }));
    console.log("Fetched loyalty points history:", loyaltyPointsHistory);
  } catch (error) {
    console.error("Failed to fetch loyalty points history:", error);
  } finally {
    updateLoyaltyPointsContainer();
  }
}
fetchLoyaltyPointsHistory()
async function fetchAllLoyaltyPointsHistory() {
  const formData = new FormData();
  formData.append("app", "oh_my_customer");
  formData.append("shop", Shopify.shop);
  formData.append("email", customerEmail);
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
  } finally {
    updateLoyaltyPointsContainer();
  }
}
fetchAllLoyaltyPointsHistory()
function getRedemptionOptions() {
  console.log("Loyalllty", LoyaltySettings)
  const percentage = LoyaltySettings?.redeem_rule_json?.flexible_redemption?.maximum_points_per_order || 0;
  redemptionOptions = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg1" fill="#000000" width="25px" height="25px" viewBox="0 0 24 24"><path d="M11.707 2.293A.997.997 0 0 0 11 2H6a.997.997 0 0 0-.707.293l-3 3A.996.996 0 0 0 2 6v5c0 .266.105.52.293.707l10 10a.997.997 0 0 0 1.414 0l8-8a.999.999 0 0 0 0-1.414l-10-10zM13 19.586l-9-9V6.414L6.414 4h4.172l9 9L13 19.586z"/><circle cx="8.353" cy="8.353" r="1.647"/></svg>`,
      heading: "Purchase Discount",
      subheading: `Use ${percentage}% of your ${loyaltyCurrency ? loyaltyCurrency : "Points"} at checkout!`,
      points: Math.floor((percentage / 100) * (globalLoyaltyPoints?.available_points || 0)),
    },
    // Uncomment and update point logic if needed
    // {
    //   icon: '<i class="fa-solid fa-truck"></i>',
    //   heading: "Free Expedited Shipping",
    //   subheading: "Free 2-day shipping on your order",
    //   points: 100,
    // },
    // {
    //   icon: '<i class="fa-solid fa-calendar"></i>',
    //   heading: "Early Access",
    //   subheading: "Shop new collections 24 hours early",
    //   points: 300,
    // },
    // {
    //   icon: '<i class="fa-solid fa-gift"></i>',
    //   heading: "Luxury Gift",
    //   subheading: "Exclusive branded accessory",
    //   points: 1000,
    // },
  ];

  return redemptionOptions;
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


function renderMenu() {
  const menuOptions = [
    // { label: "Dashboard", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12l9-9 9 9"/><path d="M4 10v10h6v-6h4v6h6V10"/></svg>', heading: "Dashboard", subHeading: "Your account overview and recent activity" },
    {
      label: "My Profile",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>',
      heading: "My Profile",
      subHeading: "Update your personal information",
      id: "myProfile",
    },
    {
      label: "My Orders",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg"  width="20" height="20" fill="none"  viewBox="0 0 24 24"  stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12V6a2 2 0 00-2-2h-2l-2-2h-4l-2 2H6a2 2 0 00-2 2v6m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4" /></svg>',
      heading: "My Orders",
      subHeading: "Track and manage your recent purchases",
      id: "myOrders",
    },
    {
      label: "My Wishlist",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 21s-6-4.35-9-9c-3-4.65 1-9 6-6 1.5 1 3 3 3 3s1.5-2 3-3c5-3 9 1.35 6 6-3 4.65-9 9-9 9z"/></svg>',
      heading: "My Wishlist",
      subHeading: "View and manage your saved items",
      id: "myWishlist",
    },
    {
      label: "Loyalty Points",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" /></svg>',
      heading: "Loyalty Points",
      subHeading: "Track and redeem your loyalty rewards",
      id: "loyalty",
    },
    {
      label: "Recently Viewed",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
      heading: "Recently Viewed",
      subHeading: "Products you've recently browsed",
      id: "recentlyViewed",
    },
    {
      label: "Change Password",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg"  width="20" height="20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>',
      heading: "Change Password",
      subHeading: "Update your account security",
      id: "changePassword",
    },
    // { label: "AI Features", icon: '<i class="fa-solid fa-clock-rotate-left"></i>', heading: "AI Features", subHeading: "Products you've recently browsed" },
    // { label: "My Reviews", icon: '<i class="fas fa-lock"></i>', heading: "My Reviews", subHeading: "Update your account security" },
    {
      label: "Logout",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
      heading: "Logout",
      subHeading: "Securely sign out from your account",
      id: "logout",
    },
  ];
  console.log("menu updated!!!");
  const profile_feature = document.getElementById("logoContainer")
  if (myProfile.includes("Profile_Picture")) {
    console.log(myProfile.includes("Profile_Picture"), 'imgggggggggprof');

    profile_feature.setAttribute("style", "display: block !important;");
  } else {
    profile_feature.setAttribute("style", "display: none !important;");

  }

  const menuElement = document.getElementById("xircls-menu");
  menuElement.innerHTML = ""; // Clear previous menu items
  console.log(menuOptions, menuElement, "cxvcvcxvcxvc")
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
  const firstItem = ulElement.querySelector("li.xircls-menu-item");
  if (firstItem) {
    firstItem.classList.add("active");
    renderContent(parseInt(firstItem.dataset.index));
  }
}
function setActiveMenuItem(activeIndex) {

  // Deactivate all items in mobile menu
  const mobileItems = document.querySelectorAll("#xircls-mobile-menu .xircls-menu-item");
  mobileItems.forEach(item => item.classList.remove("active"));
  if (mobileItems[activeIndex]) {
    mobileItems[activeIndex].classList.add("active");
  }
}

function renderMobileMenu() {
  const menuOptions = [
    // { label: "Dashboard", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12l9-9 9 9"/><path d="M4 10v10h6v-6h4v6h6V10"/></svg>', heading: "Dashboard", subHeading: "Your account overview and recent activity" },
    {
      label: "My Profile",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>',
      heading: "My Profile",
      subHeading: "Update your personal information",
      id: "myProfile",
    },
    {
      label: "My Orders",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg"  width="20" height="20" fill="none"  viewBox="0 0 24 24"  stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12V6a2 2 0 00-2-2h-2l-2-2h-4l-2 2H6a2 2 0 00-2 2v6m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4" /></svg>',
      heading: "My Orders",
      subHeading: "Track and manage your recent purchases",
      id: "myOrders",
    },
    {
      label: "My Wishlist",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 21s-6-4.35-9-9c-3-4.65 1-9 6-6 1.5 1 3 3 3 3s1.5-2 3-3c5-3 9 1.35 6 6-3 4.65-9 9-9 9z"/></svg>',
      heading: "My Wishlist",
      subHeading: "View and manage your saved items",
      id: "myWishlist",
    },
    {
      label: "Loyalty Points",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" /></svg>',
      heading: "Loyalty Points",
      subHeading: "Track and redeem your loyalty rewards",
      id: "loyalty",
    },
    {
      label: "Recently Viewed",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
      heading: "Recently Viewed",
      subHeading: "Products you've recently browsed",
      id: "recentlyViewed",
    },
    {
      label: "Change Password",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg"  width="20" height="20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>',
      heading: "Change Password",
      subHeading: "Update your account security",
      id: "changePassword",
    },
    // { label: "AI Features", icon: '<i class="fa-solid fa-clock-rotate-left"></i>', heading: "AI Features", subHeading: "Products you've recently browsed" },
    // { label: "My Reviews", icon: '<i class="fas fa-lock"></i>', heading: "My Reviews", subHeading: "Update your account security" },
    {
      label: "Logout",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
      heading: "Logout",
      subHeading: "Securely sign out from your account",
      id: "logout",
    },
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

const tier_benefits = [
  {
    heading: "Silver",
    subheading: "Spend $0–$999 annually",
    points: [
      "Earn 8 points per $1 spent",
      "Birthday bonus points",
      "Quarterly special offers",
    ],
    isCurrentlyActive: false,
  },
  {
    heading: "Gold",
    subheading: "Spend $1,000–$4,999 annually",
    points: [
      "Earn 9 points per $1 spent",
      "Birthday bonus points",
      "Quarterly special offers",
      "Free standard shipping",
      "Extended return window (45 days)",
    ],
    isCurrentlyActive: false,
  },
  {
    heading: "Platinum",
    subheading: "Spend $5,000–$9,999 annually",
    points: [
      "Earn 10 points per $1 spent",
      "Birthday bonus points",
      "Monthly special offers",
      "Free expedited shipping",
      "Extended return window (60 days)",
      "Private shopping appointments",
      "Exclusive event invitations",
    ],
    isCurrentlyActive: true,
  },
  {
    heading: "Diamond",
    subheading: "Spend $10,000+ annually",
    points: [
      "Earn 12 points per $1 spent",
      "Double birthday bonus points",
      "Weekly special offers",
      "Free priority shipping",
      "Extended return window (90 days)",
      "Dedicated personal stylist",
      "Exclusive event invitations",
      "Annual gift",
      "Early access to all new collections",
    ],
    isCurrentlyActive: false,
  },
];
const earn_Items = [
  {
    heading: "Make a Purchase",
    subheading: `Earn 1 ${loyaltyCurrency ? loyaltyCurrency : "Points"} for every Rs1 spent`,
    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><g id="Shopping_Cart"><path d="M17.437,19.934c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Zm-11.217,-4.266l-0.945,-10.9c-0.03,-0.391 -0.356,-0.693 -0.749,-0.693l-0.966,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l0.966,-0c0.916,-0 1.676,0.704 1.746,1.617l0.139,1.818l13.03,-0c0.885,-0 1.577,0.76 1.494,1.638l-0.668,7.52c-0.121,1.285 -1.199,2.267 -2.489,2.267l-9.069,0c-1.29,0 -2.367,-0.981 -2.489,-2.267Zm0.274,-8.158l0.722,8.066c0.073,0.77 0.719,1.359 1.493,1.359l9.069,0c0.774,0 1.42,-0.589 1.493,-1.359l0.668,-7.518c0.028,-0.294 -0.203,-0.548 -0.498,-0.548l-12.947,-0Zm4.454,12.424c-0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c-0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Z"></path></g></svg>`,
  },
  {
    heading: "Create an Account",
    subheading: `Earn 400 ${loyaltyCurrency ? loyaltyCurrency : "Points"} on account creation`,
    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>`,
  },
  // {
  //   heading: "Refer a Friend",
  //   subheading: "Earn 500 points when they make their first purchase",
  //   icon: "fa-solid fa-award",
  // },
  // {
  //   heading: "Birthday Month",
  //   subheading: "Earn 2x points during your birthday month",
  //   icon: "fa-solid fa-gift",
  // },
  // {
  //   heading: "Social Media Share",
  //   subheading: "Earn 50 points when sharing your purchase",
  //   icon: "fa-solid fa-arrow-right",
  // },
];
const redeem_Items = [
  {
    heading: "Purchase Discount",
    subheading: `Use 25% of your ${loyaltyCurrency ? loyaltyCurrency : "Points"} at checkout!`,
    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"></path></svg>`,
    buttonText: "Redeem Now",
  },
  // {
  //   heading: "Free Expedited Shipping",
  //   subheading: "Free 2-day shipping on your order",
  //   icon: "fa-solid fa-truck",
  //   buttonText: "Redeem Now",
  // },
  // {
  //   heading: "Early Access",
  //   subheading: "Shop new collections 24 hours early",
  //   icon: "fa-solid fa-calendar",
  //   buttonText: "Redeem Now",
  // },
  // {
  //   heading: "Luxury Gift",
  //   subheading: "Exclusive branded accessory",
  //   icon: "fa-solid fa-gift",
  //   buttonText: "Redeem Now",
  // },
];
const point_history_data = [
  {
    date: "2025-04-01",
    description: "Purchase - Order #1234",
    points: "+100",
    balance: "1250",
  },
  {
    date: "2025-04-03",
    description: "Referral Bonus",
    points: "+500",
    balance: "1350",
  },
  {
    date: "2025-04-07",
    description: "Redeemed for Gift Card",
    points: "-600",
    balance: "750",
  },
];
const tableData = [
  {
    date: "April 1, 2025",
    description: "Purchase: Leather Tote Bag",
    points: "+125",
  },
  {
    date: "March 15, 2025",
    description: "Birthday Bonus",
    points: "+250",
  },
  {
    date: "February 28, 2025",
    description: "Redeemed for Free Shipping",
    points: "-100",
  },
];

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


function openRedemptionModal() {
  const redemptionOptions = getRedemptionOptions();
  const modal = document.createElement("div");
  modal.className = "xircls-redemption-modal";

  const modalContent = document.createElement("div");
  modalContent.className = "xircls-redemption-modal-content";

  const heading = document.createElement("span");
  heading.textContent = `Redeem Your ${loyaltyCurrency ? loyaltyCurrency : "Points"}`;

  const subheading = document.createElement("div");
  subheading.textContent = `Select an option to redeem ${loyaltyCurrency ? loyaltyCurrency : "Points"}!`;

  modalContent.appendChild(heading);
  modalContent.appendChild(subheading);

  // Close (X) Button
  const closeButton = document.createElement("span");
  closeButton.className = "xircls-redemption-modal-close-btn";
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", () => document.body.removeChild(modal));
  modalContent.appendChild(closeButton);

  let selectedOption = null;
  let updated_points;
  // Render options
  redemptionOptions.forEach((option, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "redemption-option";
    optionDiv.addEventListener("click", () => {
      selectedOption = index;
      document.querySelectorAll(".redemption-option").forEach((el) => {
        el.style.borderColor = "#ddd";
        el.style.background = "#fff";
      });
      optionDiv.style.borderColor = "#111";
      optionDiv.style.background = "#ffffff";
    });

    const iconWrapper = document.createElement("div");
    iconWrapper.className = "icon-wrapper";
    iconWrapper.innerHTML = option.icon;
    // iconWrapper.querySelector("i").style.fontSize = "18px";

    const contentWrapper = document.createElement("div");
    contentWrapper.className = "content-wrapper";

    const textWrapper = document.createElement("div");
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = option.heading;

    const subtitle = document.createElement("div");
    subtitle.className = "sub-title";
    subtitle.textContent = option.subheading;

    const pointDiv = document.createElement("div");
    pointDiv.className = "redemption-points-div";

    const pointTag = document.createElement("div");
    pointTag.className = "point-tag";
    pointTag.textContent = `${option.points} ${loyaltyCurrency ? loyaltyCurrency : "Points"}`;
    updated_points = option.points;

    const actionWrapper = document.createElement("div");
    actionWrapper.className = "action-wrapper";
    actionWrapper.style.marginTop = "5px";

    const editButton = document.createElement("button");
    editButton.textContent = `Edit`;
    editButton.className = "edit-btn";

    const toggleToEditMode = () => {
      const currentPoints = parseInt(option.points, 10);

      const input = document.createElement("input");
      input.type = "text";
      input.min = 1;
      input.max = currentPoints;
      input.value = currentPoints;
      input.className = "points-input";
      input.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
      });

      pointTag.replaceWith(input);
      actionWrapper.removeChild(editButton);

      const saveButton = document.createElement("button");
      saveButton.textContent = `Save ${loyaltyCurrency ? loyaltyCurrency : "Points"}`;
      saveButton.className = "save-btn";

      saveButton.addEventListener("click", () => {
        let newValue = parseInt(input.value, 10) || updated_points;
        if (newValue > currentPoints) newValue = currentPoints;

        pointTag.textContent = `${newValue} points`;
        updated_points = newValue;
        input.replaceWith(pointTag);
        actionWrapper.removeChild(saveButton);
        actionWrapper.appendChild(editButton);
      });

      actionWrapper.appendChild(saveButton);
    };

    editButton.addEventListener("click", toggleToEditMode);

    textWrapper.appendChild(title);
    textWrapper.appendChild(subtitle);
    contentWrapper.appendChild(iconWrapper);
    contentWrapper.appendChild(textWrapper);

    pointDiv.appendChild(pointTag);
    actionWrapper.appendChild(editButton);
    pointDiv.appendChild(actionWrapper);

    optionDiv.appendChild(contentWrapper);
    optionDiv.appendChild(pointDiv);

    // optionDiv.appendChild(actionWrapper);

    modalContent.appendChild(optionDiv);
  });

  // Footer Buttons
  const footer = document.createElement("div");
  footer.className = "xircls-redemption-modal-footer";

  const cancelBtn = document.createElement("button");
  cancelBtn.className = "xircls-redemption-cancel-btn";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => document.body.removeChild(modal));

  const confirmBtn = document.createElement("button");
  confirmBtn.className = "xircls-redemption-confirm-btn";
  confirmBtn.textContent = "Confirm Redemption";
  confirmBtn.disabled = true;

  confirmBtn.addEventListener("click", () => {
    if (selectedOption !== null) {
      console.log(`You redeemed: ${updated_points}`);
      handleLoyaltySubmit(updated_points);
      document.body.removeChild(modal);
    }
  });

  // Enable confirm only if option selected
  modalContent.addEventListener("click", () => {
    confirmBtn.disabled = selectedOption === null;
  });

  footer.appendChild(cancelBtn);
  footer.appendChild(confirmBtn);
  modalContent.appendChild(footer);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}

function openRedemptionModalNew() {
  // Define helper functions and constants
  const rewardIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="16" height="16" fill="currentColor" class="bi bi-cash-stack" viewBox="0 0 16 16"><path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"></path><path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z"></path></svg>`;

  function getHeading(type) {
    switch (type) {
      case "fixed_amount": return "Amount Discount";
      case "percentage": return "Percentage Off";
      case "free_product": return "Free Product";
      default: return "Reward";
    }
  }

  // Safely get backend data, defaulting to an empty array if not found
  const backendData = LoyaltySettings?.redeem_rule_json?.milestone_redemption?.milestones || [];

  // CORRECTED: Store all necessary data, including reward_type and productId
  const redemptionOptions = backendData.map((item, index) => ({
    icon: getMilestoneIcon(item.reward_type),
    heading: getHeading(item.reward_type),
    points: item.points_required.toString(),
    amount: item.reward_value,
    subheading: item.description,
    reward_type: item.reward_type, // Keep the original type for logic
    productId: item.reward_type === 'free_product' ? item.entitled_product_ids?.[0] : null, // Store the product ID if available
    selected: index === 0, // Select first by default
  }));

  let modalContentHTML;
  let modalFooterHTML;

  if (redemptionOptions.length > 0) {
    modalContentHTML = `
      <div style="padding: 16px 0; display: flex; flex-direction: column; gap: 20px;">
        ${redemptionOptions.map((option, index) => {
      const initialBorderStyle = option.selected ? "border: 1px solid #000000; box-shadow: 0 0 0 1px #000000;" : "border: 1px solid #d1d5db;";
      const checkIcon = option.selected ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="height: 16px; width: 16px; color: #000000;"><path d="M20 6 9 17l-5-5"></path></svg>` : '';
      return `
              <div class="redemption-option" data-option-index="${index}" 
                   style="padding: 20px; border-radius: 2px; cursor: pointer; transition: all 0.2s; ${initialBorderStyle}">
                <div style="display: flex; align-items: flex-start;">
                  <div style="margin-top: 4px; margin-right: 16px;">${option.icon}</div>
                  <div style="flex: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                      <div style="font-family: Cormorant, serif; font-weight: 500; font-size: 18px;">${option.heading}</div>
                      <div class="check-container" style="display: flex; align-items: center; gap: 8px;">
                        ${checkIcon}
                        <span style="font-size: 14px; font-family: Cormorant, serif; font-weight: 500;">${option.points} ${loyaltyCurrency ? loyaltyCurrency : "Points"}</span>
                      </div>
                    </div>
                    <div style="font-size: 14px; color: #6b7280; font-family: Cormorant, serif;">${option.subheading}</div>
                  </div>
                </div>
              </div>`;
    }).join("")}
      </div>`;

    modalFooterHTML = `
      <div style="display: flex; justify-content: right; align-items: center; flex-direction: row; gap: 8px;">
        <button class="cancel-btn" style="color: #6b7280; background: none; border: none; cursor: pointer; font-family: Cormorant, serif; font-size: 14px;">Cancel</button>
        <button class="confirm-btn" style="padding: 8px 20px; font-size: 14px; text-transform: uppercase; letter-spacing: 1.6px; border-radius: 2px; background-color: var(--btn-background-color) !important; color: var(--btn-text-color) !important;font-family: var(--font-family); border: none; cursor: pointer; transition: all 0.2s;">Confirm Redemption</button>
      </div>`;
  } else {
    modalContentHTML = `<div style="padding: 40px 16px; text-align: center; color: #6b7280; font-family: Cormorant, serif; font-size: 16px; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb; margin: 16px 0;">Redemption Methods Not Available.</div>`;
    modalFooterHTML = '';
  }

  const modalHTML = `
    <div role="dialog" aria-modal="true" style="position: fixed; left: 50%; top: 50%; z-index: 50; width: 100%; max-width: 600px; transform: translate(-50%, -50%); border: 1px solid #e5e7eb; background: #ffffff; padding: 24px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border-radius: 8px;">
      <div style="display: flex; flex-direction: column; gap: 6px; text-align: left;">
        <div style="font-weight: 600; font-size: 24px; font-family: Cormorant, serif;">Redeem Your ${loyaltyCurrency ? loyaltyCurrency : "Points"}</div>
        <div style="font-size: 14px; font-family: Cormorant, serif; color: #6b7280;">You have <span style="font-weight: 500;">${globalLoyaltyPoints?.available_points || 0} ${loyaltyCurrency ? loyaltyCurrency : "Points"}</span> available to redeem</div>
      </div>
      ${modalContentHTML}
      ${modalFooterHTML}
      <button type="button" class="close-btn" style="position: absolute; right: 16px; top: 16px; border-radius: 2px; opacity: 0.7; background: none; border: none; cursor: pointer; transition: opacity 0.2s; padding: 4px;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.7'">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="height: 16px; width: 16px;"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      
      </button>
    </div>`;

  const modalOverlay = document.createElement("div");
  modalOverlay.className = "xircls-redemption-modal";
  modalOverlay.style.cssText = `position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); z-index: 49;`;
  modalOverlay.innerHTML = modalHTML;
  document.body.appendChild(modalOverlay);

  const closeModal = () => modalOverlay.remove();

  modalOverlay.querySelector('.close-btn').addEventListener("click", closeModal);
  modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });

  if (redemptionOptions.length > 0) {
    const cancelButton = modalOverlay.querySelector('.cancel-btn');
    const confirmButton = modalOverlay.querySelector('.confirm-btn');
    const optionElements = modalOverlay.querySelectorAll('.redemption-option');
    let selectedOptionIndex = redemptionOptions.findIndex(opt => opt.selected);

    const updateConfirmButtonState = () => {
      const selectedOption = redemptionOptions[selectedOptionIndex];
      const hasEnoughPoints = (globalLoyaltyPoints?.available_points || 0) >= parseInt(selectedOption.points, 10);
      confirmButton.disabled = !hasEnoughPoints;
      confirmButton.style.cursor = hasEnoughPoints ? 'pointer' : 'not-allowed';
      confirmButton.style.opacity = hasEnoughPoints ? '1' : '0.6';
    };

    confirmButton.addEventListener("click", () => {
      if (selectedOptionIndex >= 0 && !confirmButton.disabled) {
        const selected = redemptionOptions[selectedOptionIndex];
        console.log("Submitting redemption with:", selected);
        // CORRECTED: Pass the detailed, reliable data to the handler
        handleLoyaltySubmit(selected.points, selected.amount, selected.reward_type, selected.productId);
        closeModal();
      }
    });

    // optionElements = modalOverlay.querySelectorAll('redemption-option');
    optionElements.forEach((element, index) => {
      element.addEventListener('click', () => {
        // Remove selection from all options
        optionElements.forEach(el => {
          el.style.border = '1px solid #d1d5db';
          el.style.boxShadow = 'none';
          // Remove check icon
          const checkContainer = el.querySelector('[style*="gap: 8px"]');
          if (checkContainer && checkContainer.children.length > 1) {
            checkContainer.removeChild(checkContainer.firstElementChild);
          }
        });

        // Add selection to clicked option
        element.style.border = '1px solid #000000';
        element.style.boxShadow = '0 0 0 1px #000000';
        selectedOptionIndex = index;

        // Add check icon
        const checkContainer = element.querySelector('[style*="gap: 8px"]');
        if (checkContainer) {
          const checkIcon = document.createElement('div');
          checkIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="height: 16px; width: 16px; color: #000000;"><path d="M20 6 9 17l-5-5"></path></svg>`;
          checkContainer.insertBefore(checkIcon, checkContainer.firstChild);
        }

        // Update confirm button state
        // updateConfirmButton();
      });
    });
    cancelButton.addEventListener("click", closeModal);
    updateConfirmButtonState(); // Set initial state
  }
}
async function renderRecentlyViewed() {
  const recentContainer = document.getElementById("recentlyContainer");
  if (!recentContainer) return;

  recentContainer.innerHTML = "";

  try {
    const recentlyViewed =
      JSON.parse(sessionStorage.getItem("recentlyViewed")) || [];
    recentContainer.innerHTML = "";
    const updatedViewed = recentlyViewed.map((product) => ({
      ...product,
      image: `${product.image}`,
    }));
    recentContainer.innerHTML = "";
    console.log(updatedViewed, recentlyViewed, "recentlyViewed");
    recentContainer.innerHTML = "";
    if (updatedViewed.length === 0) {
      recentContainer.appendChild(createEmptyItemsCard("recently"));
      return;
    }
    recentContainer.innerHTML = "";
    const { wishlist } = await fetchWishlist(); // 🟡 Fetch ONCE
    console.log("calcalcalcal")
    recentContainer.appendChild(renderRecentlySection(updatedViewed, wishlist));
  } catch (error) {
    console.error("Error rendering recently viewed products:", error);
    recentContainer.appendChild(createEmptyItemsCard("recently"));
  } finally {
    if (recentContainer && recentContainer.children.length >= 2) {
      const firstChild = recentContainer.children[0];

      if (firstChild.classList.contains("xircls-recent-products-grid")) {
        recentContainer.removeChild(firstChild);
      }
    }
  }
}
async function toggleWishlistHandler(item, heartIcon) {

  if (!item || !item.id) {
    console.error("Invalid item");
    createStatusToast(
      "Wishlist Update Fail",
      "We Couldn't update wishlist. Try again or contact support for help.",
      "error"
    );

    return;
  }

  showLoader();

  try {
    const { id: metafieldId, wishlist } = await fetchWishlist();
    const itemExists = wishlist.some(
      (wishlistItem) => wishlistItem.id === item.id
    );
    let updatedWishlist;

    if (itemExists) {
      // Remove item
      updatedWishlist = wishlist.filter(
        (wishlistItem) => wishlistItem.id !== item.id
      );
      heartIcon.className = "far fa-heart recent-card-wishlist-icon";
      heartIcon.style.color = "inherit";
      createStatusToast(
        "Removed from Wishlist",
        "This item has been successfully removed and is no longer saved in your wishlist.",
        "info"
      );
    } else {
      // Add item
      const itemToAdd = {
        id: item.id,
        name: item.name || "Unknown Product",
        image: item.image || "",
        price: item.price || "N/A",
        url: item.url || "#",
        variants: item.variants || [],
        dateAdded: new Date().toISOString(),
      };
      updatedWishlist = [...wishlist, itemToAdd];
      heartIcon.className = "fas fa-heart recent-card-wishlist-icon";
      // heartIcon.style.color = "var(--menu-items-select-color, #000)";
      createStatusToast(
        "Added to Your Wishlist",
        "This item is now saved! You can view it anytime in your wishlist.",
        "success"
      );
    }
    const ItemId = item.id;
    await saveWishlist(updatedWishlist, metafieldId, ItemId);

    const wishlistContainer = document.getElementById("wishListsContainer");
    if (wishlistContainer && wishlistContainer.style.display !== "none") {
      await fetchWishlistOnReload();
    }
  } catch (err) {
    console.error("Wishlist toggle error:", err);
    createStatusToast(
      "Wishlist Update Failed",
      "We couldn’t update your wishlist. Please try again.",
      "error"
    );
  } finally {
    renderRecentlyViewed()
    hideLoader();
  }
}
function renderRecentlySection(updatedViewed, wishlist) {
  const gridContainer = document.createElement("div");
  gridContainer.className = "xircls-recent-products-grid";
  const filledHeartSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" class="" width="25" height="25" fill="red" viewBox="0 0 24 24">
    <path d="M12 21s-6-4.35-9-9c-3-4.65 1-9 6-6 1.5 1 3 3 3 3s1.5-2 3-3c5-3 9 1.35 6 6-3 4.65-9 9-9 9z"/>
  </svg>
  `;

  const emptyHeartSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="25" height="25" fill="none" stroke="red" stroke-width="2" viewBox="0 0 24 24">
    <path d="M12 21s-6-4.35-9-9c-3-4.65 1-9 6-6 1.5 1 3 3 3 3s1.5-2 3-3c5-3 9 1.35 6 6-3 4.65-9 9-9 9z"/>
  </svg>
  `;
  // Append items
  updatedViewed.forEach((product) => {
    const itemExists = wishlist.some((item) => item.id === product.id);
    const card = document.createElement("div");
    card.className = "xircls-recent-card";

    const heartSVG = itemExists ? filledHeartSVG : emptyHeartSVG;
    console.log(product.image, 'product.image');

    card.innerHTML = `
    <div class="xircls-recent-card-image">  
        <img src="${product.image}">
    </div>
  
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px 0px 0px 0px">
        <span class="xircls-recent-card-title">${product.name}</span>
        <span class="recent-card-wishlist-icon" 
           style="font-size: 1.7rem; cursor: pointer;" 
           data-item-id="${product.id}">${heartSVG}</span>
    </div>
  
    <div>
        <div class="xircls-recent-card-price">${product.price}</div>
    </div>
  
    <div class="xircls-recent-card-actions">
        ${recentlyViewed.includes("Add_to_Cart_Button")
        ? `<button onclick="addToCart('${product.variants[0].id}', '${product.id}')"><span>+</span> Add to Cart</button>`
        : ``
      }
         ${recentlyViewed.includes("Buy_Now")
        ? `<button onclick="buyNow('${product.variants[0].id}', '${product.id}')">Buy Now</button>`
        : ``
      } 
    </div>
  `;

    //buy now function
    const heartIcon = card.querySelector(".recent-card-wishlist-icon");
    heartIcon.addEventListener("click", () =>
      toggleWishlistHandler(product, heartIcon),
    );



    gridContainer.appendChild(card);
  });

  return gridContainer;
}
// // Create Individual Product Card
// function createRecentlyViewedCard(product, wishlist = []) {
//   const itemExists = wishlist.some((item) => item.id === product.id);

//   const card = document.createElement("div");
//   card.className = "xircls-recent-card";

//   const heartIconClass = itemExists ? "fas fa-heart" : "far fa-heart";
//   const heartColor = itemExists ? " #282828" : "#282828";

//   card.innerHTML = `
//   <div class="xircls-recent-card-image">
//       <img src="${product.image}">
//   </div>

//   <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px 0px 0px 0px">
//       <span class="xircls-recent-card-title">${product.name}</span>
//       <i class="${heartIconClass} recent-card-wishlist-icon"
//          style="font-size: 1.7rem; cursor: pointer; color: ${heartColor}"
//          data-item-id="${product.id}"></i>
//   </div>

//   <div>
//       <p class="xircls-recent-card-price">${product.price}</p>
//   </div>

//   <div class="xircls-recent-card-actions">
//       <button onclick="addToCart('${product.variants[0].id}', '${product.id}')">
//           <span class='btn-plus'>+</span> Add to Cart
//       </button>
//       <button onclick="buyNow('${product.variants[0].id}', '${product.id}')">
//           Buy Now
//       </button>
//   </div>
// `;

//   //buy now function
//   const heartIcon = card.querySelector(".recent-card-wishlist-icon");
//   heartIcon.addEventListener("click", () =>
//     toggleWishlistHandler(product, heartIcon)
//   );

//   return card;
// }
function toggleContainers() {
  const container1 = document.querySelector(".container-1");
  const container2 = document.querySelector(".container-2");
  console.log(`Condition checked! Mobile view initialized.`);
  const allItems = document.querySelectorAll(".xircls-menu-item");
  console.log(`condition checked!!!!!`, allItems);
  allItems.forEach((item) => {
    item.addEventListener("click", function () {
      allItems.forEach((menuItem) => menuItem.classList.remove("active"));
      item.classList.add("active");
      container1.style.display = "none";
      container2.style.display = "block";
      console.log(`Active item set and containers toggled.`);
    });
  });
}

function openTrackOrderModal(encodedOrderString, encodedTrackSettings) {
  const order = JSON.parse(decodeURIComponent(encodedOrderString));
  const trackSettings = encodedTrackSettings ? JSON.parse(decodeURIComponent(encodedTrackSettings)) : {};

  // check if it is null or undefined
  if (!window.trackOrderSettings || window.trackOrderSettings == null) {
    console.warn("Track settings not yet loaded. Please try again.");
    // Optionally, display an error message to the user or try again after a short delay.
    return;
  }
  const url = `https://omc.axentraos.co.in/utility/get_tracking_info?order_id=${order.orderId}&shop=${Shopify.shop}`;

  fetch(url)
    .then(res => res.json())
    .then(apiData => {
      console.log("Fetched track_order_data:", apiData);


      if (apiData.trackings && apiData.trackings.length > 0) {
        order.trackings = apiData.trackings;
        const firstTrackingData = apiData.trackings[0];
        order.fulfillments = order.fulfillments || [{}];
        order.fulfillments[0].trackingUrl = firstTrackingData.tracking_url;
        order.fulfillments[0].trackingNumber = firstTrackingData.tracking_number;
        order.fulfillments[0].company = firstTrackingData.company;
        order.fulfillments[0].service = firstTrackingData.service;
      }

      //Pass window.trackOrderSettings
      renderTrackOrderModal(order, window.trackOrderSettings);
    })
    .catch(err => {
      console.error("Failed to fetch track_order_data:", err);
      //Pass window.trackOrderSettings
      renderTrackOrderModal(order, window.trackOrderSettings);
    });
}


function renderTrackOrderModal(order, trackSettings) {
  let overallStatus = 'processing';

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
    'placed': { progress: '0%' },
    'processing': { progress: '33%' },
    'shipped': { progress: '67%' },
    'delivered': { progress: '100%' }
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

  if (window.innerWidth < 768) {
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
    zip: "zip code", // API uses 'zip code' for 'zip'
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
      last_name: document.getElementById("lastName").value,
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
  if (isAlreadyCancelled) {
    return '';
  }

  console.log(isAlreadyCancelled, cancelBtnDisabled, timeLimitMinutes, orderCreationUTC, currentTimeUTC, orderId, apiAllowedCancelStatus);

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
    ? `${Math.floor(timeLimitMinutes / 60) > 0 ? `${Math.floor(timeLimitMinutes / 60)} hours` : ''}${timeLimitMinutes % 60 > 0 ? `${timeLimitMinutes % 60} minutes` : ''
      }`.trim()
    : 'the time limit';

  console.log("timeLimitHours", timeLimitHours, timeLimitMinutes)
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

async function createTable(data, tableType) {
  console.log(data, tableType, "table creating.............");
  // let allReturnDetails = [];
  const tableContainer = document.createElement("div");
  tableContainer.className = "table-container";
  const table = document.createElement("table");
  table.className = "custom-table";
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  let cancelMapping = null;
  let exchangeSettings = null;
  let returnSettings = null;
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
      console.log("Customer ID =>", customerId);
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
    headerRow.innerHTML = `
    <th style="font-size: 14px;">Order id</th>
    <th style="font-size: 14px;">Date</th>
    <th style="font-size: 14px;">Items</th>
    <th style="font-size: 14px;">Amount</th>
    <th style="font-size: 14px;">Status</th>
   
  `;


  }
  thead.appendChild(headerRow);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  tbody.style.position = "relative";
  if (tableType === "wishlist") {
    data.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td class="product-cell">
              <div class="product-details">
                  <img src="${item.image}" alt="${item.name
        }" class="product-image">
                  <a href="${item.url}" class="product-name" target="_blank">${item.name
        }</a>
              </div>
          </td>
          <td>${formatDate(item.dateAdded)}</td>
          <td>${item.price}</td>
          <td class="action-buttons-cell">
              <div class="action-buttons">
                  <button class="add-to-cart-btn" data-id="${item.id
        }" onclick="addToCart('${item.variants[0].id}', '${item.id
        }')" title='Add to Cart'>
                  Add to Cart
                  </button>
                  <button class="buy-now-btn" data-id="${item.id
        }" onclick="buyNow('${item.variants[0].id}', '${item.id
        }')" title='Buy Now'>Buy Now</button>
                  <button style="cursor: pointer;" data-id="${item.id}" onclick="removeFromWishlist('${item.id
        }')" title='Remove From Wishlist'>
                      <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <polyline points="3 6 5 6 21 6" />
                                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                  <path d="M10 11v6" />
                                  <path d="M14 11v6" />
                                  <path d="M9 3h6a2 2 0 0 1 2 2v1H7V5a2 2 0 0 1 2-2Z" />
                                </svg>
                  </button>
              </div>   
          </td>
          `;
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    tableContainer.appendChild(table);
  } else if (tableType === "orders") {
    data.forEach(async (order, index) => {
      const encodedOrderString = encodeURIComponent(JSON.stringify(order));
      const encodedSettingsString = returnSettings ? encodeURIComponent(JSON.stringify(returnSettings)) : ''; const orderImageUrl = order.items[0]?.image
        ? `https:${order.items[0].image}`
        : "";
      const encodedTrackSettingsString = encodeURIComponent(JSON.stringify(trackOrderSettings));
      const itemsList = order.items
        .map((item) => `<li>${item.title} (x${item.quantity})</li>`)
        .join("");
      const currentOrderStatusNormalized = (order.fulfillmentStatus || "").trim().toLowerCase();

      const isOrderFulfilled = currentOrderStatusNormalized === 'fulfilled';
      let isOrderDelivered = order.fulfillments?.some(f => (f.shipment_status || "").trim().toLowerCase());
      // Cancel time limit logic with IST conversion
      const orderCreationTimeUTC = new Date(order.orderTime);
      const istOffsetInMinutes = 330;
      const orderCreationTimeIST = new Date(
        orderCreationTimeUTC.getTime() + istOffsetInMinutes * 60000
      );
      // const currentTimeIST = new Date(
      //   new Date().getTime() + istOffsetInMinutes * 60000
      // );
      const orderCreationUTC = new Date(order.orderTime);
      const currentTimeUTC = new Date();
      const diffInMinutes = (currentTimeUTC - orderCreationUTC) / (1000 * 60);

      await fetchAndProcessModuleSettings(); // Wait for the settings to load
      const isWithinTimeLimit = diffInMinutes <= window.cancelMapping.prepaid_timelimit;
      const isCancelled = !!order.cancelledAt;
      const isCOD = order.paymentGateway && order.paymentGateway?.trim().toLowerCase() === "cod" || !order.paymentGateway?.trim();

      const rawTimeLimitFromAPI = isCOD ? cancelMapping.cod_timelimit : cancelMapping.prepaid_timelimit;
      // let timeLimitMinutes = null;
      let timeLimitMinutes = !isNaN(parseFloat(rawTimeLimitFromAPI)) ? parseFloat(rawTimeLimitFromAPI) : null;
      console.log("rawtimelinecancel1", timeLimitMinutes);

      console.log("issueeeeeeeee", window.cancelMapping.prepaid_timelimit)
      if (rawTimeLimitFromAPI !== null && typeof rawTimeLimitFromAPI !== 'undefined') {
        const parsedValue = parseFloat(rawTimeLimitFromAPI);
        console.log(parsedValue, 'check it out!');

        if (!isNaN(parsedValue)) {
          timeLimitMinutes = parsedValue;
        } else {
          // Log if a non-null/undefined value was unparsable
          console.warn(`Order ${order.orderNumber}: Invalid time limit value ('${rawTimeLimitFromAPI}') for ${isCOD ? 'COD' : 'Prepaid'} from API. No time-based cancellation restriction will be applied.`);
        }
      }

      const rawOrderStatusFromApi = isCOD ? window.cancelMapping.order_status_cod : window.cancelMapping.order_status_prepaid;
      const apiAllowedCancelStatus = (typeof rawOrderStatusFromApi === 'string' ? rawOrderStatusFromApi.trim() : "unfulfilled").toLowerCase();

      const isAlreadyCancelled = !!order.cancelledAt;

      const statusPreventsCancellation = apiAllowedCancelStatus !== "" && currentOrderStatusNormalized !== apiAllowedCancelStatus;

      const isOutsideTimeLimit = (timeLimitMinutes !== null) && (diffInMinutes > timeLimitMinutes);

      const cancelBtnDisabled = isAlreadyCancelled || statusPreventsCancellation || isOutsideTimeLimit;


      const showTrackButton = !isCancelled && currentOrderStatusNormalized !== 'unfulfilled';


      // Optional Debug Logs
      console.log(
        "Original UTC Order Time:",
        orderCreationTimeUTC.toISOString()
      );
      console.log("Converted IST Order Time:", orderCreationTimeIST.toString());
      // console.log("Current IST Time:", currentTimeIST.toString());
      console.log("Diff (mins):", diffInMinutes);
      console.log("Is within time limit:", isWithinTimeLimit);

      const row = document.createElement("tr");
      row.innerHTML = `
      <td class = 'order-data' >
          ${order.orderNumber}
         
      </td>
      <td style="text-wrap: nowrap;">${order.orderDate}</td>
      <td class = 'ul-items'>
          <ul class="xircls-order-list" style=' margin: auto; width: 85%; ' >
              ${orderImageUrl
          ? `<img src="${orderImageUrl}" alt="${order.items[0].title}" />`
          : ""
        }
              <div>
                  <div style="color: var(--card-text-color); ">${order.items[0].title}</div>
                  <div style="color: #000; display: flex;">
                      ${order.line_items_count > 1
          ? `+ ${order.line_items_count} more items`
          : ""
        }
                  </div>
              </div>
          </ul>
      </td>
      <td style='text-wrap: nowrap; color: #000'>${order.totalPrice}</td>
      <td>
          ${order.cancelledAt ? `<div class="cancelled-text">Cancelled</div>` : `<span style="padding: 2px 10px; border-radius: 10px; font-size: 11px; font-weight: bold; color: #15803D; background-color: #F0FDF4;">
              ${order.fulfillmentStatus} 
          </span>`}
      </td>
      <td class="toggle-cell"></td>
  `;
      const actionDiv = document.createElement('tr');
      actionDiv.style.cssText = `display: table-row; border-bottom: 1px solid var(--axentra-card-border-color);`;

      const returnInfo = allReturnDetails.filter(detail =>
        String(detail.order_id) === String(order.orderId)
      );
      console.log(returnInfo, 'chal');

      const encodedReturnInfoString = returnInfo ? encodeURIComponent(JSON.stringify(returnInfo)) : '';

      // --- END OF FILTERING ---
      console.log(timeLimitMinutes, "timeLimitMinutes11")
      const cancellationStatusHTML = generateCancellationStatusBoxHTML({
        isAlreadyCancelled,
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

      const returnButtonHTML = showReturnButton ? `
            <span onclick="openReturnModal('${encodedOrderString}', '${encodedReturnSettingsString}', '${encodedReturnInfoString}')" style="display: inline-flex; align-items: center; cursor: pointer;margin-right:12px; font-size:12px;" class="Axentra-return-btn-color omc-cancel-order-text">
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
      const showExchangeButton = !isAlreadyCancelled && isExchangeModuleEnabled && isEligibleForExchange && isEligibleByFulfillmentStatusForExchange && isEligibleForExchangeOverall && !allItemsInitiated && (initiatedActionType.size === 0 || (initiatedActionType.size === 1 && initiatedActionType.has('exchange')));
      const exchangeButtonHTML = showExchangeButton ? `
            <span onclick="openExchangeModal('${encodedOrderString}', '${encodedExchangeSettingsString}', '${encodedReturnInfoString}')" style="display: inline-flex; align-items: center; cursor: pointer; margin-right:12px; font-size:12px;" class="Axentra-exchange-btn-color omc-cancel-order-text view-order-details-link">
              <svg class="xircls_svg2" style="margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
              Exchange
            </span>` : '';

      const encodedReplacementSettingsString = replacementSettings ? encodeURIComponent(JSON.stringify(replacementSettings)) : '';
      const isReplacementModuleEnabled = replacementSettings?.replacement?.is_enable === true;
      const isEligibleForReplacement = isOrderEligibleForReplacement(order, replacementSettings); // Uses the new function
      const restrictUndeliveredForReplacement = replacementSettings?.replacement?.advance_settings?.replacement_restrictions?.undeliverd === true;
      let isEligibleByFulfillmentStatusForReplacement = restrictUndeliveredForReplacement ? isOrderDelivered : (isOrderFulfilled || isOrderDelivered);
      const showReplacementButton = !isAlreadyCancelled && isReplacementModuleEnabled && isEligibleForReplacement && isEligibleByFulfillmentStatusForReplacement && !allItemsInitiated && (initiatedActionType.size === 0 || (initiatedActionType.size === 1 && initiatedActionType.has('replacement')));
      const replacementButtonHTML = showReplacementButton ? `
            <span onclick="openReplacementModal('${encodedOrderString}', '${encodedReplacementSettingsString}', '${encodedReturnInfoString}')" style="display: inline-flex; align-items: center; cursor: pointer;margin-right:12px; font-size:12px;" class="Axentra-replace-btn-color omc-cancel-order-text view-order-details-link">
              <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px;" class="xircls_svg2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw h-3 w-3 mr-1"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
              Replacement
            </span>` : '';



      if (window.innerWidth <= 768) {
        row.setAttribute("data-index", order.orderNumber);
        row.addEventListener("click", toggleOrderDetailsByRow);
      }

      tbody.appendChild(row);

      // Actions

      const trackOrder11 = document.createElement("div");
      trackOrder11.className = "action-order-a";
      if (showTrackButton) {
        const trackOrder = document.createElement("button");
        trackOrder.className = "omc-action-link omc-track-order-link link-btn";
        trackOrder.textContent = "Track";

        // Inside your createTable function, after you create the trackOrder button:
        (async () => {  // Wrap the logic in an async IIFE
          await fetchAndProcessModuleSettings(); // Wait for the settings to load

          trackOrder.onclick = function () {
            console.log("Track Order button clicked");
            openTrackOrderModal(encodedOrderString, encodedTrackSettingsString);
          };
        })();
        // Append `trackOrder` wherever necessary, for example:
        trackOrder11.appendChild(trackOrder);
      }

      const viewDetailsButton = document.createElement("button");
      viewDetailsButton.textContent = "View Details";
      viewDetailsButton.className = "link-btn";
      viewDetailsButton.addEventListener("click", () =>
        viewOrderDetails(order)
      );

      const trackOrder1 = document.createElement("button");
      trackOrder1.setAttribute(
        "data-order",
        JSON.stringify(order.items).replace(/'/g, "\\'")
      );
      trackOrder1.textContent = "Reorder";
      trackOrder1.classList.add("link-btn", "reorder-btn");
      trackOrder1.addEventListener("click", async function () {
        const rawData = this.getAttribute("data-order");
        console.log("Raw data for reorder:", rawData);
        try {
          clearCart();

          if (!rawData || typeof rawData !== "string") {
            console.error("Invalid or empty JSON data:", rawData);
            return;
          }

          const lineItems = JSON.parse(rawData);
          console.log("Reordering items:", lineItems[0]);

          if (!Array.isArray(lineItems) || lineItems.length === 0) {
            console.error("No valid line items found:", lineItems);
            return;
          }

          showLoader(); // Show loader before adding items

          for (const item of lineItems) {
            console.log(
              `Adding item to cart: ${item.title} (Variant ID: ${item.variantId}, Quantity: ${item.quantity})`
            );
            const response = await fetch("/cart/add.js", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                id: item.variantId,
                quantity: item.quantity,
                attributes: {
                  reorder_source: "customer_accounts_by_axentra",
                  campaign: "reorder"
                },
              }),
            });

            if (!response.ok) {
              const errorResponse = await response.json();
              console.error(
                `Error adding item to cart: ${item.title}`,
                errorResponse
              );
            } else {
              console.log(`Successfully added ${item.title} to cart`);
            }
          }

          // Show loader on page unload (before redirecting)
          hideLoader(); // ✅ Hide loader before redirecting

          // Redirect to checkout
          setTimeout(() => {
            window.location.href = "/checkout?utm_source=customer_accounts_by_axentra&utm_campaign=reorder&utm_medium=app";
          }, 500);
        } catch (error) {
          console.error("Error parsing JSON:", error);
          hideLoader(); // Hide loader in case of an error
        }
      });
      const trackOrder2 = document.createElement("button");
      trackOrder2.textContent = "Cancel Order";
      trackOrder2.className = "link-btn";

      let canEditAddress = false;
      let overlay
      let editModuleGeneralSettings = null;
      const representativeShopDomain = Shopify.shop;
      // Assuming getModuleSettings is defined elsewhere and accessible
      const moduleSettings = await getModuleSettings(representativeShopDomain);
      if (moduleSettings) {
        const updateAddressModule = moduleSettings.find(m => m.module_name === "update address");
        if (updateAddressModule && updateAddressModule.is_enabled) {
          const generalSettings = updateAddressModule.module_json?.edit_orders?.general_settings;
          if (generalSettings && generalSettings.is_enabled) {
            editModuleGeneralSettings = generalSettings;
            console.log("Edit module general settings found for table:", editModuleGeneralSettings);
          } else {
            console.log("Edit module general settings not enabled or not found for table.");
          }
        } else {
          console.log("Update address module not enabled or not found for table.");
        }
      } else {
        console.log("Module settings for edit could not be fetched or are null for table.");
      }
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
      const editAddressHTML = canEditAddress ? `
            <span style="display: inline-flex; align-items: center; cursor: pointer; margin-right:12px; font-size:12px;" class="Axentra-edit-btn-color omc-edit-span"
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

      // Build the Return, Exchange, and Replace buttons as HTML strings
      const returnBtn = `
  <span class="Axentra-return-btn-color omc-cancel-order-text link-btn"
        onclick="openReturnModal('${encodedOrderString}', '${encodedSettingsString}', '${encodedReturnInfoString}')"
        style="display: inline-flex; align-items: center;  padding:5px; ">
    <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px; " width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-undo2 h-3 w-3 mr-1"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path></svg>Return
  </span>
`;
      // const viewDetail = ` <span style="display: inline-flex; align-items: center; font-size:20px;" class="Axentra-view-btn-color omc-cancel-order-text view-order-details-link" onClick="${viewOrderDetails(order)}">
      //                     <svg class="xircls_svg2" style="margin-right: 8px; " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>View
      //                   </span>`;

      const exchangeBtn = `
  <span class="Axentra-exchange-btn-color omc-cancel-order-text link-btn"
        onclick="openExchangeModal('${encodedOrderString}', '${encodedSettingsString}', '${encodedReturnInfoString}')"
        style="display: inline-flex; align-items: center;  padding:5px; ">
    <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px; "  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-right h-3 w-3 mr-1"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>Exchange
  </span>
`;

      const replaceBtn = `
  <span class="Axentra-replace-btn-color omc-cancel-order-text link-btn"
        onclick="openReplacementModal('${encodedOrderString}', '${encodedSettingsString}', '${encodedReturnInfoString}')"
        style="display: inline-flex; align-items: center; padding:5px; ">
    <svg class="xircls_svg2" style="margin-right: 8px; " xmlns="http://www.w3.org/2000/svg" width="16" height="16"
         viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 6v6l4 2"></path>
    </svg>Replace
  </span>
`;

      actionDiv.innerHTML = `
              <td colspan="5" class="order-table-data order-table-data-left omc-order-actions">
                <div class="omc-actions-wrapper">
                <span style="display: inline-flex; align-items: center;" 
                      class="Axentra-view-btn-color omc-cancel-order-text view-order-details-link"
                      onclick='viewOrderDetails(${JSON.stringify(order).replace(/'/g, "\\'")})'
                >
              <svg class="xircls_svg2" style="margin-right: 8px; gap:2px;" xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0
                1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path> 
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              View
              </span>


                <span style="display: inline-flex; align-items: center; " class="Axentra-reorder-btn-color reorder-btn omc-cancel-order-text" data-order='${JSON.stringify(order.items).replace(/'/g, "\\'")}' onclick = ' attachReorderEventListeners(${JSON.stringify(order).replace(/'/g, "\\'")})'>
                    <svg class="xircls_svg2" style="margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>Reorder
                </span>
                  
                  ${showTrackButton ? `<span style="display: inline-flex; align-items: center;" onclick="openTrackOrderModal('${encodedOrderString}', '${encodedTrackSettingsString}');" class="omc-track-order-link Axentra-track-btn-color">
                    <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg2" style="margin-right: 8px;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>Track
                  </span>` : ""}
                  ${editAddressHTML}
                  ${returnButtonHTML}
                  ${exchangeButtonHTML}
                   <!-- REPLACED hardcoded span with dynamic variable -->
                  ${replacementButtonHTML}
                  ${cancelOrderData ? `
  ${!isAlreadyCancelled ? `
    <span style="margin-right:12px; font-size:12px;" class="Axentra-cancel-btn-color omc-cancel-order-text ${cancelBtnDisabled ? 'cancel-disabled' : ''}"
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

      const editBtn = document.createElement("button");
      setTimeout(() => {
        if (cancelBtnDisabled) {
          trackOrder2.style.color = "gray";
          trackOrder2.style.pointerEvents = "none";
          trackOrder2.style.cursor = "default";
        } else {
          trackOrder2.onclick = () => cancelOrder(order.orderId);
        }
        trackOrder11.appendChild(viewDetailsButton);
        if (myOrders.includes("Order_Tracking")) {
          console.log(myOrders.includes("Order_Tracking"), "myOrders.includes(Order_Tracking)");

          // trackOrder11.appendChild(trackOrder);
        }
        if (myOrders.includes("Re_order")) {
          trackOrder11.appendChild(trackOrder1);
        }
        if (myOrders.includes("Cancel_Order") && !isCancelled) {
          trackOrder11.appendChild(trackOrder2);
        }



        // Add Return button next to Cancel Order
        // const returnBtn = document.createElement("button");
        // returnBtn.textContent = "Return";
        // returnBtn.classList.add("link-btn", "Axentra-return-order-btn");
        // returnBtn.onclick = function () {
        //   // openModal(encodedOrderString, encodedReturnSettingsString,encodedReturnInfoString);
        //   openReturnModal(encodedOrderString, encodedSettingsString, encodedReturnInfoString);
        // }


        // trackOrder11.appendChild(returnBtn);

        const exchangeButtton = document.createElement('button');
        exchangeButtton.textContent = 'Exchange';
        exchangeButtton.classList.add('link-btn', 'Axentra-exchange-order-btn');
        exchangeButtton.onclick = function () {
          // openexchangeModal(encodedOrderString,encodedReturnSettingsString);
          openExchangeModal(encodedOrderString, encodedSettingsString, encodedReturnInfoString);
        }
        // trackOrder11.appendChild(exchangeButtton);


        const replaceButton = document.createElement('button');
        replaceButton.textContent = 'Replace Button';
        replaceButton.classList.add('link-btn', 'Axentra-exchange-order-btn');
        replaceButton.onclick = function () {
          alert('Hi myself replacement');
          openReplacementModal(encodedOrderString, encodedSettingsString, encodedReturnInfoString)
        }
        // trackOrder11.appendChild(replaceButton);

        if (canEditAddress) {
          console.log("canedit4", canEditAddress)
          // These classes align with the pattern of other action buttons,
          // allowing CSS to style them consistently.
          editBtn.classList.add("edit-btn-mobile", "edit-btn-mobile-spacing", "link-btn");
          editBtn.textContent = "Edit";
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
          trackOrder11.appendChild(editBtn);
        }
      }, 800)

      // const toggleCell = row.querySelector(".toggle-cell");
      // toggleCell.innerHTML = "";
      // toggleCell.appendChild(trackOrder11);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
  }
  attachReorderEventListeners();
  return table;
}

function viewOrderDetails(order) {
  const overlay = document.createElement("div");
  overlay.classList.add("xircls-modal-overlay");

  const modal = createOrderDetailsModal(order, overlay);

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  setTimeout(() => {
    modal.classList.add("slide-in-top");
  }, 50);

  overlay.addEventListener("click", () => closeModal(modal, overlay));
}

function createOrderDetailsModal(order, overlay) {
  const { address1, address2, city, province, zip, country } =
    order.shippingAddress;
  const fullAddress = [address1, address2, city, province, zip, country]
    .filter(Boolean)
    .join(", ");
  const modal = document.createElement("div");
  modal.className = "order-details-modal card";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  const orderModal = document.createElement("div");
  orderModal.classList.add("order-modal");

  const orderItemsContent = document.createElement("div");
  order.items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
            <div style="display: flex; align-items: flex-start; border-bottom: 1px solid #f3f4f6; padding-bottom: 1.5rem;">
                <div style="height: 6rem; width: 6rem; overflow: hidden; margin-right: 1.5rem; border: 1px solid #f3f4f6; flex-shrink: 0;">
                    <img src=${item.image} alt=${item.title} style="height: 100%; width: 100%; object-fit: cover;">
                </div>
                <div style="flex-grow: 1;">
                    <div style="display: flex; flex-direction: row; justify-content: space-between;">
                        <div style="font-family: var(--secondaryFontFamily); font-weight: 500; font-size: 16px !important; margin-bottom: 0.25rem; color: #000;">${item.title}</div>
                        <div style="font-family: var(--secondaryFontFamily); font-weight: 500; font-size: 14px !important;">${item.price}</div>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; column-gap: 3rem; row-gap: 0.5rem; font-size: 14px !important; color: #6b7280;">
                        <div style="font-size: 13px;font-family: var(--secondaryFontFamily);">Quantity: ${item.quantity}</div>
                    </div>
                </div>
            </div>
    `;
    orderItemsContent.appendChild(itemDiv);
  });

  const orderModalContent = document.createElement("div");
  orderModalContent.innerHTML = `<div>
    <div style="display: flex; flex-direction: column; gap: 0.375rem; margin-bottom: 10px; position: relative;">
      <button class="xircls-order-details-modal-close-btn" style="position: absolute; top: -16px; right: -15px; background: none; border: none; background-color: transparent; color: black; font-family: var(--font-family); letter-spacing: 0px; border: none; cursor: pointer; font-size: 30px;">&times;</button>
        <div id="" style="letter-spacing: -0.015em; font-size: 22px; font-family: var(--font-family); font-weight: 500;  color: #000;">
            Order Details ${order.orderNumber}
        </div>
        <div id="" style="font-size: 12px !important; color: #000; font-family: var(--secondaryFontFamily);">
            Placed on ${order.orderDate}
        </div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem; margin-top: 2rem;font-family: var(--secondaryFontFamily); ">
        <div>
            <div style="font-size: 14px; font-weight: 500; text-transform: uppercase;  color: #000;">Shipping Address</div>
            <div style="color: #000; font-size: 13px;">${fullAddress}</div>
        </div>
        <div>
            <div style="font-size: 14px; font-weight: 500; text-transform: uppercase;  color: #000;">Payment Method</div>
            <div style="color: #000; font-size: 13px;">${order.paymentGateway
    }</div>
        </div>
        <div>
            <div style="font-size: 14px; font-weight: 500; text-transform: uppercase;  color: #000;">Order Status</div>
            ${order.cancelledAt
      ? `<span style="padding: 3px 10px; border-radius: 10px; font-size: 11px; font-weight: bold; color: #f00; background-color: #ffb6b6;">Cancelled</span>`
      : `<span style="padding: 2px 10px; border-radius: 10px; font-size: 11px; font-weight: bold; color: #15803D; background-color: #F0FDF4;">${order.fulfillmentStatus}</span>`
    }
        </div>
        <div>
            <div style="font-size: 14px; font-weight: 500; text-transform: uppercase;  color: #000;">Tracking Number</div>
            <div style="color: #000; font-size: 13px;">${order.orderId}</div>
        </div>
    </div>

    <div style="margin-bottom: 0.5rem;">
        <div style="font-size: 20px; font-family: var(--font-family); font-weight: 500; margin-bottom: 1.5rem; letter-spacing: -0.015em; color: #000;">Order Items</div>
        <div id="xircls-order-items-placeholder"></div>
    </div>
    <div style="border-top: 1px solid #E5E7EB; padding-top: 1.5rem; padding-bottom: 2rem;">
        <div style="font-size: 20px; font-family: var(--font-family); font-weight: 500; margin-bottom: 1.5rem; letter-spacing: -0.015em; color: #000;">Order Summary</div>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; font-family: var(--secondaryFontFamily);">
            <div style="display: flex; justify-content: space-between;">
                <div style="color: #000; font-size: 13px;">Subtotal</div>
                <div style="color: #000; font-size: 13px;">${order.subtotalPrice
    }</div>
            </div>
            <div style="display: flex; justify-content: space-between;">
                <div style="color: #000; font-size: 13px;">Discount</div>
                <div style="color: #000; font-size: 13px;">${order.total_discount
    }</div>
            </div>
            <div style="display: flex; justify-content: space-between; font-weight: 500; padding-top: 10px; border-top: 1px solid #ebebeb;">
                <div style="color: #000; font-size: 13px;">Total</div>
                <div style="color: #000; font-size: 13px;">${order.totalPrice
    }</div>
            </div>
        </div>
    </div>
    <div style="display: flex; justify-content: flex-end;">
        <button class="xircls-order-details-modal-close-btn" style="padding: 6px 14px !important; font-size: 14px !important; background-color: var(--btn-background-color) !important; color: var(--btn-text-color) !important;font-family: var(--font-family); letter-spacing: 0.05em; border: none; cursor: pointer;">CLOSE</button>
    </div>
</div>
`;
  const closeBtn = modal.querySelector(".xircls-order-details-modal-close-btn");
  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.remove();
      overlay?.remove(); // if you passed an overlay
    };
  }
  const placeholder = orderModalContent.querySelector(
    "#xircls-order-items-placeholder"
  );
  placeholder.appendChild(orderItemsContent);
  orderModal.appendChild(orderModalContent);
  modal.appendChild(orderModal);
  return modal;
}
function closeModal(modal, overlay) {
  if (modal) {
    modal.classList.remove("slide-in-top");
    setTimeout(() => {
      modal.remove();
      if (overlay) overlay.remove();
      document.body.style.overflow = "";
    }, 300);
  }
}
function createTableWithPagination(originalData, tableType, itemsPerPage = 4) {
  let currentPage = 1;
  let filteredData = [...originalData]; // Always start with complete original data

  // console.log("createTableWithPagination received:", originalData.length, "orders");
  const tableContainer = document.createElement("div");
  tableContainer.className = "table-container";
  const header = document.createElement("div");
  header.className = "table-header";
  const onediv = document.createElement("div");
  onediv.classList.add("pagination-one-div");
  const titleDiv = document.createElement("div");
  const title = document.createElement("span");
  title.style.marginBottom = "1px";
  title.style.fontSize = "2.8rem";
  title.style.color = "var(--heading-color)"
  title.textContent = "Recent Orders";
  title.classList.add("order-recent-title"); // Fixed: was using = instead of add

  const description = document.createElement("div");
  description.style.marginTop = "1px";
  description.style.fontSize = "1.5rem";
  description.textContent = "Browse your recent orders and track their status";
  description.style.color = "var(--card-heading-color)"
  description.fontFamily = "var(--secondaryFontFamily) !important"
  titleDiv.appendChild(title);
  titleDiv.appendChild(description);
  const controlsDiv = document.createElement("div");
  controlsDiv.className = "header-controls";
  controlsDiv.style.display = "flex";
  controlsDiv.style.gap = "1rem";
  controlsDiv.style.alignItems = "center";
  const searchBox = document.createElement("div");
  searchBox.className = "search-box";
  searchBox.style.display = "flex";
  searchBox.style.alignItems = "center";
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search orders...";
  searchInput.classList.add("custom-search-input"); // Fixed: was using = instead of add

  const searchIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  searchIcon.setAttribute("viewBox", "0 0 24 24");
  searchIcon.setAttribute("width", "20");
  searchIcon.setAttribute("height", "20");
  searchIcon.innerHTML = `
      <path d="M10 2a8 8 0 106.32 12.906l4.387 4.387a1 1 0 001.415-1.415l-4.387-4.387A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" fill="currentColor"/>
  `;
  searchBox.appendChild(searchInput);
  searchBox.appendChild(searchIcon);
  const select = document.createElement("select");
  select.className = "order-filter";
  const orderFilterOptions = [
    "All Orders",
    "Last Order",
    "Last 30 Days",
    "Last 6 Months",
  ];
  orderFilterOptions.forEach((filterOption) => {
    const option = document.createElement("option");
    option.value = filterOption;
    option.textContent = filterOption;
    select.appendChild(option);
  });
  setTimeout(() => {
    if (myOrders.includes("Search_Orders")) {
      controlsDiv.appendChild(searchBox);
    }
    controlsDiv.appendChild(select);
  }, 800)

  onediv.appendChild(titleDiv);
  onediv.appendChild(controlsDiv);
  header.appendChild(onediv);
  tableContainer.appendChild(header);

  const contentWrapper = document.createElement("div");
  contentWrapper.className = "content-wrapper";

  // Create pagination controls container
  const paginationContainer = document.createElement("div");
  paginationContainer.className = "pagination-container";

  const renderPage = (page) => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentPageData = filteredData.slice(start, end);

    // Clear content
    contentWrapper.innerHTML = "";
    paginationContainer.innerHTML = "";

    // Render table
    // const table = await createTable(currentPageData, tableType);
    // contentWrapper.appendChild(table);

    (async function () {
      const table = await createTable(currentPageData, tableType);
      contentWrapper.appendChild(table);
    })();


    attachReorderEventListeners();
    // Render pagination controls if there are multiple pages
    if (totalPages > 1) {
      renderPaginationControls(page, totalPages);
    }

    // Show "No results found" message if no data after filtering
    if (filteredData.length === 0) {
      const noResultsDiv = document.createElement("div");
      noResultsDiv.className = "no-results";
      noResultsDiv.style.textAlign = "center";
      noResultsDiv.style.padding = "2rem";
      noResultsDiv.style.color = "#666";
      noResultsDiv.textContent = searchInput.value
        ? `No orders found matching "${searchInput.value}"`
        : "No orders found";
      contentWrapper.appendChild(noResultsDiv);
    }
  };

  const renderPaginationControls = (page, totalPages) => {
    const paginationDiv = document.createElement("div");
    paginationDiv.className = "pagination";
    paginationDiv.style.display = "flex";
    paginationDiv.style.justifyContent = "right";
    paginationDiv.style.alignItems = "center";
    paginationDiv.style.gap = "0.5rem";
    paginationDiv.style.marginTop = "1rem";

    // Previous button
    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.disabled = page === 1;
    prevButton.classList.add("xircls-order-page-btn");
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
      }
    });

    // Page numbers
    const startPage = Math.max(1, page - 2);
    const endPage = Math.min(totalPages, page + 2);

    paginationDiv.appendChild(prevButton);

    // Add first page if not in range
    if (startPage > 1) {
      const firstPageButton = createPageButton(1, page);
      paginationDiv.appendChild(firstPageButton);
      if (startPage > 2) {
        const ellipsis = document.createElement("span");
        ellipsis.textContent = "...";
        ellipsis.style.padding = "0 0.5rem";
        paginationDiv.appendChild(ellipsis);
      }
    }

    // Add page buttons in range
    // for (let i = startPage; i <= endPage; i++) {
    //   const pageButton = createPageButton(i, page);
    //   paginationDiv.appendChild(pageButton);
    // }

    // Add last page if not in range
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        const ellipsis = document.createElement("span");
        ellipsis.textContent = "...";
        ellipsis.style.padding = "0 0.5rem";
        paginationDiv.appendChild(ellipsis);
      }
      const lastPageButton = createPageButton(totalPages, page);
      paginationDiv.appendChild(lastPageButton);
    }

    // Next button
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("xircls-order-page-btn")
    nextButton.disabled = page === totalPages;
    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
      }
    });

    paginationDiv.appendChild(nextButton);
    paginationContainer.appendChild(paginationDiv);
  };

  const createPageButton = (pageNum, currentPageNum) => {
    const button = document.createElement("button");
    button.textContent = pageNum;
    button.className = pageNum === currentPageNum ? "active" : "";
    button.addEventListener("click", () => {
      currentPage = pageNum;
      renderPage(currentPage);
    });
    return button;
  };

  // Enhanced search functionality
  const performSearch = () => {
    const searchTerm = searchInput.value.toLowerCase().trim();

    console.log("Performing search with term:", searchTerm);
    console.log("Original data length:", originalData.length);

    // ALWAYS start with the complete original dataset
    filteredData = [...originalData];

    // Apply search filter if there's a search term
    if (searchTerm !== "") {
      filteredData = originalData.filter((order) => {
        const orderNumber = String(order.orderNumber || "").toLowerCase();
        const customerName = String(order.customerName || "").toLowerCase();
        const status = String(order.status || "").toLowerCase();

        // Search in multiple fields
        const matches =
          orderNumber.includes(searchTerm) ||
          customerName.includes(searchTerm) ||
          status.includes(searchTerm);

        return matches;
      });
    }

    console.log("After search filter, data length:", filteredData.length);

    // Apply additional filter
    applyCurrentFilter();

    console.log(
      "After applying current filter, data length:",
      filteredData.length
    );

    // Reset to first page when search changes
    currentPage = 1;
    renderPage(currentPage);
  };

  searchInput.addEventListener("input", performSearch);

  const applyCurrentFilter = () => {
    const selectedValue = select.value;
    if (selectedValue !== "All Orders") {
      // Apply your specific filter logic here
      // This is just a placeholder - implement your actual filter logic
      const now = new Date();
      filteredData = [...originalData]; // Reset to original data *before* filtering

      filteredData = filteredData.filter((order) => {
        switch (selectedValue) {
          case "Last Order":
            // Implement logic to show last order ONLY
            // You need to determine how to identify the LAST order in your data
            let lastOrder = originalData[0]; //Temporary assignment for compiling purposes only.
            if (originalData.length > 1) {
              for (let i = 1; i < originalData.length; i++) {
                if (new Date(originalData[i].orderDate).getTime() > new Date(lastOrder.orderDate).getTime()) {
                  lastOrder = originalData[i]; //Replace the last order if we found something more recent
                }
              }
            }
            //check if the current order is the last order
            return order === lastOrder;

          case "Last 30 Days":
            // Filter orders from last 30 days
            const thirtyDaysAgo = new Date(
              now.getTime() - 30 * 24 * 60 * 60 * 1000
            );
            return order.date && new Date(order.date) >= thirtyDaysAgo;
          case "Last 6 Months":
            // Filter orders from last 6 months
            const sixMonthsAgo = new Date(
              now.getTime() - 6 * 30 * 24 * 60 * 60 * 1000
            );
            return order.date && new Date(order.date) >= sixMonthsAgo;
          default:
            return true;
        }
      });
    }
  };

  select.addEventListener("change", () => {
    // Reset filteredData and reapply all filters
    performSearch();
  });

  // Initial render
  renderPage(currentPage);
  tableContainer.appendChild(contentWrapper);
  tableContainer.appendChild(paginationContainer);
  attachReorderEventListeners();
  return tableContainer;
}

function toggleOrderDetailsByRow(event) {
  const targetRow = event.currentTarget;
  const orderNumber = targetRow.dataset.index;
  const moreInfoRow = document.querySelector(`tr[data-id="${orderNumber}"]`);
  const isVisible = moreInfoRow.style.display === "table-row";
  moreInfoRow.style.display = isVisible ? "none" : "table-row";
  moreInfoRow.style.border = "none";
}
async function getReminderData(id) {
  const url = "https://omc.axentraos.co.in/get_reminder_id/";
  const formData = new FormData();
  // formData.append("app", "oh_my_customer");
  formData.append("shop", Shopify.shop);
  formData.append("email", profile_email);
  formData.append("productId", id);
  payload = {
    shop: Shopify.shop,
    email: profile_email,
    productId: id,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log("Response from server:", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function injectEditReminderModal(item, id) {
  console.log("rendering the Reminder modal");
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
    console.log(reminderData, item);
    saveEditReminder(reminderData, item, id);
  }
}
async function saveEditReminder(data, item, reminder_id) {
  const { id: metafieldId, wishlist } = await fetchWishlist();

  if (!customerId || !metafieldId) {
    createStatusToast(
      "Reminder Failed",
      "We couldn’t edit your reminder. Please try again or contact support for assistance.",
      "error"
    );
    return;
  }

  // Clone and prepare updated wishlist
  const updatedWishlist = Array.isArray(wishlist) ? [...wishlist] : [];

  // Check if item already exists by id
  const existingIndex = updatedWishlist.findIndex((w) => w.id === item.id);

  const itemWithReminder = {
    ...item,
    reminderDate: `${data.date} ${data.time}`,
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
      type: "json",
    },
  };

  try {
    const response = await fetch(
      `https://${baseUrl}/api/v1/update_metafield/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    const resData = await response.json();

    if (!response.ok) {
      throw new Error(`Error saving wishlist: ${resData.message}`);
    }
    const payloadUpt = {
      caltime: data.time,
      caldate: data.date,
      reminderId: reminder_id,
    };
    await fetch(`https://${baseUrl}/api/v1/update_task/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloadUpt),
    });

    createStatusToast(
      `Reminder Scheduled`,
      "We'll notify you about this item on your chosen date and time.",
      "success"
    );
  } catch (error) {
    console.error("Error saving reminder:", error);
  } finally {
    setTimeout(() => window.location.reload(), 500);
  }
}
async function editReminder(item) {
  const removeId = await getReminderData(item.id);
  injectEditReminderModal(item, removeId[0].id);
}
async function removeReminder(item) {
  const removeId = await getReminderData(item.id);
  console.log(removeId, "iddddd");
  const removeUrl = `https://${baseUrl}/api/v1/delete_task/`;
  const payload = {
    reminderId: removeId[0].id,
  };
  try {
    const response = await fetch(removeUrl, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log("Response from server:", data);
    const { id, wishlist } = await fetchWishlist();
    wishlist.forEach((items) => {
      if (items.id === item.id) {
        console.log(items.reminderDate, "wishlistttttttttttRemove");
        delete items.reminderDate;
        console.log(items.reminderDate, "withoutdate");
      }
    });
    console.log(wishlist, "updatedWishloist");

    const payloadUpdt = {
      customerId: customerId,
      customer_name: prof_name,
      shop: Shopify.shop,
      app: "oh_my_customer",
      metafieldId: id,
      email: profile_email,
      productId: item.id,
      metafield: {
        id: id,
        namespace: "wishlist",
        key: "items",
        value: JSON.stringify(wishlist),
        type: "json",
      },
    };
    const response1 = await fetch(
      `https://${baseUrl}/api/v1/update_metafield/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadUpdt),
      }
    );
    const data1 = await response1.json();

    if (!response.ok) {
      throw new Error(`Error saving wishlist: ${data1.message}`);
    }
    console.log("Wishlist successfully saved to metafield:", wishlist);
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => window.location.reload(), 500);
  }
}
function createWrapperFromArray(items) {
  // Create a wrapper element
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.gap = "16px";

  // Loop through each item in the array
  items.forEach((item, index) => {
    // Create a new div element for each item
    const div = document.createElement("div");

    const stockStatus = item.available
      ? '<span style="font-size: 14px; color: #10b981; font-family: var(--font-family);">In Stock</span>'
      : '<span style="font-size: 14px; color: #EF362E; font-family: var(--font-family);">Out of Stock</span>';

    const inputDate = item.reminderDate ? new Date(item.reminderDate) : null;
    let formattedDate = "";
    if (inputDate && !isNaN(inputDate)) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      formattedDate = inputDate.toLocaleDateString("en-US", options);
    }
    // Set the innerHTML of the div with a span tag
    div.innerHTML = `
     <div>
              <div class="xircls-wishlist-card" style="border: 1px solid var(--card-border-color); padding: 16px; display: flex; gap: 16px; align-items: center; background-color: var(--card-background-color); border-radius: var(--card-border-radius); ">
              <div style="">
                  <div class="xircls-wishlist-card-imageDiv" style="height: 160px; width: 100%; overflow: hidden;">
                      <img src="${item.image}" alt="${item.name
      }" style="height: 100%; width: 100%; object-fit: cover;">
                  </div>
              </div>
              <div style="">
                  <span style="display: block; font-size: 20px; font-family: var(--secondaryFontFamily); font-weight: 500; margin-bottom: 4px; color: var(--card-label-color);">${item.name
      }</span>
                  <span style="color: var(--card-text-color); font-family: var(--secondaryFontFamily); margin-bottom: 8px; display:none;">${item.description ? item.description : ""}</span>
                  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
                       ${stockStatus}
                      <span style="font-size: 14px; color: var(--card-label-color); font-family: var(--secondaryFontFamily);">Added ${formatDate(
        item.dateAdded
      )}</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px; ">
                    ${item.reminderDate
        ? `<div  class="xircls-wishlist-card-reminderDiv"  style="border-radius: var(--card-border-radius); border: 1px solid var(--card-border-color); color: #000; padding: 5px !important;">
                      <div style="display: flex; align-items: first baseline; gap: 8px;color: var(--card-label-color)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="18" height="18" stroke-width="2" class="remind-bell" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                        <div >Reminder set for ${formattedDate}</div>
                      </div>
                      <div style="display: flex; align-items: center; gap: 8px; font-size: 12px !important; text-decoration:underline; text-decoration-color: var(--card-text-color); margin-left: 20px !important; cursor: pointer;">
                        <div style="color: var(--card-text-color);" type="button" onclick='editReminder(${JSON.stringify(
          item
        )})'>Edit</div>
                        <div style="color: var(--card-text-color);" type="button" onclick='removeReminder(${JSON.stringify(
          item
        )})'>Remove Reminder</div>
                      </div>
                    </div>`
        : ``
      }
                  </div>
              </div>
              <div class="wishlist-bottom-section" style="display: flex; flex-direction: column; gap: 16px; align-items: center; justify-content: space-between; margin-left: auto;">
                  <div style="font-family: var(--secondaryFontFamily); font-size: 18px; font-weight: 500; color:#000; margin-left: auto;">${item.price
      }</div>
                  <div style="display: flex; flex-direction: row; gap: 8px; width: 100%; justify-content: center;">
                      <button onclick="removeFromWishlist('${item.id
      }')" style="color: #000; border: 1px solid #000; padding: 8px; width: 100%; text-align: center; display: flex; align-items: center; justify-content: center; background-color: transparent; cursor:pointer;" title="Remove from wishlist">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M6 7H18V19C18 20.1 17.1 21 16 21H8C6.9 21 6 20.1 6 19V7ZM8 2H16V4H21V6H3V4H8V2Z"/></svg>
                      </button>
                       ${item.reminderDate
        ? ``
        : `<button id="xircls-inject-reminder-modal-button" style="color: #000; border: 1px solid #000; padding: 8px;  width: 100%; text-align: center; background-color: transparent; display: flex; align-items: center; justify-content: center; cursor:pointer;" title="Set reminder"><svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C10.343 2 9 3.343 9 5V5.29C6.718 6.201 5 8.417 5 11V16L3 18V19H21V18L19 16V11C19 8.417 17.282 6.201 15 5.29V5C15 3.343 13.657 2 12 2ZM12 22C13.105 22 14 21.105 14 20H10C10 21.105 10.895 22 12 22Z"/></svg></button>`
      }
                      <button class="wishlist-action-btns" onclick="addToCart('${item.variants[0].id}', '${item.id
      }')" style=" padding: 8px 16px; font-family: var(--secondaryFontFamily); font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; width: 100%; display: flex; align-items: center; justify-content: center; cursor:pointer;">
                          <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="height: 16px; width: 16px; margin-right: 4px;">
                              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                              <path d="M3 6h18"></path>
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                          </svg>
                          <span style="text-wrap: nowrap;">Add to Cart</span>
                      </button>
                      <button class="wishlist-action-btns" onclick="buyNow('${item.variants[0].id}', '${item.id
      }')" style=" padding: 8px 16px; font-family: var(--secondaryFontFamily); font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; width: 100%; display: flex; align-items: center; justify-content: center; border: none; cursor:pointer;">
                          <span style="text-wrap: nowrap;">Buy Now</span>
                      </button>
                  </div>
              </div>
          </div>
    `;
    // div.querySelector('#injectReminderModalButton').forEach(btn => { // onclick='injectReminderModal(${JSON.stringify(item)})'
    //   btn.addEventListener('click', () => injectReminderModal(item));
    // });
    // Append the div to the wrapper

    const injectReminder = div.querySelector(
      "#xircls-inject-reminder-modal-button"
    );

    if (injectReminder) {
      //onclick='injectReminderModal(${JSON.stringify(item)})'
      injectReminder.onclick = () => injectReminderModal(item);
    }

    wrapper.appendChild(div);
  });

  // Return the wrapper containing all the items
  return wrapper;
}
async function saveReminder(data, item) {
  const { id: metafieldId, wishlist } = await fetchWishlist();

  if (!customerId || !metafieldId) {
    createStatusToast(
      "Reminder Failed",
      "We couldn’t edit your reminder. Please try again or contact support for assistance.",
      "error"
    );
    return;
  }

  // Clone and prepare updated wishlist
  const updatedWishlist = Array.isArray(wishlist) ? [...wishlist] : [];

  // Check if item already exists by id
  const existingIndex = updatedWishlist.findIndex((w) => w.id === item.id);

  const itemWithReminder = {
    ...item,
    reminderDate: `${data.date} ${data.time}`,
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
    customer_name: customerName,
    shop: Shopify.shop,
    app: "oh_my_customer",
    metafieldId,
    email: customerEmail,
    caltime: data.time,
    caldate: data.date,
    productId: item.id,
    metafield: {
      id: metafieldId,
      namespace: "wishlist",
      key: "items",
      value: JSON.stringify(updatedWishlist),
      type: "json",
    },
  };
  const url = `https://${baseUrl}/api/v1/update_metafield/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const resData = await response.json();

    if (!response.ok) {
      throw new Error(`Error saving wishlist: ${resData.message}`);
    }

    createStatusToast(
      `Reminder Scheduled`,
      "We'll notify you about this item on your chosen date and time.",
      "success"
    );
  } catch (error) {
    console.error("Error saving reminder:", error);
  } finally {
    setTimeout(() => window.location.reload(), 500);
  }
}
async function injectReminderModal(item) {
  console.log("rendering the Reminder modal");
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
    console.log(reminderData, item);
    saveReminder(reminderData, item);
  }
}
function getReminderDateFromCalendar(calendarElement) {
  const selectedDaySpan = calendarElement.querySelector(".selected-day"); // Example: Assuming selected days have a class
  if (selectedDaySpan) {
    const day = selectedDaySpan.textContent;
    const monthYear = calendarElement.querySelector(".month").textContent; // Example: Assuming the month/year is in a span with this class
    const [monthName, year] = monthYear.split(" ");
    const monthNumber = new Date(`${monthName} 1, ${year}`).getMonth() + 1;
    const dateString = `${year}-${monthNumber
      .toString()
      .padStart(2, "0")}-${day.padStart(2, "0")}`;
    return dateString;
  } else {
    return null; // Or handle the case where no date is selected
  }
}
function createEmptyItemsCard(type) {
  const card = document.createElement("div");
  card.classList.add("empty-items-card");

  const iconContainer = document.createElement("div");
  iconContainer.classList.add("empty-items-icon-container");

  const icon = document.createElement("div");
  if (type === "wishlist") {
    icon.innerHTML = emptyHeartSVG;
  } else {
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="18" height="18" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="red"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`;
  }
  icon.classList.add("empty-items-icon");

  iconContainer.appendChild(icon);

  const heading = document.createElement("h3");
  heading.classList.add("empty-items-heading");
  if (type === "wishlist") {
    heading.textContent = "Your wishlist is empty";
  } else if (type === "order") {
    heading.textContent = "No orders to display!";
  } else {
    heading.textContent = "No recently viewed items";
  }

  const paragraph = document.createElement("p");
  paragraph.classList.add("empty-items-paragraph");
  if (type === "wishlist") {
    paragraph.textContent = "Items added to your wishlist will appear here";
  } else if (type === "order") {
    paragraph.textContent = "Your orders will appear here";
  } else {
    paragraph.textContent = "Products you view will appear here";
  }
  const cardWrapper = document.createElement("div");
  cardWrapper.appendChild(iconContainer);
  cardWrapper.appendChild(heading);
  cardWrapper.appendChild(paragraph);
  cardWrapper.classList.add("empty-items-card-wrapper");
  card.appendChild(cardWrapper);

  return card;
}
function AddAllToCart(wishlist) {
  if (!wishlist || wishlist.length === 0) {
    createStatusToast(
      "Empty Wishlist",
      "Your wishlist is empty. Please try adding items to your wishlist.",
      "error"
    );
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
      createStatusToast(
        "Cart Updated",
        "Your changes have been saved! Your wishlist items are now available in your cart.",
        "success"
      );
      window.location.href = "/cart";
    })
    .catch((error) => {
      console.error("Error adding to cart:", error);
      createStatusToast(
        "Cart Update Fail",
        "We couldn’t update your cart. Please try again or contact support for assistance.",
        "error"
      );
    });
}
function BuyAll(wishlist) {
  if (!wishlist || wishlist.length === 0) {
    createStatusToast(
      "Empty Wishlist",
      "Your wishlist is empty. Please try adding items to your wishlist.",
      "error"
    );
    return;
  }

  const itemsToBuy = wishlist.map((product) => ({
    id: product.variants[0].id,
    quantity: 1,
  }));

  // Optional: Clear the cart first
  fetch("/cart/clear.js", { method: "POST" })
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
      window.location.href = "/checkout"; // Redirect to the checkout page
    })
    .catch((error) => {
      console.error("Error during Buy All:", error);
      createStatusToast(
        "Buy Request Fail",
        "We couldn’t process your request. Please try again or contact support for assistance.",
        "error"
      );
    });
}
function renderWishlist(wishlist) {
  const wishListsContainer = document.getElementById("wishListsContainer");
  wishListsContainer.innerHTML = "";

  const wishListHeader = document.createElement("div");
  wishListHeader.innerHTML = `
  <div id="xircls-wishlist-section-header" style="display: flex; flex-direction: row; justify-content: space-between; gap: 1rem; margin-bottom: 2rem;">
  <div style="display: flex; gap: 1rem;">
    <button style="font-size:12px; padding-bottom: 0.5rem; padding-left: 0.25rem; padding-right: 0.25rem; font-family: var(--font-family); font-size: 1.125rem; border: none; border-bottom: 2px solid #000; color: #000; font-weight: 500; background-color: transparent;">
      All Items (${wishlist.length})
    </button>
  </div>
  <div style="display: flex; flex-direction: row; gap: 0.5rem;">
    <button id="xircls-add-all-btn"  style="border: none; padding: 8px 16px; background-color: var(--btn-background-color); color: var(--btn-text-color); font-size: 10px; text-transform: uppercase; width: 100%; transition: background-color 0.3s ease; text-wrap: nowrap; cursor: pointer;">
      Add All to Cart
    </button>
    <button id="xircls-buy-all-btn" style="padding: 8px 16px; background-color: var(--btn-background-color); color: var(--btn-text-color);  font-size: 10px; text-transform: uppercase; width: 100%;  transition: background-color 0.3s ease; text-wrap: nowrap; border: none; cursor: pointer;">
      Buy All
    </button>
    <button id="xircls-clearall-btn" onclick='clearAllWishlist()' style="padding: 8px 16px; background-color: var(--btn-background-color); color: var(--btn-text-color); font-size: 10px; text-transform: uppercase; width: 100%;  transition: background-color 0.3s ease; text-wrap: nowrap; border: none; cursor: pointer;">
      Clear All
    </button>
  </div>
</div>
  `;
  // Assign JS-based onclick handlers
  const addAllBtn = wishListHeader.querySelector("#xircls-add-all-btn");
  const buyAllBtn = wishListHeader.querySelector("#xircls-buy-all-btn");

  if (addAllBtn) {
    addAllBtn.onclick = () => AddAllToCart(wishlist);
  }
  if (buyAllBtn) {
    buyAllBtn.onclick = () => BuyAll(wishlist);
  }

  wishListsContainer.appendChild(wishListHeader);

  if (!wishlist || wishlist.length === 0) {
    wishListsContainer.appendChild(createEmptyItemsCard("wishlist"));
    return;
  }

  const wishlistSafe = Array.isArray(wishlist) ? wishlist : [];
  const updatedWishlist = wishlistSafe.map((product) => {
    let imagePath = product.image || ""; // Use an empty string as fallback if image is undefined or null

    return {
      ...product,
      image: imagePath,
    };
  });

  console.log("Updated Wishlist with Correct Image URLs:", updatedWishlist);
  wishListsContainer.appendChild(createWrapperFromArray(updatedWishlist));
}

async function clearAllWishlist() {
  try {
    // Step 1: Fetch current wishlist metafield
    const response = await fetch(
      `https://${baseUrl}/api/v1/get_metafield/?customerId=${customerId}&shop=${Shopify.shop}&app=oh_my_customer`,
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
    console.log(wishlistMetafield, "wishlist metafield");

    if (!wishlistMetafield) {
      console.error("No wishlist metafield found.");
      return;
    }

    if (wishlistMetafield.value === "[]") {
      createStatusToast(
        "Empty Wishlist",
        "Your wishlist is empty. Please try adding items to your wishlist.",
        "error"
      );
      return;
    }

    // Step 3: Prepare the metafield update with an empty wishlist
    const updatedMetafield = {
      customerId: customerId,
      shop: Shopify.shop,
      app: "oh_my_customer",
      metafieldId: wishlistMetafield.id,
      productId: 0 || "",
      metafield: {
        id: wishlistMetafield.id,
        namespace: "wishlist",
        key: "items",
        value: JSON.stringify([]), // Clear all items
        type: "json",
      },
    };

    // Step 4: Send updated empty wishlist
    await fetch(`https://${baseUrl}/api/v1/update_metafield/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMetafield),
    });

    console.log("Cleared all wishlist items!");
    createStatusToast(
      "Removed from Wishlist",
      "This item has been successfully removed and is no longer saved in your wishlist.",
      "success"
    );

    renderWishlist([]); // Clear UI
  } catch (error) {
    console.error("Error clearing wishlist:", error);
  }
}

async function fetchWishlist() {
  if (customerId) {
    try {
      const metafieldResponse = await fetch(
        `https://${baseUrl}/api/v1/get_metafield/?customerId=${customerId}&shop=${Shopify.shop}&app=oh_my_customer`,
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
        if (existingMetafield) {
          console.log(
            "metafield idd is getting",
            JSON.parse(existingMetafield.value)
          );
          return {
            id: existingMetafield.id,
            wishlist: JSON.parse(existingMetafield.value),
          };
        } else {
          const createdMetafield = await createMetafield(); // Create new metafield
          return { id: createdMetafield.id, wishlist: [] };
        }
      } else {
        const createdMetafield = await createMetafield(); // Create new metafield
        return { id: createdMetafield.id, wishlist: [] };
      }
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      return { id: null, wishlist: [] };
    }
  } else {
    const wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];
    console.log("Logged out - Current wishlist from sessionStorage:", wishlist);
    return { id: null, wishlist: wishlist };
  }
}

function createLogoutCard() {
  const logoutWrapper = document.getElementById("logoutContainer");
  logoutWrapper.textContent = "";
  const logoutCard = document.createElement("div");
  logoutCard.className = "logout-container";
  logoutCard.innerHTML = `
      <div>
        <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="logout-icon">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" x2="9" y1="12" y2="12"></line>
      </svg>
      </div>
      <div class="logout-heading">Sign Out of Your Account</div>
      <div class="logout-text">Are you sure you want to sign out?</div>
      <button class="logout-button" onclick="Logout()">CONFIRM LOGOUT</button>
      </div>
  `;
  logoutWrapper.appendChild(logoutCard);
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

  // Delay logout redirect to let the toast appear
  setTimeout(() => {
    window.location.href = "/account/logout";

    // After successful logout, redirect to login
    // Note: if /account/logout redirects automatically to login, this may be optional
    setTimeout(() => {
      handleLogout();
    }, 1000); // Adjust delay if needed
  }, 1000);
}


async function renderOrders(ordersData, itemsPerPage = 3) {
  const imageUrl = window.shopAssets?.myImageUrl;

  const ordersContainer = document.getElementById("ordersContainer");
  ordersContainer.innerHTML = "";
  if (!ordersData || ordersData.length === 0) {
    ordersContainer.appendChild(createEmptyItemsCard("order"));
    return;
  }
  console.log(ordersData, "000000000000000");
  const orderDetailsContainer = document.createElement("div");
  orderDetailsContainer.innerHTML = `
  <div style="display: flex; align-items:center; gap: 20px; font-family: var(--font-family);">
  <div style="transition: all 0.3s ease; border: 1px solid var(--card-border-color); padding: 16px;  background-color: var(--card-background-color); border-radius: var(--card-border-radius)">
  <div style="display: flex; align-items: center; font-size: 16px;">
    <div style="padding: 4px 10px 1px 8px; border-radius: 9999px; background-color: #f0f0f0; margin-right: 5px;">
      <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: black; ">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
        <path d="M3 6h18"></path>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    </div>
    <div style="font-size: 11px; font-weight: 500; color: var(--card-label-color); letter-spacing: 0.05em; font-family: var(--secondaryFontFamily) !important;">TOTAL ORDERS</div>
  </div>
  <div style="color: var(--card-text-color); font-size: 25px; font-weight: 500; padding: 0px 10px; font-family: var(--secondaryFontFamily) !important;">${ordersData.length || 0
    }</div>
</div>

 <div style="transition: all 0.3s ease; border: 1px solid var(--card-border-color); padding: 16px;  background-color: var(--card-background-color); border-radius: var(--card-border-radius);">
  <div style="display: flex; align-items: center; font-size: 16px;">
    <div style="padding: 4px 10px 1px 8px; border-radius: 9999px; background-color: #f0f0f0; margin-right: 5px;">
      <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: black; height: 1.25rem; width: 1.25rem;"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
    </div>
    <div style="font-size: 11px; font-weight: 500; color: var(--card-label-color); letter-spacing: 0.05em; font-family: var(--secondaryFontFamily) !important;">CANCELLED ORDERS</div>
  </div>
  <div style="color: var(--card-text-color); font-size: 25px; font-weight: 500; padding: 0px 10px; font-family: var(--secondaryFontFamily) !important;">${ordersData.filter((order) => order.cancelledAt !== null).length || 0
    }</div>
</div>
  </div>`;
  ordersContainer.appendChild(orderDetailsContainer);

  // const header = createOrdersHeader(ordersData);
  // ordersContainer.appendChild(header);

  // Create the orders display (mobile or desktop)
  const ordersDisplay =
    window.innerWidth <= 768
      ? createOrdersMobileView(ordersData, itemsPerPage)
      : createOrdersTableView(ordersData, itemsPerPage);
  attachReorderEventListeners()
  ordersContainer.appendChild(ordersDisplay);

  // REMOVE this pagination - it's conflicting with the one inside createTableWithPagination
  // if (ordersData.length > itemsPerPage && window.innerWidth > 768) {
  //   const pagination = createPagination(
  //     ordersData,
  //     itemsPerPage,
  //     createOrdersTableView
  //   );
  //   ordersContainer.appendChild(pagination);
  // }

  attachReorderEventListeners();
}

function createOrdersTableView(orders, itemsPerPage) {
  // Pass the complete orders array to createTableWithPagination
  // It will handle its own pagination and search internally
  const tableView = createTableWithPagination(orders, "orders", itemsPerPage);
  attachReorderEventListeners();
  tableView.classList.add("orders-table");
  return tableView;
}

// function createOrdersHeader(ordersData) {
//   console.log(ordersData, "ordersData");
//   const header = document.createElement("div");
//   header.className = "order-header";
//   const onediv = document.createElement("div");
//   onediv.style.display = "flex";
//   onediv.style.alignItems = "center";
//   onediv.style.width = "100%";
//   onediv.style.justifyContent = "space-between";
//   const titleDiv = document.createElement("div");
//   const title = document.createElement("span");
//   title.textContent = "Recent Orders";
//   title.classList.add("order-recent-title");
//   const description = document.createElement("div");
//   description.style.marginTop = "1px";
//   description.style.fontSize = "1.5rem";
//   description.textContent = "Browse your recent orders and track their status";
//   titleDiv.appendChild(title);
//   titleDiv.appendChild(description);
//   // header.appendChild(titleDiv);
//   header.style.display = "flex";
//   header.style.flexDirection = "column";
//   const controlsDiv = document.createElement("div");
//   controlsDiv.className = "header-controls";
//   const searchBox = document.createElement("div");
//   searchBox.className = "search-box";
//   const searchInput = document.createElement("input");
//   searchInput.type = "text";
//   searchInput.placeholder = "Search orders...";
//   searchInput.addEventListener("keyup", function (event) {
//     const searchTerm = event.target.value.toLowerCase();
//     filteredData = ordersData.filter((order) => {
//       const orderNumber = String(order.orderNumber).toLowerCase();
//       return orderNumber.includes(searchTerm);
//     });
//     console.log(filteredData, "FD");
//     renderOrders(filteredData);
//   });
//   const searchIcon = document.createElementNS(
//     "http://www.w3.org/2000/svg",
//     "svg"
//   );
//   searchIcon.setAttribute("viewBox", "0 0 24 24");
//   searchIcon.innerHTML = `
//       <path d="M10 2a8 8 0 106.32 12.906l4.387 4.387a1 1 0 001.415-1.415l-4.387-4.387A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" fill="currentColor"/>
//   `;
//   searchBox.appendChild(searchInput);
//   searchBox.appendChild(searchIcon);
//   controlsDiv.appendChild(searchBox);
//   const select = document.createElement("select");
//   select.className = "order-filter";
//   select.style.fontFamily = 'var(--font-family)'
//   const orderFilterOptions = [
//     "All Orders",
//     "Last Order",
//     "Last 30 Days",
//     "Last 6 Months",
//   ];
//   orderFilterOptions.forEach((filterOption) => {
//     const option = document.createElement("option");
//     option.value = filterOption;
//     option.textContent = filterOption;
//     select.appendChild(option);
//   });
//   select.addEventListener("change", () => {
//     const selectedValue = select.value;
//     filterOrdersByTime(selectedValue); // Your filter logic
//   });
//   controlsDiv.appendChild(select);
//   header.appendChild(onediv);
//   return header;
// }

function filterOrdersByTime(timeRange) {
  console.log("Filtering by time range:", timeRange);
  let filteredOrders = customerOrders; // Start with all orders
  const now = new Date();
  switch (timeRange) {
    case "Last Order":
      filteredOrders = filteredOrders.slice(0, 1); // Take only the first element (most recent order)
      break;
    case "Last 30 Days":
      filteredOrders = filteredOrders.filter((order) => {
        const orderDate = new Date(order.orderDate);
        const diffInDays = (now - orderDate) / (1000 * 60 * 60 * 24);
        return diffInDays <= 30;
      });
      break;
    case "Last 6 Months":
      filteredOrders = filteredOrders.filter((order) => {
        const orderDate = new Date(order.orderDate);
        const diffInMonths =
          (now.getFullYear() - orderDate.getFullYear()) * 12 +
          (now.getMonth() - orderDate.getMonth());
        return diffInMonths <= 6;
      });
      break;
    default: // 'All Orders' - no filtering needed
      break;
  }
  const ordersDisplay =
    window.innerWidth <= 768
      ? createOrdersMobileView(filteredOrders)
      : createOrdersTableView(filteredOrders);
  const container =
    document.querySelector(".orders-table") ||
    document.querySelector(".orders-mobile");
  container.innerHTML = ""; // Clear previous orders
  container.appendChild(ordersDisplay);
}

async function createOrderCard(order) {
  let returnSettings = null;
  let cancelMapping = null;
  let exchangeSettings = null;
  let allReturnDetails = [];
  let replacementSettings = null; // To store replacement configuration
  const shop1 = Shopify.shop;
  const url1 = `https://omc.axentraos.co.in/utility/get_module_setting/?shop=${shop1}`;
  const returnAndExchangeUrl = `https://omc.axentraos.co.in/utility/get_settings/?shop=${shop1}`;
  try {
    console.log(`OrderTableMobile: Fetching cancel settings for shop: ${shop1}`);
    const response = await fetch(url1, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const apiData = await response.json();
    console.log('OrderTableMobile: Full API Response for cancel settings:', apiData);

    if (apiData && apiData.module_settings && apiData.module_settings.length > 0 && apiData.module_settings[0].module_json) {
      const moduleJson = apiData.module_settings[0].module_json;
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

  if (customerId) {
    console.log("Customer ID =>", customerId);
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


  const card = document.createElement("div");
  card.className = "order-card";
  const item = order.items[0]; // Get the first item for display on card
  const orderCreationTimeUTC = new Date(order.orderTime);
  const istOffsetInMinutes = 330;
  const orderCreationTimeIST = new Date(
    orderCreationTimeUTC.getTime() + istOffsetInMinutes * 60000
  );
  const currentTimeIST = new Date(
    new Date().getTime() + istOffsetInMinutes * 60000
  );
  const diffInMinutes =
    (currentTimeIST - orderCreationTimeIST) / (1000 * 60);

  const isWithinTimeLimit =
    diffInMinutes <= cancelMapping.prepaid_timelimit;
  const isCancelled = !!order.cancelledAt;
  const isCOD = order.paymentGateway && order.paymentGateway?.trim().toLowerCase() === "cod" || !order.paymentGateway?.trim();

  const rawTimeLimitFromAPI = isCOD ? cancelMapping.cod_timelimit : cancelMapping.prepaid_timelimit;
 let timeLimitMinutes = !isNaN(parseFloat(rawTimeLimitFromAPI)) ? parseFloat(rawTimeLimitFromAPI) : null;
      console.log("rawtimelinecancel21", timeLimitMinutes);

      console.log("issueeeeeeeee", window.cancelMapping.prepaid_timelimit)
      if (rawTimeLimitFromAPI !== null && typeof rawTimeLimitFromAPI !== 'undefined') {
        const parsedValue = parseFloat(rawTimeLimitFromAPI);
        console.log(parsedValue, 'check it out!');

        if (!isNaN(parsedValue)) {
          timeLimitMinutes = parsedValue;
        } else {
          // Log if a non-null/undefined value was unparsable
          console.warn(`Order ${order.orderNumber}: Invalid time limit value ('${rawTimeLimitFromAPI}') for ${isCOD ? 'COD' : 'Prepaid'} from API. No time-based cancellation restriction will be applied.`);
        }
      }


  const encodedSettingsString = returnSettings ? encodeURIComponent(JSON.stringify(returnSettings)) : ''; const orderImageUrl = order.items[0]?.image
    ? `https:${order.items[0].image}`
    : "";

  const rawOrderStatusFromApi = isCOD ? cancelMapping.order_status_cod : cancelMapping.order_status_prepaid;
  const apiAllowedCancelStatus = (typeof rawOrderStatusFromApi === 'string' ? rawOrderStatusFromApi.trim() : "unfulfilled").toLowerCase();
  const orderCreationUTC = new Date(order.orderTime);
  const currentTimeUTC = new Date();
  const currentOrderStatusNormalized = (order.fulfillmentStatus || "").trim().toLowerCase();

  const isOrderFulfilled = currentOrderStatusNormalized === 'fulfilled';
  let isOrderDelivered = order.fulfillments?.some(f => (f.shipment_status || "").trim().toLowerCase());
  const isAlreadyCancelled = !!order.cancelledAt;

  const statusPreventsCancellation = apiAllowedCancelStatus !== "" && currentOrderStatusNormalized !== apiAllowedCancelStatus;

  const isOutsideTimeLimit = (timeLimitMinutes !== null) && (diffInMinutes > timeLimitMinutes);

  const cancelBtnDisabled = isAlreadyCancelled || statusPreventsCancellation || isOutsideTimeLimit;

  const encodedOrderString = encodeURIComponent(JSON.stringify(order));
  console.log(encodedOrderString, 'aja');

  const returnInfo = allReturnDetails.filter(detail =>
    String(detail.order_id) === String(order.orderId)
  );

  console.log(returnInfo, 'dekh dekh');

  const encodedReturnInfoString = returnInfo ? encodeURIComponent(JSON.stringify(returnInfo)) : '';
  console.log(encodedReturnInfoString, 'billa');

  console.log(`Order ${order.orderNumber}:`);
  console.log(`  Fulfillment Status: '${order.fulfillmentStatus}' (Normalized: '${currentOrderStatusNormalized}')`);
  console.log("  Payment Method:", order.paymentGateway, "(isCOD:", isCOD, ")");
  console.log("  Cancel Mapping Used:", JSON.stringify(cancelMapping));
  console.log("  Time Limit For Cancellation:", timeLimitMinutes, "minutes (null indicates no effective time limit or value from API was null/undefined/invalid)");
  console.log("  Order Creation (IST):", orderCreationTimeIST.toISOString());
  console.log("  Current Time (IST):", currentTimeIST.toISOString());
  console.log("  Diff (mins):", diffInMinutes.toFixed(2));
  console.log("  Is Already Cancelled:", isAlreadyCancelled);
  console.log(`  API-defined Cancellable Status (for ${isCOD ? 'COD' : 'Prepaid'}): '${apiAllowedCancelStatus}' (defaulted to 'unfulfilled' if not provided/invalid)`);
  console.log("  Current Status Prevents Cancellation (based on API):", statusPreventsCancellation);
  console.log("  Is Outside Time Limit (based on parsed timeLimitMinutes):", isOutsideTimeLimit);
  console.log("  Cancel Button Disabled:", cancelBtnDisabled);
  const showTrackButton = !isCancelled && currentOrderStatusNormalized !== 'unfulfilled';
  // const encodedOrderString = encodeURIComponent(JSON.stringify(order));
  const encodedTrackSettingsString = encodeURIComponent(JSON.stringify(trackOrderSettings));
  let canEditAddress = false;
  let overlay
  let editModuleGeneralSettings = null;
  const representativeShopDomain = Shopify.shop;
  // Assuming getModuleSettings is defined elsewhere and accessible

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

  const allStatusBoxesHTML = returnInfoArray.map(singleRequest =>
    createReturnStatusBox(singleRequest)
  ).join('');



  const cancellationStatusHTML = generateCancellationStatusBoxHTML({
    isAlreadyCancelled,
    cancelBtnDisabled,
    timeLimitMinutes,
    orderCreationUTC,
    currentTimeUTC,
    orderId: order.orderId,
    apiAllowedCancelStatus
  });

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

  const returnButtonHTML = showReturnButton ? `
  <button 
    onclick="openReturnModal('${encodedOrderString}', '${encodedReturnSettingsString}', '${encodedReturnInfoString}')" 
    style="display: inline-flex; align-items: center; cursor: pointer;" 
    class="Axentra-mobile-return-btn-color omc-cancel-order-text action-btn mobile-order-actions"
  >
    <svg class="xircls_svg2"  xmlns="http://www.w3.org/2000/svg" width="15" height="15" 
      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v.5a5 5 0 0 1-5 5H11"/>
    </svg>
    Return
  </button>` : '';

  // --- Exchange Button Logic ---
  const encodedExchangeSettingsString = exchangeSettings ? encodeURIComponent(JSON.stringify(exchangeSettings)) : '';
  const isExchangeModuleEnabled = exchangeSettings?.exchange?.is_enabled === true;
  const isEligibleForExchange = isOrderEligibleForExchange(order, exchangeSettings);
  const restrictUndeliveredForExchange = exchangeSettings?.exchange?.basic_settings?.price_eligibilty?.item_condition?.exchange_restrictions?.undeliverd === true;
  let isEligibleByFulfillmentStatusForExchange = restrictUndeliveredForExchange ? isOrderDelivered : (isOrderFulfilled || isOrderDelivered);
  const isEligibleForExchangeOverall = isOrderEligibleForExchange(order, exchangeSettings);
  const showExchangeButton = !isAlreadyCancelled && isExchangeModuleEnabled && isEligibleForExchange && isEligibleByFulfillmentStatusForExchange && isEligibleForExchangeOverall && !allItemsInitiated && (initiatedActionType.size === 0 || (initiatedActionType.size === 1 && initiatedActionType.has('exchange')));
  const exchangeButtonHTML = showExchangeButton ? `
  <button 
    onclick="openExchangeModal('${encodedOrderString}', '${encodedExchangeSettingsString}', '${encodedReturnInfoString}')" 
    style="display: inline-flex; align-items: center; cursor: pointer;" 
    class="Axentra-mobile-exchange-btn-color omc-cancel-order-text view-order-details-link action-btn mobile-order-actions"
  >
    <svg class="xircls_svg2"  xmlns="http://www.w3.org/2000/svg" width="15" height="15" 
      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path>
    </svg>
    Exchange
  </button>` : '';

  const encodedReplacementSettingsString = replacementSettings ? encodeURIComponent(JSON.stringify(replacementSettings)) : '';
  const isReplacementModuleEnabled = replacementSettings?.replacement?.is_enable === true;
  const isEligibleForReplacement = isOrderEligibleForReplacement(order, replacementSettings); // Uses the new function
  const restrictUndeliveredForReplacement = replacementSettings?.replacement?.advance_settings?.replacement_restrictions?.undeliverd === true;
  let isEligibleByFulfillmentStatusForReplacement = restrictUndeliveredForReplacement ? isOrderDelivered : (isOrderFulfilled || isOrderDelivered);
  const showReplacementButton = !isAlreadyCancelled && isReplacementModuleEnabled && isEligibleForReplacement && isEligibleByFulfillmentStatusForReplacement && !allItemsInitiated && (initiatedActionType.size === 0 || (initiatedActionType.size === 1 && initiatedActionType.has('replacement')));
  const replacementButtonHTML = showReplacementButton ? `
            <span onclick="openReplacementModal('${encodedOrderString}', '${encodedReplacementSettingsString}', '${encodedReturnInfoString}')" style="display: inline-flex; align-items: center; cursor: pointer;" class="Axentra-mobile-replace-btn-color omc-cancel-order-text view-order-details-link mobile-order-actions action-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw h-3 w-3 mr-1"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
              Replacement
            </span>` : '';


  const moduleSettings = await getModuleSettings(representativeShopDomain);
  if (moduleSettings) {
    const updateAddressModule = moduleSettings.find(m => m.module_name === "update address");
    if (updateAddressModule && updateAddressModule.is_enabled) {
      const generalSettings = updateAddressModule.module_json?.edit_orders?.general_settings;
      if (generalSettings && generalSettings.is_enabled) {
        editModuleGeneralSettings = generalSettings;
        console.log("Edit module general settings found for table:", editModuleGeneralSettings);
      } else {
        console.log("Edit module general settings not enabled or not found for table.");
      }
    } else {
      console.log("Update address module not enabled or not found for table.");
    }
  } else {
    console.log("Module settings for edit could not be fetched or are null for table.");
  }
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

  const editAddressHTML = canEditAddress ? `
  <button style="" class="action-btn edit-shipping-mobile"
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
    Edit
  </button>` : '';
  card.innerHTML = `
      <div class="order-header ">
        <div>
        <div style="var(--card-text-color)">Order ID</div><div style="var(--card-text-color)" class="order-id">${order.orderNumber}</div>
        </div>
        ${order.cancelledAt
      ? `<span style="padding: 2px 10px; border-radius: 10px; font-size: 11px; font-weight: bold; color: #f00; background-color: #ffb6b6;">Cancelled</span>`
      : `<span style="padding: 2px 10px; border-radius: 10px; font-size: 11px; font-weight: bold; color: #15803D; background-color: #F0FDF4;">${order.fulfillmentStatus}</span>`
    }
      </div> </div> 
      <div class="order-info">
        <img src="${item.image}" alt="Product">
        <div><div style="var(--card-label-color)" class="product-name">${item.title
    }</div> <div style="var(--card-text-color); display: block;" class="product-details">+ ${order.items.length - 1
    } other items</div></div> </div> <div class="order-meta">
        <div><div style="var(--card-label-color)" class="label">Date</div><div style="var(--card-text-color)" class="label">${order.orderDate
    }</div></div>
        <div><div style="var(--card-label-color)" class="label">Amount</div><div style="var(--card-text-color)" class="label">${order.totalPrice
    }</div></div>
      </div> 
      <div style="display: flex; gap: 12px; flex-wrap: nowrap; overflow-x:auto;" class = 'scroll-hidden mobile-order-actions'>
      <button class="action-btn mobile-order-actions ">
       <svg class="xircls_svg2"  xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0
                1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path> 
                <circle cx="12" cy="12" r="3"></circle>
        </svg> 
       View 
      </button>
      ${showTrackButton ? `<button  class="action-btn track-order-mobile mobile-order-actions">
        <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg2" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
        Track Order</button>` : ''}
      <button  class="action-btn reorder-btn-mobile mobile-order-actions" >
        <svg class="xircls_svg2"  xmlns="http://www.w3.org/2000/svg" width="15" height="15"
         viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
         <circle cx="12" cy="12" r="10"></circle>
         <path d="M12 6v6l4 2"></path>
        </svg>
      Re-order
      </button>
      ${returnButtonHTML}
      ${exchangeButtonHTML}
      ${replacementButtonHTML}
       ${!order.cancelledAt ? `
        <button 
  ${cancelBtnDisabled ? 'disabled' : ''}  
  class="action-btn cancel-btn-mobile mobile-order-actions ${cancelBtnDisabled ? 'disabled-btn-mobile' : ''}"
  data-order-id="${order.orderId}">
  <svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m15 9-6 6"></path>
        <path d="m9 9 6 6"></path>
  </svg>
  Cancel
</button>

      ` : ''}
     
       
      ${editAddressHTML}
      </div>
       ${cancellationStatusHTML}
      ${allStatusBoxesHTML}
  `;
  const reorderBtn = card.querySelector('.reorder-btn-mobile')
  reorderBtn.setAttribute(
    "data-order",
    JSON.stringify(order.items).replace(/'/g, "\\'")
  );
  reorderBtn.addEventListener("click", async function () {
    const rawData = this.getAttribute("data-order");
    console.log("Raw data for reorder:", rawData);
    try {
      clearCart();

      if (!rawData || typeof rawData !== "string") {
        console.error("Invalid or empty JSON data:", rawData);
        return;
      }

      const lineItems = JSON.parse(rawData);
      console.log("Reordering items:", lineItems[0]);

      if (!Array.isArray(lineItems) || lineItems.length === 0) {
        console.error("No valid line items found:", lineItems);
        return;
      }

      showLoader(); // Show loader before adding items

      for (const item of lineItems) {
        console.log(
          `Adding item to cart: ${item.title} (Variant ID: ${item.variantId}, Quantity: ${item.quantity})`
        );
        const response = await fetch("/cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            id: item.variantId,
            quantity: item.quantity,
            attributes: {
              reorder_source: "customer_accounts_by_axentra",
              campaign: "reorder"
            },
          }),
        });

        if (!response.ok) {
          const errorResponse = await response.json();
          console.error(
            `Error adding item to cart: ${item.title}`,
            errorResponse
          );
        } else {
          console.log(`Successfully added ${item.title} to cart`);
        }
      }

      // Show loader on page unload (before redirecting)
      hideLoader(); // ✅ Hide loader before redirecting

      // Redirect to checkout
      setTimeout(() => {
        window.location.href = "/checkout?utm_source=customer_accounts_by_axentra&utm_campaign=reorder&utm_medium=app";
      }, 500);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      hideLoader(); // Hide loader in case of an error
    }
  });
  const trackOrderButton = card.querySelector('.track-order-mobile');
  if (trackOrderButton) {
    trackOrderButton.addEventListener('click', () => {
      openTrackOrderModal(encodedOrderString, encodedTrackSettingsString);
    });
  }
  card.querySelector(".action-btn").addEventListener("click", () => {
    console.log(order, "format order");
    viewOrderDetails(order);
  });

  const cancelButton = card.querySelector('.cancel-btn-mobile');
  if (cancelButton && !cancelBtnDisabled) {
    cancelButton.addEventListener('click', (event) => {
      event.stopPropagation(); // prevent bubbling if needed
      const orderId = cancelButton.getAttribute('data-order-id');
      if (orderId) {
        console.log(`Attempting to cancel order ID: ${orderId}`);
        cancelOrder(orderId);
      } else {
        console.error('Order ID not found on cancel button');
      }
    });
  }

  return card;
}

function createOrdersMobileView(orders, itemsPerPage) {
  console.log(orders, "ordersorders");
  const mobileView = document.createElement("div");
  mobileView.className = "orders-mobile";

  const div = document.createElement("div");
  // 1. Create and append the search input field
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.style.cssText = `
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
  `
  searchInput.placeholder = "Search Order ID...";
  searchInput.id = "orderSearchInput"; // Important for event listener
  div.appendChild(searchInput);

  // 2. Create and append the select field
  const select = document.createElement("select");
  select.id = "orderFilterSelect";
  const options = ["All Orders", "Last Order", "Last 30 Days", "Last 6 Months"];
  options.forEach((optionText) => {
    const option = document.createElement("option");
    option.value = optionText;
    option.text = optionText;
    select.appendChild(option);
  });
  div.appendChild(select);
  div.style.marginBottom = "20px";
  mobileView.appendChild(div);
  let filteredOrders = [...orders]; // Start with all orders

  // 3. Create order cards based on the INITIAL filtered orders (all orders)
  filteredOrders.forEach(async (order) => {
    const card = await createOrderCard(order);
    mobileView.appendChild(card);
  });

  // Function to re-render the order cards based on the filters
  const renderFilteredOrders = (searchTerm, selectedValue) => {
    const cardContainer = mobileView;
    // Remove old cards
    const orderCards = document.querySelectorAll(".order-card");
    orderCards.forEach((card) => cardContainer.removeChild(card));

    // Filter orders based on both search term and select value
    filteredOrders = orders.filter((order) => {
      // First, apply search term filter
      if (searchTerm) {
        const searchTermLower = searchTerm.toLowerCase();
        const orderNumberString = String(order.orderNumber).toLowerCase();
        if (!orderNumberString.includes(searchTermLower)) {
          return false; // Skip if doesn't match search term
        }
      }

      // Then, apply select value filter
      if (selectedValue !== "All Orders") {
        const now = new Date();
        let orderDate; // Declare orderDate OUTSIDE the switch
        switch (selectedValue) {
          case "Last Order":
            //Implement logic to show last order ONLY
            // You need to determine how to identify the LAST order in your data

            let lastOrder = orders[0]; //Temporary assignment for compiling purposes only.
            for (let i = 1; i < orders.length; i++) {
              if (orders[i].orderDate > lastOrder.orderDate)
                lastOrder = orders[i]; //Replace the last order if we found something more recent
            }

            return order == lastOrder;

          case "Last 30 Days":
            const thirtyDaysAgo = new Date(
              now.getTime() - 30 * 24 * 60 * 60 * 1000
            );
            orderDate = new Date(order.orderDate); //Assign
            return orderDate >= thirtyDaysAgo;
          case "Last 6 Months":
            const sixMonthsAgo = new Date(
              now.getTime() - 6 * 30 * 24 * 60 * 60 * 1000
            );
            orderDate = new Date(order.orderDate); //Assign
            return orderDate >= sixMonthsAgo;
          default:
            return true; // Should never happen, but good to have a default
        }
      }

      return true; // Keep order if it passes both filters
    });

    // Create and append the new order cards
    filteredOrders.forEach(async (order) => {
      const card = await createOrderCard(order);
      mobileView.appendChild(card);
    });
  };

  // 4. Add event listeners to the search input and select field
  searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value;
    const selectedValue = select.value;
    renderFilteredOrders(searchTerm, selectedValue);
  });

  select.addEventListener("change", (event) => {
    const searchTerm = searchInput.value;
    const selectedValue = event.target.value;
    renderFilteredOrders(searchTerm, selectedValue);
  });

  return mobileView;
}

function createOrdersTableView(orders, itemsPerPage) {
  // Similar to createCardGrid, but for tables
  const tableView = createTableWithPagination(orders, "orders", itemsPerPage);
  tableView.classList.add("orders-table"); // Add a class for styling if needed
  return tableView;
}

function createPagination(data, itemsPerPage, renderFunction) {
  // Generic pagination function
  let currentPage = 1;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginationContainer = document.createElement("div");
  paginationContainer.className = "pagination";
  const renderPage = (page) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = data.slice(start, end);
    const ordersDisplay = renderFunction(pageData, itemsPerPage); // Update this line
    const tableContainer =
      document.querySelector(".table-container") ||
      document.querySelector(".orders-mobile"); // Update this line to select either the table or mobile view container
    tableContainer && (tableContainer.innerHTML = ""); // Clear container
    tableContainer && tableContainer.appendChild(ordersDisplay); // Append elements to table
    prevButton.disabled = page === 1;
    nextButton.disabled = page === totalPages;
    pageButtonsContainer
      .querySelectorAll("button")
      .forEach((button) => button.classList.remove("active"));
    const activeButton = pageButtonsContainer.querySelector(
      `button[data-page="${page}"]`
    );
    if (activeButton) {
      activeButton.classList.add("active");
    }
  };

  const info = document.createElement("div");
  info.className = "pagination-info";
  info.textContent = `Showing ${Math.min(data.length, itemsPerPage)} of ${data.length
    } orders`; // Update text
  const controls = document.createElement("div");
  controls.className = "pagination-controls";
  const prevButton = document.createElement("button");
  prevButton.textContent = "<";
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
      updateInfoText(); // Update info text after changing page
    }
  });
  const nextButton = document.createElement("button");
  nextButton.textContent = ">";
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPage(currentPage);
      updateInfoText(); // Update info text after changing page
    }
  });
  const updateInfoText = () => {
    // Added function to update info text
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, data.length);
    info.textContent = `Showing ${start} - ${end} of ${data.length} Orders`;
  };
  const pageButtonsContainer = document.createElement("div");
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.dataset.page = i; // Add data attribute for page number
    pageButton.addEventListener("click", () => {
      currentPage = i;
      renderPage(currentPage);
      updateInfoText();
    });
    pageButtonsContainer.appendChild(pageButton);
    if (i === 1) {
      pageButton.classList.add("active"); // Set the first page as active initially
    }
  }
  controls.appendChild(prevButton);
  controls.appendChild(pageButtonsContainer);
  controls.appendChild(nextButton);
  paginationContainer.appendChild(info);
  paginationContainer.appendChild(controls);
  renderPage(currentPage); // Initial render
  return paginationContainer;
}

function updateOrdersContainer(customerOrders) {
  console.log("myOrders:-", myOrders);
  console.log("myWishlist:-", myWishlist);
  console.log("recentlyViewed:-", recentlyViewed);
  console.log("myProfile:-", myProfile);
  console.log("changePassword:-", changePassword);
  console.log("logout:-", logout);
  console.log("dashboard:-", dashboard);
  renderOrders(customerOrders); // Call renderOrders instead of the old logic
}

/**
 * Renders the loyalty program overview section (list-style).
 * MODIFIED to display a message if no "Earn" or "Redeem" options are available.
 */
function renderOverview() {
  const overviewWrapper = document.createElement("div");
  overviewWrapper.className = "xircls-loyalty-overview";

  const cardWrapper = document.createElement("div");
  cardWrapper.className = "xircls-loyalty-overview-wrapper";

  const loyaltyCurrency = LoyaltySettings?.basic_config?.points_terminology || "Points";

  /**
   * Creates a card with a title and a list of items.
   * If the items array is empty, it displays a formal "not available" message.
   * @param {string} title - The card's title.
   * @param {Array} items - An array of item objects to display.
   */
  const createCard = (title, items) => {
    const card = document.createElement("div");
    card.className = "loyalty-overview-card";

    const heading = document.createElement("span");
    heading.textContent = title;
    heading.style.color = "var(--card-heading-color)";
    card.appendChild(heading);

    // --- START: MODIFICATION FOR EMPTY STATE ---
    // Check if the items array is null, undefined, or empty.
    if (!items || items.length === 0) {
      const noItemsMessage = document.createElement("div");
      noItemsMessage.className = "loyalty-card-no-items-message"; // For potential specific styling

      // Apply formal styling directly
      noItemsMessage.style.padding = "20px 5px";
      noItemsMessage.style.color = "#000"; // A muted, formal color
      noItemsMessage.style.fontSize = "0.9rem";
      noItemsMessage.style.fontWeight = "bold";
      noItemsMessage.textContent = "There are currently no options available.";

      card.appendChild(noItemsMessage);
      return card; // Return the card with only the title and message
    }
    // --- END: MODIFICATION FOR EMPTY STATE ---

    // This part only runs if 'items' is not empty
    items.forEach((item) => {
      const itemRow = document.createElement("div");
      itemRow.className = "loyalty-card-item-row";

      if (item.isMilestone || item.isFlexible) {
        itemRow.style.cursor = "pointer";
        // Using a mock value for points for demonstration
        const availablePoints = globalLoyaltyPoints?.available_points || 0;
        itemRow.addEventListener('click', () => {
          if (item.isMilestone) showRedemptionModal(item, availablePoints);
          else if (item.isFlexible) openRedemptionModal();
        });
      }

      const iconWrapper = document.createElement("div");
      iconWrapper.className = 'loyalty-card-item-icon';
      iconWrapper.innerHTML = item.icon || '';

      const text = document.createElement("div");
      text.className = "loyalty-card-item-text";
      text.innerHTML = `<div style="color:var(--card-label-color)">${item.heading}</div><div style="color:var(--card-text-color)">${item.subheading}</div>`;

      itemRow.appendChild(iconWrapper);
      itemRow.appendChild(text);
      card.appendChild(itemRow);
    });

    return card;
  };

  // The rest of the function remains the same. The logic is handled by createCard.
  cardWrapper.appendChild(createCard(`Ways To Earn ${loyaltyCurrency}`, getEarnItems()));
  cardWrapper.appendChild(createCard(`Redeem Your ${loyaltyCurrency}`, getRedeemItems()));

  overviewWrapper.appendChild(cardWrapper);
  overviewWrapper.appendChild(renderCardWithTable()); // Add history table

  return overviewWrapper;
}
let currentPage = 0;
const itemsPerPage = 5; // Number of items per page
// Pagination helper function
function paginate(array, page, itemsPerPage) {
  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  return array.slice(start, end);
}

// Update function to refresh the table and buttons
function updatePagination() {
  const wrapper = document.querySelector(".xircls-loyalty-tab-content");
  if (wrapper) {
    // Clear the current content and re-render
    wrapper.innerHTML = "";
    wrapper.appendChild(renderPointHistory());
  }
}
function renderPointHistory(resetPage = false) {
  if (resetPage) currentPage = 0;

  const wrapper = document.createElement("div");
  wrapper.className = "xircls-loyalty-point-history";

  if (allLoyaltyPointsHistory.length === 0) {
    const emptyCard = document.createElement("div");
    emptyCard.style.height = "100px";
    emptyCard.style.width = "100%";
    emptyCard.style.background = "var(--card-background-color)";
    emptyCard.style.display = "flex";
    emptyCard.style.alignItems = "center";
    emptyCard.style.justifyContent = "center";
    emptyCard.style.marginTop = "1rem";
    emptyCard.style.border = "1px solid #efefef";

    const text = document.createElement("span");
    text.textContent = `No ${loyaltyCurrency ? loyaltyCurrency : "Points"} History`;
    text.style.color = "#000";
    text.style.fontWeight = "bold";
    text.style.fontSize = "15px";

    emptyCard.appendChild(text);
    wrapper.appendChild(emptyCard);
  } else {
    const heading = document.createElement("span");
    heading.textContent = `Complete ${loyaltyCurrency ? loyaltyCurrency : "Points"} History`;

    const table = document.createElement("table");
    table.className = "point-history-table";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headers = ["Date", "Description", `${loyaltyCurrency ? loyaltyCurrency : "Points"}`];
    headers.forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);

    const tbody = document.createElement("tbody");

    const paginatedData = paginate(allLoyaltyPointsHistory, currentPage, itemsPerPage);

    paginatedData.forEach((entry) => {
      const row = document.createElement("tr");

      const points = entry.action === "DEBIT"
        ? `-${entry.redeemed}`
        : entry.earned;

      const values = [entry.created_at, entry.description, points];

      values.forEach((value) => {
        const td = document.createElement("td");
        td.textContent = value;
        row.appendChild(td);
      });

      tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    wrapper.appendChild(heading);
    wrapper.appendChild(table);

    const paginationWrapper = document.createElement("div");
    paginationWrapper.className = "pagination-wrapper";

    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.disabled = currentPage === 0;
    prevButton.addEventListener("click", () => {
      currentPage--;
      updatePagination();
    });

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.disabled =
      (currentPage + 1) * itemsPerPage >= allLoyaltyPointsHistory.length;
    nextButton.addEventListener("click", () => {
      currentPage++;
      updatePagination();
    });

    paginationWrapper.appendChild(prevButton);
    paginationWrapper.appendChild(nextButton);
    wrapper.appendChild(paginationWrapper);
  }

  return wrapper;
}


// function renderPointHistory() {
//   const wrapper = document.createElement("div");
//   wrapper.className = "xircls-loyalty-point-history";

//   const heading = document.createElement("span");
//   heading.textContent = "Complete Point History";

//   const table = document.createElement("table");
//   table.className = "point-history-table";

//   const thead = document.createElement("thead");
//   const headerRow = document.createElement("tr");

//   const headers = ["Date", "Description", "Points"];
//   headers.forEach((text) => {
//     const th = document.createElement("th");
//     th.textContent = text;
//     headerRow.appendChild(th);
//   });

//   thead.appendChild(headerRow);

//   const tbody = document.createElement("tbody");

//   allLoyaltyPointsHistory.forEach((entry) => {
//     const row = document.createElement("tr");
//     [entry.created_at, entry.description, entry.points].forEach((value) => {
//       const td = document.createElement("td");
//       td.textContent = value;
//       row.appendChild(td);
//     });
//     tbody.appendChild(row);
//   });

//   table.appendChild(thead);
//   table.appendChild(tbody);

//   wrapper.appendChild(heading);
//   wrapper.appendChild(table);

//   return wrapper;
// }

const iconLibrary = {
  purchase: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg1" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
<path d="M11.25 18.75C11.25 19.58 10.58 20.25 9.75 20.25C8.92 20.25 8.25 19.58 8.25 18.75C8.25 17.92 8.92 17.25 9.75 17.25C10.58 17.25 11.25 17.92 11.25 18.75ZM16.25 17.25C15.42 17.25 14.75 17.92 14.75 18.75C14.75 19.58 15.42 20.25 16.25 20.25C17.08 20.25 17.75 19.58 17.75 18.75C17.75 17.92 17.08 17.25 16.25 17.25ZM20.73 7.68L18.73 15.68C18.65 16.01 18.35 16.25 18 16.25H8C7.64 16.25 7.33 15.99 7.26 15.63L5.37 5.25H4C3.59 5.25 3.25 4.91 3.25 4.5C3.25 4.09 3.59 3.75 4 3.75H6C6.36 3.75 6.67 4.01 6.74 4.37L7.17 6.75H20C20.23 6.75 20.45 6.86 20.59 7.04C20.73 7.22 20.78 7.46 20.73 7.68ZM19.04 8.25H7.44L8.62 14.75H17.41L19.04 8.25Z" fill="#000000"/>
</svg>`,
  account: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg1" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
<path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  birthday: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg1" fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" id="Layer_1" data-name="Layer 1"><path d="M7.38,30.74H24.62c.41,0,.75-.34,.75-.75V14.59c0-.41-.34-.75-.75-.75h-2.66v-5.38c0-.2-.08-.39-.21-.52,.43-.65,.67-1.43,.67-2.23,0-1.35-.67-2.6-1.78-3.37-.26-.17-.59-.17-.85,0-1.12,.76-1.78,2.02-1.78,3.37,0,.8,.24,1.57,.67,2.23-.13,.14-.21,.32-.21,.52v5.38h-5.52v-5.38c0-.2-.08-.39-.21-.52,.43-.65,.67-1.43,.67-2.23,0-1.35-.67-2.6-1.78-3.37-.26-.17-.59-.17-.85,0-1.12,.76-1.78,2.02-1.78,3.37,0,.8,.24,1.57,.67,2.23-.13,.14-.21,.32-.21,.52v5.38h-2.07c-.41,0-.75,.34-.75,.75v15.4c0,.41,.34,.75,.75,.75Zm16.49-5.27H8.13v-6.83c.14,.1,.27,.23,.44,.39,.46,.46,1.08,1.08,2.25,1.08s1.8-.63,2.25-1.08c.43-.43,.66-.64,1.19-.64s.76,.21,1.19,.64c.46,.46,1.08,1.08,2.25,1.08s1.8-.63,2.26-1.08c.43-.43,.67-.64,1.19-.64s.76,.21,1.2,.64c.35,.35,.79,.79,1.51,.98v5.46Zm0,3.77H8.13v-2.27h15.74v2.27ZM20.21,3.94c.45,.48,.71,1.11,.71,1.77s-.26,1.29-.71,1.77c-.45-.48-.71-1.11-.71-1.77s.26-1.29,.71-1.77Zm-.25,5.27h.5v4.63h-.5v-4.63ZM11.2,3.94c.45,.48,.71,1.11,.71,1.77s-.26,1.29-.71,1.77c-.45-.48-.71-1.11-.71-1.77s.26-1.29,.71-1.77Zm-.25,5.27h.5v4.63h-.5v-4.63Zm-.75,6.13h13.67v3.02c-.14-.1-.28-.23-.45-.4-.46-.46-1.08-1.08-2.26-1.08s-1.8,.63-2.26,1.08c-.43,.43-.67,.64-1.2,.64s-.76-.21-1.19-.64c-.46-.46-1.08-1.08-2.25-1.08s-1.8,.63-2.25,1.08c-.43,.43-.67,.64-1.19,.64s-.76-.21-1.19-.64c-.35-.35-.79-.79-1.5-.98v-1.64h2.07Z"/></svg>`,
  facebook: `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920">
    <path d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z" fill-rule="evenodd"/>
</svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg1" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"/>
<path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"/>
</svg>`,
  redeem: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg1" fill="#000000" width="20px" height="20px" viewBox="0 0 24 24"><path d="M11.707 2.293A.997.997 0 0 0 11 2H6a.997.997 0 0 0-.707.293l-3 3A.996.996 0 0 0 2 6v5c0 .266.105.52.293.707l10 10a.997.997 0 0 0 1.414 0l8-8a.999.999 0 0 0 0-1.414l-10-10zM13 19.586l-9-9V6.414L6.414 4h4.172l9 9L13 19.586z"/><circle cx="8.353" cy="8.353" r="1.647"/></svg>`,

  discountPercentage: `<svg xmlns="http://www.w3.org/2000/svg"  class="xircls_svg1" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" width="20px" height="20px" viewBox="0 0 601.96 601.96" xml:space="preserve">
<g>
	<path d="M163.156,107.708l-7.528,11.2c-5.018-13.342-11.322-26.5-20.257-37.577c-12.056-14.994-28.519-26.561-47.98-29.131   c-19.156-2.509-39.719,2.02-54.958,14.321C0.854,92.04-2.268,136.716,1.037,174.232c1.653,19.094,5.753,38.127,11.812,56.304   l38.127-13.341c-2.57-7.772-4.773-15.606-6.548-23.623c-3.305-17.32-4.59-34.945-3.733-52.571   c0.673-8.262,2.02-16.462,4.468-24.357c1.469-3.794,3.244-7.466,5.324-10.955c1.591-2.142,3.366-4.223,5.263-6.12   c1.958-1.53,4.04-2.938,6.181-4.162c2.693-1.163,5.447-2.142,8.323-2.876c2.938-0.428,5.937-0.612,8.874-0.612   c2.632,0.306,5.263,0.856,7.833,1.591c2.387,0.979,4.712,2.142,6.916,3.489c2.815,2.081,5.385,4.406,7.772,6.916   c3.978,4.896,7.344,10.159,10.343,15.729c4.835,10.159,8.507,20.869,11.873,31.579c1.102,3.488,2.142,6.916,3.121,10.404   L14.44,329.067l148.716,221.36H601.96v-442.72H163.156z M163.095,322.947c3.366,0,6.12,2.754,6.12,6.12s-2.754,6.12-6.12,6.12   c-3.366,0-6.12-2.754-6.12-6.12S159.729,322.947,163.095,322.947z M560.344,508.812H185.311L64.563,329.067l74.174-110.404   c2.876,22.399,4.039,44.982,3.427,67.565c-15.851,7.772-26.745,24.051-26.745,42.839c0,26.316,21.42,47.736,47.736,47.736   s47.736-21.42,47.736-47.736c0-19.522-11.812-36.353-28.581-43.696c0.918-33.354-1.53-66.586-8.14-99.511   c-0.979-5.019-2.081-10.037-3.243-14.994l14.443-21.481h375.034v359.428H560.344z M279.864,413.952L479.07,214.746l29.438,29.438   L309.302,443.39L279.864,413.952z M326.988,315.175c29.376,0,53.244-23.867,53.244-53.243s-23.868-53.244-53.244-53.244   s-53.244,23.868-53.244,53.244S297.674,315.175,326.988,315.175z M326.988,250.242c6.426,0,11.628,5.202,11.628,11.628   c0,6.426-5.202,11.628-11.628,11.628s-11.628-5.202-11.628-11.628C315.36,255.444,320.562,250.242,326.988,250.242z    M461.322,342.96c-29.376,0-53.244,23.868-53.244,53.244s23.868,53.244,53.244,53.244s53.244-23.868,53.244-53.244   S490.698,342.96,461.322,342.96z M461.322,407.894c-6.426,0-11.628-5.202-11.628-11.628s5.202-11.628,11.628-11.628   s11.628,5.202,11.628,11.628S467.748,407.894,461.322,407.894z"/>
</g>
</svg>`,
  discountFixedAmount: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg1" fill="#000000" width="20px" height="20px" viewBox="0 0 24 24"><path d="M11.707 2.293A.997.997 0 0 0 11 2H6a.997.997 0 0 0-.707.293l-3 3A.996.996 0 0 0 2 6v5c0 .266.105.52.293.707l10 10a.997.997 0 0 0 1.414 0l8-8a.999.999 0 0 0 0-1.414l-10-10zM13 19.586l-9-9V6.414L6.414 4h4.172l9 9L13 19.586z"/><circle cx="8.353" cy="8.353" r="1.647"/></svg>`,
  freeProduct: `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="25px" width="25px" version="1.1" id="_x32_" viewBox="0 0 512 512" xml:space="preserve">
<style type="text/css">
	.st0{fill:#000000;}
</style>
<g>
	<path class="st0" d="M512,255.993l-63.304-51.63l28.999-76.354l-80.635-13.07l-13.063-80.635L307.63,63.311L256,0.013l-7.862,9.64   l-43.78,53.658L128.01,34.305l-13.076,80.635l-80.622,13.07l28.993,76.354L0,255.993l63.305,51.636l-28.993,76.361l80.622,13.076   l13.07,80.629l76.354-29L256,511.987l51.63-63.292l76.367,29l13.063-80.629l80.642-13.076l-29.006-76.361L512,255.993z    M449.885,367.935l-70.52,11.437l-11.424,70.514l-66.786-25.366L256,479.882l-45.168-55.363l-66.773,25.366l-11.431-70.514   l-70.513-11.43l25.358-66.793L32.118,256l55.356-45.155l-25.358-66.78l70.513-11.43l11.431-70.514l66.773,25.359L256,32.125   l45.155,55.356l66.786-25.366l11.424,70.52l70.52,11.43l-25.359,66.78L479.882,256l-55.356,45.148L449.885,367.935z"/>
	<path class="st0" d="M165.87,268.515l-30.677,6.858c-0.509,0.118-0.813-0.08-0.926-0.582l-4.024-17.985   c-0.112-0.502,0.079-0.806,0.588-0.918l36.842-8.246c0.747-0.165,1.136-0.786,0.972-1.539l-3.013-13.453   c-0.165-0.753-0.786-1.143-1.526-0.978l-54.828,12.263c-0.754,0.172-1.149,0.793-0.978,1.546l18.567,82.988   c0.172,0.753,0.786,1.137,1.546,0.965l15.963-3.568c0.753-0.171,1.143-0.779,0.971-1.532l-7.202-32.191   c-0.112-0.502,0.086-0.813,0.594-0.926l30.677-6.864c0.754-0.165,1.144-0.786,0.972-1.539l-2.98-13.328   C167.238,268.732,166.624,268.343,165.87,268.515z"/>
	<path class="st0" d="M238.464,267.853c8.497-6.264,12.336-16.234,9.891-27.169c-3.488-15.594-17.502-23.945-34.986-20.033   l-34.067,7.624c-0.753,0.165-1.15,0.78-0.978,1.54l18.566,82.981c0.172,0.753,0.786,1.143,1.546,0.978l15.964-3.574   c0.753-0.172,1.143-0.786,0.971-1.539l-6.838-30.553c-0.106-0.502,0.086-0.812,0.595-0.925l11.437-2.557l21.718,28.015   c0.568,0.8,1.037,1.091,2.167,0.839l17.859-4.003c0.879-0.192,1.077-1.031,0.542-1.705L238.464,267.853z M220.697,258.094   l-15.084,3.377c-0.509,0.112-0.819-0.086-0.932-0.589l-4.414-19.742c-0.112-0.502,0.079-0.807,0.588-0.919l15.084-3.376   c7.043-1.579,12.501,1.553,13.935,7.975C231.335,251.355,227.741,256.515,220.697,258.094z"/>
	<path class="st0" d="M328.126,267.986l-36.842,8.246c-0.503,0.112-0.807-0.079-0.926-0.588l-3.964-17.727   c-0.112-0.502,0.079-0.807,0.581-0.925l30.685-6.858c0.753-0.172,1.15-0.793,0.978-1.546l-2.98-13.321   c-0.172-0.76-0.793-1.15-1.546-0.978l-30.678,6.859c-0.502,0.118-0.806-0.08-0.925-0.582l-3.793-16.974   c-0.112-0.502,0.08-0.812,0.582-0.918l36.842-8.246c0.746-0.172,1.137-0.786,0.971-1.539l-3.013-13.452   c-0.165-0.76-0.786-1.143-1.526-0.978l-54.828,12.263c-0.753,0.172-1.15,0.786-0.978,1.539l18.566,82.988   c0.172,0.753,0.787,1.143,1.547,0.971l54.82-12.263c0.747-0.165,1.137-0.786,0.965-1.54l-3.007-13.452   C329.487,268.211,328.872,267.82,328.126,267.986z"/>
	<path class="st0" d="M399.141,252.102l-36.836,8.24c-0.502,0.112-0.812-0.086-0.925-0.588l-3.964-17.728   c-0.112-0.502,0.086-0.812,0.588-0.918l30.671-6.872c0.767-0.165,1.15-0.78,0.984-1.533l-2.98-13.334   c-0.172-0.753-0.786-1.142-1.546-0.978l-30.678,6.872c-0.502,0.106-0.807-0.086-0.919-0.588l-3.799-16.974   c-0.112-0.502,0.079-0.806,0.582-0.925l36.835-8.24c0.767-0.172,1.156-0.786,0.991-1.539l-3.013-13.452   c-0.172-0.76-0.78-1.15-1.546-0.978l-54.814,12.263c-0.753,0.171-1.15,0.786-0.978,1.539l18.566,82.988   c0.172,0.753,0.786,1.143,1.54,0.972l54.814-12.263c0.766-0.172,1.156-0.786,0.984-1.54l-3.013-13.452   C400.522,252.32,399.908,251.93,399.141,252.102z"/>
</g>
</svg>`,
};

const modalStyles = `
  .xircls-loyalty-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
   font-family: var(--font-family) !important;
  }

  .xircls-loyalty-modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 450px;
    font-family: var(--font-family) !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  .xircls-loyalty-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 10px;
    font-family: var(--font-family) !important;
    margin-bottom: 15px;
  }

  .xircls-loyalty-modal-header h3 {
    margin: 0;
    font-size: 1.25rem;
    color: #333;
    font-family: var(--font-family) !important;
  }

  .xircls-loyalty-modal-close {
    background: none;
    border: none;
    font-size: 1.8rem;
    cursor: pointer;
    color: #888;
    font-family: var(--font-family) !important;
    line-height: 1;
  }
  
  .xircls-loyalty-modal-close:hover {
    color: #333;
    font-family: var(--font-family) !important;
  }

  .xircls-loyalty-modal-body p {
    color: #555;
    font-family: var(--font-family) !important;
    line-height: 1.5;
  }

  .xircls-loyalty-modal-reward-box {
    background-color: #f7f7f7;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 15px;
    margin: 20px 0;
    font-family: var(--font-family) !important;
  }

  .xircls-loyalty-modal-reward-box .reward-title {
    font-weight: bold;
    color: #333;
    margin: 0 0 5px 0;
    font-family: var(--font-family) !important;
    font-size: 1.1rem;
  }

  .xircls-loyalty-modal-reward-box .reward-points {
    color: #333;
    font-weight: 500;
    margin: 0;
    font-family: var(--font-family) !important;
  }

  .xircls-loyalty-modal-balance-summary {
    font-size: 0.9rem;
    color: #555;
    font-family: var(--font-family) !important;
  }

  .xircls-loyalty-modal-balance-summary div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-family: var(--font-family) !important;
  }

  .xircls-loyalty-modal-balance-summary hr {
    border: none;
    border-top: 1px solid #e0e0e0;
    margin: 10px 0;
    font-family: var(--font-family) !important;
  }

  .xircls-loyalty-modal-balance-summary div:last-child span {
    font-weight: bold;
    color: #333;
    font-family: var(--font-family) !important;
  }

  .xircls-loyalty-modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    font-family: var(--font-family) !important;
    margin-top: 20px;
  }

  .xircls-loyalty-modal-footer button {
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid transparent;
    font-size: 1rem;
    cursor: pointer;
    font-family: var(--font-family) !important;
    transition: all 0.2s;
  }

  .xircls-loyalty-modal-btn-cancel {
    background-color: #f0f0f0;
    font-family: var(--font-family) !important;
    border-color: #ccc;
    color: #333;
  }

  .xircls-loyalty-modal-btn-cancel:hover {
    background-color: #e0e0e0;
    font-family: var(--font-family) !important;
  }

  .xircls-loyalty-modal-btn-confirm {
   background-color: var(--btn-background-color);
  color: var(--btn-text-color);
  border: none;
  padding: 10px 18px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-family) !important;
  }

  .xircls-loyalty-modal-btn-confirm:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    font-family: var(--font-family) !important;
  }
  
  /* Add cursor pointer and hover effect to clickable milestone items */
  .loyalty-card-grid-item.clickable {
      cursor: pointer;
      transition: background-color 0.2s;
      font-family: var(--font-family) !important;
  }
  .loyalty-card-grid-item.clickable:hover {
  font-family: var(--font-family) !important;
      background-color: #f9f9f9;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
`;

// Inject styles into the document head
document.head.insertAdjacentHTML('beforeend', `<style>${modalStyles}</style>`);

function showRedemptionModal(milestone, currentBalance) {
  // Prevent multiple modals from opening
  const existingModal = document.querySelector('.xircls-loyalty-modal-overlay');
  if (existingModal) {
    existingModal.remove();
  }

  const loyaltyCurrency = LoyaltySettings?.basic_config?.points_terminology || "Points";
  const pointsToRedeem = milestone.points;
  const remainingBalance = currentBalance - pointsToRedeem;

  // Create overlay and modal elements
  const overlay = document.createElement('div');
  overlay.className = 'xircls-loyalty-modal-overlay';
  const modal = document.createElement('div');
  modal.className = 'xircls-loyalty-modal-content';

  // Populate modal with dynamic content
  modal.innerHTML = `
    <div class="xircls-loyalty-modal-header">
      <h3>Confirm Redemption</h3>
      <button class="xircls-loyalty-modal-close" aria-label="Close modal">×</button>
    </div>
    <div class="xircls-loyalty-modal-body">
      <p>You are about to redeem <strong>${pointsToRedeem.toLocaleString()} ${loyaltyCurrency}</strong> for the following reward:</p>
      <div class="xircls-loyalty-modal-reward-box">
        <p class="reward-title">${milestone.heading}</p>
        <p class="reward-points">${milestone.description}</p>
      </div>
      <div class="xircls-loyalty-modal-balance-summary">
        <div><span>Your current balance:</span> <span>${currentBalance.toLocaleString()} ${loyaltyCurrency}</span></div>
        <div><span>Cost:</span> <span style="color: #dc3545;">-${pointsToRedeem.toLocaleString()} ${loyaltyCurrency}</span></div>
        <hr>
        <div><span>Remaining balance:</span> <span>${remainingBalance.toLocaleString()} ${loyaltyCurrency}</span></div>
      </div>
    </div>
    <div class="xircls-loyalty-modal-footer">
      <button class="xircls-loyalty-modal-btn-cancel">Cancel</button>
      <button class="xircls-loyalty-modal-btn-confirm">Confirm Redemption</button>
    </div>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Get buttons for event handling
  const confirmButton = modal.querySelector('.xircls-loyalty-modal-btn-confirm');

  // Disable confirm button if user doesn't have enough points
  if (currentBalance < pointsToRedeem) {
    confirmButton.disabled = true;
    confirmButton.title = "You don't have enough points for this reward.";
    const balanceSummary = modal.querySelector('.xircls-loyalty-modal-balance-summary');
    const warning = document.createElement('p');
    warning.textContent = "You do not have enough points for this reward.";
    warning.style.color = '#dc3545';
    warning.style.textAlign = 'center';
    warning.style.fontWeight = 'bold';
    balanceSummary.appendChild(warning);
  } else {
    confirmButton.addEventListener('click', () => {
      handleLoyaltySubmit(milestone.points, milestone.rewardValue, milestone.rewardType, milestone.productId);
      closeModal();
    });
  }

  // Function to close the modal
  const closeModal = () => overlay.remove();

  // Add event listeners to close the modal
  modal.querySelector('.xircls-loyalty-modal-close').addEventListener('click', closeModal);
  modal.querySelector('.xircls-loyalty-modal-btn-cancel').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });
}


function renderWaysToEarn() {
  const wrapper = document.createElement("div");
  wrapper.className = "xircls-loyalty-ways-to-earn";

  const loyaltyCurrency = LoyaltySettings?.basic_config?.points_terminology || "Points";

  // Get the earn and redeem items
  const earnItems = getEarnItems();
  const redeemItems = getRedeemItems();

  // createCard will now handle adding click listeners internally
  const earnCard = earnItems.length ? createCard(`Ways to Earn ${loyaltyCurrency}`, earnItems) : null;
  const redeemCard = redeemItems.length ? createCard(`Redeem Your ${loyaltyCurrency}`, redeemItems) : null;

  // If both cards are missing, append a single fallback card
  if (!earnCard && !redeemCard) {
    // Fallback card creation (directly in the function)
    const fallbackCard = document.createElement("div");
    fallbackCard.className = "xircls-loyalty-card";

    const heading = document.createElement("span");
    heading.textContent = "Ways to Earn";
    fallbackCard.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "loyalty-card-grid";

    // Fallback item
    const itemDiv = document.createElement("div");
    itemDiv.className = "loyalty-card-grid-item";

    const contentWrapper = document.createElement("div");
    contentWrapper.className = "loyalty-grid-content-wrapper";

    const itemTitle = document.createElement("div");
    itemTitle.textContent = "There are currently no options available.";


    contentWrapper.appendChild(itemTitle);
    itemDiv.appendChild(contentWrapper);
    grid.appendChild(itemDiv);

    fallbackCard.appendChild(grid);

    // Append the fallback card to the wrapper
    wrapper.appendChild(fallbackCard);
  } else {
    if (earnCard) wrapper.appendChild(earnCard);
    if (redeemCard) wrapper.appendChild(redeemCard);
  }

  return wrapper;
}


function getEarnItems() {
  const loyaltyCurrency = LoyaltySettings?.basic_config?.points_terminology || "Points";
  const earnSettings = LoyaltySettings?.earn_rule_json;
  const earnItems = [];

  if (!earnSettings) return [];

  // Rule: Make a Purchase
  if (earnSettings.order_placed && earnSettings.order_placed !== "0") {
    const pointsPerPurchase = earnSettings.points_per_doller || 1;
    earnItems.push({
      heading: "Make a Purchase",
      subheading: `Earn ${pointsPerPurchase} ${loyaltyCurrency} for every Rs 1 spent`,
      icon: iconLibrary.purchase,
    });
  }

  // Rule: Create an Account
  if (earnSettings.account_signup && earnSettings.account_signup !== "0") {
    earnItems.push({
      heading: "Create an Account",
      subheading: `Earn ${earnSettings.account_signup} ${loyaltyCurrency} for signing up`,
      icon: iconLibrary.account,
    });
  }

  // Rule: Birthday Bonus
  if (earnSettings.birthday_bonus && earnSettings.birthday_bonus !== "0") {
    earnItems.push({
      heading: "Birthday Bonus",
      subheading: `Get ${earnSettings.birthday_bonus} ${loyaltyCurrency} as a gift on your birthday!`,
      icon: iconLibrary.birthday,
    });
  }

  // Rule: Follow on Facebook
  if (earnSettings.facebook_follow && earnSettings.facebook_follow !== "0") {
    earnItems.push({
      heading: "Follow on Facebook",
      subheading: `Earn ${earnSettings.facebook_follow} ${loyaltyCurrency} for following us`,
      icon: iconLibrary.facebook,
    });
  }

  // Rule: Follow on Instagram
  if (earnSettings.instagram_follow && earnSettings.instagram_follow !== "0") {
    earnItems.push({
      heading: "Follow on Instagram",
      subheading: `Earn ${earnSettings.instagram_follow} ${loyaltyCurrency} for following us`,
      icon: iconLibrary.instagram,
    });
  }

  return earnItems;
}


function getRedeemItems() {
  const loyaltyCurrency = LoyaltySettings?.basic_config?.points_terminology || "Points";
  const redeemSettings = LoyaltySettings?.redeem_rule_json;
  const redeemItems = [];

  if (!redeemSettings) return [];

  // 1. Flexible Redemption (unchanged, will not be clickable)
  if (redeemSettings?.flexible_redemption?.is_enabled) {
    const percentage = redeemSettings.flexible_redemption.maximum_points_per_order;
    redeemItems.push({
      heading: "Purchase Discount",
      subheading: `Use up to ${percentage}% of your ${loyaltyCurrency} at checkout!`,
      icon: iconLibrary.redeem, // Default icon for flexible redemption
      isMilestone: false, // Explicitly mark as not a milestone
      isFlexible: true
    });
  }

  // 2. Milestone Redemption (MODIFIED to include more data with custom icons)
  if (redeemSettings?.milestone_redemption?.is_enabled) {
    const milestones = redeemSettings.milestone_redemption.milestones || [];
    milestones.forEach(milestone => {
      let subheading = "";
      let milestoneIcon = getMilestoneIcon(milestone.reward_type);

      switch (milestone.reward_type) {
        case "percentage":
          subheading = `Get ${milestone.reward_value}% off for ${milestone.points_required} ${loyaltyCurrency}`;
          break;
        case "fixed_amount":
          subheading = `Get Rs ${milestone.reward_value} off for ${milestone.points_required} ${loyaltyCurrency}`;
          break;
        case "free_product":
          subheading = `${milestone.description || "Get a free product"} for ${milestone.points_required} ${loyaltyCurrency}`;
          break;
        default:
          subheading = `Redeem ${milestone.points_required} ${loyaltyCurrency}`;
      }

      // Push a richer object for milestones
      redeemItems.push({
        heading: milestone.title,
        subheading: subheading,
        icon: milestoneIcon,  // Dynamic icon based on reward type
        // --- START: New properties for the modal ---
        isFlexible: false,
        isMilestone: true,
        points: milestone.points_required,
        rewardType: milestone.reward_type,
        rewardValue: milestone.reward_value,
        description: milestone.description, // For display in the modal
        productId: milestone.entitled_product_ids ? milestone.entitled_product_ids[0] : null
        // --- END: New properties for the modal ---
      });
    });
  }

  return redeemItems;
}

// Helper function to get the icon based on reward type
function getMilestoneIcon(rewardType) {
  switch (rewardType) {
    case "percentage":
      return iconLibrary.discountPercentage;  // Assuming you have a specific icon for percentage discounts
    case "fixed_amount":
      return iconLibrary.discountFixedAmount;  // Specific icon for fixed amount discounts
    case "free_product":
      return iconLibrary.freeProduct;  // Specific icon for free product
    default:
      return iconLibrary.redeem;  // Default icon
  }
}
function createCard(title, items) {
  if (!items || items.length === 0) return null;

  const card = document.createElement("div");
  card.className = "xircls-loyalty-card";

  const heading = document.createElement("span");
  heading.textContent = title;
  card.appendChild(heading);

  const grid = document.createElement("div");
  grid.className = "loyalty-card-grid";

  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "loyalty-card-grid-item";

    // MODIFICATION: If the item is a milestone, make it clickable
    if (item.isMilestone) {
      itemDiv.classList.add('clickable');
      itemDiv.addEventListener('click', () => {
        const currentPoints = globalLoyaltyPoints?.available_points || 0;
        showRedemptionModal(item, currentPoints);
      });
    } else if (item.isFlexible) {
      // This is the new part for flexible redemption
      itemDiv.classList.add('clickable');
      itemDiv.addEventListener('click', () => {
        openRedemptionModal(); // Call the specified function
      });
    }
    const iconWrapper = document.createElement("div");
    iconWrapper.className = "loyalty-grid-icon-wrapper";
    iconWrapper.innerHTML = item.icon; // Directly set innerHTML

    const contentWrapper = document.createElement("div");
    contentWrapper.className = "loyalty-grid-content-wrapper";
    const itemTitle = document.createElement("div");
    itemTitle.textContent = item.heading;
    const itemSubtitle = document.createElement("div");
    itemSubtitle.textContent = item.subheading;
    contentWrapper.appendChild(itemTitle);
    contentWrapper.appendChild(itemSubtitle);

    itemDiv.appendChild(iconWrapper);
    itemDiv.appendChild(contentWrapper);
    grid.appendChild(itemDiv);
  });

  card.appendChild(grid);
  return card;
}

function renderTierBenefits() {
  const wrapper = document.createElement("div");
  wrapper.className = "xircls-loyalty-tier-benefits";

  const heading = document.createElement("span");
  heading.textContent = "Membership Tiers & Benefits";

  const subheading = document.createElement("div");
  subheading.textContent = "Your current tier: Platinum";

  wrapper.appendChild(heading);
  wrapper.appendChild(subheading);

  const cardsContainer = document.createElement("div");
  cardsContainer.className = "xircls-tier-benefits-container";

  tier_benefits.forEach((tier) => {
    const card = document.createElement("div");
    card.className = "tier-benefits-card";

    const headingRow = document.createElement("div");

    const tierHeading = document.createElement("span");
    tierHeading.textContent = tier.heading;

    if (tier.isCurrentlyActive) {
      const currentTag = document.createElement("span");
      currentTag.className = "tier-tag";
      currentTag.textContent = "Current";
      headingRow.appendChild(tierHeading);
      headingRow.appendChild(currentTag);
    } else {
      headingRow.appendChild(tierHeading);
    }

    const tierSubheading = document.createElement("div");
    tierSubheading.textContent = tier.subheading;

    const pointList = document.createElement("ul");

    tier.points.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      pointList.appendChild(li);
    });

    card.appendChild(headingRow);
    card.appendChild(tierSubheading);
    card.appendChild(pointList);

    cardsContainer.appendChild(card);
  });

  wrapper.appendChild(cardsContainer);

  return wrapper;
}

function renderCardWithTable() {
  const cardWithTable = document.createElement("div");
  cardWithTable.className = "card-with-table-wrapper";

  const heading = document.createElement("span");
  heading.textContent = `Recent ${loyaltyCurrency ? loyaltyCurrency : "points"} Activity`;
  heading.style.color = "var(--card-heading-color)";
  cardWithTable.appendChild(heading);

  if (loyaltyPointsHistory.length === 0) {
    const emptyCard = document.createElement("div");
    emptyCard.style.height = "100px";
    emptyCard.style.width = "100%";
    emptyCard.style.background = "var(--card-background-color)";
    emptyCard.style.display = "flex";
    emptyCard.style.alignItems = "center";
    emptyCard.style.justifyContent = "center";
    emptyCard.style.marginTop = "1rem";
    emptyCard.style.border = "1px solid #efefef";

    const text = document.createElement("span");
    text.textContent = `No ${loyaltyCurrency ? loyaltyCurrency : "points"} History`;
    text.style.color = "#000";
    text.style.fontWeight = "bold";
    text.style.fontSize = "15px";

    emptyCard.appendChild(text);
    cardWithTable.appendChild(emptyCard);
  } else {
    // Table
    const table = document.createElement("table");
    table.className = "overview-table";

    // Table Head
    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");

    ["Date", "Description", `${loyaltyCurrency ? loyaltyCurrency : "points"}`].forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      th.style.color = 'var(--card-label-color)';
      headRow.appendChild(th);
    });

    thead.appendChild(headRow);
    table.appendChild(thead);

    // Table Body
    const tbody = document.createElement("tbody");

    loyaltyPointsHistory.forEach((entry) => {
      const row = document.createElement("tr");

      const points = entry.action === "DEBIT"
        ? `-${entry.redeemed}`
        : entry.earned;

      const values = [entry.created_at, entry.description, points];

      values.forEach((value) => {
        const td = document.createElement("td");
        td.textContent = value;
        td.style.color = 'var(--card-text-color)';
        row.appendChild(td);
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    cardWithTable.appendChild(table);
  }

  return cardWithTable;
}


function updateLoyaltyPointsContainer() {
  console.log('loyallllllllllllllllll')
  const loyaltyPointsContainer = document.getElementById(
    "loyaltyPointsContainer"
  );
  loyaltyPointsContainer.innerHTML = "";
  const newDiv = document.createElement("div");

  const cardDiv = document.createElement("div");
  cardDiv.className = "xircls-loyalty-program-card";

  const firstRow = document.createElement("div");
  firstRow.className = "row-1";

  const iconWrapper = document.createElement("div");
  iconWrapper.className = "xircls-icon-wrapper";
  iconWrapper.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" style="stroke: white;" width="24" height="24" viewBox="0 0 24 24" class="xircls-icon-svg">
      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
      <line x1="2" x2="22" y1="10" y2="10"></line>
    </svg>
  `;

  const textWrapper = document.createElement("div");
  textWrapper.className = "xircls-text-wrapper";

  const heading = document.createElement("div");
  heading.textContent = "Platinum Member";

  const subheading = document.createElement("div");
  subheading.textContent = "Loyalty Program";

  textWrapper.appendChild(heading);
  textWrapper.appendChild(subheading);

  firstRow.appendChild(iconWrapper);
  firstRow.appendChild(textWrapper);
  cardDiv.appendChild(firstRow);

  // Label row above progress bar
  //   const labelRow = document.createElement("div");
  //   labelRow.className = "label-row";

  //   const leftLabel = document.createElement("div");
  //   leftLabel.textContent = "Progress to Diamond";

  //   const rightLabel = document.createElement("div");
  //   rightLabel.innerHTML = `
  //   <div>1250 points</div>
  //   <div>750 points until Diamond</div>
  // `;

  //   labelRow.appendChild(leftLabel);
  //   labelRow.appendChild(rightLabel);
  //   cardDiv.appendChild(labelRow);

  // Second row: progress bar
  // const secondRow = document.createElement("div");
  // secondRow.className = "row-2";

  // const progressBar = document.createElement("div");
  // progressBar.className = "progress-bar";

  // const progressFill = document.createElement("div");
  // progressFill.className = "progress-fill";

  // progressBar.appendChild(progressFill);
  // secondRow.appendChild(progressBar);
  // cardDiv.appendChild(secondRow);

  // Third row: three columns
  const thirdRow = document.createElement("div");
  thirdRow.className = "row-3";

  const createColumn = (headingText, paragraphText) => {
    const col = document.createElement("div");
    col.className = "col";

    const heading = document.createElement("div");
    heading.style.color = "var(--card-label-color)"
    heading.textContent = headingText;

    const paragraph = document.createElement("div");
    paragraph.style.color = "var(--card-text-color)"
    paragraph.textContent = paragraphText;

    col.appendChild(heading);
    col.appendChild(paragraph);
    return col;
  };

  const col1 = createColumn(
    `${globalLoyaltyPoints?.available_points || 0}`,
    `Available ${loyaltyCurrency ? loyaltyCurrency : "Points"}`
  );
  const col2 = createColumn(
    `${globalLoyaltyPoints?.debited_points || 0}`,
    `Deducted ${loyaltyCurrency ? loyaltyCurrency : "Points"}`
  );
  const col3 = createColumn(
    // `${globalLoyaltyPoints?.tier_member}`,
    `Member`,
    "Current Tier"
  );

  thirdRow.appendChild(col1);
  thirdRow.appendChild(col2);
  thirdRow.appendChild(col3);
  cardDiv.appendChild(thirdRow);

  // Redeem Section
  const redeemSection = document.createElement("div");
  redeemSection.className = "xircls-redeem-div";

  // Left Column
  const redeemLeft = document.createElement("div");
  redeemLeft.className = "redeem-left";
  redeemLeft.style.color = "var(--card-text-color)"
  redeemLeft.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="18" height="18" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
  <div>Redeem your ${loyaltyCurrency ? loyaltyCurrency : "Points"} for exclusive rewards</div>
`;

  // Right Column
  const redeemRight = document.createElement("div");
  redeemRight.className = "redeem-right";

  const redeemBtn = document.createElement("button");
  redeemBtn.className = "redeem-btn";
  redeemBtn.textContent = `Redeem ${loyaltyCurrency ? loyaltyCurrency : "Points"}`;
  redeemBtn.addEventListener("click", () => {
    if (LoyaltySettings?.redeem_rule_json?.flexible_redemption?.is_enabled == true) {
      openRedemptionModal();
    } else {
      openRedemptionModalNew();
    }
  });

  redeemRight.appendChild(redeemBtn);

  // Append to redeemSection
  redeemSection.appendChild(redeemLeft);
  redeemSection.appendChild(redeemRight);

  // Create toggleSection
  const toggleSection = document.createElement("div");
  toggleSection.className = "toggle-section";

  // Append all containers to the wrapper div
  newDiv.appendChild(cardDiv);

  // Append redeemSection to cardDiv
  newDiv.appendChild(redeemSection);

  // Buttons container
  const btnContainer = document.createElement("div");
  btnContainer.className = "toggle-buttons";

  const tabs = ["Overview", `${loyaltyCurrency ? loyaltyCurrency : "Points"} History`, "Ways To Earn"]; //, "Tier Benefits"
  let activeTab = "Overview"; // default active
  // updateTabContent(Overview);

  tabs.forEach((tab) => {
    const btn = document.createElement("button");
    btn.textContent = tab;
    btn.className = `loyalty-tab-btn ${tab === activeTab ? "lty-active" : ""}`;
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".loyalty-tab-btn")
        .forEach((b) => b.classList.remove("lty-active"));
      btn.classList.add("lty-active");
      updateTabContent(tab);
    });
    btnContainer.appendChild(btn);
  });

  // Content container
  const tabContent = document.createElement("div");
  tabContent.className = "xircls-loyalty-tab-content";
  tabContent.appendChild(renderOverview()); // default content

  function updateTabContent(tabName) {
    tabContent.innerHTML = ""; // Clear previous content

    switch (tabName) {
      case "Overview":
        tabContent.appendChild(renderOverview());
        break;
      case `${loyaltyCurrency ? loyaltyCurrency : "Points"} History`:
        tabContent.appendChild(renderPointHistory(true));
        break;
      case "Ways To Earn":
        tabContent.appendChild(renderWaysToEarn());
        break;
      // case "Tier Benefits":
      //   tabContent.appendChild(renderTierBenefits());
      //   break;
      default:
        tabContent.textContent = `No content available for ${tabName}`;
    }
  }

  // Append buttons and content to toggle section
  toggleSection.appendChild(btnContainer);
  toggleSection.appendChild(tabContent);

  newDiv.appendChild(toggleSection);

  // Append the wrapper div to the container
  loyaltyPointsContainer.appendChild(newDiv);
}

function updateSecurityContainer() {
  console.log({ myOrders, myWishlist, recentlyViewed, myProfile, changePassword, logout, dashboard });

  const securityContainer = document.getElementById("securityContainer");
  securityContainer.innerHTML = "";

  const cardElement = document.createElement("div");
  if (window.innerWidth > 768) {
    cardElement.style.width = "60%";
  } else {
    cardElement.style.width = "100%";
  }
  cardElement.style.margin = "auto";

  // --- 1. Define the base HTML structure ---
  // This is your new, clean UI.
  const baseHtml = `
    <div style="font-size: 16px; padding: 20px; border-radius: var(--card-border-radius); background-color: var(--card-background-color); border: 1px solid var(--card-border-color);">
      <div id="xircls-password-description" style="margin-bottom: 1.5rem; font-family: var(--secondaryFontFamily); color: var(--card-text-color);">
        For security reasons, please enter your new password. It must be at least 8 characters long and should include a combination of letters, numbers, and special characters. An OTP will be sent to your email to confirm the change.
      </div>

      <!-- Container for Password Fields -->
      <div id="xircls-password-fields-container" style="display: flex; flex-direction: column; gap: 1.5rem;">
        <!-- New Password -->
        <div>
          <label style="display: block; margin-bottom: 0.25rem; font-family: var(--secondaryFontFamily); color: var(--card-label-color);">New Password</label>
          <div style="position: relative;">
            <input type="password" value="" name="new-password" id="xircls-new-password-input" style="width: 100%; padding: 0.75rem 2.5rem 0.75rem 2.5rem; border: 1px solid var(--card-text-color); font-family: var(--secondaryFontFamily); color: var(--card-text-color); outline: none; border-radius: var(--card-border-radius)" />
            ${lockSVG}
            <button type="button" id="xircls-new-eye" style="background-color: transparent; border: none; position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); color: gray; cursor: pointer;">
              <div class="curr-pass-toggle" id="xircls-new-eye-svg"></div>
            </button>
          </div>
        </div>

        <!-- Confirm New Password -->
        <div>
          <label style="display: block; margin-bottom: 0.25rem; font-family: var(--secondaryFontFamily); color: var(--card-label-color);">Confirm New Password</label>
          <div style="position: relative;">
            <input type="password" value="" name="confirm-new-password" id="xircls-confirm-password-input" style="width: 100%; padding: 0.75rem 2.5rem 0.75rem 2.5rem; border: 1px solid var(--card-text-color); font-family: var(--secondaryFontFamily); color: var(--card-text-color); outline: none; border-radius: var(--card-border-radius)" />
            ${lockSVG}
            <button type="button" id="xircls-confirm-eye" style="background-color: transparent; border: none; position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); color: gray; cursor: pointer;">
              <div class="curr-pass-toggle" id="xircls-confirm-eye-svg"></div>
            </button>
          </div>
        </div>
      </div>

      <!-- Container for OTP Field (initially hidden) -->
      <div id="xircls-otp-container" style="display: none; margin-top: 1.5rem;">
        <p style="font-family: var(--secondaryFontFamily); color: #4b5563; margin-bottom: 1rem;">An OTP has been sent to your registered email. Please enter it below to confirm.</p>
        <div>
          <label style="display: block; margin-bottom: 0.25rem; font-family: var(--secondaryFontFamily); color: var(--card-label-color);">Enter OTP</label>
          <input type="text" id="xircls-otp-input" name="otp-input" autocomplete="one-time-code" style="width: 100%; padding: 0.75rem; border: 1px solid var(--card-text-color); font-family: var(--secondaryFontFamily); color: var(--card-text-color); outline: none; border-radius: var(--card-border-radius)"/>
        </div>
      </div>

      <!-- Alert -->
      <div style="display: flex; margin: 1rem 0; padding: 1rem; border-radius: 0.5rem; gap: 5px;">
        <svg width="20" height="20" style="margin-right: 0.75rem; margin-top: 0.125rem; flex-shrink: 0; color: #f59e0b;" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
        <div style="font-family: var(--secondaryFontFamily); color: var(--card-text-color);">
          For security reasons, you'll be automatically logged out after changing your password and will need to log in again with your new credentials.
        </div>
      </div>

      <!-- Button -->
      <div style="display: flex; justify-content: flex-end; padding-right: 0.5rem;">
        <button type="button" id="xircls-update-password-button" style=" width:100%; padding:10px 24px; width: fit-content; font-family: var(--secondaryFontFamily); letter-spacing: 0.05em; color: var(--btn-text-color); background-color: var(--btn-background-color); transition: 0.3s; border: none;">
          UPDATE PASSWORD
        </button>
      </div>
    </div>
  `;
  cardElement.innerHTML = baseHtml;

  // --- 2. Attach the fully formed card to the DOM ---
  securityContainer.appendChild(cardElement);

  // --- 3. Get references to all the interactive elements ---
  const newPasswordInput = cardElement.querySelector("#xircls-new-password-input");
  const confirmPasswordInput = cardElement.querySelector("#xircls-confirm-password-input");
  const otpInput = cardElement.querySelector("#xircls-otp-input");
  const updateButton = cardElement.querySelector("#xircls-update-password-button");

  const passwordFieldsContainer = cardElement.querySelector("#xircls-password-fields-container");
  const otpContainer = cardElement.querySelector("#xircls-otp-container");
  const passwordDescription = cardElement.querySelector("#xircls-password-description");

  // --- 4. Logic for the two-step OTP flow ---
  let isOtpStep = false;
  let stagedNewPassword = "";

  const showOtpView = () => {
    passwordFieldsContainer.style.display = "none";
    otpContainer.style.display = "block";
    updateButton.textContent = "VERIFY & SAVE";
    isOtpStep = true;
    passwordDescription.textContent = "An OTP has been sent to your email. Please enter it below to complete your password change.";
  };

  const showPasswordView = () => {
    passwordFieldsContainer.style.display = "flex";
    otpContainer.style.display = "none";
    updateButton.textContent = "UPDATE PASSWORD";
    isOtpStep = false;
    stagedNewPassword = "";
    newPasswordInput.value = "";
    confirmPasswordInput.value = "";
    otpInput.value = "";
    passwordDescription.textContent = "For security reasons, please enter your new password. It must be at least 8 characters long and should include a combination of letters, numbers, and special characters. An OTP will be sent to your email to confirm the change.";
  };

  // --- 5. The main event handler for the button ---
  updateButton.onclick = async () => {
    const originalButtonText = updateButton.textContent;
    updateButton.disabled = true;
    updateButton.textContent = "LOADING...";



    const url = `https://omc.axentraos.co.in/customer_profile/update_customer_password/`;

    if (!customerEmail || !customerId) {
      console.error("Critical: customerEmail or customerId is missing.");
      createStatusToast("Configuration Error", "Could not retrieve customer details.", "error");
      updateButton.disabled = false;
      updateButton.textContent = originalButtonText;
      return;
    }

    try {
      // --- STEP 2: VERIFY OTP ---
      if (isOtpStep) {
        const otp = otpInput.value;
        if (!otp || otp.trim().length < 4) throw new Error("Please enter a valid OTP.");

        const payload = {
          shop: Shopify.shop,
          app: "oh_my_customer",
          customerId: customerId,
          email: customerEmail,
          newPassword: stagedNewPassword,
          otp: otp,
        };

        const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        if (!response.ok) throw new Error("Invalid OTP. Please try again.");

        createStatusToast("Password Changed", "Your password has been updated successfully.", "success");
        showPasswordView();

        // --- STEP 1: REQUEST OTP ---
      } else {
        const newPassword = newPasswordInput.value;
        const confirmNewPassword = confirmPasswordInput.value;

        if (newPassword !== confirmNewPassword) throw new Error("New password and confirmation do not match.");
        if (newPassword.length < 8) throw new Error("Password must be at least 8 characters.");

        stagedNewPassword = newPassword;
        const payload = {
          shop: Shopify.shop,
          app: "oh_my_customer",
          customerId: customerId,
          email: customerEmail,
          newPassword: newPassword,
        };

        const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to initiate password change.");
        }

        showOtpView();
      }
    } catch (error) {
      console.error("Password change process failed:", error);
      createStatusToast("Request Failed", error.message, "error");
    } finally {
      updateButton.disabled = false;
      updateButton.textContent = isOtpStep ? "VERIFY & SAVE" : "UPDATE PASSWORD";
    }
  };

  // --- 6. Eye-toggle visibility logic ---
  const eyeSVG = `<svg fill="#000000" width="20px" height="20px" stroke-width="2"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/></svg>`;
  const eyeSlashSVG = `<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" fill="#000000" width="20px" height="20px" stroke-width="2"  viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"/></svg>`;

  function togglePasswordVisibility(input, eyeIcon) {
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    eyeIcon.innerHTML = isHidden ? eyeSlashSVG : eyeSVG;
  }

  // Attach listeners to eye buttons
  cardElement.querySelector("#xircls-new-eye").onclick = () => togglePasswordVisibility(newPasswordInput, cardElement.querySelector("#xircls-new-eye-svg"));
  cardElement.querySelector("#xircls-confirm-eye").onclick = () => togglePasswordVisibility(confirmPasswordInput, cardElement.querySelector("#xircls-confirm-eye-svg"));

  // Set initial eye states
  cardElement.querySelector("#xircls-new-eye-svg").innerHTML = eyeSVG;
  cardElement.querySelector("#xircls-confirm-eye-svg").innerHTML = eyeSVG;
}

async function fetchAddressMeta() {
  if (customerId) {
    try {
      const metafieldResponse = await fetch(
        `https://${baseUrl}/api/v1/get_metafield/?customerId=${customerId}&shop=${Shopify.shop}&app=oh_my_customer`,
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
          addressMetaFieldsData = JSON.parse(existingMetafield.value);
          return {
            id: existingMetafield.id,
            addressMeta: JSON.parse(existingMetafield.value),
          };
        }
      }
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      addressMetaFieldsData = [];
      return { id: null, addressMeta: [] };
    }
  }
}
async function updateNewAddressMetaFields(data, addressData) {
  try {
    // Step 1: Fetch all metafields
    const metafieldResponse = await fetch(
      `https://${baseUrl}/api/v1/get_metafield/?customerId=${customerId}&shop=${Shopify.shop}&app=oh_my_customer`
    );
    const metafieldData = await metafieldResponse.json();

    const allMetafields = metafieldData?.metafields?.metafields || [];

    // Step 2: Find the relevant addressData metafield
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

    const addressResponse = await addCustomerAddress(addressData);
    const newAddressId = addressResponse?.customer_address?.id;

    // console.log("Created new address:", addressResponse?.customer_address.id);

    if (!newAddressId) {
      throw new Error("Address creation failed or ID not returned.");
    }

    // Step 4: Append new address entry
    addressItems.push({
      address_id: newAddressId,
      contact_name: data.recipientName || "",
      relation: data.relationship || "",
      addressas: data.saveAddressAs || "",
    });

    // Step 5: Prepare metafield payload
    const metafieldPayload = {
      customerId: customerId,
      shop: Shopify.shop,
      app: "oh_my_customer",
      metafieldId: existingMetafieldId,
      productId: "" || 0,
      metafield: {
        ...(existingMetafieldId && { id: existingMetafieldId }),
        namespace: "addressData",
        key: "items",
        value: JSON.stringify(addressItems),
        type: "json",
      },
    };
    // console.log(addressItems, "addressdatata")
    // Step 6: Send to correct endpoint
    const url = existingMetafieldId
      ? `https://${baseUrl}/api/v1/update_metafield/`
      : `https://${baseUrl}/api/v1/create_metafield/`;

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
  } catch (error) {
    console.error("Error saving shipping info:", error);
    // createStatusToast("Couldn’t Update Address", "We couldn’t save your address. Please check the details and try again.", "error")
  }
}
async function updateAddressMetaFields(data, addressId) {
  try {
    // Step 1: Fetch all metafields (similar to new address case)
    const metafieldResponse = await fetch(
      `https://${baseUrl}/api/v1/get_metafield/?customerId=${customerId}&shop=${Shopify.shop}&app=oh_my_customer`
    );
    const metafieldData = await metafieldResponse.json();
    const allMetafields = metafieldData?.metafields?.metafields || [];

    // Step 2: Find the relevant addressData metafield again
    const addressMeta = allMetafields.find(
      (mf) => mf.namespace === "addressData" && mf.key === "items"
    );

    let addressItems = [];
    const existingMetafieldId = addressMeta?.id; // Capture the metafield ID

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

    // Step 3: Find the correct address item within addressItems to update it
    const addressIndex = addressItems.findIndex(
      (item) => item.address_id === addressId
    );

    if (addressIndex === -1) {
      console.warn(`Address with ID ${addressId} not found in metafield!`);
      // You might want to handle this case (e.g., throw an error)
      return;
    }

    // Step 4: Update the addressData item - CREATE properties if they don't exist
    addressItems[addressIndex] = {
      ...addressItems[addressIndex], // Keep the existing data
      contact_name: data.recipientName !== undefined ? data.recipientName : "", // Update or create if they don't exist
      relation: data.relationship !== undefined ? data.relationship : "", // Update or create if they don't exist
      addressas: data.saveAddressAs !== undefined ? data.saveAddressAs : "", // Update or create if they don't exist
    };

    console.log(addressItems, "submittt");

    // Step 5: Prepare metafield payload to update
    const metafieldPayload = {
      customerId: customerId,
      shop: Shopify.shop,
      app: "oh_my_customer",
      metafieldId: existingMetafieldId,
      productId: "" || 0,
      metafield: {
        ...(existingMetafieldId && { id: existingMetafieldId }),
        namespace: "addressData",
        key: "items",
        value: JSON.stringify(addressItems),
        type: "json",
      },
    };

    // Step 6: Save the metafield update
    const saveResponse = await fetch(
      `https://${baseUrl}/api/v1/update_metafield/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(metafieldPayload),
      }
    );

    const savedData = await saveResponse.json();

    if (!saveResponse.ok) {
      throw new Error(`Error updating metafield: ${savedData.message}`);
    }

    console.log("Saved updated address metadata:", savedData);
  } catch (error) {
    console.error("Error saving shipping info:", error);
    // createStatusToast("Failed to save address info", "Failed to save address info", "error")
  }
}
function removeAddressCard(id) {
  const addressCard = document.querySelector(`#xircls-address-card-${id}`);
  if (addressCard) {
    addressCard.remove();
  }
  deleteCustomerAddress(id)
}

function returnAddressCard(
  address,
  isNew = false,
  newAddressCount,
  recipientName,
  relationship,
  saveAddressAs
) {
  const cardId = address.id || newAddressCount;
  // console.log(address, recipientName, relationship, "888888888888")
  return `
<div class="xircls-address" style="background: var(--card-background-color); margin-bottom: 32px; padding: 24px; border-radius: var(--card-border-radius); border: ${address.default ? "2px solid black" : "1px solid var(--card-border-color)"
    }">
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
  <div style="display: flex; align-items: center;">
    <div style="font-size: 18px !important; font-family: var(--secondaryFontFamily); font-weight: 500;">
      <div style="display: flex; align-items: center; color: var(--card-heading-color);">
         ${address.default
      ? `Default Address
         <div style="margin-left: 8px; font-size: 12px !important; background-color: black; color: white; padding: 4px 8px;">DEFAULT</div>`
      : `Address`
    }
      </div>
    </div>
  </div>
  <div style="display: flex; align-items: center;">
    ${isNew
      ? `${address.default ? '' : `<button id="xircls-address-delete-button-${cardId}" onclick="removeAddressCard(${cardId})" style="color: #000; border: none; padding: 8px; background-color: transparent; text-align: center; display: flex; align-items: center; justify-content: center; cursor: pointer;" title="Delete Address">
       <svg xmlns="http://www.w3.org/2000/svg" class="xircls-delete-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" width="18" height="18">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" x2="10" y1="11" y2="17"></line>
            <line x1="14" x2="14" y1="11" y2="17"></line>
          </svg>
    </button>`}`
      : `
        ${address.default ? '' : `<button id="xircls-address-delete-button-${cardId}" onclick="removeAddressCard(${cardId})" style="color: #000; border: none; padding: 8px; background-color: transparent; text-align: center; display: flex; align-items: center; justify-content: center; cursor: pointer;" title="Delete Address">
       <svg xmlns="http://www.w3.org/2000/svg" class="xircls-delete-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" width="18" height="18">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" x2="10" y1="11" y2="17"></line>
            <line x1="14" x2="14" y1="11" y2="17"></line>
          </svg>
    </button>`}
      <button id="xircls-address-edit-button-${cardId}" style="color: #000; border: none; padding: 8px; background-color: transparent; text-align: center; display: flex; align-items: center; justify-content: center; cursor: pointer;" title="Edit Address">
       <svg xmlns="http://www.w3.org/2000/svg" class="xircls-edit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" width="18" height="18">
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
            <path d="m15 5 4 4"></path>
          </svg>
    </button>
     ${address.default
        ? ``
        : `<button id="xircls-address-delete-button-${cardId}" onclick="deleteCustomerAddress(${address.id})" style="color: #000; border: none; padding: 8px; background-color: transparent; text-align: center; display: flex; align-items: center; justify-content: center;" title="Delete Address">
       <svg xmlns="http://www.w3.org/2000/svg" class="xircls-delete-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" x2="10" y1="11" y2="17"></line>
            <line x1="14" x2="14" y1="11" y2="17"></line>
          </svg>
    </button>`
      } `
    }
  </div>
</div>

<div class="xircls-personal-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
   
  <label style="display: block;">
    <div style="font-size: 14px; font-family: var(--secondaryFontFamily); margin-bottom: 4px; display: block; color: var(--card-label-color);">Recipient Name</div>
    <div style="position: relative;">
      <input type="text" id="customer-recipient-name-${cardId}" name="customer-recipient-name-${cardId}" value="${recipientName || ``
    }" disabled style="font-size: 16px; width: 100%; border: 1px solid #e5e7eb; padding: 12px 16px; padding-left: 40px; font-family: var(--secondaryFontFamily);color: var(--card-text-color);" required="" placeholder="Full name of recipient" value="" >
      <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #d1d5db; height: 16px; width: 16px;">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </div>
  </label>

  <label style="display: block;">
    <div style="font-size: 14px; font-family: var(--secondaryFontFamily); margin-bottom: 4px; display: block; color: var(--card-label-color);">Relationship</div>
    <div style="display: flex; gap: 12px;">
      <div style="position: relative; flex: 1;">
        <select id="customer-relationship-select-${cardId}" disabled style="width: 100%; border: 1px solid #e5e7eb; padding: 12px 16px; padding-left: 40px; font-family: var(--secondaryFontFamily); appearance: none; focus:outline: none; focus:ring: 1px solid black; color: var(--card-text-color)" required="">
          <option value="">Select Relationship...</option>  
          <option value="Self">Self</option>
          <option value="Spouse">Spouse</option>
          <option value="Partner">Partner</option>
          <option value="Friend">Friend</option>
          <option value="Parent">Parent</option>  
          <option value="Child">Child</option>
          <option value="Sibling">Sibling</option>
          <option value="Colleague">Colleague</option>
          <option value="Neighbor">Neighbor</option>
        </select>
        <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #d1d5db; height: 16px; width: 16px;">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      </div>
    </div>
  </label>
  
  <label style="display: block;">
    <div style="font-size: 14px; font-family: var(--secondaryFontFamily); margin-bottom: 4px; display: block; color: var(--card-label-color);">Save Address As</div>
    <div style="position: relative;">
      <input type="text" id="customer-saveaddressas-${cardId}" disabled name="customer-saveaddressas-${cardId}" value="${saveAddressAs || ``
    }" ${address.default ? 'readonly' : ''} style="font-size: 16px;color: var(--card-text-color); width: 100%; border: 1px solid #e5e7eb; padding: 12px 16px; padding-left: 40px; font-family: var(--secondaryFontFamily);" required="" placeholder="Save Address as" value="">
      <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #d1d5db; height: 16px; width: 16px;">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </div>
  </label>

  <label style="display: block;">
    <div style="font-size: 14px; font-family: var(--secondaryFontFamily); margin-bottom: 4px; display: block; color: var(--card-label-color);">Address Line 1</div>
    <div style="position: relative;">
      <input type="text" id="address-line-one-${cardId}" disabled style="font-size: 16px;color: var(--card-text-color); width: 100%; border: 1px solid #e5e7eb; padding: 12px 16px; padding-left: 40px; font-family: var(--secondaryFontFamily);" required="" placeholder="house number, house name" value="${address.address1 || ``
    }">
      <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #d1d5db; height: 16px; width: 16px;">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  </label>

    <label style="display: block;">
    <div style="font-size: 14px; font-family: var(--secondaryFontFamily); margin-bottom: 4px; display: block; color: var(--card-label-color);">Address Line 2</div>
    <div style="position: relative;">
      <input type="text" id="address-line-two-${cardId}" disabled style="font-size: 16px;color: var(--card-text-color); width: 100%; border: 1px solid #e5e7eb; padding: 12px 16px; padding-left: 40px; font-family: var(--secondaryFontFamily);" required="" placeholder="street, landmark" value="${address.address2 || ``
    }">
      <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #d1d5db; height: 16px; width: 16px;">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  </label>

   <label style="display: block;">
    <div style="font-size: 14px; font-family: var(--secondaryFontFamily); margin-bottom: 4px; display: block; color: var(--card-label-color);">Country</div>
    <div style="position: relative;">
      <select id="country-select-${cardId}" disabled value="${address.country || ``
    }" style="font-size: 16px; width: 100%; border: 1px solid #e5e7eb;color: var(--card-text-color); padding: 12px 16px; padding-left: 40px; font-family: var(--secondaryFontFamily); appearance: none; focus:outline: none; focus:ring: 1px solid black;">
        <option value="">Select Country...</option>
     
      </select>
      <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #d1d5db; height: 16px; width: 16px;">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  </label>

   <label style="display: block;">
    <div style="font-size: 14px; font-family: var(--secondaryFontFamily); margin-bottom: 4px; display: block; color: var(--card-label-color);">State/Province</div>
    <div style="position: relative;">
      <select  id="state-select-${cardId}" disabled  value="${address.province || ``
    }"  style="font-size: 16px; width: 100%; border: 1px solid #e5e7eb;color: var(--card-text-color); padding: 12px 16px; padding-left: 40px; font-family: var(--secondaryFontFamily); appearance: none; focus:outline: none; focus:ring: 1px solid black;">
        <option value="">Select State...</option>
        
      </select>
      <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #d1d5db; height: 16px; width: 16px;">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  </label>

  <label style="display: block;">
    <div style="font-size: 14px; font-family: var(--secondaryFontFamily); margin-bottom: 4px; display: block; color: var(--card-label-color);">City</div>
    <div style="position: relative;">
      <select  id="city-select-${cardId}" disabled  value="${address.city || ``
    }" style="font-size: 16px; width: 100%; border: 1px solid #e5e7eb;color: var(--card-text-color); padding: 12px 16px; padding-left: 40px; font-family: var(--secondaryFontFamily); appearance: none; focus:outline: none; focus:ring: 1px solid black;">
        <option value="">Select City...</option>
      
      </select>
      <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #d1d5db; height: 16px; width: 16px;">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  </label>

  <label style="display: block;">
    <div style="font-size: 14px; font-family: var(--secondaryFontFamily); margin-bottom: 4px; display: block; color: var(--card-label-color);">Postal Code</div>
    <div style="position: relative;">
      <input type="text" id="customer-zip-${cardId}" disabled style="font-size: 16px;color: var(--card-text-color); width: 100%; border: 1px solid #e5e7eb; padding: 12px 16px; padding-left: 40px; font-family: var(--secondaryFontFamily);" required="" placeholder="Postal/ZIP code" value="${address.zip || ``
    }">
      <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #d1d5db; height: 16px; width: 16px;">
        <path d="M21 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </div>
  </label>
</div>
 <div style="margin-top: 24px; display: flex; justify-content: flex-end;">
 
   <button
      id="xircls-address-cancel-button-${cardId}"
      style="border: 1px solid #4b5563; display: none; padding: 8px 20px !important; background-color: white; color: #4b5563; font-size: 14px !important; text-transform: uppercase; letter-spacing: 0.1em; transition: background-color 0.3s ease; text-wrap: nowrap; cursor: pointer; margin-right: 10px;"
    >
      Cancel
    </button>

   <button  id="xircls-address-save-button-${cardId}" style="display: ${isNew ? "block" : "none"
    }; border: none; padding: 8px 20px !important; background-color: black; color: white; font-size: 14px !important; text-transform: uppercase; letter-spacing: 0.1em; transition: background-color 0.3s ease; text-wrap: nowrap; cursor: pointer;">
      Save Address
    </button>  
  </div>
</div>
  `;
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
async function updateProfileContainer(cardData) {
  console.log(cardData, "cardDataaaa");

  const addressMetafields = await fetchAddressMeta();

  const profileContainer = document.getElementById("profileContainer");
  profileContainer.innerHTML = "";

  const cardsWrapper = document.createElement("div");
  cardsWrapper.id = "xircls-profile-cards-wrapper";

  const profilePhotoCard = document.createElement("div");
  profilePhotoCard.style.borderRadius = "var(--card-border-radius)";
  profilePhotoCard.innerHTML = `
                <div style="padding: 20px; margin-bottom: 32px; background: var(--card-background-color); border: 1px solid var(--card-border-color); border-radius: var(--card-border-radius);">
  <div style="font-size: 22px !important; font-family: var(--font-family); font-weight: 300; margin-bottom: 1.5rem; color: var(--card-heading-color);">Profile Photo</div>
  <div id="xircls-profile-card" style="display: flex; flex-direction: row; gap: 2rem;">
    <div  id="xircls-profile-card-section-1" style="margin-bottom: 1.5rem;">
      <div style="height: 140px; width: 140px; border-radius: 50%; overflow: hidden; border: 1px solid #e5e7eb; margin-bottom: 1rem; position: relative; background: var(--profile-background-color); border: var(--profile_border_size) solid var(--profile_border_color);">
        ${img_url
      ? `<img src="${img_url}" alt="${img_fn} ${img_ln}"  style="height: 100%; width: 100%; object-fit: cover;">`
      : `<div style="display: flex; justify-content: center; align-items: center; height: 100%;"><div style="font-weight: bold; font-size: xx-large; font-family: var(--font-family);">${img_fn}${img_ln}</div></div>`
    }
      </div>
    </div>
    <div   id="xircls-profile-card-section-2" style="display: flex; flex-direction: column; gap: 1rem; max-width: 50%;">
      <div style="font-size: 16px !important; font-family: var(--secondaryFontFamily); color: var(--card-label-color);">Upload a new photo</div>
      <div style="color: var(--card-text-color); font-family: var(--secondaryFontFamily); font-size: 14px; margin-bottom: 1rem; letter-spacing: 0px;">
        Your profile photo will be visible across your account and helps others recognize you. Choose a clear, professional image that represents you well.
      </div>
      <input type="file" accept="image/*" style="display: none;">
      <button type="button" onclick="triggerFileInput()" style="background-color: var(--btn-background-color); border: 1px solid #4b5563; color: var(--btn-text-color); padding: 10px 20px !important; font-family: var(--secondaryFontFamily); text-transform: uppercase; font-size: 16px !important; display: flex; align-items: center; justify-content: center; cursor: pointer;">
        <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="height: 1rem; width: 1rem; margin-right: 0.5rem;">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" x2="12" y1="3" y2="15"></line>
        </svg>
        CHOOSE IMAGE
      </button>
      <div style="font-size: 0.75rem; margin-top: 0.5rem; color: var(--card-text-color); font-family: var(--secondaryFontFamily);">Supported formats: JPEG, PNG, GIF. Maximum file size: 45KB.</div>
    </div>
  </div>
</div>
  `;
  if (myProfile.includes("Profile_Picture")) {
    profileContainer.appendChild(profilePhotoCard);
  }
  if (window.innerWidth <= 768 && LoyaltySettings?.earn_rule_json?.instagram_url) {
    const instaButtonWrapper = document.createElement("div");
    instaButtonWrapper.style.marginTop = "-10px";
    instaButtonWrapper.style.marginBottom = "15px";
    instaButtonWrapper.style.display = "flex";
    instaButtonWrapper.style.flexDirection = "column"; // Stack vertically
    instaButtonWrapper.style.alignItems = "flex-end";
    instaButtonWrapper.style.gap = "10px"; // Space between buttons

    // Instagram Button
    const instaButton = document.createElement("button");
    instaButton.setAttribute("onclick", "Instaclicked()");
    instaButton.style.cssText = `
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      font-family: var(--font-family);
      font-size: 14px;
      background-color: var(--btn-background-color);
      color: var(--btn-text-color);
      border: 1px solid #4b5563;
      border-radius: 6px;
      cursor: pointer;
      width:100%;
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

    // Facebook Button
    if (LoyaltySettings?.earn_rule_json?.facebook_url) {
      const fbButton = document.createElement("button");
      fbButton.setAttribute("onclick", "Facebookclicked()");
      fbButton.style.cssText = instaButton.style.cssText;
      fbButton.style.width = "100%";
      fbButton.innerHTML = `
       <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
</svg>

        Follow us on Facebook
      `;
      instaButtonWrapper.appendChild(fbButton);
    }

    profileContainer.appendChild(instaButtonWrapper);
  }

  const personalInformationCard = document.createElement("div");
  personalInformationCard.innerHTML = `
  <div style="border: 1px solid var(--card-border-color); padding: 16px; margin-bottom: 32px; color: #000; background: var(--card-background-color); border-radius: var(--card-border-radius); ">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <div style="font-size: 24px; font-family: var(--secondaryFontFamily); font-weight: 300; margin-bottom: 24px; color: var(--card-heading-color);">Personal Information</div>
    <button id="xircls-profile-edit-button" style="color: #000; border: none; padding: 8px; background-color: transparent; text-align: center; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; cursor: pointer;" title="Edit Profile">
       <svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" id="xircls-profile-edit-button" viewBox="0 0 24 24" fill="none" stroke="currentColor" width="18" height="18">
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
            <path d="m15 5 4 4"></path>
          </svg>
    </button>
  </div>
  <div  class="xircls-personal-grid xircls-personal-information-card" style="display: grid; grid-template-columns:  1fr 1fr; gap: 16px;">
    <div style="display: flex; flex-direction: column; gap: 16px;">
      
      <label>
        <span style="font-size: 14px; font-family: var(--secondaryFontFamily); margin-bottom: 4px; display: block; color: var(--card-label-color);">First Name</span>
        <div style="position: relative;">
          <input id="customer-firstName" type="text" name="customer-firstName" value="${cardData[0].data.First || ``
    }" disabled 
                 style="font-size: 16px; color: var(--card-text-color); width: 100%; border: 1px solid #e5e7eb; padding: 12px 12px 12px 40px; font-family: var(--secondaryFontFamily);">
          <svg style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #9ca3af;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </label>
      
      <label>
        <span style="font-size: 14px; font-family: var(--secondaryFontFamily); margin-bottom: 4px; display: block; color: var(--card-label-color);">Email Address</span>
        <div style="position: relative;">
          <input  id="customer-email"  type="email" name="customer-email" value="${cardData[0].data.Email
    }" disabled 
                 style="font-size: 16px; color: var(--card-text-color); width: 100%; border: 1px solid #e5e7eb; padding: 12px 12px 12px 40px; font-family: var(--secondaryFontFamily);">
          <svg style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #9ca3af;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </div>
      </label>
      
      ${myProfile.includes("Date_of_Birth")
      ? `<label>
        <span style="font-size: 14px; font-family: var(--secondaryFontFamily); margin-bottom: 4px; display: block; color: var(--card-label-color);">Date of Birth</span>
        <div style="position: relative;">
          <input  id="customer-birthdate"  type="date" name="customer-birthdate" value="${cardData[0].data.Birthdate}" disabled 
                 style="font-size: 16px;color: var(--card-text-color); width: 100%; border: 1px solid #e5e7eb; padding: 12px 12px 12px 40px; font-family: var(--secondaryFontFamily);">
          <svg style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #9ca3af;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
        </div>
      </label>`
      : ``
    }
      
    </div>

    <div style="display: flex; flex-direction: column; gap: 16px;">

      <label>
        <span style="font-size: 14px; font-family: var(--secondaryFontFamily); margin-bottom: 4px; display: block; color: var(--card-label-color);">Last Name</span>
        <div style="position: relative;">
          <input id="customer-lastName"  type="text" name="customer-lastName" value="${cardData[0].data.Last || ``
    }" disabled 
                 style="font-size: 16px; width: 100%;color: var(--card-text-color); border: 1px solid #e5e7eb; padding: 12px 12px 12px 40px; font-family: var(--secondaryFontFamily);">
          <svg style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #9ca3af;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </label>

      <label>
        <span style="font-size: 14px; font-family: var(--secondaryFontFamily); margin-bottom: 4px; display: block; color: var(--card-label-color);">Phone Number</span>
        <div style="display: flex; align-items: center;">
          
          <div style="position: relative; width: 100px;">
            <select id="country-code-select" disabled value="${cardData[0].data.PhoneCode
    }" style="font-size: 16px;color: var(--card-text-color); width: 100%; border: 1px solid #e5e7eb; padding: 12px 12px 12px 40px; font-family: var(--secondaryFontFamily);">
            </select>
            <svg style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #9ca3af;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>

          <input  id="customer-mobile"  type="tel" name="customer-mobile" value="${cardData[0].data.Mobile || ``
    }"  disabled 
                 style="font-size: 16px; flex: 1;color: var(--card-text-color); border: 1px solid #e5e7eb; border-left: none; padding: 12px; font-family: var(--secondaryFontFamily);">
        </div>
      </label>

     ${myProfile.includes("Gender")
      ? ` <label>
  <span style="font-size: 14px; font-family: var(--secondaryFontFamily); margin-bottom: 4px; display: block; color: var(--card-label-color);">Gender</span>
  <div style="position: relative;">
    <select id="customer-gender" name="customer-gender" value="${cardData[0].data.Gender}" disabled
            style="font-size: 16px; width: 100%;color: var(--card-text-color); border: 1px solid #e5e7eb; padding: 12px 12px 12px 40px; font-family: var(--secondaryFontFamily); appearance: none; background-color: white;">
      <option value="" disabled selected>Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
    <svg style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #9ca3af;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  </div>
</label>`
      : ``
    }

    </div>
  </div>

  <div style="margin-top: 24px; display: flex; justify-content: flex-end;">

  <button id="xircls-profile-cancel-button" style="border: 1px solid #4b5563; display: none; padding: 8px 20px !important; background-color: white; color: #4b5563; font-size: 14px !important; text-transform: uppercase; letter-spacing: 0.1em; transition: background-color 0.3s ease; text-wrap: nowrap; cursor: pointer; margin-right: 10px; font-family: var(--secondaryFontFamily);">
      Cancel
    </button>

   <button id="xircls-profile-save-button" style="border: none; display: none; padding: 8px 20px !important; background-color: var(--btn-background-color); color: var(--btn-text-color); font-size: 14px !important; text-transform: uppercase; letter-spacing: 0.1em; transition: background-color 0.3s ease; text-wrap: nowrap; cursor: pointer; font-family: var(--secondaryFontFamily);">
      Save
    </button>  
  </div>
</div>
  `;
  profileContainer.appendChild(personalInformationCard);

  const genderSelect = document.getElementById("customer-gender");
  if (genderSelect) {
    genderSelect.value = cardData[0].data.Gender;
  }

  const countryCodeSelect = document.getElementById("country-code-select");
  if (countryCodeSelect) {
    const option = document.createElement("option");
    option.value = cardData[0].data.PhoneCode;
    option.textContent = cardData[0].data.PhoneCode;
    option.selected = true;
    countryCodeSelect.appendChild(option);
  }

  // Add toggle functionality
  document
    .getElementById("xircls-profile-edit-button")
    .addEventListener("click", () => {
      document.getElementById("customer-firstName").removeAttribute("disabled");
      if (myProfile.includes("Date_of_Birth")) {
        document
          .getElementById("customer-birthdate")
          .removeAttribute("disabled");
      }
      document.getElementById("customer-lastName").removeAttribute("disabled");
      document.getElementById("customer-mobile").removeAttribute("disabled");
      document
        .getElementById("country-code-select")
        .removeAttribute("disabled");
      if (myProfile.includes("Gender")) {
        document.getElementById("customer-gender").removeAttribute("disabled");
      }
      document.getElementById("xircls-profile-save-button").style.display =
        "inline-block";
      document.getElementById("xircls-profile-cancel-button").style.display = "inline-block";
      document.getElementById("xircls-profile-edit-button").style.display =
        "none";
    });

  document
    .getElementById("xircls-profile-save-button")
    .addEventListener("click", async function () {
      const originalBirthdate = cardData[0].data.Birthdate || "";
      const newBirthdateInput = document.querySelector('input[name="customer-birthdate"]');
      const newBirthdateValue = (myProfile.includes("Date_of_Birth") && newBirthdateInput) ? newBirthdateInput.value.trim() : "";

      const userData = {
        customerId: customerId,
        customerData: {
          first_name: document
            .querySelector('input[name="customer-firstName"]')
            .value.trim(),
          last_name: document
            .querySelector('input[name="customer-lastName"]')
            .value.trim(),
          phone: document
            .querySelector('input[name="customer-mobile"]')
            .value.trim(),
          metafields: [
            {
              namespace: "custom",
              key: "date_of_birth",
              value: newBirthdateValue,
              type: "date",
            },
            {
              namespace: "custom",
              key: "gender",
              value: myProfile.includes("Gender")
                ? document.getElementById("customer-gender").value
                : "", // default to "male" if not provided
              type: "single_line_text_field",
            },
            {
              namespace: "custom",
              key: "country_code",
              value: document.getElementById("country-code-select").value || "", // default to "male" if not provided
              type: "single_line_text_field",
            },
            {
              namespace: "custom",
              key: "mobile_no",
              value:
                document
                  .querySelector('input[name="customer-mobile"]')
                  .value.trim() || "", // default to "male" if not provided
              type: "single_line_text_field",
            },
            {
              namespace: "custom",
              key: "email",
              value:
                document
                  .querySelector('input[name="customer-email"]')
                  .value.trim() || "", // default to "male" if not provided
              type: "single_line_text_field",
            },
          ],
        },
        shop: Shopify.shop,
        app: "oh_my_customer",
      };

      if (myProfile.includes("Date_of_Birth") && newBirthdateValue && newBirthdateValue !== originalBirthdate) {
        console.log("Birthdate changed. Scheduling birthday reward.");

        const formData = new FormData();
        formData.append('email', document.querySelector('input[name="customer-email"]').value.trim());
        formData.append('shop', Shopify.shop);
        formData.append('birthday', newBirthdateValue);

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
        }
      }

      document
        .getElementById("customer-firstName")
        .setAttribute("disabled", true);
      if (myProfile.includes("Date_of_Birth")) {
        document
          .getElementById("customer-birthdate")
          .setAttribute("disabled", true);
      }
      document
        .getElementById("customer-lastName")
        .setAttribute("disabled", true);
      document.getElementById("customer-mobile").setAttribute("disabled", true);
      if (myProfile.includes("Gender")) {
        document
          .getElementById("customer-gender")
          .setAttribute("disabled", true);
      }
      document
        .getElementById("country-code-select")
        .setAttribute("disabled", true);
      document.getElementById("xircls-profile-save-button").style.display =
        "none";
      document.getElementById("xircls-profile-cancel-button").style.display = "none";
      document.getElementById("xircls-profile-edit-button").style.display =
        "inline-block";
      console.log(userData);
      updateCustomerDetails(userData);
    });
  document.getElementById("xircls-profile-cancel-button").addEventListener("click", function () {
    // Revert the input fields to their original values
    document.querySelector('input[name="customer-firstName"]').value = cardData[0].data.First || "";
    document.querySelector('input[name="customer-lastName"]').value = cardData[0].data.Last || "";
    document.querySelector('input[name="customer-mobile"]').value = cardData[0].data.Mobile || "";
    if (myProfile.includes("Date_of_Birth")) {
      document.querySelector('input[name="customer-birthdate"]').value = cardData[0].data.Birthdate || "";
    }
    if (myProfile.includes("Gender")) {
      document.getElementById("customer-gender").value = cardData[0].data.Gender?.toLowerCase() || "";
    }

    // Disable the input fields
    document.getElementById("customer-firstName").setAttribute("disabled", true);
    if (myProfile.includes("Date_of_Birth")) {
      document.getElementById("customer-birthdate").setAttribute("disabled", true);
    }
    document.getElementById("customer-lastName").setAttribute("disabled", true);
    document.getElementById("customer-mobile").setAttribute("disabled", true);
    if (myProfile.includes("Gender")) {
      document.getElementById("customer-gender").setAttribute("disabled", true);
    }
    document.getElementById("country-code-select").setAttribute("disabled", true);

    // Hide the Save and Cancel buttons
    document.getElementById("xircls-profile-save-button").style.display = "none";
    document.getElementById("xircls-profile-cancel-button").style.display = "none";

    // Show the Edit button
    document.getElementById("xircls-profile-edit-button").style.display = "inline-block";
  });

  const selectElement = document.getElementById("country-code-select");
  phonecode_list.forEach((code) => {
    const option = document.createElement("option");
    option.value = code.dial_code;
    option.textContent = code.dial_code;
    selectElement.appendChild(option);
  });

  const addressCardHeader = document.createElement("div");
  addressCardHeader.innerHTML = `
  <div style="border: 1px solid var(--card-border-color); padding: 16px; margin-bottom: 32px; color: #000; background: var(--card-background-color); border-radius: var(--card-border-radius);">
 <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; gap: 1px;">
  <div class="xircls-shipping-add-title" style="font-size: 24px; font-family: var(--font-family); font-weight: 300; color: var(--card-heading-color);">Shipping Addresses</div>
  ${myProfile.includes("Add_Multiple_Addresses")
      ? `<button type="button" id="xircls-add-address-btn" style="display: flex; align-items: center; font-size: 15px; font-family: var(--secondaryFontFamily); letter-spacing: 0.05em; background-color: var(--btn-background-color); border: 1px solid black; padding: 4px 6px; cursor: pointer; transition: background-color 0.3s; color: var(--btn-text-color);">
   
    ADD ADDRESS
  </button>`
      : ``
    }
</div>
<div id="xircls-address-container">
 </div>
</div>
  `;
  profileContainer.appendChild(addressCardHeader);

  // Select the button and the container for address cards
  const addAddressBtn = document.getElementById("xircls-add-address-btn");
  const addressContainer = document.getElementById("xircls-address-container");
  let newAddressCount = 0;
  // Event listener for the 'ADD ADDRESS' button
  if (addAddressBtn) {
    addAddressBtn.addEventListener("click", function () {
      newAddressCount = newAddressCount + 1;
      // Create a new address card
      const newAddressCard = document.createElement("div");
      newAddressCard.id = `xircls-address-card-${newAddressCount}`;
      newAddressCard.innerHTML = returnAddressCard(
        {
          first_name: "",
          last_name: "",
          address1: "",
          address2: "",
          city: "",
          province: "",
          country: "",
          zip: "",
          phone: null,
          name: "",
          province_code: "",
          country_code: "",
          country_name: "",
          default: false,
        },
        true,
        newAddressCount
      );

      // Append the new address card to the container
      addressContainer.appendChild(newAddressCard);

      [
        `customer-saveaddressas-${newAddressCount}`,
        `customer-recipient-name-${newAddressCount}`,
        `address-line-one-${newAddressCount}`,
        `address-line-two-${newAddressCount}`,
        `customer-zip-${newAddressCount}`,
      ].forEach((id) => {
        document.getElementById(id).removeAttribute("disabled");
      });
      [
        `customer-relationship-select-${newAddressCount}`,
        `country-select-${newAddressCount}`,
        `state-select-${newAddressCount}`,
        `city-select-${newAddressCount}`,
      ].forEach((id) => {
        document.getElementById(id).removeAttribute("disabled");
      });

      fetchCountries().then((countries) => {
        const countryData = countries.data;
        const countrySelect = document.getElementById(
          `country-select-${newAddressCount}`
        );

        countryData.countries.forEach((country) => {
          const option = document.createElement("option");
          option.value = country.name;
          option.textContent = country.name;
          countrySelect.appendChild(option);
        });
      });

      document
        .getElementById(`country-select-${newAddressCount}`)
        .addEventListener("change", function () {
          const selectedCountry = this.value;
          const stateSelect = document.getElementById(
            `state-select-${newAddressCount}`
          );
          console.log("country selected", selectedCountry);
          // Clear previous state options
          stateSelect.innerHTML = '<option value="">Select State...</option>';

          if (selectedCountry) {
            fetchStates(selectedCountry).then((states) => {
              if (states?.data?.states) {
                states.data.states.forEach((state) => {
                  const option = document.createElement("option");
                  option.value = state.name;
                  option.textContent = state.name;
                  stateSelect.appendChild(option);
                });
              }
            });
          }
        });

      document
        .getElementById(`state-select-${newAddressCount}`)
        .addEventListener("change", function () {
          const selectedState = this.value;
          const citySelect = document.getElementById(
            `city-select-${newAddressCount}`
          );

          // Clear previous city options
          citySelect.innerHTML = '<option value="">Select City...</option>';

          if (selectedState) {
            fetchCities(selectedState).then((cities) => {
              if (cities?.data?.cities) {
                cities.data.cities.forEach((city) => {
                  const option = document.createElement("option");
                  option.value = city.name;
                  option.textContent = city.name;
                  citySelect.appendChild(option);
                });
              }
            });
          }
        });

      document
        .getElementById(`xircls-address-save-button-${newAddressCount}`)
        .addEventListener("click", function () {
          const addressMetaFieldData = {
            recipientName: document
              .getElementById(`customer-recipient-name-${newAddressCount}`)
              .value.trim(),
            saveAddressAs: document
              .getElementById(`customer-saveaddressas-${newAddressCount}`)
              .value.trim(),
            relationship: document
              .getElementById(`customer-relationship-select-${newAddressCount}`)
              .value.trim(),
          };
          const addressData = {
            customerId: customerId,
            addressData: {
              address1: document
                .getElementById(`address-line-one-${newAddressCount}`)
                .value.trim(),
              address2: document
                .getElementById(`address-line-two-${newAddressCount}`)
                .value.trim(),
              city: document.getElementById(`city-select-${newAddressCount}`)
                .value,
              province: document.getElementById(
                `state-select-${newAddressCount}`
              ).value,
              zip: document
                .getElementById(`customer-zip-${newAddressCount}`)
                .value.trim(),
              country: document.getElementById(
                `country-select-${newAddressCount}`
              ).value,
            },
            shop: Shopify.shop,
            app: "oh_my_customer",
          };
          [
            `customer-saveaddressas-${newAddressCount}`,
            `customer-recipient-name-${newAddressCount}`,
            `address-line-one-${newAddressCount}`,
            `address-line-two-${newAddressCount}`,
            `customer-zip-${newAddressCount}`,
          ].forEach((id) => {
            document.getElementById(id).setAttribute("disabled", true);
          });
          [
            `customer-relationship-select-${newAddressCount}`,
            `country-select-${newAddressCount}`,
            `state-select-${newAddressCount}`,
            `city-select-${newAddressCount}`,
          ].forEach((id) => {
            document.getElementById(id).setAttribute("disabled", true);
          });

          document.getElementById(
            `xircls-address-save-button-${newAddressCount}`
          ).style.display = "none";

          // console.log(addressMetaFieldData, addressData, "updateNewAddressMetaFields will execute")
          updateNewAddressMetaFields(addressMetaFieldData, addressData);
        });
    });
  }

  // existing address rendering logic
  customerAddresses.forEach((address) => {
    const addressId = address.id;
    let recipientName;
    let relationship;
    let saveAddressAs;
    if (address.default) {
      recipientName = `${address.first_name} ${address.last_name}`;
      relationship = "Self";
      saveAddressAs = "Home";
    } else {
      if (
        addressMetafields &&
        addressMetafields.addressMeta &&
        Array.isArray(addressMetafields.addressMeta)
      ) {
        const matchingMeta = addressMetafields.addressMeta.find(
          (meta) => meta.address_id === address.id
        );

        if (matchingMeta) {
          recipientName = matchingMeta.contact_name;
          relationship = matchingMeta.relation;
          saveAddressAs = matchingMeta.addressas;
        }
      }
    }

    const newAddressCard = document.createElement("div");
    newAddressCard.id = `xircls-address-card-${addressId}`;
    newAddressCard.innerHTML = returnAddressCard(
      address,
      false,
      addressId,
      recipientName,
      relationship,
      saveAddressAs
    );

    addressContainer.appendChild(newAddressCard);

    const relationSelect = document.getElementById(
      `customer-relationship-select-${addressId}`
    );
    if (relationSelect) {
      const option = document.createElement("option");
      option.value = relationship;
      option.textContent = relationship;
      option.selected = true;
      relationSelect.appendChild(option);
    }

    fetchCountries().then((countries) => {
      const countryData = countries.data;
      const countrySelect = document.getElementById(
        `country-select-${addressId}`
      );

      countryData.countries.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.name;
        option.textContent = country.name;

        if (country.name === address.country) {
          option.selected = true;
        }

        countrySelect.appendChild(option);
      });

      // ✅ Trigger state and city fetch after country is set
      if (address.country) {
        const stateSelect = document.getElementById(
          `state-select-${addressId}`
        );
        fetchStates(address.country).then((states) => {
          stateSelect.innerHTML = '<option value="">Select State...</option>';

          if (states?.data?.states) {
            states.data.states.forEach((state) => {
              const option = document.createElement("option");
              option.value = state.name;
              option.textContent = state.name;
              if (state.name === address.province) {
                option.selected = true;
              }
              stateSelect.appendChild(option);
            });

            // ✅ Now populate cities
            const citySelect = document.getElementById(
              `city-select-${addressId}`
            );
            fetchCities(address.province).then((cities) => {
              citySelect.innerHTML = '<option value="">Select City...</option>';
              if (cities?.data?.cities) {
                cities.data.cities.forEach((city) => {
                  const option = document.createElement("option");
                  option.value = city.name;
                  option.textContent = city.name;
                  if (city.name === address.city) {
                    option.selected = true;
                  }
                  citySelect.appendChild(option);
                });
              }
            });
          }
        });
      }
    });

    // Handle manual change of country
    document
      .getElementById(`country-select-${addressId}`)
      .addEventListener("change", function () {
        const selectedCountry = this.value;
        const stateSelect = document.getElementById(
          `state-select-${addressId}`
        );
        console.log("country selected", selectedCountry);
        // Clear previous state options
        stateSelect.innerHTML = '<option value="">Select State...</option>';

        if (selectedCountry) {
          fetchStates(selectedCountry).then((states) => {
            if (states?.data?.states) {
              states.data.states.forEach((state) => {
                const option = document.createElement("option");
                option.value = state.name;
                option.textContent = state.name;
                stateSelect.appendChild(option);
              });
            }
          });
        }
      });

    document
      .getElementById(`state-select-${addressId}`)
      .addEventListener("change", function () {
        const selectedState = this.value;
        const citySelect = document.getElementById(`city-select-${addressId}`);

        // Clear previous city options
        citySelect.innerHTML = '<option value="">Select City...</option>';

        if (selectedState) {
          fetchCities(selectedState).then((cities) => {
            if (cities?.data?.cities) {
              cities.data.cities.forEach((city) => {
                const option = document.createElement("option");
                option.value = city.name;
                option.textContent = city.name;
                citySelect.appendChild(option);
              });
            }
          });
        }
      });

    document
      .getElementById(`xircls-address-edit-button-${addressId}`)
      .addEventListener("click", () => {
        if (!address.default) {
          document
            .getElementById(`customer-recipient-name-${addressId}`)
            .removeAttribute("disabled");
          document
            .getElementById(`customer-relationship-select-${addressId}`)
            .removeAttribute("disabled");
          document
            .getElementById(`customer-saveaddressas-${addressId}`)
            .removeAttribute("disabled");
        }
        [
          `address-line-one-${addressId}`,
          `address-line-two-${addressId}`,
          `customer-zip-${addressId}`,
        ].forEach((id) => {
          document.getElementById(id).removeAttribute("disabled");
        });
        [
          `country-select-${addressId}`,
          `state-select-${addressId}`,
          `city-select-${addressId}`,
        ].forEach((id) => {
          document.getElementById(id).removeAttribute("disabled");
        });

        document.getElementById(
          `xircls-address-save-button-${addressId}`
        ).style.display = "inline-block";
        document.getElementById(
          `xircls-address-cancel-button-${addressId}`
        ).style.display = "inline-block";
        document.getElementById(
          `xircls-address-edit-button-${addressId}`
        ).style.display = "none";
      });

    document
      .getElementById(`xircls-address-save-button-${addressId}`)
      .addEventListener("click", function () {
        const addressMetaFieldData = {
          recipientName: document
            .getElementById(`customer-recipient-name-${addressId}`)
            .value.trim(),
          saveAddressAs: document
            .getElementById(`customer-saveaddressas-${addressId}`)
            .value.trim(),
          relationship: document
            .getElementById(`customer-relationship-select-${addressId}`)
            .value.trim(),
        };
        const addressData = {
          customerId: customerId,
          addressId: addressId,
          addressData: {
            address1: document
              .getElementById(`address-line-one-${addressId}`)
              .value.trim(),
            address2: document
              .getElementById(`address-line-two-${addressId}`)
              .value.trim(),
            city: document.getElementById(`city-select-${addressId}`).value,
            province: document.getElementById(`state-select-${addressId}`)
              .value,
            zip: document
              .getElementById(`customer-zip-${addressId}`)
              .value.trim(),
            country: document.getElementById(`country-select-${addressId}`)
              .value,
          },
          shop: Shopify.shop,
          app: "oh_my_customer",
        };
        [
          `customer-saveaddressas-${addressId}`,
          `customer-recipient-name-${addressId}`,
          `address-line-one-${addressId}`,
          `address-line-two-${addressId}`,
          `customer-zip-${addressId}`,
        ].forEach((id) => {
          document.getElementById(id).setAttribute("disabled", true);
        });
        [
          `customer-relationship-select-${addressId}`,
          `country-select-${addressId}`,
          `state-select-${addressId}`,
          `city-select-${addressId}`,
        ].forEach((id) => {
          document.getElementById(id).setAttribute("disabled", true);
        });
        document.getElementById(
          `xircls-address-save-button-${addressId}`
        ).style.display = "none";
        document.getElementById(
          `xircls-address-cancel-button-${addressId}`
        ).style.display = "none";
        document.getElementById(
          `xircls-address-edit-button-${addressId}`
        ).style.display = "inline-block";
        console.log(addressData, addressMetaFieldData);
        updateAddressMetaFields(addressMetaFieldData, addressId);
        updateCustomerAddress(addressData);
      });
    document
      .getElementById(`xircls-address-cancel-button-${addressId}`)
      .addEventListener("click", function () {
        const addressMetaFieldData = {
          recipientName: document
            .getElementById(`customer-recipient-name-${addressId}`)
            .value.trim(),
          saveAddressAs: document
            .getElementById(`customer-saveaddressas-${addressId}`)
            .value.trim(),
          relationship: document
            .getElementById(`customer-relationship-select-${addressId}`)
            .value.trim(),
        };

        [
          `customer-saveaddressas-${addressId}`,
          `customer-recipient-name-${addressId}`,
          `address-line-one-${addressId}`,
          `address-line-two-${addressId}`,
          `customer-zip-${addressId}`,
        ].forEach((id) => {
          document.getElementById(id).setAttribute("disabled", true);
        });
        [
          `customer-relationship-select-${addressId}`,
          `country-select-${addressId}`,
          `state-select-${addressId}`,
          `city-select-${addressId}`,
        ].forEach((id) => {
          document.getElementById(id).setAttribute("disabled", true);
        });
        document.getElementById(
          `xircls-address-save-button-${addressId}`
        ).style.display = "none";
        document.getElementById(
          `xircls-address-cancel-button-${addressId}`
        ).style.display = "none";
        document.getElementById(
          `xircls-address-edit-button-${addressId}`
        ).style.display = "inline-block";
      });
    addAddressBtn.addEventListener("click", function () {
      //added section
      document.getElementById(
        `xircls-address-save-button-${newAddressCount}`
      ).style.display = "inline-block";

      //added section
      document.getElementById(
        `xircls-address-cancel-button-${newAddressCount}`
      ).style.display = "inline-block";

    });
  });
}

function Instaclicked() {
  console.log("InstaClickedurl", LoyaltySettings?.earn_rule_json?.instagram_url);

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
    keepalive: true  // Ensures it attempts to send even during page unload
  }).then(response => {
    console.log('API response sent successfully.');
  }).catch(error => {
    console.error('Failed to send API request', error);
  });

  // Redirect immediately
  window.location.href = LoyaltySettings?.earn_rule_json?.instagram_url;
}

function Facebookclicked() {
  console.log("facebookredirect", LoyaltySettings?.earn_rule_json?.facebook_url);

  // Shopify Liquid variable
  const shopDomain = Shopify.shop;
  const apiUrl = 'https://loyalty.axentraos.co.in/api/v1/customer/credit_social_points/';

  const payload = {
    email: profile_email,
    shop: shopDomain,
    followed: true,
    followed_type: "facebook"
  };

  // Fire and forget
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
    keepalive: true  // Ensures it attempts to send even during page unload
  }).then(response => {
    console.log('API response sent successfully.');
  }).catch(error => {
    console.error('Failed to send API request', error);
  });

  // Redirect immediately
  window.location.href = LoyaltySettings?.earn_rule_json?.facebook_url;
}


document.addEventListener("DOMContentLoaded", async function () {
  let renderedContentDivs = {};
  const menuOptions = [
    // { label: "Dashboard", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12l9-9 9 9"/><path d="M4 10v10h6v-6h4v6h6V10"/></svg>', heading: "Dashboard", subHeading: "Your account overview and recent activity" },
    {
      label: "My Profile",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>',
      heading: "My Profile",
      subHeading: "Update your personal information",
      id: "myProfile",
    },
    {
      label: "My Orders",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg"  width="20" height="20" fill="none"  viewBox="0 0 24 24"  stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12V6a2 2 0 00-2-2h-2l-2-2h-4l-2 2H6a2 2 0 00-2 2v6m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4" /></svg>',
      heading: "My Orders",
      subHeading: "Track and manage your recent purchases",
      id: "myOrders",
    },
    {
      label: "My Wishlist",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 21s-6-4.35-9-9c-3-4.65 1-9 6-6 1.5 1 3 3 3 3s1.5-2 3-3c5-3 9 1.35 6 6-3 4.65-9 9-9 9z"/></svg>',
      heading: "My Wishlist",
      subHeading: "View and manage your saved items",
      id: "myWishlist",
    },
    {
      label: "Loyalty Points",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" /></svg>',
      heading: "Loyalty Points",
      subHeading: "Track and redeem your loyalty rewards",
      id: "loyalty",
    },
    {
      label: "Recently Viewed",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
      heading: "Recently Viewed",
      subHeading: "Products you've recently browsed",
      id: "recentlyViewed",
    },
    {
      label: "Change Password",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg"  width="20" height="20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>',
      heading: "Change Password",
      subHeading: "Update your account security",
      id: "changePassword",
    },
    // { label: "AI Features", icon: '<i class="fa-solid fa-clock-rotate-left"></i>', heading: "AI Features", subHeading: "Products you've recently browsed" },
    // { label: "My Reviews", icon: '<i class="fas fa-lock"></i>', heading: "My Reviews", subHeading: "Update your account security" },
    {
      label: "Logout",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
      heading: "Logout",
      subHeading: "Securely sign out from your account",
      id: "logout",
    },
  ];
  // renderedContentDivs[0] = document.getElementById('dashboardContainer');
  renderedContentDivs[0] = document.getElementById("profileContainer");
  renderedContentDivs[1] = document.getElementById("ordersContainer");
  renderedContentDivs[2] = document.getElementById("wishListsContainer");
  renderedContentDivs[3] = document.getElementById("loyaltyPointsContainer");
  renderedContentDivs[4] = document.getElementById("recentlyContainer");
  renderedContentDivs[5] = document.getElementById("securityContainer");
  renderedContentDivs[6] = document.getElementById("logoutContainer");
  // const menuElement = document.getElementById("xircls-menu");
  const point_card = document.getElementById("points-card");
  const tabHeading = document.getElementById("tabHeading");
  const tabContent = document.getElementById("tabContent");
  // const ulElement = document.createElement("ul");
  // menuElement.innerHTML = "";

  // ulElement.className = "menu-list";
  // menuOptions.forEach((item, index) => {
  //   const liElement = document.createElement("li");
  //   liElement.className = "xircls-menu-item";
  //   liElement.innerHTML = `
  //                     <span class="menu-icon">${item.icon}</span>
  //                     <span class="menu-labell">${item.label}</span>
  //                     `;
  //   liElement.onclick = () => {
  //     console.log(`You clicked on: ${item.heading}`);
  //     renderContent(index);
  //     const allItems = document.querySelectorAll(".xircls-menu-item");
  //     if (item.label === "Wishlist" || item.heading === "Wishlist") {
  //       fetchWishlistOnReload();
  //       renderWishlist();
  //       fetchWishlist();
  //     }
  //     allItems.forEach((item) => item.classList.remove("active"));
  //     liElement.classList.add("active"); // Add the active class to the clicked item
  //   };

  //   ulElement.appendChild(liElement);
  // });
  // menuElement.appendChild(ulElement);

  // Fetch Loyalty Points and then construct the membership data
  // let LoyaltyPointsFuntionCall = await LoyaltyPoints();
  // let LoyaltyPointsHistoryFuntionCall = await fetchLoyaltyPointsHistory();
  // let AllLoyaltyPointsHistoryFuntionCall = await fetchAllLoyaltyPointsHistory();
});

function renderContent(index) {
  const menuOptions = [
    // { label: "Dashboard", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12l9-9 9 9"/><path d="M4 10v10h6v-6h4v6h6V10"/></svg>', heading: "Dashboard", subHeading: "Your account overview and recent activity" },
    {
      label: "My Profile",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>',
      heading: "My Profile",
      subHeading: "Update your personal information",
      id: "myProfile",
    },
    {
      label: "My Orders",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg"  width="20" height="20" fill="none"  viewBox="0 0 24 24"  stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12V6a2 2 0 00-2-2h-2l-2-2h-4l-2 2H6a2 2 0 00-2 2v6m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4" /></svg>',
      heading: "My Orders",
      subHeading: "Track and manage your recent purchases",
      id: "myOrders",
    },
    {
      label: "My Wishlist",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 21s-6-4.35-9-9c-3-4.65 1-9 6-6 1.5 1 3 3 3 3s1.5-2 3-3c5-3 9 1.35 6 6-3 4.65-9 9-9 9z"/></svg>',
      heading: "My Wishlist",
      subHeading: "View and manage your saved items",
      id: "myWishlist",
    },
    {
      label: "Loyalty Points",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" /></svg>',
      heading: "Loyalty Points",
      subHeading: "Track and redeem your loyalty rewards",
      id: "loyalty",
    },
    {
      label: "Recently Viewed",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
      heading: "Recently Viewed",
      subHeading: "Products you've recently browsed",
      id: "recentlyViewed",
    },
    {
      label: "Change Password",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg"  width="20" height="20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>',
      heading: "Change Password",
      subHeading: "Update your account security",
      id: "changePassword",
    },
    // { label: "AI Features", icon: '<i class="fa-solid fa-clock-rotate-left"></i>', heading: "AI Features", subHeading: "Products you've recently browsed" },
    // { label: "My Reviews", icon: '<i class="fas fa-lock"></i>', heading: "My Reviews", subHeading: "Update your account security" },
    {
      label: "Logout",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="xircls_svg" width="20" height="20" stroke-width="2" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
      heading: "Logout",
      subHeading: "Securely sign out from your account",
      id: "logout",
    },
  ];
  let renderedContentDivs = {};
  renderedContentDivs[0] = document.getElementById("profileContainer");
  renderedContentDivs[1] = document.getElementById("ordersContainer");
  renderedContentDivs[2] = document.getElementById("wishListsContainer");
  renderedContentDivs[3] = document.getElementById("loyaltyPointsContainer");
  renderedContentDivs[4] = document.getElementById("recentlyContainer");
  renderedContentDivs[5] = document.getElementById("securityContainer");
  renderedContentDivs[6] = document.getElementById("logoutContainer");
  console.log("content rendering....", index);
  const selectedMenuOption = menuOptions[index];
  if (selectedMenuOption) {
    tabHeading.innerHTML = `
          <span class="tabHeading-heading">${selectedMenuOption.heading}</span>
          </br> <small class="tabSubheading">${selectedMenuOption.subHeading}</small> 
      `;
    const tabLine = document.getElementById("tabLine");
    tabLine.style.display = "none";
  }
  // if (index === 0) {
  //     renderDashboard()
  // }
  // if (index === 4) {
  //   renderRecentlyViewed();
  // }
  if (index === 2) {
    // renderWishlist()
    fetchWishlistOnReload();
  }

  if (!tabContent) {
    console.error("tabContent not found!");
    return;
  }
  let contentDiv;
  console.log("Determining which content to render...");
  if (index !== 9) {
    contentDiv = renderedContentDivs[index];
  }
  if (!contentDiv) {
    console.error("Content container for index " + index + " is missing!");
    return;
  }
  Object.values(renderedContentDivs).forEach((div) => {
    if (div) div.style.display = "none";
  });
  contentDiv.style.display = "block";
  tabContent.appendChild(contentDiv);
  const allItems = document.querySelectorAll(".xircls-menu-item");
  allItems.forEach((item) => item.classList.remove("active"));
  const activeItem = document.querySelector(
    `.xircls-menu-item:nth-child(${index + 1})`
  );
  console.log(activeItem, index + 1, "menu item activated!");
  if (activeItem) {
    activeItem.classList.add("active");
  }
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
// let selectedImage = null;

function createElement(tag, className, textContent = "") {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (textContent) el.textContent = textContent;
  return el;
}


// Return Button ka open modal 
// function openModal(encodedOrderString, encodedReturnSettingsString,encodedReturnInfoString) {
//   console.log(encodedOrderString, 'abc');
//   console.log(encodedReturnSettingsString, 'commando');
//   console.log(encodedReturnInfoString , 'return string info');

//   const order = decodeURIComponent(encodedOrderString);
//   console.log(order, 'abc112');

//   const returnSetting = decodeURIComponent(encodedReturnSettingsString);
//   console.log(returnSetting, 'Hurray abc786');

//   const infoString = decodeURIComponent(encodedReturnInfoString);
//   console.log(infoString,'Information assembled');

//   const modalWrapper = document.createElement('div');
//   modalWrapper.id = 'axentra-return-modal';
//   modalWrapper.className = 'axentra-modal-overlay';

//   const modalContent = document.createElement('div');
//   modalContent.className = 'axentra-modal';

//   modalContent.innerHTML = `
//     <div class="modal-header">
//       <span id="return-modal-close" class="axentra-modal-close">×</span>
//       <h2 class="modal-title">Return Request</h2>
//       <p class="modal-subtitle">Request a return for your order</p>
//     </div>

//     <div class="modal-alert">
//       <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//         <circle cx="12" cy="12" r="10"></circle>
//         <path d="m9 12 2 2 4-4"></path>
//       </svg>
//       <div class="text-content">
//         <h4 class="title">Return Eligible - 30 days remaining</h4>
//         <p class="subtitle">You have until <strong>Nov 09, 2025</strong> to return this item.</p>
//       </div>
//     </div>

//   <div class="modal-order-box">
//     <h3 class="order-id-heading" id="dynamic-order-id">Order #</h3>
//     <div class="modal-order-content">
//       <div class="modal-order-img-wrapper">
//       <img 
//         src="" 
//         alt="Product Image" 
//         class="modal-order-img" 
//         id="dynamic-product-image"
//       />
//     </div>
//     <div class="modal-order-info">
//       <h4 class="product-name" id="dynamic-product-name"></h4>
//       <p class="product-detail" id="dynamic-product-price"></p>
//       <p class="product-detail" id="dynamic-order-date"></p>
//     </div>
//   </div>
// </div>


//     <div class="modal-reason-section">
//       <h3 class="reason-title">Select Return Reason</h3>

//       <label class="reason-option">
//         <input type="radio" name="return_reason" />
//         Item is defective or damaged
//         <span class="photo-required-badge">Photo Required</span>
//       </label>

//       <label class="reason-option">
//         <input type="radio" name="return_reason" />
//         Wrong size received
//       </label>

//       <label class="reason-option">
//         <input type="radio" name="return_reason" />
//         Wrong item received
//         <span class="photo-required-badge">Photo Required</span>
//       </label>

//       <label class="reason-option">
//         <input type="radio" name="return_reason" />
//         Item not as described
//       </label>

//       <label class="reason-option">
//         <input type="radio" name="return_reason" />
//         Changed my mind
//       </label>

//       <label class="reason-option">
//         <input type="radio" name="return_reason" />
//         Quality not as expected
//       </label>

//       <label class="reason-option">
//         <input type="radio" name="return_reason" />
//         Other reason
//       </label>
//     </div>
//   `;

//   // Create Image upload section (hidden initially)
//   const imageUploadSection = document.createElement('div');
//   imageUploadSection.className = 'image-upload-section';
//   imageUploadSection.style.display = 'none';
//   imageUploadSection.innerHTML = `
//     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="upload-icon">
//       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//       <polyline points="17 8 12 3 7 8"></polyline>
//       <line x1="12" y1="3" x2="12" y2="15"></line>
//     </svg>
//     <h4 class="photo-heading">Photo Required</h4>
//     <label class="upload-label">Please upload a photo showing the issue with your item</label>
//     <label class="custom-file-upload">
//       <input type="file" accept="image/*" class="photo-upload-input" />
//       Upload Photo
//     </label> 
//   `;

//   // Item condition section (visible by default)
//   const itemConditionSection = document.createElement('div');
//   itemConditionSection.className = 'item-condition-section';
//   itemConditionSection.id = 'item-condition-section';
//   itemConditionSection.style.display = 'block'; // always visible

//   itemConditionSection.innerHTML = `
//     <h3 class="section-title">Item Condition</h3>

//     <div class="checkbox-group">
//       <label class="checkbox-label">
//         <input type="checkbox" id="packaging" />
//         I have the original packaging
//       </label>
//       <p class="checkbox-description">Items must be returned in original packaging with all tags attached.</p>
//     </div>

//     <div class="checkbox-group">
//       <label class="checkbox-label">
//         <input type="checkbox" id="unused" />
//         Item is unused and in original condition
//       </label>
//       <p class="checkbox-description">Items must be unworn, unwashed, and undamaged.</p>
//     </div>
//   `;

//   // Return process section
//   const returnProcessSection = document.createElement('div');
//   returnProcessSection.className = 'return-process-box';
//   returnProcessSection.innerHTML = `
//     <div class="return-process-container">
//       <h4 class="return-process-title">
//         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-shield">
//           <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
//         </svg>
//         Return Process
//       </h4>
//       <div class="return-process-info">
//         <div class="info-item">
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-clock">
//             <circle cx="12" cy="12" r="10"></circle>
//             <polyline points="12 6 12 12 16 14"></polyline>
//           </svg>
//           <span>Processing time: 3-5 business days after we receive your item</span>
//         </div>
//         <div class="info-item">
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-truck">
//             <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
//             <path d="M15 18H9"/>
//             <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
//             <circle cx="17" cy="18" r="2"/>
//             <circle cx="7" cy="18" r="2"/>
//           </svg>
//           <span>Free return shipping label will be provided</span>
//         </div>
//         <div class="info-item">
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-rotate-ccw">
//             <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
//             <path d="M3 3v5h5"/>
//           </svg>
//           <span>Refund will be processed to your original payment method</span>
//         </div>
//       </div>
//     </div>
//   `;

//   // Modal footer with buttons
//   const modalFooter = document.createElement('div');
//   modalFooter.className = 'modal-footer';
//   modalFooter.innerHTML = `
//     <button class="btn-cancel">Cancel</button>
//     <button class="btn-submit">Submit Return Request</button>
//   `;

//   // Append all sections in order
//   modalContent.appendChild(imageUploadSection);
//   modalContent.appendChild(itemConditionSection);
//   modalContent.appendChild(returnProcessSection);
//   modalContent.appendChild(modalFooter);

//   modalWrapper.appendChild(modalContent);
//   document.body.appendChild(modalWrapper);

//   const decodedOrder = JSON.parse(decodeURIComponent(encodedOrderString));
//   const decodedReturnSetting = JSON.parse(decodeURIComponent(encodedReturnSettingsString));
//   const infostring = JSON.parse(decodeURIComponent(encodedReturnInfoString))
//   console.log(decodedOrder, '✅ Parsed decoded order');
//   console.log(decodedReturnSetting, 'Hahah Parsed decoded return setting');
//   console.log(infostring,'bravo Parsed decoded return setting ');


//   const item = decodedOrder.items[0]; // Assuming 1 item
//   console.log(item);

//   document.getElementById('dynamic-order-id').textContent = `Order ${decodedOrder.orderNumber}`;
//   document.getElementById('dynamic-product-image').src = item.image.startsWith('//') ? 'https:' + item.image : item.image;
//   document.getElementById('dynamic-product-name').textContent = item.title;
//   document.getElementById('dynamic-product-price').textContent = `Amount: ${item.price}`;
//   document.getElementById('dynamic-order-date').textContent = `Order Date: ${decodedOrder.orderDate}`;

//   // Close modal event
//   document.getElementById('return-modal-close').addEventListener('click', () => {
//     modalWrapper.remove();
//   });

//   // Cancel button closes modal
//   modalFooter.querySelector('.btn-cancel').addEventListener('click', () => {
//     modalWrapper.remove();
//   });

//   // Submit button logic
//   const submitButton = modalFooter.querySelector('.btn-submit');
//   submitButton.addEventListener('click', () => {
//     const selectedReasonInput = modalContent.querySelector('input[name="return_reason"]:checked');
//     const selectedReason = selectedReasonInput
//       ? selectedReasonInput.parentElement.textContent.trim()
//       : null;

//     const selectedConditions = [];
//     const checkboxes = modalContent.querySelectorAll('input[type="checkbox"]');
//     checkboxes.forEach(checkbox => {
//       if (checkbox.checked) {
//         const label = checkbox.parentElement.textContent.trim();
//         selectedConditions.push(label);
//       }
//     });

//     const returnData = {
//       reason: selectedReason,
//       conditions: selectedConditions
//     };

//     console.log(' Return Request Submitted:', JSON.stringify(returnData, null, 2));
//     modalWrapper.remove();
//   });

//   // Radio button change logic
//   const reasonRadios = modalContent.querySelectorAll('input[type="radio"][name="return_reason"]');

//   reasonRadios.forEach(radio => {
//     radio.addEventListener('change', () => {
//       const labelText = radio.parentElement.textContent.toLowerCase();
//       const requiresPhoto = labelText.includes('photo required');

//       if (requiresPhoto) {
//         imageUploadSection.style.display = 'block';
//       } else {
//         imageUploadSection.style.display = 'none';
//       }

//       // Always keep the same order in modalContent:
//       // 1. imageUploadSection
//       // 2. itemConditionSection
//       // 3. returnProcessSection
//       // 4. modalFooter

//       // Ensure the sections are appended in correct order
//       modalContent.insertBefore(imageUploadSection, itemConditionSection);
//       modalContent.insertBefore(itemConditionSection, returnProcessSection);
//       modalContent.insertBefore(returnProcessSection, modalFooter);
//     });
//   });
// }


//Exchange Button ka open modal

// function openexchnageModal(encodedOrderString,encodedReturnSettingsString) {
//   console.log(encodedOrderString, 'abc');
//   const order = decodeURIComponent(encodedOrderString);
//   console.log(order, 'abc222');

//   const returnString = decodeURIComponent(encodedReturnSettingsString);
//   console.log(returnString,'woahh333');

//   const modalWrapper = document.createElement('div');
//   modalWrapper.id = 'axentra-return-modal';
//   modalWrapper.className = 'axentra-modal-overlay';

//   const modalContent = document.createElement('div');
//   modalContent.className = 'axentra-modal';

//   modalContent.innerHTML = `
//     <div class="modal-header">
//       <span id="return-modal-close" class="axentra-modal-close">×</span>
//       <h2 class="modal-title">Exchange Request</h2>
//       <p class="modal-subtitle">Exchange your item for a different size, color, or product</p>
//     </div>

//     <div class="modal-alert">
//       <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//         <circle cx="12" cy="12" r="10"></circle>
//         <path d="m9 12 2 2 4-4"></path>
//       </svg>
//       <div class="text-content">
//         <h4 class="title">Exchange Eligible - 45 days remaining</h4>
//         <p class="subtitle">You have until <strong>Nov 27, 2025</strong> to exchange this item.</p>
//       </div>
//     </div>

//     <div class="modal-order-box">
//       <h3 class="order-id-heading" id='order-id'></h3>
//       <div class="modal-order-content">
//         <div class="modal-order-img-wrapper">
//           <img 
//           src="" 
//           alt="Product Image" 
//           class="modal-order-img" 
//           id="dynamic-product-image"
//       />
//         </div>
//         <div class="modal-order-info">
//           <h4 class="product-name" id='dynamic-product-name'></h4>
//           <p class="product-detail" id='dynamic-product-price'></p>
//           <p class="product-detail" id='dynamic-order-date'></p>
//         </div>
//       </div>
//     </div>

//     <div class="modal-reason-section">
//       <h3 class="reason-title">Reason for exchange</h3>

//       <label class="ex-reason-option">
//         <input type="radio" name="return_reason" />
//         Wrong size - need different size
//       </label>

//       <label class="ex-reason-option">
//         <input type="radio" name="return_reason" />
//         Wrong color - need different color
//       </label>

//       <label class="ex-reason-option">
//         <input type="radio" name="return_reason" />
//         Item is defective - need replacement
//       </label>

//       <label class="ex-reason-option">
//         <input type="radio" name="return_reason" />
//         Want different style/model
//       </label>

//       <label class="ex-reason-option">
//         <input type="radio" name="return_reason" />
//         Changed my mind
//       </label>

//       <label class="ex-reason-option">
//         <input type="radio" name="return_reason" />
//         Want to upgrade to premium version
//       </label>

//       <label class="ex-reason-option">
//         <input type="radio" name="return_reason" />
//         Other reason
//       </label>
//     </div>

//     <div class="textarea-wrapper" id="reasonTextarea">
//       <label class="textarea-label">Please specify:</label>
//       <textarea class="custom-textarea"
//       placeholder="Describe your reason for exchange..."
//       ></textarea>
//     </div>

//     <div class="ex-modal-reason-section"> 
//       <h3 class="ex-reason-title">Exchange Type</h3>

//       <label class="ex-reason-option">
//         <input type= 'radio' name='exchange_type' value='different'/>
//         Different product
//       </label class="ex-reason-option">
//     </div>

//       <div id="alternative-products" class="alternative-products hidden">
//     <h4 class="section-title">
//       <svg xmlns="http://www.w3.org/2000/svg" class="icon-package" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
//         <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
//         <path d="M12 22V12"></path>
//         <path d="m3.3 7 7.7 4.73a2 2 0 0 0 2 0L20.7 7"></path>
//         <path d="m7.5 4.27 9 5.15"></path>
//       </svg>
//       Select Alternative Product
//     </h4>

//     <div class="product-list">
//       ${generateProductCard("Cashmere Cardigan", "$799.00", "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60", true)}
//       ${generateProductCard("Wool Blend Sweater", "$699.00", "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&auto=format&fit=crop&q=60")}
//       ${generateProductCard("Luxury Scarf", "$450.00", "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=60", false, true)}
//     </div>
//   </div>
//   </div>

//   <div class="refund-alert ">
//   <div class="flex">
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//       <rect width="20" height="14" x="2" y="5" rx="2"></rect>
//       <line x1="2" y1="10" x2="22" y2="10"></line>
//     </svg>
//     <div>
//       <h4>Refund Due</h4>
//       <p>You'll receive a refund of $1751.00</p>
//     </div>
//   </div>
// </div>

// <div class="exchange-process">
//   <h4 class="exchange-title">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-shield">
//       <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
//     </svg>
//     Exchange Process
//   </h4>
//   <div class="exchange-details">
//     <div class="exchange-item">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-clock">
//         <circle cx="12" cy="12" r="10"></circle>
//         <polyline points="12 6 12 12 16 14"></polyline>
//       </svg>
//       <span>Processing time: 5-7 business days after we receive your item</span>
//     </div>
//     <div class="exchange-item">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-truck">
//         <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
//         <path d="M15 18H9"></path>
//         <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
//         <circle cx="17" cy="18" r="2"></circle>
//         <circle cx="7" cy="18" r="2"></circle>
//       </svg>
//       <span>Free exchange shipping (both ways)</span>
//     </div>
//     <div class="exchange-item">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-package">
//         <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
//         <path d="M12 22V12"></path>
//         <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
//         <path d="m7.5 4.27 9 5.15"></path>
//       </svg>
//       <span>New item will be shipped immediately upon approval</span>
//     </div>
//   </div>
// </div>

//     `;

//   // Modal footer with buttons
//   const modalFooter = document.createElement('div');
//   modalFooter.className = 'modal-footer';
//   modalFooter.innerHTML = `
//     <button class="btn-cancel">Cancel</button>
//     <button class="btn-submit">Submit Return Request</button>
//   `;

//   modalContent.append(modalFooter)

//   modalWrapper.appendChild(modalContent);
//   document.body.appendChild(modalWrapper);

//   const decodedOrder = JSON.parse(decodeURIComponent(encodedOrderString));
//   const decodedReturnSetting = JSON.parse(decodeURIComponent(encodedReturnSettingsString));
//   console.log(decodedOrder, '✅ Parsed decoded order');
//   console.log(decodedReturnSetting,'woahh parsed decoded return string');


//   const item = decodedOrder.items[0]; // Assuming 1 item
//   console.log(item);

//   document.getElementById('order-id').textContent = `Order ${decodedOrder.orderNumber}`;
//   document.getElementById('dynamic-product-image').src = item.image.startsWith('//') ? 'https:' + item.image : item.image;
//   document.getElementById('dynamic-product-name').textContent = item.title;
//   document.getElementById('dynamic-product-price').textContent = `Amount: ${item.price}`;
//   document.getElementById('dynamic-order-date').textContent = `Order Date: ${decodedOrder.orderDate}`;

//   // Hide the 'Please specify' textarea by default
//   const reasonTextarea = modalWrapper.querySelector('#reasonTextarea');
//   reasonTextarea.classList.add('hidden');

//   // Add event listener to all 'return_reason' radio buttons
//   const reasonRadios = modalWrapper.querySelectorAll('input[name="return_reason"]');

//   reasonRadios.forEach((radio) => {
//     radio.addEventListener('change', () => {
//       // Check if the label text contains "Other reason"
//       const labelText = radio.parentElement.textContent.trim().toLowerCase();

//       if (labelText.includes('other reason') && radio.checked) {
//         reasonTextarea.classList.remove('hidden');
//       } else {
//         reasonTextarea.classList.add('hidden');
//       }
//     });
//   });

//   //close the modal
//   document.getElementById('return-modal-close').addEventListener('click', () => {
//     document.body.removeChild(modalWrapper);
//   })

//   // Cancel button closes modal
//   modalFooter.querySelector('.btn-cancel').addEventListener('click', () => {
//     modalWrapper.remove();
//   });

//   const radio = modalWrapper.querySelector('input[name="exchange_type"]');
//   const altProducts = modalWrapper.querySelector('#alternative-products');

//   radio.addEventListener('change', (e) => {
//     if (e.target.checked) {
//       altProducts.classList.remove('hidden');
//     } else {
//       altProducts.classList.add('hidden');
//     }
//   });

//   // Product card generator function (isse code ke andar hi rakho)
//   function generateProductCard(title, price, imageUrl, selected = false, outOfStock = false) {
//     const selectedClass = selected ? 'selected' : '';
//     const outClass = outOfStock ? 'out-of-stock' : '';
//     const tickIcon = `
//     <svg xmlns="http://www.w3.org/2000/svg" class="icon-check" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" style="display: ${selected ? 'block' : 'none'};">
//       <circle cx="12" cy="12" r="10"></circle>
//       <path d="m9 12 2 2 4-4"></path>
//     </svg>`;

//     const stockLabel = outOfStock ? `
//     <div class="stock-label">Out of Stock</div>
//   ` : '';

//     return `
//     <div class="product-card ${selectedClass} ${outClass}">
//       <div class="product-info">
//         <div class="product-image">
//           <img src="${imageUrl}" alt="${title}" />
//         </div>
//         <div class="product-text">
//           <h5>${title}</h5>
//           <p>${price}</p>
//         </div>
//         ${tickIcon}
//         ${stockLabel}
//       </div>
//     </div>
//   `;
//   }

//   // After modal is appended and inits...

//   // Refund alert div
//   const refundAlert = modalWrapper.querySelector('.refund-alert');
//   refundAlert.classList.add('hidden');  // initially hidden

//   // Product list click handler for selecting product and showing refund alert on image click
//   const productList = modalWrapper.querySelector('.product-list');
//   productList.addEventListener('click', (e) => {
//     const card = e.target.closest('.product-card');
//     if (!card || card.classList.contains('out-of-stock')) return;

//     // Deselect all cards
//     productList.querySelectorAll('.product-card').forEach(c => {
//       c.classList.remove('selected');
//       const tick = c.querySelector('.icon-check');
//       if (tick) tick.style.display = 'none';
//     });

//     // Select clicked card and show tick icon
//     card.classList.add('selected');
//     const tick = card.querySelector('.icon-check');
//     if (tick) tick.style.display = 'block';

//     // Always show refund alert on card select
//     refundAlert.classList.remove('hidden');
//   });

// }

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


async function handleProductSelectionChange(checkbox, productId, lineItemId, allowVariants) {

  const variantsContainer = document.getElementById(`variants-container-${lineItemId}`);
  console.log(allowVariants, variantsContainer, "allowVariants")
  if (!variantsContainer) return;

  if (checkbox.checked) {

    if (allowVariants == "true") {

      const isAlreadyPopulated = variantsContainer.querySelector('select');
      console.log("allowVariants1")
      if (isAlreadyPopulated) {
        console.log("allowVariants11")
        // If already populated, just show it.
        variantsContainer.style.display = 'block';
      } else {
        console.log("allowVariants111")
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

function handleReasonChange(event) {
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
          <input  class="Axentra-custom-checkbox" type="radio" name="exchange-reason" value="${reason}" id="exchange-reason-${index}" onchange="handleReasonChange(event)" style="width: 16px; height: 16px; cursor: pointer;">
          <label for="exchange-reason-${index}" style="font-size: 14px; font-weight: 500; cursor: pointer;" class="Axentra-returnLabel">${reason}</label>
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
            <div style="font-size: 16px; font-weight: 600; color: #111827;">Exchange Items - Order ${orderData.orderNumber}</div>
            <button onclick="closeExchangeModal()" class="Axentra-returnclose" style="display: inline-flex; background: none; cursor: pointer;">
              <svg class="xircls_svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <path d="M18 6 6 18"></path>
               <path d="m6 6 12 12"></path>
              </svg>
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
                      <div style="font-weight: 500; color: #111827; margin-bottom: 16px; font-size: 14px;">Reason for Exchange</div>
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
                      <div style="font-weight: 500; color: #111827; margin-bottom: 16px; font-size: 14px;">Exchange Preferences</div>
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


        <div style="padding: 16px; border-top: 1px solid #e5e7eb; display: flex; justify-content: flex-end; gap: 8px;">
      <button onclick="closeExchangeModal()" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; white-space: nowrap; border-radius: 6px; font-size: 14px; font-weight: 500; border: 1px solid #d1d5db; background: white; color: #374151; padding: 0 16px; cursor: pointer;" onmouseover="this.style.backgroundColor='#f9fafb'" onmouseout="this.style.backgroundColor='white'">
        Cancel
      </button>

      <button class="Axentra-ReturnBtn" onclick="submitExchangeRequest()" style="display: inline-flex; ">
        <svg class="xircls_svg2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
          <path d="M21 3v5h-5"></path>
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
          <path d="M8 16H3v5"></path>
        </svg>
        Submit Request
      </button>
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




//return 

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
      // setTimeout(() => window.location.reload(), 500);
    })
    .catch(error => {
      console.error('❌ Error submitting return request:', error);

      createStatusToast("Return", "There was an error submitting your return request. Please try again.", "success");
      //  setTimeout(() => window.location.reload(), 500);
    })
  // Log the final data to the console
  console.log("--- Return Request Submitted ---", submissionData);
  //  setTimeout(() => window.location.reload(), 500);
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
      <button onclick="closeReturnModal()" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; white-space: nowrap; border-radius: 6px; font-size: 14px; font-weight: 500; border: 1px solid #d1d5db; background: white; color: #374151; padding: 0 16px; cursor: pointer;" onmouseover="this.style.backgroundColor='#f9fafb'" onmouseout="this.style.backgroundColor='white'">
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
  if (selectedItems.length > 0) {
    containerDiv.style.display = 'block'
  }
  else {
    containerDiv.style.display = 'none'
  }
  const container = document.getElementById('selected-items-container');
  const count = document.getElementById('selected-items-count')
  if (count) {
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

function openReturnModal(encodedOrderString, encodedSettingsString, encodedReturnInfoString) {
  let orderData, returnSettings, returnInfo;
  console.log(orderData, returnSettings, returnInfo, 'hieeeiee');

  try {
    // Decode and parse the stringified order data passed from the button's onclick attribute

    orderData = JSON.parse(decodeURIComponent(encodedOrderString));
    returnSettings = JSON.parse(decodeURIComponent(encodedSettingsString));
    returnInfo = encodedReturnInfoString ? JSON.parse(decodeURIComponent(encodedReturnInfoString)) : null;
    console.log(orderData, returnSettings, returnInfo, 'hieeeie222');
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
  overlay.onclick = function (event) {
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
            <span class="Axentra-ReplaceStepperContent" style="color: ${textColor}; font-weight: ${fontWeight}; font-size: 14px;">${steps[i - 1]}</span>
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

// function handleImageUpload(event, itemId) {
//     if (replacementDetails[itemId] && event.target.files) {
//         replacementDetails[itemId].files.push(...Array.from(event.target.files));
//     }
//     rerenderStep1();
// }

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
// function renderDashboard() {
//     const dashboardContainer = document.getElementById('dashboardContainer');
//     dashboardContainer.innerHTML = ''; // Clear previous content
//     const wrapper = createElement('div', 'dashboard-wrapper');
//     const title = createElement('span', 'dashboard-title', 'Welcome Back, Claire');
//     const lastLogin = createElement('p', 'dashboard-subtext', 'Last login: May 10, 2023');
//     const memberSince = createElement('p', 'dashboard-subtext', 'Member since 2020');
//     const infoRow = document.createElement('div');
//     infoRow.classList.add('dashboard-info-row')
//     const infoItems = [
//         { label: 'LOYALTY STATUS', value: 'Gold Member' },
//         { label: 'POINTS BALANCE', value: '1250 points' },
//         { label: 'NEXT TIER', value: '500 points needed' }
//     ];
//     infoItems.forEach(({ label, value }) => {
//         const col = document.createElement('div');
//         col.appendChild(createElement('p', 'dashboard-label', label));
//         col.appendChild(createElement('p', 'dashboard-value', value));
//         infoRow.appendChild(col);
//     });
//     const progressBar = createElement('div', 'progress-bar-bg');
//     progressBar.appendChild(createElement('div', 'progress-bar-fill'));
//     const progressLabels = document.createElement('div');
//     progressLabels.className = 'dashboard-label';
//     progressLabels.innerHTML = `< span > Gold</ > <span>Platinum</span>`;
//     wrapper.appendChild(title);
//     wrapper.appendChild(lastLogin);
//     wrapper.appendChild(memberSince);
//     wrapper.appendChild(infoRow);
//     wrapper.appendChild(progressBar);
//     wrapper.appendChild(progressLabels);
//     const cardSection = createElement('div', 'dashboard-section');
//     const cardsData = [
//         { title: 'ORDERS', number: customerOrders.length || 0, note: '+12% from last month', svg: `< svg xmlns = "http://www.w3.org/2000/svg" width = "35" height = "35" viewBox = "0 0 24 24" fill = "none" stroke = "#ccc" stroke - width="2" stroke - linecap="round" stroke - linejoin="round" class="lucide lucide-shopping-bag text-gray-300" ><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></ > ` },
//         { title: 'WISHLIST', number: '16', note: '+3 new items', svg: `< svg xmlns = "http://www.w3.org/2000/svg" width = "35" height = "35" viewBox = "0 0 24 24" fill = "none" stroke = "#ccc" stroke - width="2" stroke - linecap="round" stroke - linejoin="round" class="lucide lucide-star text-gray-300" > <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></ > ` },
//         { title: 'TOTAL SPENT', number: totalSpent, note: '$890 this month', svg: `< svg xmlns = "http://www.w3.org/2000/svg" width = "35" height = "35" viewBox = "0 0 24 24" fill = "none" stroke = "#ccc" stroke - width="2" stroke - linecap="round" stroke - linejoin="round" class="lucide lucide-dollar-sign text-gray-300" ><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></ > ` }
//     ];
//     cardsData.forEach((cardData) => {
//         const { title, number, note } = cardData;
//         const card = createElement('div', 'dashboard-card');
//         const header = createElement('div', 'card-header');
//         const titleBlock = document.createElement('div');
//         titleBlock.appendChild(createElement('span', 'card-title', title));
//         titleBlock.appendChild(createElement('p', 'card-number', number));
//         const icon = document.createElement('div');
//         if (cardData.svg) {
//             icon.innerHTML = cardData.svg;
//         } else {
//             icon.innerHTML = '&nbsp;';
//         }
//         header.appendChild(titleBlock);
//         header.appendChild(icon);
//         card.appendChild(header);
//         card.appendChild(createElement('p', 'card-note', note));
//         cardSection.appendChild(card);
//     });

//     dashboardContainer.appendChild(wrapper);
//     dashboardContainer.appendChild(cardSection);
//     const activityContainer = createElement('div', 'activity-container');
//     activityContainer.appendChild(createElement('span', 'activity-heading', 'Recent Account Activity'));
//     const activityList = createElement('div', 'activity-list');
//     const activityData = [
//         { icon: 'shopping-bag', title: 'Purchased Leather Tote Bag', date: 'Yesterday', value: '$450' },
//         { icon: 'return', title: 'Returned Silk Scarf', date: 'May 28, 2023', value: '-$120' }, // Example of negative value and muted class
//         { icon: 'gift', title: 'Redeemed Birthday Gift', date: 'May 25, 2023', value: '500 pts' },
//         { icon: 'review', title: 'Submitted review for Cashmere Sweater', date: 'May 20, 2023', value: '+50 pts' },
//     ];
//     activityData.forEach(item => {
//         const activityItem = createElement('div', 'activity-item');
//         const iconDiv = createElement('div', 'icon');
//         iconDiv.innerHTML = getIconSvg(item.icon); // Example: Assuming you have a getIconSvg function
//         activityItem.appendChild(iconDiv);
//         const detailsDiv = createElement('div', 'activity-details');
//         const topDiv = createElement('div', 'activity-top');
//         topDiv.appendChild(createElement('span', 'activity-title', item.title));
//         topDiv.appendChild(createElement('p', 'activity-date', item.value));
//         const valueP = createElement('p', 'activity-value');
//         if (item.valueClass) {
//             valueP.classList.add(item.valueClass); // Add additional class to the value if needed
//         }
//         valueP.textContent = item.date;
//         detailsDiv.appendChild(topDiv);
//         detailsDiv.appendChild(valueP);
//         activityItem.appendChild(detailsDiv);
//         activityList.appendChild(activityItem);
//     });
//     activityContainer.appendChild(activityList);
//     activityContainer.appendChild(createElement('button', 'view-all-btn', 'View All Activity'));
//     dashboardContainer.appendChild(activityContainer);
//     const supportGrid = createElement('div', 'support-grid');
//     const supportCardsData = [
//         {
//             title: 'Need Assistance?',
//             text: 'Our luxury concierge team is available 24/7',
//             buttonText: 'Contact Concierge',
//             icon: 'concierge' // Add icon property
//         },
//         {
//             title: 'Schedule Private Shopping',
//             text: 'Book a personal shopping appointment',
//             buttonText: 'Schedule Now',
//             icon: 'calendar'  // Add icon property
//         },
//     ];
//     supportCardsData.forEach(cardData => {
//         const supportCard = createElement('div', 'support-card');
//         const supportInfo = createElement('div', 'support-info');
//         supportInfo.appendChild(createElement('span', 'support-title', cardData.title));
//         supportInfo.appendChild(createElement('p', 'support-text', cardData.text));
//         supportInfo.appendChild(createElement('button', 'support-button', cardData.buttonText));
//         const supportIcon = createElement('div', 'support-icon');
//         supportIcon.innerHTML = getIconSvg(cardData.icon); // Use the icon property
//         supportCard.appendChild(supportInfo);
//         supportCard.appendChild(supportIcon);
//         supportGrid.appendChild(supportCard);
//     });
//     dashboardContainer.appendChild(supportGrid);
// }

// function getIconSvg(iconName) {
//     switch (iconName) {
//         case 'shopping-bag':
//             return `< svg xmlns = "http://www.w3.org/2000/svg" width = "24" height = "24" viewBox = "0 0 24 24" fill = "none" stroke = "#ccc" stroke - width="2" stroke - linecap="round" stroke - linejoin="round" class="lucide lucide-shopping-bag h-5 w-5 text-gray-400" ><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></ > `;
//         case 'return':
//             return `< svg xmlns = "http://www.w3.org/2000/svg" width = "24" height = "24" viewBox = "0 0 24 24" fill = "none" stroke = "#ccc" stroke - width="2" stroke - linecap="round" stroke - linejoin="round" class="lucide lucide-package h-5 w-5 text-gray-400" ><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path><path d="m7.5 4.27 9 5.15"></path></ > `;
//         case 'gift':
//             return `< svg xmlns = "http://www.w3.org/2000/svg" width = "24" height = "24" viewBox = "0 0 24 24" fill = "none" stroke = "#ccc" stroke - width="2" stroke - linecap="round" stroke - linejoin="round" class="lucide lucide-gift h-5 w-5 text-gray-400" ><rect x="3" y="8" width="18" height="4" rx="1"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></ > `
//         case 'review':
//             return `< svg xmlns = "http://www.w3.org/2000/svg" width = "24" height = "24" viewBox = "0 0 24 24" fill = "none" stroke = "#ccc" stroke - width="2" stroke - linecap="round" stroke - linejoin="round" class="lucide lucide-star h-5 w-5 text-gray-400" > <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></ > `
//         case 'concierge':
//             return `< svg xmlns = "http://www.w3.org/2000/svg" class="icon-svg" viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" >
//                           <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
//                           <circle cx="12" cy="7" r="4"></circle>
//                         </>`;
//         case 'calendar':
//             return `<svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                           <path d="M8 2v4"></path>
//                           <path d="M16 2v4"></path>
//                           <rect width="18" height="18" x="3" y="4" rx="2"></rect>
//                           <path d="M3 10h18"></path>
//                         </svg>`;
//         default:
//             return ''; // Or a default icon
//     }
// }

fetchWishlistOnReload();
//   updateOrdersContainer(customerOrders)
updateSecurityContainer();
updateProfileContainer(cardData);
updateLoyaltyPointsContainer();
updateOrdersContainer(customerOrders);
createLogoutCard();
// renderCard(cardData);
//  renderDashboard();
// FetchLoyaltySettings();
// renderBranding()
renderRecentlyViewed();
renderMenu();
if (window.innerWidth <= 768) {
  toggleContainers();
  renderMobileMenu()
}
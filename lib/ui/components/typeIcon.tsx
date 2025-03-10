import { PokeAPI as pokemonTypes } from "pokeapi-types";

export const Bug = ({
  className,
  fillColor = "#91C12F",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="124"
    height="145"
    viewBox="0 0 124 145"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M86.2144 0.542108C86.3193 0.392563 86.5252 0.356219 86.6748 0.460932L96.8993 7.6203C97.049 7.72501 97.0853 7.93111 96.9806 8.08065L82.7497 28.4044C89.6681 30.6147 94.3816 32.9988 94.3816 32.9988C94.3816 32.9988 82.8605 52.8163 63.3195 52.8163C43.7785 52.8163 29.8929 34.346 29.8929 34.346C29.8929 34.346 34.8165 31.2039 42.1149 28.509L26.5056 9.9067C26.3883 9.76683 26.4066 9.55834 26.5463 9.441L36.108 1.41774C36.2481 1.3004 36.4565 1.31864 36.5738 1.45849L56.3378 25.0123C58.03 24.8209 59.7541 24.7139 61.4939 24.7139C63.9945 24.7139 66.492 24.904 68.9302 25.2266L86.2144 0.542108ZM90.0804 53.7548C95.2951 50.0305 103.186 40.3099 103.186 40.3099C103.186 40.3099 123.341 56.2821 123.341 90.1491C123.341 124.016 88.4956 144.399 88.4956 144.399C88.4956 144.399 71.847 127.585 67.7599 106.272C63.673 84.9587 73.8056 61.2926 73.8056 61.2926C73.8056 61.2926 84.8655 57.4791 90.0804 53.7548ZM33.9196 53.7548C28.7049 50.0305 20.8142 40.3099 20.8142 40.3099C20.8142 40.3099 0.658691 56.2821 0.658691 90.1491C0.658691 124.016 35.5044 144.399 35.5044 144.399C35.5044 144.399 52.153 127.585 56.2402 106.272C60.327 84.9587 50.1944 61.2926 50.1944 61.2926C50.1944 61.2926 39.1345 57.4791 33.9196 53.7548Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Dark = ({
  className,
  fillColor = "#5A5465",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="144"
    height="145"
    viewBox="0 0 144 145"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M64.6095 127.764C67.3452 128.183 70.1471 128.4 73.0001 128.4C103.376 128.4 128 103.776 128 73.4C128 43.0242 103.376 18.3999 73.0001 18.3999C70.9621 18.3999 68.9498 18.5107 66.9695 18.7267C82.0375 30.1424 91.9999 49.9173 91.9999 72.3999C91.9999 96.0362 80.9887 116.68 64.6095 127.764ZM71.9999 144.4C111.764 144.4 144 112.164 144 72.3999C144 32.6354 111.764 0.399902 71.9999 0.399902C32.2354 0.399902 0 32.6354 0 72.3999C0 112.164 32.2354 144.4 71.9999 144.4Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Dragon = ({
  className,
  fillColor = "#F4D23C",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="126"
    height="145"
    viewBox="0 0 126 145"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M69.9856 72.0852C70.9616 71.4901 71.7896 70.243 72.4573 68.857C81.2449 72.4486 87.4203 80.9356 87.4203 90.833C87.4203 103.981 76.5219 114.641 63.0781 114.641C57.5595 114.641 52.4697 112.844 48.3868 109.817C47.0475 109.183 45.9455 108.574 45.0438 108.075C43.6452 107.302 42.728 106.795 42.1537 106.874C40.4749 107.106 40.9623 108.65 41.4053 110.053C41.706 111.007 41.9864 111.894 41.5524 112.261C41.0985 112.644 39.6281 111.242 37.9099 109.604C35.5711 107.374 32.7732 104.707 31.4538 105.508C30.4107 106.141 31.4235 107.86 32.6632 109.964L32.7552 110.12C33.2789 111.009 33.8858 111.915 34.4396 112.741C35.5654 114.421 36.4722 115.774 36.0185 116.003C35.4701 116.28 31.649 113.701 28.429 110.12C27.1861 108.738 25.9824 107.24 24.8636 105.848V105.848C22.4147 102.801 20.3746 100.263 19.2293 100.563C17.8516 100.925 18.8938 103.767 20.4252 106.501C21.1412 107.78 21.9836 109.082 22.7129 110.21V110.21C23.8471 111.964 24.7081 113.294 24.3959 113.458C23.9746 113.678 20.2674 110.063 17.7495 105.508C16.2539 102.802 14.9982 99.8117 13.9815 97.3909C12.879 94.7655 12.0577 92.8099 11.5169 92.6131C9.63798 91.9293 9.63797 95.7602 10.3916 101.289C10.4899 102.011 10.6362 102.767 10.8165 103.538C18.1246 127.183 40.5742 144.4 67.1352 144.4C99.6243 144.4 125.962 118.641 125.962 86.8652C125.962 56.6218 102.104 31.8287 71.7907 29.5076C71.829 28.0829 72.5726 25.2576 72.5726 25.2576C72.5726 25.2576 77.9239 12.3101 78.2069 9.54331C78.2254 9.35968 78.2476 9.16014 78.2716 8.94762C78.6048 5.95822 79.225 0.399902 74.4432 0.399902C71.8894 0.399902 70.702 2.29964 69.3438 4.47237V4.4724C68.8224 5.30651 68.2757 6.18086 67.617 7.00337C62.8728 12.9278 54.8955 20.3261 50.3721 24.2676C40.8113 32.5985 31.4311 39.4453 25.9602 43.4385L25.9599 43.4387C23.4717 45.2548 21.7923 46.4807 21.2726 46.9873C17.3559 50.8055 3.31247 76.1366 3.31247 76.1366C3.31247 76.1366 -1.22902 84.2636 0.385217 85.912C1.99945 87.5601 5.89218 87.1824 5.89218 87.1824C5.89218 87.1824 58.1881 75.1851 62.87 74.239C64.1306 73.9842 65.0205 73.8371 65.7036 73.7243C67.5585 73.418 67.8915 73.3629 69.9856 72.0852ZM33.0106 56.6679C30.2034 59.3361 25.5479 65.705 25.5479 65.705C25.5479 65.705 34.2002 66.238 38.9655 61.7085C43.731 57.1786 42.6391 49.4592 42.6391 49.4592C42.6391 49.4592 35.8174 53.9997 33.0106 56.6679Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Electric = ({
  className,
  fillColor = "#F4D23C",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="90"
    height="145"
    viewBox="0 0 90 145"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.8675 0.804657C15.8397 0.724304 15.8996 0.640503 15.9845 0.640503H66.5614C66.6157 0.640503 66.6638 0.675824 66.6798 0.727629L89.9105 75.7823C89.935 75.8619 89.8756 75.9427 89.7921 75.9427H56.1211C56.0801 75.9427 56.0505 75.9818 56.0618 76.0214L75.373 144.001C75.4107 144.133 75.2377 144.219 75.1553 144.109L0.108921 44.3093C0.0476084 44.2278 0.105797 44.1113 0.207778 44.1113H30.767C30.8095 44.1113 30.8393 44.0694 30.8252 44.0292L15.8675 0.804657Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Fairy = ({
  className,
  fillColor = "#EC8FE6",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="144"
    height="145"
    viewBox="0 0 144 145"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.8941 114.584L51.9909 107.887L71.94 144.362C71.9662 144.409 72.0339 144.409 72.0598 144.362L92.0089 107.887L115.106 114.584C115.158 114.599 115.206 114.55 115.19 114.499L108.492 91.8589L143.962 72.4597C144.009 72.4338 144.009 72.3661 143.962 72.3402L108.2 52.7809L115.19 29.1531C115.206 29.1014 115.158 29.0533 115.106 29.0682L91.4672 35.9225L72.0598 0.437834C72.0339 0.390514 71.9662 0.390513 71.9403 0.437833L52.5329 35.9225L28.8941 29.0682C28.8424 29.0533 28.7943 29.1014 28.8098 29.1531L35.8002 52.7809L0.0379318 72.3402C-0.00938787 72.3661 -0.00938919 72.4338 0.0379307 72.4597L35.5077 91.8589L28.8098 114.499C28.7943 114.55 28.8424 114.599 28.8941 114.584ZM46.8171 72.6487L63.1799 81.5978L72.129 97.9604C72.1549 98.0079 72.2229 98.0079 72.2488 97.9604L81.1979 81.5978L97.5605 72.6487C97.6077 72.6228 97.6077 72.5548 97.5605 72.5289L81.1979 63.5798L72.2488 47.2173C72.2229 47.1697 72.1549 47.1697 72.129 47.2173L63.1799 63.5798L46.8171 72.5289C46.7698 72.5548 46.7698 72.6228 46.8171 72.6487Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Fightign = ({
  className,
  fillColor = "#CE416B",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="136"
    height="145"
    viewBox="0 0 136 145"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.8345 12.3715C22.5772 5.49092 28.8106 0.399902 36.2328 0.399902C41.8001 0.399902 46.6986 3.26435 49.5348 7.5999H54.1791C57.0644 4.63879 61.0955 2.7999 65.5565 2.7999C72.0966 2.7999 77.7138 6.75283 80.1488 12.3999H84.0371C86.4736 10.8789 89.3525 9.99989 92.4364 9.99989C98.9768 9.99989 104.594 13.9528 107.029 19.5999H117.602C117.693 19.5999 117.777 19.6242 117.85 19.6667C118.333 19.6225 118.822 19.5999 119.316 19.5999C128.089 19.5999 135.2 26.7112 135.2 35.4836V83.1116L135.2 83.1999L135.2 83.2882V83.9742C135.2 84.2647 135.192 84.5541 135.176 84.8421C134.221 117.883 104.511 144.4 68 144.4C30.8865 144.4 0.800049 117 0.800049 83.1999C0.800049 66.8849 7.81018 52.0607 19.237 41.0897C19.2085 56.9953 19.4771 73.4388 20.7156 73.1567C24.0316 72.4007 21.4407 23.136 20.8345 12.3715Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Fire = ({
  className,
  fillColor = "#FF9D55",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="108"
    height="145"
    viewBox="0 0 108 145"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M81.1207 111.604C82.8999 105.099 79.4464 91.7246 79.4464 91.7246C79.4464 91.7246 76.9416 102.62 73.0277 106.647C69.6887 110.082 65.5979 112.464 59.7311 113.09C64.5278 110.76 67.8266 105.902 67.8266 100.287C67.8266 92.4049 61.3263 86.0149 53.3079 86.0149C45.2894 86.0149 38.7889 92.4049 38.7889 100.287C38.7889 102.44 39.2741 104.482 40.1423 106.312C35.127 102.316 34.3384 95.9107 34.3384 95.9107C34.3384 95.9107 28.7382 119.162 44.1692 130.099C59.6 141.036 89.8285 131.635 89.8285 131.635C89.8285 131.635 46.5697 162.073 14.5145 128.945C-13.0984 100.408 7.30751 62.8382 7.30751 62.8382C7.30751 62.8382 6.42624 66.3235 6.42624 70.3693C6.42624 74.4151 8.61979 77.4933 8.61979 77.4933C8.61979 77.4933 15.1631 63.7011 20.2554 58.0922C25.0749 52.7838 31.1164 48.4785 36.3347 44.7598C40.3515 41.8972 43.8807 39.3823 45.9884 37.0251C57.5975 24.0442 50.4794 0.399902 50.4794 0.399902C50.4794 0.399902 63.5659 11.9368 67.2194 26.8368C68.6121 32.5164 67.716 38.9787 66.915 44.7575C65.6145 54.1389 64.5635 61.7194 73.9587 61.2275C89.1411 60.4324 75.948 37.0251 75.948 37.0251C75.948 37.0251 110.388 55.1264 107.815 86.7844C105.242 118.442 70.1705 125.64 70.1705 125.64C70.1705 125.64 79.3412 118.11 81.1207 111.604Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Flying = ({
  className,
  fillColor = "#89AAE3",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="144"
    height="125"
    viewBox="0 0 144 125"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50.2628 124.8C71.3573 124.8 89.417 113.076 96.8726 96.4564C96.9638 96.2536 66.9395 104.259 67.8968 101.429C68.3243 100.165 86.7293 93.4419 100.139 85.5996C107.846 81.092 111.395 71.55 111.395 71.55C111.395 71.55 98.4102 77.8542 91.8461 79.4534C78.6184 82.6765 66.9743 82.3295 66.9743 81.9937C66.9743 81.2675 86.3089 77.5938 113.182 61.218C125.822 53.5154 129.255 40.2477 129.255 40.2477C129.255 40.2477 115.358 48.5255 106.957 51.2584C87.0348 57.7392 68.8542 59.6922 68.8542 58.8153C68.8542 56.9377 84.8537 52.5381 101.817 44.3185C110.637 40.0449 118.275 34.4616 127.127 28.2524C141.611 18.0934 144 0 144 0C144 0 129.714 9.21378 122.743 12.2736C93.9772 24.8993 68.5769 31.5222 50.2628 32.956C22.617 35.1205 0 54.4095 0 79.4534C0 104.498 22.5033 124.8 50.2628 124.8Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Ghost = ({
  className,
  fillColor = "#5269AD",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="144"
    height="145"
    viewBox="0 0 144 145"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M103.768 143.901C90.7788 144.566 75.9082 144.566 70.8548 143.901C31.4353 138.715 0 109.894 0 70.9374C0 31.9806 32.2355 0.399902 72 0.399902C111.765 0.399902 144 31.9806 144 70.9374C144 89.0558 137.027 105.579 125.567 118.071C122.455 121.463 126.725 123.843 131.063 126.26C135.318 128.632 139.638 131.039 137.127 134.475C134.36 138.261 119.36 143.103 103.768 143.901ZM61.875 62.1202C61.875 68.207 56.8381 73.1416 50.625 73.1416C44.4119 73.1416 39.375 68.207 39.375 62.1202C39.375 58.0379 41.6405 54.4742 45.0068 52.5692C45.2005 57.8767 49.5644 62.1199 54.9194 62.1199H61.875V62.1202ZM96.7433 52.5692C96.5495 57.8767 92.1856 62.1199 86.8306 62.1199H79.875V62.1202C79.875 68.207 84.9119 73.1416 91.125 73.1416C97.3381 73.1416 102.375 68.207 102.375 62.1202C102.375 58.0379 100.11 54.4742 96.7433 52.5692Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Grass = ({
  className,
  fillColor = "#63BC5A",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="130"
    height="139"
    viewBox="0 0 130 139"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.4434 121.044C20.9491 120.579 20.4603 120.105 19.9772 119.622C-5.52787 94.1171 -5.52787 52.7652 19.9772 27.2603C45.4821 1.75521 126.751 0.0489502 126.751 0.0489502C126.751 0.0489502 137.844 94.1171 112.339 119.622C89.6872 142.274 54.5361 144.808 29.0877 127.224L49.5931 102.061L82.3728 94.9837L55.6149 92.3087L72.6199 74.9944L91.9766 70.754L76.6704 66.2211L91.9766 38.6091L70.2051 63.0294L61.7977 51.1655L64.7573 70.754L49.5931 87.8489L42.5638 66.2208V94.9837L21.4434 121.044Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Ground = ({
  className,
  fillColor = "#D97845",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="144"
    height="105"
    viewBox="0 0 144 105"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.7154 104.193C31.6763 104.193 31.649 104.155 31.6619 104.118L68.4255 0.237761C68.4337 0.215177 68.4551 0.200073 68.479 0.200073H107.725C107.749 0.200073 107.771 0.21529 107.779 0.238015L143.997 104.118C144.009 104.155 143.982 104.193 143.943 104.193H32.8201H31.7154ZM0.0571056 104.6C0.0176198 104.6 -0.00971692 104.56 0.00413349 104.524L27.3809 31.4346C27.3892 31.4124 27.4103 31.3977 27.4339 31.3977H51.2212C51.2606 31.3977 51.2878 31.4368 51.2743 31.4737L24.8018 104.563C24.7937 104.585 24.7724 104.6 24.7486 104.6H0.0571056Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Ice = ({
  className,
  fillColor = "#73CEC0",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="142"
    height="123"
    viewBox="0 0 142 123"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M107.085 0.380371L107.528 39.2914L73.5899 55.5833L73.1714 18.8439L107.085 0.380371Z"
      fill={fillColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M141.107 61.6944L107.51 80.9114L73.8936 61.664L107.493 44.015L141.107 61.6944Z"
      fill={fillColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M67.9176 61.6944L34.3209 80.9114L0.704102 61.664L34.3035 44.015L67.9176 61.6944Z"
      fill={fillColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.9434 0.221069L68.8144 17.4914L67.9229 55.1272L34.998 38.8209L33.9434 0.221069Z"
      fill={fillColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M108.034 122.579L73.1633 105.308L74.0549 67.6724L106.98 83.979L108.034 122.579Z"
      fill={fillColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.1476 122.929L34.7043 84.018L68.6431 67.7261L69.0616 104.465L35.1476 122.929Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Normal = ({
  className,
  fillColor = "#919AA2",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="128"
    height="127"
    viewBox="0 0 128 127"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M127.281 63.3999C127.281 98.3492 98.9492 126.681 64 126.681C29.0508 126.681 0.71875 98.3492 0.71875 63.3999C0.71875 28.4507 29.0508 0.118652 64 0.118652C98.9492 0.118652 127.281 28.4507 127.281 63.3999ZM100.161 63.3999C100.161 83.3709 83.971 99.5605 64 99.5605C44.029 99.5605 27.8394 83.3709 27.8394 63.3999C27.8394 43.4289 44.029 27.2393 64 27.2393C83.971 27.2393 100.161 43.4289 100.161 63.3999Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Poison = ({
  className,
  fillColor = "#B567CE",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="144"
    height="145"
    viewBox="0 0 144 145"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M120.325 111.057C134.866 99.4303 144 82.6307 144 63.9483C144 28.8514 111.765 0.399902 72 0.399902C32.2355 0.399902 0 28.8514 0 63.9483C0 81.9562 8.48635 98.2147 22.1218 109.778C21.2954 112.632 20.8421 115.735 20.8421 118.981C20.8421 133.019 29.3251 144.4 39.7896 144.4C46.5891 144.4 52.5521 139.595 55.8948 132.378C59.2374 139.595 65.2005 144.4 72 144.4C78.1982 144.4 83.7011 140.407 87.158 134.235C90.6148 140.407 96.1178 144.4 102.316 144.4C112.78 144.4 121.263 133.019 121.263 118.981C121.263 116.214 120.934 113.551 120.325 111.057ZM113.684 65.2086C113.684 83.0269 94.5973 97.4717 71.0527 97.4717C47.5079 97.4717 28.4212 83.0269 28.4212 65.2086C28.4212 47.3903 47.5079 32.9456 71.0527 32.9456C94.5973 32.9456 113.684 47.3903 113.684 65.2086Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Psychic = ({
  className,
  fillColor = "#FA7179",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="134"
    height="145"
    viewBox="0 0 134 145"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M123.309 119.991C123.309 119.991 105.151 134.554 69.0187 128.527C41.6053 123.955 26.9842 93.7357 26.9842 77.4924C26.9842 38.9809 55.4878 30.2168 74.7582 30.2168C94.0283 30.2168 106.599 49.0043 106.599 63.5506C106.599 78.0968 96.3112 90.82 80.3005 90.82C64.2901 90.82 59.5482 79.5799 59.5482 69.2459C59.5482 58.9122 67.9089 55.2714 75.5339 55.2714C83.1588 55.2714 85.7697 61.7812 85.7697 67.3762C85.7697 72.9713 81.4286 74.975 77.8078 74.975C74.187 74.975 73.8289 73.1482 72.4432 71.2284C71.0572 69.3089 74.2106 62.0425 69.0187 62.0425C63.8269 62.0425 62.8591 70.3959 62.8591 70.3959C62.8591 70.3959 64.7519 86.5208 80.3005 86.2427C95.8494 85.9642 103.226 73.9436 101.082 62.0425C98.9384 50.1412 87.3883 37.4947 67.1175 40.0502C46.8467 42.6056 38.5703 63.0874 42.2184 84.9754C45.8665 106.864 72.0883 119.546 92.7053 114.983C113.323 110.42 133.857 95.4944 133.857 57.6514C133.857 19.808 101.082 -2.93921 62.001 0.809661C22.9199 4.55852 -1.3399 38.7258 0.212942 79.7784C1.76578 120.831 40.7199 143.19 73.6596 144.342C106.599 145.494 126.793 126.427 126.793 126.427C126.793 126.427 131.334 122.377 129.554 119.214C127.773 116.052 123.309 119.991 123.309 119.991Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Rock = ({
  className,
  fillColor = "#C5B78C",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="146"
    height="115"
    viewBox="0 0 146 115"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M112.265 54.3615C112.257 54.3502 112.253 54.3362 112.256 54.3224L121.442 0.753753C121.447 0.729087 121.468 0.71106 121.493 0.71106H124.401C124.423 0.71106 124.443 0.7256 124.449 0.746975L145.147 66.2792C145.153 66.2994 145.146 66.3219 145.129 66.3351L129.869 78.2497C129.846 78.2674 129.813 78.2629 129.796 78.2396L112.265 54.3615ZM0.851074 89.8735C0.851074 89.8957 0.865361 89.9154 0.886481 89.9224L32.344 100.208C32.3592 100.213 32.3761 100.211 32.3893 100.202L102.704 51.6578C102.716 51.6497 102.724 51.637 102.726 51.6229L110.266 1.02842C110.271 0.997372 110.247 0.969472 110.216 0.969472H47.934C47.9185 0.969472 47.9042 0.976279 47.8944 0.988063L0.862894 57.7244C0.855254 57.7337 0.851074 57.7452 0.851074 57.7573V89.8735ZM45.4525 102.829L79.8193 114.086C79.8348 114.091 79.852 114.089 79.8652 114.079L120.781 84.73C120.804 84.714 120.81 84.6827 120.794 84.6597L105.456 61.8348C105.44 61.8109 105.408 61.8047 105.384 61.8211L45.4525 102.829Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Steel = ({
  className,
  fillColor = "#5A8EA2",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="144"
    height="125"
    viewBox="0 0 144 125"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.0143749 62.4877C-0.00478254 62.4551 -0.00479216 62.4146 0.0143493 62.3817L36.2236 0.516312C36.2424 0.484221 36.277 0.464478 36.3142 0.464478H108.083C108.12 0.464478 108.155 0.484391 108.174 0.516762L143.986 62.3822C144.004 62.4146 144.004 62.4548 143.986 62.4871L108.174 124.283C108.155 124.315 108.12 124.335 108.083 124.335H36.3142C36.277 124.335 36.2424 124.316 36.2236 124.284L0.0143749 62.4877ZM105.361 62.3999C105.361 80.8184 90.4297 95.7497 72.0112 95.7497C53.5927 95.7497 38.6615 80.8184 38.6615 62.3999C38.6615 43.9812 53.5927 29.0502 72.0112 29.0502C90.4297 29.0502 105.361 43.9812 105.361 62.3999Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Water = ({
  className,
  fillColor = "#5090D6",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    width="94"
    height="145"
    viewBox="0 0 94 145"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M93.7117 97.8605C93.7117 123.562 72.7982 144.397 47 144.397C21.2018 144.397 0.28833 123.562 0.28833 97.8605C0.28833 72.8642 44.4733 4.21355 46.8965 0.46727C46.9519 0.381841 47.0484 0.381841 47.1035 0.467271C49.5268 4.21355 93.7117 72.8642 93.7117 97.8605ZM39.2133 129.478C15.5096 124.291 19.5658 98.0335 19.5658 98.0335C19.5658 98.0335 26.0385 113.884 41.746 119.019C57.4532 124.153 76.4354 116.623 76.4354 116.623C76.4354 116.623 62.9171 134.664 39.2133 129.478Z"
      fill={fillColor}
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="-3.94043"
        y1="8.70895"
        x2="66.0856"
        y2="110.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const Loading = ({
  className,
  fillColor = "#CD3131",
}: {
  className?: string;
  fillColor?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    <path
      d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM8.76557 24C8.76557 32.4137 15.5863 39.2344 24 39.2344C32.4137 39.2344 39.2344 32.4137 39.2344 24C39.2344 15.5863 32.4137 8.76557 24 8.76557C15.5863 8.76557 8.76557 15.5863 8.76557 24Z"
      fill="url(#paint0_linear_1028_27425)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1028_27425"
        x1="24"
        y1="0"
        x2="24"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={fillColor} />
        <stop offset="1" stopColor={fillColor} stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

interface IconProps {
  type: pokemonTypes.PokemonType;
  className?: string;
  fillColor?: string;
}

export const Icon = ({ type, className, fillColor }: IconProps) => {
  switch (type.type.name) {
    case "bug":
      return <Bug className={className} fillColor={fillColor} />;
    case "dark":
      return <Dark className={className} fillColor={fillColor} />;
    case "dragon":
      return <Dragon className={className} fillColor={fillColor} />;
    case "electric":
      return <Electric className={className} fillColor={fillColor} />;
    case "fairy":
      return <Fairy className={className} fillColor={fillColor} />;
    case "fighting":
      return <Fightign className={className} fillColor={fillColor} />;
    case "fire":
      return <Fire className={className} fillColor={fillColor} />;
    case "flying":
      return <Flying className={className} fillColor={fillColor} />;
    case "ghost":
      return <Ghost className={className} fillColor={fillColor} />;
    case "grass":
      return <Grass className={className} fillColor={fillColor} />;
    case "ground":
      return <Ground className={className} fillColor={fillColor} />;
    case "ice":
      return <Ice className={className} fillColor={fillColor} />;
    case "normal":
      return <Normal className={className} fillColor={fillColor} />;
    case "poison":
      return <Poison className={className} fillColor={fillColor} />;
    case "psychic":
      return <Psychic className={className} fillColor={fillColor} />;
    case "rock":
      return <Rock className={className} fillColor={fillColor} />;
    case "steel":
      return <Steel className={className} fillColor={fillColor} />;
    case "water":
      return <Water className={className} fillColor={fillColor} />;
    default:
      return <Normal className={className} fillColor={fillColor} />;
  }
};

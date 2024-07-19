import Svg, {
  Circle,
  Rect,
  Path,
  Mask,
  G,
  Defs,
  ClipPath,
  Line,
  Pattern,
  Use,
  Image,
} from "react-native-svg";

function EyeIcon() {
  return (
    <Svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="21" height="21" fill="url(#pattern0_64_390)" />
      <Defs>
        <Pattern
          id="pattern0_64_390"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use xlinkHref="#image0_64_390" transform="scale(0.02)" />
        </Pattern>
        <Image
          id="image0_64_390"
          width="50"
          height="50"
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

function GoogleIcon() {
  return (
    <Svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_10_1691)">
        <Path
          d="M22.9879 11.7152C22.9879 10.7729 22.9097 10.0853 22.7403 9.37219H11.7291V13.6253H18.1924C18.0622 14.6822 17.3585 16.2739 15.7948 17.3435L15.7728 17.4859L19.2544 20.1215L19.4956 20.1451C21.7108 18.1458 22.9879 15.2043 22.9879 11.7152Z"
          fill="#4285F4"
        />
        <Path
          d="M11.729 22.921C14.8955 22.921 17.5538 21.9023 19.4955 20.1451L15.7947 17.3435C14.8043 18.0184 13.4751 18.4896 11.729 18.4896C8.62767 18.4896 5.99543 16.4904 5.0571 13.7272L4.91957 13.7386L1.29942 16.4764L1.25208 16.605C3.18064 20.3487 7.14207 22.921 11.729 22.921Z"
          fill="#34A853"
        />
        <Path
          d="M5.0572 13.7272C4.80961 13.0141 4.66633 12.25 4.66633 11.4605C4.66633 10.671 4.80961 9.90698 5.04417 9.1939L5.03761 9.04203L1.37209 6.26025L1.25217 6.316C0.45731 7.86955 0.0012207 9.61413 0.0012207 11.4605C0.0012207 13.3069 0.45731 15.0514 1.25217 16.605L5.0572 13.7272Z"
          fill="#FBBC05"
        />
        <Path
          d="M11.729 4.43136C13.9312 4.43136 15.4167 5.36093 16.2638 6.13775L19.5736 2.97973C17.5409 1.13332 14.8955 0 11.729 0C7.14208 0 3.18064 2.57222 1.25208 6.31596L5.04408 9.19385C5.99543 6.4306 8.62767 4.43136 11.729 4.43136Z"
          fill="#EB4335"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_10_1691">
          <Rect width="23" height="23" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function FacebookIcon() {
  return (
    <Svg
      width="18"
      height="26"
      viewBox="0 0 18 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11.6835 25.9939V14.1368H16.9904L17.7849 9.51585H11.6835V6.56554C11.6835 5.2277 12.1789 4.31589 14.7372 4.31589L18 4.31476V0.181884C17.4355 0.125775 15.4988 0 13.2456 0C8.54132 0 5.32069 2.15337 5.32069 6.10813V9.51598H0V14.1369H5.32052V25.994L11.6835 25.9939Z"
        fill="#3C5A9A"
      />
    </Svg>
  );
}

function AppleIcon() {
  return (
    <Svg
      width="23"
      height="29"
      viewBox="0 0 23 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M22.2682 9.63231C22.1043 9.75946 19.2109 11.3898 19.2109 15.015C19.2109 19.2081 22.8926 20.6915 23.0028 20.7283C22.9859 20.8187 22.4179 22.7598 21.0617 24.7377C19.8523 26.4783 18.5893 28.216 16.6679 28.216C14.7466 28.216 14.2521 27.0999 12.034 27.0999C9.87248 27.0999 9.10393 28.2527 7.34644 28.2527C5.58894 28.2527 4.36265 26.6421 2.9527 24.6643C1.31953 22.3416 0 18.7334 0 15.3088C0 9.81597 3.5715 6.90283 7.08649 6.90283C8.95418 6.90283 10.5111 8.12912 11.6837 8.12912C12.7998 8.12912 14.5403 6.82936 16.6651 6.82936C17.4704 6.82936 20.3638 6.90283 22.2682 9.63231ZM15.6564 4.50393C16.5351 3.4613 17.1568 2.01462 17.1568 0.567936C17.1568 0.367322 17.1398 0.163882 17.1031 0C15.6733 0.0536855 13.9724 0.952211 12.9467 2.14177C12.1414 3.05725 11.3898 4.50393 11.3898 5.97039C11.3898 6.19079 11.4265 6.41118 11.4435 6.48182C11.5339 6.49877 11.6808 6.51855 11.8278 6.51855C13.1106 6.51855 14.724 5.65958 15.6564 4.50393Z"
        fill="black"
      />
    </Svg>
  );
}

function HomeIcon() {
  return (
    <Svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12 21.4073C11.59 21.4073 11.25 21.0363 11.25 20.5889V17.3156C11.25 16.8682 11.59 16.4973 12 16.4973C12.41 16.4973 12.75 16.8682 12.75 17.3156V20.5889C12.75 21.0363 12.41 21.4073 12 21.4073Z"
        fill="#fff"
      />
      <Path
        d="M17.6 25.5644H6.39996C4.57996 25.5644 2.91996 24.0368 2.61996 22.0837L1.28996 13.3876C1.06996 12.0346 1.67996 10.2997 2.66996 9.43775L9.59996 3.38209C10.94 2.20369 13.05 2.2146 14.4 3.393L21.33 9.43775C22.31 10.2997 22.91 12.0346 22.71 13.3876L21.38 22.0728C21.08 24.0041 19.38 25.5644 17.6 25.5644ZM11.99 4.14586C11.46 4.14586 10.93 4.32044 10.54 4.65869L3.60996 10.7253C3.04996 11.2163 2.64996 12.351 2.76996 13.1257L4.09996 21.811C4.27996 22.9566 5.32996 23.9277 6.39996 23.9277H17.6C18.67 23.9277 19.72 22.9566 19.9 21.8L21.23 13.1148C21.34 12.351 20.94 11.1944 20.39 10.7144L13.46 4.6696C13.06 4.32044 12.52 4.14586 11.99 4.14586Z"
        fill="#fff"
      />
    </Svg>
  );
}

function ExamIcon() {
  return (
    <Svg
      width="24"
      height="27"
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M18 9.14008H17.87C15.98 9.07461 14.57 7.48159 14.57 5.51759C14.57 3.50994 16.07 1.88419 17.9 1.88419C19.73 1.88419 21.23 3.52085 21.23 5.51759C21.2312 6.46103 20.8958 
        7.36794 20.2947 8.04616C19.6937 8.72439 18.8742 9.12065 18.01 9.15099C18.01 9.14008 18.01 9.14008 18 9.14008ZM17.9 3.50994C16.89 3.50994 16.07 4.40465 16.07 5.50668C16.07 6.58688 
        16.84 7.45976 17.83 7.50341C17.84 7.4925 17.92 7.4925 18.01 7.50341C18.4835 7.46934 18.9264 7.23614 19.2455 6.85291C19.5646 6.46967 19.7349 5.9663 19.7206 5.44878C19.7064 4.93125 
        19.5086 4.43995 19.1691 4.07831C18.8295 3.71668 18.3745 3.51292 17.9 3.50994ZM18.009 17.1794C17.619 17.1794 17.229 17.1466 16.839 17.0703C16.7417 17.0518 16.6488 17.0126 16.5654 
        16.9549C16.4821 16.8971 16.41 16.822 16.3534 16.7338C16.2967 16.6456 16.2565 16.5461 16.2352 16.4409C16.2139 16.3358 16.2117 16.2271 16.229 16.121C16.2459 16.0149 16.2818 15.9135 
        16.3348 15.8225C16.3877 15.7316 16.4565 15.653 16.5373 15.5911C16.6182 15.5293 16.7094 15.4855 16.8058 15.4622C16.9022 15.4389 17.0018 15.4366 17.099 15.4554C18.329 15.6846 
        19.629 15.4336 20.499 14.8008C20.969 14.4625 21.219 14.037 21.219 13.6114C21.219 13.1859 20.959 12.7713 20.499 12.433C19.629 11.8002 18.309 11.5492 17.069 11.7893C16.659 11.8766 
        16.269 11.5711 16.199 11.1237C16.129 10.6764 16.399 10.2508 16.809 10.1744C18.439 9.85803 20.129 10.1963 21.329 11.0692C22.209 11.7129 22.719 12.6294 22.719 13.6114C22.719 
        14.5825 22.219 15.51 21.329 16.1646C20.419 16.8193 19.239 17.1794 18.009 17.1794ZM5.97 9.13789H5.95C5.08726 9.10843 4.26886 8.71394 3.66792 8.03788C3.06697 7.36182 2.73062 6.45721 2.73 5.5154C2.73 3.50776 4.23 1.87109 6.06 1.87109C7.89 1.87109 9.39 3.50776 9.39 5.50449C9.39 7.4794 7.98 9.07243 6.18 9.13789L5.97 8.31956L6.04 9.13789H5.97ZM6.07 7.50123C6.13 7.50123 6.18 7.50123 6.24 7.51214C7.13 7.46849 7.91 6.5956 7.91 5.5154C7.90947 5.12526 7.80419 4.74384 7.60719 4.41826C7.41018 4.09267 7.13007 3.83719 6.80147 3.68338C6.47287 3.52957 6.11017 3.48416 5.75818 3.55277C5.40618 3.62139 5.08033 3.80101 4.82086 4.06945C4.56139 4.33789 4.37968 4.68338 4.29818 5.06326C4.21667 5.44313 4.23895 5.84073 4.36225 6.20694C4.48555 6.57315 4.70448 6.89193 4.99198 7.12388C5.27949 7.35584 5.62297 7.49082 5.98 7.51214C5.99 7.50123 6.03 7.50123 6.07 7.50123ZM5.96 17.1794C4.73 17.1794 3.55 16.8193 2.64 16.1646C1.76 15.5209 1.25 14.5934 1.25 13.6114C1.25 12.6404 1.76 11.7129 2.64 11.0692C3.84 10.1963 5.53 9.85803 7.16 10.1744C7.57 10.2508 7.84 10.6764 7.77 11.1237C7.7 11.5711 7.31 11.8766 6.9 11.7893C5.66 11.5492 4.35 11.8002 3.47 12.433C3 12.7713 2.75 13.1859 2.75 13.6114C2.75 14.037 3.01 14.4625 3.47 14.8008C4.34 15.4336 5.64 15.6846 6.87 15.4554C7.28 15.379 7.67 15.6846 7.74 16.121C7.81 16.5684 7.54 16.9939 7.13 17.0703C6.74 17.1466 6.35 17.1794 5.96 17.1794ZM12 17.2885H11.87C9.98 17.223 8.57 15.63 8.57 13.666C8.57 11.6584 10.07 10.0326 11.9 10.0326C13.73 10.0326 15.23 11.6693 15.23 13.666C15.2312 14.6094 14.8958 15.5164 14.2947 16.1946C13.6937 16.8728 12.8742 17.2691 12.01 17.2994C12.01 17.2885 12.01 17.2885 12 17.2885ZM11.9 11.6584C10.89 11.6584 10.07 12.5531 10.07 13.6551C10.07 14.7353 10.84 15.6082 11.83 15.6518C11.84 15.6409 11.92 15.6409 12.01 15.6518C12.98 15.5973 13.73 14.7244 13.74 13.6551C13.74 12.564 12.92 11.6584 11.9 11.6584ZM12.001 25.3398C10.801 25.3398 9.601 25.0016 8.671 24.3142C7.791 23.6704 7.281 22.7539 7.281 21.7719C7.281 20.8008 7.781 19.8624 8.671 19.2187C10.541 17.8657 13.471 17.8657 15.331 19.2187C16.211 19.8624 16.721 20.779 16.721 21.761C16.721 22.732 16.221 23.6704 15.331 24.3142C14.401 24.9906 13.201 25.3398 12.001 25.3398ZM9.501 20.5935C9.031 20.9317 8.781 21.3572 8.781 21.7828C8.781 22.2083 9.041 22.6229 9.501 22.9612C10.851 23.9541 13.141 23.9541 14.491 22.9612C14.961 22.6229 15.211 22.1974 15.211 21.7719C15.211 21.3463 14.951 20.9317 14.491 20.5935C13.151 19.6006 10.861 19.6115 9.501 20.5935Z"
        fill="#fff"
      />
    </Svg>
  );
}

function ReportsIcon() {
  return (
    <Svg
      width="24"
      height="27"
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15 25.3561H9C3.57 25.3561 1.25 22.8247 1.25 16.9V10.3533C1.25 4.42859 3.57 1.89722 9 1.89722H14C14.41 1.89722 14.75 2.26819 14.75 2.71555C14.75 3.16291 14.41 3.53388 14 3.53388H9C4.39 3.53388 2.75 5.32331 2.75 10.3533V16.9C2.75 21.93 4.39 23.7194 9 23.7194H15C19.61 23.7194 21.25 21.93 21.25 16.9V11.4444C21.25 10.9971 21.59 10.6261 22 10.6261C22.41 10.6261 22.75 10.9971 22.75 11.4444V16.9C22.75 22.8247 20.43 25.3561 15 25.3561Z"
        fill="#CCCCCC"
      />
      <Path
        d="M22 12.2606H18C14.58 12.2606 13.25 10.8094 13.25 7.07777V2.71333C13.25 2.386 13.43 2.08048 13.71 1.96046C13.99 1.82953 14.31 1.90591 14.53 2.13504L22.53 10.8639C22.6343 10.9786 22.7052 11.1243 22.7338 11.2828C22.7624 11.4412 22.7474 11.6054 22.6908 11.7546C22.6342 11.9038 22.5384 12.0315 22.4155 12.1215C22.2926 12.2115 22.148 12.2599 22 12.2606ZM14.75 4.68824V7.07777C14.75 9.89284 15.42 10.6239 18 10.6239H20.19L14.75 4.68824Z"
        fill="#CCCCCC"
      />
    </Svg>
  );
}

function SettingsIcon() {
  return (
    <Svg
      width="24"
      height="27"
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_65_449)">
        <Path
          d="M15 23.0789H9C3.57 23.0789 1.25 20.7589 1.25 15.3289V9.32886C1.25 3.89886 3.57 1.57886 9 1.57886H15C20.43 1.57886 22.75 3.89886 22.75 9.32886V15.3289C22.75 20.7589 20.43 23.0789 15 23.0789ZM9 3.07886C4.39 3.07886 2.75 4.71886 2.75 9.32886V15.3289C2.75 19.9389 4.39 21.5789 9 21.5789H15C19.61 21.5789 21.25 19.9389 21.25 15.3289V9.32886C21.25 4.71886 19.61 3.07886 15 3.07886H9Z"
          fill="#CCCCCC"
        />
        <Path
          d="M15.5801 19.5809C15.1701 19.5809 14.8301 19.2409 14.8301 18.8309V14.9309C14.8301 14.5209 15.1701 14.1809 15.5801 14.1809C15.9901 14.1809 16.3301 14.5209 16.3301 14.9309V18.8309C16.3301 19.2409 15.9901 19.5809 15.5801 19.5809ZM15.5801 8.52886C15.1701 8.52886 14.8301 8.18886 14.8301 7.77886V5.82886C14.8301 5.41886 15.1701 5.07886 15.5801 5.07886C15.9901 5.07886 16.3301 5.41886 16.3301 5.82886V7.77886C16.3301 8.18886 15.9901 8.52886 15.5801 8.52886Z"
          fill="#CCCCCC"
        />
        <Path
          d="M15.5799 13.7289C14.9174 13.7289 14.2697 13.5324 13.7188 13.1643C13.1679 12.7962 12.7385 12.273 12.4849 11.6608C12.2314 11.0487 12.165 10.3751 12.2943 9.7253C12.4236 9.07547 12.7426 8.47856 13.2111 8.01005C13.6796 7.54154 14.2765 7.22249 14.9264 7.09323C15.5762 6.96397 16.2498 7.03031 16.8619 7.28386C17.474 7.53741 17.9972 7.96679 18.3653 8.5177C18.7334 9.0686 18.9299 9.71629 18.9299 10.3789C18.9299 12.2289 17.4199 13.7289 15.5799 13.7289ZM15.5799 8.52886C14.5599 8.52886 13.7299 9.35886 13.7299 10.3789C13.7299 11.3989 14.5599 12.2289 15.5799 12.2289C16.5999 12.2289 17.4299 11.3989 17.4299 10.3789C17.4299 9.35886 16.5899 8.52886 15.5799 8.52886ZM8.41992 19.5789C8.00992 19.5789 7.66992 19.2389 7.66992 18.8289V16.8789C7.66992 16.4689 8.00992 16.1289 8.41992 16.1289C8.82992 16.1289 9.16992 16.4689 9.16992 16.8789V18.8289C9.16992 19.2389 8.83992 19.5789 8.41992 19.5789ZM8.41992 10.4789C8.00992 10.4789 7.66992 10.1389 7.66992 9.72886V5.82886C7.66992 5.41886 8.00992 5.07886 8.41992 5.07886C8.82992 5.07886 9.16992 5.41886 9.16992 5.82886V9.72886C9.16992 10.1389 8.83992 10.4789 8.41992 10.4789Z"
          fill="#CCCCCC"
        />
        <Path
          d="M8.42007 17.6309C7.98014 17.6309 7.54452 17.5443 7.13808 17.3759C6.73164 17.2076 6.36234 16.9608 6.05126 16.6497C5.74018 16.3386 5.49343 15.9693 5.32507 15.5629C5.15672 15.1565 5.07007 14.7208 5.07007 14.2809C5.07007 13.841 5.15672 13.4054 5.32507 12.9989C5.49343 12.5925 5.74018 12.2232 6.05126 11.9121C6.36234 11.601 6.73164 11.3543 7.13808 11.1859C7.54452 11.0176 7.98014 10.9309 8.42007 10.9309C9.30854 10.9309 10.1606 11.2839 10.7889 11.9121C11.4171 12.5403 11.7701 13.3924 11.7701 14.2809C11.7701 15.1694 11.4171 16.0215 10.7889 16.6497C10.1606 17.278 9.30854 17.6309 8.42007 17.6309ZM8.42007 12.4309C7.40007 12.4309 6.57007 13.2609 6.57007 14.2809C6.57007 15.3009 7.40007 16.1309 8.42007 16.1309C9.44007 16.1309 10.2701 15.3009 10.2701 14.2809C10.2701 13.2609 9.45007 12.4309 8.42007 12.4309Z"
          fill="#CCCCCC"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_65_449">
          <Rect
            width="24"
            height="26.1867"
            fill="white"
            transform="translate(0 0.328857)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function SearchIcon() {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M22.6564 21.5516L16.7564 15.6516C18.1742 13.9495 18.8812 11.7663 18.7303 9.55617C18.5795 7.34607 17.5823 5.27921 15.9464 3.78556C14.3104 2.29191 12.1616 1.48646 9.94695 1.53678C7.73227 1.58711 5.62226 2.48932 4.05584 4.05573C2.48942 5.62215 1.58721 7.73217 1.53689 9.94684C1.48657 12.1615 2.29201 14.3103 3.78566 15.9463C5.27932 17.5822 7.34618 18.5793 9.55628 18.7302C11.7664 18.8811 13.9496 18.1741 15.6517 16.7562L21.5517 22.6562L22.6564 21.5516ZM3.12511 10.1562C3.12511 8.7656 3.53748 7.40618 4.31009 6.2499C5.08269 5.09361 6.18082 4.1924 7.46561 3.66022C8.75041 3.12804 10.1642 2.9888 11.5281 3.2601C12.892 3.5314 14.1449 4.20107 15.1282 5.1844C16.1115 6.16774 16.7812 7.42059 17.0525 8.78452C17.3238 10.1484 17.1846 11.5622 16.6524 12.847C16.1202 14.1318 15.219 15.2299 14.0627 16.0025C12.9064 16.7751 11.547 17.1875 10.1564 17.1875C8.29219 17.1854 6.50496 16.444 5.18679 15.1258C3.86863 13.8076 3.12717 12.0204 3.12511 10.1562Z"
        fill="#8692A6"
      />
    </Svg>
  );
}

function ArrowRight() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 320 512">
      <Path fill="#4A3AFF" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </Svg>
  );
}

function ArrowLeft() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={30} height={30}>
      <Path fill="#4A3AFF" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
    </Svg>
  );
}

function ClearIcon() {
  return(
    <Svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 512 512">
      <Path fill="#C3C6D1" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
    </Svg>
  )
}

function HistoryIcon() {
  return(
    <Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 512 512">
      <Path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"/>
    </Svg>
  )
}
export {
  EyeIcon,
  GoogleIcon,
  FacebookIcon,
  AppleIcon,
  HomeIcon,
  ExamIcon,
  ReportsIcon,
  SettingsIcon,
  SearchIcon,
  ArrowLeft,
  ArrowRight,
  ClearIcon,
  HistoryIcon
};

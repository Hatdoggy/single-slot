import { useEffect, useState } from "react";
import spin, { drop, init } from "./func";

export const Machine = (props) => {
  const { upd, ctr, info } = props;

  useEffect(() => {
    init();
  }, []);
  const [click, setClick] = useState(true);
  const clicked = () => {
    if (ctr === 1 && click) {
      setClick(false);
      spin(ctr);
      drop();
      setTimeout(() => {
        upd({
          ...info,
          pop: true,
        });
      }, 4000);
    }
  };

  return (
<svg className="w-30 fade pos-abs" viewBox="0 0 557 851" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="machine">
      <path id="Vector" d="M387 214.6V786.38H412.32C491.9 786.38 556.42 757.23 556.42 721.27V279.71C556.42 243.71 491.9 214.6 412.32 214.6H387Z" fill="#0071CE" />
      <path id="Vector_2" d="M472 260C473.359 260 474.504 259.277 474.653 258.348L476 242.8C476 241.26 474.221 240 472 240C469.768 240 468 241.26 468 242.8L469.359 258.348C469.502 259.277 470.641 260 472 260Z" fill="#FFC220" />
      <path id="Vector_3" d="M463.5 265.311C464.201 264.007 464.161 262.56 463.404 261.914L450.314 252.295C448.953 251.46 446.915 252.454 445.749 254.56C444.585 256.663 444.821 259.023 446.155 259.841L460.647 266.902C461.574 267.267 462.787 266.589 463.5 265.298" fill="#FFC220" />
      <path id="Vector_4" d="M480.482 265.288C481.224 266.578 482.438 267.256 483.342 266.91L497.848 259.833C499.196 258.999 499.398 256.663 498.258 254.561C497.094 252.456 495.041 251.469 493.682 252.286L480.576 261.892C479.849 262.547 479.796 264.001 480.498 265.301" fill="#FFC220" />
      <path id="Vector_5" d="M472 280C473.359 280 474.504 280.723 474.653 281.653L476 297.211C476 298.751 474.221 300 472 300C469.768 300 468 298.751 468 297.211L469.359 281.653C469.502 280.723 470.641 280 472 280Z" fill="#FFC220" />
      <path id="Vector_6" d="M480.482 274.712C481.224 273.418 482.438 272.727 483.342 273.102L497.848 280.168C499.196 280.986 499.398 283.343 498.258 285.449C497.094 287.538 495.041 288.532 493.682 287.714L480.576 278.092C479.849 277.443 479.796 275.996 480.498 274.712" fill="#FFC220" />
      <path id="Vector_7" d="M463.5 274.698C464.201 275.999 464.161 277.444 463.404 278.096L450.314 287.705C448.953 288.54 446.915 287.542 445.749 285.452C444.585 283.349 444.821 280.988 446.155 280.17L460.647 273.101C461.574 272.729 462.787 273.414 463.5 274.698Z" fill="#FFC220" />
      <path id="Vector 2" opacity="0.25" d="M395.581 761.24H387.191V242.66C389.531 248.88 392.391 253.4 395.581 255.49V761.24Z" fill="white" />
      <path id="Vector 3" opacity="0.25" d="M544 276.33V292.89C544 262.24 489 237.39 421.19 237.39H399.57V220.84H421.14C488.94 220.84 544 245.67 544 276.33Z" fill="#F7F9FF" />
      <path id="Vector 4" opacity="0.25" d="M556.44 696.13V721.27C556.44 757.27 491.92 786.38 412.34 786.38H387V761.24H412.32C491.92 761.24 556.44 732.1 556.44 696.13Z" fill="#181818" />
      <path id="Vector 5" opacity="0.25" d="M556.44 696.13V721.27C556.44 757.27 491.92 786.38 412.34 786.38H387V761.24H412.32C491.92 761.24 556.44 732.1 556.44 696.13Z" fill="#181818" />
      <path id="Vector 6" opacity="0.25" d="M541.69 311.48C544.83 311.48 547.37 309.42 547.37 306.88C547.37 304.34 544.83 302.29 541.69 302.29C538.55 302.29 536.02 304.35 536.02 306.88C536.02 309.41 538.56 311.48 541.69 311.48Z" fill="#F7F9FF" />
      <path id="dropHeight" d="M478.391 313.38H468.801V687.58H478.391V313.38Z" fill="#005397" />
      <g id="pull" className="hov trans" onClick={ctr === 1 ? clicked : undefined}>
        <path id="Vector 7" d="M544.71 332.31V365.14C544.72 365.303 544.72 365.467 544.71 365.63V366.47C544.37 371.369 542.179 375.955 538.582 379.297C534.985 382.64 530.251 384.489 525.34 384.47H427.34C422.455 384.482 417.746 382.645 414.158 379.328C410.571 376.012 408.371 371.461 408 366.59C408 366.18 408 365.76 408 365.35V332.35C408.004 329.803 408.51 327.282 409.489 324.931C410.467 322.58 411.9 320.445 413.705 318.648C415.509 316.851 417.65 315.427 420.005 314.458C422.36 313.489 424.883 312.993 427.43 313H525.32C530.449 313.005 535.367 315.04 539 318.66C542.633 322.28 544.686 327.191 544.71 332.32V332.31Z" fill="#51678D" />
        <path id="Vector 8" d="M542.269 329.76V361.5C542.289 361.656 542.289 361.814 542.269 361.97V362.79C541.929 367.503 539.822 371.913 536.37 375.14C532.917 378.366 528.374 380.17 523.649 380.19H429.429C424.724 380.17 420.198 378.382 416.749 375.181C413.3 371.98 411.18 367.601 410.809 362.91C410.809 362.51 410.809 362.11 410.809 361.71V329.76C410.806 327.296 411.29 324.855 412.232 322.578C413.174 320.301 414.555 318.231 416.298 316.489C418.04 314.746 420.11 313.365 422.387 312.423C424.664 311.481 427.105 310.997 429.569 311H523.569C528.536 311.013 533.295 312.996 536.802 316.512C540.309 320.029 542.279 324.793 542.279 329.76H542.269Z" fill="#FFC220" />
        <path id="Vector 9" d="M533.322 319.32C531.073 317.122 528.047 315.9 524.902 315.92H428.112C426.537 315.888 424.971 316.163 423.502 316.73C421.29 317.59 419.382 319.086 418.021 321.03C416.659 322.973 415.904 325.277 415.852 327.65V365.16C415.863 366.176 416.014 367.186 416.302 368.16C416.835 369.986 417.795 371.658 419.102 373.04C420.243 374.259 421.625 375.227 423.161 375.881C424.697 376.535 426.353 376.862 428.022 376.84H524.802C527.434 376.853 530 376.011 532.112 374.44C532.723 373.992 533.286 373.483 533.792 372.92C535.064 371.561 536.002 369.924 536.532 368.14C536.811 367.165 536.953 366.155 536.952 365.14V327.65C536.881 324.505 535.577 321.513 533.322 319.32ZM534.532 362.7C534.527 364.411 534.137 366.099 533.392 367.64C532.647 369.193 531.564 370.56 530.222 371.64C527.992 373.424 525.218 374.391 522.362 374.38H430.622C427.728 374.383 424.921 373.39 422.672 371.57C421.34 370.501 420.264 369.148 419.522 367.61C418.78 366.072 418.39 364.388 418.382 362.68V330.06C418.419 327.667 419.187 325.342 420.583 323.397C421.979 321.452 423.936 319.981 426.192 319.18C427.596 318.671 429.078 318.411 430.572 318.41H522.322C523.803 318.41 525.272 318.67 526.662 319.18C528.938 319.972 530.915 321.446 532.324 323.402C533.732 325.357 534.503 327.7 534.532 330.11V362.7Z" fill="#51678D" />
        <path id="Vector 10" opacity="0.3" d="M539.499 326.26V329.15C539.575 325.705 538.28 322.371 535.899 319.88C534.721 318.645 533.311 317.656 531.749 316.97C530.187 316.283 528.505 315.913 526.799 315.88H426.209C424.502 315.915 422.818 316.286 421.254 316.972C419.69 317.658 418.277 318.645 417.095 319.878C415.913 321.11 414.985 322.563 414.365 324.154C413.744 325.745 413.443 327.443 413.479 329.15V326.26C413.409 322.814 414.711 319.481 417.098 316.994C419.486 314.508 422.763 313.071 426.209 313H526.799C530.242 313.079 533.513 314.52 535.894 317.008C538.275 319.496 539.571 322.827 539.499 326.27V326.26Z" fill="#F7F9FF" />
        <path id="Vector 11" opacity="0.15" d="M541.929 363.18C541.586 367.891 539.478 372.299 536.026 375.523C532.574 378.747 528.033 380.55 523.309 380.57H429.179C424.474 380.55 419.948 378.762 416.499 375.561C413.05 372.36 410.93 367.981 410.559 363.29C410.85 365.726 411.957 367.992 413.699 369.72C415.505 371.57 417.813 372.849 420.339 373.4C421.457 373.684 422.606 373.825 423.759 373.82H528.759C529.911 373.822 531.059 373.688 532.179 373.42C534.717 372.864 537.034 371.569 538.839 369.7C540.574 367.933 541.672 365.639 541.959 363.18H541.929Z" fill="#212121" />
        <path id="Vector 12" d="M443.612 356.77C442.205 356.441 440.87 355.859 439.672 355.05L441.672 350.65C442.702 351.298 443.816 351.803 444.982 352.15C446.178 352.533 447.426 352.729 448.682 352.73C451.032 352.73 452.132 352.15 452.132 351C452.125 350.698 452.027 350.406 451.852 350.16C451.675 349.917 451.427 349.735 451.142 349.64C450.116 349.247 449.059 348.94 447.982 348.72C446.624 348.448 445.288 348.08 443.982 347.62C442.922 347.231 441.978 346.577 441.242 345.72C440.425 344.74 440.013 343.484 440.092 342.21C440.078 340.957 440.444 339.73 441.142 338.69C441.936 337.578 443.038 336.723 444.312 336.23C445.957 335.571 447.721 335.258 449.492 335.31C450.872 335.316 452.247 335.474 453.592 335.78C454.852 336.061 456.062 336.529 457.182 337.17L455.332 341.62C453.52 340.597 451.482 340.04 449.402 340C448.502 339.937 447.602 340.124 446.802 340.54C446.556 340.679 446.35 340.879 446.202 341.12C446.06 341.363 445.984 341.639 445.982 341.92C445.989 342.205 446.083 342.481 446.252 342.71C446.43 342.935 446.67 343.102 446.942 343.19C447.96 343.581 449.011 343.878 450.082 344.08C451.442 344.341 452.78 344.709 454.082 345.18C455.142 345.577 456.091 346.222 456.852 347.06C457.676 348.037 458.095 349.293 458.022 350.57C458.039 351.79 457.683 352.987 457.002 354C456.186 355.071 455.078 355.883 453.812 356.34C452.189 357.015 450.439 357.336 448.682 357.28C447 357.324 445.32 357.153 443.682 356.77H443.612Z" fill="white" />
        <path id="Vector 13" d="M478.759 339.44C478.639 339.26 478.519 339.09 478.389 338.92C477.63 337.946 476.635 337.182 475.499 336.7C473.92 336.022 472.217 335.681 470.499 335.7H460.789V357H466.789V351.44H470.449C472.168 351.472 473.874 351.131 475.449 350.44C476.582 349.962 477.576 349.205 478.339 348.24C478.471 348.08 478.595 347.913 478.709 347.74C479.472 346.487 479.876 345.047 479.876 343.58C479.876 342.113 479.472 340.673 478.709 339.42L478.759 339.44ZM473.649 344.82C473.489 345.227 473.239 345.592 472.919 345.89C472.114 346.443 471.142 346.698 470.169 346.61H466.819V340.38H470.129C471.127 340.311 472.117 340.602 472.919 341.2C473.242 341.496 473.491 341.862 473.649 342.27C473.808 342.674 473.88 343.107 473.859 343.54C473.891 343.977 473.819 344.416 473.649 344.82Z" fill="white" />
        <path id="Vector 14" d="M482.84 335.73H488.84V357H482.84V335.73Z" fill="white" />
        <path id="Vector 15" d="M513.312 335.73V357H508.372L499.002 345.65V357H493.102V335.73H498.052L507.432 347.06V335.73H513.312Z" fill="white" />
      </g>
      <path id="Vector_2_2" d="M387.47 214.6C383.454 196.533 373.398 180.375 358.96 168.793C344.523 157.212 326.568 150.9 308.06 150.9H81.34C59.769 150.9 39.0814 159.468 23.8275 174.72C8.57355 189.972 0.00265195 210.659 0 232.23V768.77C0.00265195 790.341 8.57355 811.028 23.8275 826.28C39.0814 841.532 59.769 850.1 81.34 850.1H308.06C318.744 850.113 329.326 848.018 339.199 843.936C349.073 839.853 358.044 833.863 365.598 826.308C373.153 818.754 379.143 809.783 383.226 799.909C387.308 790.036 389.403 779.454 389.39 768.77V232.23C389.395 226.301 388.751 220.389 387.47 214.6ZM343.65 757.94C343.65 787.29 320.86 811.04 292.72 811.04H96.72C68.58 811.04 45.79 787.29 45.79 757.94V510.39L60.49 495.69L45.79 481V245.36C45.79 216.03 68.6 192.26 96.72 192.26H292.72C320.86 192.26 343.65 216.03 343.65 245.36V757.94Z" fill="#0071CE" />
      <path id="Vector 17" opacity="0.2" d="M351.562 214.79C347.403 204.722 340.348 196.116 331.291 190.063C322.235 184.01 311.585 180.783 300.692 180.79H88.7419C81.5092 180.79 74.3473 182.215 67.6653 184.983C60.9832 187.751 54.9119 191.808 49.798 196.923C44.6842 202.038 40.628 208.11 37.861 214.793C35.0941 221.475 33.6706 228.637 33.6719 235.87V767.43C33.6706 774.663 35.0941 781.825 37.861 788.507C40.628 795.19 44.6842 801.262 49.798 806.377C54.9119 811.492 60.9832 815.549 67.6653 818.317C74.3473 821.085 81.5092 822.51 88.7419 822.51H300.742C307.974 822.509 315.135 821.083 321.816 818.314C328.497 815.545 334.567 811.488 339.679 806.373C344.792 801.259 348.848 795.187 351.614 788.505C354.38 781.823 355.803 774.662 355.802 767.43V235.87C355.789 228.633 354.349 221.469 351.562 214.79ZM343.652 757.94C343.652 787.29 320.862 811.04 292.722 811.04H96.7219C68.5819 811.04 45.7919 787.29 45.7919 757.94V245.36C45.7919 216.03 68.6019 192.26 96.7219 192.26H292.722C320.862 192.26 343.652 216.03 343.652 245.36V757.94Z" fill="white" />
      <g id="spinCont">
        <path id="glass" opacity="0.5" d="M355.752 235.87V767.43C355.753 774.662 354.33 781.823 351.564 788.505C348.798 795.187 344.742 801.259 339.63 806.373C334.517 811.488 328.447 815.545 321.766 818.314C315.085 821.083 307.924 822.509 300.692 822.51H88.7419C81.5092 822.51 74.3473 821.085 67.6653 818.317C60.9832 815.549 54.9119 811.492 49.798 806.377C44.6842 801.262 40.628 795.19 37.861 788.507C35.0941 781.825 33.6706 774.663 33.6719 767.43V235.87C33.6706 228.637 35.0941 221.475 37.861 214.793C40.628 208.11 44.6842 202.038 49.798 196.923C54.9119 191.808 60.9832 187.751 67.6653 184.983C74.3473 182.215 81.5092 180.79 88.7419 180.79H300.742C307.974 180.791 315.135 182.217 321.816 184.986C328.497 187.755 334.567 191.812 339.679 196.927C344.792 202.041 348.848 208.113 351.614 214.795C354.38 221.477 355.803 228.638 355.802 235.87H355.752Z" fill="#CBFCFF" />
        <g className=" h-30 w-30 door ovr-hide trans flx">
            <g className="boxes"></g>
        </g>
        <path id="Vector 18" opacity="0.5" d="M355.752 270.78V331.1L253.332 180.79H294.442L355.752 270.78Z" fill="#F7F9FF" />
        <path id="Vector 19" opacity="0.5" d="M157.791 820.16H116.691L33.6914 698.34V638L157.791 820.16Z" fill="#F7F9FF" />
        <path id="Vector 20" opacity="0.5" d="M355.75 349.65V375.49L223.07 180.79H240.67L355.75 349.65Z" fill="#F7F9FF" />
        <path id="Vector 21" opacity="0.5" d="M89.7319 657.87V683.71L33.6719 601.43V575.6L89.7319 657.87Z" fill="#F7F9FF" />
      </g>
      <g id="pointer">
        <path id="Vector_3_2" d="M60.49 495.69L0 556.18V435.2L60.49 495.69Z" fill="#FFC220" />
        <path id="Vector_4_2" opacity="0.45" d="M60.49 495.69L0 556.18V549.78L33.67 519.67L45.79 508.83L60.49 495.69Z" fill="#AD5A1E" />
        <path id="Vector 24" opacity="0.45" d="M54.5614 492.75L55.3414 491.97L6.72141 443.35L5.94141 444.13L54.5614 492.75Z" fill="#F7F9FF" />
      </g>
      <path id="Vector 25" d="M330.608 0H58.7981C55.6897 0 52.7087 1.23478 50.5108 3.43271C48.3128 5.63063 47.0781 8.61166 47.0781 11.72V112.8C47.0781 115.908 48.3128 118.889 50.5108 121.087C52.7087 123.285 55.6897 124.52 58.7981 124.52H330.608C333.716 124.52 336.697 123.285 338.895 121.087C341.093 118.889 342.328 115.908 342.328 112.8V11.72C342.328 8.61166 341.093 5.63063 338.895 3.43271C336.697 1.23478 333.716 0 330.608 0Z" fill="#FFC220" />
      <g id="Vector 34" filter="url(#filter0_i_420_1954)">
        <path d="M335.281 19.41V105.13C335.278 108.238 334.043 111.219 331.846 113.418C329.649 115.617 326.669 116.855 323.561 116.86H65.8411C62.7318 116.857 59.7508 115.62 57.5532 113.421C55.3556 111.221 54.1211 108.239 54.1211 105.13V19.41C54.1198 17.6728 54.506 15.9572 55.2516 14.3882C55.9972 12.8191 57.0834 11.4362 58.4311 10.34C59.2597 9.64958 60.1822 9.08055 61.1711 8.65002C62.6512 8.00453 64.2464 7.66441 65.8611 7.65002H323.561C326.669 7.65267 329.648 8.8883 331.845 11.0856C334.043 13.283 335.278 16.2625 335.281 19.37V19.41Z" fill="#FFC220" />
      </g>
      <path id="Vector 26" d="M109.8 124.52H99V150.9H109.8V124.52Z" fill="#51678D" />
      <path id="Vector 27" d="M294.79 124.52H284V150.9H294.79V124.52Z" fill="#51678D" />
      <g id="blink">
        <path id="Vector 28" d="M77.4881 81.8001C74.8508 81.1773 72.343 80.0977 70.0781 78.6101L73.7881 70.34C77.7337 72.82 82.2788 74.1819 86.9381 74.2801C91.2781 74.2801 93.4281 73.1801 93.4281 71.0201C93.4242 70.4576 93.2435 69.9105 92.9115 69.4565C92.5794 69.0024 92.1129 68.6643 91.5781 68.4901C89.635 67.7291 87.6267 67.1467 85.5781 66.7501C83.029 66.2296 80.5195 65.5312 78.0681 64.6601C76.0451 63.8951 74.2539 62.6206 72.8681 60.9601C71.3499 59.1027 70.5796 56.7456 70.7081 54.3501C70.6835 52.0066 71.3819 49.7125 72.7081 47.7801C74.2073 45.6645 76.2931 44.0342 78.7081 43.0901C81.7962 41.871 85.0992 41.2893 88.4181 41.3801C91.0291 41.3797 93.6319 41.6716 96.1781 42.2501C98.5365 42.783 100.804 43.659 102.908 44.8501L99.4081 53.3601C96.0495 51.4482 92.2713 50.3938 88.4081 50.2901C86.7133 50.1571 85.0152 50.5037 83.5081 51.2901C83.0462 51.5453 82.6599 51.9179 82.3881 52.3701C82.1122 52.8222 81.9637 53.3405 81.9581 53.8701C81.9819 54.402 82.1709 54.9133 82.4989 55.3327C82.8269 55.7521 83.2776 56.0588 83.7881 56.2101C85.686 56.9453 87.6476 57.5043 89.6481 57.8801C92.1975 58.4118 94.7069 59.1202 97.1581 60.0001C99.1478 60.7395 100.926 61.9549 102.338 63.5401C103.889 65.3742 104.679 67.7319 104.548 70.1301C104.573 72.4489 103.874 74.7177 102.548 76.6201C101.029 78.7168 98.9495 80.3424 96.5481 81.3101C93.4746 82.5176 90.189 83.0924 86.8881 83.0001C83.7158 83.0115 80.5557 82.6081 77.4881 81.8001Z" fill="white" />
        <path id="Vector 29" d="M143.517 49.29C142.014 47.0001 139.877 45.1968 137.367 44.1C134.4 42.8254 131.196 42.1949 127.967 42.25H109.727V82.11H120.997V71.67H127.997C131.215 71.7489 134.412 71.1422 137.377 69.89C139.254 69.0732 140.931 67.8561 142.289 66.3239C143.647 64.7917 144.654 62.9814 145.24 61.0195C145.826 59.0576 145.976 56.9914 145.68 54.9654C145.384 52.9394 144.649 51.0024 143.527 49.29H143.517ZM133.887 59.43C133.59 60.1932 133.121 60.8777 132.517 61.43C131.015 62.5552 129.16 63.1051 127.287 62.98H120.997V51.21H127.277C129.146 51.0709 131.003 51.6106 132.507 52.73C133.1 53.2806 133.565 53.9546 133.869 54.7045C134.173 55.4544 134.309 56.2619 134.267 57.07C134.316 57.8751 134.186 58.6811 133.887 59.43Z" fill="white" />
        <path id="Vector 30" d="M151.156 42.3201H162.436V82.1801H151.156V42.3201Z" fill="white" />
        <path id="Vector 31" d="M208.409 42.3201V82.1801H198.999L181.519 61.0001V82.2301H170.449V42.3701H179.829L197.419 63.6101V42.3201H208.409Z" fill="white" />
        <path id="Vector 32" d="M269 82.2V61.1L258.73 78.31H253.73L243.53 61.69V82.25H233V42.39H242.38L256.45 65.39L270.12 42.39H279.49V82.25L269 82.2Z" fill="white" />
        <path id="Vector 33" d="M319.34 73.4801V82.2001H287.34V42.3401H318.62V51.0701H298.49V57.7701H316.22V66.2101H298.49V73.5001L319.34 73.4801Z" fill="white" />
      </g>
      <path id="Vector 35" opacity="0.5" d="M342 39.4854V45L307 0H311.306L342 39.4854Z" fill="#F7F9FF" />
      <path id="Vector 36" opacity="0.5" d="M88 124V123.488L47 82V88.6437L81.8881 124H88Z" fill="#F7F9FF" />
      <path id="Vector 37" opacity="0.5" d="M342 59.9828V86L272 0H293.145L342 59.9828Z" fill="#F7F9FF" />
    </g>
  <defs>
    <filter id="filter0_i_420_1954" x="54.1211" y="7.65002" width="281.16" height="109.21" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset />
      <feGaussianBlur stdDeviation="7.5" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_420_1954" />
    </filter>
  </defs>
</svg>
  );
};

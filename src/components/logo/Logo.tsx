'use client'

import {useRouter} from "next/navigation";

interface LogoProps {
    size?: string;
}

export const Logo = ({size = "50pt"}: LogoProps) => {

    const route = useRouter()

    return (
        <div className="hover:cursor-pointer" onClick={() => route.push("/")}>
            <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 2862.000000 1882.000000"
                preserveAspectRatio="xMidYMid meet"
            >
                <g
                    transform="translate(0.000000,1882.000000) scale(0.100000,-0.100000)"
                    className="fill-primary_blue"
                    stroke="none"
                >
                    <path
                        d="M8935 18805 c-510 -71 -933 -414 -1103 -897 -71 -200 -94 -475 -57
                            -683 87 -492 444 -904 916 -1058 153 -50 232 -62 424 -62 246 0 390 32 600
                            134 324 158 573 444 690 794 83 247 88 561 14 810 -190 641 -827 1054 -1484
                            962z"
                    />
                    <path
                        d="M11930 18810 c-289 -34 -452 -163 -527 -415 -17 -57 -18 -198 -21
                            -2722 -1 -1465 0 -2663 3 -2663 3 0 47 29 98 63 367 252 755 406 1129 446 510
                            56 1055 -100 1569 -450 47 -33 89 -59 92 -59 4 0 7 694 7 1542 l0 1541 173 -6
                            c1174 -42 2277 -628 2969 -1577 382 -525 615 -1131 700 -1820 21 -168 17 -722
                            -5 -890 -44 -323 -118 -625 -223 -897 -474 -1239 -1553 -2149 -2847 -2402
                            -354 -69 -201 -65 -2499 -68 l-2078 -4 0 3696 c0 2032 -3 3695 -7 3695 -5 0
                            -55 -16 -113 -36 -760 -255 -1597 -255 -2462 1 -65 19 -122 35 -128 35 -14 0
                            -14 -9426 0 -9560 6 -52 17 -121 25 -153 58 -228 221 -350 519 -387 111 -14
                            6171 -14 6396 0 1643 102 3160 796 4301 1967 971 998 1591 2248 1793 3618 54
                            366 61 478 61 960 -1 480 -7 586 -60 950 -351 2429 -2055 4471 -4387 5260
                            -569 192 -1142 301 -1768 335 -214 12 -2610 11 -2710 0z"
                    />
                    <path
                        d="M12570 12850 c-640 -117 -1126 -629 -1211 -1275 -16 -123 -6 -363 21
                            -487 124 -583 585 -1036 1169 -1148 387 -74 776 6 1111 229 106 71 273 230
                            356 340 260 348 353 810 248 1237 -66 271 -191 490 -394 694 -203 203 -459
                            341 -750 405 -121 27 -419 29 -550 5z"
                    />
                    <path
                        d="M422 4930 c-95 -25 -162 -62 -236 -130 -125 -115 -181 -244 -180
                            -415 1 -167 47 -268 178 -393 121 -115 244 -162 422 -163 232 -1 421 100 532
                            282 64 105 89 283 58 413 -48 203 -217 368 -424 411 -96 21 -260 18 -350 -5z"
                    />
                    <path
                        d="M24330 4693 c-269 -94 -334 -453 -118 -649 136 -123 357 -115 485 18
                            96 99 129 260 83 409 -19 63 -30 81 -83 134 -78 77 -144 105 -250 105 -40 -1
                            -92 -8 -117 -17z"
                    />
                    <path
                        d="M1752 2208 l3 -2143 870 0 c658 0 898 3 985 13 446 52 811 190 1125
                            425 102 77 283 258 360 362 210 281 339 609 391 995 21 152 24 518 5 665 -35
                            281 -102 510 -216 740 -294 592 -891 985 -1625 1069 -112 13 -286 16 -1018 16
                            l-882 0 2 -2142z m1758 1237 c474 -71 803 -364 915 -813 36 -144 47 -248 47
                            -432 -1 -409 -104 -694 -334 -916 -134 -130 -254 -201 -436 -258 -154 -48
                            -242 -58 -599 -63 l-333 -5 0 1251 0 1251 323 0 c230 0 349 -4 417 -15z"
                    />
                    <path d="M100 1765 l0 -1705 505 0 505 0 0 1705 0 1705 -505 0 -505 0 0 -1705z"/>
                    <path
                        d="M11050 3464 c-359 -54 -625 -201 -810 -445 l-60 -80 0 235 0 236
                            -275 0 -275 0 2 -1672 3 -1673 272 -3 272 -2 4 1047 c3 1040 3 1049 25 1146
                            52 226 125 364 267 502 124 121 236 180 409 216 117 24 335 26 443 3 225 -46
                            407 -167 527 -347 76 -115 100 -176 148 -375 8 -33 13 -367 17 -1117 l6 -1070
                            268 -3 268 -2 -4 1112 c-3 1089 -4 1115 -25 1225 -59 306 -172 534 -357 718
                            -185 185 -418 298 -698 339 -94 15 -357 20 -427 10z"
                    />
                    <path
                        d="M18351 3454 c-165 -28 -362 -107 -496 -197 -80 -54 -195 -166 -259
                            -251 l-51 -69 -3 236 -2 237 -270 0 -270 0 0 -1675 0 -1675 269 0 269 0 5
                            1023 c3 680 9 1044 16 1087 47 273 115 416 276 576 91 91 112 107 206 152 159
                            77 210 87 434 87 219 0 273 -10 420 -79 280 -132 444 -386 485 -751 6 -55 10
                            -484 10 -1093 l0 -1002 268 2 267 3 3 960 c3 963 -3 1209 -32 1375 -53 298
                            -175 540 -367 725 -175 168 -350 260 -603 317 -123 27 -451 34 -575 12z"
                    />
                    <path
                        d="M7240 3449 c-258 -33 -491 -118 -695 -253 -122 -81 -292 -252 -377
                            -381 -207 -310 -298 -639 -298 -1070 0 -371 59 -628 211 -911 167 -313 369
                            -511 674 -659 231 -112 438 -156 736 -156 375 1 653 79 920 263 190 129 357
                            319 461 523 50 99 108 246 108 274 0 8 -88 11 -289 11 l-289 0 -41 -87 c-57
                            -118 -113 -194 -216 -291 -142 -134 -300 -200 -539 -222 -456 -44 -873 167
                            -1058 535 -58 115 -106 288 -123 443 l-7 62 1306 0 c1235 0 1307 1 1314 18 4
                            9 7 139 7 287 0 242 -2 282 -23 383 -97 479 -372 865 -761 1065 -168 87 -318
                            134 -514 162 -111 16 -398 18 -507 4z m522 -492 c227 -60 428 -191 544 -354
                            107 -148 183 -388 184 -575 l0 -48 -1031 0 -1031 0 7 53 c19 150 63 303 118
                            412 112 224 321 410 547 489 139 49 191 56 385 52 155 -3 194 -7 277 -29z"
                    />
                    <path
                        d="M21802 3445 c-731 -111 -1227 -662 -1312 -1457 -13 -123 -13 -375 0
                            -493 81 -739 502 -1262 1150 -1430 181 -47 506 -60 717 -30 605 88 1030 459
                            1206 1053 l16 52 -293 0 -292 0 -18 -57 c-67 -219 -217 -396 -421 -497 -270
                            -135 -661 -137 -931 -6 -366 177 -559 528 -589 1070 -8 128 7 349 31 467 92
                            461 332 734 744 849 53 15 102 19 265 19 188 0 206 -2 300 -28 55 -15 143 -49
                            195 -74 79 -39 110 -62 186 -138 102 -101 160 -190 210 -324 l33 -86 288 0
                            288 0 -3 25 c-2 14 -20 72 -39 129 -141 424 -443 734 -857 880 -176 62 -306
                            82 -556 86 -160 3 -252 0 -318 -10z"
                    />
                    <path
                        d="M26597 3445 c-312 -51 -575 -178 -790 -384 -274 -262 -450 -635 -496
                            -1053 -14 -122 -14 -385 -1 -503 46 -412 206 -771 466 -1044 309 -325 691
                            -467 1189 -439 351 19 648 152 900 403 49 50 116 128 148 175 l57 84 0 -312 0
                            -312 270 0 270 0 0 1675 0 1675 -270 0 -270 0 -2 -300 -3 -300 -52 77 c-180
                            271 -479 467 -826 544 -123 27 -460 35 -590 14z m589 -484 c391 -81 714 -389
                            825 -786 90 -326 69 -730 -54 -1013 -73 -168 -212 -349 -347 -451 -380 -286
                            -932 -289 -1299 -6 -124 95 -266 277 -336 429 -85 185 -119 358 -119 616 0
                            386 84 634 303 888 134 155 343 276 561 322 120 26 344 26 466 1z"
                    />
                    <path
                        d="M13290 2356 c0 -1141 2 -1181 55 -1383 100 -378 336 -680 639 -818
                            202 -92 406 -135 638 -136 162 0 239 10 375 47 258 69 485 222 624 418 l49 69
                            0 -246 0 -247 270 0 270 0 0 1675 0 1675 -270 0 -269 0 -3 -1022 c-4 -1130 -3
                            -1100 -69 -1303 -101 -305 -331 -508 -644 -568 -247 -48 -471 -21 -669 80 -76
                            39 -108 64 -191 147 -109 110 -161 194 -209 336 -61 184 -60 158 -63 1293 l-4
                            1037 -265 0 -264 0 0 -1054z"
                    />
                    <path
                        d="M24170 1735 l0 -1675 270 0 270 0 0 1675 0 1675 -270 0 -270 0 0 -1675z"
                    />
                </g>
            </svg>
        </div>
    );
};
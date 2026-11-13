/* 현대자동차·제네시스 가격 데이터 — 견적 계산기(quote.html)용
   가격 정리일: 2026-11-13 · 출처: 차종별 source 참고
   가격이 바뀌면 이 파일의 price 숫자만 고치면 됩니다. */
window.PRICE_UPDATED = "2026-11-13";
window.CARS = [
 {
  "id": "casper",
  "name": "캐스퍼",
  "category": "경차",
  "year": "2027년형",
  "taxNote": "경차(개별소비세 면제), 부가세 포함 판매가 · 2026.7 가격표",
  "source": "https://www.hyundaimotorgroup.com/ko/news/hyundai-motor-company-casper-electric-2027 ; https://www.cardong.co.kr/newcar/vehicle/11716",
  "sourceDate": "2026-07-15",
  "trims": [
   {
    "id": "t1",
    "name": "스마트",
    "powertrain": "1.0 가솔린 2WD",
    "price": 15460000
   },
   {
    "id": "t2",
    "name": "디 에센셜",
    "powertrain": "1.0 가솔린 2WD",
    "price": 17920000
   },
   {
    "id": "t3",
    "name": "인스퍼레이션",
    "powertrain": "1.0 가솔린 2WD",
    "price": 20350000
   },
   {
    "id": "t4",
    "name": "스마트 + 캐스퍼 액티브Ⅰ",
    "powertrain": "1.0 터보 가솔린 2WD",
    "price": 16410000
   },
   {
    "id": "t5",
    "name": "디 에센셜 + 캐스퍼 액티브Ⅰ",
    "powertrain": "1.0 터보 가솔린 2WD",
    "price": 18870000
   },
   {
    "id": "t6",
    "name": "인스퍼레이션 + 캐스퍼 액티브Ⅱ",
    "powertrain": "1.0 터보 가솔린 2WD",
    "price": 21250000
   },
   {
    "id": "t7",
    "name": "밴 스마트",
    "powertrain": "1.0 가솔린 2WD",
    "price": 14700000
   },
   {
    "id": "t8",
    "name": "밴 스마트 초이스",
    "powertrain": "1.0 가솔린 2WD",
    "price": 15700000
   },
   {
    "id": "t9",
    "name": "밴 스마트 + 캐스퍼 액티브Ⅰ",
    "powertrain": "1.0 터보 가솔린 2WD",
    "price": 15650000
   },
   {
    "id": "t10",
    "name": "밴 스마트 초이스 + 캐스퍼 액티브Ⅰ",
    "powertrain": "1.0 터보 가솔린 2WD",
    "price": 16650000
   }
  ],
  "exterior": [
   {
    "name": "언블리치드 아이보리",
    "price": 0,
    "trims": null
   },
   {
    "name": "시에나 오렌지 메탈릭",
    "price": 0,
    "trims": null
   },
   {
    "name": "아틀라스 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "톰보이 카키",
    "price": 0,
    "trims": null
   },
   {
    "name": "비자림 카키 매트",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "다크 그레이/라이트 카키",
    "price": 0,
    "trims": null
   },
   {
    "name": "다크 그레이 원톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "베이지/오렌지 브라운 (실내 컬러 패키지)",
    "price": 0,
    "trims": [
     "t2",
     "t3",
     "t5",
     "t6"
    ]
   }
  ],
  "options": [
   {
    "name": "선루프",
    "price": 400000,
    "trims": [
     "t1",
     "t2",
     "t3",
     "t4",
     "t5",
     "t6"
    ],
    "desc": "선루프, A필라 블랙테이프"
   },
   {
    "name": "인포테인먼트 내비 플러스Ⅰ",
    "price": 900000,
    "trims": [
     "t1",
     "t4"
    ],
    "desc": "10.25인치 내비, 6스피커, 리어 와이퍼&와셔"
   },
   {
    "name": "17인치 알로이 휠 패키지",
    "price": 600000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "17인치 알로이 휠&타이어, 후륜 디스크 브레이크"
   },
   {
    "name": "17인치 알로이 휠 & 타이어",
    "price": 550000,
    "trims": [
     "t2",
     "t4",
     "t5"
    ],
    "desc": "17인치 알로이 휠&타이어 (디 에센셜은 액티브/스마트센스 조건)"
   },
   {
    "name": "현대 스마트센스Ⅰ",
    "price": 1100000,
    "trims": [
     "t2",
     "t5"
    ],
    "desc": "교차로 충돌방지, 후측방/후방교차 충돌방지, SCC 스탑앤고, HDA, EPB"
   },
   {
    "name": "익스테리어 디자인",
    "price": 700000,
    "trims": [
     "t2",
     "t5"
    ],
    "desc": "Full LED 프로젝션 헤드램프, LED 리어램프, LED 방향지시등 미러"
   },
   {
    "name": "컴포트Ⅰ",
    "price": 420000,
    "trims": [
     "t2",
     "t5"
    ],
    "desc": "1열 풀폴딩, 2열 슬라이딩·리클라이닝, 2열 USB-C"
   },
   {
    "name": "실내 컬러 패키지 (베이지/오렌지 브라운)",
    "price": 150000,
    "trims": [
     "t2",
     "t3",
     "t5",
     "t6"
    ],
    "desc": "베이지/오렌지 브라운 실내"
   },
   {
    "name": "[악세사리] 스토리지",
    "price": 110000,
    "trims": [
     "t2",
     "t3",
     "t5",
     "t6"
    ],
    "desc": "러기지 볼팅, 동승석 시트백 보드"
   },
   {
    "name": "[악세사리] 액티브 플러스",
    "price": 500000,
    "trims": [
     "t6"
    ],
    "desc": "17인치 다크그레이 휠, 리어 스포일러(유광 블랙)"
   },
   {
    "name": "베이직 플러스",
    "price": 380000,
    "trims": [
     "t7",
     "t9"
    ],
    "desc": "열선 가죽 스티어링, 하이패스, ECM 룸미러"
   },
   {
    "name": "컴포트Ⅱ",
    "price": 600000,
    "trims": [
     "t7",
     "t9"
    ],
    "desc": "인조가죽 시트, 1열 열선, 운전석 통풍, 센터사이드 에어백"
   },
   {
    "name": "인포테인먼트 내비 플러스Ⅱ",
    "price": 1300000,
    "trims": [
     "t7",
     "t9"
    ],
    "desc": "10.25인치 내비, 6스피커, 스마트키·원격시동, 리어와이퍼"
   },
   {
    "name": "하이패스",
    "price": 300000,
    "trims": [
     "t8",
     "t10"
    ],
    "desc": "하이패스, ECM 룸미러"
   },
   {
    "name": "인포테인먼트 내비Ⅱ",
    "price": 850000,
    "trims": [
     "t8",
     "t10"
    ],
    "desc": "10.25인치 내비, 6스피커, 리어 와이퍼&와셔"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "casper-ev",
  "name": "캐스퍼 일렉트릭",
  "category": "전기차",
  "year": "2027년형",
  "taxNote": "보조금 미반영, 세제혜택(친환경차 개소세 감면) 반영 가격 · 2026.7 실효세율 기준",
  "source": "https://www.hyundaimotorgroup.com/ko/news/hyundai-motor-company-casper-electric-2027 ; https://www.cardong.co.kr/newcar/vehicle/11689",
  "sourceDate": "2026-07-15",
  "trims": [
   {
    "id": "e1",
    "name": "프리미엄",
    "powertrain": "전기 42kWh 2WD",
    "price": 28469582
   },
   {
    "id": "e2",
    "name": "인스퍼레이션 (15인치)",
    "powertrain": "전기 49kWh 2WD",
    "price": 32119772
   },
   {
    "id": "e3",
    "name": "인스퍼레이션 + 익스테리어 디자인 (17인치)",
    "powertrain": "전기 49kWh 2WD",
    "price": 33260456
   },
   {
    "id": "e4",
    "name": "크로스",
    "powertrain": "전기 49kWh 2WD",
    "price": 34125475
   },
   {
    "id": "e5",
    "name": "라운지",
    "powertrain": "전기 49kWh 2WD",
    "price": 34572243
   }
  ],
  "exterior": [
   {
    "name": "더스크 블루 매트",
    "price": 0,
    "trims": null
   },
   {
    "name": "버터크림 옐로우 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "글로우 민트",
    "price": 0,
    "trims": null
   },
   {
    "name": "언블리치드 아이보리",
    "price": 0,
    "trims": null
   },
   {
    "name": "아마조나스 그린 매트",
    "price": 0,
    "trims": null
   },
   {
    "name": "시에나 오렌지 메탈릭",
    "price": 0,
    "trims": null
   },
   {
    "name": "에어로 실버 매트",
    "price": 0,
    "trims": null
   },
   {
    "name": "아틀라스 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "톰보이 카키",
    "price": 0,
    "trims": null
   },
   {
    "name": "비자림 카키 매트",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "다크 그레이/라이트 카키",
    "price": 0,
    "trims": null
   },
   {
    "name": "다크 그레이/아마조나스 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "다크 그레이/다크 오렌지",
    "price": 0,
    "trims": null
   },
   {
    "name": "다크 그레이 원톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "베이지/카키브라운 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "뉴트로 베이지 (실내 컬러 패키지)",
    "price": 0,
    "trims": [
     "e2",
     "e3"
    ]
   }
  ],
  "options": [
   {
    "name": "밴 패키지",
    "price": 400000,
    "trims": [
     "e1",
     "e2",
     "e3",
     "e4"
    ],
    "desc": "격벽, 러기지 박스·매트·프로텍터"
   },
   {
    "name": "현대 스마트센스Ⅰ",
    "price": 1000000,
    "trims": [
     "e1"
    ],
    "desc": "교차로 충돌방지, 후측방·후방교차 충돌방지, SCC 스탑앤고, HDA"
   },
   {
    "name": "선루프",
    "price": 400000,
    "trims": [
     "e2",
     "e3",
     "e4",
     "e5"
    ],
    "desc": "선루프, A필라 블랙테이프"
   },
   {
    "name": "컨비니언스",
    "price": 300000,
    "trims": [
     "e2",
     "e3",
     "e4"
    ],
    "desc": "실외 V2L, 러기지 LED, 인터랙티브 픽셀 라이트"
   },
   {
    "name": "컨비니언스 플러스",
    "price": 600000,
    "trims": [
     "e5"
    ],
    "desc": "무선충전, 디지털키2, 실외 V2L, 픽셀 라이트, 터치 도어핸들"
   },
   {
    "name": "컴포트",
    "price": 600000,
    "trims": [
     "e2",
     "e3",
     "e4"
    ],
    "desc": "1열 풀폴딩, 2열 슬라이딩·리클라이닝, 동승석 통풍·파워윈도우"
   },
   {
    "name": "컴포트 (라운지)",
    "price": 450000,
    "trims": [
     "e5"
    ],
    "desc": "2열 USB-C, 동승석 통풍·파워윈도우, 시트백 보드"
   },
   {
    "name": "파킹 어시스트",
    "price": 700000,
    "trims": [
     "e2",
     "e3",
     "e4",
     "e5"
    ],
    "desc": "후방 주차 충돌방지, 서라운드 뷰, 후측방 모니터"
   },
   {
    "name": "실내 컬러 패키지 (뉴트로 베이지)",
    "price": 200000,
    "trims": [
     "e2",
     "e3"
    ],
    "desc": "베이지 내장, 도트 패턴 도어 가니쉬"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "venue",
  "name": "베뉴",
  "category": "SUV",
  "year": "2027년형",
  "taxNote": "개별소비세 실효세율 조정(2026.7~) 기준, 부가세 포함",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/venue-2027-price.pdf",
  "sourceDate": "2026-07-01",
  "trims": [
   {
    "id": "v1",
    "name": "Smart",
    "powertrain": "1.6 가솔린 IVT 2WD",
    "price": 19940000
   },
   {
    "id": "v2",
    "name": "Premium",
    "powertrain": "1.6 가솔린 IVT 2WD",
    "price": 22920000
   },
   {
    "id": "v3",
    "name": "FLUX",
    "powertrain": "1.6 가솔린 IVT 2WD",
    "price": 24400000
   },
   {
    "id": "v4",
    "name": "운전교습용",
    "powertrain": "1.6 가솔린 IVT 2WD",
    "price": 16600000
   }
  ],
  "exterior": [
   {
    "name": "미라지 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "쉬머링 실버 메탈릭",
    "price": 0,
    "trims": [
     "v1",
     "v2"
    ]
   },
   {
    "name": "퀀텀 실버 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "에코트로닉 그레이 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "아틀라스 화이트",
    "price": 100000,
    "trims": null
   },
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "데님 블루 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "썬더 옐로우",
    "price": 0,
    "trims": null
   },
   {
    "name": "에코트로닉 그레이 + 블랙 투톤 루프",
    "price": 0,
    "trims": [
     "v2",
     "v3"
    ]
   },
   {
    "name": "미라지 그린 + 블랙 투톤 루프",
    "price": 0,
    "trims": [
     "v2",
     "v3"
    ]
   },
   {
    "name": "아틀라스 화이트 + 블랙 투톤 루프",
    "price": 100000,
    "trims": [
     "v2",
     "v3"
    ]
   },
   {
    "name": "쉬머링 실버 메탈릭 + 블랙 투톤 루프",
    "price": 0,
    "trims": [
     "v2"
    ]
   },
   {
    "name": "퀀텀 실버 펄 + 블랙 투톤 루프",
    "price": 0,
    "trims": [
     "v2",
     "v3"
    ]
   }
  ],
  "interior": [
   {
    "name": "블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "메테오 블루",
    "price": 0,
    "trims": [
     "v2",
     "v3"
    ]
   },
   {
    "name": "그레이",
    "price": 0,
    "trims": [
     "v3"
    ]
   }
  ],
  "options": [
   {
    "name": "하이패스",
    "price": 200000,
    "trims": [
     "v1"
    ],
    "desc": "하이패스 시스템"
   },
   {
    "name": "내비게이션 패키지",
    "price": 500000,
    "trims": [
     "v1"
    ],
    "desc": "8인치 내비(블루링크, 폰 프로젝션), 6스피커"
   },
   {
    "name": "선루프",
    "price": 400000,
    "trims": [
     "v2",
     "v3"
    ],
    "desc": "선루프 (투톤 루프와 중복 불가)"
   },
   {
    "name": "투톤 컬러 루프",
    "price": 400000,
    "trims": [
     "v2",
     "v3"
    ],
    "desc": "블랙 루프 투톤 (선루프와 중복 불가)"
   },
   {
    "name": "스타일",
    "price": 550000,
    "trims": [
     "v2"
    ],
    "desc": "17인치 알로이 휠&타이어, 루프랙"
   },
   {
    "name": "테크",
    "price": 350000,
    "trims": [
     "v2"
    ],
    "desc": "스마트폰 무선충전, 디지털 키 2 터치"
   },
   {
    "name": "인조가죽 시트 + 1열 열선시트",
    "price": 250000,
    "trims": [
     "v4"
    ],
    "desc": "인조가죽 시트, 1열 열선"
   },
   {
    "name": "[H Genuine] 17인치 블랙 알로이 휠",
    "price": 540000,
    "trims": [
     "v2",
     "v3"
    ],
    "desc": "17인치 휠 적용 시 선택, 일부 출고센터 한정"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "kona",
  "name": "코나",
  "category": "SUV",
  "year": "2027년형",
  "taxNote": "개별소비세 실효세율 조정(2026.7~) 기준, 부가세 포함",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/kona-2027-price.pdf",
  "sourceDate": "2026-07-01",
  "trims": [
   {
    "id": "k1",
    "name": "모던",
    "powertrain": "1.6 터보 가솔린 8AT 2WD",
    "price": 24630000
   },
   {
    "id": "k2",
    "name": "H-Pick",
    "powertrain": "1.6 터보 가솔린 8AT 2WD",
    "price": 26850000
   },
   {
    "id": "k3",
    "name": "프리미엄",
    "powertrain": "1.6 터보 가솔린 8AT 2WD",
    "price": 29150000
   },
   {
    "id": "k4",
    "name": "인스퍼레이션",
    "powertrain": "1.6 터보 가솔린 8AT 2WD",
    "price": 31460000
   },
   {
    "id": "k5",
    "name": "블랙 익스테리어",
    "powertrain": "1.6 터보 가솔린 8AT 2WD",
    "price": 31810000
   },
   {
    "id": "k6",
    "name": "N Line",
    "powertrain": "1.6 터보 가솔린 8AT 2WD",
    "price": 32450000
   },
   {
    "id": "k7",
    "name": "모던",
    "powertrain": "2.0 가솔린 IVT 2WD",
    "price": 23930000
   },
   {
    "id": "k8",
    "name": "H-Pick",
    "powertrain": "2.0 가솔린 IVT 2WD",
    "price": 26250000
   }
  ],
  "exterior": [
   {
    "name": "네오테릭 옐로우",
    "price": 0,
    "trims": [
     "k1",
     "k2",
     "k3",
     "k4",
     "k6",
     "k7",
     "k8"
    ]
   },
   {
    "name": "얼티메이트 레드 메탈릭",
    "price": 0,
    "trims": [
     "k1",
     "k2",
     "k3",
     "k4",
     "k6",
     "k7",
     "k8"
    ]
   },
   {
    "name": "아틀라스 화이트",
    "price": 0,
    "trims": [
     "k1",
     "k2",
     "k3",
     "k4",
     "k6",
     "k7",
     "k8"
    ]
   },
   {
    "name": "사이버 그레이 메탈릭",
    "price": 0,
    "trims": [
     "k1",
     "k2",
     "k3",
     "k4",
     "k6",
     "k7",
     "k8"
    ]
   },
   {
    "name": "에코트로닉 그레이 펄",
    "price": 0,
    "trims": [
     "k1",
     "k2",
     "k3",
     "k4",
     "k6",
     "k7",
     "k8"
    ]
   },
   {
    "name": "미라지 그린",
    "price": 0,
    "trims": [
     "k1",
     "k2",
     "k3",
     "k4",
     "k6",
     "k7",
     "k8"
    ]
   },
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "세이지 그린 (실내 컬러 패키지)",
    "price": 0,
    "trims": [
     "k3",
     "k4"
    ]
   },
   {
    "name": "베이지 (실내 컬러 패키지)",
    "price": 0,
    "trims": [
     "k3",
     "k4"
    ]
   },
   {
    "name": "블랙/레드 포인트 (N Line 전용)",
    "price": 0,
    "trims": [
     "k6"
    ]
   }
  ],
  "options": [
   {
    "name": "내비게이션 패키지Ⅰ",
    "price": 550000,
    "trims": [
     "k1",
     "k7"
    ],
    "desc": "12.3인치 내비, 듀얼 풀오토 에어컨, ECM, 레인센서"
   },
   {
    "name": "현대 스마트센스Ⅰ",
    "price": 1100000,
    "trims": [
     "k1",
     "k7"
    ],
    "desc": "후측방·후방교차 충돌방지, 안전하차, HDA, SCC 스탑앤고"
   },
   {
    "name": "컴포트 초이스",
    "price": 400000,
    "trims": [
     "k1",
     "k7"
    ],
    "desc": "인조가죽 시트·내장, LED 실내등"
   },
   {
    "name": "베스트 셀렉션",
    "price": 790000,
    "trims": [
     "k2",
     "k8",
     "k3"
    ],
    "desc": "스마트센스Ⅲ + 12.3인치 클러스터"
   },
   {
    "name": "스타일 Lite",
    "price": 490000,
    "trims": [
     "k2",
     "k8"
    ],
    "desc": "Full LED 헤드램프, LED 방향지시등, 앰비언트 무드램프"
   },
   {
    "name": "현대 스마트센스Ⅲ",
    "price": 550000,
    "trims": [
     "k2",
     "k8",
     "k3"
    ],
    "desc": "교차로 충돌방지, HDA, SCC 스탑앤고, NSCC"
   },
   {
    "name": "클러스터 (12.3인치 컬러 LCD)",
    "price": 400000,
    "trims": [
     "k2",
     "k8",
     "k3"
    ],
    "desc": "12.3인치 컬러 LCD 클러스터"
   },
   {
    "name": "파킹어시스트",
    "price": 990000,
    "trims": [
     "k2",
     "k8",
     "k3",
     "k4",
     "k6"
    ],
    "desc": "서라운드 뷰, 후측방 모니터, 후방 충돌방지, 원격 스마트 주차"
   },
   {
    "name": "컨비니언스",
    "price": 400000,
    "trims": [
     "k2",
     "k8"
    ],
    "desc": "스마트 파워 테일게이트, 무선충전"
   },
   {
    "name": "빌트인 캠 2 + 증강현실 내비",
    "price": 450000,
    "trims": [
     "k2",
     "k8",
     "k3",
     "k4"
    ],
    "desc": "빌트인 캠 2, AR 내비게이션"
   },
   {
    "name": "시트플러스",
    "price": 490000,
    "trims": [
     "k3"
    ],
    "desc": "운전석 메모리·릴렉션, 동승석 8way 전동, 2열 열선"
   },
   {
    "name": "19인치 알로이 휠 & 타이어",
    "price": 250000,
    "trims": [
     "k3"
    ],
    "desc": "19인치 알로이 휠&타이어"
   },
   {
    "name": "실내 컬러 패키지",
    "price": 200000,
    "trims": [
     "k3",
     "k4"
    ],
    "desc": "세이지 그린 또는 베이지 포인트 내장"
   },
   {
    "name": "에코 패키지",
    "price": 200000,
    "trims": [
     "k4"
    ],
    "desc": "메쉬 헤드레스트, 에코 스웨이드/가죽 시트 (실내컬러 중복불가)"
   },
   {
    "name": "BOSE 프리미엄 사운드",
    "price": 590000,
    "trims": [
     "k4",
     "k6"
    ],
    "desc": "8스피커, 외장앰프"
   },
   {
    "name": "투톤 컬러 루프",
    "price": 300000,
    "trims": [
     "k4",
     "k6"
    ],
    "desc": "블랙 루프 (선루프·어비스블랙 중복불가)"
   },
   {
    "name": "와이드 선루프",
    "price": 590000,
    "trims": [
     "k3",
     "k4"
    ],
    "desc": "와이드 선루프 (투톤 루프 중복불가)"
   },
   {
    "name": "HTRAC (AWD, 험로주행모드)",
    "price": 2030000,
    "trims": [
     "k3",
     "k4"
    ],
    "desc": "1.6T 전용 사륜, 경사로 저속주행, 후륜 멀티링크"
   },
   {
    "name": "하이패스",
    "price": 200000,
    "trims": [
     "k1",
     "k2",
     "k7",
     "k8"
    ],
    "desc": "하이패스 시스템"
   },
   {
    "name": "[N Performance] 알칸타라 인테리어 패키지",
    "price": 370000,
    "trims": [
     "k6"
    ],
    "desc": "알칸타라 스티어링·암레스트"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "kona-hybrid",
  "name": "코나 하이브리드",
  "category": "SUV",
  "year": "2027년형",
  "taxNote": "세제혜택 후 가격(하이브리드 개소세 등 감면 반영), 실효세율 조정(2026.7~), 부가세 포함",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/kona-hybrid-2027-price.pdf",
  "sourceDate": "2026-07-01",
  "trims": [
   {
    "id": "h1",
    "name": "모던",
    "powertrain": "1.6 하이브리드 6DCT 2WD",
    "price": 29380000
   },
   {
    "id": "h2",
    "name": "H-Pick",
    "powertrain": "1.6 하이브리드 6DCT 2WD",
    "price": 31200000
   },
   {
    "id": "h3",
    "name": "프리미엄",
    "powertrain": "1.6 하이브리드 6DCT 2WD",
    "price": 33670000
   },
   {
    "id": "h4",
    "name": "인스퍼레이션",
    "powertrain": "1.6 하이브리드 6DCT 2WD",
    "price": 35630000
   },
   {
    "id": "h5",
    "name": "블랙 익스테리어",
    "powertrain": "1.6 하이브리드 6DCT 2WD",
    "price": 36030000
   },
   {
    "id": "h6",
    "name": "N Line",
    "powertrain": "1.6 하이브리드 6DCT 2WD",
    "price": 36670000
   }
  ],
  "exterior": [
   {
    "name": "네오테릭 옐로우",
    "price": 0,
    "trims": [
     "h1",
     "h2",
     "h3",
     "h4",
     "h6"
    ]
   },
   {
    "name": "얼티메이트 레드 메탈릭",
    "price": 0,
    "trims": [
     "h1",
     "h2",
     "h3",
     "h4",
     "h6"
    ]
   },
   {
    "name": "아틀라스 화이트",
    "price": 0,
    "trims": [
     "h1",
     "h2",
     "h3",
     "h4",
     "h6"
    ]
   },
   {
    "name": "사이버 그레이 메탈릭",
    "price": 0,
    "trims": [
     "h1",
     "h2",
     "h3",
     "h4",
     "h6"
    ]
   },
   {
    "name": "에코트로닉 그레이 펄",
    "price": 0,
    "trims": [
     "h1",
     "h2",
     "h3",
     "h4",
     "h6"
    ]
   },
   {
    "name": "미라지 그린",
    "price": 0,
    "trims": [
     "h1",
     "h2",
     "h3",
     "h4",
     "h6"
    ]
   },
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "세이지 그린 (실내 컬러 패키지)",
    "price": 0,
    "trims": [
     "h3",
     "h4"
    ]
   },
   {
    "name": "베이지 (실내 컬러 패키지)",
    "price": 0,
    "trims": [
     "h3",
     "h4"
    ]
   },
   {
    "name": "블랙/레드 포인트 (N Line 전용)",
    "price": 0,
    "trims": [
     "h6"
    ]
   }
  ],
  "options": [
   {
    "name": "내비게이션 패키지Ⅱ",
    "price": 300000,
    "trims": [
     "h1"
    ],
    "desc": "12.3인치 내비, ECM, 레인센서"
   },
   {
    "name": "현대 스마트센스Ⅰ",
    "price": 1100000,
    "trims": [
     "h1"
    ],
    "desc": "후측방·후방교차 충돌방지, 안전하차, HDA, SCC 스탑앤고"
   },
   {
    "name": "컴포트 초이스",
    "price": 400000,
    "trims": [
     "h1"
    ],
    "desc": "인조가죽 시트·내장, LED 실내등"
   },
   {
    "name": "베스트 셀렉션",
    "price": 790000,
    "trims": [
     "h2",
     "h3"
    ],
    "desc": "스마트센스Ⅲ + 12.3인치 클러스터"
   },
   {
    "name": "현대 스마트센스Ⅲ",
    "price": 550000,
    "trims": [
     "h2",
     "h3"
    ],
    "desc": "교차로 충돌방지, HDA, SCC 스탑앤고, NSCC"
   },
   {
    "name": "클러스터 (12.3인치 컬러 LCD)",
    "price": 400000,
    "trims": [
     "h2",
     "h3"
    ],
    "desc": "12.3인치 컬러 LCD 클러스터"
   },
   {
    "name": "스타일Ⅰ",
    "price": 640000,
    "trims": [
     "h2"
    ],
    "desc": "Full LED 헤드램프, 18인치 휠, 앰비언트 무드램프"
   },
   {
    "name": "파킹어시스트",
    "price": 990000,
    "trims": [
     "h2",
     "h3",
     "h4",
     "h6"
    ],
    "desc": "서라운드 뷰, 후측방 모니터, 후방 충돌방지, 원격 스마트 주차"
   },
   {
    "name": "컨비니언스",
    "price": 400000,
    "trims": [
     "h2"
    ],
    "desc": "스마트 파워 테일게이트, 무선충전"
   },
   {
    "name": "빌트인 캠 2 + 증강현실 내비",
    "price": 450000,
    "trims": [
     "h2",
     "h3",
     "h4"
    ],
    "desc": "빌트인 캠 2, AR 내비게이션"
   },
   {
    "name": "시트플러스",
    "price": 490000,
    "trims": [
     "h3"
    ],
    "desc": "운전석 메모리·릴렉션, 동승석 8way 전동, 2열 열선"
   },
   {
    "name": "18인치 알로이 휠 & 타이어",
    "price": 250000,
    "trims": [
     "h3"
    ],
    "desc": "18인치 알로이 휠&타이어"
   },
   {
    "name": "실내 컬러 패키지",
    "price": 200000,
    "trims": [
     "h3",
     "h4"
    ],
    "desc": "세이지 그린 또는 베이지 포인트 내장"
   },
   {
    "name": "에코 패키지",
    "price": 200000,
    "trims": [
     "h4"
    ],
    "desc": "메쉬 헤드레스트, 에코 스웨이드/가죽 시트 (실내컬러 중복불가)"
   },
   {
    "name": "BOSE 프리미엄 사운드",
    "price": 590000,
    "trims": [
     "h4",
     "h6"
    ],
    "desc": "8스피커, 외장앰프"
   },
   {
    "name": "투톤 컬러 루프",
    "price": 300000,
    "trims": [
     "h4",
     "h6"
    ],
    "desc": "블랙 루프 (선루프·어비스블랙 중복불가)"
   },
   {
    "name": "와이드 선루프",
    "price": 590000,
    "trims": [
     "h3",
     "h4"
    ],
    "desc": "와이드 선루프 (투톤 루프 중복불가)"
   },
   {
    "name": "하이패스",
    "price": 200000,
    "trims": [
     "h1",
     "h2"
    ],
    "desc": "하이패스 시스템"
   },
   {
    "name": "[N Performance] 알칸타라 인테리어 패키지",
    "price": 370000,
    "trims": [
     "h6"
    ],
    "desc": "알칸타라 스티어링·암레스트"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "kona-ev",
  "name": "코나 일렉트릭",
  "category": "전기차",
  "year": "2025년형",
  "taxNote": "보조금 미반영, 세제혜택 반영 가격 · 실효세율 조정(2026.7~) 가격표",
  "source": "https://www.cardong.co.kr/newcar/vehicle/11427",
  "sourceDate": "2026-07-01",
  "trims": [
   {
    "id": "ke1",
    "name": "스탠다드 이-밸류 플러스",
    "powertrain": "전기 48.6kWh 2WD 17인치",
    "price": 41520913
   },
   {
    "id": "ke2",
    "name": "스탠다드 프리미엄",
    "powertrain": "전기 48.6kWh 2WD 17인치",
    "price": 43564639
   },
   {
    "id": "ke3",
    "name": "롱레인지 모던 플러스",
    "powertrain": "전기 64.8kWh 2WD 17인치",
    "price": 45655894
   },
   {
    "id": "ke4",
    "name": "롱레인지 모던 플러스 + 스타일Ⅱ",
    "powertrain": "전기 64.8kWh 2WD 19인치",
    "price": 46501901
   },
   {
    "id": "ke5",
    "name": "롱레인지 프리미엄",
    "powertrain": "전기 64.8kWh 2WD 17인치",
    "price": 46568441
   },
   {
    "id": "ke6",
    "name": "롱레인지 프리미엄 (빌트인캠)",
    "powertrain": "전기 64.8kWh 2WD 17인치",
    "price": 46996198
   },
   {
    "id": "ke7",
    "name": "롱레인지 프리미엄 + 스타일Ⅱ",
    "powertrain": "전기 64.8kWh 2WD 19인치",
    "price": 47414449
   },
   {
    "id": "ke8",
    "name": "롱레인지 인스퍼레이션",
    "powertrain": "전기 64.8kWh 2WD 19인치",
    "price": 49923954
   },
   {
    "id": "ke9",
    "name": "롱레인지 인스퍼레이션 블랙 익스테리어",
    "powertrain": "전기 64.8kWh 2WD 19인치",
    "price": 50256654
   },
   {
    "id": "ke10",
    "name": "롱레인지 N Line 인스퍼레이션",
    "powertrain": "전기 64.8kWh 2WD 19인치",
    "price": 50865019
   }
  ],
  "exterior": [
   {
    "name": "네오테릭 옐로우",
    "price": 0,
    "trims": [
     "ke1",
     "ke2",
     "ke3",
     "ke4",
     "ke5",
     "ke6",
     "ke7",
     "ke8",
     "ke10"
    ]
   },
   {
    "name": "메타 블루 펄",
    "price": 0,
    "trims": [
     "ke1",
     "ke2",
     "ke3",
     "ke4",
     "ke5",
     "ke6",
     "ke7",
     "ke8",
     "ke10"
    ]
   },
   {
    "name": "얼티메이트 레드 메탈릭",
    "price": 0,
    "trims": [
     "ke1",
     "ke2",
     "ke3",
     "ke4",
     "ke5",
     "ke6",
     "ke7",
     "ke8",
     "ke10"
    ]
   },
   {
    "name": "사이버 그레이 메탈릭",
    "price": 0,
    "trims": [
     "ke1",
     "ke2",
     "ke3",
     "ke4",
     "ke5",
     "ke6",
     "ke7",
     "ke8",
     "ke10"
    ]
   },
   {
    "name": "에코트로닉 그레이 펄",
    "price": 0,
    "trims": [
     "ke1",
     "ke2",
     "ke3",
     "ke4",
     "ke5",
     "ke6",
     "ke7",
     "ke8",
     "ke10"
    ]
   },
   {
    "name": "미라지 그린",
    "price": 0,
    "trims": [
     "ke1",
     "ke2",
     "ke3",
     "ke4",
     "ke5",
     "ke6",
     "ke7",
     "ke8",
     "ke10"
    ]
   },
   {
    "name": "아틀라스 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "사이버 그레이 메탈릭 (투톤 루프)",
    "price": 0,
    "trims": [
     "ke8",
     "ke10"
    ]
   },
   {
    "name": "미라지 그린 (투톤 루프)",
    "price": 0,
    "trims": [
     "ke8",
     "ke10"
    ]
   },
   {
    "name": "아틀라스 화이트 (투톤 루프)",
    "price": 0,
    "trims": [
     "ke8",
     "ke10"
    ]
   },
   {
    "name": "에코트로닉 그레이 펄 (투톤 루프)",
    "price": 0,
    "trims": [
     "ke8",
     "ke10"
    ]
   },
   {
    "name": "네오테릭 옐로우 (투톤 루프)",
    "price": 0,
    "trims": [
     "ke8",
     "ke10"
    ]
   },
   {
    "name": "얼티메이트 레드 메탈릭 (투톤 루프)",
    "price": 0,
    "trims": [
     "ke8",
     "ke10"
    ]
   },
   {
    "name": "메타 블루 펄 (투톤 루프)",
    "price": 0,
    "trims": [
     "ke8",
     "ke10"
    ]
   }
  ],
  "interior": [
   {
    "name": "블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "세이지 그린 (실내 컬러 패키지)",
    "price": 0,
    "trims": [
     "ke5",
     "ke6",
     "ke7",
     "ke8"
    ]
   },
   {
    "name": "베이지 (실내 컬러 패키지)",
    "price": 0,
    "trims": [
     "ke5",
     "ke6",
     "ke7",
     "ke8"
    ]
   },
   {
    "name": "다크 그레이 원톤 (에코 패키지)",
    "price": 0,
    "trims": [
     "ke5",
     "ke6",
     "ke7",
     "ke8",
     "ke9"
    ]
   },
   {
    "name": "블랙 원톤/레드 포인트 (N Line 전용)",
    "price": 0,
    "trims": [
     "ke10"
    ]
   }
  ],
  "options": [
   {
    "name": "하이패스",
    "price": 200000,
    "trims": [
     "ke1",
     "ke3",
     "ke4"
    ],
    "desc": "하이패스 시스템"
   },
   {
    "name": "컴포트 초이스",
    "price": 980000,
    "trims": [
     "ke1"
    ],
    "desc": "인조가죽 시트, 운전석 전동, 1열 열선·통풍, 열선 스티어링"
   },
   {
    "name": "파킹어시스트",
    "price": 990000,
    "trims": [
     "ke2",
     "ke5",
     "ke6",
     "ke7",
     "ke8",
     "ke9",
     "ke10"
    ],
    "desc": "서라운드 뷰, 후측방 모니터, 후방 충돌방지, 원격 스마트 주차"
   },
   {
    "name": "현대 스마트센스Ⅱ",
    "price": 490000,
    "trims": [
     "ke2",
     "ke5",
     "ke6",
     "ke7",
     "ke3",
     "ke4"
    ],
    "desc": "교차로 충돌방지, 후측방 충돌방지, NSCC, HDA2"
   },
   {
    "name": "시트플러스",
    "price": 490000,
    "trims": [
     "ke2",
     "ke5",
     "ke6",
     "ke7"
    ],
    "desc": "운전석 메모리·릴렉션, 동승석 전동, 2열 열선"
   },
   {
    "name": "컨비니언스",
    "price": 750000,
    "trims": [
     "ke2",
     "ke5",
     "ke6",
     "ke7"
    ],
    "desc": "파워 테일게이트, 디지털키2, 터치 도어핸들, 실외 V2L"
   },
   {
    "name": "헤드업 디스플레이",
    "price": 590000,
    "trims": [
     "ke2",
     "ke5",
     "ke6",
     "ke7"
    ],
    "desc": "헤드업 디스플레이"
   },
   {
    "name": "와이드 선루프",
    "price": 590000,
    "trims": [
     "ke5",
     "ke6",
     "ke7",
     "ke8",
     "ke9",
     "ke10"
    ],
    "desc": "와이드 선루프"
   },
   {
    "name": "빌트인 캠 2 + 증강현실 내비",
    "price": 450000,
    "trims": [
     "ke7",
     "ke8",
     "ke9",
     "ke10"
    ],
    "desc": "빌트인 캠 2, AR 내비게이션"
   },
   {
    "name": "BOSE 프리미엄 사운드",
    "price": 590000,
    "trims": [
     "ke8",
     "ke9",
     "ke10"
    ],
    "desc": "8스피커, 외장앰프, e-ASD"
   },
   {
    "name": "투톤 컬러 루프",
    "price": 300000,
    "trims": [
     "ke8",
     "ke10"
    ],
    "desc": "블랙 투톤 루프"
   },
   {
    "name": "실내 컬러 패키지",
    "price": 200000,
    "trims": [
     "ke5",
     "ke6",
     "ke7",
     "ke8"
    ],
    "desc": "세이지 그린 또는 베이지 포인트 내장"
   },
   {
    "name": "에코 패키지",
    "price": 200000,
    "trims": [
     "ke5",
     "ke6",
     "ke7",
     "ke8",
     "ke9"
    ],
    "desc": "메쉬 헤드레스트, 에코 스웨이드/가죽, 재활용 PET"
   },
   {
    "name": "[악세사리] 알칸타라 인테리어 패키지",
    "price": 370000,
    "trims": [
     "ke10"
    ],
    "desc": "알칸타라 스티어링·암레스트"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "avante",
  "name": "디 올 뉴 아반떼",
  "category": "세단",
  "year": "2027년형 (8세대, 2026.08 출시)",
  "taxNote": "개별소비세 5% 기준(2026.6 개소세 인하 종료 후), 부가세 포함",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/the-all-new-avante_price.pdf",
  "sourceDate": "2026-08-05",
  "trims": [
   {
    "id": "a_m",
    "name": "모던",
    "powertrain": "2.0 가솔린 IVT",
    "price": 23980000
   },
   {
    "id": "a_p",
    "name": "프리미엄",
    "powertrain": "2.0 가솔린 IVT",
    "price": 27710000
   },
   {
    "id": "a_i",
    "name": "인스퍼레이션",
    "powertrain": "2.0 가솔린 IVT",
    "price": 31520000
   }
  ],
  "exterior": [
   {
    "name": "퀀텀 실버 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "에코트로닉 그레이 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "볼케닉 레드 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "고요 카퍼 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "그라펜 그린 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "아틀라스 화이트",
    "price": 100000,
    "trims": null
   },
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "랩터 그레이 매트",
    "price": 300000,
    "trims": null
   },
   {
    "name": "코디악 블루 매트",
    "price": 300000,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "블랙 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "블랙/코냑",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "9.9인치 슬림 디스플레이",
    "price": 350000,
    "trims": [
     "a_m"
    ],
    "desc": "9.9인치 슬림 디스플레이"
   },
   {
    "name": "컨비니언스Ⅰ",
    "price": 650000,
    "trims": [
     "a_m"
    ],
    "desc": "듀얼 풀오토 에어컨, 인조가죽 시트, 하이패스, 1열 열선시트"
   },
   {
    "name": "현대 스마트센스Ⅰ",
    "price": 960000,
    "trims": [
     "a_m"
    ],
    "desc": "전방충돌방지 확장, HDA2, 후측방 충돌방지, 내비 기반 SCC2, 내비"
   },
   {
    "name": "17인치 알로이 휠 & 타이어Ⅰ",
    "price": 320000,
    "trims": [
     "a_m"
    ],
    "desc": "17인치 휠, 16인치 전륜 디스크 브레이크"
   },
   {
    "name": "와이드 선루프",
    "price": 900000,
    "trims": [
     "a_p",
     "a_i"
    ],
    "desc": "와이드 선루프"
   },
   {
    "name": "플레오스 커넥트 14.6인치 + 9.9인치 슬림 디스플레이",
    "price": 830000,
    "trims": [
     "a_p"
    ],
    "desc": "14.6인치 플레오스 커넥트 + 9.9인치 디스플레이"
   },
   {
    "name": "현대 스마트센스Ⅱ",
    "price": 400000,
    "trims": [
     "a_p"
    ],
    "desc": "전방충돌방지 확장, HDA2, 후측방 충돌방지(주행)"
   },
   {
    "name": "익스테리어 디자인",
    "price": 1400000,
    "trims": [
     "a_p"
    ],
    "desc": "Full LED 헤드램프, LED 리어램프, 앰비언트 무드램프 등"
   },
   {
    "name": "플래티넘Ⅰ",
    "price": 930000,
    "trims": [
     "a_p"
    ],
    "desc": "100W USB-C, 레인센서, 하이패스, 디지털키2, 무선충전"
   },
   {
    "name": "컴포트",
    "price": 760000,
    "trims": [
     "a_p"
    ],
    "desc": "운전석 전동·메모리, 동승석 전동, 2열 열선, 6:4 폴딩, 2열 송풍구"
   },
   {
    "name": "17인치 알로이 휠 & 타이어Ⅱ",
    "price": 300000,
    "trims": [
     "a_p"
    ],
    "desc": "17인치 알로이 휠 & 타이어"
   },
   {
    "name": "플래티넘Ⅱ",
    "price": 900000,
    "trims": [
     "a_i"
    ],
    "desc": "100W USB-C, 레인센서, 하이패스, 디지털키2, 메탈 페달, 이중접합 유리"
   },
   {
    "name": "빌트인 캠 2 Plus",
    "price": 650000,
    "trims": [
     "a_i"
    ],
    "desc": "빌트인 캠 2 Plus, 보조배터리"
   },
   {
    "name": "파킹 어시스트Ⅰ",
    "price": 800000,
    "trims": [
     "a_i"
    ],
    "desc": "투명 서라운드뷰, 후측방 모니터, 전/후방 주차 충돌방지 (택1)"
   },
   {
    "name": "파킹 어시스트Ⅱ",
    "price": 1300000,
    "trims": [
     "a_i"
    ],
    "desc": "파킹Ⅰ + 원격 스마트 주차, 기억 후진 보조 (택1)"
   },
   {
    "name": "18인치 알로이 휠 & 타이어",
    "price": 500000,
    "trims": [
     "a_i"
    ],
    "desc": "18인치 알로이 휠 & 타이어"
   },
   {
    "name": "Audio by BANG & OLUFSEN",
    "price": 1100000,
    "trims": [
     "a_i"
    ],
    "desc": "B&O 12스피커, 외장앰프"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "avante-hybrid",
  "name": "디 올 뉴 아반떼 하이브리드",
  "category": "세단",
  "year": "2027년형 (8세대, 2026.08 출시)",
  "taxNote": "세제혜택(개소세 등 감면) 후 판매가, 부가세 포함. 친환경차 감면 2026년 말 종료 예정(이후 +100만원). 옵션가는 세제혜택 전 기준",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/the-all-new-avante-hybrid_price.pdf",
  "sourceDate": "2026-08-05",
  "trims": [
   {
    "id": "ah_m",
    "name": "모던",
    "powertrain": "1.6 하이브리드",
    "price": 29420000
   },
   {
    "id": "ah_p",
    "name": "프리미엄",
    "powertrain": "1.6 하이브리드",
    "price": 32610000
   },
   {
    "id": "ah_i",
    "name": "인스퍼레이션",
    "powertrain": "1.6 하이브리드",
    "price": 35990000
   }
  ],
  "exterior": [
   {
    "name": "퀀텀 실버 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "에코트로닉 그레이 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "볼케닉 레드 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "고요 카퍼 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "그라펜 그린 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "아틀라스 화이트",
    "price": 100000,
    "trims": null
   },
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "랩터 그레이 매트",
    "price": 300000,
    "trims": null
   },
   {
    "name": "코디악 블루 매트",
    "price": 300000,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "블랙 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "블랙/코냑",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "9.9인치 슬림 디스플레이",
    "price": 350000,
    "trims": [
     "ah_m"
    ],
    "desc": "9.9인치 슬림 디스플레이"
   },
   {
    "name": "컨비니언스Ⅱ",
    "price": 450000,
    "trims": [
     "ah_m"
    ],
    "desc": "인조가죽 시트, 하이패스, 1열 열선시트"
   },
   {
    "name": "현대 스마트센스Ⅰ",
    "price": 960000,
    "trims": [
     "ah_m"
    ],
    "desc": "전방충돌방지 확장, HDA2, 내비 기반 SCC2, 내비"
   },
   {
    "name": "와이드 선루프",
    "price": 900000,
    "trims": [
     "ah_p",
     "ah_i"
    ],
    "desc": "와이드 선루프"
   },
   {
    "name": "플레오스 커넥트 14.6인치 + 9.9인치 슬림 디스플레이",
    "price": 830000,
    "trims": [
     "ah_p"
    ],
    "desc": "14.6인치 플레오스 커넥트 + 9.9인치 디스플레이"
   },
   {
    "name": "현대 스마트센스Ⅱ",
    "price": 400000,
    "trims": [
     "ah_p"
    ],
    "desc": "전방충돌방지 확장, HDA2, 후측방 충돌방지"
   },
   {
    "name": "익스테리어 디자인",
    "price": 1400000,
    "trims": [
     "ah_p"
    ],
    "desc": "LED 헤드/리어램프 등 외관 패키지"
   },
   {
    "name": "플래티넘Ⅰ",
    "price": 930000,
    "trims": [
     "ah_p"
    ],
    "desc": "100W USB-C, 레인센서, 하이패스, 디지털키2, 무선충전"
   },
   {
    "name": "컴포트",
    "price": 760000,
    "trims": [
     "ah_p"
    ],
    "desc": "운전석·동승석 전동시트, 2열 열선 등"
   },
   {
    "name": "플래티넘Ⅱ",
    "price": 900000,
    "trims": [
     "ah_i"
    ],
    "desc": "100W USB-C, 레인센서, 하이패스, 디지털키2, 메탈 페달"
   },
   {
    "name": "빌트인 캠 2 Plus",
    "price": 650000,
    "trims": [
     "ah_i"
    ],
    "desc": "빌트인 캠 2 Plus, 보조배터리"
   },
   {
    "name": "파킹 어시스트Ⅰ",
    "price": 800000,
    "trims": [
     "ah_i"
    ],
    "desc": "서라운드뷰, 측방 주차거리 경고, 전/후방 주차 충돌방지 (택1)"
   },
   {
    "name": "파킹 어시스트Ⅱ",
    "price": 1300000,
    "trims": [
     "ah_i"
    ],
    "desc": "파킹Ⅰ + 원격 스마트 주차, 기억 후진 보조 (택1)"
   },
   {
    "name": "18인치 알로이 휠 & 타이어",
    "price": 500000,
    "trims": [
     "ah_i"
    ],
    "desc": "18인치 알로이 휠 & 타이어"
   },
   {
    "name": "Audio by BANG & OLUFSEN",
    "price": 1100000,
    "trims": [
     "ah_i"
    ],
    "desc": "B&O 12스피커, 외장앰프"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "avante-n",
  "name": "아반떼 N",
  "category": "세단",
  "year": "2026년형 (7세대 기반, 2027년형 출시 예정)",
  "taxNote": "개별소비세 5% 기준, 부가세 포함 (hyundai.com 2026.11.01 기준가)",
  "source": "https://www.hyundai.com/kr/en/n/avante-n/price (옵션: https://www.ajd.co.kr/car/new-car/purchase/hyundai/avante-n)",
  "sourceDate": "2026-11-01",
  "trims": [
   {
    "id": "n_mt",
    "name": "N",
    "powertrain": "2.0 터보 6단 수동",
    "price": 33560000
   },
   {
    "id": "n_dct",
    "name": "N",
    "powertrain": "2.0 터보 8단 습식 DCT",
    "price": 35640000
   }
  ],
  "exterior": [
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "아틀라스 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "사이버 그레이 메탈릭",
    "price": 0,
    "trims": null
   },
   {
    "name": "에코트로닉 그레이 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "메타 블루 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "얼티메이트 레드 메탈릭",
    "price": 0,
    "trims": null
   },
   {
    "name": "퍼포먼스 블루",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "블랙 원톤",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "선루프",
    "price": 450000,
    "trims": null,
    "desc": "선루프"
   },
   {
    "name": "N 컴포트",
    "price": 590000,
    "trims": null,
    "desc": "2열 열선, 운전석 8way 전동·메모리, 동승석 4way 전동"
   },
   {
    "name": "N 라이트 스포츠 버킷 시트",
    "price": 1090000,
    "trims": null,
    "desc": "스웨이드/인조가죽 버킷시트, 일체형 헤드레스트, 열선"
   },
   {
    "name": "19인치 초경량 단조 휠",
    "price": 790000,
    "trims": null,
    "desc": "19인치 초경량 단조 휠"
   },
   {
    "name": "N 퍼포먼스 워크인 인테리어 패키지",
    "price": 300000,
    "trims": null,
    "desc": "N Performance 파츠"
   },
   {
    "name": "N 퍼포먼스 인테이크 킷",
    "price": 480000,
    "trims": null,
    "desc": "N Performance 흡기 킷"
   },
   {
    "name": "N 퍼포먼스 알칸타라 인테리어 패키지",
    "price": 660000,
    "trims": null,
    "desc": "알칸타라 실내 파츠"
   },
   {
    "name": "N 퍼포먼스 카본 듀얼 싱글팁 머플러",
    "price": 1140000,
    "trims": null,
    "desc": "카본 머플러 팁"
   },
   {
    "name": "N 퍼포먼스 19인치 매트 블랙 단조 휠",
    "price": 2270000,
    "trims": null,
    "desc": "19인치 매트 블랙 단조 휠"
   },
   {
    "name": "N 퍼포먼스 19인치 페이스 머시닝 단조 휠",
    "price": 2420000,
    "trims": null,
    "desc": "19인치 페이스 머시닝 단조 휠"
   },
   {
    "name": "N 퍼포먼스 카본 익스테리어 패키지",
    "price": 2920000,
    "trims": null,
    "desc": "카본 외장 파츠"
   },
   {
    "name": "모노블록 브레이크 + 19인치 매트 블랙 단조 휠",
    "price": 3510000,
    "trims": null,
    "desc": "모노블록 4P 캘리퍼, 하이브리드 디스크, 단조 휠"
   },
   {
    "name": "모노블록 브레이크 + 19인치 페이스 머시닝 단조 휠",
    "price": 3660000,
    "trims": null,
    "desc": "모노블록 4P 캘리퍼, 하이브리드 디스크, 단조 휠"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "sonata",
  "name": "쏘나타 디 엣지",
  "category": "세단",
  "year": "2027년형",
  "taxNote": "개별소비세 5% 기준(2026.6 개소세 인하 종료 후), 부가세 포함",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/sonata-2027-price.pdf",
  "sourceDate": "2026-10-07",
  "trims": [
   {
    "id": "s16p",
    "name": "프리미엄",
    "powertrain": "1.6 가솔린 터보",
    "price": 29430000
   },
   {
    "id": "s16s",
    "name": "S",
    "powertrain": "1.6 가솔린 터보",
    "price": 30950000
   },
   {
    "id": "s16e",
    "name": "익스클루시브",
    "powertrain": "1.6 가솔린 터보",
    "price": 33880000
   },
   {
    "id": "s16i",
    "name": "인스퍼레이션",
    "powertrain": "1.6 가솔린 터보",
    "price": 36810000
   },
   {
    "id": "s16b",
    "name": "블랙 N Line",
    "powertrain": "1.6 가솔린 터보",
    "price": 37410000
   },
   {
    "id": "s20p",
    "name": "프리미엄",
    "powertrain": "2.0 가솔린",
    "price": 28760000
   },
   {
    "id": "s20s",
    "name": "S",
    "powertrain": "2.0 가솔린",
    "price": 30280000
   },
   {
    "id": "s20e",
    "name": "익스클루시브",
    "powertrain": "2.0 가솔린",
    "price": 33210000
   },
   {
    "id": "s20i",
    "name": "인스퍼레이션",
    "powertrain": "2.0 가솔린",
    "price": 36150000
   },
   {
    "id": "s20b",
    "name": "블랙 N Line",
    "powertrain": "2.0 가솔린",
    "price": 36750000
   },
   {
    "id": "slp",
    "name": "프리미엄",
    "powertrain": "2.0 LPi",
    "price": 29610000
   },
   {
    "id": "sle",
    "name": "익스클루시브",
    "powertrain": "2.0 LPi",
    "price": 33710000
   },
   {
    "id": "sli",
    "name": "인스퍼레이션",
    "powertrain": "2.0 LPi",
    "price": 36400000
   },
   {
    "id": "snl",
    "name": "N Line",
    "powertrain": "2.5 가솔린 터보",
    "price": 39410000
   }
  ],
  "exterior": [
   {
    "name": "세레니티 화이트 펄",
    "price": 100000,
    "trims": null
   },
   {
    "name": "에어로 실버 매트",
    "price": 300000,
    "trims": [
     "s16p",
     "s16s",
     "s16e",
     "s16i",
     "s20p",
     "s20s",
     "s20e",
     "s20i",
     "slp",
     "sle",
     "sli",
     "snl"
    ]
   },
   {
    "name": "녹턴 그레이 메탈릭",
    "price": 0,
    "trims": [
     "s16p",
     "s16s",
     "s16e",
     "s16i",
     "s20p",
     "s20s",
     "s20e",
     "s20i",
     "slp",
     "sle",
     "sli",
     "snl"
    ]
   },
   {
    "name": "녹턴 그레이 매트",
    "price": 300000,
    "trims": [
     "s16p",
     "s16s",
     "s16e",
     "s16i",
     "s20p",
     "s20s",
     "s20e",
     "s20i",
     "slp",
     "sle",
     "sli",
     "snl"
    ]
   },
   {
    "name": "바이오 필릭 블루 펄",
    "price": 0,
    "trims": [
     "s16p",
     "s16s",
     "s16e",
     "s16i",
     "s20p",
     "s20s",
     "s20e",
     "s20i",
     "slp",
     "sle",
     "sli",
     "snl"
    ]
   },
   {
    "name": "얼티메이트 레드 메탈릭",
    "price": 0,
    "trims": [
     "s16p",
     "s16s",
     "s16e",
     "s16i",
     "s20p",
     "s20s",
     "s20e",
     "s20i",
     "slp",
     "sle",
     "sli",
     "snl"
    ]
   },
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "트랜스미션 블루 펄",
    "price": 0,
    "trims": [
     "s16p",
     "s16s",
     "s16e",
     "s16i",
     "s20p",
     "s20s",
     "s20e",
     "s20i",
     "slp",
     "sle",
     "sli",
     "snl"
    ]
   }
  ],
  "interior": [
   {
    "name": "나파가죽 카멜",
    "price": 0,
    "trims": [
     "s16i",
     "s20i",
     "sli"
    ]
   },
   {
    "name": "나파가죽 그레이지",
    "price": 0,
    "trims": [
     "s16i",
     "s20i",
     "sli"
    ]
   },
   {
    "name": "나파가죽 네이비",
    "price": 0,
    "trims": [
     "s16i",
     "s20i",
     "sli"
    ]
   }
  ],
  "options": [
   {
    "name": "인포테인먼트 내비Ⅰ",
    "price": 1400000,
    "trims": [
     "s16p",
     "s20p",
     "slp"
    ],
    "desc": "12.3인치 내비·클러스터, HDA, 내비 기반 SCC, 듀얼 풀오토 에어컨"
   },
   {
    "name": "파킹 어시스트Ⅰ",
    "price": 980000,
    "trims": [
     "s16p",
     "s20p",
     "s16s",
     "s20s"
    ],
    "desc": "서라운드뷰, 후측방 모니터, 원격 스마트 주차 (프리미엄은 내비 필요)"
   },
   {
    "name": "헤드업 디스플레이",
    "price": 700000,
    "trims": [
     "s16s",
     "s20s",
     "snl"
    ],
    "desc": "HUD, 인조가죽 크래시패드 (파킹 어시스트 선택 시)"
   },
   {
    "name": "파킹 어시스트Ⅱ",
    "price": 680000,
    "trims": [
     "slp",
     "snl"
    ],
    "desc": "서라운드뷰, 후측방 모니터, 후방 주차 충돌방지"
   },
   {
    "name": "현대 스마트센스Ⅰ",
    "price": 450000,
    "trims": [
     "s16p",
     "s20p",
     "slp"
    ],
    "desc": "후측방 충돌방지, 후방 교차 충돌방지, 안전 하차 보조"
   },
   {
    "name": "컴포트Ⅰ(1열 편의)",
    "price": 640000,
    "trims": [
     "s16p",
     "s20p",
     "slp"
    ],
    "desc": "1열 통풍, 운전석 메모리, 동승석 전동 4way"
   },
   {
    "name": "컴포트Ⅱ(2열 편의)",
    "price": 670000,
    "trims": [
     "s16p",
     "s20p",
     "s16e",
     "s20e"
    ],
    "desc": "2열 열선, 도어커튼, 뒷면 전동커튼, 6:4 폴딩, 암레스트"
   },
   {
    "name": "컴포트Ⅲ(2열 편의)",
    "price": 570000,
    "trims": [
     "slp",
     "sle"
    ],
    "desc": "2열 열선, 커튼, 6:4 폴딩, 스키쓰루 암레스트"
   },
   {
    "name": "컴포트Ⅳ(2열 편의)",
    "price": 640000,
    "trims": [
     "snl"
    ],
    "desc": "2열 열선, 도어커튼, 뒷면 전동커튼, 6:4 폴딩"
   },
   {
    "name": "하이패스",
    "price": 200000,
    "trims": [
     "s16p",
     "s20p",
     "slp"
    ],
    "desc": "하이패스"
   },
   {
    "name": "익스테리어 디자인Ⅰ",
    "price": 640000,
    "trims": [
     "s16s",
     "s20s",
     "s16e",
     "s20e"
    ],
    "desc": "18인치 휠·피렐리, Full LED 프로젝션 헤드램프"
   },
   {
    "name": "익스테리어 디자인Ⅱ",
    "price": 450000,
    "trims": [
     "sle"
    ],
    "desc": "18인치 휠, Full LED 프로젝션 헤드램프"
   },
   {
    "name": "플래티넘Ⅰ",
    "price": 1300000,
    "trims": [
     "s16e",
     "s20e",
     "sle"
    ],
    "desc": "HUD, 디지털키2, 지문인증, 터치타입 도어핸들"
   },
   {
    "name": "파노라마 선루프",
    "price": 1190000,
    "trims": [
     "s16i",
     "s20i",
     "sli",
     "snl"
    ],
    "desc": "파노라마 선루프"
   },
   {
    "name": "BOSE 프리미엄 사운드",
    "price": 640000,
    "trims": [
     "s16i",
     "s20i",
     "sli"
    ],
    "desc": "12스피커, 외장앰프"
   },
   {
    "name": "빌트인 캠 2 + 증강현실 내비게이션",
    "price": 450000,
    "trims": null,
    "desc": "주행/주차 녹화, AR 내비 (내비 적용 시)"
   },
   {
    "name": "N 퍼포먼스 서스펜션",
    "price": 940000,
    "trims": [
     "snl"
    ],
    "desc": "N Performance 파츠"
   },
   {
    "name": "모노블록 브레이크 & 19인치 경량 휠 패키지",
    "price": 1960000,
    "trims": [
     "snl"
    ],
    "desc": "프론트 모노블록 4P 브레이크 + 19인치 경량 휠"
   },
   {
    "name": "19인치 블랙 경량 휠",
    "price": 870000,
    "trims": [
     "snl"
    ],
    "desc": "N Performance 19인치 휠 단품"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "sonata-hybrid",
  "name": "쏘나타 디 엣지 하이브리드",
  "category": "세단",
  "year": "2027년형",
  "taxNote": "세제혜택(개소세 등 감면) 후 판매가, 부가세 포함. 친환경차 감면 2026년 말 종료 예정(이후 +100만원). 옵션가는 세제혜택 전 기준",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/sonata-hybrid-2027-price.pdf",
  "sourceDate": "2026-10-07",
  "trims": [
   {
    "id": "sh_p",
    "name": "프리미엄",
    "powertrain": "2.0 하이브리드",
    "price": 33280000
   },
   {
    "id": "sh_s",
    "name": "S",
    "powertrain": "2.0 하이브리드",
    "price": 34500000
   },
   {
    "id": "sh_e",
    "name": "익스클루시브",
    "powertrain": "2.0 하이브리드",
    "price": 37420000
   },
   {
    "id": "sh_i",
    "name": "인스퍼레이션",
    "powertrain": "2.0 하이브리드",
    "price": 40520000
   },
   {
    "id": "sh_b",
    "name": "블랙 N Line",
    "powertrain": "2.0 하이브리드",
    "price": 41120000
   }
  ],
  "exterior": [
   {
    "name": "세레니티 화이트 펄",
    "price": 100000,
    "trims": null
   },
   {
    "name": "에어로 실버 매트",
    "price": 300000,
    "trims": [
     "sh_p",
     "sh_s",
     "sh_e",
     "sh_i"
    ]
   },
   {
    "name": "녹턴 그레이 메탈릭",
    "price": 0,
    "trims": [
     "sh_p",
     "sh_s",
     "sh_e",
     "sh_i"
    ]
   },
   {
    "name": "녹턴 그레이 매트",
    "price": 300000,
    "trims": [
     "sh_p",
     "sh_s",
     "sh_e",
     "sh_i"
    ]
   },
   {
    "name": "바이오 필릭 블루 펄",
    "price": 0,
    "trims": [
     "sh_p",
     "sh_s",
     "sh_e",
     "sh_i"
    ]
   },
   {
    "name": "얼티메이트 레드 메탈릭",
    "price": 0,
    "trims": [
     "sh_p",
     "sh_s",
     "sh_e",
     "sh_i"
    ]
   },
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "트랜스미션 블루 펄",
    "price": 0,
    "trims": [
     "sh_p",
     "sh_s",
     "sh_e",
     "sh_i"
    ]
   }
  ],
  "interior": [
   {
    "name": "나파가죽 카멜",
    "price": 0,
    "trims": [
     "sh_i"
    ]
   },
   {
    "name": "나파가죽 그레이지",
    "price": 0,
    "trims": [
     "sh_i"
    ]
   },
   {
    "name": "나파가죽 네이비",
    "price": 0,
    "trims": [
     "sh_i"
    ]
   }
  ],
  "options": [
   {
    "name": "인포테인먼트 내비Ⅱ",
    "price": 1060000,
    "trims": [
     "sh_p"
    ],
    "desc": "12.3인치 내비·클러스터, HDA, 내비 기반 SCC, 무드램프"
   },
   {
    "name": "파킹 어시스트Ⅰ",
    "price": 980000,
    "trims": [
     "sh_p",
     "sh_s"
    ],
    "desc": "서라운드뷰, 후측방 모니터, 원격 스마트 주차 (내비 필요)"
   },
   {
    "name": "헤드업 디스플레이",
    "price": 700000,
    "trims": [
     "sh_s"
    ],
    "desc": "HUD, 인조가죽 크래시패드"
   },
   {
    "name": "현대 스마트센스Ⅰ",
    "price": 450000,
    "trims": [
     "sh_p"
    ],
    "desc": "후측방 충돌방지, 후방 교차 충돌방지, 안전 하차 보조"
   },
   {
    "name": "컴포트Ⅰ(1열 편의)",
    "price": 640000,
    "trims": [
     "sh_p"
    ],
    "desc": "1열 통풍, 운전석 메모리, 동승석 전동 4way"
   },
   {
    "name": "컴포트Ⅱ(2열 편의)",
    "price": 670000,
    "trims": [
     "sh_p",
     "sh_e"
    ],
    "desc": "2열 열선, 도어커튼, 뒷면 전동커튼, 6:4 폴딩"
   },
   {
    "name": "하이패스",
    "price": 200000,
    "trims": [
     "sh_p"
    ],
    "desc": "하이패스"
   },
   {
    "name": "익스테리어 디자인Ⅲ",
    "price": 400000,
    "trims": [
     "sh_s"
    ],
    "desc": "17인치 휠, Full LED 프로젝션 헤드램프"
   },
   {
    "name": "익스테리어 디자인Ⅰ",
    "price": 640000,
    "trims": [
     "sh_e"
    ],
    "desc": "18인치 휠·피렐리, Full LED 프로젝션 헤드램프"
   },
   {
    "name": "플래티넘Ⅰ",
    "price": 1300000,
    "trims": [
     "sh_e"
    ],
    "desc": "HUD, 디지털키2, 지문인증, 터치타입 도어핸들"
   },
   {
    "name": "파노라마 선루프",
    "price": 1190000,
    "trims": [
     "sh_i"
    ],
    "desc": "파노라마 선루프"
   },
   {
    "name": "BOSE 프리미엄 사운드",
    "price": 640000,
    "trims": [
     "sh_i"
    ],
    "desc": "12스피커, 외장앰프"
   },
   {
    "name": "빌트인 캠 2 + 증강현실 내비게이션",
    "price": 450000,
    "trims": null,
    "desc": "주행/주차 녹화, AR 내비 (내비 적용 시)"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "grandeur",
  "name": "더 뉴 그랜저",
  "category": "세단",
  "year": "2027년형 (페이스리프트, 2026.05 출시)",
  "taxNote": "개별소비세 5% 기준(2026.6 개소세 인하 종료 후), 부가세 포함",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/the-new-grandeur-price.pdf",
  "sourceDate": "2026-05-14",
  "trims": [
   {
    "id": "g25p",
    "name": "프리미엄",
    "powertrain": "2.5 가솔린",
    "price": 42450000
   },
   {
    "id": "g25e",
    "name": "익스클루시브",
    "powertrain": "2.5 가솔린",
    "price": 46940000
   },
   {
    "id": "g25c",
    "name": "캘리그래피",
    "powertrain": "2.5 가솔린",
    "price": 53100000
   },
   {
    "id": "g25b",
    "name": "블랙 잉크",
    "powertrain": "2.5 가솔린",
    "price": 54000000
   },
   {
    "id": "g35p",
    "name": "프리미엄",
    "powertrain": "3.5 가솔린",
    "price": 44910000
   },
   {
    "id": "g35e",
    "name": "익스클루시브",
    "powertrain": "3.5 가솔린",
    "price": 49410000
   },
   {
    "id": "g35eh",
    "name": "익스클루시브",
    "powertrain": "3.5 가솔린 HTRAC(AWD)",
    "price": 51610000
   },
   {
    "id": "glp",
    "name": "프리미엄",
    "powertrain": "3.5 LPi",
    "price": 43930000
   },
   {
    "id": "gle",
    "name": "익스클루시브",
    "powertrain": "3.5 LPi",
    "price": 48420000
   }
  ],
  "exterior": [
   {
    "name": "세레니티 화이트 펄",
    "price": 100000,
    "trims": null
   },
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "바이오필릭 블루 펄",
    "price": 0,
    "trims": [
     "g25p",
     "g25e",
     "g25c",
     "g35p",
     "g35e",
     "g35eh",
     "glp",
     "gle"
    ]
   },
   {
    "name": "녹턴 그레이 메탈릭",
    "price": 0,
    "trims": [
     "g25p",
     "g25e",
     "g25c",
     "g35p",
     "g35e",
     "g35eh",
     "glp",
     "gle"
    ]
   },
   {
    "name": "트랜스미션 블루 펄",
    "price": 0,
    "trims": [
     "g25p",
     "g25e",
     "g25c",
     "g35p",
     "g35e",
     "g35eh",
     "glp",
     "gle"
    ]
   },
   {
    "name": "아티스널 버건디 펄",
    "price": 0,
    "trims": [
     "g25p",
     "g25e",
     "g25c",
     "g35p",
     "g35e",
     "g35eh",
     "glp",
     "gle"
    ]
   },
   {
    "name": "에어로 실버 메탈릭",
    "price": 0,
    "trims": [
     "g25p",
     "g25e",
     "g25c",
     "g35p",
     "g35e",
     "g35eh",
     "glp",
     "gle"
    ]
   },
   {
    "name": "아티스널 버건디 매트",
    "price": 300000,
    "trims": [
     "g25p",
     "g25e",
     "g25c",
     "g35p",
     "g35e",
     "g35eh",
     "glp",
     "gle"
    ]
   },
   {
    "name": "트랜스미션 블루 매트",
    "price": 300000,
    "trims": [
     "g25p",
     "g25e",
     "g25c",
     "g35p",
     "g35e",
     "g35eh",
     "glp",
     "gle"
    ]
   },
   {
    "name": "녹턴 그레이 매트",
    "price": 300000,
    "trims": [
     "g25p",
     "g25e",
     "g25c",
     "g35p",
     "g35e",
     "g35eh",
     "glp",
     "gle"
    ]
   }
  ],
  "interior": [
   {
    "name": "블랙 모노톤",
    "price": 0,
    "trims": [
     "g25c",
     "g25b"
    ]
   },
   {
    "name": "버건디 원톤",
    "price": 0,
    "trims": [
     "g25c"
    ]
   }
  ],
  "options": [
   {
    "name": "현대 스마트센스Ⅰ",
    "price": 1400000,
    "trims": [
     "g25p",
     "g35p",
     "glp"
    ],
    "desc": "후측방 충돌방지, 후방 교차 충돌방지, 안전 하차 보조, 1열 모니터링"
   },
   {
    "name": "파킹 어시스트",
    "price": 1700000,
    "trims": [
     "g25p",
     "g35p",
     "glp"
    ],
    "desc": "서라운드뷰, 후측방 모니터, 원격 스마트 주차, 기억 후진 보조"
   },
   {
    "name": "프리미엄 초이스",
    "price": 1200000,
    "trims": [
     "g25p",
     "g35p",
     "glp"
    ],
    "desc": "디지털키2, 천연가죽(퀼팅), 스마트 파워 트렁크, 듀얼 무선충전"
   },
   {
    "name": "플래티넘",
    "price": 2050000,
    "trims": [
     "g25e",
     "g35e",
     "g35eh"
    ],
    "desc": "무드램프, 19인치 휠, 프리뷰 전자제어 서스펜션, HUD"
   },
   {
    "name": "플래티넘(LPG 3.5)",
    "price": 1650000,
    "trims": [
     "gle"
    ],
    "desc": "무드램프, 19인치 휠, 2열 통풍시트, HUD"
   },
   {
    "name": "현대 스마트센스Ⅱ",
    "price": 1400000,
    "trims": [
     "g25e",
     "g35e",
     "g35eh",
     "gle"
    ],
    "desc": "교차로·측방 대응 충돌방지, 회피조향, HDA2, 후측방 충돌방지"
   },
   {
    "name": "시트 컴포트Ⅰ",
    "price": 1200000,
    "trims": [
     "g25e",
     "g35e",
     "g35eh"
    ],
    "desc": "2열 리클라이닝·통풍, 동승석 에르고 모션 시트"
   },
   {
    "name": "BOSE 프리미엄 사운드 패키지",
    "price": 1200000,
    "trims": [
     "g25e",
     "g35e",
     "g35eh",
     "gle"
    ],
    "desc": "BOSE 14스피커, 액티브 로드 노이즈 컨트롤"
   },
   {
    "name": "20인치 알로이 휠 & 타이어",
    "price": 250000,
    "trims": [
     "g25e",
     "g35e",
     "g35eh"
    ],
    "desc": "20인치 휠 (플래티넘 선택 시)"
   },
   {
    "name": "파노라마 선루프",
    "price": 1200000,
    "trims": [
     "g25e",
     "g35e",
     "g35eh",
     "gle"
    ],
    "desc": "파노라마 선루프"
   },
   {
    "name": "빌트인 캠 2 Plus",
    "price": 650000,
    "trims": [
     "g25e",
     "g35e",
     "g35eh",
     "gle"
    ],
    "desc": "주행/주차 녹화, 음성녹음, 주차 중 20시간 녹화"
   },
   {
    "name": "20인치 알로이 휠 & 타이어(캘리그래피)",
    "price": 450000,
    "trims": [
     "g25c"
    ],
    "desc": "캘리그래피 전용 20인치 휠·피렐리"
   },
   {
    "name": "시트 컴포트 플러스",
    "price": 1500000,
    "trims": [
     "g25c",
     "g25b"
    ],
    "desc": "2열 리클라이닝·전동 도어커튼, 동승석 에르고 모션"
   },
   {
    "name": "스마트 비전 루프",
    "price": 1800000,
    "trims": [
     "g25c",
     "g25b"
    ],
    "desc": "스마트 비전 루프 (파노라마 선루프와 중복 불가)"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "grandeur-hybrid",
  "name": "더 뉴 그랜저 하이브리드",
  "category": "세단",
  "year": "2027년형 (페이스리프트, 2026.05 출시)",
  "taxNote": "세제혜택(개소세 등 감면) 후 판매가, 부가세 포함. 친환경차 감면 2026년 말 종료 예정(이후 +100만원). 옵션가는 세제혜택 전 기준",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/the-new-grandeur-hybrid-price.pdf",
  "sourceDate": "2026-05-14",
  "trims": [
   {
    "id": "gh_p",
    "name": "프리미엄",
    "powertrain": "1.6 터보 하이브리드",
    "price": 48330000
   },
   {
    "id": "gh_e",
    "name": "익스클루시브",
    "powertrain": "1.6 터보 하이브리드",
    "price": 52820000
   },
   {
    "id": "gh_c",
    "name": "캘리그래피",
    "powertrain": "1.6 터보 하이브리드",
    "price": 58990000
   },
   {
    "id": "gh_b",
    "name": "블랙 잉크",
    "powertrain": "1.6 터보 하이브리드",
    "price": 59890000
   }
  ],
  "exterior": [
   {
    "name": "세레니티 화이트 펄",
    "price": 100000,
    "trims": null
   },
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "바이오필릭 블루 펄",
    "price": 0,
    "trims": [
     "gh_p",
     "gh_e",
     "gh_c"
    ]
   },
   {
    "name": "녹턴 그레이 메탈릭",
    "price": 0,
    "trims": [
     "gh_p",
     "gh_e",
     "gh_c"
    ]
   },
   {
    "name": "트랜스미션 블루 펄",
    "price": 0,
    "trims": [
     "gh_p",
     "gh_e",
     "gh_c"
    ]
   },
   {
    "name": "아티스널 버건디 펄",
    "price": 0,
    "trims": [
     "gh_p",
     "gh_e",
     "gh_c"
    ]
   },
   {
    "name": "에어로 실버 메탈릭",
    "price": 0,
    "trims": [
     "gh_p",
     "gh_e",
     "gh_c"
    ]
   },
   {
    "name": "아티스널 버건디 매트",
    "price": 300000,
    "trims": [
     "gh_p",
     "gh_e",
     "gh_c"
    ]
   },
   {
    "name": "트랜스미션 블루 매트",
    "price": 300000,
    "trims": [
     "gh_p",
     "gh_e",
     "gh_c"
    ]
   },
   {
    "name": "녹턴 그레이 매트",
    "price": 300000,
    "trims": [
     "gh_p",
     "gh_e",
     "gh_c"
    ]
   }
  ],
  "interior": [
   {
    "name": "블랙 모노톤",
    "price": 0,
    "trims": [
     "gh_c",
     "gh_b"
    ]
   },
   {
    "name": "버건디 원톤",
    "price": 0,
    "trims": [
     "gh_c"
    ]
   }
  ],
  "options": [
   {
    "name": "현대 스마트센스Ⅰ",
    "price": 1400000,
    "trims": [
     "gh_p"
    ],
    "desc": "후측방 충돌방지, 후방 교차 충돌방지, 안전 하차 보조, 1열 모니터링"
   },
   {
    "name": "파킹 어시스트",
    "price": 1700000,
    "trims": [
     "gh_p"
    ],
    "desc": "서라운드뷰, 원격 스마트 주차, 기억 후진 보조"
   },
   {
    "name": "프리미엄 초이스",
    "price": 1200000,
    "trims": [
     "gh_p"
    ],
    "desc": "디지털키2, 천연가죽(퀼팅), 스마트 파워 트렁크, 듀얼 무선충전"
   },
   {
    "name": "플래티넘",
    "price": 2050000,
    "trims": [
     "gh_e"
    ],
    "desc": "무드램프, 19인치 휠, 전자제어 서스펜션, HUD"
   },
   {
    "name": "현대 스마트센스Ⅱ",
    "price": 1400000,
    "trims": [
     "gh_e"
    ],
    "desc": "전방 충돌방지 확장, HDA2, 2열 어린이 탑승 감지"
   },
   {
    "name": "시트 컴포트Ⅱ",
    "price": 1850000,
    "trims": [
     "gh_e"
    ],
    "desc": "2열 리클라이닝·통풍, 동승석 에르고 모션, 빌트인 캠2 Plus"
   },
   {
    "name": "BOSE 프리미엄 사운드 패키지",
    "price": 1200000,
    "trims": [
     "gh_e"
    ],
    "desc": "BOSE 14스피커, 액티브 로드 노이즈 컨트롤"
   },
   {
    "name": "20인치 알로이 휠 & 타이어",
    "price": 250000,
    "trims": [
     "gh_e"
    ],
    "desc": "20인치 휠 (플래티넘 선택 시)"
   },
   {
    "name": "파노라마 선루프",
    "price": 1200000,
    "trims": [
     "gh_e"
    ],
    "desc": "파노라마 선루프"
   },
   {
    "name": "빌트인 캠 2 Plus",
    "price": 650000,
    "trims": [
     "gh_e"
    ],
    "desc": "주행/주차 녹화 (시트 컴포트Ⅱ와 중복 불가)"
   },
   {
    "name": "20인치 알로이 휠 & 타이어(캘리그래피)",
    "price": 450000,
    "trims": [
     "gh_c"
    ],
    "desc": "캘리그래피 전용 20인치 휠"
   },
   {
    "name": "시트 컴포트 플러스",
    "price": 1500000,
    "trims": [
     "gh_c",
     "gh_b"
    ],
    "desc": "2열 리클라이닝·전동 도어커튼, 동승석 에르고 모션"
   },
   {
    "name": "스마트 비전 루프",
    "price": 1800000,
    "trims": [
     "gh_c",
     "gh_b"
    ],
    "desc": "스마트 비전 루프 (파노라마 선루프와 중복 불가)"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "tucson",
  "name": "디 올 뉴 투싼 (5세대)",
  "category": "SUV",
  "year": "2027년형",
  "taxNote": "개별소비세 5% 기준(2026.7 인하 종료 후). 하이브리드는 친환경차 세제혜택 후 가격(세제혜택 전 +100만원)",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/the-all-new-tucson_price.pdf ; https://www.hyundai.com/contents/repn-car/catalog/the-all-new-tucson-hybrid_price.pdf",
  "sourceDate": "2026-10-21",
  "trims": [
   {
    "id": "g1",
    "name": "H-Pick",
    "powertrain": "1.6 터보 가솔린 2WD",
    "price": 31400000
   },
   {
    "id": "g2",
    "name": "익스클루시브",
    "powertrain": "1.6 터보 가솔린 2WD",
    "price": 35300000
   },
   {
    "id": "g3",
    "name": "XRT",
    "powertrain": "1.6 터보 가솔린 2WD",
    "price": 36800000
   },
   {
    "id": "g4",
    "name": "인스퍼레이션",
    "powertrain": "1.6 터보 가솔린 2WD",
    "price": 37900000
   },
   {
    "id": "h1",
    "name": "H-Pick",
    "powertrain": "1.6 터보 하이브리드 2WD",
    "price": 36150000
   },
   {
    "id": "h2",
    "name": "익스클루시브",
    "powertrain": "1.6 터보 하이브리드 2WD",
    "price": 39900000
   },
   {
    "id": "h3",
    "name": "XRT",
    "powertrain": "1.6 터보 하이브리드 2WD",
    "price": 41650000
   },
   {
    "id": "h4",
    "name": "인스퍼레이션",
    "powertrain": "1.6 터보 하이브리드 2WD",
    "price": 42700000
   }
  ],
  "exterior": [
   {
    "name": "세레니티 화이트 펄",
    "price": 100000,
    "trims": null
   },
   {
    "name": "쉬머링 실버 메탈릭",
    "price": 0,
    "trims": null
   },
   {
    "name": "고요 카퍼 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "드리프트우드 그레이 메탈릭",
    "price": 0,
    "trims": null
   },
   {
    "name": "에코트로닉 그레이 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "팬텀 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "레드록 오렌지 매트",
    "price": 300000,
    "trims": null
   },
   {
    "name": "드리프트우드 그레이 매트",
    "price": 300000,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "블랙 모노톤",
    "price": 0,
    "trims": [
     "g1",
     "g2",
     "g4",
     "h1",
     "h2",
     "h4"
    ]
   },
   {
    "name": "머드 그레이/도브 그레이 투톤",
    "price": 0,
    "trims": [
     "g1",
     "g2",
     "g4",
     "h1",
     "h2",
     "h4"
    ]
   },
   {
    "name": "블랙/샌드 베이지 투톤",
    "price": 0,
    "trims": [
     "g1",
     "g2",
     "g4",
     "h1",
     "h2",
     "h4"
    ]
   },
   {
    "name": "블랙/인레이 소일 브라운",
    "price": 0,
    "trims": [
     "g4",
     "h4"
    ]
   },
   {
    "name": "XRT 전용 블랙 모노톤",
    "price": 0,
    "trims": [
     "g3",
     "h3"
    ]
   },
   {
    "name": "XRT 전용 블랙/인레이 소일 브라운",
    "price": 0,
    "trims": [
     "g3",
     "h3"
    ]
   }
  ],
  "options": [
   {
    "name": "HTRAC(4WD)+험로주행모드+그라운드 뷰",
    "price": 2400000,
    "trims": null,
    "desc": "사륜구동, 험로주행모드, 그라운드 뷰"
   },
   {
    "name": "파노라마 선루프+루프랙",
    "price": 1200000,
    "trims": [
     "g1",
     "h1"
    ],
    "desc": "파노라마 선루프, 루프랙"
   },
   {
    "name": "익스테리어 디자인 I",
    "price": 600000,
    "trims": [
     "g1",
     "h1",
     "h2"
    ],
    "desc": "18인치 알로이 휠, 전/후면 LED 센터램프"
   },
   {
    "name": "하이패스",
    "price": 200000,
    "trims": [
     "g1",
     "h1"
    ],
    "desc": "하이패스"
   },
   {
    "name": "현대 스마트센스",
    "price": 500000,
    "trims": [
     "g1",
     "g2",
     "g3",
     "h1",
     "h2",
     "h3"
    ],
    "desc": "고속도로 주행 보조2, 전방/후측방 충돌방지 보조 확장"
   },
   {
    "name": "컴포트 I",
    "price": 790000,
    "trims": [
     "g1"
    ],
    "desc": "운전석 전동시트·럼버, 1열 통풍, 듀얼 풀오토 에어컨"
   },
   {
    "name": "컴포트 I",
    "price": 540000,
    "trims": [
     "h1"
    ],
    "desc": "운전석 전동시트(8way)·럼버, 1열 통풍시트"
   },
   {
    "name": "파노라마 선루프",
    "price": 1100000,
    "trims": [
     "g2",
     "g3",
     "g4",
     "h2",
     "h3",
     "h4"
    ],
    "desc": "파노라마 선루프"
   },
   {
    "name": "익스테리어 디자인 II",
    "price": 850000,
    "trims": [
     "g2"
    ],
    "desc": "20인치 알로이 휠, 전/후면 LED 센터램프"
   },
   {
    "name": "컴포트 II",
    "price": 690000,
    "trims": [
     "g2",
     "g3",
     "h2",
     "h3"
    ],
    "desc": "운전석 메모리·릴랙션, 동승석 전동·릴랙션·워크인, 2열 열선"
   },
   {
    "name": "커넥트 플러스",
    "price": 950000,
    "trims": [
     "g2",
     "g3",
     "h2",
     "h3"
    ],
    "desc": "플레오스 커넥트 17인치, 듀얼 무선충전, 디지털 키2"
   },
   {
    "name": "스마트 익스테리어",
    "price": 1350000,
    "trims": [
     "g2",
     "h2"
    ],
    "desc": "빌트인 캠2 Plus, 다크 메탈릭 도장 등 (커넥트 플러스 선택 시)"
   },
   {
    "name": "빌트인 캠 2 Plus",
    "price": 650000,
    "trims": [
     "g3",
     "h3"
    ],
    "desc": "블랙박스 (XRT는 커넥트 플러스 선택 시)"
   },
   {
    "name": "빌트인 캠 2 Plus",
    "price": 650000,
    "trims": [
     "g4",
     "h4"
    ],
    "desc": "음성녹음, 주행/주차 영상 저장"
   },
   {
    "name": "익스테리어 디자인 III",
    "price": 1050000,
    "trims": [
     "g4",
     "h4"
    ],
    "desc": "20인치 휠+미쉐린, 지능형 Full LED 헤드램프"
   },
   {
    "name": "컨비니언스",
    "price": 950000,
    "trims": [
     "g4",
     "h4"
    ],
    "desc": "헤드업 디스플레이, 디지털 키2"
   },
   {
    "name": "Audio by BANG & OLUFSEN",
    "price": 1100000,
    "trims": [
     "g3",
     "g4",
     "h3",
     "h4"
    ],
    "desc": "12스피커, 외장앰프"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "santafe",
  "name": "디 올 뉴 싼타페",
  "category": "SUV",
  "year": "2026년형",
  "taxNote": "개별소비세 5% 기준(현행 가격표). 하이브리드 2WD는 친환경차 세제혜택 후 가격(세제혜택 전 +100만원), 5인승 기준",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/santafe-2026-price.pdf ; https://www.hyundai.com/contents/repn-car/catalog/santafe-hev-2026-price.pdf",
  "sourceDate": "2025-08-07",
  "trims": [
   {
    "id": "g1",
    "name": "익스클루시브",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 36570000
   },
   {
    "id": "g2",
    "name": "프레스티지",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 39440000
   },
   {
    "id": "g3",
    "name": "H-Pick",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 42090000
   },
   {
    "id": "g4",
    "name": "블랙 익스테리어",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 42440000
   },
   {
    "id": "g5",
    "name": "캘리그래피",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 45470000
   },
   {
    "id": "g6",
    "name": "블랙 잉크",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 45470000
   },
   {
    "id": "h1",
    "name": "익스클루시브",
    "powertrain": "1.6 터보 하이브리드 2WD",
    "price": 40220000
   },
   {
    "id": "h2",
    "name": "프레스티지",
    "powertrain": "1.6 터보 하이브리드 2WD",
    "price": 43090000
   },
   {
    "id": "h3",
    "name": "H-Pick",
    "powertrain": "1.6 터보 하이브리드 2WD",
    "price": 45730000
   },
   {
    "id": "h4",
    "name": "블랙 익스테리어",
    "powertrain": "1.6 터보 하이브리드 2WD",
    "price": 46080000
   },
   {
    "id": "h5",
    "name": "캘리그래피",
    "powertrain": "1.6 터보 하이브리드 2WD",
    "price": 48770000
   },
   {
    "id": "h6",
    "name": "블랙 잉크",
    "powertrain": "1.6 터보 하이브리드 2WD",
    "price": 48770000
   }
  ],
  "exterior": [
   {
    "name": "에코트로닉 그레이 펄",
    "price": 0,
    "trims": [
     "g1",
     "g2",
     "g3",
     "g5",
     "h1",
     "h2",
     "h3",
     "h5"
    ]
   },
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "크리미 화이트 펄",
    "price": 80000,
    "trims": null
   },
   {
    "name": "사이버 세이지 펄",
    "price": 0,
    "trims": [
     "g1",
     "g2",
     "g3",
     "g5",
     "h1",
     "h2",
     "h3",
     "h5"
    ]
   },
   {
    "name": "크리미 화이트 매트",
    "price": 200000,
    "trims": [
     "g6",
     "h6"
    ]
   },
   {
    "name": "얼씨 브래스 매트",
    "price": 200000,
    "trims": [
     "g1",
     "g2",
     "g3",
     "g5",
     "h1",
     "h2",
     "h3",
     "h5"
    ]
   }
  ],
  "interior": [
   {
    "name": "블랙 원톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "그레이 투톤",
    "price": 0,
    "trims": [
     "g2",
     "g3",
     "g4",
     "g5",
     "h2",
     "h3",
     "h4",
     "h5"
    ]
   },
   {
    "name": "피칸 브라운 투톤",
    "price": 0,
    "trims": [
     "g2",
     "g3",
     "g4",
     "g5",
     "h2",
     "h3",
     "h4",
     "h5"
    ]
   }
  ],
  "options": [
   {
    "name": "HTRAC(AWD)+험로주행모드",
    "price": 2230000,
    "trims": [
     "g1",
     "g2",
     "g3",
     "g4",
     "g5",
     "g6"
    ],
    "desc": "사륜구동, 험로주행모드"
   },
   {
    "name": "HTRAC(AWD)+험로주행모드",
    "price": 3230000,
    "trims": [
     "h1",
     "h2",
     "h3",
     "h4",
     "h5",
     "h6"
    ],
    "desc": "사륜구동 (223만원+AWD 선택 시 세제혜택 100만원 미적용)"
   },
   {
    "name": "6인승",
    "price": 1040000,
    "trims": null,
    "desc": "2열 독립 전동시트, 3열 리클라이닝·에어컨"
   },
   {
    "name": "7인승",
    "price": 690000,
    "trims": null,
    "desc": "2열 원터치 워크인, 3열 시트"
   },
   {
    "name": "빌트인 캠 2+증강현실 내비",
    "price": 450000,
    "trims": null,
    "desc": "블랙박스, AR 내비게이션"
   },
   {
    "name": "듀얼 와이드 선루프+루프랙",
    "price": 990000,
    "trims": [
     "g1",
     "h1"
    ],
    "desc": "듀얼 와이드 선루프, 루프랙"
   },
   {
    "name": "동승석 8way 전동시트",
    "price": 200000,
    "trims": [
     "g1",
     "h1"
    ],
    "desc": "동승석 전동시트"
   },
   {
    "name": "헤드업 디스플레이",
    "price": 590000,
    "trims": [
     "g1",
     "g2",
     "h1",
     "h2"
    ],
    "desc": "HUD"
   },
   {
    "name": "파킹 어시스트 플러스 I",
    "price": 1190000,
    "trims": [
     "g1",
     "g2",
     "h1",
     "h2"
    ],
    "desc": "서라운드뷰, 후측방 모니터, 원격 스마트 주차 등"
   },
   {
    "name": "플래티넘 I",
    "price": 450000,
    "trims": [
     "g1",
     "h1"
    ],
    "desc": "디지털 키2, 듀얼 무선충전"
   },
   {
    "name": "베스트 셀렉션 I",
    "price": 1500000,
    "trims": [
     "g1",
     "h1"
    ],
    "desc": "파킹 어시스트 플러스 I + 플래티넘 I 묶음"
   },
   {
    "name": "듀얼 와이드 선루프",
    "price": 890000,
    "trims": [
     "g2",
     "g3",
     "g4",
     "g5",
     "g6",
     "h2",
     "h3",
     "h4",
     "h5",
     "h6"
    ],
    "desc": "듀얼 와이드 선루프"
   },
   {
    "name": "시트 플러스",
    "price": 740000,
    "trims": [
     "g2",
     "h2"
    ],
    "desc": "에르고 모션 운전석, 릴랙션 시트, 전동 스티어링"
   },
   {
    "name": "디자인 플러스 I",
    "price": 1350000,
    "trims": [
     "g2"
    ],
    "desc": "20인치 휠, 천연가죽 시트, 스웨이드 내장, 앰비언트"
   },
   {
    "name": "디자인 플러스 II",
    "price": 850000,
    "trims": [
     "h2"
    ],
    "desc": "천연가죽 시트, 스웨이드 내장, 앰비언트 (2WD)"
   },
   {
    "name": "디자인 플러스 I",
    "price": 1350000,
    "trims": [
     "h2"
    ],
    "desc": "20인치 휠+디자인 플러스 II 내용 (AWD 선택 시)"
   },
   {
    "name": "20인치 휠&타이어",
    "price": 490000,
    "trims": [
     "h2"
    ],
    "desc": "20인치 휠 (하이브리드 2WD)"
   },
   {
    "name": "20인치 휠&타이어",
    "price": 490000,
    "trims": [
     "g3",
     "g4",
     "h3",
     "h4"
    ],
    "desc": "20인치 휠&타이어"
   },
   {
    "name": "BOSE 프리미엄 사운드",
    "price": 640000,
    "trims": [
     "g3",
     "g4",
     "g5",
     "g6",
     "h3",
     "h4",
     "h5",
     "h6"
    ],
    "desc": "12스피커, 외장앰프"
   },
   {
    "name": "블랙 잉크 플러스",
    "price": 940000,
    "trims": [
     "g6",
     "h6"
    ],
    "desc": "블랙 사이드스텝, 라이프스타일 패키지"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "palisade",
  "name": "디 올 뉴 팰리세이드",
  "category": "SUV",
  "year": "2027년형",
  "taxNote": "개별소비세 5% 기준. 하이브리드는 익스클루시브 7인승만 친환경차 세제혜택 후 가격(세제혜택 전 5,240만원), 나머지는 혜택 미적용 가격",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/palisade-2027-price.pdf ; https://www.hyundai.com/contents/repn-car/catalog/palisade-hev-2027-price.pdf",
  "sourceDate": "2026-08-25",
  "trims": [
   {
    "id": "g9e",
    "name": "익스클루시브 9인승",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 44780000
   },
   {
    "id": "g9h",
    "name": "H-Pick 9인승",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 50400000
   },
   {
    "id": "g9x",
    "name": "XRT 9인승",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 52110000
   },
   {
    "id": "g9c",
    "name": "캘리그래피 9인승",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 56060000
   },
   {
    "id": "g9b",
    "name": "블랙 잉크 9인승",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 57670000
   },
   {
    "id": "g9r",
    "name": "하이루프 9인승",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 72440000
   },
   {
    "id": "g7e",
    "name": "익스클루시브 7인승",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 46100000
   },
   {
    "id": "g7h",
    "name": "H-Pick 7인승",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 52030000
   },
   {
    "id": "g7x",
    "name": "XRT 7인승",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 53820000
   },
   {
    "id": "g7c",
    "name": "캘리그래피 7인승",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 58070000
   },
   {
    "id": "g7b",
    "name": "블랙 잉크 7인승",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 59770000
   },
   {
    "id": "g7r",
    "name": "하이루프 7인승",
    "powertrain": "2.5 터보 가솔린 2WD",
    "price": 75300000
   },
   {
    "id": "h9e",
    "name": "익스클루시브 9인승",
    "powertrain": "2.5 터보 하이브리드 2WD",
    "price": 50770000
   },
   {
    "id": "h9h",
    "name": "H-Pick 9인승",
    "powertrain": "2.5 터보 하이브리드 2WD",
    "price": 56400000
   },
   {
    "id": "h9c",
    "name": "캘리그래피 9인승",
    "powertrain": "2.5 터보 하이브리드 2WD",
    "price": 62060000
   },
   {
    "id": "h9b",
    "name": "블랙 잉크 9인승",
    "powertrain": "2.5 터보 하이브리드 2WD",
    "price": 63670000
   },
   {
    "id": "h9r",
    "name": "하이루프 9인승",
    "powertrain": "2.5 터보 하이브리드 2WD",
    "price": 78440000
   },
   {
    "id": "h7e",
    "name": "익스클루시브 7인승",
    "powertrain": "2.5 터보 하이브리드 2WD",
    "price": 51400000
   },
   {
    "id": "h7h",
    "name": "H-Pick 7인승",
    "powertrain": "2.5 터보 하이브리드 2WD",
    "price": 58320000
   },
   {
    "id": "h7c",
    "name": "캘리그래피 7인승",
    "powertrain": "2.5 터보 하이브리드 2WD",
    "price": 64360000
   },
   {
    "id": "h7b",
    "name": "블랙 잉크 7인승",
    "powertrain": "2.5 터보 하이브리드 2WD",
    "price": 66060000
   },
   {
    "id": "h7r",
    "name": "하이루프 7인승",
    "powertrain": "2.5 터보 하이브리드 2WD",
    "price": 81590000
   }
  ],
  "exterior": [
   {
    "name": "쉬머링 실버 메탈릭",
    "price": 0,
    "trims": [
     "g9e",
     "g9h",
     "g9x",
     "g9c",
     "g7e",
     "g7h",
     "g7x",
     "g7c",
     "h9e",
     "h9h",
     "h9c",
     "h7e",
     "h7h",
     "h7c"
    ]
   },
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "클래지 블루 펄",
    "price": 0,
    "trims": [
     "g9e",
     "g9h",
     "g9x",
     "g9c",
     "g7e",
     "g7h",
     "g7x",
     "g7c",
     "h9e",
     "h9h",
     "h9c",
     "h7e",
     "h7h",
     "h7c"
    ]
   },
   {
    "name": "캐스트 아이언 브라운 펄",
    "price": 0,
    "trims": [
     "g9e",
     "g9h",
     "g9x",
     "g9c",
     "g7e",
     "g7h",
     "g7x",
     "g7c",
     "h9e",
     "h9h",
     "h9c",
     "h7e",
     "h7h",
     "h7c"
    ]
   },
   {
    "name": "타이탄 차콜 펄",
    "price": 0,
    "trims": [
     "g9e",
     "g9h",
     "g9x",
     "g9c",
     "g7e",
     "g7h",
     "g7x",
     "g7c",
     "h9e",
     "h9h",
     "h9c",
     "h7e",
     "h7h",
     "h7c"
    ]
   },
   {
    "name": "로버스트 에메랄드 펄",
    "price": 0,
    "trims": [
     "g9c",
     "g7c",
     "h9c",
     "h7c"
    ]
   },
   {
    "name": "에코트로닉 그레이 펄",
    "price": 0,
    "trims": [
     "g9e",
     "g9h",
     "g9x",
     "g9c",
     "g7e",
     "g7h",
     "g7x",
     "g7c",
     "h9e",
     "h9h",
     "h9c",
     "h7e",
     "h7h",
     "h7c"
    ]
   },
   {
    "name": "크리미 화이트 펄 (9인승)",
    "price": 90000,
    "trims": [
     "g9e",
     "g9h",
     "g9x",
     "g9c",
     "g9b",
     "g9r",
     "h9e",
     "h9h",
     "h9c",
     "h9b",
     "h9r"
    ]
   },
   {
    "name": "크리미 화이트 펄 (7인승)",
    "price": 100000,
    "trims": [
     "g7e",
     "g7h",
     "g7x",
     "g7c",
     "g7b",
     "g7r",
     "h7e",
     "h7h",
     "h7c",
     "h7b",
     "h7r"
    ]
   }
  ],
  "interior": [
   {
    "name": "블랙",
    "price": 0,
    "trims": [
     "g9e",
     "g9h",
     "g9c",
     "g9b",
     "g7e",
     "g7h",
     "g7c",
     "g7b",
     "h9e",
     "h9h",
     "h9c",
     "h9b",
     "h7e",
     "h7h",
     "h7c",
     "h7b"
    ]
   },
   {
    "name": "그레이",
    "price": 0,
    "trims": [
     "g9h",
     "g9c",
     "g7h",
     "g7c",
     "h9h",
     "h9c",
     "h7h",
     "h7c"
    ]
   },
   {
    "name": "XRT 전용 블랙",
    "price": 0,
    "trims": [
     "g9x",
     "g7x"
    ]
   },
   {
    "name": "브라운 원톤(나파)",
    "price": 0,
    "trims": [
     "g9r",
     "g7r",
     "h9r",
     "h7r"
    ]
   }
  ],
  "options": [
   {
    "name": "HTRAC(AWD)+험로주행모드",
    "price": 2280000,
    "trims": [
     "g9e",
     "g9h",
     "g9x",
     "g9c",
     "g9b",
     "g9r",
     "h9h",
     "h9c",
     "h9b",
     "h9r"
    ],
    "desc": "사륜구동, 험로주행모드"
   },
   {
    "name": "HTRAC(AWD)+험로주행모드",
    "price": 2280000,
    "trims": [
     "h9e"
    ],
    "desc": "사륜구동 (선택 시 친환경차 요건 미충족)"
   },
   {
    "name": "HTRAC(AWD)+험로주행모드",
    "price": 2400000,
    "trims": [
     "g7e",
     "g7h",
     "g7x",
     "g7c",
     "g7b",
     "g7r",
     "h7h",
     "h7c",
     "h7b",
     "h7r"
    ],
    "desc": "사륜구동, 험로주행모드"
   },
   {
    "name": "HTRAC(AWD)+험로주행모드",
    "price": 3400000,
    "trims": [
     "h7e"
    ],
    "desc": "사륜구동 240만원+세제혜택 100만원 미적용"
   },
   {
    "name": "듀얼 와이드 선루프",
    "price": 850000,
    "trims": [
     "g9e",
     "g9h",
     "g9x",
     "g9c",
     "g9b",
     "h9e",
     "h9h",
     "h9c",
     "h9b"
    ],
    "desc": "듀얼 와이드 선루프"
   },
   {
    "name": "듀얼 와이드 선루프",
    "price": 900000,
    "trims": [
     "g7e",
     "g7h",
     "g7x",
     "g7c",
     "g7b",
     "h7e",
     "h7h",
     "h7c",
     "h7b"
    ],
    "desc": "듀얼 와이드 선루프"
   },
   {
    "name": "빌트인 캠 2 Plus+증강현실 내비",
    "price": 660000,
    "trims": [
     "g9e",
     "g9h",
     "g9x",
     "g9c",
     "g9b",
     "g9r",
     "h9e",
     "h9h",
     "h9c",
     "h9b",
     "h9r"
    ],
    "desc": "블랙박스, AR 내비 (H Genuine)"
   },
   {
    "name": "빌트인 캠 2 Plus+증강현실 내비",
    "price": 700000,
    "trims": [
     "g7e",
     "g7h",
     "g7x",
     "g7c",
     "g7b",
     "g7r",
     "h7e",
     "h7h",
     "h7c",
     "h7b",
     "h7r"
    ],
    "desc": "블랙박스, AR 내비 (H Genuine)"
   },
   {
    "name": "사이드스텝",
    "price": 430000,
    "trims": [
     "g9e",
     "g9h",
     "g9x",
     "g9c",
     "g9b",
     "g9r",
     "h9e",
     "h9h",
     "h9c",
     "h9b",
     "h9r"
    ],
    "desc": "사이드스텝 (H Genuine)"
   },
   {
    "name": "사이드스텝",
    "price": 450000,
    "trims": [
     "g7e",
     "g7h",
     "g7x",
     "g7c",
     "g7b",
     "g7r",
     "h7e",
     "h7h",
     "h7c",
     "h7b",
     "h7r"
    ],
    "desc": "사이드스텝 (H Genuine)"
   },
   {
    "name": "빌트인 공기청정기",
    "price": 520000,
    "trims": [
     "g9e",
     "g9h",
     "g9x",
     "g9c",
     "g9b",
     "h9e",
     "h9h",
     "h9c",
     "h9b"
    ],
    "desc": "실내 공기청정기 (H Genuine)"
   },
   {
    "name": "빌트인 공기청정기",
    "price": 550000,
    "trims": [
     "g7e",
     "g7h",
     "g7x",
     "g7c",
     "g7b",
     "h7e",
     "h7h",
     "h7c",
     "h7b"
    ],
    "desc": "실내 공기청정기 (H Genuine)"
   },
   {
    "name": "컴포트",
    "price": 1330000,
    "trims": [
     "g9e",
     "h9e"
    ],
    "desc": "천연가죽 시트, 운전석 메모리, 동승석 전동, 파워 테일게이트"
   },
   {
    "name": "컴포트",
    "price": 1400000,
    "trims": [
     "g7e",
     "h7e"
    ],
    "desc": "천연가죽 시트, 운전석 메모리, 동승석 전동, 파워 테일게이트"
   },
   {
    "name": "파킹 어시스트",
    "price": 1130000,
    "trims": [
     "g9e",
     "h9e"
    ],
    "desc": "서라운드뷰, 후측방 모니터, 원격 스마트 주차 등"
   },
   {
    "name": "파킹 어시스트",
    "price": 1190000,
    "trims": [
     "g7e",
     "h7e"
    ],
    "desc": "서라운드뷰, 후측방 모니터, 원격 스마트 주차 등"
   },
   {
    "name": "컴포트 플러스",
    "price": 1850000,
    "trims": [
     "g9h",
     "h9h"
    ],
    "desc": "나파가죽, 에르고 모션 시트, 2열 통풍, 3열 전동·열선"
   },
   {
    "name": "컴포트 플러스",
    "price": 2200000,
    "trims": [
     "g7h",
     "h7h"
    ],
    "desc": "나파가죽, 2열 전동 독립·릴렉션, 2열 통풍, 3열 전동"
   },
   {
    "name": "BOSE 프리미엄 사운드",
    "price": 660000,
    "trims": [
     "g9h",
     "h9h"
    ],
    "desc": "14스피커, 외장앰프"
   },
   {
    "name": "BOSE 프리미엄 사운드",
    "price": 700000,
    "trims": [
     "g7h",
     "h7h"
    ],
    "desc": "14스피커, 외장앰프"
   },
   {
    "name": "컴포트 XRT",
    "price": 1330000,
    "trims": [
     "g9x"
    ],
    "desc": "에르고 모션 시트, 릴랙션, 2열 전동폴딩, 3열 전동·열선"
   },
   {
    "name": "컴포트 XRT",
    "price": 1650000,
    "trims": [
     "g7x"
    ],
    "desc": "에르고 모션 시트, 2열 전동 독립, 3열 전동·열선"
   },
   {
    "name": "라이프 스타일 패키지",
    "price": 630000,
    "trims": [
     "g9h",
     "g9x",
     "g9c",
     "g9b"
    ],
    "desc": "LED 테일게이트·도어스팟 램프, 러기지 매트/네트/스크린"
   },
   {
    "name": "라이프 스타일 패키지",
    "price": 700000,
    "trims": [
     "g7h",
     "g7x",
     "g7c",
     "g7b"
    ],
    "desc": "LED 램프, 러기지 매트/네트/스크린, 220V 인버터"
   },
   {
    "name": "라이프 스타일 패키지(HEV)",
    "price": 1050000,
    "trims": [
     "h9h",
     "h9c",
     "h9b"
    ],
    "desc": "LED 테일게이트·도어스팟 램프, 러기지 매트/네트"
   },
   {
    "name": "라이프 스타일 패키지(HEV)",
    "price": 1100000,
    "trims": [
     "h7h",
     "h7c",
     "h7b"
    ],
    "desc": "LED 테일게이트·도어스팟 램프, 러기지 매트/네트"
   },
   {
    "name": "프리뷰 전자제어 서스펜션",
    "price": 1230000,
    "trims": [
     "g9c",
     "h9c"
    ],
    "desc": "프리뷰 전자제어 서스펜션, 21인치 휠"
   },
   {
    "name": "프리뷰 전자제어 서스펜션",
    "price": 1300000,
    "trims": [
     "g7c",
     "h7c"
    ],
    "desc": "프리뷰 전자제어 서스펜션, 21인치 휠"
   },
   {
    "name": "2열 다이내믹 바디케어 시트",
    "price": 800000,
    "trims": [
     "g7c",
     "g7b",
     "g7r",
     "h7c",
     "h7b",
     "h7r"
    ],
    "desc": "2열 독립시트 마사지 기능"
   },
   {
    "name": "VIP 패키지 I",
    "price": 6700000,
    "trims": [
     "g7c",
     "h7c"
    ],
    "desc": "후석 엔터테인먼트, 2열 멀티콘솔, VIP 카매트"
   },
   {
    "name": "VIP 패키지 II",
    "price": 3930000,
    "trims": [
     "g7r",
     "h7r"
    ],
    "desc": "2열 멀티콘솔(UV-C·무선충전·공기청정), VIP 카매트"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "ioniq5",
  "name": "아이오닉 5",
  "category": "전기차",
  "year": "2027년형",
  "taxNote": "세제혜택 후(개소세·교육세 감면, 구매보조금 미반영). 선택품목·컬러 가격은 세제혜택 전 표기",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/ioniq-5-2027-price.pdf",
  "sourceDate": "2026-11-01",
  "trims": [
   {
    "id": "t1",
    "name": "E-Value+",
    "powertrain": "스탠다드(63.0kWh) 2WD",
    "price": 47350000
   },
   {
    "id": "t2",
    "name": "E-Lite",
    "powertrain": "롱레인지(84.0kWh) 2WD",
    "price": 50640000
   },
   {
    "id": "t3",
    "name": "Modern",
    "powertrain": "롱레인지(84.0kWh) 2WD",
    "price": 52900000
   },
   {
    "id": "t4",
    "name": "Premium",
    "powertrain": "롱레인지(84.0kWh) 2WD",
    "price": 58250000
   },
   {
    "id": "t5",
    "name": "N Line",
    "powertrain": "롱레인지(84.0kWh) 2WD",
    "price": 59450000
   },
   {
    "id": "t6",
    "name": "Inspiration",
    "powertrain": "롱레인지(84.0kWh) 2WD",
    "price": 61280000
   }
  ],
  "exterior": [
   {
    "name": "루시드 블루 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "사이버 그레이 메탈릭",
    "price": 0,
    "trims": null
   },
   {
    "name": "에코트로닉 그레이 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "디지털 틸그린 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "아틀라스 화이트",
    "price": 100000,
    "trims": null
   },
   {
    "name": "그래비티 골드 매트",
    "price": 300000,
    "trims": null
   },
   {
    "name": "셀라돈 그레이 매트",
    "price": 300000,
    "trims": [
     "t1",
     "t2",
     "t3",
     "t4",
     "t6"
    ]
   },
   {
    "name": "프로스티드 브라운 매트",
    "price": 300000,
    "trims": [
     "t1",
     "t2",
     "t3",
     "t4",
     "t6"
    ]
   },
   {
    "name": "얼티메이트 레드 메탈릭",
    "price": 0,
    "trims": [
     "t5"
    ]
   }
  ],
  "interior": [
   {
    "name": "블랙 원톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "다크 틸",
    "price": 0,
    "trims": [
     "t4",
     "t6"
    ]
   },
   {
    "name": "머드 그레이",
    "price": 0,
    "trims": [
     "t4",
     "t6"
    ]
   },
   {
    "name": "헤리티지 브라운",
    "price": 0,
    "trims": [
     "t4",
     "t6"
    ]
   }
  ],
  "options": [
   {
    "name": "HTRAC(AWD)",
    "price": 2470000,
    "trims": [
     "t2",
     "t4",
     "t5",
     "t6"
    ],
    "desc": "전륜 모터 추가 사륜구동"
   },
   {
    "name": "현대 스마트센스",
    "price": 1100000,
    "trims": [
     "t1",
     "t3"
    ],
    "desc": "전방충돌방지 확장, 후측방충돌방지, 안전하차보조, HDA2"
   },
   {
    "name": "컴포트 초이스",
    "price": 1100000,
    "trims": [
     "t1"
    ],
    "desc": "인조가죽, 1열 전동·통풍·열선, 열선핸들, 하이패스, ECM"
   },
   {
    "name": "빌트인 캠 2 패키지",
    "price": 600000,
    "trims": [
     "t1"
    ],
    "desc": "빌트인캠2+AR내비+스마트 파워 테일게이트(컴포트 초이스 선택 시)"
   },
   {
    "name": "컴포트",
    "price": 1500000,
    "trims": [
     "t3"
    ],
    "desc": "8way 전동시트, 1열 통풍, 2열 전동슬라이딩·열선, 메모리"
   },
   {
    "name": "스타일",
    "price": 1200000,
    "trims": [
     "t3"
    ],
    "desc": "Full LED 프로젝션 헤드램프, IFS, 히든 라이팅"
   },
   {
    "name": "하이패스 패키지",
    "price": 250000,
    "trims": [
     "t3"
    ],
    "desc": "하이패스, ECM 룸미러"
   },
   {
    "name": "파킹 어시스트",
    "price": 1500000,
    "trims": [
     "t3",
     "t4",
     "t5"
    ],
    "desc": "SVM, 주차충돌방지, 원격주차보조2 (Modern은 스타일 선택 시)"
   },
   {
    "name": "컴포트 플러스",
    "price": 600000,
    "trims": [
     "t4",
     "t5"
    ],
    "desc": "동승석 레그레스트, 메모리, 2열 전동슬라이딩, 도어커튼"
   },
   {
    "name": "비전루프",
    "price": 740000,
    "trims": [
     "t4",
     "t5",
     "t6"
    ],
    "desc": "고정형 글라스루프, 전동 롤블라인드"
   },
   {
    "name": "플래티넘",
    "price": 1100000,
    "trims": [
     "t4",
     "t5"
    ],
    "desc": "디지털키2, BOSE 8스피커, e-ASD"
   },
   {
    "name": "디지털 사이드 미러",
    "price": 1380000,
    "trims": [
     "t5",
     "t6"
    ],
    "desc": "카메라+OLED 모니터 (N Line은 파킹 어시스트 선택 시)"
   },
   {
    "name": "알칸타라/천연가죽 시트",
    "price": 400000,
    "trims": [
     "t5"
    ],
    "desc": "N Line 전용 시트"
   },
   {
    "name": "20인치 휠 & 미쉐린 타이어",
    "price": 490000,
    "trims": [
     "t4",
     "t6"
    ],
    "desc": "20인치 알로이 휠"
   },
   {
    "name": "디지털 센터 미러",
    "price": 500000,
    "trims": [
     "t4",
     "t5",
     "t6"
    ],
    "desc": "카메라 방식 룸미러"
   },
   {
    "name": "빌트인 캠 2 + 증강현실 내비게이션",
    "price": 450000,
    "trims": [
     "t3",
     "t4",
     "t5",
     "t6"
    ],
    "desc": "블랙박스+AR내비 (Modern은 하이패스 패키지 선택 시)"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "ioniq5n",
  "name": "아이오닉 5 N",
  "category": "전기차",
  "year": "2026년형",
  "taxNote": "판매가격(부가세 포함, 가격표에 세제혜택 후 금액 미표기), 구매보조금 미반영",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/ioniq5n-2026-price.pdf",
  "sourceDate": "2026-07-01",
  "trims": [
   {
    "id": "t1",
    "name": "N Essential",
    "powertrain": "84.0kWh AWD",
    "price": 78790000
   },
   {
    "id": "t2",
    "name": "N",
    "powertrain": "84.0kWh AWD",
    "price": 81420000
   }
  ],
  "exterior": [
   {
    "name": "아틀라스 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "퍼포먼스 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "에코트로닉 그레이 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "사이버 그레이 메탈릭",
    "price": 0,
    "trims": null
   },
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "소울트로닉 오렌지 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "퍼포먼스 블루 매트",
    "price": 200000,
    "trims": null
   },
   {
    "name": "그래비티 골드 매트",
    "price": 200000,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "블랙(퍼포먼스 블루 액센트)",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "컴포트 플러스",
    "price": 590000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "2열 열선, 도어커튼, 후석알림, 러기지 스크린, 2열 리모트폴딩"
   },
   {
    "name": "파킹 어시스트 Lite",
    "price": 900000,
    "trims": [
     "t1"
    ],
    "desc": "SVM, 후측방 모니터, 측방경고, 후방주차충돌방지"
   },
   {
    "name": "파킹 어시스트",
    "price": 1680000,
    "trims": [
     "t2"
    ],
    "desc": "SVM, 전/측/후방 주차충돌방지, 원격주차보조2"
   },
   {
    "name": "빌트인 캠 2 + 증강현실 내비게이션",
    "price": 450000,
    "trims": [
     "t2"
    ],
    "desc": "디지털 센터 미러와 동시 선택 불가"
   },
   {
    "name": "디지털 센터 미러",
    "price": 500000,
    "trims": [
     "t2"
    ],
    "desc": "빌트인 캠 2와 동시 선택 불가"
   },
   {
    "name": "비전루프",
    "price": 740000,
    "trims": [
     "t2"
    ],
    "desc": "고정형 글라스루프, 전동 롤블라인드"
   },
   {
    "name": "N Performance Parts 알칸타라 인테리어 패키지",
    "price": 550000,
    "trims": null,
    "desc": "알칸타라 스티어링 휠·도어 암레스트"
   },
   {
    "name": "차량 보호 필름Ⅰ",
    "price": 380000,
    "trims": null,
    "desc": "범퍼 사이드, 사이드미러, 도어스텝"
   },
   {
    "name": "차량 보호 필름Ⅱ",
    "price": 400000,
    "trims": null,
    "desc": "도어 중앙부·핸들, 충전구, 내비 디스플레이"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "ioniq6",
  "name": "더 뉴 아이오닉 6",
  "category": "전기차",
  "year": "2026년형",
  "taxNote": "세제혜택 후(개소세·교육세 감면, 구매보조금 미반영). 선택품목·컬러 가격은 세제혜택 전 표기",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/ioniq6-pe_price.pdf",
  "sourceDate": "2026-11-01",
  "trims": [
   {
    "id": "t1",
    "name": "E-Value+",
    "powertrain": "스탠다드(63.0kWh) 2WD",
    "price": 48560000
   },
   {
    "id": "t2",
    "name": "Exclusive",
    "powertrain": "스탠다드(63.0kWh) 2WD",
    "price": 50950000
   },
   {
    "id": "t3",
    "name": "Prestige",
    "powertrain": "스탠다드(63.0kWh) 2WD",
    "price": 55530000
   },
   {
    "id": "t4",
    "name": "E-Lite",
    "powertrain": "롱레인지(84.0kWh) 2WD",
    "price": 50640000
   },
   {
    "id": "t5",
    "name": "Exclusive",
    "powertrain": "롱레인지(84.0kWh) 2WD",
    "price": 55150000
   },
   {
    "id": "t6",
    "name": "Exclusive N Line",
    "powertrain": "롱레인지(84.0kWh) 2WD",
    "price": 57450000
   },
   {
    "id": "t7",
    "name": "Prestige",
    "powertrain": "롱레인지(84.0kWh) 2WD",
    "price": 59730000
   },
   {
    "id": "t8",
    "name": "Prestige N Line",
    "powertrain": "롱레인지(84.0kWh) 2WD",
    "price": 61320000
   }
  ],
  "exterior": [
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레니티 화이트 펄",
    "price": 80000,
    "trims": null
   },
   {
    "name": "트랜스미션 블루 펄",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t3",
     "t4",
     "t5",
     "t7"
    ]
   },
   {
    "name": "녹턴 그레이 메탈릭",
    "price": 0,
    "trims": null
   },
   {
    "name": "바이오 필릭 블루 펄",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t3",
     "t4",
     "t5",
     "t7"
    ]
   },
   {
    "name": "그래비티 골드 매트",
    "price": 200000,
    "trims": null
   },
   {
    "name": "트랜스미션 블루 매트",
    "price": 200000,
    "trims": null
   },
   {
    "name": "녹턴 그레이 매트",
    "price": 200000,
    "trims": [
     "t6",
     "t8"
    ]
   },
   {
    "name": "얼티메이트 레드 메탈릭",
    "price": 0,
    "trims": [
     "t6",
     "t8"
    ]
   },
   {
    "name": "에어로 실버 메탈릭",
    "price": 0,
    "trims": [
     "t6",
     "t8"
    ]
   }
  ],
  "interior": [
   {
    "name": "블랙 원톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "다크 그린/라이트 그레이 투톤",
    "price": 0,
    "trims": [
     "t2",
     "t3",
     "t7"
    ]
   },
   {
    "name": "블랙/브라운 투톤",
    "price": 0,
    "trims": [
     "t2",
     "t3",
     "t7"
    ]
   }
  ],
  "options": [
   {
    "name": "HTRAC(AWD)",
    "price": 2470000,
    "trims": [
     "t4",
     "t5",
     "t6",
     "t7",
     "t8"
    ],
    "desc": "전륜 모터 추가 사륜구동 (롱레인지)"
   },
   {
    "name": "컴포트 초이스",
    "price": 1200000,
    "trims": [
     "t1"
    ],
    "desc": "인조가죽, 1열 열선·통풍, 운전석 전동, 레인센서, 하이패스"
   },
   {
    "name": "현대 스마트센스 Ⅰ",
    "price": 1480000,
    "trims": [
     "t1"
    ],
    "desc": "FCA 확장, 후측방충돌방지, 안전하차경고, SCC, HDA2"
   },
   {
    "name": "컨비니언스",
    "price": 690000,
    "trims": [
     "t2",
     "t5"
    ],
    "desc": "하이패스, 디지털 키 2, 무선충전"
   },
   {
    "name": "현대 스마트센스 Ⅱ",
    "price": 1510000,
    "trims": [
     "t2",
     "t5"
    ],
    "desc": "스마트센스Ⅰ + 안전하차보조"
   },
   {
    "name": "파킹 어시스트",
    "price": 800000,
    "trims": [
     "t2",
     "t5"
    ],
    "desc": "후측방 모니터, SVM, 측방경고, 후방주차충돌방지"
   },
   {
    "name": "컴포트 플러스",
    "price": 680000,
    "trims": [
     "t2",
     "t5"
    ],
    "desc": "운전석·동승석 전동시트, 2열 열선, 후석알림"
   },
   {
    "name": "플래티넘",
    "price": 710000,
    "trims": [
     "t2"
    ],
    "desc": "Full LED 헤드램프, IFS, 천연가죽 시트, 메탈 페달"
   },
   {
    "name": "디지털 사이드 미러",
    "price": 1380000,
    "trims": [
     "t3",
     "t7",
     "t8"
    ],
    "desc": "카메라+OLED 모니터 사이드미러"
   },
   {
    "name": "하이테크 플러스",
    "price": 950000,
    "trims": [
     "t3",
     "t7",
     "t8"
    ],
    "desc": "BOSE 8스피커, e-ASD, 디지털 키 2"
   },
   {
    "name": "스웨이드 내장재",
    "price": 300000,
    "trims": [
     "t7",
     "t8"
    ],
    "desc": "하이테크 플러스 선택 시"
   },
   {
    "name": "알칸타라/천연가죽 시트",
    "price": 400000,
    "trims": [
     "t8"
    ],
    "desc": "N Line 전용"
   },
   {
    "name": "와이드 선루프",
    "price": 640000,
    "trims": [
     "t5",
     "t6",
     "t7",
     "t8"
    ],
    "desc": "롱레인지 전용"
   },
   {
    "name": "20인치 휠 & 피렐리 타이어",
    "price": 590000,
    "trims": [
     "t4",
     "t5",
     "t7"
    ],
    "desc": "롱레인지 (N Line 기본)"
   },
   {
    "name": "빌트인 캠 2 Plus",
    "price": 600000,
    "trims": [
     "t1",
     "t2",
     "t3",
     "t5",
     "t6",
     "t7",
     "t8"
    ],
    "desc": "블랙박스, 주차 감지 최대 5일"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "ioniq6n",
  "name": "아이오닉 6 N",
  "category": "전기차",
  "year": "2026년형",
  "taxNote": "세제혜택 후(개소세·교육세 감면, 구매보조금 미반영). 선택품목·컬러 가격은 세제혜택 전 표기",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/ioniq6-n_price.pdf",
  "sourceDate": "2026-11-01",
  "trims": [
   {
    "id": "t1",
    "name": "IONIQ 6 N",
    "powertrain": "84.0kWh AWD",
    "price": 79900000
   }
  ],
  "exterior": [
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레니티 화이트 펄",
    "price": 80000,
    "trims": null
   },
   {
    "name": "녹턴 그레이 메탈릭",
    "price": 0,
    "trims": null
   },
   {
    "name": "퍼포먼스 블루 펄",
    "price": 80000,
    "trims": null
   },
   {
    "name": "녹턴 그레이 매트",
    "price": 200000,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "블랙(퍼포먼스 블루 액센트)",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "빌트인 캠 2 Plus, N Race Cam",
    "price": 600000,
    "trims": null,
    "desc": "블랙박스+N 레이스 캠"
   },
   {
    "name": "와이드 선루프",
    "price": 640000,
    "trims": null,
    "desc": "대형 선루프"
   },
   {
    "name": "스웨이드 내장재 + 프리미엄 인테리어 패키지",
    "price": 900000,
    "trims": null,
    "desc": "스웨이드 헤드라이닝·필러 + 가죽핸들·스웨이드 암레스트"
   },
   {
    "name": "프리미엄 인테리어 패키지",
    "price": 600000,
    "trims": null,
    "desc": "가죽 스티어링 휠, 스웨이드 도어암레스트·콘솔"
   },
   {
    "name": "스포츠 디자인 패키지",
    "price": 750000,
    "trims": null,
    "desc": "N 매트, 카본 휠캡·도어스커프 (남양·칠곡·영남 출고)"
   },
   {
    "name": "N 레이싱 센터 스트라이프",
    "price": 750000,
    "trims": null,
    "desc": "퍼포먼스 블루 펄/녹턴 그레이 매트 전용"
   },
   {
    "name": "차량 보호 필름Ⅰ",
    "price": 400000,
    "trims": null,
    "desc": "범퍼, 사이드미러, 도어스텝 등"
   },
   {
    "name": "차량 보호 필름Ⅱ",
    "price": 400000,
    "trims": null,
    "desc": "도어, 도어핸들, 충전구 도어"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "ioniq9",
  "name": "아이오닉 9",
  "category": "전기차",
  "year": "2027년형",
  "taxNote": "세제혜택 후(개소세·교육세 감면, 구매보조금 미반영). 선택품목·컬러 가격은 세제혜택 전 표기",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/ioniq9-price.pdf",
  "sourceDate": "2026-07-01",
  "trims": [
   {
    "id": "t1",
    "name": "Exclusive 7인승",
    "powertrain": "110.3kWh 항속형 2WD",
    "price": 67590000
   },
   {
    "id": "t2",
    "name": "Exclusive 7인승",
    "powertrain": "110.3kWh 항속형 AWD(HTRAC Ⅰ)",
    "price": 70250000
   },
   {
    "id": "t3",
    "name": "Exclusive 7인승",
    "powertrain": "110.3kWh 성능형 AWD(HTRAC Ⅱ)",
    "price": 71100000
   },
   {
    "id": "t4",
    "name": "Prestige 7인승",
    "powertrain": "110.3kWh 항속형 2WD",
    "price": 73250000
   },
   {
    "id": "t5",
    "name": "Prestige 7인승",
    "powertrain": "110.3kWh 항속형 AWD(HTRAC Ⅰ)",
    "price": 75900000
   },
   {
    "id": "t6",
    "name": "Prestige 7인승",
    "powertrain": "110.3kWh 성능형 AWD(HTRAC Ⅱ)",
    "price": 76760000
   },
   {
    "id": "t7",
    "name": "Calligraphy 7인승",
    "powertrain": "110.3kWh 항속형 2WD",
    "price": 78110000
   },
   {
    "id": "t8",
    "name": "Calligraphy 7인승",
    "powertrain": "110.3kWh 항속형 AWD(HTRAC Ⅰ)",
    "price": 80770000
   },
   {
    "id": "t9",
    "name": "Calligraphy 7인승",
    "powertrain": "110.3kWh 성능형 AWD(HTRAC Ⅱ)",
    "price": 81620000
   },
   {
    "id": "t10",
    "name": "Exclusive 6인승",
    "powertrain": "110.3kWh 항속형 2WD",
    "price": 68170000
   },
   {
    "id": "t11",
    "name": "Prestige 6인승",
    "powertrain": "110.3kWh 항속형 2WD",
    "price": 73740000
   },
   {
    "id": "t12",
    "name": "Calligraphy 6인승",
    "powertrain": "110.3kWh 항속형 2WD",
    "price": 79600000
   }
  ],
  "exterior": [
   {
    "name": "어비스 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "녹턴 그레이 메탈릭",
    "price": 0,
    "trims": null
   },
   {
    "name": "셀라돈 그레이 메탈릭",
    "price": 0,
    "trims": null
   },
   {
    "name": "이오노스피어 그린 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레니티 화이트 펄",
    "price": 100000,
    "trims": null
   },
   {
    "name": "녹턴 그레이 매트",
    "price": 200000,
    "trims": null
   },
   {
    "name": "셀라돈 그레이 매트",
    "price": 200000,
    "trims": [
     "t7",
     "t8",
     "t9",
     "t12"
    ]
   }
  ],
  "interior": [
   {
    "name": "블랙 원톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "코냑 브라운/크리미 베이지 투톤",
    "price": 0,
    "trims": [
     "t7",
     "t8",
     "t9",
     "t12"
    ]
   }
  ],
  "options": [
   {
    "name": "HTRAC Ⅰ (항속형 AWD)",
    "price": 2800000,
    "trims": [
     "t10",
     "t11",
     "t12"
    ],
    "desc": "전륜 66kW 모터, 험로 주행모드 (6인승)"
   },
   {
    "name": "HTRAC Ⅱ (성능형 AWD)",
    "price": 3700000,
    "trims": [
     "t10",
     "t11",
     "t12"
    ],
    "desc": "전륜 157kW 모터, 험로 주행모드 (6인승)"
   },
   {
    "name": "파노라마 선루프",
    "price": 1190000,
    "trims": null,
    "desc": "파노라마 선루프"
   },
   {
    "name": "빌트인 캠 2",
    "price": 590000,
    "trims": null,
    "desc": "블랙박스, 카메라 클리닝"
   },
   {
    "name": "사이드스텝",
    "price": 450000,
    "trims": null,
    "desc": "순정 액세서리"
   },
   {
    "name": "파킹 어시스트",
    "price": 1350000,
    "trims": [
     "t1",
     "t2",
     "t3",
     "t10"
    ],
    "desc": "HUD, 서라운드 뷰 등 주차 보조"
   },
   {
    "name": "BOSE 프리미엄 사운드",
    "price": 1190000,
    "trims": [
     "t1",
     "t2",
     "t3",
     "t10"
    ],
    "desc": "14스피커, 외장앰프, 액티브 로드 노이즈 컨트롤"
   },
   {
    "name": "7인승 컨비니언스 플러스",
    "price": 600000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "실외 V2L, 운전석 메모리, 전동 틸트·텔레스코픽"
   },
   {
    "name": "6인승 컨비니언스 플러스",
    "price": 400000,
    "trims": [
     "t10"
    ],
    "desc": "실외 V2L, 운전석 메모리 등"
   },
   {
    "name": "1열 릴랙션 컴포트 + 2열 프리미엄 릴랙션 시트",
    "price": 1300000,
    "trims": [
     "t10"
    ],
    "desc": "1열 릴랙션, 2열 전동 프리미엄 시트"
   },
   {
    "name": "21인치 휠 & 타이어",
    "price": 1000000,
    "trims": [
     "t4",
     "t5",
     "t6",
     "t11"
    ],
    "desc": "21인치 휠, 미쉐린, 셀프레벨라이저"
   },
   {
    "name": "플래티넘",
    "price": 1100000,
    "trims": [
     "t4",
     "t5",
     "t6",
     "t11"
    ],
    "desc": "IFS, 웰컴/에스코트 라이트, 디지털 센터미러"
   },
   {
    "name": "컴포트 플러스",
    "price": 630000,
    "trims": [
     "t4",
     "t5",
     "t6",
     "t11"
    ],
    "desc": "에르고 모션 시트, 3열 전동폴딩·열선"
   },
   {
    "name": "2열 프리미엄 릴랙션 시트",
    "price": 1000000,
    "trims": [
     "t11"
    ],
    "desc": "원터치 릴랙션, 전동 폴딩·슬라이딩"
   },
   {
    "name": "컴팩트 디지털 사이드 미러",
    "price": 1380000,
    "trims": [
     "t4",
     "t5",
     "t6",
     "t7",
     "t8",
     "t9",
     "t11",
     "t12"
    ],
    "desc": "카메라 방식 사이드미러"
   },
   {
    "name": "19인치 휠 & 타이어",
    "price": -1000000,
    "trims": [
     "t7",
     "t8",
     "t9",
     "t12"
    ],
    "desc": "19인치로 변경 시 차감"
   },
   {
    "name": "블랙잉크",
    "price": 400000,
    "trims": [
     "t7",
     "t8",
     "t9",
     "t12"
    ],
    "desc": "블랙 전용 내·외장 디자인"
   },
   {
    "name": "2열 다이내믹 바디케어 시트",
    "price": 800000,
    "trims": [
     "t12"
    ],
    "desc": "2열 마사지 기능"
   },
   {
    "name": "후석 스마트 엔터테인먼트 시스템",
    "price": 2770000,
    "trims": [
     "t12"
    ],
    "desc": "14.6인치 좌/우 모니터"
   },
   {
    "name": "트레일러 패키지",
    "price": 1350000,
    "trims": [
     "t8",
     "t9",
     "t12"
    ],
    "desc": "견인 2,500kg, 캘리그래피 AWD만 (19인치 불가)"
   },
   {
    "name": "차량 보호 필름 1",
    "price": 410000,
    "trims": null,
    "desc": "범퍼, 사이드미러, 도어스텝"
   },
   {
    "name": "차량 보호 필름 2",
    "price": 400000,
    "trims": [
     "t4",
     "t5",
     "t6",
     "t7",
     "t8",
     "t9",
     "t11",
     "t12"
    ],
    "desc": "도어 중앙부·엣지·핸들 (Exclusive 불가)"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "nexo",
  "name": "디 올 뉴 넥쏘",
  "category": "수소차",
  "year": "2027년형",
  "taxNote": "세제혜택 후(개소세·교육세 감면 520만원 한도, 구매보조금 미반영). 선택품목·컬러 가격은 세제혜택 전 표기",
  "source": "https://www.hyundai.com/contents/repn-car/catalog/nexo-2027_price.pdf",
  "sourceDate": "2026-11-01",
  "trims": [
   {
    "id": "t1",
    "name": "Modern",
    "powertrain": "수소전기 2WD",
    "price": 76470000
   },
   {
    "id": "t2",
    "name": "Exclusive",
    "powertrain": "수소전기 2WD",
    "price": 79370000
   },
   {
    "id": "t3",
    "name": "Prestige",
    "powertrain": "수소전기 2WD",
    "price": 83790000
   }
  ],
  "exterior": [
   {
    "name": "팬텀 블랙 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "에코트로닉 그레이 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "고요 카퍼 펄",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레니티 화이트 펄",
    "price": 100000,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "블랙 원톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "다크 틸",
    "price": 0,
    "trims": null
   },
   {
    "name": "그레이/아이보리 투톤",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "빌트인 캠 2 Plus, 증강현실 내비게이션",
    "price": 600000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "블랙박스, AR 내비"
   },
   {
    "name": "현대 스마트센스",
    "price": 680000,
    "trims": [
     "t1"
    ],
    "desc": "FCA 확장, HDA2, NSCC, 안전하차보조, 후석알림"
   },
   {
    "name": "컴포트 플러스",
    "price": 1530000,
    "trims": [
     "t1"
    ],
    "desc": "전동시트·메모리, 1열 통풍, 2열 열선, 하이패스, 전동 테일게이트"
   },
   {
    "name": "실내외 V2L",
    "price": 850000,
    "trims": [
     "t2",
     "t3"
    ],
    "desc": "실내 V2L + 커넥터리스 실외 V2L"
   },
   {
    "name": "파킹 어시스트",
    "price": 950000,
    "trims": [
     "t2"
    ],
    "desc": "SVM, 후측방 모니터, 측방경고, 후방주차충돌방지"
   },
   {
    "name": "Audio by BANG & OLUFSEN",
    "price": 1150000,
    "trims": [
     "t2"
    ],
    "desc": "14스피커, 외장앰프, ANC"
   },
   {
    "name": "19인치 알로이 휠 & 타이어",
    "price": 250000,
    "trims": [
     "t2"
    ],
    "desc": "19인치 휠"
   },
   {
    "name": "비전루프",
    "price": 900000,
    "trims": [
     "t3"
    ],
    "desc": "비전루프"
   },
   {
    "name": "디지털 사이드 미러",
    "price": 1380000,
    "trims": [
     "t3"
    ],
    "desc": "카메라 방식 사이드미러"
   },
   {
    "name": "카메라 패키지",
    "price": 750000,
    "trims": [
     "t3"
    ],
    "desc": "디지털 센터미러(클리닝), 운전자 모니터링"
   },
   {
    "name": "후석 스마트 엔터테인먼트 시스템",
    "price": 2770000,
    "trims": [
     "t3"
    ],
    "desc": "14.6인치 좌/우 모니터, OTT"
   }
  ],
  "brand": "현대"
 },
 {
  "id": "g70",
  "name": "G70",
  "brand": "제네시스",
  "category": "세단",
  "year": "2026년형",
  "taxNote": "개별소비세 5%·실효세율 조정(2026.07~) 기준, 2026년 10월 가격표. 공식 홈페이지 시작가는 45,500,000원으로 표기(2027년형 가격 미반영 가능)",
  "source": "https://www.cardong.co.kr/newcar/vehicle/10535",
  "sourceDate": "2026-11-13",
  "trims": [
   {
    "id": "t1",
    "name": "2.5 터보",
    "powertrain": "가솔린 2.5 터보 2WD",
    "price": 45000000
   },
   {
    "id": "t2",
    "name": "2.5 터보",
    "powertrain": "가솔린 2.5 터보 AWD",
    "price": 47470000
   },
   {
    "id": "t3",
    "name": "2.5 터보 스포츠 패키지",
    "powertrain": "가솔린 2.5 터보 2WD",
    "price": 48560000
   },
   {
    "id": "t4",
    "name": "2.5 터보 스포츠 패키지",
    "powertrain": "가솔린 2.5 터보 AWD",
    "price": 50830000
   },
   {
    "id": "t5",
    "name": "3.3 터보",
    "powertrain": "가솔린 3.3 터보 2WD",
    "price": 49950000
   },
   {
    "id": "t6",
    "name": "3.3 터보",
    "powertrain": "가솔린 3.3 터보 AWD",
    "price": 52420000
   },
   {
    "id": "t7",
    "name": "3.3 터보 스포츠 패키지",
    "powertrain": "가솔린 3.3 터보 2WD",
    "price": 52320000
   },
   {
    "id": "t8",
    "name": "3.3 터보 스포츠 패키지",
    "powertrain": "가솔린 3.3 터보 AWD",
    "price": 54790000
   },
   {
    "id": "t9",
    "name": "그래파이트 에디션",
    "powertrain": "가솔린 3.3 터보 2WD",
    "price": 59700000
   },
   {
    "id": "t10",
    "name": "그래파이트 에디션",
    "powertrain": "가솔린 3.3 터보 AWD",
    "price": 62170000
   }
  ],
  "exterior": [
   {
    "name": "우유니 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "세빌 실버",
    "price": 0,
    "trims": null
   },
   {
    "name": "카본 메탈",
    "price": 0,
    "trims": null
   },
   {
    "name": "비크 블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "그레이스풀 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "바트나 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레스 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "카와 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "로얄 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "레피스 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "태즈먼 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "카프리 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "한라산 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "블레이징 레드",
    "price": 0,
    "trims": null
   },
   {
    "name": "캐번디시 레드",
    "price": 0,
    "trims": null
   },
   {
    "name": "레이싱 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "베르비에 화이트 (무광·추가금 미확인)",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이 (무광·추가금 미확인)",
    "price": 0,
    "trims": null
   },
   {
    "name": "멜버른 그레이 (무광·추가금 미확인)",
    "price": 0,
    "trims": null
   },
   {
    "name": "본드 실버 (무광·추가금 미확인)",
    "price": 0,
    "trims": null
   },
   {
    "name": "벌리 블루 (무광·추가금 미확인)",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "옵시디언 블랙 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙 모노톤 (레드 스티치)",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/포그 그레이 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/바닐라 베이지 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/벨벳 버건디 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/세비아 레드 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/울트라마린 블루 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/듄 베이지 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "포레스트 블루/바닐라 베이지 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/샌드스톰 그레이 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "스모키 그린/바닐라 베이지 투톤",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "파퓰러 패키지",
    "price": 4100000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "컨비니언스+하이테크+드라이빙 어시스턴스 패키지 통합"
   },
   {
    "name": "컨비니언스 패키지",
    "price": 1290000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6"
    ],
    "desc": "전동 트렁크, 디지털 키 2, 앞좌석 무선충전"
   },
   {
    "name": "하이테크 패키지",
    "price": 1580000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6"
    ],
    "desc": "12.3인치 3D 클러스터, 어댑티브 헤드램프"
   },
   {
    "name": "드라이빙 어시스턴스 패키지",
    "price": 1680000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6"
    ],
    "desc": "서라운드뷰, 후측방 모니터, 빌트인 캠, 보조배터리"
   },
   {
    "name": "렉시콘 사운드 패키지",
    "price": 1190000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "렉시콘 15스피커"
   },
   {
    "name": "전자제어 서스펜션",
    "price": 990000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "2.5 기본형 선택(3.3·스포츠 기본)"
   },
   {
    "name": "와이드 선루프",
    "price": 790000,
    "trims": null,
    "desc": "와이드 선루프"
   },
   {
    "name": "천연가죽 패키지",
    "price": 1190000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6"
    ],
    "desc": "천연가죽 시트, 다이아몬드 패턴 알루미늄 내장"
   },
   {
    "name": "시그니처 디자인 셀렉션",
    "price": 2370000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6"
    ],
    "desc": "퀼팅 나파가죽 시트, 스웨이드 헤드라이닝 등"
   },
   {
    "name": "스포츠 디자인 셀렉션",
    "price": 1480000,
    "trims": [
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "스포츠 나파가죽 시트, 스웨이드 내장"
   },
   {
    "name": "19인치 미쉐린 타이어 & 다이아몬드 컷팅 휠",
    "price": 690000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "225/40R19·255/35R19 (3.3 기본)"
   },
   {
    "name": "차량 보호 필름",
    "price": 400000,
    "trims": null,
    "desc": "액세서리, 3년/6만km 보증"
   },
   {
    "name": "플로팅 휠 캡",
    "price": 90000,
    "trims": null,
    "desc": "액세서리"
   },
   {
    "name": "카본 리어 스포일러",
    "price": 880000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "액세서리"
   },
   {
    "name": "알칸타라 인테리어 패키지",
    "price": 430000,
    "trims": [
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "액세서리, 스포츠 전용"
   }
  ]
 },
 {
  "id": "g70-sb",
  "name": "G70 슈팅 브레이크",
  "brand": "제네시스",
  "category": "세단",
  "year": "2026년형",
  "taxNote": "개별소비세 5%·실효세율 조정(2026.07~) 기준. 공식 홈페이지 시작가는 47,480,000원으로 표기(2027년형 가격 미반영 가능)",
  "source": "https://www.cardong.co.kr/newcar/vehicle/11098",
  "sourceDate": "2026-11-13",
  "trims": [
   {
    "id": "t1",
    "name": "2.5 터보",
    "powertrain": "가솔린 2.5 터보 2WD",
    "price": 46980000
   },
   {
    "id": "t2",
    "name": "2.5 터보",
    "powertrain": "가솔린 2.5 터보 AWD",
    "price": 49450000
   },
   {
    "id": "t3",
    "name": "2.5 터보 스포츠 패키지",
    "powertrain": "가솔린 2.5 터보 2WD",
    "price": 50540000
   },
   {
    "id": "t4",
    "name": "2.5 터보 스포츠 패키지",
    "powertrain": "가솔린 2.5 터보 AWD",
    "price": 52810000
   }
  ],
  "exterior": [
   {
    "name": "우유니 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "세빌 실버",
    "price": 0,
    "trims": null
   },
   {
    "name": "비크 블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "바트나 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "카와 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "태즈먼 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "카프리 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "한라산 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "블레이징 레드",
    "price": 0,
    "trims": null
   },
   {
    "name": "캐번디시 레드",
    "price": 0,
    "trims": null
   },
   {
    "name": "베르비에 화이트 (무광·추가금 미확인)",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이 (무광·추가금 미확인)",
    "price": 0,
    "trims": null
   },
   {
    "name": "본드 실버 (무광·추가금 미확인)",
    "price": 0,
    "trims": null
   },
   {
    "name": "벌리 블루 (무광·추가금 미확인)",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "옵시디언 블랙 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙 모노톤 (레드 스티치)",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/포그 그레이 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/바닐라 베이지 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/벨벳 버건디 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/듄 베이지 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/세비아 레드 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "포레스트 블루/바닐라 베이지 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "스모키 그린/바닐라 베이지 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/샌드스톰 그레이 투톤",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "라이프스타일 패키지",
    "price": 3760000,
    "trims": null,
    "desc": "디지털 키 2, 무선충전, 3D 클러스터, 지능형 헤드램프, DA 패키지"
   },
   {
    "name": "드라이빙 어시스턴스 패키지",
    "price": 1680000,
    "trims": null,
    "desc": "서라운드뷰, 후측방 모니터, 빌트인 캠, 보조배터리"
   },
   {
    "name": "렉시콘 사운드 패키지",
    "price": 1190000,
    "trims": null,
    "desc": "렉시콘 15스피커"
   },
   {
    "name": "와이드 선루프",
    "price": 790000,
    "trims": null,
    "desc": "와이드 선루프"
   },
   {
    "name": "시그니처 디자인 셀렉션",
    "price": 2370000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "퀼팅 나파가죽 시트, 스웨이드 헤드라이닝 등"
   },
   {
    "name": "스포츠 디자인 셀렉션",
    "price": 1480000,
    "trims": [
     "t3",
     "t4"
    ],
    "desc": "스포츠 나파가죽 시트, 스웨이드 헤드라이닝"
   },
   {
    "name": "19인치 미쉐린 타이어 & 다이아몬드 컷팅 휠",
    "price": 690000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "225/40R19·255/35R19"
   },
   {
    "name": "차량 보호 필름",
    "price": 400000,
    "trims": null,
    "desc": "액세서리, 3년/6만km 보증"
   },
   {
    "name": "플로팅 휠 캡",
    "price": 90000,
    "trims": null,
    "desc": "액세서리"
   },
   {
    "name": "알칸타라 인테리어 패키지",
    "price": 430000,
    "trims": [
     "t3",
     "t4"
    ],
    "desc": "액세서리, 스포츠 전용"
   }
  ]
 },
 {
  "id": "g80",
  "name": "G80",
  "brand": "제네시스",
  "category": "세단",
  "year": "2026년형",
  "taxNote": "개별소비세 5%·실효세율 조정(2026.07~) 기준, 2026년 10월 가격표 (공식 홈페이지 시작가 60,630,000원 일치)",
  "source": "https://www.cardong.co.kr/newcar/vehicle/11644",
  "sourceDate": "2026-11-13",
  "trims": [
   {
    "id": "t1",
    "name": "2.5 터보",
    "powertrain": "가솔린 2.5 터보 2WD",
    "price": 60630000
   },
   {
    "id": "t2",
    "name": "2.5 터보",
    "powertrain": "가솔린 2.5 터보 AWD",
    "price": 63430000
   },
   {
    "id": "t3",
    "name": "2.5 터보 스포츠 패키지",
    "powertrain": "가솔린 2.5 터보 2WD",
    "price": 64630000
   },
   {
    "id": "t4",
    "name": "2.5 터보 스포츠 패키지",
    "powertrain": "가솔린 2.5 터보 AWD",
    "price": 67430000
   },
   {
    "id": "t5",
    "name": "3.5 터보",
    "powertrain": "가솔린 3.5 터보 2WD",
    "price": 67230000
   },
   {
    "id": "t6",
    "name": "3.5 터보",
    "powertrain": "가솔린 3.5 터보 AWD",
    "price": 70030000
   },
   {
    "id": "t7",
    "name": "3.5 터보 스포츠 패키지",
    "powertrain": "가솔린 3.5 터보 2WD",
    "price": 72830000
   },
   {
    "id": "t8",
    "name": "3.5 터보 스포츠 패키지",
    "powertrain": "가솔린 3.5 터보 AWD",
    "price": 75630000
   },
   {
    "id": "t9",
    "name": "G80 BLACK",
    "powertrain": "가솔린 2.5 터보 AWD",
    "price": 83600000
   },
   {
    "id": "t10",
    "name": "G80 BLACK",
    "powertrain": "가솔린 3.5 터보 AWD",
    "price": 87900000
   }
  ],
  "exterior": [
   {
    "name": "우유니 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "세빌 실버",
    "price": 0,
    "trims": null
   },
   {
    "name": "제네바 실버",
    "price": 0,
    "trims": null
   },
   {
    "name": "비크 블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "바트나 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레스 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "태즈먼 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "한라산 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "브루클린 브라운",
    "price": 0,
    "trims": null
   },
   {
    "name": "캐번디시 레드",
    "price": 0,
    "trims": null
   },
   {
    "name": "베르비에 화이트 (무광·추가금 미확인)",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이 (무광·추가금 미확인)",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "옵시디언 블랙 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "에크루 카멜 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙 모노톤 (그레이 스티치)",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙 모노톤 (레드 스티치)",
    "price": 0,
    "trims": null
   },
   {
    "name": "애쉬 그레이/바닐라 베이지 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "마룬 브라운/포레스트 블루 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "포레스트 블루/에크루 카멜 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/세비야 레드 투톤",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "파퓰러 패키지",
    "price": 4300000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "드라이빙 어시스턴스 Ⅰ·Ⅱ + 빌트인 캠 패키지"
   },
   {
    "name": "드라이빙 어시스턴스 패키지Ⅰ",
    "price": 1950000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "서라운드뷰, 후측방 모니터, 원격 스마트 주차 보조 2 등"
   },
   {
    "name": "드라이빙 어시스턴스 패키지Ⅱ",
    "price": 2000000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "전방충돌방지 2, 고속도로 주행 보조 2, 지능형 헤드램프"
   },
   {
    "name": "빌트인 캠 패키지",
    "price": 850000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "빌트인 캠 2, 보조배터리, AR 내비 (BLACK 기본)"
   },
   {
    "name": "컨비니언스 패키지",
    "price": 1300000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "동승석 에르고 모션 시트, 고스트 도어 클로징, 항균"
   },
   {
    "name": "2열 컴포트 패키지",
    "price": 2700000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "3존+ 공조, 2열 전동·통풍 시트, 2열 무선충전"
   },
   {
    "name": "뱅앤올룹슨 사운드 패키지",
    "price": 1900000,
    "trims": [
     "t1",
     "t2",
     "t3",
     "t4",
     "t5",
     "t6",
     "t8"
    ],
    "desc": "18스피커, ANC-R (BLACK 기본)"
   },
   {
    "name": "시그니처 디자인 셀렉션Ⅰ",
    "price": 1500000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6"
    ],
    "desc": "천연가죽 시트, 헤어라인 알루미늄 내장"
   },
   {
    "name": "시그니처 디자인 셀렉션Ⅱ",
    "price": 3000000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6"
    ],
    "desc": "프라임 나파가죽 시트, 리얼 우드, 투톤 스티어링"
   },
   {
    "name": "스포츠 디자인 셀렉션",
    "price": 2700000,
    "trims": [
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "프라임 나파가죽, 카본 내장재, 투톤 스티어링"
   },
   {
    "name": "프리뷰 전자제어 서스펜션",
    "price": 1100000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "2.5 기본형 선택(3.5·스포츠·BLACK 기본)"
   },
   {
    "name": "파노라마 선루프",
    "price": 1400000,
    "trims": null,
    "desc": "파노라마 선루프"
   },
   {
    "name": "19인치 휠 & 타이어 (A/B/C 택1)",
    "price": 1200000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "245/45R19 콘티넨탈 (3.5 기본)"
   },
   {
    "name": "20인치 피렐리 타이어 & 휠",
    "price": 3000000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "245/40R20"
   },
   {
    "name": "20인치 피렐리 타이어 & 휠",
    "price": 700000,
    "trims": [
     "t5",
     "t6"
    ],
    "desc": "245/40R20"
   },
   {
    "name": "후석 스마트 엔터테인먼트 시스템",
    "price": 3000000,
    "trims": null,
    "desc": "액세서리, 14.6인치 듀얼 모니터"
   },
   {
    "name": "차량 보호 필름",
    "price": 450000,
    "trims": null,
    "desc": "액세서리, 3년/6만km 보증"
   },
   {
    "name": "플로팅 휠 캡",
    "price": 90000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "액세서리 (BLACK 전용 캡 0원)"
   }
  ]
 },
 {
  "id": "eg80",
  "name": "Electrified G80",
  "brand": "제네시스",
  "category": "전기차",
  "year": "2027년형",
  "taxNote": "세제혜택 후(실효세율 조정 2026.07~), 보조금 미반영. 세제혜택 전 89,080,000원. 국고보조금 270만원(예산 소진 시 종료)",
  "source": "https://www.cardong.co.kr/newcar/vehicle/11708",
  "sourceDate": "2026-11-13",
  "trims": [
   {
    "id": "t1",
    "name": "기본",
    "powertrain": "전기 듀얼모터 AWD 94.5kWh",
    "price": 84790000
   }
  ],
  "exterior": [
   {
    "name": "우유니 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "세빌 실버",
    "price": 0,
    "trims": null
   },
   {
    "name": "제네바 실버",
    "price": 0,
    "trims": null
   },
   {
    "name": "비크 블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "태즈먼 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "카프리 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "마티라 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "한라산 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "브루클린 브라운",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이 (무광·추가금 미확인)",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "옵시디언 블랙 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "에크루 카멜 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "프러시안 블루 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "애쉬 그레이/글레이셔 화이트 투톤",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "파퓰러 패키지",
    "price": 5400000,
    "trims": null,
    "desc": "HUD + 드라이빙 어시스턴스 Ⅰ·Ⅱ + 빌트인 캠"
   },
   {
    "name": "헤드업 디스플레이",
    "price": 1300000,
    "trims": null,
    "desc": "HUD"
   },
   {
    "name": "드라이빙 어시스턴스 패키지Ⅰ",
    "price": 1950000,
    "trims": null,
    "desc": "서라운드뷰, 후측방 모니터, 원격 스마트 주차 보조 2 등"
   },
   {
    "name": "드라이빙 어시스턴스 패키지Ⅱ",
    "price": 2000000,
    "trims": null,
    "desc": "고속도로 주행 보조 2, 지능형 헤드램프 등"
   },
   {
    "name": "빌트인 캠 패키지",
    "price": 850000,
    "trims": null,
    "desc": "빌트인 캠 2(QHD), 보조배터리, AR 내비"
   },
   {
    "name": "시그니처 디자인 셀렉션",
    "price": 3000000,
    "trims": null,
    "desc": "프라임 나파가죽, 오픈포어 리얼우드, 스웨이드 헤드라이닝"
   },
   {
    "name": "컨비니언스 패키지",
    "price": 1600000,
    "trims": null,
    "desc": "앞좌석 에르고 모션 시트, 실외 V2L 어댑터, 항균"
   },
   {
    "name": "2열 컴포트 패키지",
    "price": 4500000,
    "trims": null,
    "desc": "2열 전동·통풍·메모리 시트, 3존+ 공조, 전동 커튼"
   },
   {
    "name": "후륜 조향 시스템",
    "price": 1500000,
    "trims": null,
    "desc": "후륜 조향"
   },
   {
    "name": "후석 스마트 엔터테인먼트 시스템",
    "price": 3000000,
    "trims": null,
    "desc": "액세서리, 14.6인치 듀얼 모니터"
   },
   {
    "name": "차량 보호 필름",
    "price": 450000,
    "trims": null,
    "desc": "액세서리, 3년/6만km 보증"
   },
   {
    "name": "플로팅 휠 캡",
    "price": 90000,
    "trims": null,
    "desc": "액세서리"
   }
  ]
 },
 {
  "id": "g90",
  "name": "G90",
  "brand": "제네시스",
  "category": "세단",
  "year": "2025년형",
  "taxNote": "개별소비세 5%·실효세율 조정(2026.07~) 기준 (공식 홈페이지 시작가 97,480,000원 일치). 페이스리프트 2026년 12월 출시 예정 보도",
  "source": "https://www.cardong.co.kr/newcar/vehicle/11054",
  "sourceDate": "2026-11-13",
  "trims": [
   {
    "id": "t1",
    "name": "3.5 터보 5인승",
    "powertrain": "가솔린 3.5 터보 2WD",
    "price": 97480000
   },
   {
    "id": "t2",
    "name": "3.5 터보 5인승",
    "powertrain": "가솔린 3.5 터보 AWD",
    "price": 100980000
   },
   {
    "id": "t3",
    "name": "3.5 터보 4인승 VIP",
    "powertrain": "가솔린 3.5 터보 2WD",
    "price": 104380000
   },
   {
    "id": "t4",
    "name": "3.5 터보 4인승 VIP",
    "powertrain": "가솔린 3.5 터보 AWD",
    "price": 107880000
   },
   {
    "id": "t5",
    "name": "48V e-S/C 5인승",
    "powertrain": "가솔린 3.5 터보 48V 일렉트릭 슈퍼차저 2WD",
    "price": 103480000
   },
   {
    "id": "t6",
    "name": "48V e-S/C 5인승",
    "powertrain": "가솔린 3.5 터보 48V 일렉트릭 슈퍼차저 AWD",
    "price": 106980000
   },
   {
    "id": "t7",
    "name": "48V e-S/C 4인승 VIP",
    "powertrain": "가솔린 3.5 터보 48V 일렉트릭 슈퍼차저 2WD",
    "price": 110380000
   },
   {
    "id": "t8",
    "name": "48V e-S/C 4인승 VIP",
    "powertrain": "가솔린 3.5 터보 48V 일렉트릭 슈퍼차저 AWD",
    "price": 113880000
   },
   {
    "id": "t9",
    "name": "G90 BLACK 5인승",
    "powertrain": "가솔린 3.5 터보 AWD",
    "price": 129440000
   },
   {
    "id": "t10",
    "name": "G90 BLACK 4인승 VIP",
    "powertrain": "가솔린 3.5 터보 AWD",
    "price": 132840000
   },
   {
    "id": "t11",
    "name": "G90 BLACK 5인승",
    "powertrain": "가솔린 3.5 터보 48V 일렉트릭 슈퍼차저 AWD",
    "price": 135640000
   },
   {
    "id": "t12",
    "name": "G90 BLACK 4인승 VIP",
    "powertrain": "가솔린 3.5 터보 48V 일렉트릭 슈퍼차저 AWD",
    "price": 139040000
   }
  ],
  "exterior": [
   {
    "name": "우유니 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "세빌 실버",
    "price": 0,
    "trims": null
   },
   {
    "name": "비크 블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "마우이 블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "태즈먼 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "카프리 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "한라산 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "바릴로체 브라운",
    "price": 0,
    "trims": null
   },
   {
    "name": "발렌시아 골드",
    "price": 0,
    "trims": null
   },
   {
    "name": "베르비에 화이트 (무광·추가금 미확인)",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이 (무광·추가금 미확인)",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "옵시디언 블랙 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/보르도 브라운 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "어반 브라운/글레이셔 화이트 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "갤럭시 블랙/모던 그레이 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "벨벳 버건디/듄 베이지 투톤",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "파퓰러 컬렉션 (컬렉션 택1)",
    "price": 5600000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6"
    ],
    "desc": "앞좌석 컴포트 + 뒷좌석 컴포트Ⅰ"
   },
   {
    "name": "파퓰러 컬렉션 (컬렉션 택1)",
    "price": 2100000,
    "trims": [
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "앞좌석 컴포트 (VIP는 뒷좌석 컴포트Ⅰ 기본)"
   },
   {
    "name": "프리미엄 컬렉션 (컬렉션 택1)",
    "price": 17100000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6"
    ],
    "desc": "파퓰러 + 시그니처 셀렉션, 이지클로즈, 에어서스, 후륜조향"
   },
   {
    "name": "프리미엄 컬렉션 (컬렉션 택1)",
    "price": 13600000,
    "trims": [
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "파퓰러 + 시그니처 셀렉션, 이지클로즈, 에어서스, 후륜조향"
   },
   {
    "name": "프레스티지 컬렉션 (컬렉션 택1)",
    "price": 23000000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6"
    ],
    "desc": "프리미엄 + 뒷좌석 컴포트Ⅱ, 후석 엔터테인먼트"
   },
   {
    "name": "프레스티지 컬렉션 (컬렉션 택1)",
    "price": 19500000,
    "trims": [
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "프리미엄 + 뒷좌석 컴포트Ⅱ, 후석 엔터테인먼트"
   },
   {
    "name": "시그니처 디자인 셀렉션",
    "price": 5500000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "퀼팅 프라임 나파가죽, 리얼우드, 스웨이드 헤드라이닝"
   },
   {
    "name": "앞좌석 컴포트 패키지",
    "price": 2500000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "지능형 헤드램프, 앞좌석 에르고 릴렉싱 시트"
   },
   {
    "name": "뒷좌석 컴포트 패키지Ⅰ",
    "price": 3500000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6"
    ],
    "desc": "뒷좌석 전동·통풍·메모리, 레그레스트, 3존 공조"
   },
   {
    "name": "뒷좌석 컴포트 패키지Ⅱ",
    "price": 2900000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "뒷좌석 마사지, VIP 풋레스트 (앞좌석 컴포트 동시 240만)"
   },
   {
    "name": "멀티 챔버 에어 서스펜션",
    "price": 3500000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "멀티 챔버 에어 서스펜션"
   },
   {
    "name": "후륜 조향 시스템",
    "price": 1500000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "후륜 조향"
   },
   {
    "name": "이지 클로즈 시스템",
    "price": 1500000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "도어 자동 닫힘"
   },
   {
    "name": "뱅앤올룹슨 사운드 패키지",
    "price": 3900000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "23스피커 프리미어 3D 사운드"
   },
   {
    "name": "파노라마 선루프",
    "price": 2000000,
    "trims": null,
    "desc": "파노라마 선루프"
   },
   {
    "name": "빌트인 캠 패키지",
    "price": 800000,
    "trims": null,
    "desc": "빌트인 캠, 보조배터리"
   },
   {
    "name": "20인치 미쉐린 타이어 & 휠",
    "price": 1000000,
    "trims": [
     "t1",
     "t2",
     "t3",
     "t4"
    ],
    "desc": "245/45R20 다이아몬드 컷팅/다크 하이퍼 실버 (48V 기본)"
   },
   {
    "name": "21인치 미쉐린 타이어 & 다이아몬드 컷팅 휠",
    "price": 1200000,
    "trims": [
     "t5",
     "t6",
     "t7",
     "t8"
    ],
    "desc": "245/40R21"
   },
   {
    "name": "전동식 후석 스마트 엔터테인먼트 시스템",
    "price": 3100000,
    "trims": null,
    "desc": "액세서리, 14.6인치 듀얼 모니터"
   },
   {
    "name": "차량 보호 필름",
    "price": 540000,
    "trims": null,
    "desc": "액세서리"
   },
   {
    "name": "플로팅 휠 캡 & 메탈 페달",
    "price": 200000,
    "trims": [
     "t1",
     "t2",
     "t5",
     "t6",
     "t3",
     "t4",
     "t7",
     "t8"
    ],
    "desc": "액세서리 (BLACK 전용 휠 캡 0원)"
   }
  ]
 },
 {
  "id": "g90-lwb",
  "name": "G90 롱 휠베이스",
  "brand": "제네시스",
  "category": "세단",
  "year": "2025년형",
  "taxNote": "개별소비세 5%·실효세율 조정(2026.07~) 기준 (공식 홈페이지 시작가 167,690,000원 일치)",
  "source": "https://www.cardong.co.kr/newcar/vehicle/11054",
  "sourceDate": "2026-11-13",
  "trims": [
   {
    "id": "t1",
    "name": "LWB 5인승",
    "powertrain": "가솔린 3.5 터보 48V 일렉트릭 슈퍼차저 AWD",
    "price": 167690000
   },
   {
    "id": "t2",
    "name": "LWB 4인승 VIP",
    "powertrain": "가솔린 3.5 터보 48V 일렉트릭 슈퍼차저 AWD",
    "price": 176590000
   },
   {
    "id": "t3",
    "name": "LWB BLACK 5인승",
    "powertrain": "가솔린 3.5 터보 48V 일렉트릭 슈퍼차저 AWD",
    "price": 174980000
   },
   {
    "id": "t4",
    "name": "LWB BLACK 4인승 VIP",
    "powertrain": "가솔린 3.5 터보 48V 일렉트릭 슈퍼차저 AWD",
    "price": 178880000
   }
  ],
  "exterior": [
   {
    "name": "우유니 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "세빌 실버",
    "price": 0,
    "trims": null
   },
   {
    "name": "비크 블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "마우이 블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "태즈먼 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "카프리 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "한라산 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "바릴로체 브라운",
    "price": 0,
    "trims": null
   },
   {
    "name": "발렌시아 골드",
    "price": 0,
    "trims": null
   },
   {
    "name": "베르비에 화이트 (무광·추가금 미확인)",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이 (무광·추가금 미확인)",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "옵시디언 블랙 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/보르도 브라운 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "어반 브라운/글레이셔 화이트 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "갤럭시 블랙/모던 그레이 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "벨벳 버건디/듄 베이지 투톤",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "파노라마 선루프",
    "price": 2500000,
    "trims": null,
    "desc": "파노라마 선루프"
   },
   {
    "name": "뒷좌석 컴포트 패키지",
    "price": 5000000,
    "trims": [
     "t1"
    ],
    "desc": "뒷좌석 컴포트 사양 (4인승 VIP 기본)"
   },
   {
    "name": "빌트인 캠 패키지",
    "price": 800000,
    "trims": null,
    "desc": "빌트인 캠, 보조배터리"
   },
   {
    "name": "전동식 후석 스마트 엔터테인먼트 시스템",
    "price": 3100000,
    "trims": null,
    "desc": "액세서리, 14.6인치 듀얼 모니터"
   },
   {
    "name": "차량 보호 필름",
    "price": 540000,
    "trims": null,
    "desc": "액세서리"
   },
   {
    "name": "플로팅 휠 캡 & 메탈 페달",
    "price": 200000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "액세서리 (BLACK 전용 휠 캡 0원)"
   }
  ]
 },
 {
  "id": "gv60",
  "name": "GV60",
  "brand": "제네시스",
  "category": "전기차",
  "year": "2027년형",
  "taxNote": "세제혜택 후 가격(개별소비세 실효세율 조정 기준, 2026.07~), 보조금 미반영. 퍼포먼스 AWD는 세제혜택 미적용 가격. 1,000원 단위 반올림",
  "source": "https://www.cardong.co.kr/newcar/vehicle/11759",
  "sourceDate": "2026-07-01",
  "trims": [
   {
    "id": "t1",
    "name": "스탠다드 2WD (19인치)",
    "powertrain": "전기 2WD",
    "price": 64905000
   },
   {
    "id": "t2",
    "name": "스탠다드 AWD (19인치)",
    "powertrain": "전기 AWD",
    "price": 68517000
   },
   {
    "id": "t3",
    "name": "스탠다드 AWD (20인치)",
    "powertrain": "전기 AWD",
    "price": 70703000
   },
   {
    "id": "t4",
    "name": "퍼포먼스 AWD (21인치)",
    "powertrain": "전기 AWD 퍼포먼스",
    "price": 76680000
   }
  ],
  "exterior": [
   {
    "name": "우유니 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "세빌 실버",
    "price": 0,
    "trims": null
   },
   {
    "name": "비크 블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레스 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "카프리 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "트롬소 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "스토르 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "마테호른 화이트 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "스토르 그린 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레스 블루 (무광)",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "옵시디언 블랙 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "애쉬 그레이/글레이셔 화이트 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "파인그로브 그린/골드코스트 옐로우 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "프러시안 블루/스카이 블루 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "갤럭시 블랙/아쿠아 그린 투톤",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "시그니처 디자인 셀렉션 I",
    "price": 1500000,
    "trims": null,
    "desc": "천연가죽 시트, 알루미늄 내장재"
   },
   {
    "name": "시그니처 디자인 셀렉션 II",
    "price": 2200000,
    "trims": null,
    "desc": "퀼팅 나파가죽 시트, 스웨이드 도어 트림"
   },
   {
    "name": "시그니처 디자인 셀렉션 II (스웨이드 패키지)",
    "price": 2700000,
    "trims": null,
    "desc": "셀렉션 II + 스웨이드 헤드라이닝/필러"
   },
   {
    "name": "파퓰러 패키지 I",
    "price": 4700000,
    "trims": null,
    "desc": "HUD + 컨비니언스 + 드라이빙 어시스턴스 I"
   },
   {
    "name": "파퓰러 패키지 II",
    "price": 6800000,
    "trims": null,
    "desc": "파퓰러 I + 2열 컴포트 + 빌트인 캠"
   },
   {
    "name": "헤드업 디스플레이",
    "price": 1300000,
    "trims": null,
    "desc": "HUD"
   },
   {
    "name": "컨비니언스 패키지",
    "price": 2000000,
    "trims": null,
    "desc": "1열 통풍, 에르고 18way 시트, 메모리, 릴렉션 시트"
   },
   {
    "name": "드라이빙 어시스턴스 패키지 I",
    "price": 1950000,
    "trims": null,
    "desc": "서라운드뷰, 후측방 모니터, 원격주차 보조 2"
   },
   {
    "name": "드라이빙 어시스턴스 패키지 II",
    "price": 2000000,
    "trims": null,
    "desc": "HDA 2, 전방충돌방지 확장, 지능형 헤드램프"
   },
   {
    "name": "2열 컴포트 패키지",
    "price": 850000,
    "trims": null,
    "desc": "뒷좌석 열선, 수동 커튼, 러기지 스크린/네트"
   },
   {
    "name": "디지털 사이드 미러",
    "price": 1500000,
    "trims": null,
    "desc": "디지털 사이드 미러"
   },
   {
    "name": "비전 루프",
    "price": 1000000,
    "trims": null,
    "desc": "비전 루프"
   },
   {
    "name": "하이테크 패키지",
    "price": 850000,
    "trims": null,
    "desc": "디지털 키 2, 페이스 커넥트"
   },
   {
    "name": "뱅앤올룹슨 사운드 패키지",
    "price": 1800000,
    "trims": null,
    "desc": "B&O 17스피커, ANC-R"
   },
   {
    "name": "빌트인 캠 패키지",
    "price": 1500000,
    "trims": null,
    "desc": "빌트인 캠 2, 보조배터리, AR 내비, 디지털 센터 미러"
   },
   {
    "name": "차량 보호 필름 (액세서리)",
    "price": 410000,
    "trims": null,
    "desc": "보호 필름"
   },
   {
    "name": "프로텍션 매트 패키지 (액세서리)",
    "price": 250000,
    "trims": null,
    "desc": "매트 패키지"
   },
   {
    "name": "플로팅 휠캡 (액세서리)",
    "price": 90000,
    "trims": null,
    "desc": "플로팅 휠캡"
   }
  ]
 },
 {
  "id": "gv60-magma",
  "name": "GV60 마그마",
  "brand": "제네시스",
  "category": "전기차",
  "year": "2026년형",
  "taxNote": "개별소비세 실효세율 조정 기준(2026.07~), 고성능 모델로 세제혜택 표기 없음, 보조금 미반영",
  "source": "https://www.cardong.co.kr/newcar/vehicle/11841",
  "sourceDate": "2026-07-01",
  "trims": [
   {
    "id": "t1",
    "name": "마그마 AWD",
    "powertrain": "전기 AWD (고성능)",
    "price": 97880000
   }
  ],
  "exterior": [
   {
    "name": "마그마 오렌지",
    "price": 0,
    "trims": null
   },
   {
    "name": "우유니 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "세빌 실버",
    "price": 0,
    "trims": null
   },
   {
    "name": "비크 블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레스 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "카프리 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "트롬소 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "스토르 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "마테호른 화이트 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "스토르 그린 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레스 블루 (무광)",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "옵시디언 블랙 모노톤 (마그마 오렌지 스티치)",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙 모노톤 (애쉬 화이트 스티치)",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "21인치 그라파이트 그레이 무광 단조휠",
    "price": 3700000,
    "trims": null,
    "desc": "경량 단조휠, 275/35R21 피렐리 (캘리퍼 색 선택)"
   },
   {
    "name": "차량 보호 필름 (액세서리)",
    "price": 410000,
    "trims": null,
    "desc": "보호 필름"
   },
   {
    "name": "프로텍션 매트 패키지 (액세서리)",
    "price": 250000,
    "trims": null,
    "desc": "매트 패키지"
   }
  ]
 },
 {
  "id": "gv70",
  "name": "GV70",
  "brand": "제네시스",
  "category": "SUV",
  "year": "2027년형",
  "taxNote": "출고가(2026.07 출시, 개별소비세 실효세율 조정 이후 가격표 기준)",
  "source": "https://www.cardong.co.kr/newcar/vehicle/10534",
  "sourceDate": "2026-10-01",
  "trims": [
   {
    "id": "t1",
    "name": "2.5 터보 2WD",
    "powertrain": "가솔린 2.5 터보 2WD",
    "price": 54730000
   },
   {
    "id": "t2",
    "name": "2.5 터보 AWD",
    "powertrain": "가솔린 2.5 터보 AWD",
    "price": 57730000
   },
   {
    "id": "t3",
    "name": "2.5 터보 스포츠 패키지 2WD",
    "powertrain": "가솔린 2.5 터보 2WD",
    "price": 57530000
   },
   {
    "id": "t4",
    "name": "2.5 터보 스포츠 패키지 AWD",
    "powertrain": "가솔린 2.5 터보 AWD",
    "price": 60530000
   },
   {
    "id": "t5",
    "name": "2.5 터보 그래파이트 패키지 2WD",
    "powertrain": "가솔린 2.5 터보 2WD",
    "price": 63780000
   },
   {
    "id": "t6",
    "name": "2.5 터보 그래파이트 패키지 AWD",
    "powertrain": "가솔린 2.5 터보 AWD",
    "price": 66780000
   },
   {
    "id": "t7",
    "name": "3.5 터보 2WD",
    "powertrain": "가솔린 3.5 터보 2WD",
    "price": 60230000
   },
   {
    "id": "t8",
    "name": "3.5 터보 AWD",
    "powertrain": "가솔린 3.5 터보 AWD",
    "price": 63230000
   },
   {
    "id": "t9",
    "name": "3.5 터보 스포츠 패키지 2WD",
    "powertrain": "가솔린 3.5 터보 2WD",
    "price": 63580000
   },
   {
    "id": "t10",
    "name": "3.5 터보 스포츠 패키지 AWD",
    "powertrain": "가솔린 3.5 터보 AWD",
    "price": 66580000
   },
   {
    "id": "t11",
    "name": "3.5 터보 그래파이트 패키지 2WD",
    "powertrain": "가솔린 3.5 터보 2WD",
    "price": 66180000
   },
   {
    "id": "t12",
    "name": "3.5 터보 그래파이트 패키지 AWD",
    "powertrain": "가솔린 3.5 터보 AWD",
    "price": 69180000
   }
  ],
  "exterior": [
   {
    "name": "우유니 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "세빌 실버",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "카본 메탈",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "비크 블랙",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "마칼루 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레스 블루",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "로얄 블루",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "카프리 블루",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "베링 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "트롬소 그린",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "스토르 그린",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "카디프 그린",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "마우나 레드",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "바로사 버건디",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "마칼루 그레이 (무광)",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "마테호른 화이트 (무광)",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "멜버른 그레이 (무광)",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "브런즈윅 그린 (무광)",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "스토르 그린 (무광)",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "바로사 버건디 (무광)",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "세레스 블루 (무광)",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "옵시디언 블랙 모노톤",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "옵시디언 블랙/바닐라 베이지 투톤",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "어반 브라운/프로즌 그레이 투톤",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "오션웨이브 블루/하바나 브라운 투톤",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "슬레이트 그레이/벨벳 버건디 투톤",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "옵시디언 블랙/세비아 레드 투톤",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "울트라마린 블루 모노톤",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "오션웨이브 블루/파인그로브 그린 투톤",
    "price": 0,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8",
     "t3",
     "t4",
     "t9",
     "t10"
    ]
   },
   {
    "name": "옵시디언 블랙/울트라마린 블루 투톤",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "시그니처 디자인 셀렉션 I",
    "price": 1700000,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8"
    ],
    "desc": "천연가죽 시트, 브러시드 알루미늄 내장재"
   },
   {
    "name": "시그니처 디자인 셀렉션 II",
    "price": 3000000,
    "trims": [
     "t1",
     "t2",
     "t7",
     "t8"
    ],
    "desc": "퀼팅 프라임 나파가죽, 투톤 가죽 스티어링"
   },
   {
    "name": "스포츠 디자인 셀렉션 I",
    "price": 2300000,
    "trims": [
     "t3",
     "t4",
     "t9",
     "t10"
    ],
    "desc": "스웨이드/나파 시트, 리얼 카본 내장재"
   },
   {
    "name": "스포츠 디자인 셀렉션 II",
    "price": 2300000,
    "trims": [
     "t3",
     "t4",
     "t9",
     "t10"
    ],
    "desc": "퀼팅 나파 시트, 스포츠 무드램프"
   },
   {
    "name": "파퓰러 패키지 I",
    "price": 2950000,
    "trims": null,
    "desc": "HUD + 드라이빙 어시스턴스 I"
   },
   {
    "name": "파퓰러 패키지 II",
    "price": 6600000,
    "trims": null,
    "desc": "파퓰러 I + DA II + 2열 컴포트 + 빌트인 캠"
   },
   {
    "name": "프레스티지 패키지",
    "price": 11900000,
    "trims": null,
    "desc": "파퓰러 II + 파노라마 선루프 + 컨비니언스 + B&O"
   },
   {
    "name": "헤드업 디스플레이",
    "price": 1300000,
    "trims": null,
    "desc": "HUD"
   },
   {
    "name": "드라이빙 어시스턴스 패키지 I",
    "price": 1950000,
    "trims": null,
    "desc": "서라운드뷰, 후측방 모니터, 원격주차 보조"
   },
   {
    "name": "드라이빙 어시스턴스 패키지 II",
    "price": 2000000,
    "trims": null,
    "desc": "HDA 2, 스마트 크루즈, 전방충돌방지 확장"
   },
   {
    "name": "2열 컴포트 패키지",
    "price": 1100000,
    "trims": null,
    "desc": "수동 커튼, 3존 공조, 뒷좌석 통풍, 220V"
   },
   {
    "name": "빌트인 캠 패키지",
    "price": 850000,
    "trims": null,
    "desc": "빌트인 캠 2, 보조배터리, AR 내비"
   },
   {
    "name": "컨비니언스 패키지",
    "price": 2500000,
    "trims": null,
    "desc": "에르고 모션 18way, 동승석 메모리, 디지털 센터 미러"
   },
   {
    "name": "뱅앤올룹슨 사운드 패키지",
    "price": 1700000,
    "trims": null,
    "desc": "B&O 16스피커, ANC-R"
   },
   {
    "name": "파노라마 선루프",
    "price": 1400000,
    "trims": null,
    "desc": "파노라마 선루프"
   },
   {
    "name": "프리뷰 전자제어 서스펜션",
    "price": 1100000,
    "trims": [
     "t1",
     "t2",
     "t3",
     "t4"
    ],
    "desc": "프리뷰 ECS (3.5 터보·그래파이트 기본)"
   },
   {
    "name": "전자식 차동제한장치(e-LSD)",
    "price": 350000,
    "trims": [
     "t3",
     "t4",
     "t9",
     "t10"
    ],
    "desc": "e-LSD (스포츠)"
   },
   {
    "name": "235/55R19 미쉐린 타이어 & 휠",
    "price": 300000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "19인치 신규 휠 (2.5 터보)"
   },
   {
    "name": "255/40R21 미쉐린 타이어 & 휠",
    "price": 2300000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "21인치 휠 (2.5 터보)"
   },
   {
    "name": "255/40R21 미쉐린 타이어 & 휠",
    "price": 1200000,
    "trims": [
     "t7",
     "t8"
    ],
    "desc": "21인치 휠 (3.5 터보)"
   },
   {
    "name": "255/40R21 스포츠 전용 휠",
    "price": 3650000,
    "trims": [
     "t3",
     "t4",
     "t9",
     "t10"
    ],
    "desc": "21인치 스포츠 휠 + 서스펜션 + e-LSD"
   },
   {
    "name": "차량 보호 필름 (액세서리)",
    "price": 450000,
    "trims": null,
    "desc": "보호 필름"
   },
   {
    "name": "사이드 스텝 (액세서리)",
    "price": 470000,
    "trims": null,
    "desc": "사이드 스텝"
   },
   {
    "name": "프로텍션 매트 패키지 (액세서리)",
    "price": 250000,
    "trims": null,
    "desc": "1/2열 + 러기지 매트"
   },
   {
    "name": "빌트인 공기청정기 (액세서리)",
    "price": 450000,
    "trims": null,
    "desc": "빌트인 공기청정기"
   },
   {
    "name": "21인치 단조 휠 (액세서리)",
    "price": 2800000,
    "trims": null,
    "desc": "21인치 단조 휠"
   }
  ]
 },
 {
  "id": "gv70-ev",
  "name": "GV70 전동화",
  "brand": "제네시스",
  "category": "전기차",
  "year": "2027년형",
  "taxNote": "세제혜택 후 가격(개별소비세 실효세율 조정 기준, 2026.07~), 보조금 미반영. 1,000원 단위 반올림",
  "source": "https://www.cardong.co.kr/newcar/vehicle/11740",
  "sourceDate": "2026-07-01",
  "trims": [
   {
    "id": "t1",
    "name": "AWD 19인치",
    "powertrain": "전기 AWD (84.0kWh)",
    "price": 75798000
   },
   {
    "id": "t2",
    "name": "AWD 20인치",
    "powertrain": "전기 AWD (84.0kWh)",
    "price": 76559000
   }
  ],
  "exterior": [
   {
    "name": "우유니 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "세빌 실버",
    "price": 0,
    "trims": null
   },
   {
    "name": "비크 블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레스 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "카프리 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "트롬소 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "스토르 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "마우나 레드",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "마테호른 화이트 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "스토르 그린 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레스 블루 (무광)",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "옵시디언 블랙 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "어반 브라운/프로즌 그레이 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "아이시 블루/글레이셔 화이트 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "오션웨이브 블루/하바나 브라운 투톤",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "시그니처 디자인 셀렉션 I",
    "price": 1900000,
    "trims": null,
    "desc": "퀼팅 프라임 나파가죽, 카빙 알루미늄 가니시"
   },
   {
    "name": "시그니처 디자인 셀렉션 II",
    "price": 2300000,
    "trims": null,
    "desc": "셀렉션 I 구성 + 은하수 패턴 무드램프 가니시"
   },
   {
    "name": "파퓰러 패키지 I",
    "price": 2950000,
    "trims": null,
    "desc": "HUD + 드라이빙 어시스턴스 I"
   },
   {
    "name": "파퓰러 패키지 II",
    "price": 6600000,
    "trims": null,
    "desc": "파퓰러 I + DA II + 2열 컴포트 + 빌트인 캠"
   },
   {
    "name": "프레스티지 패키지",
    "price": 11600000,
    "trims": null,
    "desc": "파퓰러 II + 파노라마 선루프 + 컨비니언스 + B&O"
   },
   {
    "name": "헤드업 디스플레이",
    "price": 1300000,
    "trims": null,
    "desc": "HUD"
   },
   {
    "name": "드라이빙 어시스턴스 패키지 I",
    "price": 1950000,
    "trims": null,
    "desc": "서라운드뷰, 후측방 모니터, 원격주차 보조 2"
   },
   {
    "name": "드라이빙 어시스턴스 패키지 II",
    "price": 2000000,
    "trims": null,
    "desc": "HDA 2, 내비 기반 크루즈, 지능형 헤드램프"
   },
   {
    "name": "2열 컴포트 패키지",
    "price": 1000000,
    "trims": null,
    "desc": "수동 커튼, 3존 공조, 뒷좌석 통풍"
   },
   {
    "name": "파노라마 선루프",
    "price": 1400000,
    "trims": null,
    "desc": "파노라마 선루프"
   },
   {
    "name": "컨비니언스 패키지",
    "price": 2200000,
    "trims": null,
    "desc": "동승석 에르고 시트, 메모리, 무드 큐레이터, 디지털 미러"
   },
   {
    "name": "뱅앤올룹슨 사운드 패키지",
    "price": 1700000,
    "trims": null,
    "desc": "B&O 15스피커, ANC-R"
   },
   {
    "name": "빌트인 캠 패키지",
    "price": 850000,
    "trims": null,
    "desc": "빌트인 캠 2, 보조배터리, AR 내비"
   },
   {
    "name": "차량 보호 필름 (액세서리)",
    "price": 450000,
    "trims": null,
    "desc": "보호 필름"
   },
   {
    "name": "플로팅 휠캡 (액세서리)",
    "price": 90000,
    "trims": null,
    "desc": "플로팅 휠캡"
   },
   {
    "name": "사이드 스텝 (액세서리)",
    "price": 470000,
    "trims": null,
    "desc": "사이드 스텝"
   },
   {
    "name": "프로텍션 매트 패키지 (액세서리)",
    "price": 250000,
    "trims": null,
    "desc": "1/2열 + 러기지 매트"
   }
  ]
 },
 {
  "id": "gv80",
  "name": "GV80",
  "brand": "제네시스",
  "category": "SUV",
  "year": "2027년형",
  "taxNote": "개별소비세 5% 기준 (5인승 기준가, 6/7인승은 선택 품목으로 반영)",
  "source": "https://chazm.co.kr/hub/gv80-guide",
  "sourceDate": "2026-10-06",
  "trims": [
   {
    "id": "t1",
    "name": "2.5 터보 2WD",
    "powertrain": "가솔린 2.5 터보 2WD",
    "price": 69850000
   },
   {
    "id": "t2",
    "name": "2.5 터보 AWD",
    "powertrain": "가솔린 2.5 터보 AWD",
    "price": 73550000
   },
   {
    "id": "t3",
    "name": "3.5 터보 AWD",
    "powertrain": "가솔린 3.5 터보 AWD",
    "price": 79050000
   },
   {
    "id": "t4",
    "name": "2.5 터보 BLACK AWD",
    "powertrain": "가솔린 2.5 터보 AWD",
    "price": 95900000
   },
   {
    "id": "t5",
    "name": "3.5 터보 BLACK AWD",
    "powertrain": "가솔린 3.5 터보 AWD",
    "price": 100100000
   }
  ],
  "exterior": [
   {
    "name": "우유니 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "세빌 실버",
    "price": 0,
    "trims": null
   },
   {
    "name": "비크 블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레스 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "카프리 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "베링 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "스토르 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "마우나 레드",
    "price": 0,
    "trims": null
   },
   {
    "name": "바로사 버건디",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "마테호른 화이트 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "스토르 그린 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "바로사 버건디 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레스 블루 (무광)",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "옵시디언 블랙 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "스모키 그린/바닐라 베이지 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "스모키 그린/어스 브라운 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "슬레이트 그레이/보르도 브라운 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "울트라마린 블루/글레이셔 화이트 투톤",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "7인승",
    "price": 1000000,
    "trims": null,
    "desc": "3열 시트 (7인승)"
   },
   {
    "name": "6인승",
    "price": 2500000,
    "trims": null,
    "desc": "2열 독립 시트 (6인승)"
   },
   {
    "name": "천연 가죽 패키지",
    "price": 1350000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "천연가죽 시트"
   },
   {
    "name": "시그니처 디자인 셀렉션 I",
    "price": 2850000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "투톤 퀼팅 시트, 알루미늄 내장재"
   },
   {
    "name": "시그니처 디자인 셀렉션 II",
    "price": 4350000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "나파가죽, 리얼 우드, 스웨이드 헤드라이닝"
   },
   {
    "name": "파퓰러 패키지",
    "price": 4100000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "HUD + 드라이빙 어시스턴스 패키지"
   },
   {
    "name": "드라이빙 어시스턴스 패키지",
    "price": 2950000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "차로변경 보조, 원격 자동주차, 지능형 헤드램프"
   },
   {
    "name": "뒷좌석 컴포트 패키지",
    "price": 2900000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "2열 전동·통풍, 전동 커튼, 3존+ 공조"
   },
   {
    "name": "뱅앤올룹슨 사운드 패키지",
    "price": 1900000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "B&O 18스피커, ANC-R"
   },
   {
    "name": "빌트인 캠 패키지",
    "price": 850000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "빌트인 캠 2, 보조배터리, AR 내비"
   },
   {
    "name": "파노라마 선루프",
    "price": 1400000,
    "trims": null,
    "desc": "파노라마 선루프"
   }
  ]
 },
 {
  "id": "gv80-hev",
  "name": "GV80 하이브리드",
  "brand": "제네시스",
  "category": "SUV",
  "year": "2027년형",
  "taxNote": "개별소비세 5% 기준 (5인승 기준가, 6/7인승은 선택 품목으로 반영)",
  "source": "https://www.cardong.co.kr/newcar/vehicle/11906",
  "sourceDate": "2026-10-06",
  "trims": [
   {
    "id": "t1",
    "name": "2.5 터보 하이브리드 2WD",
    "powertrain": "하이브리드 2.5 터보 2WD",
    "price": 76800000
   },
   {
    "id": "t2",
    "name": "2.5 터보 하이브리드 AWD",
    "powertrain": "하이브리드 2.5 터보 AWD",
    "price": 80500000
   },
   {
    "id": "t3",
    "name": "2.5 터보 하이브리드 BLACK AWD",
    "powertrain": "하이브리드 2.5 터보 AWD",
    "price": 103250000
   }
  ],
  "exterior": [
   {
    "name": "우유니 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "세빌 실버",
    "price": 0,
    "trims": null
   },
   {
    "name": "비크 블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레스 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "베링 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "트롬소 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "세이셸 베이지",
    "price": 0,
    "trims": null
   },
   {
    "name": "카디프 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "마테호른 화이트 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "브런즈윅 그린 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레스 블루 (무광)",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "옵시디언 블랙 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "울트라마린 블루/트래버틴 베이지 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "울트라마린 블루/바하 베이지 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "슬레이트 그레이/새들 브라운 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/타이가 그린 투톤",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "7인승",
    "price": 1000000,
    "trims": null,
    "desc": "3열 시트 (7인승)"
   },
   {
    "name": "6인승",
    "price": 2500000,
    "trims": null,
    "desc": "2열 독립 시트 (6인승)"
   },
   {
    "name": "천연 가죽 패키지",
    "price": 1350000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "천연가죽 시트"
   },
   {
    "name": "시그니처 디자인 셀렉션 I",
    "price": 2850000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "투톤 퀼팅 시트, 알루미늄 내장재"
   },
   {
    "name": "시그니처 디자인 셀렉션 II",
    "price": 4350000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "나파가죽, 리얼 우드, 스웨이드 헤드라이닝"
   },
   {
    "name": "파퓰러 패키지",
    "price": 4100000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "HUD + 드라이빙 어시스턴스 패키지"
   },
   {
    "name": "헤드업 디스플레이",
    "price": 1300000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "HUD"
   },
   {
    "name": "드라이빙 어시스턴스 패키지",
    "price": 2950000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "충돌방지 2, HDA 2, 원격주차 2, 지능형 헤드램프"
   },
   {
    "name": "하이테크 패키지",
    "price": 2100000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "고스트 도어, 디지털 미러, 무드 큐레이터, 실내 V2L"
   },
   {
    "name": "앞좌석 컴포트 패키지",
    "price": 1600000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "에르고 모션 18way, 동승석 메모리"
   },
   {
    "name": "뒷좌석 컴포트 패키지",
    "price": 2500000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "2열 전동·통풍, 전동 커튼, 3존+ 공조"
   },
   {
    "name": "뱅앤올룹슨 사운드 패키지",
    "price": 1900000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "B&O 18스피커, ANC-R"
   },
   {
    "name": "빌트인 캠 패키지",
    "price": 850000,
    "trims": null,
    "desc": "빌트인 캠 2, 보조배터리, AR 내비"
   },
   {
    "name": "265/50R20 휠 패키지",
    "price": 1300000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "20인치 미쉐린, 실버 캘리퍼"
   },
   {
    "name": "265/40R22 휠 패키지",
    "price": 2500000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "22인치 미쉐린, 다크 그레이 휠"
   },
   {
    "name": "파노라마 선루프",
    "price": 1400000,
    "trims": null,
    "desc": "파노라마 선루프"
   },
   {
    "name": "후석 스마트 엔터테인먼트 (액세서리)",
    "price": 3000000,
    "trims": null,
    "desc": "14.6인치 듀얼 후석 모니터"
   },
   {
    "name": "차량 보호 필름 (액세서리)",
    "price": 500000,
    "trims": null,
    "desc": "보호 필름"
   },
   {
    "name": "트레일러 히치 (액세서리)",
    "price": 1550000,
    "trims": null,
    "desc": "트레일러 히치"
   },
   {
    "name": "고정식 사이드 스텝 (액세서리)",
    "price": 490000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "고정식 사이드 스텝"
   },
   {
    "name": "고정식 사이드 스텝 블랙 전용 (액세서리)",
    "price": 540000,
    "trims": [
     "t3"
    ],
    "desc": "고정식 사이드 스텝"
   },
   {
    "name": "2열 냉온장 컵홀더 (6인승, 액세서리)",
    "price": 800000,
    "trims": null,
    "desc": "6인승 전용"
   },
   {
    "name": "프로텍션 매트 패키지 (액세서리)",
    "price": 200000,
    "trims": null,
    "desc": "1/2열 매트"
   }
  ]
 },
 {
  "id": "gv80-coupe",
  "name": "GV80 쿠페",
  "brand": "제네시스",
  "category": "SUV",
  "year": "2027년형",
  "taxNote": "개별소비세 5% 기준",
  "source": "https://www.cardong.co.kr/newcar/vehicle/11594",
  "sourceDate": "2026-10-06",
  "trims": [
   {
    "id": "t1",
    "name": "2.5 터보",
    "powertrain": "가솔린 2.5 터보 AWD",
    "price": 82700000
   },
   {
    "id": "t2",
    "name": "3.5 터보",
    "powertrain": "가솔린 3.5 터보 AWD",
    "price": 86900000
   },
   {
    "id": "t3",
    "name": "3.5 터보 48V 일렉트릭 슈퍼차저",
    "powertrain": "가솔린 3.5 터보 48V eS AWD",
    "price": 93250000
   },
   {
    "id": "t4",
    "name": "2.5 터보 BLACK",
    "powertrain": "가솔린 2.5 터보 AWD",
    "price": 101000000
   },
   {
    "id": "t5",
    "name": "3.5 터보 BLACK",
    "powertrain": "가솔린 3.5 터보 AWD",
    "price": 105200000
   },
   {
    "id": "t6",
    "name": "3.5 터보 48V 일렉트릭 슈퍼차저 BLACK",
    "powertrain": "가솔린 3.5 터보 48V eS AWD",
    "price": 110350000
   }
  ],
  "exterior": [
   {
    "name": "우유니 화이트",
    "price": 0,
    "trims": null
   },
   {
    "name": "세빌 실버",
    "price": 0,
    "trims": null
   },
   {
    "name": "비크 블랙",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레스 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "카프리 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "베링 블루",
    "price": 0,
    "trims": null
   },
   {
    "name": "트롬소 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "스토르 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "세이셸 베이지",
    "price": 0,
    "trims": null
   },
   {
    "name": "카디프 그린",
    "price": 0,
    "trims": null
   },
   {
    "name": "마우나 레드",
    "price": 0,
    "trims": null
   },
   {
    "name": "바로사 버건디",
    "price": 0,
    "trims": null
   },
   {
    "name": "마칼루 그레이 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "마테호른 화이트 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "브런즈윅 그린 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "스토르 그린 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "바로사 버건디 (무광)",
    "price": 0,
    "trims": null
   },
   {
    "name": "세레스 블루 (무광)",
    "price": 0,
    "trims": null
   }
  ],
  "interior": [
   {
    "name": "옵시디언 블랙 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "스모키 그린/바닐라 베이지 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "울트라마린 블루 모노톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "울트라마린 블루/바하 베이지 투톤",
    "price": 0,
    "trims": null
   },
   {
    "name": "옵시디언 블랙/세비야 레드 투톤",
    "price": 0,
    "trims": null
   }
  ],
  "options": [
   {
    "name": "쿠페 디자인 셀렉션 II",
    "price": 1500000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "프리미엄 나파, 리얼 우드/카본, 스웨이드 헤드라이닝"
   },
   {
    "name": "파퓰러 패키지",
    "price": 4735000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "HUD + 드라이빙 어시스턴스 패키지"
   },
   {
    "name": "헤드업 디스플레이",
    "price": 1300000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "HUD"
   },
   {
    "name": "하이테크 패키지",
    "price": 1300000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "고스트 도어 클로징, 디지털 센터 미러"
   },
   {
    "name": "앞좌석 컴포트 패키지",
    "price": 1600000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "에르고 모션 18way, 동승석 메모리"
   },
   {
    "name": "드라이빙 어시스턴스 패키지",
    "price": 3650000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "충돌방지, 주차 보조, HDA 2, e-LSD(48V 제외)"
   },
   {
    "name": "뒷좌석 컴포트 패키지",
    "price": 2200000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "뒷좌석 전동·통풍, 3존+ 공조, 220V"
   },
   {
    "name": "뱅앤올룹슨 사운드 패키지",
    "price": 1900000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "B&O 18스피커, ANC-R"
   },
   {
    "name": "빌트인 캠 패키지",
    "price": 850000,
    "trims": null,
    "desc": "빌트인 캠 2, 보조배터리, AR 내비"
   },
   {
    "name": "265/40R22 타이어 + 블랙 캘리퍼 + 휠",
    "price": 1200000,
    "trims": [
     "t1",
     "t2"
    ],
    "desc": "22인치 휠 패키지"
   },
   {
    "name": "파노라마 선루프",
    "price": 1400000,
    "trims": null,
    "desc": "파노라마 선루프"
   },
   {
    "name": "후석 스마트 엔터테인먼트 (액세서리)",
    "price": 3000000,
    "trims": null,
    "desc": "14.6인치 듀얼 후석 모니터"
   },
   {
    "name": "고정식 사이드 스텝 (액세서리)",
    "price": 490000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "고정식 사이드 스텝"
   },
   {
    "name": "고정식 사이드 스텝 블랙 전용 (액세서리)",
    "price": 540000,
    "trims": [
     "t4",
     "t5",
     "t6"
    ],
    "desc": "고정식 사이드 스텝"
   },
   {
    "name": "전동식 사이드 스텝 (액세서리)",
    "price": 2450000,
    "trims": [
     "t1",
     "t2",
     "t3"
    ],
    "desc": "전동식 사이드 스텝"
   },
   {
    "name": "전동식 사이드 스텝 블랙 전용 (액세서리)",
    "price": 2550000,
    "trims": [
     "t4",
     "t5",
     "t6"
    ],
    "desc": "전동식 사이드 스텝"
   },
   {
    "name": "차량 보호 필름 (액세서리)",
    "price": 500000,
    "trims": null,
    "desc": "보호 필름"
   },
   {
    "name": "프로텍션 매트 패키지 1/2열 (액세서리)",
    "price": 200000,
    "trims": null,
    "desc": "1/2열 매트"
   }
  ]
 },
 {
  "id": "gv90",
  "name": "GV90",
  "brand": "제네시스",
  "category": "전기차",
  "year": "2027년형",
  "taxNote": "GV90: 개별소비세 5% + 친환경차 세제혜택 반영, 보조금 미반영 / 네오룬: 개별소비세 5% 기준(세제혜택 미반영)",
  "source": "https://www.mt.co.kr/article/2026111010240539729",
  "sourceDate": "2026-11-10",
  "trims": [
   {
    "id": "t1",
    "name": "GV90 스탠다드 (7인승)",
    "powertrain": "전기 AWD (123.5kWh)",
    "price": 139500000
   },
   {
    "id": "t2",
    "name": "GV90 인디비쥬얼 라운지 시트 (6인승)",
    "powertrain": "전기 AWD (123.5kWh)",
    "price": 145500000
   },
   {
    "id": "t3",
    "name": "GV90 네오룬 스탠다드 (6인승)",
    "powertrain": "전기 AWD (123.5kWh)",
    "price": 189900000
   },
   {
    "id": "t4",
    "name": "GV90 네오룬 이그제큐티브 스위트 (4인승)",
    "powertrain": "전기 AWD (123.5kWh)",
    "price": 239500000
   },
   {
    "id": "t5",
    "name": "GV90 네오룬 퍼스트 에디션 (한정 222대)",
    "powertrain": "전기 AWD (123.5kWh)",
    "price": 270000000
   }
  ],
  "exterior": [],
  "interior": [],
  "options": []
 }
];

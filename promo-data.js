/* 이달의 할인·할부 프로모션 — 견적 계산기용
   기준: 2026년 11월 (현대 K-세일페스타 11/1~12/31, 제네시스 11월 구매혜택)
   매달 조건이 바뀌므로 이 파일만 고치면 됩니다. type '기본' = 기본으로 체크, '조건부' = 고객이 선택 */
window.PROMO_MONTH = "2026년 11월";
window.PROMO_NOTES = {"현대": "이 밖에 K-세일페스타 응모 구매쿠폰(추첨, 최대 100만원), 블루멤버스·세이브오토 포인트 혜택이 있습니다(캐스퍼·신형 투싼 일부 제외).", "제네시스": "이 밖에 11월 고객감사 할인쿠폰(추첨, 1등 100만원·2등 50만원)이 있습니다. 트레이드-인은 윈백·노후차 혜택과 중복되지 않습니다."};
window.PROMOS = {
 "casper": {
  "discounts": []
 },
 "casper-ev": {
  "discounts": []
 },
 "venue": {
  "discounts": [
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 300000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 200000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "kona": {
  "discounts": [
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 300000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 200000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "kona-hybrid": {
  "discounts": [
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "10년·15만km 이하 · 금액 확인 필요",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": " · 금액 확인 필요",
    "amount": 300000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 200000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "kona-ev": {
  "discounts": [
   {
    "name": "생산월 할인",
    "type": "조건부",
    "cond": "2026년 7월 이전 생산분",
    "amount": 1000000,
    "group": "prod",
    "trims": null
   },
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 1000000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 400000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "avante": {
  "discounts": [
   {
    "name": "K-세일페스타 기본 할인",
    "type": "기본",
    "cond": "가솔린, 11/1~12/31",
    "amount": 1000000,
    "trims": null
   },
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 300000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 200000,
    "group": "tradein",
    "trims": null
   }
  ],
  "firstMove": {
   "name": "퍼스트 무브 플랜 (유예형)",
   "rate": 2.8,
   "months": 36,
   "deferMax": 70,
   "downMin": 10,
   "cond": "11월 출고 · 개인/개인사업자 · 모던/프리미엄 · 중고차 가격보장 서비스 가입 필수",
   "end": "만기 때 차량 반납으로 유예금 정산 (현대캐피탈)",
   "source": "https://www.hyundai.com/kr/ko/event/event-the-all-new-avante-first-move-plan",
   "trims": [
    "a_m",
    "a_p"
   ],
   "hybridAdd": 0
  }
 },
 "avante-hybrid": {
  "discounts": [
   {
    "name": "생산월/재고 할인",
    "type": "조건부",
    "cond": "생산월·재고에 따라 변동 (현대차 안내 예시 기준)",
    "amount": 500000,
    "group": "prod",
    "trims": null
   },
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "10년·15만km 이하 · 금액 확인 필요",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": " · 금액 확인 필요",
    "amount": 300000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 200000,
    "group": "tradein",
    "trims": null
   }
  ],
  "firstMove": {
   "name": "퍼스트 무브 플랜 (유예형)",
   "rate": 2.8,
   "months": 36,
   "deferMax": 70,
   "downMin": 10,
   "cond": "11월 출고 · 개인/개인사업자 · 모던/프리미엄 · 중고차 가격보장 서비스 가입 필수",
   "end": "만기 때 차량 반납으로 유예금 정산 (현대캐피탈)",
   "source": "https://www.hyundai.com/kr/ko/event/event-the-all-new-avante-first-move-plan",
   "trims": [
    "ah_m",
    "ah_p"
   ],
   "hybridAdd": 1000000
  }
 },
 "avante-n": {
  "discounts": [
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 300000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 200000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "sonata": {
  "discounts": [
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 300000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 200000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "sonata-hybrid": {
  "discounts": [
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "10년·15만km 이하 · 금액 확인 필요",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": " · 금액 확인 필요",
    "amount": 300000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 200000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "grandeur": {
  "discounts": [
   {
    "name": "캘리그래피 추가 할인",
    "type": "조건부",
    "cond": "캘리그래피 트림",
    "amount": 1000000,
    "trims": [
     "g25c"
    ]
   },
   {
    "name": "생산월 할인(2026.6 이전 생산)",
    "type": "조건부",
    "cond": "2026년 6월 이전 생산 · 언론 보도 기준, 확인 필요",
    "amount": 3000000,
    "group": "prod",
    "trims": null
   },
   {
    "name": "3.5 가솔린 재고 할인",
    "type": "조건부",
    "cond": "3.5 가솔린, 구형 재고 · 언론 보도 기준, 확인 필요",
    "amount": 4500000,
    "group": "prod",
    "trims": [
     "g35p",
     "g35e",
     "g35eh"
    ]
   },
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 300000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 200000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "grandeur-hybrid": {
  "discounts": [
   {
    "name": "생산월 추가 할인",
    "type": "조건부",
    "cond": "생산월 따라 최대",
    "amount": 1000000,
    "group": "prod",
    "trims": null
   },
   {
    "name": "생산월 할인(2026.6 이전 생산)",
    "type": "조건부",
    "cond": "2026년 6월 이전 생산 · 언론 보도 기준, 확인 필요",
    "amount": 3000000,
    "group": "prod",
    "trims": null
   },
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 1000000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 200000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "tucson": {
  "discounts": []
 },
 "santafe": {
  "discounts": [
   {
    "name": "K-세일페스타 기본 할인",
    "type": "기본",
    "cond": "개인/개인사업자, 11/1~12/31",
    "amount": 1000000,
    "trims": null
   },
   {
    "name": "생산월 추가 할인",
    "type": "조건부",
    "cond": "즉시출고 재고, 생산월 따라 최대",
    "amount": 1000000,
    "group": "prod",
    "trims": null
   },
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 300000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 200000,
    "group": "tradein",
    "trims": null
   }
  ],
  "finance": {
   "name": "무이자 할부",
   "rate": 0,
   "months": [
    36,
    48,
    60
   ],
   "cond": "11월 출고, 선수금 20% 이상(현대카드·M계열 결제), 차종별 선착순"
  }
 },
 "palisade": {
  "discounts": [
   {
    "name": "생산월 할인(2026.9 이전 생산)",
    "type": "조건부",
    "cond": "출시모델 9월 이전 생산, 최대",
    "amount": 2000000,
    "group": "prod",
    "trims": null
   },
   {
    "name": "생산월 할인(27MY/10월 생산)",
    "type": "조건부",
    "cond": "2027MY 및 10월 생산분",
    "amount": 1000000,
    "group": "prod",
    "trims": null
   },
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 300000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 200000,
    "group": "tradein",
    "trims": null
   }
  ],
  "finance": {
   "name": "무이자 할부",
   "rate": 0,
   "months": [
    36,
    48,
    60
   ],
   "cond": "11월 출고, 선수금 20% 이상(현대카드·M계열 결제), 차종별 선착순 · 일부 재고 한정"
  }
 },
 "ioniq5": {
  "discounts": [
   {
    "name": "생산월 할인",
    "type": "조건부",
    "cond": "2026년 7월 이전 생산분",
    "amount": 1000000,
    "group": "prod",
    "trims": null
   },
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 1000000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 400000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "ioniq5n": {
  "discounts": [
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 1000000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 400000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "ioniq6": {
  "discounts": [
   {
    "name": "생산월 할인",
    "type": "조건부",
    "cond": "더 뉴 아이오닉6, 2026년 7월 이전 생산",
    "amount": 1000000,
    "group": "prod",
    "trims": null
   },
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 1000000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 400000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "ioniq6n": {
  "discounts": [
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 1000000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 400000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "ioniq9": {
  "discounts": [
   {
    "name": "생산월 할인",
    "type": "조건부",
    "cond": "2026년 7월 이전 생산분",
    "amount": 2000000,
    "group": "prod",
    "trims": null
   },
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 1000000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 500000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 200000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "nexo": {
  "discounts": [
   {
    "name": "생산월 할인(구형 재고)",
    "type": "조건부",
    "cond": "출시모델 2026년 9월 이전 생산",
    "amount": 2000000,
    "group": "prod",
    "trims": null
   },
   {
    "name": "트레이드-인(현대/제네시스 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 2000000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(타사 차 반납)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10년·15만km 이하, 개인/개인사업자, 11월",
    "amount": 1000000,
    "group": "tradein",
    "trims": null
   },
   {
    "name": "트레이드-인(노후 10~15년)",
    "type": "조건부",
    "cond": "인증중고차 매각, 10~15년·15~25만km, 11월",
    "amount": 200000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "g70": {
  "discounts": [
   {
    "name": "트레이드-인",
    "type": "조건부",
    "cond": "현대/제네시스 인증중고차에 타던차 매각, 15일내 출고(최대)",
    "amount": 2000000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "g70-sb": {
  "discounts": [
   {
    "name": "트레이드-인",
    "type": "조건부",
    "cond": "현대/제네시스 인증중고차에 타던차 매각, 15일내 출고(최대)",
    "amount": 2000000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "g80": {
  "discounts": [
   {
    "name": "스페셜 오퍼 기본 할인",
    "type": "기본",
    "cond": "즉시출고 재고, 전동화 제외 (K-세일페스타)",
    "amount": 2000000,
    "trims": null
   },
   {
    "name": "생산월 할인",
    "type": "조건부",
    "cond": "생산월별 최대 5% (8월 이전 생산분)",
    "percent": 5,
    "group": "prod",
    "trims": null
   },
   {
    "name": "트레이드-인",
    "type": "조건부",
    "cond": "현대/제네시스 인증중고차에 타던차 매각, 15일내 출고(최대)",
    "amount": 2000000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "eg80": {
  "discounts": [
   {
    "name": "트레이드-인",
    "type": "조건부",
    "cond": "현대/제네시스 인증중고차에 타던차 매각, 15일내 출고(최대)",
    "amount": 2000000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "g90": {
  "discounts": [
   {
    "name": "트레이드-인",
    "type": "조건부",
    "cond": "현대/제네시스 인증중고차에 타던차 매각, 15일내 출고(최대)",
    "amount": 2000000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "g90-lwb": {
  "discounts": [
   {
    "name": "트레이드-인",
    "type": "조건부",
    "cond": "현대/제네시스 인증중고차에 타던차 매각, 15일내 출고(최대)",
    "amount": 2000000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "gv60": {
  "discounts": [
   {
    "name": "트레이드-인",
    "type": "조건부",
    "cond": "현대/제네시스 인증중고차에 타던차 매각, 15일내 출고(최대)",
    "amount": 2000000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "gv60-magma": {
  "discounts": [
   {
    "name": "트레이드-인",
    "type": "조건부",
    "cond": "GV60 대상; 마그마 포함 여부 미확인. 인증중고차 매각",
    "amount": 2000000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "gv70": {
  "discounts": [
   {
    "name": "스페셜 오퍼 기본 할인",
    "type": "기본",
    "cond": "즉시출고 재고, 전동화 제외 (K-세일페스타)",
    "amount": 2000000,
    "trims": null
   },
   {
    "name": "생산월 할인",
    "type": "조건부",
    "cond": "생산월별 최대 3% (8월 이전 생산분)",
    "percent": 3,
    "group": "prod",
    "trims": null
   },
   {
    "name": "트레이드-인",
    "type": "조건부",
    "cond": "현대/제네시스 인증중고차에 타던차 매각, 15일내 출고(최대)",
    "amount": 2000000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "gv70-ev": {
  "discounts": [
   {
    "name": "트레이드-인",
    "type": "조건부",
    "cond": "현대/제네시스 인증중고차에 타던차 매각, 15일내 출고(최대)",
    "amount": 2000000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "gv80": {
  "discounts": [
   {
    "name": "트레이드-인",
    "type": "조건부",
    "cond": "현대/제네시스 인증중고차에 타던차 매각, 15일내 출고(최대)",
    "amount": 2000000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "gv80-hev": {
  "discounts": []
 },
 "gv80-coupe": {
  "discounts": [
   {
    "name": "트레이드-인",
    "type": "조건부",
    "cond": "현대/제네시스 인증중고차에 타던차 매각, 15일내 출고(최대)",
    "amount": 2000000,
    "group": "tradein",
    "trims": null
   }
  ]
 },
 "gv90": {
  "discounts": []
 }
};

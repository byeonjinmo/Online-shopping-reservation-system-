 /*사용자가 주문을 할 때마다 주문 내역을 관찰하고, 총 결제 금액을 업데이트 함.
 Observer 패턴을 이용하여 설계
 OrderCommand의 상태 변경이 PaymentObserver에 자동으로 반영 됨. 
 이를 통해 객체 간 결합도를 낮추고 코드의 유연성을 높이며
 주문 처리 방식이 바뀌더라도, PaymentObserver는 그대로 유지되도록 설계*/
 
class PaymentObserver {
    constructor() {
        this.totalAmount = 0;
    }
/*주문의 합계 금액을 추적
OrderCommand에서 알림을 받을 때마다 update 메서드가 호출되며, 이때 주문된 상품의 가격이 합계에 더해지는 구조*/
    update(user, product) {
        this.totalAmount += product.price;
        console.log(`총 누적 결제금: ${this.totalAmount}`);
    }
}

module.exports = PaymentObserver;


 
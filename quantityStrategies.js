//Strategy 패턴을 구현함으로 이 패턴을 통해 상품의 수량을 확인하는 방법을 동적으로 변경할 수 있음

class AllProductsQuantityStrategy {
    execute(products) {
        let totalQuantity = 0;
        for (const product of products) {
            totalQuantity += product.quantity;
        }
        return totalQuantity;
    }
}

class SingleProductQuantityStrategy {
    constructor(productName) {
        this.productName = productName;
    }

    execute(products) {
        for (const product of products) {
            if (product.name === this.productName) {
                return product.quantity;
            }
        }
        return 0;
    }
}

module.exports = { AllProductsQuantityStrategy, SingleProductQuantityStrategy };

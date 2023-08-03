/*Factory 패턴은 객체 생성 로직을 메서드 내에 캡슐화하여 사용자 생성 로직을 캡슐화하여 객체 생성을 단순화 함.
createUser메서드는 User 객체를 생성하고, 이들 객체를 관리하는 역할을 부여
UserManager는 Module 패턴을 사용하여 createUser 함수를 제공 하고 Singleton 패턴을 이용하여 ProductManager의 인스턴스가 한 개만 생성되도록 보장한 객체를 통하여
다른 파일에서도 동일한 UserManager 인스턴스를 불러와 사용할 수 있게 설계*/

const User = require('../models/user');

const userManager = (() => {
    const createUser = (이름, 역할) => {
        return new User(이름, 역할);
    };

    return {
        createUser,
    };
})();

module.exports = userManager;


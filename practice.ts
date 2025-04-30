abstract class User {
    constructor(
        protected firstName:string,
        protected lastName:string,
        protected nickName:string,
    ){}
    abstract getNickName():void

    getFullName(){
        return `${this.lastName} ${this.firstName}`
    }
}


class Player extends User{
    getNickName() {
        console.log(this.nickName);
    }
}

const hj = new Player('HyunJeong', 'Yu', 'hj')
console.log(hj.getFullName())
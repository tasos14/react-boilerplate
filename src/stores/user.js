import { observable, action } from 'mobx';

class User {
    @observable username;

    @action.bound login(uname) {
        this.username = uname;
    }

    @action.bound logout() {
        this.username = null;
    }
}

export default new User();

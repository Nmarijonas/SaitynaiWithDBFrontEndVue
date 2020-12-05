export default class User {
    constructor(username, password, repeated_password, roles) {
        this.username = username;
        this.password = password;
        this.repeated_password = repeated_password;
        this.roles = roles;
    }
}
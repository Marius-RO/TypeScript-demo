import { Login, User } from './interfaces';

class LoginImpl implements Login {
    login(): User {
        return {   
            name: 'implemented-login-name',
            id: 1,
            age: 25,
            email: 'implemented-login-email'
        }
    }

}



// example with another importing syntax (avoid this, not recommended)
import * as UserLogin from './interfaces';

class LoginImpl2 implements UserLogin.Login {
    login(): UserLogin.User {
        return {   
            name: 'implemented-login-name-[2]',
            id: 1,
            age: 25,
            email: 'implemented-login-email-[2]'
        }
    }
}

import Api from '@/services/Api'

/**
 * This js file will export a register method which will take in an email and password.
 * We will pass the email and password into the post method to the register endpoint on our
 * express server and use those credentials.  
 */
export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}
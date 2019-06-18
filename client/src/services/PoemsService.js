import Api from '@/services/Api'

export default {
    index () {
        return Api().get('poems')
    },
    post (poem) {
        return Api().post('poems', poem)
    }
}
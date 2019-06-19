import Api from '@/services/Api'

export default {
    index () {
        return Api().get('poems')
    },
    post (poem) {
        return Api().post('poems', poem)
    },
    show(poemId) {
        return Api().get(`poems/${poemId}`)
    },
    put(poem) {
        return Api().put(`poems/${poem.id}`, poem)
    },
    delete(poemId) {
        return Api().get(`poems/${poemId}`)
    }
}
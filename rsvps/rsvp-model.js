const db = require('database')

module.exports = {
    get,
    getById,
    add
}

function get() {
    return db('rsvps')
}

function getById() {
    return db('rsvps').where({id: id}).first()
}

function add(rsvp) {
    return db('rsvps').insert(rsvp, 'id').then(ids =>{
        const [id] = ids;
        return getById(id)
    })
}
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("rsvps")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("rsvps").insert([
        { id: 1, name: "person1", email: 'person@person.com' },
        { id: 2, name: "bob", email:'bob@bob.com' },
        { id: 3, name: "kun", email:'kun@kun.com' },
      ]);
    });
};

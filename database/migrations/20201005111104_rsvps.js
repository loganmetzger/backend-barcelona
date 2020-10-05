exports.up = function (knex) {
  return knex.schema.createTable("rsvps", (rsvps) => {
    rsvps.increments().primary();
    rsvps.string("name", 200).notNullable();
    rsvps.string("email", 500).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("rsvps");
};

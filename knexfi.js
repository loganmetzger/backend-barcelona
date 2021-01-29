require("dotenv").config();

module.exports = {
	development: {
		client: "sqlite3",
		connection: { filename: "./database/expat.db3" },
		useNullAsDefault: true,
		migrations: {
			directory: "./database/migrations",
			tableName: "dbmigrations",
		},
		seeds: { directory: "./database/seeds" },
		pool: {
			afterCreate: (conn, done) => {
				conn.run("PRAGMA foreign_keys = ON", done);
			},
		},
		production: {
			client: "sqlite3",
			connection: { filename: "./database/expatprod.db3" },
			useNullAsDefault: true,
			migrations: {
				directory: "./database/migrations",
				tableName: "dbmigrations",
			},
			seeds: { directory: "./database/seeds" },
			pool: {
				afterCreate: (conn, done) => {
					conn.run("PRAGMA foreign_keys = ON", done);
				},
			},
		},
	},
};

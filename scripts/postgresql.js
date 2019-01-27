const { Client } = require('pg')
const client = new Client({
	database: 'storeofbot'
})

const log = (text) => console.log('>>', text)

//ALTER TABLE users ADD COLUMN reply BOOLEAN DEFAULT true;
const main = async () => {
	await client.connect()
	await client.query(`
		CREATE TABLE bots(
			id               INT        NOT NULL,
			admin            INT        NOT NULL,
			name             TEXT       NOT NULL,
			username         TEXT       NOT NULL,
			description      TEXT       NOT NULL,
			score            FLOAT      DEFAULT 0,
			types            INT[]      DEFAULT '{}',
			categories       INT[]      DEFAULT '{}',
			scores           JSONB      DEFAULT '{}',
			uptime           TIMESTAMP  DEFAULT now(),
			time             TIMESTAMP  DEFAULT now(),
			PRIMARY KEY (id)
		);
	`, []).catch(log)
	await client.end()
}
main()

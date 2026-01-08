CREATE TABLE `messaggi_contatti` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nome` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`oggetto` varchar(255) NOT NULL,
	`messaggio` text NOT NULL,
	`letto` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `messaggi_contatti_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `newsletters` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(255) NOT NULL,
	`nome` varchar(255),
	`iscritto` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `newsletters_id` PRIMARY KEY(`id`),
	CONSTRAINT `newsletters_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `sconti` (
	`id` int AUTO_INCREMENT NOT NULL,
	`titolo` varchar(255) NOT NULL,
	`descrizione` text NOT NULL,
	`categoria` varchar(50) NOT NULL,
	`nomeNegozio` varchar(255) NOT NULL,
	`percentuale` int,
	`dataInizio` timestamp NOT NULL,
	`dataFine` timestamp NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `sconti_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `studenti` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(255) NOT NULL,
	`nome` varchar(255) NOT NULL,
	`cognome` varchar(255) NOT NULL,
	`numeroMatricola` varchar(255),
	`codiceCarta` varchar(50) NOT NULL,
	`attivo` int NOT NULL DEFAULT 0,
	`dataAcquisto` timestamp,
	`dataScadenza` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `studenti_id` PRIMARY KEY(`id`),
	CONSTRAINT `studenti_email_unique` UNIQUE(`email`),
	CONSTRAINT `studenti_numeroMatricola_unique` UNIQUE(`numeroMatricola`),
	CONSTRAINT `studenti_codiceCarta_unique` UNIQUE(`codiceCarta`)
);

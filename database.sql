--  --  --  --  --  These commands below are for setting up the database table in Postico -- -- -- -- -- -- -- --
-- Run this one first -- --
CREATE TABLE tasks (
    "id" serial PRIMARY KEY,
    "task" VARCHAR(240) NOT NULL,
    "priority" INTEGER,
    "status" BOOLEAN DEFAULT FALSE
);

-- Run this command to add example/test data-- --
INSERT INTO "tasks" ("task","priority","status")
VALUES ('walk the dog','3','false'),
('Get a second dog','2','false'),
('Get third dog to watch over the first two','1','false');

-- -- -- -- -- -- -- End of Set Up -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


-- The following commands are just examples of the sql commands used on the server

-- For future renditions, I may update the table to include a new row for a "due date" information to be included.
---------------->This would be the command---->  ALTER TABLE "tasks" ADD "date_due" DATE; <-------------------
-- Status will be stored as True or False, but will display as either "In progress" or "Completed"

-------------- Command for GET/SELECT Routes --------------
SELECT * FROM "tasks" ORDER BY "priority";
SELECT * FROM "tasks" WHERE "priority" = 'high' ORDER BY "priority";
SELECT * FROM "tasks" WHERE "priority" = $1 ORDER BY "priority";

-------------- Command for DELETE Routes --------------
DELETE FROM "tasks" WHERE "id" = $1;

-------------- Command for POST/INSERT Routes --------------
INSERT INTO "tasks" ("task","priority","status")
VALUES ($1,$2,$3);

-------------- Command for PUT/UPDATE Routes --------------
UPDATE "tasks"
SET "completionStatus" = TRUE
WHERE "id" = $1;

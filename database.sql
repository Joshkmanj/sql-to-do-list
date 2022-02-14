CREATE TABLE tasks (
    "id" serial PRIMARY KEY,
    "task" VARCHAR(240) NOT NULL,
    "priority" INTEGER,
    "status" BOOLEAN DEFAULT FALSE
);

INSERT INTO "tasks" ("task","priority","status")
VALUES ('walk the dog','3','false'),
('Get a second dog','2','false'),
('Get third dog to watch over the first two','1','false');

-- Priority options will be 'low', 'medium', 'high'         ;
-- If it feels necessary, I'll update the table to include a new row for a "due date" information to be included.
---------------->This would be the command---->  ALTER TABLE "tasks" ADD "date_due" DATE; <-------------------
-- Status will be True or False, maybe updated in the future to include a "in-progress" option

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

CREATE TABLE tasks (
    "id" serial PRIMARY KEY,
    "task" VARCHAR(240) NOT NULL,
    "priority" VARCHAR(6),
    "completionStatus" BOOLEAN DEFAULT FALSE
);

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
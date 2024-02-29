--CREATE TABLE safety_tips (id INTEGER NOT NULL PRIMARY KEY,Your_phone_is_a_distraction TEXT NOT NULL,Watch_out_for_roads TEXT NOT NULL,Watch_your_step TEXT NOT NULL);
--INSERT INTO safety_tips (id, Your_phone_is_a_distraction, Watch_out_for_roads, Watch_your_step) VALUES (1, 'Keep your phone in Do Not Disturb mode to avoid distractions.', 'Always be aware of your surroundings and follow traffic signals.', 'Stay vigilant of the path ahead to prevent trips and falls.');

SELECT Your_phone_is_a_distraction, Watch_out_for_roads, Watch_your_step FROM safety_tips;

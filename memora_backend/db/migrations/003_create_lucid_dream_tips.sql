DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'tip_difficulty') THEN
        CREATE TYPE tip_difficulty AS ENUM ('beginner', 'intermediate', 'advanced');
    END IF;
END $$;

CREATE TABLE IF NOT EXISTS lucid_dream_tips (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    tip TEXT NOT NULL,
    category VARCHAR(50) NOT NULL,
    difficulty tip_difficulty NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some initial tips
INSERT INTO lucid_dream_tips (tip, category, difficulty) VALUES
    ('Start a dream journal and write down your dreams immediately upon waking', 'Awareness', 'beginner'),
    ('Practice reality checks throughout the day', 'Technique', 'beginner'),
    ('Use the MILD (Mnemonic Induction of Lucid Dreams) technique', 'Technique', 'intermediate'),
    ('Try the Wake Back to Bed (WBTB) method', 'Technique', 'intermediate'),
    ('Practice advanced visualization techniques', 'Mental', 'advanced'),
    ('Experiment with supplements like Vitamin B6', 'Supplements', 'advanced');
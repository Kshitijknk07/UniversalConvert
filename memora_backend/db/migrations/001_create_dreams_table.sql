DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'dream_type') THEN
        CREATE TYPE dream_type AS ENUM ('lucid', 'nightmare', 'fantasy', 'regular');
    END IF;
END $$;

CREATE TABLE IF NOT EXISTS dreams (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    dream_date TIMESTAMP NOT NULL,
    dream_type dream_type NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_dreams_user_id ON dreams(user_id);
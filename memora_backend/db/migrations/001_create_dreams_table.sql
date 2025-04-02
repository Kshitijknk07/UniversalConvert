CREATE TYPE dream_type AS ENUM ('lucid', 'nightmare', 'fantasy', 'regular');

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

CREATE INDEX idx_dreams_user_id ON dreams(user_id);
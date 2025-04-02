CREATE TABLE IF NOT EXISTS shared_dreams (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    dream_id UUID NOT NULL REFERENCES dreams(id),
    user_id UUID NOT NULL REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    is_public BOOLEAN DEFAULT true,
    likes INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS dream_comments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    dream_id UUID NOT NULL REFERENCES shared_dreams(id),
    user_id UUID NOT NULL REFERENCES users(id),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS dream_likes (
    dream_id UUID NOT NULL REFERENCES shared_dreams(id),
    user_id UUID NOT NULL REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (dream_id, user_id)
);
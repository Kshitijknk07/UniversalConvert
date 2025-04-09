CREATE TABLE IF NOT EXISTS dream_images (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    dream_id UUID NOT NULL REFERENCES dreams(id),
    image_url TEXT NOT NULL,
    prompt TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_dream
        FOREIGN KEY(dream_id)
        REFERENCES dreams(id)
        ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_dream_images_dream_id ON dream_images(dream_id);
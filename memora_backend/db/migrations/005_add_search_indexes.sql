CREATE INDEX IF NOT EXISTS idx_dreams_title_description ON dreams USING gin (to_tsvector('english', title || ' ' || description));
CREATE INDEX IF NOT EXISTS idx_dreams_type ON dreams(dream_type);
CREATE INDEX IF NOT EXISTS idx_dreams_date ON dreams(dream_date);
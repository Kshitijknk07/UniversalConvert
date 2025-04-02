CREATE TYPE admin_role AS ENUM ('moderator', 'admin');
CREATE TYPE report_status AS ENUM ('pending', 'reviewed', 'removed');

CREATE TABLE admin_roles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    role admin_role NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id)
);

CREATE TABLE reported_dreams (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    dream_id UUID NOT NULL REFERENCES shared_dreams(id),
    reporter_id UUID NOT NULL REFERENCES users(id),
    reason TEXT NOT NULL,
    status report_status DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reviewed_at TIMESTAMP
);
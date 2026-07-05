-- Create Activities Table
CREATE TABLE activities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT NOT NULL,
  agenda JSONB NOT NULL DEFAULT '[]'::jsonb,
  image TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('Upcoming', 'Past')),
  capacity INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Registrations Table
CREATE TABLE registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  activity_id UUID REFERENCES activities(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  nickname TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  school_university TEXT NOT NULL,
  age INTEGER NOT NULL,
  dietary_restrictions TEXT,
  emergency_contact TEXT NOT NULL,
  consent_given BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on Row Level Security
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Policies for activities (Public Read)
CREATE POLICY "Public profiles are viewable by everyone."
  ON activities FOR SELECT
  USING ( true );

-- Policies for registrations (Public Insert, No Public Read)
CREATE POLICY "Anyone can insert a registration"
  ON registrations FOR INSERT
  WITH CHECK ( true );

-- Seed Data
INSERT INTO activities (title, slug, category, date, time, location, description, image, status, capacity, agenda)
VALUES 
(
  'Sexpectation: The Exhibition', 
  'sexpectation-exhibition', 
  'Gender Team', 
  'August 15, 2026', 
  '10:00 AM - 17:00 PM', 
  'Bangkok Art and Culture Centre', 
  'An interactive art exhibition exploring gender expectations and social perspectives through multidisciplinary artworks by young artists. This immersive experience aims to challenge societal norms and provide a platform for LGBTQIA+ youth to share their narratives.', 
  '/images/gender_art_exhibition_1783175227598.jpg', 
  'Upcoming', 
  100,
  '[{"time": "10:00", "text": "Registration & Welcome"}, {"time": "10:30", "text": "Opening Ceremony & Keynote"}, {"time": "11:00", "text": "Guided Exhibition Tour"}, {"time": "13:00", "text": "Lunch Break"}, {"time": "14:00", "text": "Panel Discussion: Unpacking Expectations"}, {"time": "16:00", "text": "Networking & Closing"}]'::jsonb
),
(
  'Youth Advocacy Equithon', 
  'youth-advocacy-equithon', 
  'Education Team', 
  'September 02, 2026', 
  '09:00 AM - 18:00 PM', 
  'True Digital Park', 
  'A 48-hour hackathon where youth participants collaborate to develop actionable policy proposals for educational equality in Thailand.', 
  '/images/youth_hackathon_1783175238231.jpg', 
  'Upcoming', 
  200,
  '[{"time": "09:00", "text": "Kickoff"}, {"time": "18:00", "text": "Pitching"}]'::jsonb
),
(
  'Thoughtful Trash Project', 
  'thoughtful-trash-project', 
  'Environment Team', 
  'October 10, 2026', 
  '08:00 AM - 12:00 PM', 
  'Lumphini Park', 
  'Hands-on environmental workshops including Trash Hunter activities focused on sustainable waste management and circular economy principles.', 
  '/images/environmental_workshop_1783175249155.jpg', 
  'Upcoming', 
  50,
  '[{"time": "08:00", "text": "Gathering"}, {"time": "12:00", "text": "Wrap up"}]'::jsonb
);

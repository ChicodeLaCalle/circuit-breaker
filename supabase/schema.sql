-- Supabase Schema for Circuit Breaker
-- Run this in the Supabase SQL Editor

-- News Articles Table
CREATE TABLE IF NOT EXISTS news (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Tour', 'Release', 'Label', 'Live', 'Artist', 'Behind the Scenes')),
  featured BOOLEAN DEFAULT false,
  image TEXT DEFAULT '',
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  read_time TEXT DEFAULT '3 min read',
  author_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Artists Table
CREATE TABLE IF NOT EXISTS artists (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  genre TEXT NOT NULL,
  bpm TEXT NOT NULL,
  location TEXT NOT NULL,
  bio TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT DEFAULT 'available' CHECK (status IN ('available', 'on-tour', 'limited', 'booked')),
  price TEXT DEFAULT '€€' CHECK (price IN ('€', '€€', '€€€', '€€€€')),
  image TEXT DEFAULT '',
  instagram TEXT,
  soundcloud TEXT,
  spotify TEXT,
  youtube TEXT,
  featured BOOLEAN DEFAULT false,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  artist_id UUID REFERENCES artists(id) NOT NULL,
  event_name TEXT NOT NULL,
  event_date DATE NOT NULL,
  event_time TEXT NOT NULL,
  location TEXT NOT NULL,
  venue TEXT,
  capacity TEXT NOT NULL,
  budget TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'declined', 'completed')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users (admin access)
CREATE POLICY "Allow full access to authenticated users" ON news
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Allow full access to authenticated users" ON artists
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Allow full access to authenticated users" ON bookings
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Create policies for public read access (for the website)
CREATE POLICY "Allow public read access to published news" ON news
  FOR SELECT TO anon USING (published = true);

CREATE POLICY "Allow public read access to active artists" ON artists
  FOR SELECT TO anon USING (active = true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_artists_updated_at BEFORE UPDATE ON artists
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample artists (optional - remove if you want to start fresh)
INSERT INTO artists (name, slug, genre, bpm, location, bio, description, status, price) VALUES
  ('VOLTAGE', 'voltage', 'Hard Techno / Industrial', '145-160', 'Berlin, DE', 'Industrial powerhouse delivering raw warehouse energy.', 'Industrial powerhouse delivering raw warehouse energy.', 'available', '€€€'),
  ('NEURAL', 'neural', 'Schranz / Hardgroove', '150-165', 'Amsterdam, NL', 'Hypnotic rhythms with mechanical precision.', 'Hypnotic rhythms with mechanical precision.', 'available', '€€€'),
  ('PULSE', 'pulse', 'Hard Techno / Acid', '140-155', 'London, UK', 'Acid-infused hard techno for the underground.', 'Acid-infused hard techno for the underground.', 'available', '€€'),
  ('KINETIC', 'kinetic', 'Industrial / EBM', '138-152', 'Paris, FR', 'Dark EBM influences meet hard techno energy.', 'Dark EBM influences meet hard techno energy.', 'limited', '€€'),
  ('SURGE', 'surge', 'Hard Techno / Raw', '147-162', 'Milan, IT', 'Raw, unfiltered warehouse power.', 'Raw, unfiltered warehouse power.', 'available', '€€€')
ON CONFLICT (slug) DO NOTHING;

-- create_users_table.sql

CREATE TABLE public.users (
  id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  username text,
  created_at timestamp with time zone DEFAULT now() NOT NULL,

  PRIMARY KEY (id)
  -- Add a unique constraint to the username
  CONSTRAINT username_unique UNIQUE (username)
);

-- Set row-level security (RLS) to restrict access
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read their own profiles and other public profiles
CREATE POLICY "Public profiles are viewable by everyone." ON public.users
  FOR SELECT USING (true);

-- Allow users to insert their own profile
CREATE POLICY "Users can insert their own profile." ON public.users
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Allow users to update their own profile
CREATE POLICY "Users can update their own profile." ON public.users
  FOR UPDATE USING (auth.uid() = id);
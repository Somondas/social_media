import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseURL || !supabaseAnonKey) {
  throw new Error("Supabase URL and anon key must be provided.");
}

export const supabase = createClient(supabaseURL, supabaseAnonKey);

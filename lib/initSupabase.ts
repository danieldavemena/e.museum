import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jiscwaegdmzykllfshpd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imppc2N3YWVnZG16eWtsbGZzaHBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5MzMzMjUsImV4cCI6MjA1NTUwOTMyNX0.SICYaMySX3u91ke_Hm6ZBNJqS_O-WNTXJLdSqqnOoA0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

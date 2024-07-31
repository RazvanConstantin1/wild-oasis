import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jovfvtndtvszihljvzbc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvdmZ2dG5kdHZzemlobGp2emJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0MzI3ODAsImV4cCI6MjAzODAwODc4MH0.iFIpbmYCWGYpTwEOGvJ3F8Z3RD_G2WEClk9mWND-Cc4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

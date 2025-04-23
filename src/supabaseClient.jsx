import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wetdpjlxxpeyfismcppa.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndldGRwamx4eHBleWZpc21jcHBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMzE5MjQsImV4cCI6MjA1NTkwNzkyNH0.VvUxOjNA4W-jr2UaZdDfpRzxzcMgDtYuZEJqI-7FMjE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

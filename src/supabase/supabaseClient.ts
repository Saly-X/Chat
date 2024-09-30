import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const SUPABASE_URL = "https://bwlrsissuhsqnbbbwxgn.supabase.co/graphql/v1";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3bHJzaXNzdWhzcW5iYmJ3eGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNTM1MTcsImV4cCI6MjA0MjgyOTUxN30.vbNDxkAt6Xx9GJ2qu4gtWdfXmjpKhYr9DOy8cfwRGyw";

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;

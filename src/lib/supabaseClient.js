import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zbplhrgkgmizvqhhngul.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpicGxocmdrZ21penZxaGhuZ3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyOTcwODYsImV4cCI6MjA2Nzg3MzA4Nn0.tCm4pJLwvdTS3AUNXb6MPBQ0-rxcgG8aubmwYY9iFVw'; // potong panjangnya

export const supabase = createClient(supabaseUrl, supabaseKey);

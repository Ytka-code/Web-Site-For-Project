// 1. Initialize Supabase (replace with your Project URL and Anon Public Key from Supabase -> Settings -> API)
const SUPABASE_URL = 'https://yxgzkryqayqqhlzncokv.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_0NP_gp5n8e8Nv_biormNxA_bpiSdPL7';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
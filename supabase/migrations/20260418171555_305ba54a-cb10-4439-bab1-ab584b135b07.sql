
-- Contact form leads from public website
CREATE TABLE public.contact_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'website_contact_form',
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;

-- Public can INSERT their own lead (anyone can submit the form), no SELECT/UPDATE/DELETE.
-- The site owner reads leads via the Supabase dashboard (service role bypasses RLS).
CREATE POLICY "Anyone can submit a contact lead"
  ON public.contact_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(name) BETWEEN 2 AND 100
    AND char_length(email) BETWEEN 5 AND 255
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND (company IS NULL OR char_length(company) <= 120)
    AND char_length(message) BETWEEN 10 AND 1500
  );

CREATE INDEX idx_contact_leads_created_at ON public.contact_leads(created_at DESC);

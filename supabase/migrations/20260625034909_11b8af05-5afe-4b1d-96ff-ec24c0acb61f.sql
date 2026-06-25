CREATE TABLE public.quote_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text,
  service_type text,
  message text,
  source text DEFAULT 'website',
  status text DEFAULT 'new',
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT ON public.quote_submissions TO authenticated;
GRANT INSERT, SELECT, UPDATE ON public.quote_submissions TO service_role;
GRANT ALL ON public.quote_submissions TO service_role;

ALTER TABLE public.quote_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view all quote submissions"
  ON public.quote_submissions FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Service role can insert quote submissions"
  ON public.quote_submissions FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Only allow inserts via the edge function (service role), no public access
-- No SELECT/UPDATE/DELETE policies = no public read access to submissions
CREATE POLICY "Allow anonymous inserts" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

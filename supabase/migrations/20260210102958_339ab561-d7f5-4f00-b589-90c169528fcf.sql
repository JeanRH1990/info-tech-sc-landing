-- Remove the permissive INSERT policy since the edge function uses service role key
-- This forces all inserts through the validated edge function
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.contact_submissions;
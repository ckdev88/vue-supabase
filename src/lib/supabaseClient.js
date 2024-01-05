import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
	"https://qhobjqykgzcukhtpyfou.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFob2JqcXlrZ3pjdWtodHB5Zm91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2MzU2NjksImV4cCI6MjAwNjIxMTY2OX0.SGUi7HsqGh6j_N7tlLnmqO9YkMC7U1jkvN9frBCXBPA"
);

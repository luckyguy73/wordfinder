import { supabase } from '@lib/supabaseClient';

export async function queryDictionary() {
  const { data } = await supabase.from('dictionary').select();

  return data;
}

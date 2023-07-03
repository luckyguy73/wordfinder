import { supabase } from '@lib/supabaseClient';

export async function queryDictionary() {
  // you can change max rows in supabase api settings
  const { data, error } = await supabase
    .from('wordlist')
    .select('word')
    .eq('word_length', 5)

  // .filter('word_length', 'in', '(5)')
  // .gt('column', 'Greater than')
  // .lt('column', 'Less than')
  // .gte('column', 'Greater than or equal to')
  // .lte('column', 'Less than or equal to')
  // .like('column', '%CaseSensitive%')
  // .ilike('column', '%CaseInsensitive%')
  // .is('column', null)
  // .in('column', ['Array', 'Values'])
  // .neq('column', 'Not equal to')

  // // Arrays
  // .cs('array_column', ['array', 'contains'])
  // .cd('array_column', ['contained', 'by']);

  return { data, error };
}

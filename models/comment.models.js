// Init supabase
import { supabase } from "../config/supabase.js";

async function getAllComment() {
  const { data, error } = await supabase.from('pp_comments').select('*, pp_users(*)');

  if (error) {
    console.error(`Erreur lors de la récupération des commentaires :`, error.message);
    return {
      data: null,
      error:
        `Une erreur s'est produite lors de la récupération des commentaires`,
    };
  }

  return { data, error };
}

async function getComment(id) {
  const { data, error } = await supabase
    .from('pp_comments')
    .select('*, pp_users(*)')
    .eq("id_comment", id);

  if (error) {
    console.error(`Erreur lors de la récupération du commentaire avec l'id ${id} :`, error.message);
    return {
      data: null,
      error:
        `Une erreur s'est produite lors de la récupération du commentaire avec l'id ${id}`,
    };
  }

  return { data, error };
}

export { getAllComment, getComment };

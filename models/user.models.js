// Init supabase
import { supabase } from "../config/supabase.js";

async function getAllUser() {
  const { data, error } = await supabase.from('pp_users').select(`*, pp_comments(*)`);

  console.log(data);

  if (error) {
    console.error(`Erreur lors de la récupération des utilisateurs :`, error.message);
    return {
      data: null,
      error:
        `Une erreur s'est produite lors de la récupération des utilisateurs`,
    };
  }

  return { data, error };
}

async function getUser(id) {
  const { data, error } = await supabase
    .from('pp_users')
    .select(`*, pp_comments(*)`)
    .eq("id_user", id);

  if (error) {
    console.error(`Erreur lors de la récupération de l'utilisateur avec l'id ${id} :`, error.message);
    return {
      data: null,
      error:
        `Une erreur s'est produite lors de la récupération de l'utilisateur avec l'id ${id}`,
    };
  }

  return { data, error };
}

export { getAllUser, getUser };

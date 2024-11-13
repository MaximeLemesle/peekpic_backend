// Init supabase
import { supabase } from "../config/supabase.js";

async function getAllPage() {
  const { data, error } = await supabase.from('pp_pages').select('*');

  if (error) {
    console.error(`Erreur lors de la récupération des pages :`, error.message);
    return {
      data: null,
      error:
        `Une erreur s'est produite lors de la récupération des pages`,
    };
  }

  return { data, error };
}

async function getPage(id) {
  const { data, error } = await supabase
    .from('pp_pages')
    .select('*')
    .eq("id_page", id);

  if (error) {
    console.error(`Erreur lors de la récupération de la page avec l'id ${id} :`, error.message);
    return {
      data: null,
      error:
        `Une erreur s'est produite lors de la récupération de la page avec l'id ${id}`,
    };
  }

  return { data, error };
}

export { getAllPage, getPage };

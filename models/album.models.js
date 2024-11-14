// Init supabase
import { supabase } from "../config/supabase.js";

async function getAllAlbum() {
  const { data, error } = await supabase.from('pp_albums').select('*, pp_pages(*)');

  if (error) {
    console.error(`Erreur lors de la récupération des albums :`, error.message);
    return {
      data: null,
      error:
        `Une erreur s'est produite lors de la récupération des albums`,
    };
  }

  return { data, error };
}

async function getAlbum(id) {
  const { data, error } = await supabase
    .from('pp_albums')
    .select('*, pp_pages(*)')
    .eq("id_album", id);

  if (error) {
    console.error(`Erreur lors de la récupération de l'album avec l'id ${id} :`, error.message);
    return {
      data: null,
      error:
        `Une erreur s'est produite lors de la récupération de l'album avec l'id ${id}`,
    };
  }

  return { data, error };
}

export { getAllAlbum, getAlbum };

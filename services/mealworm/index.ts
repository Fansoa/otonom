export const getRackList = async ({ supabaseClient, userId }) => {
  const response = await supabaseClient
    .from("rack")
    .select("*, crate(*, stage(*), action(*, actionType(*)))")
    .eq("user_id", userId)
    .abortSignal(AbortSignal.timeout(3000));

  return response;
};

export const addRack = async ({ supabaseClient, user_id, name }) => {
  const response = await supabaseClient
    .from("rack")
    .insert([{ name, user_id }])
    .select();

  return response;
};

export const addCrate = async ({ supabaseClient, rack_id, name }) => {
  const response = await supabaseClient
    .from("crate")
    .insert([{ rack_id, name }])
    .select();

  return response;
};

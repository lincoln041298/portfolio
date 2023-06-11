export async function dataUser() {
  const res = await fetch(`auth/api/user/3`);
  const data = await res.json();
  return data;
}

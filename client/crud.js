export async function uploadInfo(fname, lname, email, phone, vmake, vmodel, vyear, wheel, comments) {
  const response = await fetch(
    `/info/upload?fname=${fname}&lname=${lname}&email=${email}&phone=${phone}&vmake=${vmake}&vmodel=${vmodel}&vyear=${vyear}&wheel=${wheel}&comments=${comments}`,
    {
      method: 'POST',
    }
  );
  const data = await response.json();
  return data;
}

export async function readPrice(id) {
    const response = await fetch(`/price/read?id=${id}`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
}
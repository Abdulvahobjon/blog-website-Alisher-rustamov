import { headers } from "next/headers";


async function getData() {
  const headersInstance = headers();
  const authorization = headersInstance.get(
    "xWnvZDK5GO6FLlB8dBMKyQrcOWJws9GPl16s3gf0PnbFYIphYKgMaXejquOQymbU"
  );
  const res = await fetch(
    "http://alisherrustamovblog.pythonanywhere.com/haqida/",
    {
      headers: { authorization },
    }
  );

  return res.json();
}
export default getData
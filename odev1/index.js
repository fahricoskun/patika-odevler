import axios from "axios";

async function getDatas(number) {
  const { data: user_id } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + number
  );
  console.log(user_id);

  const { data: user_post } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + number
  );
  console.log(user_post);
}

export default getDatas;

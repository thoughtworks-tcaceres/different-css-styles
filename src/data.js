import multipleFaker from "multiple-faker";

const attributes = {
  name: ["firstName", "lastName", "jobTitle"],
  phone: ["phoneNumber"]
};
const numRows = 10;
const data = multipleFaker(numRows, attributes);

export default data;

const profile = {
  name: "John",
  age: 30,
  country: "USA",
  links: [
    {
      linkName: "github.com/john",
      id: "twitter.com/john",
    },
    {
      linkName: "facebook.com/john",
      id: "instagram.com/john",
    },
    {
      linkName: "github.com/john",
      id: "twitter.com/john",
    },
  ],
};

const ArrayOfObjects = () => {
  const {links: [{ linkName }, { linkName: linkName1 }] } = profile;

  return (
    <div>
      Array Of Objects value: <strong>{linkName1}</strong>
    </div>
  );
};

export default ArrayOfObjects;

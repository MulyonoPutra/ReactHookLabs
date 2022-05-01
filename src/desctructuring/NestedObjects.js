const NestedObjects = () => {
  const users = {
    name: "John",
    age: 30,
    country: "USA",
    address: {
      city: "New York",
      state: "NY",
    },
  };

  const {
    address: { city, state },
  } = users;

  return (
    <div>
      Nested Objects value: <strong>{city}</strong>
    </div>
  );
};

export default NestedObjects;

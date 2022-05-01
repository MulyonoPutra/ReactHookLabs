const NestedArray = () => {
  const lang = [["php", "js"], "python", "ruby", "scala", "java"];

  const [[one, two], three, four, five] = lang;

  return (
    <div>
      Nested Array value: <strong>{one}, {two}</strong>
    </div>
  );
};

export default NestedArray;

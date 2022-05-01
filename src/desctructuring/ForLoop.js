const ForLoop = () => {
  const links = [
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
  ];

  for (const { linkName, id } of links) {
    console.log(linkName, id);
  }

  return (
    <div>
      ForLoop Desctructuring value: <strong></strong>
    </div>
  );
};

export default ForLoop;

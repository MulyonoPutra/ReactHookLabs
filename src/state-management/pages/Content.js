

function Content() {
  return (
    <>
      {(props) => (
        <div>
          <i>-- Content --</i>
          <div>Languange : {props.lang} </div>
          <p>Theme : ... </p>
        </div>
      )}
    </>
  );
}

export default Content
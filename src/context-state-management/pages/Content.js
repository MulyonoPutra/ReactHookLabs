import { LangConsumer } from "./LanguagePage";

function Content() {
  return (
    <LangConsumer>
      {(props) => (
        <div>
          <i>-- Content --</i>
          <div>Languange : {props.lang} </div>
          <p>Theme : ... </p>
        </div>
      )}
    </LangConsumer>
  );
}

export default Content
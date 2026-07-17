import s from "./Score.module.css";
import Btn from "./Btn";

const Score = (props) => {
  console.log(props.children);

  return (
    <>
      <div className={`bg-amber-700 mb-4 w-40`}>
        <p className={s.name}>이름: {props.children}</p>
        <Btn $primary={true}>클릭</Btn>
        <Btn $primary={false}>클릭</Btn>
      </div>
    </>
  );
};
export default Score;

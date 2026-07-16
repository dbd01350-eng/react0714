import s from "./Score.module.css";
import Btn from './Btn'

const Score = (props) => {
  console.log(props.children);

  return (
    <>
      <div className={s.box}>
        <p className={s.name}>이름: {props.children}</p>
        <Btn></Btn>
      </div>
    </>
  );
};
export default Score;

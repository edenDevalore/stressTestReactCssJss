import { IProfileProps } from "../../utils/mock";
import "./styles.css";
import styles from "./styles";
const IS_CSS = true;

const renderPersonCss = ({
  id,
  first_name,
  last_name,
  email,
  gender,
  phone_number,
  image,
}) => (
  <div className="profileWrapper">
    <img width="50" height="50px" src={image} alt="randomImage" />
    <main>
      <div>
        <p>id:</p>
        <p>{id}</p>
      </div>
      <div>
        <p>first name:</p>
        <p>{first_name}</p>
      </div>
      <div>
        <p>last name: </p>
        <p>{last_name}</p>
      </div>
      <div>
        <p>email:</p>
        <p>{email}</p>
      </div>
      <div>
        <p>gender:</p>
        <p>{gender}</p>
      </div>
      <div>
        <p>phone:</p>
        <p>{phone_number}</p>
      </div>
    </main>
  </div>
);

const renderPersonJss = ({
  id,
  first_name,
  last_name,
  email,
  gender,
  phone_number,
  image,
}) => (
  <div style={styles.profileWrapper}>
    <img width="50" height="50px" src={image} alt="randomImage" />
    <main style={styles.profileWrapperMain}>
      <div style={styles.profileWrapperMainDiv}>
        <p style={styles.profileWrapperMainDivPFirstChild}>id:</p>
        <p style={styles.profileWrapperMainDivPLastChild}>{id}</p>
      </div>
      <div style={styles.profileWrapperMainDiv}>
        <p style={styles.profileWrapperMainDivPFirstChild}>first name:</p>
        <p style={styles.profileWrapperMainDivPLastChild}>{first_name}</p>
      </div>
      <div style={styles.profileWrapperMainDiv}>
        <p style={styles.profileWrapperMainDivPFirstChild}>last name: </p>
        <p style={styles.profileWrapperMainDivPLastChild}>{last_name}</p>
      </div>
      <div style={styles.profileWrapperMainDiv}>
        <p style={styles.profileWrapperMainDivPFirstChild}>email:</p>
        <p style={styles.profileWrapperMainDivPLastChild}>{email}</p>
      </div>
      <div style={styles.profileWrapperMainDiv}>
        <p style={styles.profileWrapperMainDivPFirstChild}>gender:</p>
        <p style={styles.profileWrapperMainDivPLastChild}>{gender}</p>
      </div>
      <div style={styles.profileWrapperMainDiv}>
        <p style={styles.profileWrapperMainDivPFirstChild}>phone:</p>
        <p style={styles.profileWrapperMainDivPLastChild}>{phone_number}</p>
      </div>
    </main>
  </div>
);

const Profile = ({
  id,
  first_name,
  last_name,
  email,
  gender,
  phone_number,
  image,
  index,
  startTime,
  length,
  calculateTime,
}) => {
  if (length && index === length - 1) {
    calculateTime(startTime, new Date().getTime());
  }
  return IS_CSS
    ? renderPersonCss({id,first_name,last_name,email,gender,phone_number,image})
    : renderPersonJss({id,first_name,last_name,email,gender,phone_number,image});
};

export default Profile;

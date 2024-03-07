import { Profile } from "@liff/get-profile";

type TProfileLineProps = {
  user: Profile;
};

const ProfileLine = (props: TProfileLineProps) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>userId</th>
          <td>{props.user.userId}</td>
        </tr>

        <tr>
          <th>displayName</th>
          <td>
            <i>{props.user.displayName}</i>
          </td>
        </tr>

        <tr>
          <th>statusMessage</th>
          <td>{props.user.statusMessage}</td>
        </tr>

        <tr>
          <th>pictureUrl</th>
          <td>
            <img
              src={props.user.pictureUrl}
              alt="profile"
              style={{ width: "2rem", height: "2rem", borderRadius: "50%" }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProfileLine;

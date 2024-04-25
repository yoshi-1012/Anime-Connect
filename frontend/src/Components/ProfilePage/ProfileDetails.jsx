import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import ProfileNotAuthenicated from "./ProfileNotAuthenicated";
import ProfileAuthenticated from "./ProfileAuthenticated";
import ReactPlayer from 'react-player/youtube'

const ProfileDetails = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Box flex={4} padding="25px">
      {isAuthenticated ? <ProfileAuthenticated /> : <ProfileNotAuthenicated />}
      <ReactPlayer url='<https://www.youtube.com/watch?v=aL27fX5kv9U>' />
    </Box>
  );
};
export default ProfileDetails;

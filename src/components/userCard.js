import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function OutlinedCard() {
  const userDetails = useSelector((state) => state?.registrationForm);
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Name
            </Typography>
            <Typography variant="h6" component="div">
              {userDetails.firstName}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Age
            </Typography>
            <Typography variant="h6" component="div">
              {userDetails.age}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Email
            </Typography>
            <Typography variant="h6" component="div">
              {userDetails.email}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Phone Number
            </Typography>
            <Typography variant="h6" component="div">
              {userDetails.phoneNumber}
            </Typography>
          </CardContent>
        </>
      </Card>
    </Box>
  );
}

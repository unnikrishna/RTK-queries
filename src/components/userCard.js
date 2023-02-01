import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function OutlinedCard() {
  const users = useSelector((state) => state?.registrationForm?.users);
  return (
    <Box sx={{ minWidth: 275 }}>
      {users.map((items) => {
        return (
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
                  {items.firstName}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Age
                </Typography>
                <Typography variant="h6" component="div">
                  {items.age}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Email
                </Typography>
                <Typography variant="h6" component="div">
                  {items.email}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Phone Number
                </Typography>
                <Typography variant="h6" component="div">
                  {items.phoneNumber}
                </Typography>
              </CardContent>
            </>
          </Card>
        );
      })}
      
    </Box>
  );
}

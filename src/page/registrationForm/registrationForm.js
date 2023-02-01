import { useState } from "react";
import { useDispatch } from "react-redux";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  handleChange,
  handleSubmit,
  registrationFormFields,
} from "../../handlers/util";
import Footer from "../../components/footer";
import UserCard from "../../components/userCard";
import { setForm } from "../../reducers/registration/reducer";
import { registrationFormList } from "./form";

const theme = createTheme();

export default function SignUp() {
  const [formValues, setFormValues] = useState(registrationFormFields);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: red[900] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={(e) =>
              handleSubmit({ e, setFormValues, formValues, setForm, dispatch })
            }
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {
                registrationFormList.map(fields=>{
                  return (
                    <TextField
                      name={fields.id}
                      required={fields.required}
                      fullWidth={fields.fullWidth}
                      id={fields.id}
                      inputProps={fields.inputProps && fields.inputProps}
                      label={fields.label}
                      autoFocus={fields.autoFocus}
                      value={formValues[fields.id].value}
                      onChange={(e) =>
                        handleChange({ e, setFormValues, formValues })
                      }
                      error={formValues[fields.id].error}
                      helperText={
                        formValues[fields.id].error &&
                        formValues[fields.id].errorMessage[
                          formValues[fields.id].errorType
                        ]
                      }
                    />
                  );
                })
              }
              {/* <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  inputProps={{ maxLength: 25 }}
                  label="Name"
                  autoFocus
                  value={formValues.firstName.value}
                  onChange={(e) =>
                    handleChange({ e, setFormValues, formValues })
                  }
                  error={formValues.firstName.error}
                  helperText={
                    formValues.firstName.error &&
                    formValues.firstName.errorMessage[
                      formValues.firstName.errorType
                    ]
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formValues.email.value}
                  onChange={(e) =>
                    handleChange({ e, setFormValues, formValues })
                  }
                  error={formValues.email.error}
                  helperText={
                    formValues.email.error &&
                    formValues.email.errorMessage[formValues.email.errorType]
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  inputProps={{ minLength: 2, maxLength: 3 }}
                  name="age"
                  autoComplete="age"
                  value={formValues.age.value}
                  onChange={(e) =>
                    handleChange({ e, setFormValues, formValues })
                  }
                  error={formValues.age.error}
                  helperText={
                    formValues.age.error &&
                    formValues.age.errorMessage[formValues.age.errorType]
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="phoneNumber"
                  inputProps={{ minLength: 10, maxLength: 10 }}
                  id="phoneNumber"
                  autoComplete="new-phoneNumber"
                  value={formValues.phoneNumber.value}
                  onChange={(e) =>
                    handleChange({ e, setFormValues, formValues })
                  }
                  error={formValues.phoneNumber.error}
                  helperText={
                    formValues.phoneNumber.error &&
                    formValues.phoneNumber.errorMessage[
                      formValues.phoneNumber.errorType
                    ]
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  inputProps={{ minLength: 8, maxLength: 16 }}
                  autoComplete="new-password"
                  value={formValues.password.value}
                  onChange={(e) =>
                    handleChange({ e, setFormValues, formValues })
                  }
                  error={formValues.password.error}
                  helperText={
                    formValues.password.error &&
                    formValues.password.errorMessage[
                      formValues.password.errorType
                    ]
                  }
                />
              </Grid> */}
            </Grid>

            <Button
              onClick={() => setFormValues(registrationFormFields)}
              variant="outlined"
              color="secondary"
              sx={{ m: 3 }}
            >
              Reset
            </Button>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              sx={{ m: 3 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <UserCard sx={{ mt: 5 }} />
        <Footer sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { Trash2 } from "lucide-react";

const Todo = ({ todo }) => {
  const { title, description, isCompleted } = todo;

  let [completed, setCompleted] = useState(isCompleted);

  return (
    <Card sx={{ maxWidth: 250 }}>
      <Stack justifyContent={"space-between"} boxSizing={"border-box"}>
        <CardContent
          sx={{
            paddingBlockEnd: 0,
            position: "relative",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            align="center"
            mt={1}
          >
            {title}
          </Typography>
          <Typography variant="body1" my={2}>
            {description}
          </Typography>
          <Typography
            variant="body1"
            color={completed ? "green" : "red"}
            sx={{ position: "absolute", top: 3, left: 3 }}
          >
            {completed ? (
              <CheckCircleOutlineIcon sx={{ color: "rgb(139, 216, 23)" }} />
            ) : (
              <PanoramaFishEyeIcon sx={{ color: "rgb(184, 184, 184)" }} />
            )}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            size="medium"
            variant="contained"
            disabled={completed}
            onClick={() => setCompleted(true)}
          >
            Mark as Done
          </Button>
          <Button
            size="medium"
            variant="contained"
            color="error"
            onClick={() => setCompleted(true)}
          >
            <Trash2 />
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default Todo;
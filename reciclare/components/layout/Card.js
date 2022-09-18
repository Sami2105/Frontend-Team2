import React from "react";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  IconButton,
  Avatar,
  Typography
} from "@material-ui/core/";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";

export default function Cards() {
  return (
    <Container maxWidth="sm">
      <CardActionArea>
        <Card>
          <CardHeader
            avatar={<Avatar alt="placeholder">p</Avatar>}
            action={
              <IconButton>
                <ThumbUpOutlinedIcon />
              </IconButton>
            }
            title="a title"
            subheader="a sub header"
          />
          <CardContent>
            <Typography variant="h6">{"some content"}</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Container>
  );
}
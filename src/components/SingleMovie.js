import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format, subHours } from "date-fns";
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { BlogCommentAdd } from "./movie/movie-comment-add";
import { BlogComment } from "./movie/movie-comment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ImageView from "./ImageView";

const comments = [
  {
    id: "d0ab3d02ef737fa6b007e35d",
    authorAvatar: "/static/mock-images/avatars/avatar-alcides_antonio.png",
    authorName: "Alcides Antonio",
    authorRole: "Product Designer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: subHours(new Date(), 2).getTime(),
    isLiked: true,
    likes: 12,
  },
  {
    id: "3ac1e17289e38a84108efdf3",
    authorAvatar: "/static/mock-images/avatars/avatar-jie_yan_song.png",
    authorName: "Jie Yan Song",
    authorRole: "Web Developer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    createdAt: subHours(new Date(), 8).getTime(),
    isLiked: false,
    likes: 8,
  },
];

const SingleMovie = ({ post }) => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Link to="/">
            <Button startIcon={<ArrowBackIcon fontSize="small" />}>Back</Button>
          </Link>

          <Chip label={post?.Type} />
          <Typography sx={{ mt: 3 }} variant="h3">
            {post?.Title}
          </Typography>
          <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
            {post.Plot}
          </Typography>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              mt: 3,
            }}
          >
            <Avatar />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2">By {post.Writer} •</Typography>
              {/* <Typography color="textSecondary" variant="body2">
                {`${post.readTime} read`}
              </Typography> */}
            </Box>
          </Box>
          <ImageView imageUrl={post.Poster} />
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // height: "100vh",
            }}
          >
            <img
              src={post.Poster}
              alt="Full Image"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Box> */}

          <Divider sx={{ my: 3 }} />
          {comments.map((comment) => (
            <BlogComment key={comment.id} {...comment} />
          ))}
          <Divider sx={{ my: 3 }} />
          <BlogCommentAdd />
        </Container>
      </Box>
    </>
  );
};

export default SingleMovie;

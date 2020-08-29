import React, { useState, useEffect, createRef } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import classNames from "classnames";

import useStyles from "./styles";

// further destructering article property inside props destructure
const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  index,
  activeArticle,
}) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (index === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [index, activeArticle, elRefs]);

  return (
    <Card
      ref={elRefs[index]}
      className={classNames(
        classes.card,
        activeArticle === index ? classes.activeCard : null
      )}
    >
      {/*CardActionArea is the clickable area*/}
      <CardActionArea href={url} target="_blank">
        {/*CardMedia is for photo*/}
        {/*Material UI card-media needs to have a const height defined for us to be able to see images */}
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "https://endivesoftware.com/blog/wp-content/uploads/2019/09/news-1.jpg"
          }
        />
        <div className={classes.details}>
          {/*Typography is for text, variant means text-size-style type*/}
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        {/*GutterBottom means margin and padding at the bottom*/}
        <Typography className={classes.title} gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/*Area for actual actions like buttons*/}
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {index + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;

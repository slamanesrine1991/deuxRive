import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import ShowMore from 'react-show-more';
import "./centCard.css"

const useStyles = makeStyles(theme => ({
  cover: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    marginRight: "25px"
  },
  expand: {
    color:'#343a40',
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    color:'#343a40',
    transform: 'rotate(180deg)'
  }
}));

function MediaControlCard({ item }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  return (
        <div className="post">
          <CardMedia
            className={classes.cover}
            image={
              item.photo
                ? item.photo
                : 'https://pics.pof.com/static_assets_v1/images/responsive/profileImages/profileImage_nonGender-220.png'
            }
            title={item.name}
          />
            <div className="bio">
              <h2 className="card-title">{item.name.toUpperCase()}</h2>
            <ShowMore
                lines={3}
                more={
                  <i className="fas fa-chevron-down expand"
                    onClick={handleExpandClick}
                    />
                }
                less={
                  <i className="fas fa-chevron-up expand-up"
                    onClick={handleExpandClick}
                  />
                }
              >
                {item.bio}
              </ShowMore>
            </div>
        </div>

  );
}

export default MediaControlCard;

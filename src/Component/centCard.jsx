import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardMedia from '@material-ui/core/CardMedia';
import ShowMore from 'react-show-more';
import "./centCard.css"

const useStyles = makeStyles(theme => ({
  // card: {
  //   display: 'flex',
  //   minWidth: 500,
  //   // maxWidth: 600,
  //   borderRadius: 0,
  //   border: 'none',
  //   // boxShadow: 'none'
  //   boxShadow: 'rgb(225, 225, 225) 20px 20px 50px'
  // },
  // details: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   width: '60%'
  // },
  // content: {
  //   // flex: "1 0 auto"
  // },
  cover: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    marginRight: "25px"
    // flex: "1 0 auto"
  },
  // controls: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   paddingLeft: theme.spacing(1),
  //   paddingBottom: theme.spacing(1)
  // },
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
        <div className="post bg-white p-1 my-1">
          <div>
          <CardMedia
            className={classes.cover}
            image={
              item.photo
                ? item.photo
                : 'https://pics.pof.com/static_assets_v1/images/responsive/profileImages/profileImage_nonGender-220.png'
            }
            title={item.name}
          />
          </div>
          <div>
            <div className="my-1 bio">
              <h2 className="card-title">{item.name.toUpperCase()}</h2>
            <ShowMore
                lines={3}
                more={
                  <i className="fas fa-chevron-down expand"
                    onClick={handleExpandClick}/>
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
            {/* <button type="button" className="btn btn-light">
              <i className="fas fa-thumbs-up" />
              <span>4</span>
            </button> */}
          </div>

          {/* <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                  {item.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <ShowMore
                    // {* Default options *}
                    lines={2}
                    more={
                      <ExpandMoreIcon
                        className={classes.expand}
                        onClick={handleExpandClick}
                      />
                    }
                    less={
                      <ExpandMoreIcon
                        className={classes.expandOpen}
                        onClick={handleExpandClick}
                      />
                    }
                  >
                    {item.bio}
                  </ShowMore>
                </Typography>
              </CardContent>
            </div>
          </Card> */}
        </div>

  );
}

export default MediaControlCard;

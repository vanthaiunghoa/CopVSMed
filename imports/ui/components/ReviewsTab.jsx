import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Hidden, AppBar, Tabs, Tab, Container, Grid, Typography,
  Avatar, ExpansionPanel, ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import {
  StarBorder, ExpandMore,
} from '@material-ui/icons';
import CommentTab from './CommentTab.jsx';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: 'url(https://static.makeuseof.com/wp-content/uploads/2019/03/typing-games-670x335.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  tabHeader: {
    boxShadow: 'none',
    backgroundColor: '',
  },
  reviewerName: {
    color: '#ffffff',
  },
  avater: {
    border: '2px solid #ffffff',
    width: '60px',
    height: '60px',
    marginBottom: '20px',
  },
  indicator: {
    display: 'none',
  },
  color: {
    backgroundImage: 'linear-gradient(rgba(98, 50, 50, 0.9) 10%, rgba(98, 50, 50, 1))',
    paddingTop: '70px',
    paddingBottom: '70px',
  },
  panel: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  arrowIcon: {
    color: '#ffffff',
  },
  ReviewText: {
    color: '#ffffff',
  },
  avaterSmall: {
    border: '2px solid #ffffff',
    width: '60px',
    height: '60px',
  },
}));

const Reviews = [
  {
    stars: 4,
    img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
    name: 'Tadjaoki Nabukagava',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?',
  },
  {
    stars: 5,
    img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
    name: 'Tadjaoki Nabukagava',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?',
  },
  {
    stars: 4,
    img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
    name: 'Tadjaoki Nabukagava',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?',
  },
];

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff7270',
  },
  iconHover: {
    color: '#ff7270',
  },
  iconEmpty: {
    color: '#ff7270',
  },
})(Rating);

const StyledTab = withStyles({
  selected: {
    color: '#ff7270',
  },
})(Tab);

const getLabelText = (value) => `${value} Star${value !== 1 ? 's' : ''}`;

const ReviewsTab = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.color}>
        <Hidden smDown>
          <AppBar position="static" className={classes.tabHeader} >
            <Tabs TabIndicatorProps={{ className: classes.indicator }} value={value} onChange={handleChange} centered aria-label="simple tabs example">
              {Reviews.map((element, index) => (
                <StyledTab
                  selected
                  key={index}
                  className="lightText middleText"
                  icon={(
                    <>
                      <Avatar className={classes.avater} src={element.img} alt={element.name} />
                      <Typography className={`${classes.reviewerName} lightboldText`}>{element.name}</Typography>
                      <StyledRating
                        name={element.name}
                        value={element.stars}
                        getLabelText={getLabelText}
                        precision={0.5}
                        emptyIcon={<StarBorder fontSize="inherit" />}
                        readOnly
                      />
                    </>
                      )}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </AppBar>
          {Reviews.map((element, index) => (
            <CommentTab value={value} tabIndex={index} key={index} review={element} />
          ))}
        </Hidden>
        <Hidden mdUp>
          <Container>
            {Reviews.map((element, index) => (
              <ExpansionPanel key={index} className={classes.panel} >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMore className={classes.arrowIcon} />}
                  aria-controls={`panel${index + 1}a-content`}
                  id={`panel${index + 1}a-header`}
                >
                  <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                    <Grid item sm={4} xs={4}>
                      <Avatar className={classes.avaterSmall} src={element.img} alt={element.name} />
                    </Grid>
                    <Grid container item sm={6} xs={6}>
                      <Grid item>
                        <Typography className={`${classes.reviewerName} lightboldText`}>{element.name}</Typography>
                      </Grid>
                      <Grid item sm={12} xs={12}>
                        <StyledRating
                          name={element.name}
                          value={element.stars}
                          getLabelText={getLabelText}
                          precision={0.5}
                          emptyIcon={<StarBorder fontSize="inherit" />}
                          readOnly
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography className={`${classes.ReviewText} lightText `}>
                    {element.text}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
          </Container>
        </Hidden>
      </div>
    </div>
  );
};

export default ReviewsTab;
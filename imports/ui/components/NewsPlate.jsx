import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActionArea, CardContent, Typography,
} from '@material-ui/core';
import { QuestionAnswer } from '@material-ui/icons';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  post: {
    maxWidth: '300px',
    padding: '16px!important',
    paddingTop: '40%!important',
  },
  card: {
    padding: '0!important',
    backgroundColor: 'rgba(98, 50, 50, 0.8)',
  },
  plate: {
    borderRadius: '0',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  newsDate: {
    color: '#ffffff',
  },
  newsName: {
    color: '#ffffff',
  },
  newsComments: {
    color: '#ff7270',
    fontSize: '13px',
    padding: '5px',
  },
  newsCommentsText: {
    position: 'absolute',
    display: 'inline',
  },
});

const NewsPlateComponent = (props) => {
  const {
    post,
    lang,
  } = props;
  const classes = useStyles();
  return (
    <Card className={classes.plate} style={{ backgroundImage: `url(${post.img})` }}>
      <CardContent className={classes.card}>
        <CardActionArea href={`/news/${post.id}`}>
          <CardContent className={classes.post}>
            <Typography className={`${classes.newsDate} lightboldText`}>
              {post.date}
            </Typography>
            <Typography className={`${classes.newsName} lightText`}>
              {post.name[lang] || post.name['en']}
            </Typography>
            <div className={`${classes.newsComments} lightText`}>
              <QuestionAnswer style={{ paddingRight: '5px' }} />
              <Typography className={`${classes.newsCommentsText} lightText`}>
                {post.commentsNum}
                {' '}
                {(post.commentsNum === 1) ? 'Comment' : 'Comments'}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </CardContent>
    </Card>
  );
};

NewsPlateComponent.propTypes = {
  post: PropTypes.any.isRequired,
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    lang: state.i18nState.lang,
    post: ownProps.post,
  };
};

const NewsPlate = connect(
  mapStateToProps,
)(NewsPlateComponent);


export default NewsPlate;

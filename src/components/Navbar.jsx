import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {NavLink} from 'react-router-dom';
import {searchterm,turnonsearchmode,turnoffsearchmode,filteredpost} from '../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const [hint ,sethint] = React.useState('');
  const allpost = useSelector(state => state.allpost);
  const dispatch = useDispatch();
// handle changes in searchbar it on the searchmode if searchbar contain some text and
// turn off serachmode if searchbar is empty. It also call filterpost function which
 // filters the post according to the text wriiten in searchbar
  function handleChange(event) {
    if(event.target.value){
      dispatch(turnonsearchmode());
      history.push('/');
    }else{
      dispatch(turnoffsearchmode());
    }
    sethint(event.target.value);
    dispatch(searchterm(event.target.value));
    filterpost();
  }
  // function to filter the posts that contain the spicific text written in the searchbar.
  function filterpost(){
    const filterposts = allpost.filter(post => JSON.stringify(post).toLowerCase().includes(hint.toLowerCase()));
    console.log(filterposts);
    dispatch(filteredpost(filterposts));
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            CEA Assignment
          </Typography>
          <NavLink  exact  to="/" activeClassName="activelink" className="headerlink">
          <HomeIcon />
          </NavLink>
          <NavLink  exact activeClassName="activelink" to="/likepost" className="headerlink">
          <FavoriteIcon />
          </NavLink>
          <NavLink  exact activeClassName="activelink" to="/dislikepost" className="headerlink">
          <ThumbDownIcon />
          </NavLink>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
            onChange={(event)=>{handleChange(event)}}
            value={hint}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
             inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}